import Link from "next/link";
import { PHARMACY } from "@/lib/constants";
import { buildTelUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-graphite md:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-lg text-graphite/65">
        La página que buscas no existe. Vuelve al inicio o contacta con {PHARMACY.shortName}.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg">
          Ir al inicio
        </Button>
        <Button href={buildTelUrl("mobile")} variant="secondary" size="lg">
          Llamar {PHARMACY.phoneMobile}
        </Button>
      </div>
    </div>
  );
}
