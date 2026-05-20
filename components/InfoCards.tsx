import { PHARMACY } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { PhoneNumbers } from "./PhoneNumbers";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function InfoCards() {
  return (
    <section className="section-pad" aria-label="Información esencial">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Lo esencial"
            title="Todo lo que necesitas, al instante."
            description="Dirección, horario y contacto directo. Sin buscar."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-5">
          <ScrollReveal className="md:col-span-7" delay={80}>
            <article
              id="ubicacion"
              className="scroll-mt-32 flex h-full flex-col justify-between rounded-5xl bg-brand p-8 text-white md:p-10 lg:p-12"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Ubicación
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  {PHARMACY.address.full}
                </h2>
                <p className="mt-4 max-w-md text-lg text-white/80">
                  Farmacia en Ribera del Violón, cerca de Camino de Ronda y el sur de Granada.
                </p>
              </div>
              <a
                href={PHARMACY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-brand transition hover:bg-white/90"
              >
                Cómo llegar
                <span aria-hidden>→</span>
              </a>
            </article>
          </ScrollReveal>

          <div className="grid gap-4 md:col-span-5 md:grid-rows-2">
            <ScrollReveal delay={120}>
              <article
                id="horario"
                className="scroll-mt-32 glass-panel flex h-full flex-col p-8 md:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Horario
                </p>
                <ul className="mt-4 space-y-2 text-lg font-medium text-graphite">
                  <li>{PHARMACY.schedule.weekdays}</li>
                  <li>{PHARMACY.schedule.saturday}</li>
                  <li className="text-graphite/60">{PHARMACY.schedule.sunday}</li>
                </ul>
                <p className="mt-4 text-sm text-graphite/55">{PHARMACY.schedule.note}</p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <article
                id="contacto-rapido"
                className="scroll-mt-32 glass-panel flex h-full flex-col justify-between p-8 md:p-9"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Contacto
                  </p>
                  <div className="mt-4">
                    <PhoneNumbers size="lg" />
                  </div>
                  <p className="mt-4 text-graphite/65">
                    WhatsApp al móvil. También puedes llamar al fijo de la farmacia.
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-semibold text-brand hover:underline"
                >
                  Abrir WhatsApp →
                </a>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
