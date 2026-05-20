import { Hero } from "@/components/Hero";
import { InfoCards } from "@/components/InfoCards";
import { QuickActions } from "@/components/QuickActions";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoCards />
      <QuickActions />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <FAQ />
    </>
  );
}
