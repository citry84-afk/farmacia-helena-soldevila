"use client";

import { PHARMACY } from "@/lib/constants";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-graphite/8 bg-surface/90 p-3 backdrop-blur-2xl backdrop-saturate-150 md:hidden"
      role="group"
      aria-label="Acciones rápidas"
    >
      <div className="flex gap-2">
        <a
          href={buildTelUrl()}
          className="flex flex-1 items-center justify-center rounded-full bg-brand py-3.5 text-sm font-semibold text-white shadow-soft"
        >
          Llamar
        </a>
        <a
          href={buildWhatsAppUrl(
            "Hola, me gustaría hacer una consulta a Farmacia Helena Soldevila.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-full border border-graphite/15 bg-white py-3.5 text-sm font-semibold text-graphite"
        >
          WhatsApp
        </a>
        <a
          href={PHARMACY.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-full bg-graphite py-3.5 text-sm font-semibold text-white"
        >
          Llegar
        </a>
      </div>
    </div>
  );
}
