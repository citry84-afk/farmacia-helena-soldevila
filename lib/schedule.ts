import type { HolidayEntry } from "@/lib/holidays";
import { findHoliday, getMadridIsoDate } from "@/lib/holidays";

export type OpenStatus = {
  isOpen: boolean;
  badge: string;
  detail: string;
  isHoliday?: boolean;
  holidayName?: string;
};

type Slot = { start: number; end: number };

const WEEKDAY: Slot[] = [
  { start: 9 * 60, end: 14 * 60 },
  { start: 17 * 60, end: 20 * 60 + 30 },
];

const SATURDAY: Slot[] = [{ start: 9 * 60 + 30, end: 13 * 60 + 30 }];

const DAY_NAMES = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

function getMadridDayAndMinutes(date = new Date()): { day: number; minutes: number } {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return { day: dayMap[weekday] ?? 1, minutes: hour * 60 + minute };
}

function getMadridWeekdayFromIso(iso: string): number {
  const noon = new Date(`${iso}T12:00:00`);
  return getMadridDayAndMinutes(noon).day;
}

function formatTime(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function slotsForDay(day: number): Slot[] {
  if (day === 0) return [];
  if (day === 6) return SATURDAY;
  return WEEKDAY;
}

function addDaysToIso(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

function holidayStatus(holiday: HolidayEntry): OpenStatus {
  const typeLabel =
    holiday.type === "local"
      ? "festivo local"
      : holiday.type === "autonomic"
        ? "festivo en Andalucía"
        : "festivo nacional";

  return {
    isOpen: false,
    badge: "Cerrado — festivo",
    detail: `${holiday.name} (${typeLabel})`,
    isHoliday: true,
    holidayName: holiday.name,
  };
}

function nextOpenDetail(iso: string, day: number, minutes: number): string {
  for (let offset = 0; offset <= 14; offset++) {
    const checkIso = addDaysToIso(iso, offset);
    if (findHoliday(checkIso)) continue;

    const weekday = getMadridWeekdayFromIso(checkIso);
    const slots = slotsForDay(weekday);

    for (const slot of slots) {
      if (offset === 0 && minutes >= slot.end) continue;
      if (offset === 0) {
        return `Abre hoy a las ${formatTime(slot.start)}`;
      }
      return `Abre el ${DAY_NAMES[weekday]} a las ${formatTime(slot.start)}`;
    }
  }
  return "Consulta horario por teléfono o WhatsApp";
}

/** Horario de hoy en texto legible (o festivo) */
export function getTodayScheduleLabel(now = new Date()): string {
  const iso = getMadridIsoDate(now);
  const holiday = findHoliday(iso);
  if (holiday) return `Hoy festivo: ${holiday.name}. Cerrado.`;

  const { day } = getMadridDayAndMinutes(now);
  const slots = slotsForDay(day);

  if (slots.length === 0) {
    return "Hoy domingo: cerrado.";
  }

  const parts = slots.map(
    (s) => `${formatTime(s.start)}–${formatTime(s.end)}`,
  );
  return `Hoy: ${parts.join(" y ")}`;
}

export function getPharmacyOpenStatus(now = new Date()): OpenStatus {
  const iso = getMadridIsoDate(now);
  const holiday = findHoliday(iso);
  if (holiday) return holidayStatus(holiday);

  const { day, minutes } = getMadridDayAndMinutes(now);
  const slots = slotsForDay(day);

  for (const slot of slots) {
    if (minutes >= slot.start && minutes < slot.end) {
      return {
        isOpen: true,
        badge: "Abierto ahora",
        detail: `Cierra a las ${formatTime(slot.end)}`,
      };
    }
  }

  return {
    isOpen: false,
    badge: "Cerrado ahora",
    detail: nextOpenDetail(iso, day, minutes),
  };
}
