"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, PHARMACY } from "@/lib/constants";
import { buildTelUrl } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-graphite/5 bg-surface/80 shadow-soft backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between gap-4 py-4 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-graphite transition-opacity hover:opacity-80"
        >
          <Logo className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline md:text-[15px]">
            {PHARMACY.shortName}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-graphite/75 transition hover:bg-graphite/5 hover:text-graphite"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildTelUrl()}
            className="ml-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            {PHARMACY.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
