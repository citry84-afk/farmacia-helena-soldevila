import Image from "next/image";

export function About() {
  return (
    <section
      id="sobre-nosotros"
      className="scroll-mt-28 bg-white py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft-lg">
          <Image
            src="/images/interior.webp"
            alt="Interior de Farmacia Helena Soldevila en Granada, ambiente luminoso y moderno"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
        <div>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-graphite md:text-4xl"
          >
            Sobre nosotros
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-graphite/80">
            <p>
              Hola, soy Helena, farmacéutica titular desde 2022. Desde siempre tuve
              claro que quería dedicarme a la oficina de farmacia, porque disfruto del
              trato cercano con las personas y de poder ayudar a cada paciente de forma
              directa a través de mis conocimientos en salud.
            </p>
            <p>
              Ser titular de esta farmacia representa mi proyecto personal y
              profesional más importante. Por eso trabajamos cada día con ilusión,
              compromiso y cercanía, buscando mejorar continuamente y ofrecer siempre la
              mejor atención a quienes confían en nosotros.
            </p>
            <p>
              Aquí siempre encontrarás a Laura, farmacéutica, y a mí, dispuestas a
              escucharte, asesorarte y ayudarte a cuidar de tu salud y bienestar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
