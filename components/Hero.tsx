import Image from "next/image";
import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:pb-24">
        <div className="animate-fade-in-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand">
            Farmacia en Granada · Ribera del Violón
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.1] tracking-tight text-graphite md:text-5xl lg:text-[3.25rem]"
          >
            Farmacia Helena Soldevila en Granada
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite/75 md:text-xl">
            Tu farmacia cercana en {PHARMACY.address.street}. Atención
            farmacéutica profesional, trato humano y asesoramiento personalizado
            para cuidar de tu salud cada día.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={buildTelUrl()}>Llamar ahora</Button>
            <Button
              href={buildWhatsAppUrl(
                "Hola, me gustaría información sobre Farmacia Helena Soldevila.",
              )}
              variant="secondary"
            >
              Escribir por WhatsApp
            </Button>
            <Button href={PHARMACY.googleMapsUrl} variant="ghost">
              Cómo llegar
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] animate-fade-in overflow-hidden rounded-3xl shadow-soft-lg md:aspect-square">
          <Image
            src="/images/fachada.webp"
            alt="Fachada de Farmacia Helena Soldevila en Granada, C. Ribera del Violón"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
