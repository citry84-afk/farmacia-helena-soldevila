import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

export function Gallery() {
  return (
    <section
      id="galeria"
      className="scroll-mt-28 bg-white py-16 md:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2
          id="gallery-heading"
          className="text-3xl font-bold tracking-tight text-graphite md:text-4xl"
        >
          Nuestra farmacia
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-graphite/70">
          Un espacio moderno, luminoso y acogedor en el corazón de Ribera del Violón.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {GALLERY_IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${
                index === 0 ? "sm:col-span-2 sm:aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, 80vw"
                    : "(max-width: 640px) 100vw, 40vw"
                }
                loading={index === 0 ? "eager" : "lazy"}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/70 to-transparent px-5 py-4 text-sm font-medium text-white">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
