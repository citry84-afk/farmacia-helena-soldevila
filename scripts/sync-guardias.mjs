#!/usr/bin/env node
/**
 * PLACEHOLDER — No ejecutar hasta tener fuente de datos de guardias.
 *
 * Uso futuro:
 *   node scripts/sync-guardias.mjs
 *
 * Convertirá el calendario que proporciones (PDF, Excel, CSV del colegio)
 * en data/guardias/YYYY-MM.json
 */

console.log(`
Calendario de guardias — script preparado, sin implementar.

Pasos cuando tengas los datos:
  1. Coloca el archivo fuente en data/guardias/source/ (o indica la ruta)
  2. Implementa el parser en este script
  3. Genera data/guardias/YYYY-MM.json
  4. Activa GUARDIAS.enabled en lib/constants.ts

Ver data/guardias/README.md
`);

process.exit(0);
