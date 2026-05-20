/**
 * Sección de guardias de farmacia — NO IMPORTAR en page.tsx hasta tener datos.
 *
 * Uso futuro:
 *   import { Guardias } from "@/components/Guardias";
 *   ...
 *   <Guardias />
 */

import { PHARMACY, GUARDIAS } from "@/lib/constants";
import { getUpcomingGuardias, isGuardiasEnabled } from "@/lib/guardias";
import { buildTelUrl, buildWhatsAppUrl } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/Button";

export function Guardias() {
  if (!isGuardiasEnabled()) return null;

  const upcoming = getUpcomingGuardias(5);

  return (
    <section
      id="guardias"
      className="scroll-mt-32 section-pad bg-white"
      aria-labelledby="guardias-heading"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Farmacia de guardia"
          title="¿Cuándo estamos de guardia?"
          description="Consulta los próximos días en los que Farmacia Helena Soldevila atiende fuera del horario habitual."
        />

        {upcoming.length === 0 ? (
          <p className="mt-8 text-graphite/65">
            No hay guardias programadas publicadas. Llama o escribe por WhatsApp para
            confirmar la farmacia de guardia en tu zona.
          </p>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((g) => (
              <li
                key={g.date}
                className="rounded-4xl border border-brand/15 bg-brand-muted px-6 py-5"
              >
                <p className="font-semibold text-graphite">{g.date}</p>
                {g.hours && <p className="mt-1 text-brand">{g.hours}</p>}
                {g.note && <p className="mt-2 text-sm text-graphite/65">{g.note}</p>}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={buildTelUrl("mobile")} size="lg">
            Llamar
          </Button>
          <Button
            href={buildWhatsAppUrl(
              `Hola, consulto por la farmacia de guardia en ${PHARMACY.address.city}.`,
            )}
            variant="secondary"
            size="lg"
          >
            WhatsApp
          </Button>
        </div>

        {GUARDIAS.officialUrl && (
          <p className="mt-6 text-sm text-graphite/55">
            Fuente:{" "}
            <a
              href={GUARDIAS.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Calendario oficial de guardias
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
