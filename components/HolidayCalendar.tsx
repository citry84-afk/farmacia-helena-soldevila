import {
  getAvailableHolidayYears,
  getGranadaHolidays,
  getMadridIsoDate,
  getUpcomingHolidays,
  OFFICIAL_CALENDAR_URL,
} from "@/lib/holidays";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

const TYPE_LABELS = {
  national: "Nacional",
  autonomic: "Andalucía",
  local: "Granada ciudad",
} as const;

function formatDisplayDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Madrid",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

export function HolidayCalendar() {
  const today = getMadridIsoDate();
  const currentYear = Number(today.slice(0, 4));
  const yearData = getGranadaHolidays(currentYear);
  const upcoming = getUpcomingHolidays(new Date(), 8);
  const todayHoliday = yearData?.holidays.find((h) => h.date === today);

  return (
    <section
      id="festivos-granada"
      className="scroll-mt-32 section-pad bg-surface"
      aria-labelledby="holidays-heading"
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Calendario oficial"
            title="Festivos laborales en Granada"
            description="Sincronizado con el calendario del Ayuntamiento de Granada y fiestas nacionales y autonómicas. La farmacia permanece cerrada estos días."
          />
        </ScrollReveal>

        {todayHoliday && (
          <ScrollReveal className="mt-8">
            <p className="rounded-3xl border border-brand/20 bg-brand-muted px-6 py-4 text-center text-graphite">
              <strong>Hoy es festivo:</strong> {todayHoliday.name} (
              {TYPE_LABELS[todayHoliday.type]}). Confirmamos cierre según calendario
              laboral oficial.
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-10">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {upcoming.map((h) => (
              <li
                key={`${h.year}-${h.date}`}
                className={`rounded-3xl border px-5 py-4 ${
                  h.date === today
                    ? "border-brand bg-brand-muted"
                    : "border-graphite/8 bg-white"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {TYPE_LABELS[h.type]} · {h.year}
                </p>
                <p className="mt-2 font-semibold capitalize text-graphite">
                  {formatDisplayDate(h.date)}
                </p>
                <p className="mt-1 text-sm text-graphite/65">{h.name}</p>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {yearData && (
          <ScrollReveal className="mt-10">
            <details className="rounded-3xl border border-graphite/8 bg-white px-6 py-5">
              <summary className="cursor-pointer text-sm font-semibold text-graphite">
                Ver todos los festivos de {currentYear} ({yearData.holidays.length})
              </summary>
              <ul className="mt-4 divide-y divide-graphite/8">
                {yearData.holidays.map((h) => (
                  <li
                    key={h.date}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm"
                  >
                    <span className="font-medium text-graphite">{h.name}</span>
                    <span className="text-graphite/55">
                      {h.date} · {TYPE_LABELS[h.type]}
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-8 text-center text-sm text-graphite/55">
          <p>
            Última sincronización:{" "}
            {yearData
              ? new Intl.DateTimeFormat("es-ES", {
                  dateStyle: "long",
                  timeStyle: "short",
                }).format(new Date(yearData.syncedAt))
              : "—"}
          </p>
          <p className="mt-2">
            Fuente oficial:{" "}
            <a
              href={OFFICIAL_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              Calendario laboral — Ayuntamiento de Granada
            </a>
          </p>
          <p className="mt-1">
            Años disponibles: {getAvailableHolidayYears().join(", ")}. Ejecuta{" "}
            <code className="rounded bg-white px-1">npm run sync:holidays</code> cada
            enero para actualizar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
