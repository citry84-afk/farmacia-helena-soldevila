import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { PHARMACY, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${PHARMACY.name}.`,
  alternates: { canonical: `${SITE_URL}/aviso-legal` },
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso legal">
      <p className="text-sm italic text-graphite/60">
        Texto provisional. Debe ser revisado y adaptado por un profesional antes de publicar.
      </p>
      <section>
        <h2 className="text-xl font-semibold text-graphite">1. Datos identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que el titular de
          este sitio web es {PHARMACY.name}, con domicilio en {PHARMACY.address.full}, y teléfono de
          contacto {PHARMACY.phoneMobile} / {PHARMACY.phoneLandline}.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">2. Objeto</h2>
        <p>
          El presente sitio web tiene carácter meramente informativo sobre la actividad de la
          oficina de farmacia, sus servicios, horario y datos de contacto. No constituye tienda
          online ni venta a distancia de medicamentos.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">3. Propiedad intelectual</h2>
        <p>
          Los contenidos, diseño, textos e imágenes son propiedad del titular o de terceros con
          licencia, quedando prohibida su reproducción sin autorización expresa.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">4. Responsabilidad</h2>
        <p>
          El titular no se responsabiliza del uso indebido de la información publicada ni de los
          daños derivados del acceso a enlaces externos de terceros.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">5. Legislación aplicable</h2>
        <p>
          Las relaciones derivadas del uso de este sitio se regirán por la legislación española.
          Para cualquier controversia, las partes se someterán a los juzgados de Granada.
        </p>
      </section>
    </LegalLayout>
  );
}
