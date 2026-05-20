import { PHARMACY } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/Button";

export function TrustSection() {
  const writeReviewUrl =
    PHARMACY.googleWriteReviewUrl || PHARMACY.googleReviewsUrl;

  return (
    <section
      className="section-pad bg-white"
      aria-labelledby="trust-heading"
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Confianza"
            title="Tu farmacia de barrio, con cara visible."
            description="Valoramos las opiniones de nuestros vecinos. Síguenos y cuéntanos tu experiencia."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <article className="flex h-full flex-col rounded-4xl border border-graphite/8 bg-surface p-8 text-center">
              <h3 className="text-lg font-semibold text-graphite">Google Maps</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite/65">
                Consulta ubicación, horario y opiniones de otros clientes en Granada.
              </p>
              <Button
                href={PHARMACY.googleReviewsUrl}
                variant="secondary"
                className="mt-6 w-full justify-center"
              >
                Ver en Google
              </Button>
              {PHARMACY.googleWriteReviewUrl && (
                <a
                  href={writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm font-medium text-brand hover:underline"
                >
                  Dejar una reseña →
                </a>
              )}
            </article>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <article className="flex h-full flex-col rounded-4xl border border-graphite/8 bg-surface p-8 text-center">
              <h3 className="text-lg font-semibold text-graphite">Instagram</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite/65">
                Novedades de dermocosmética, consejos de salud y vida en la farmacia.
              </p>
              <Button
                href={PHARMACY.instagram}
                variant="secondary"
                className="mt-6 w-full justify-center"
              >
                @farmacia.helenasoldevila
              </Button>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <article className="flex h-full flex-col rounded-4xl border border-brand/15 bg-brand-muted p-8 text-center">
              <h3 className="text-lg font-semibold text-graphite">¿Te hemos ayudado?</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite/65">
                Tu opinión ayuda a otras personas a encontrar una farmacia cercana y de
                confianza en Ribera del Violón.
              </p>
              <Button
                href={buildWhatsAppUrl(
                  "Hola, quería dejar un comentario sobre mi experiencia en Farmacia Helena Soldevila.",
                )}
                className="mt-6 w-full justify-center"
              >
                Escríbenos
              </Button>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
