import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { InfoCards } from "@/components/InfoCards";
import { QuickActions } from "@/components/QuickActions";
import { HolidayCalendar } from "@/components/HolidayCalendar";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { TrustSection } from "@/components/TrustSection";
import { LocalSeo } from "@/components/LocalSeo";
import { SITE_URL } from "@/lib/constants";
// import { Guardias } from "@/components/Guardias"; // Activar cuando tengas el calendario de guardias

export const metadata: Metadata = {
  title: "Farmacia en Granada (Ribera del Violón) | Helena Soldevila",
  description:
    "Farmacia en Granada, Ribera del Violón (18006): horario actualizado, teléfono, WhatsApp y cómo llegar. Atención farmacéutica cercana y profesional.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Farmacia en Granada (Ribera del Violón) | Helena Soldevila",
    description:
      "Horario, contacto y ubicación de Farmacia Helena Soldevila en Granada, cerca de Camino de Ronda.",
    url: SITE_URL,
  },
  twitter: {
    title: "Farmacia en Granada (Ribera del Violón) | Helena Soldevila",
    description:
      "Horario, contacto y ubicación de Farmacia Helena Soldevila en Granada, cerca de Camino de Ronda.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoCards />
      <QuickActions />
      <HolidayCalendar />
      {/* <Guardias /> — calendario de guardias: ver data/guardias/README.md */}
      <Services />
      <Gallery />
      <TrustSection />
      <Contact />
      <LocalSeo />
      <FAQ />
    </>
  );
}
