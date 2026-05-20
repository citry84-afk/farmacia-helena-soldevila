import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { PHARMACY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${PHARMACY.name}.`,
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad">
      <p className="text-sm italic text-graphite/60">
        Texto provisional conforme al RGPD. Debe ser revisado por asesoría legal o de protección de
        datos antes de publicar.
      </p>
      <section>
        <h2 className="text-xl font-semibold text-graphite">1. Responsable del tratamiento</h2>
        <p>
          Responsable: {PHARMACY.name}. Dirección: {PHARMACY.address.full}. Contacto:{" "}
          {PHARMACY.email} / {PHARMACY.phoneMobile} / {PHARMACY.phoneLandline}.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">2. Finalidad</h2>
        <p>
          Los datos enviados a través del formulario de contacto se utilizarán únicamente para
          responder a consultas sobre productos, servicios o información de la farmacia. No se
          utilizarán para finalidades distintas sin consentimiento.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">3. Legitimación</h2>
        <p>
          La base legal es el consentimiento del interesado al marcar la casilla de aceptación de
          esta política y el interés legítimo en atender solicitudes de información.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">4. Conservación y derechos</h2>
        <p>
          Los datos se conservarán el tiempo necesario para atender la consulta. Puede ejercer los
          derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad
          escribiendo a {PHARMACY.email}, así como presentar reclamación ante la AEPD.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-graphite">5. Destinatarios</h2>
        <p>
          No se cederán datos a terceros salvo obligación legal. Si se integra un servicio de envío
          de formularios (Formspree, EmailJS u otro), deberá indicarse en esta política.
        </p>
      </section>
    </LegalLayout>
  );
}
