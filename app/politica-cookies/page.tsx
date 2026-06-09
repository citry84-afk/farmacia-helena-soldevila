import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { PHARMACY, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Política de cookies de ${PHARMACY.name}.`,
  alternates: { canonical: `${SITE_URL}/politica-cookies` },
  robots: { index: false, follow: true },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de cookies">
      <p className="text-sm italic text-graphite/60">
        Texto provisional. Adaptar según las cookies que se instalen realmente (analytics, mapas,
        etc.).
      </p>
      <section>
        <h2 className="text-xl font-semibold text-graphite">1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en su dispositivo al visitar un sitio
          web y permiten recordar preferencias o analizar el uso del sitio.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">2. Cookies utilizadas</h2>
        <p>
          Este sitio puede utilizar cookies técnicas necesarias para su funcionamiento. El mapa
          incrustado de Google Maps puede instalar cookies de terceros al interactuar con él.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">3. Gestión</h2>
        <p>
          Puede configurar su navegador para bloquear o eliminar cookies. La desactivación de
          cookies técnicas puede afectar a algunas funcionalidades.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">4. Más información</h2>
        <p>
          Para dudas sobre el tratamiento de datos, consulte la{" "}
          <a href="/politica-privacidad" className="text-brand underline">
            política de privacidad
          </a>{" "}
          o contacte con {PHARMACY.email}.
        </p>
      </section>
    </LegalLayout>
  );
}
