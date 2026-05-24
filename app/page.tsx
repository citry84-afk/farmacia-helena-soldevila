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
// import { Guardias } from "@/components/Guardias"; // Activar cuando tengas el calendario de guardias

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
