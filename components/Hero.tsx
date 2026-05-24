import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";
import { AboutIntro } from "./About";
import { Button } from "./ui/Button";
import { OpenStatus } from "./OpenStatus";

export function Hero() {
  return (
    <section
      id="sobre-nosotros"
      className="hero-glow relative overflow-hidden scroll-mt-32 pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="container-main pb-16 md:pb-20">
        <header className="mx-auto max-w-4xl text-center">
          <h1
            id="hero-heading"
            className="animate-fade-in-up text-display-sm font-semibold tracking-tight text-graphite sm:text-display md:text-display-lg"
          >
            {PHARMACY.tagline}
          </h1>
          <p className="animate-fade-in-up mt-5 text-2xl font-semibold tracking-tight text-graphite/90 sm:text-3xl">
            {PHARMACY.name}
          </p>
          <p className="animate-fade-in-up mt-2 text-xl font-medium text-brand md:text-2xl">
            en {PHARMACY.address.city}
          </p>
          <p className="animate-fade-in mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            {PHARMACY.address.city} · Ribera del Violón
          </p>
          <div className="animate-fade-in mt-6 flex justify-center">
            <OpenStatus size="lg" />
          </div>
        </header>

        <div className="mt-14 md:mt-16 lg:mt-20">
          <AboutIntro />
        </div>

        <div
          className="animate-fade-in-up mt-12 flex w-full flex-col gap-3 sm:mx-auto sm:mt-14 sm:max-w-2xl sm:flex-row sm:flex-wrap sm:justify-center md:mt-16"
          style={{ animationDelay: "0.15s" }}
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
        <p className="animate-fade-in mt-6 text-center text-sm text-graphite/50">
          También en fijo:{" "}
          <a href={buildTelUrl("landline")} className="font-medium text-brand hover:underline">
            {PHARMACY.phoneLandline}
          </a>
        </p>
      </div>
    </section>
  );
}
