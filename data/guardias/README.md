# Calendario de guardias (pendiente)

Aquí irán los datos cuando pases el calendario oficial de guardias de farmacia.

## Formato recomendado

Un archivo por mes: `YYYY-MM.json`

```json
{
  "year": 2026,
  "month": 6,
  "source": "Colegio Oficial de Farmacéuticos de Granada / PDF que proporciones",
  "syncedAt": "2026-06-01T10:00:00.000Z",
  "entries": [
    {
      "date": "2026-06-15",
      "isOnDuty": true,
      "hours": "09:00–09:00",
      "note": "Farmacia Helena Soldevila"
    },
    {
      "date": "2026-06-16",
      "isOnDuty": false
    }
  ]
}
```

Solo hace falta listar los días en que **esta farmacia** está de guardia (`isOnDuty: true`), o un mes completo con true/false por día.

## Activar en la web

1. Añade los JSON en esta carpeta.
2. Implementa la lectura en `lib/guardias/index.ts` (hay TODOs).
3. En `lib/constants.ts` → `GUARDIAS.enabled: true`.
4. En `app/page.tsx` → descomenta `<Guardias />`.
5. Opcional: script `scripts/sync-guardias.mjs` si el calendario viene en PDF/Excel.

## Fuentes habituales (referencia)

- Colegio de Farmacéuticos de Granada
- Boletín / PDF de guardias del mes
- Calendario que te pase Helena

No publicar nada en la web hasta confirmar fechas con la farmacia.
