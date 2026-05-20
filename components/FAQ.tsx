import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      className="scroll-mt-28 bg-white py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-bold tracking-tight text-graphite md:text-4xl"
        >
          Preguntas frecuentes
        </h2>
        <dl className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-graphite/5 bg-surface px-6 py-5"
            >
              <dt className="text-lg font-semibold text-graphite">{item.question}</dt>
              <dd className="mt-2 leading-relaxed text-graphite/75">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
