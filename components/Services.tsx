import { PHARMACY, SERVICES } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-32 section-pad"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Salud, belleza y consejo en un mismo lugar."
            description="Atención farmacéutica cercana en Granada para toda la familia."
          />
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-brand/15 bg-brand-muted px-8 py-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-lg font-semibold text-graphite">
                ¿Buscas un producto concreto?
              </p>
              <p className="mt-2 text-graphite/65">
                Escríbenos por WhatsApp y te decimos si lo tenemos o en cuánto podemos
                encargarlo.
              </p>
            </div>
            <Button
              href={buildWhatsAppUrl(PHARMACY.whatsappMessages.product)}
              size="lg"
              className="shrink-0"
            >
              Preguntar por WhatsApp
            </Button>
          </div>
        </ScrollReveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <li className="group h-full rounded-4xl border border-graphite/5 bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-soft-lg">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-muted text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-graphite">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite/65">
                  {service.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
