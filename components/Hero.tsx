import Image from "next/image";
import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";
import { Button } from "./ui/Button";
import { OpenStatus } from "./OpenStatus";

export function Hero() {
  return (
    <section
      className="hero-glow relative min-h-[92vh] overflow-hidden pt-24 md:min-h-screen md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="container-main flex flex-col items-center pb-8 text-center md:pb-12">
        <div className="animate-fade-in mb-6">
          <OpenStatus size="lg" />
        </div>
        <p className="animate-fade-in mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Granada · Ribera del Violón
        </p>
        <h1
          id="hero-heading"
          className="animate-fade-in-up max-w-4xl text-display-sm font-semibold tracking-tight text-graphite sm:text-display md:text-display-lg"
        >
          Farmacia Helena Soldevila
        </h1>
        <p className="animate-fade-in-up mt-3 text-xl font-medium text-brand md:text-2xl">
          en Granada
        </p>
        <p
          className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-graphite/70 md:mt-10 md:text-xl md:leading-relaxed"
          style={{ animationDelay: "0.1s" }}
        >
          Tu farmacia cercana en {PHARMACY.address.street}. Atención farmacéutica
          profesional, trato humano y asesoramiento personalizado.
        </p>
        <div
          className="animate-fade-in-up mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          style={{ animationDelay: "0.2s" }}
        >
          <Button href={buildTelUrl("mobile")} size="lg">
            Llamar móvil
          </Button>
          <Button
            href={buildWhatsAppUrl(PHARMACY.whatsappMessages.product)}
            variant="secondary"
            size="lg"
          >
            ¿Tenéis este producto?
          </Button>
          <Button href={PHARMACY.googleMapsUrl} variant="ghost" size="lg">
            Cómo llegar
          </Button>
        </div>
        <p className="animate-fade-in mt-6 text-sm text-graphite/50">
          También en fijo:{" "}
          <a href={buildTelUrl("landline")} className="font-medium text-brand hover:underline">
            {PHARMACY.phoneLandline}
          </a>
        </p>
      </div>

      <div className="container-main pb-16 md:pb-24">
        <div className="animate-fade-in relative mx-auto aspect-[16/10] max-w-5xl overflow-hidden rounded-5xl shadow-soft-lg md:aspect-[21/9]">
          <Image
            src="/images/fachada.webp"
            alt="Fachada de Farmacia Helena Soldevila en Granada, C. Ribera del Violón"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/25 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
