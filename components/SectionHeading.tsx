type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const textClass = dark ? "text-white" : "text-graphite";
  const mutedClass = dark ? "text-white/70" : "text-graphite/65";
  const eyebrowClass = dark ? "text-white/80" : "text-brand";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.08] ${textClass}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed md:text-xl ${mutedClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}
