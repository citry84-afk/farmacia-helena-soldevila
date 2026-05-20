import Link from "next/link";
import { PHARMACY } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { PhoneNumbers } from "./PhoneNumbers";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite/8 bg-white pb-28 pt-20 md:pb-16">
      <div className="container-main">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="text-lg font-semibold tracking-tight text-graphite">
                {PHARMACY.name}
              </span>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-graphite/70">
              {PHARMACY.address.full}
            </p>
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
          <nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <Link href="/aviso-legal" className="text-graphite/70 hover:text-brand">
              Aviso legal
            </Link>
            <Link href="/politica-privacidad" className="text-graphite/70 hover:text-brand">
              Privacidad
            </Link>
            <Link href="/politica-cookies" className="text-graphite/70 hover:text-brand">
              Cookies
            </Link>
            <a
              href={PHARMACY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite/70 hover:text-brand"
            >
              Instagram
            </a>
          </nav>
        </div>
        <p className="mt-14 border-t border-graphite/8 pt-8 text-center text-sm text-graphite/45">
          © {year} {PHARMACY.name}. Sin venta online de medicamentos.
        </p>
      </div>
    </footer>
  );
}
