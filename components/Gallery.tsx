import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [featured, ...rest] = GALLERY_IMAGES;

  return (
    <section
      id="galeria"
      className="scroll-mt-32 section-pad bg-graphite text-white"
      aria-labelledby="gallery-heading"
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionHeading
            eyebrow="La farmacia"
            title="Un espacio pensado para cuidarte."
            description="Moderno, luminoso y acogedor en Ribera del Violón."
            dark
          />
        </ScrollReveal>

        <ScrollReveal className="mt-14">
          <figure className="group relative aspect-[16/9] overflow-hidden rounded-5xl md:aspect-[21/9]">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="100vw"
              priority={false}
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-8 py-6 text-lg font-medium">
              {featured.caption}
            </figcaption>
          </figure>
        </ScrollReveal>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 80}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-4xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-5 py-4 text-sm font-medium">
                  {image.caption}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
