"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, PHARMACY } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-graphite/5 bg-surface/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-graphite transition hover:text-brand"
        >
          <Logo className="h-9 w-9 shrink-0" />
          <span className="text-sm font-semibold leading-tight md:text-base">
            {PHARMACY.shortName}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite/80 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
