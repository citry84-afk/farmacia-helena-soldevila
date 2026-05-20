import Image from "next/image";
import { PHARMACY } from "@/lib/constants";
import { MAP_LINKS } from "@/lib/maps";
import { buildWhatsAppUrl } from "@/lib/utils";
import { OpenStatus } from "./OpenStatus";
import { PhoneNumbers } from "./PhoneNumbers";
import { TodaySchedule } from "./TodaySchedule";
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

        <div className="mt-14 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <ScrollReveal delay={80}>
            <article
              id="ubicacion"
              className="scroll-mt-32 overflow-hidden rounded-5xl bg-brand text-white lg:col-span-1"
            >
              <div className="p-8 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Ubicación
                </p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
                  {PHARMACY.address.full}
                </h2>
                <p className="mt-3 text-base text-white/80">
                  Ribera del Violón, cerca de Camino de Ronda y el sur de Granada.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-white/75">
                  <li>{PHARMACY.access.ramp}</li>
                  <li>{PHARMACY.access.transport}</li>
                  <li>{PHARMACY.access.parking}</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {MAP_LINKS.filter((l) => l.id !== "google").map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white/90 underline-offset-2 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={PHARMACY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/10]"
              >
                <Image
                  src="/images/fachada.webp"
                  alt="Fachada de Farmacia Helena Soldevila en C. Ribera del Violón, Granada"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/20 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-full bg-white py-3 text-sm font-semibold text-brand transition group-hover:bg-white/95">
                  Cómo llegar en Google Maps
                </span>
              </a>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <article
              id="horario"
              className="scroll-mt-32 glass-panel p-8 md:p-9"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Horario
                </p>
                <OpenStatus size="sm" />
              </div>
              <TodaySchedule />
              <ul className="mt-4 space-y-2 text-lg font-medium text-graphite">
                <li>{PHARMACY.schedule.weekdays}</li>
                <li>{PHARMACY.schedule.saturday}</li>
                <li className="text-graphite/60">{PHARMACY.schedule.sunday}</li>
              </ul>
              <p className="mt-4 text-sm text-graphite/55">{PHARMACY.schedule.note}</p>
              <a
                href="#festivos-granada"
                className="mt-2 inline-block text-sm font-medium text-brand hover:underline"
              >
                Ver festivos oficiales en Granada →
              </a>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <article
              id="contacto-rapido"
              className="scroll-mt-32 glass-panel flex flex-col gap-6 p-8 md:p-9"
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
              <div className="flex flex-col gap-2 border-t border-graphite/8 pt-5">
                <a
                  href={buildWhatsAppUrl(PHARMACY.whatsappMessages.product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Consultar producto por WhatsApp →
                </a>
                <a
                  href={PHARMACY.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-graphite/65 hover:text-brand"
                >
                  Ver opiniones en Google →
                </a>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <p className="mt-6 text-center text-sm text-graphite/50">
          Mapa interactivo completo en la sección{" "}
          <a href="#contacto" className="font-medium text-brand hover:underline">
            Contacto
          </a>
          .
        </p>
      </div>
    </section>
  );
}
