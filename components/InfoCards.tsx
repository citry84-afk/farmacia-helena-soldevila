import { PHARMACY } from "@/lib/constants";
import { buildTelUrl } from "@/lib/utils";

const cards = [
  {
    id: "ubicacion",
    title: "Dónde estamos",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: (
      <>
        <p className="text-lg font-medium text-graphite">{PHARMACY.address.full}</p>
        <p className="mt-2 text-graphite/70">
          Farmacia en Ribera del Violón, cerca de Camino de Ronda y zona sur de Granada.
        </p>
        <a
          href={PHARMACY.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-brand font-semibold hover:underline"
        >
          Abrir en Google Maps →
        </a>
      </>
    ),
  },
  {
    id: "horario",
    title: "Horario",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <>
        <ul className="space-y-2 text-lg text-graphite">
          <li>{PHARMACY.schedule.weekdays}</li>
          <li>{PHARMACY.schedule.saturday}</li>
          <li>{PHARMACY.schedule.sunday}</li>
        </ul>
        <p className="mt-4 text-sm text-graphite/60 italic">
          {PHARMACY.schedule.note}
        </p>
      </>
    ),
  },
  {
    id: "contacto-rapido",
    title: "Contacto",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    content: (
      <>
        <a
          href={buildTelUrl()}
          className="text-2xl font-semibold text-brand hover:underline"
        >
          {PHARMACY.phone}
        </a>
        <p className="mt-2 text-graphite/70">
          Llámanos o escríbenos por WhatsApp para consultar disponibilidad de productos.
        </p>
      </>
    ),
  },
] as const;

export function InfoCards() {
  return (
    <section className="py-16 md:py-24" aria-label="Información esencial">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="scroll-mt-28 rounded-3xl border border-graphite/5 bg-white p-8 shadow-soft transition hover:shadow-soft-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold text-graphite">{card.title}</h2>
              <div className="mt-4">{card.content}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
