"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, PHARMACY } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-graphite/5 bg-surface/90 shadow-soft backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between gap-4 py-4 md:py-5">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-85"
          onClick={closeMenu}
          aria-label={PHARMACY.shortName}
        >
          <Logo priority />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-graphite/75 transition hover:bg-graphite/5 hover:text-graphite lg:px-4"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${PHARMACY.phoneMobileTel}`}
              className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              {PHARMACY.phoneMobile}
            </a>
            <a
              href={`tel:${PHARMACY.phoneLandlineTel}`}
              className="rounded-full border border-graphite/15 px-4 py-2 text-sm font-medium text-graphite transition hover:border-brand/30"
            >
              {PHARMACY.phoneLandline}
            </a>
          </div>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-graphite/10 bg-white/80 text-graphite md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? "Cerrar" : "Menú"}</span>
          {menuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-graphite/8 bg-surface/95 px-5 pb-6 pt-4 md:hidden"
          aria-label="Menú móvil"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-graphite hover:bg-white"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={`tel:${PHARMACY.phoneMobileTel}`}
              className="rounded-2xl bg-brand py-3 text-center text-sm font-semibold text-white"
              onClick={closeMenu}
            >
              Llamar móvil
            </a>
            <a
              href={`tel:${PHARMACY.phoneLandlineTel}`}
              className="rounded-2xl border border-graphite/15 bg-white py-3 text-center text-sm font-semibold text-graphite"
              onClick={closeMenu}
            >
              Llamar fijo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
