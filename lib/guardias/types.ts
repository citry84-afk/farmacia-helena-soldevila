/**
 * Tipos para el calendario de guardias de farmacia.
 * Cuando tengas el calendario oficial, rellena data/guardias/ según data/guardias/README.md
 */

export type GuardiaEntry = {
  /** Fecha YYYY-MM-DD (Europe/Madrid) */
  date: string;
  /** true si esta farmacia está de guardia ese día */
  isOnDuty: boolean;
  /** Horario de guardia, p. ej. "09:00–09:00 (24h)" — opcional */
  hours?: string;
  /** Nota libre (zona, turno compartido, etc.) */
  note?: string;
};

export type GuardiasMonth = {
  year: number;
  month: number;
  source?: string;
  syncedAt?: string;
  entries: GuardiaEntry[];
};

export type GuardiasCatalog = {
  generatedAt: string;
  months: Record<string, GuardiasMonth>;
};
