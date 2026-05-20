import Image from "next/image";
import { PHARMACY } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="sobre-nosotros"
      className="scroll-mt-32 section-pad bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-[2.5rem] bg-brand/10 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[941/1024] overflow-hidden rounded-5xl shadow-soft-lg ring-1 ring-graphite/5">
                <Image
                  src={PHARMACY.portraitImage}
                  alt={PHARMACY.portraitAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  loading="lazy"
                  priority={false}
                />
              </div>
              <figcaption className="absolute -bottom-4 left-4 right-4 rounded-3xl border border-white/60 bg-white/92 px-6 py-4 text-center shadow-soft-lg backdrop-blur-xl md:left-6 md:right-6">
                <p className="text-lg font-semibold text-graphite">Helena Soldevila</p>
                <p className="text-sm text-graphite/65">
                  Farmacéutica titular · desde 2022
                </p>
                {PHARMACY.portraitCaption && (
                  <p className="mt-1 text-sm font-medium text-brand">
                    {PHARMACY.portraitCaption}
                  </p>
                )}
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <SectionHeading
              eyebrow="Sobre nosotros"
              title="Cuidamos de ti con cercanía y profesionalidad."
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-graphite/75 md:text-xl md:leading-relaxed">
              <p>
                Hola, soy Helena, farmacéutica titular desde 2022. Desde siempre tuve claro que
                quería dedicarme a la oficina de farmacia, porque disfruto del trato cercano con
                las personas y de poder ayudar a cada paciente de forma directa.
              </p>
              <p>
                Ser titular de esta farmacia representa mi proyecto personal y profesional más
                importante. Trabajamos cada día con ilusión, compromiso y cercanía.
              </p>
              <p>
                Aquí siempre encontrarás a Laura, farmacéutica, y a mí, dispuestas a escucharte,
                asesorarte y ayudarte a cuidar de tu salud y bienestar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
