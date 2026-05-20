import { FAQ_ITEMS } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      className="scroll-mt-32 section-pad bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-main max-w-3xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 40}>
              <details className="group rounded-3xl border border-graphite/8 bg-surface open:bg-white open:shadow-soft transition">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-medium text-graphite marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-muted text-brand transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="border-t border-graphite/5 px-6 pb-5 pt-2 leading-relaxed text-graphite/70">
                  {item.answer}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
