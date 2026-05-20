"use client";

import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";

export function DesktopQuickActions() {
  return (
    <div
      className="fixed bottom-6 right-6 z-30 hidden flex-col gap-2 md:flex"
      aria-label="Acciones rápidas escritorio"
    >
      <a
        href={buildWhatsAppUrl(PHARMACY.whatsappMessages.product)}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-graphite shadow-soft-lg ring-1 ring-graphite/10 transition hover:ring-brand/30"
      >
        WhatsApp
      </a>
      <a
        href={buildTelUrl("mobile")}
        className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-soft-lg transition hover:bg-brand-dark"
      >
        Llamar
      </a>
      <a
        href={PHARMACY.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-graphite px-5 py-3 text-sm font-semibold text-white shadow-soft-lg transition hover:bg-graphite/90"
      >
        Cómo llegar
      </a>
    </div>
  );
}
