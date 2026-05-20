import { PHARMACY } from "@/lib/constants";
import { buildTelUrl } from "@/lib/utils";

type Props = {
  layout?: "stack" | "inline";
  size?: "md" | "lg";
  showLabels?: boolean;
};

export function PhoneNumbers({
  layout = "stack",
  size = "md",
  showLabels = true,
}: Props) {
  const sizeClass = size === "lg" ? "text-3xl" : "text-xl";

  const mobile = (
    <div>
      {showLabels && (
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-graphite/50">
          Móvil · WhatsApp
        </span>
      )}
      <a
        href={buildTelUrl("mobile")}
        className={`${sizeClass} mt-1 block font-semibold tracking-tight text-graphite transition hover:text-brand`}
      >
        {PHARMACY.phoneMobile}
      </a>
    </div>
  );

  const landline = (
    <div>
      {showLabels && (
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-graphite/50">
          Fijo farmacia
        </span>
      )}
      <a
        href={buildTelUrl("landline")}
        className={`${size === "lg" ? "text-2xl" : "text-lg"} mt-1 block font-semibold tracking-tight text-graphite transition hover:text-brand`}
      >
        {PHARMACY.phoneLandline}
      </a>
    </div>
  );

  if (layout === "inline") {
    return (
      <p className="text-graphite/80">
        <a href={buildTelUrl("mobile")} className="font-semibold text-brand hover:underline">
          {PHARMACY.phoneMobile}
        </a>
        <span className="mx-2 text-graphite/30">·</span>
        <a href={buildTelUrl("landline")} className="font-semibold text-graphite hover:text-brand hover:underline">
          {PHARMACY.phoneLandline}
        </a>
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {mobile}
      {landline}
    </div>
  );
}
