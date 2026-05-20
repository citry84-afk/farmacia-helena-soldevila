#!/usr/bin/env node
/**
 * Sincroniza festivos laborales de Granada:
 * - Nacionales y andaluces: API Nager.Date (ES + ES-AN)
 * - Traslados oficiales Andalucía: Todos los Santos y Constitución si caen en domingo
 * - Locales Granada: data/granada-local-holidays.json (Ayuntamiento)
 *
 * Fuente oficial: https://www.granada.org/inet/wordenanz.nsf/calendario?open=&tipo=f
 * Decreto Andalucía 2026: https://www.granada.org/inet/wordenanz.nsf/wwcalendar/1BFBA86752D30F07C1258C8F0020301E!open&windice=0
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const localPath = join(root, "data/granada-local-holidays.json");
const outDir = join(root, "data/holidays");

const YEARS = [
  new Date().getFullYear() - 1,
  new Date().getFullYear(),
  new Date().getFullYear() + 1,
].filter((y, i, a) => a.indexOf(y) === i);

const ANDALUCIA_DECREE_URL =
  "https://www.granada.org/inet/wordenanz.nsf/wwcalendar/1BFBA86752D30F07C1258C8F0020301E!open&windice=0";

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function parseLocalConfig() {
  return JSON.parse(readFileSync(localPath, "utf8"));
}

/** Traslado al lunes si la fiesta cae en domingo (Decreto fiestas laborales Andalucía) */
function applyAndaluciaSundayTransfers(holidays, year) {
  const byDate = new Map(holidays.map((h) => [h.date, h]));

  const transfers = [
    { month: 11, day: 1, name: "Todos los Santos (trasladado)", movedName: "Todos los Santos" },
    {
      month: 12,
      day: 6,
      name: "Día de la Constitución (trasladado)",
      movedName: "Día de la Constitución Española",
    },
  ];

  for (const t of transfers) {
    const d = new Date(Date.UTC(year, t.month - 1, t.day));
    if (d.getUTCDay() !== 0) continue;

    const original = `${year}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
    const monday = new Date(d);
    monday.setUTCDate(monday.getUTCDate() + 1);
    const moved = isoDate(monday);

    byDate.delete(original);
    byDate.set(moved, {
      date: moved,
      name: t.name,
      type: "autonomic",
      source: ANDALUCIA_DECREE_URL,
    });
  }

  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

async function fetchNagerYear(year) {
  const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/ES`);
  if (!res.ok) throw new Error(`Nager API ${year}: ${res.status}`);
  return res.json();
}

async function buildYear(year, localConfig) {
  const nager = await fetchNagerYear(year);
  const regional = nager
    .filter((h) => h.global === true || (h.counties && h.counties.includes("ES-AN")))
    .map((h) => ({
      date: h.date,
      name: h.localName,
      type: h.global ? "national" : "autonomic",
      source: "https://date.nager.at",
    }));

  let merged = applyAndaluciaSundayTransfers(regional, year);

  const locals = localConfig.years[String(year)] ?? [];
  for (const loc of locals) {
    merged = merged.filter((h) => h.date !== loc.date);
    merged.push({
      date: loc.date,
      name: loc.name,
      type: "local",
      source: loc.source ?? localConfig.officialCalendarUrl,
    });
  }

  merged.sort((a, b) => a.date.localeCompare(b.date));

  return {
    year,
    syncedAt: new Date().toISOString(),
    sources: {
      nationalAndAutonomic: "https://date.nager.at/api/v3/PublicHolidays/{year}/ES + traslados BOJA Andalucía",
      local: localConfig.officialCalendarUrl,
      localLabel: localConfig.localSourceLabel,
    },
    holidays: merged,
  };
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  const localConfig = parseLocalConfig();
  const catalog = { generatedAt: new Date().toISOString(), years: {} };

  for (const year of YEARS) {
    console.log(`Sincronizando festivos Granada ${year}…`);
    const data = await buildYear(year, localConfig);
    writeFileSync(join(outDir, `${year}.json`), JSON.stringify(data, null, 2));
    catalog.years[year] = {
      count: data.holidays.length,
      syncedAt: data.syncedAt,
    };
  }

  writeFileSync(join(outDir, "catalog.json"), JSON.stringify(catalog, null, 2));
  console.log("✓ Guardado en data/holidays/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
