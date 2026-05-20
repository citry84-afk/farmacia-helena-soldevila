/**
 * Calendario de guardias — PREPARADO, NO ACTIVO EN LA WEB.
 *
 * Para activar cuando tengas el calendario:
 * 1. Rellena data/guardias/ (ver README en esa carpeta)
 * 2. Pon GUARDIAS.enabled = true en lib/constants.ts
 * 3. Descomenta <Guardias /> en app/page.tsx
 */

import type { GuardiaEntry, GuardiasMonth } from "./types";

import { GUARDIAS } from "@/lib/constants";

export function isGuardiasEnabled(): boolean {
  return GUARDIAS.enabled;
}

/**
 * Devuelve la guardia del día si existe en datos locales.
 * Por ahora siempre null hasta importar JSON en data/guardias/.
 */
export function getGuardiaForDate(_isoDate: string): GuardiaEntry | null {
  if (!isGuardiasEnabled()) return null;
  // TODO: importar mes desde data/guardias/{YYYY-MM}.json
  return null;
}

/**
 * Próximas guardias de esta farmacia.
 */
export function getUpcomingGuardias(_limit = 3): GuardiaEntry[] {
  if (!isGuardiasEnabled()) return [];
  // TODO: leer catálogo y filtrar isOnDuty === true, date >= hoy
  return [];
}

/**
 * Mes completo (para calendario visual futuro).
 */
export function getGuardiasMonth(
  _year: number,
  _month: number,
): GuardiasMonth | null {
  if (!isGuardiasEnabled()) return null;
  return null;
}
