import { MAP_LINKS } from "@/lib/maps";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function MapLinks({ variant = "dark", className = "" }: Props) {
  const base =
    variant === "dark"
      ? "rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/25"
      : "rounded-full border border-graphite/12 bg-white px-4 py-2 text-sm font-medium text-graphite transition hover:border-brand/30 hover:text-brand";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {MAP_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
