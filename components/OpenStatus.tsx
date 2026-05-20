"use client";

import { useEffect, useState } from "react";
import { getPharmacyOpenStatus, type OpenStatus } from "@/lib/schedule";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function OpenStatus({ size = "md", className = "" }: Props) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getPharmacyOpenStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) {
    return (
      <div
        className={`inline-flex h-10 w-40 animate-pulse rounded-full bg-graphite/10 ${className}`}
        aria-hidden
      />
    );
  }

  const sizeClasses = {
    sm: "gap-2 px-3 py-1.5 text-sm",
    md: "gap-2.5 px-4 py-2 text-sm",
    lg: "gap-3 px-5 py-2.5 text-base",
  };

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center rounded-full border ${
        status.isOpen
          ? "border-brand/25 bg-brand-muted"
          : "border-graphite/10 bg-white/80"
      } ${sizeClasses[size]} ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${
          status.isOpen
            ? "bg-brand animate-pulse"
            : status.isHoliday
              ? "bg-amber-500"
              : "bg-graphite/35"
        }`}
        aria-hidden
      />
      <span className="font-semibold text-graphite">{status.badge}</span>
      <span className="text-graphite/60">·</span>
      <span className="text-graphite/75">{status.detail}</span>
    </div>
  );
}
