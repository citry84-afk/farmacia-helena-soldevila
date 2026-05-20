import { PHARMACY } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";
import { OpenStatus } from "./OpenStatus";

const actions = [
  {
    title: "¿Tenéis este producto?",
    description:
      "Pregunta por WhatsApp antes de venir. Te confirmamos stock o plazo de encargo.",
    href: buildWhatsAppUrl(PHARMACY.whatsappMessages.product),
    cta: "Consultar por WhatsApp",
    accent: true,
  },
  {
    title: "Opiniones en Google",
    description:
      "Lee la experiencia de otros vecinos o deja tu valoración tras visitarnos.",
    href: PHARMACY.googleReviewsUrl,
    cta: "Ver en Google Maps",
    external: true,
  },
  {
    title: "Recetas y medicación",
    description: PHARMACY.prescriptions,
    href: buildWhatsAppUrl(
      "Hola, tengo una consulta sobre recetas o medicación en Farmacia Helena Soldevila.",
    ),
    cta: "Preguntar por WhatsApp",
  },
] as const;

export function QuickActions() {
  return (
    <section className="section-pad bg-white" aria-label="Acciones rápidas">
      <div className="container-main">
        <ScrollReveal className="flex flex-col items-center text-center">
          <OpenStatus size="lg" />
          <p className="mt-4 max-w-xl text-sm text-graphite/55">
            {PHARMACY.schedule.holidaysNote}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {actions.map((action, i) => (
            <ScrollReveal key={action.title} delay={i * 70}>
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-4xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${
                  "accent" in action && action.accent
                    ? "border-brand/20 bg-brand-muted hover:border-brand/35"
                    : "border-graphite/8 bg-surface hover:border-brand/20"
                }`}
              >
                <h3 className="text-xl font-semibold tracking-tight text-graphite">
                  {action.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-graphite/65">
                  {action.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                  {action.cta}
                  <span aria-hidden>→</span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
