"use client";

import { useState } from "react";
import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";
import { Button } from "./ui/Button";

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
      className="scroll-mt-28 py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tight text-graphite md:text-4xl"
        >
          Contacto
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-graphite/70">
          Escríbenos o llámanos. Para urgencias sanitarias, acude a urgencias o llama al 112.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <aside className="rounded-3xl border border-graphite/5 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-graphite">Datos de contacto</h3>
            <dl className="mt-6 space-y-4 text-graphite/80">
              <div>
                <dt className="text-sm font-medium text-graphite/60">Dirección</dt>
                <dd className="mt-1 text-lg">{PHARMACY.address.full}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-graphite/60">Teléfono</dt>
                <dd className="mt-1">
                  <a href={buildTelUrl()} className="text-lg font-semibold text-brand hover:underline">
                    {PHARMACY.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-graphite/60">Horario</dt>
                <dd className="mt-1">{PHARMACY.schedule.summary}</dd>
                <dd className="mt-1 text-sm italic text-graphite/60">
                  {PHARMACY.schedule.note}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={buildTelUrl()} className="flex-1 justify-center">
                Llamar
              </Button>
              <Button
                href={PHARMACY.googleMapsUrl}
                variant="secondary"
                className="flex-1 justify-center"
              >
                Cómo llegar
              </Button>
            </div>
          </aside>

          <form
            onSubmit={handleMailto}
            className="rounded-3xl border border-graphite/5 bg-white p-8 shadow-soft"
            noValidate
          >
            <p className="mb-6 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Este formulario no debe utilizarse para urgencias sanitarias. En caso de
              emergencia, llama al 112 o acude a urgencias.
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
                  className="mt-2 w-full rounded-2xl border border-graphite/15 bg-surface px-4 py-3 text-graphite outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
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
                  className="mt-2 w-full rounded-2xl border border-graphite/15 bg-surface px-4 py-3 text-graphite outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
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
                  className="mt-2 w-full resize-y rounded-2xl border border-graphite/15 bg-surface px-4 py-3 text-graphite outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
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
                <span className="text-sm text-graphite/80">
                  He leído y acepto la{" "}
                  <a href="/politica-privacidad" className="text-brand underline hover:no-underline">
                    política de privacidad
                  </a>
                  .
                </span>
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                className="flex-1 justify-center"
                disabled={!privacy}
              >
                Enviar consulta
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="flex-1 justify-center"
                onClick={handleWhatsApp}
                disabled={!privacy}
              >
                Enviar por WhatsApp
              </Button>
            </div>

            {/*
              Integración futura del formulario:
              - Formspree: https://formspree.io — action en form + fetch
              - EmailJS: https://www.emailjs.com
              - API propia: POST /api/contact con validación servidor
            */}
            <p className="mt-4 text-xs text-graphite/50">
              El envío abre tu cliente de correo (mailto). Para envío automático sin salir
              de la página, conecta Formspree, EmailJS o una API en el handler del formulario.
            </p>
          </form>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-graphite/5 shadow-soft">
          <iframe
            title="Mapa de ubicación de Farmacia Helena Soldevila en Granada"
            src={PHARMACY.googleMapsEmbedUrl}
            className="h-72 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
