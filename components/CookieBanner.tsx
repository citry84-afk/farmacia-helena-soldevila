"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "fhs-cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-20 z-[60] border-t border-graphite/10 bg-white/95 p-4 shadow-soft-lg backdrop-blur-xl md:inset-x-auto md:bottom-4 md:right-4 md:max-w-md md:rounded-3xl md:border"
    >
      <p className="text-sm leading-relaxed text-graphite/80">
        Usamos cookies técnicas y el mapa de Google puede instalar cookies de terceros.{" "}
        <Link href="/politica-cookies" className="font-medium text-brand hover:underline">
          Más información
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-3 w-full rounded-full bg-brand py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark md:w-auto md:px-8"
      >
        Entendido
      </button>
    </div>
  );
}
