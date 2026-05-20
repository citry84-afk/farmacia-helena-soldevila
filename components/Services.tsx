import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-28 py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-graphite md:text-4xl"
          >
            Servicios
          </h2>
          <p className="mt-4 text-lg text-graphite/70">
            Atención farmacéutica cercana en Granada: consejo, dermocosmética y
            bienestar para toda la familia.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="rounded-3xl border border-graphite/5 bg-white p-7 shadow-soft transition hover:shadow-soft-lg"
            >
              <h3 className="text-lg font-semibold text-graphite">
                {service.title}
              </h3>
              <p className="mt-3 text-graphite/70 leading-relaxed">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
