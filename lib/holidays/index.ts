import catalog from "@/data/holidays/catalog.json";
import holidays2025 from "@/data/holidays/2025.json";
import holidays2026 from "@/data/holidays/2026.json";
import holidays2027 from "@/data/holidays/2027.json";

export type HolidayEntry = {
  date: string;
  name: string;
  type: "national" | "autonomic" | "local";
  source: string;
};

export type YearHolidays = {
  year: number;
  syncedAt: string;
  sources: {
    nationalAndAutonomic: string;
    local: string;
    localLabel: string;
  };
  holidays: HolidayEntry[];
};

const BY_YEAR: Record<number, YearHolidays> = {
  2025: holidays2025 as YearHolidays,
  2026: holidays2026 as YearHolidays,
  2027: holidays2027 as YearHolidays,
};

export const OFFICIAL_CALENDAR_URL =
  "https://www.granada.org/inet/wordenanz.nsf/calendario?open=&tipo=f";

export function getAvailableHolidayYears(): number[] {
  return Object.keys(catalog.years)
    .map(Number)
    .sort();
}

export function getGranadaHolidays(year: number): YearHolidays | null {
  return BY_YEAR[year] ?? null;
}

/** Fecha YYYY-MM-DD en zona Europe/Madrid */
export function getMadridIsoDate(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function findHoliday(
  isoDate: string,
  year = Number(isoDate.slice(0, 4)),
): HolidayEntry | undefined {
  const data = getGranadaHolidays(year);
  return data?.holidays.find((h) => h.date === isoDate);
}

export function getUpcomingHolidays(
  fromDate = new Date(),
  limit = 6,
): Array<HolidayEntry & { year: number }> {
  const today = getMadridIsoDate(fromDate);
  const years = getAvailableHolidayYears();
  const all: Array<HolidayEntry & { year: number }> = [];

  for (const year of years) {
    const data = getGranadaHolidays(year);
    if (!data) continue;
    for (const h of data.holidays) {
      if (h.date >= today) all.push({ ...h, year });
    }
  }

  return all.sort((a, b) => a.date.localeCompare(b.date)).slice(0, limit);
}
