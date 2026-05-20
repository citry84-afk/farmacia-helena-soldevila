import Image from "next/image";
import type { ReactNode } from "react";
import { PHARMACY, GALLERY_IMAGES } from "@/lib/constants";
import { MAP_LINKS } from "@/lib/maps";
import { buildWhatsAppUrl } from "@/lib/utils";
import { OpenStatus } from "./OpenStatus";
import { PhoneNumbers } from "./PhoneNumbers";
import { TodaySchedule } from "./TodaySchedule";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/Button";

const FACHADA = GALLERY_IMAGES[0];

function InfoCard({
  id,
  eyebrow,
  children,
  footer,
  className = "",
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  footer: ReactNode;
  className?: string;
}) {
  return (
    <article
      id={id}
      className={`scroll-mt-32 flex h-full flex-col rounded-4xl border border-graphite/8 bg-white p-7 shadow-soft transition-shadow hover:shadow-soft-lg md:p-8 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {eyebrow}
      </p>
      <div className="mt-5 flex min-h-0 flex-1 flex-col">{children}</div>
      <div className="mt-auto pt-6 border-t border-graphite/8">{footer}</div>
    </article>
  );
}

export function InfoCards() {
  return (
    <section className="section-pad bg-surface" aria-label="Información esencial">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Lo esencial"
            title="Todo lo que necesitas, al instante."
            description="Dirección, horario y contacto directo. Sin buscar."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-[auto_auto] lg:items-stretch">
          <ScrollReveal delay={0} className="h-full md:col-span-2 lg:col-span-3 lg:row-span-2">
            <InfoCard
              id="ubicacion"
              eyebrow="Ubicación"
              footer={
                <div className="space-y-3">
                  <Button
                    href={PHARMACY.googleMapsUrl}
                    className="w-full justify-center"
                    size="lg"
                  >
                    Cómo llegar
                  </Button>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                    {MAP_LINKS.filter((l) => l.id !== "google").map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              }
            >
              <h2 className="text-xl font-semibold leading-snug tracking-tight text-graphite">
                {PHARMACY.address.full}
              </h2>
              <p className="mt-2 text-sm text-graphite/65">
                Ribera del Violón · Cerca de Camino de Ronda
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-graphite/60">
                <li className="flex gap-2">
                  <span className="text-brand" aria-hidden>
                    ·
                  </span>
                  {PHARMACY.access.ramp}
                </li>
                <li className="flex gap-2">
                  <span className="text-brand" aria-hidden>
                    ·
                  </span>
                  {PHARMACY.access.parking}
                </li>
              </ul>
              <div className="relative mt-5 aspect-[5/3] w-full overflow-hidden rounded-2xl bg-graphite/5">
                <Image
                  src={FACHADA.src}
                  alt={FACHADA.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </InfoCard>
          </ScrollReveal>

          <ScrollReveal delay={60} className="h-full md:col-span-1 lg:col-span-2">
            <InfoCard
              id="horario"
              eyebrow="Horario"
              footer={
                <a
                  href="#festivos-granada"
                  className="block text-center text-sm font-medium text-brand hover:underline"
                >
                  Festivos oficiales en Granada →
                </a>
              }
            >
              <OpenStatus size="sm" />
              <TodaySchedule />
              <ul className="mt-5 space-y-2 rounded-2xl bg-surface px-4 py-3 text-sm font-medium text-graphite">
                <li>{PHARMACY.schedule.weekdays}</li>
                <li>{PHARMACY.schedule.saturday}</li>
                <li className="text-graphite/50">{PHARMACY.schedule.sunday}</li>
              </ul>
            </InfoCard>
          </ScrollReveal>

          <ScrollReveal delay={120} className="h-full md:col-span-1 lg:col-span-2">
            <InfoCard
              id="contacto-rapido"
              eyebrow="Contacto"
              footer={
                <Button
                  href={buildWhatsAppUrl(PHARMACY.whatsappMessages.product)}
                  variant="secondary"
                  className="w-full justify-center"
                  size="lg"
                >
                  Consultar por WhatsApp
                </Button>
              }
            >
              <PhoneNumbers size="lg" />
              <p className="mt-4 text-sm leading-relaxed text-graphite/60">
                Móvil y WhatsApp, o el teléfono fijo de la farmacia en horario de apertura.
              </p>
              <a
                href={PHARMACY.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
              >
                Ver en Google Maps →
              </a>
            </InfoCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
