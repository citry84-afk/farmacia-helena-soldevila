"use client";

import { useState } from "react";
import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";
import { Button } from "./ui/Button";
import { PhoneNumbers } from "./PhoneNumbers";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const buildFormMessage = () => {
    const lines = [
      "Consulta desde la web de Farmacia Helena Soldevila",
      name ? `Nombre: ${name}` : "",
      contact ? `Contacto: ${contact}` : "",
      message ? `Mensaje: ${message}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacy) return;
    const subject = encodeURIComponent("Consulta web - Farmacia Helena Soldevila");
    const body = encodeURIComponent(buildFormMessage());
    window.location.href = `mailto:${PHARMACY.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    if (!privacy) return;
    window.open(buildWhatsAppUrl(buildFormMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-32 section-pad"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        <div
          className="mb-10 rounded-3xl border border-red-200/80 bg-red-50/90 px-6 py-4 text-center text-sm text-red-950 md:text-base"
          role="note"
        >
          <strong>No es para urgencias.</strong> Si necesitas atención sanitaria urgente,
          llama al <a href="tel:112" className="font-bold underline">112</a> o acude a
          urgencias.
        </div>

        <SectionHeading
          eyebrow="Contacto"
          title="¿En qué podemos ayudarte?"
          description="Escríbenos o llámanos. Te respondemos lo antes posible en horario de apertura."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <aside className="glass-panel flex flex-col justify-between p-8 md:p-10">
            <div>
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Dirección
                  </dt>
                  <dd className="mt-2 text-xl font-medium text-graphite">
                    {PHARMACY.address.full}
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Teléfonos</dt>
                  <dd className="mt-2">
                    <PhoneNumbers size="lg" />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Horario
                  </dt>
                  <dd className="mt-2 text-lg text-graphite/75">{PHARMACY.schedule.summary}</dd>
                  <dd className="mt-1 text-sm text-graphite/55">{PHARMACY.schedule.note}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={buildTelUrl("mobile")} size="lg" className="flex-1 justify-center">
                Llamar móvil
              </Button>
              <Button
                href={buildTelUrl("landline")}
                variant="secondary"
                size="lg"
                className="flex-1 justify-center"
              >
                Llamar fijo
              </Button>
              <Button
                href={buildWhatsAppUrl()}
                variant="secondary"
                size="lg"
                className="flex-1 justify-center"
              >
                WhatsApp
              </Button>
            </div>
          </aside>

          <form
            onSubmit={handleMailto}
            className="glass-panel p-8 md:p-10"
            noValidate
          >
            <p className="mb-6 rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-amber-950">
              Este formulario no debe utilizarse para urgencias sanitarias. En emergencia,
              llama al 112.
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-graphite">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border-0 bg-surface px-4 py-3.5 text-graphite ring-1 ring-graphite/10 transition focus:ring-2 focus:ring-brand"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-graphite">
                  Email o teléfono
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  autoComplete="email tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-2 w-full rounded-2xl border-0 bg-surface px-4 py-3.5 text-graphite ring-1 ring-graphite/10 transition focus:ring-2 focus:ring-brand"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-graphite">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full resize-y rounded-2xl border-0 bg-surface px-4 py-3.5 text-graphite ring-1 ring-graphite/10 transition focus:ring-2 focus:ring-brand"
                  required
                />
              </div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-graphite/30 text-brand focus:ring-brand"
                  required
                />
                <span className="text-sm text-graphite/75">
                  He leído y acepto la{" "}
                  <a href="/politica-privacidad" className="text-brand hover:underline">
                    política de privacidad
                  </a>
                  .
                </span>
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" className="flex-1 justify-center" disabled={!privacy}>
                Enviar consulta
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="flex-1 justify-center"
                onClick={handleWhatsApp}
                disabled={!privacy}
              >
                WhatsApp
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 overflow-hidden rounded-5xl shadow-soft-lg">
          <iframe
            title="Mapa de ubicación de Farmacia Helena Soldevila en Granada"
            src={PHARMACY.googleMapsEmbedUrl}
            className="h-80 w-full border-0 md:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
