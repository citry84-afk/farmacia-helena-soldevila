/**
 * Estado abierto/cerrado según horario de PHARMACY (zona Europe/Madrid).
 * No contempla festivos: usar holidaysNote en la UI.
 */

export type OpenStatus = {
  isOpen: boolean;
  badge: string;
  detail: string;
};

type Slot = { start: number; end: number };

const WEEKDAY: Slot[] = [
  { start: 9 * 60, end: 14 * 60 },
  { start: 17 * 60, end: 20 * 60 + 30 },
];

const SATURDAY: Slot[] = [{ start: 9 * 60 + 30, end: 13 * 60 + 30 }];

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

function nextOpening(day: number, minutes: number): { day: number; slot: Slot } | null {
  for (let offset = 0; offset <= 7; offset++) {
    const d = (day + offset) % 7;
    const daySlots = slotsForDay(d);
    for (const slot of daySlots) {
      if (offset === 0 && minutes >= slot.end) continue;
      if (offset === 0 && minutes < slot.start) return { day: d, slot };
      if (offset > 0) return { day: d, slot };
    }
  }
  return null;
}

const DAY_NAMES = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

export function getPharmacyOpenStatus(now = new Date()): OpenStatus {
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

  const upcoming = slots.find((s) => minutes < s.start);
  if (upcoming) {
    return {
      isOpen: false,
      badge: "Cerrado ahora",
      detail: `Abre hoy a las ${formatTime(upcoming.start)}`,
    };
  }

  const next = nextOpening(day, minutes);
  if (!next) {
    return {
      isOpen: false,
      badge: "Cerrado ahora",
      detail: "Consulta horario por teléfono o WhatsApp",
    };
  }

  const isToday = next.day === day;
  const dayLabel = isToday ? "hoy" : `el ${DAY_NAMES[next.day]}`;

  return {
    isOpen: false,
    badge: "Cerrado ahora",
    detail: `Abre ${dayLabel} a las ${formatTime(next.slot.start)}`,
  };
}
