import Link from "next/link";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-36">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm font-medium text-brand hover:underline"
      >
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-bold text-graphite md:text-4xl">{title}</h1>
      <div className="prose-legal mt-8 space-y-4 text-graphite/80 leading-relaxed">
        {children}
      </div>
    </article>
  );
}
