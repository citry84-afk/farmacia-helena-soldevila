"use client";

import { useEffect, useState } from "react";
import { getTodayScheduleLabel } from "@/lib/schedule";

export function TodaySchedule() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setLabel(getTodayScheduleLabel());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!label) {
    return <div className="mt-3 h-5 w-48 animate-pulse rounded-lg bg-graphite/10" aria-hidden />;
  }

  return (
    <p className="mt-3 rounded-2xl bg-brand-muted px-4 py-2.5 text-sm font-medium text-brand">
      {label}
    </p>
  );
}
