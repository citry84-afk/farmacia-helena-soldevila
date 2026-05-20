import { PHARMACY } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";

const ZONES = [
  "Ribera del Violón",
  "Camino de Ronda",
  "Zona sur de Granada",
  "Alcázar Genil",
  "Palacio de Congresos",
  "Barrio del Violón",
] as const;

export function LocalSeo() {
  return (
    <section
      className="border-t border-graphite/8 bg-surface py-16 md:py-20"
      aria-label="Farmacia en Granada y alrededores"
    >
      <div className="container-main">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
            Farmacia en Granada, cerca de ti
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-graphite/70">
            <strong>{PHARMACY.name}</strong> está en {PHARMACY.address.full}, un
            enclave habitual para quien busca una{" "}
            <strong>farmacia en Ribera del Violón</strong>,{" "}
            <strong>farmacia cerca de Camino de Ronda</strong> o una oficina de
            farmacia accesible desde el sur de la ciudad. Atención farmacéutica
            presencial, sin venta online de medicamentos.
          </p>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
            {ZONES.map((zone) => (
              <li
                key={zone}
                className="rounded-full border border-graphite/10 bg-white px-4 py-2 text-sm text-graphite/75"
              >
                {zone}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
