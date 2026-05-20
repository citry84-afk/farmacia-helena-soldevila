import Link from "next/link";
import { NAV_LINKS, PHARMACY } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { PhoneNumbers } from "./PhoneNumbers";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite/8 bg-white pb-28 pt-20 md:pb-16">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="text-lg font-semibold tracking-tight text-graphite">
                {PHARMACY.name}
              </span>
            </div>
            <p className="mt-5 text-graphite/70 leading-relaxed">{PHARMACY.address.full}</p>
            <div className="mt-4">
              <PhoneNumbers />
            </div>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-brand hover:underline"
            >
              WhatsApp
            </a>
          </div>

          <nav aria-label="Enlaces de página">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite/45">
              Secciones
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-graphite/70 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Enlaces legales">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite/45">
              Legal y redes
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/aviso-legal" className="text-graphite/70 hover:text-brand">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-graphite/70 hover:text-brand">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-graphite/70 hover:text-brand">
                  Cookies
                </Link>
              </li>
              <li>
                <a
                  href={PHARMACY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite/70 hover:text-brand"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={PHARMACY.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite/70 hover:text-brand"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-14 border-t border-graphite/8 pt-8 text-center text-sm text-graphite/45">
          © {year} {PHARMACY.name}. Sin venta online de medicamentos.
        </p>
      </div>
    </footer>
  );
}
