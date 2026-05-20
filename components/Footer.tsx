import Link from "next/link";
import { PHARMACY } from "@/lib/constants";
import { buildTelUrl } from "@/lib/utils";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite/10 bg-white pb-28 pt-16 md:pb-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-semibold text-graphite">{PHARMACY.name}</span>
            </div>
            <p className="mt-4 text-graphite/70 leading-relaxed">
              {PHARMACY.address.full}
              <br />
              <a href={buildTelUrl()} className="text-brand hover:underline">
                {PHARMACY.phone}
              </a>
            </p>
            <p className="mt-4 text-sm text-graphite/60">
              No vendemos medicamentos online. Este sitio es informativo para
              posicionamiento local y contacto con la farmacia física.
            </p>
          </div>
          <nav aria-label="Enlaces legales" className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-graphite/50">
              Legal
            </span>
            <Link href="/aviso-legal" className="text-graphite/80 hover:text-brand">
              Aviso legal
            </Link>
            <Link href="/politica-privacidad" className="text-graphite/80 hover:text-brand">
              Política de privacidad
            </Link>
            <Link href="/politica-cookies" className="text-graphite/80 hover:text-brand">
              Política de cookies
            </Link>
            <a
              href={PHARMACY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite/80 hover:text-brand"
            >
              Instagram
            </a>
          </nav>
        </div>
        <p className="mt-12 border-t border-graphite/10 pt-8 text-center text-sm text-graphite/50">
          © {year} {PHARMACY.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
