"use client";

import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-graphite/10 bg-surface/95 p-3 backdrop-blur-md md:hidden"
      role="group"
      aria-label="Acciones rápidas"
    >
      <a
        href={buildTelUrl()}
        className="flex flex-1 items-center justify-center rounded-2xl bg-brand px-3 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
      >
        Llamar
      </a>
      <a
        href={buildWhatsAppUrl(
          "Hola, me gustaría hacer una consulta a Farmacia Helena Soldevila.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center rounded-2xl border border-brand bg-white px-3 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
      >
        WhatsApp
      </a>
      <a
        href={PHARMACY.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center rounded-2xl bg-graphite px-3 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-graphite/90"
      >
        Cómo llegar
      </a>
    </div>
  );
}
