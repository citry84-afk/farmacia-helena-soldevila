# Farmacia Helena Soldevila — Documento del proyecto

> Handoff para retomar el proyecto. Última actualización: **10 de agosto de 2026**.

---

## 1. Qué es y para qué sirve

**Landing page de SEO local** (no e-commerce) para la farmacia física en Granada.

| Objetivo | Estado |
|----------|--------|
| Que la gente encuentre la farmacia en Google (marca + zona) | En curso, crecimiento orgánico |
| Mostrar horario, contacto, ubicación y servicios al instante | Hecho |
| Transmitir confianza (Helena, fotos, reseñas, FAQ) | Hecho |
| Posicionar en búsquedas locales («farmacia Granada», «Ribera del Violón») | Fase inicial |
| Vender online medicamentos | **No** — explícitamente descartado |

**Tipo de web:** una sola página principal (`/`) + páginas legales. Sin panel de administración.

---

## 2. URLs y despliegue

| Recurso | URL |
|---------|-----|
| **Dominio producción** | https://www.farmaciasoldevila.com |
| **Vercel (alternativo)** | https://farmacia-helena-soldevila.vercel.app |
| **GitHub** | https://github.com/citry84-afk/farmacia-helena-soldevila |
| **Panel Vercel** | https://vercel.com/citry84-5661s-projects/farmacia-helena-soldevila |
| **Google Search Console** | Propiedad verificada en `https://www.farmaciasoldevila.com/` |

**Despliegue:** cada `git push` a `main` despliega automáticamente en Vercel.

### DNS (Namecheap)

En **Advanced DNS** deben existir solo estos registros (sin parking ni redirect):

| Tipo | Host | Valor |
|------|------|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

---

## 3. Stack técnico

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (hosting)
- **Namecheap** (dominio)

Comandos habituales:

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # comprobar antes de subir cambios
npm run sync:holidays  # regenerar festivos oficiales de Granada
```

---

## 4. Datos de la farmacia (fuente de verdad)

Todo editable en **`lib/constants.ts`**. Debe coincidir con **Google Business Profile** (NAP: nombre, dirección, teléfono).

| Dato | Valor actual |
|------|----------------|
| Nombre | Farmacia Helena Soldevila |
| Dirección | C. Ribera del Violón, 6, 18006 Granada |
| Móvil / WhatsApp | 613 51 39 22 (`+34613513922`) |
| Fijo | 958 81 31 03 (`+34958813103`) |
| Email | fciagranadarg@gmail.com |
| Instagram | @farmacia.helenasoldevila |
| Lema | «Cuidamos de ti, cada día» |
| Logo | `public/logo.webp` |
| Retrato Helena | `public/images/helena.webp` |

**Pendiente en constants:** `googleWriteReviewUrl` (Place ID de Google Business para enlace «Escribir reseña»).

---

## 5. Qué se ha construido (funcionalidades)

### UX / conversión
- Estado **abierto / cerrado** en tiempo real según horario y festivos (`OpenStatus`, `lib/schedule.ts`).
- Horario de hoy destacado (`TodaySchedule`).
- Botones flotantes móvil: WhatsApp, Llamar, Cómo llegar.
- Acciones rápidas escritorio (WhatsApp, Llamar, Producto, Llegar).
- Tarjetas «Lo esencial»: ubicación (con foto fachada), horario, contacto — layout **bento** en escritorio.
- Formulario contacto vía **mailto** + WhatsApp (sin backend de email).
- Aviso de no urgencias (112) en contacto.
- Banner de cookies + páginas legales (textos provisionales).

### Contenido
- Hero con lema + presentación de **Helena** (foto + texto) al inicio de la página.
- Servicios, galería, sección confianza (Google + Instagram), FAQ con schema.
- Bloque SEO local (zonas: Ribera del Violón, Camino de Ronda, etc.).
- Calendario de **festivos oficiales Granada** sincronizado (Nager.Date + Ayuntamiento).
- **Guardias de farmacia:** estructura preparada pero **desactivada** (`GUARDIAS.enabled: false`).

### Técnico / SEO
- JSON-LD: `Pharmacy`, `WebSite`, `FAQPage`, `BreadcrumbList`.
- `robots.txt` y `sitemap.xml` generados (`app/robots.ts`, `app/sitemap.ts`).
- Meta geolocalización + verificación **Google Search Console** en `app/layout.tsx`.
- Páginas legales con `noindex` para no competir con la home.
- Open Graph, manifest, favicon con logo oficial.

---

## 6. Evolución del diseño (decisiones importantes)

1. **Estilo Apple-like:** limpio, tipografía grande, sombras suaves, mucho blanco.
2. **Galería:** se quitó el salto a fondo oscuro; todo en tonos claros.
3. **Tarjeta ubicación:** se probó bloque verde con hueco vacío → se rediseñó a 3 tarjetas blancas con fachada integrada en la tarjeta de ubicación.
4. **Hero:** primero nombre de farmacia → luego lema «Cuidamos de ti» → luego **bloque completo de Helena** al inicio.
5. **Foto fachada en hero:** se quitó (rompía el flujo); la fachada sigue en tarjeta Ubicación y en Galería.

---

## 7. SEO — qué se hizo y cómo va

### Hecho en código
- Título/description orientados a «farmacia en Granada», «Ribera del Violón».
- Schema completo de negocio local.
- Sitemap con home + legales; home prioridad 1.
- Verificación GSC: meta `google-site-verification` en layout.
- Keywords en constants; sección `LocalSeo` con barrios/zonas.

### Google Search Console (referencia ~agosto 2026, 28 días)

| Métrica | Valor |
|---------|--------|
| Clics | 10 |
| Impresiones | 126 |
| CTR | ~7,9% |
| Posición media | ~6,9 |
| Sitemap | `/sitemap.xml` — **Correcto**, 4 páginas |

**Consulta principal:** `farmacia helena soldevila` (5 clics / 23 impresiones).  
**Lectura:** fase normal de web joven — primero marca, luego búsquedas de zona. Decisión del cliente: **dejar crecer orgánicamente** (sin campaña agresiva de reseñas/enlaces).

### Mantenimiento SEO ligero (recomendado)
- Revisar GSC 1× al mes (Rendimiento, Indexación, Core Web Vitals).
- Mantener NAP idéntico web ↔ Google Business.
- Si cambia horario o teléfono, actualizar `constants.ts` + schema + ficha Google.

---

## 8. Estructura de archivos clave

```
app/
  page.tsx          → Orden de secciones de la landing
  layout.tsx        → Metadata global, GSC, JSON-LD, Header/Footer
  sitemap.ts        → Sitemap
  robots.ts         → Robots
  aviso-legal/      → Legal (noindex)
  politica-*/

components/
  Hero.tsx          → Lema + Helena + botones (sin fachada grande)
  About.tsx         → AboutIntro (foto Helena + texto)
  InfoCards.tsx     → Ubicación / Horario / Contacto (bento)
  Contact.tsx       → Formulario + mapa embed
  LocalSeo.tsx      → Bloque keywords locales
  FAQ.tsx           → Preguntas frecuentes

lib/
  constants.ts      → ★ DATOS EDITABLES
  schema.ts         → JSON-LD
  schedule.ts       → Lógica abierto/cerrado + festivos
  holidays/         → Lectura JSON por año

data/
  holidays/         → JSON festivos (2025, 2026, 2027)
  granada-local-holidays.json
  guardias/         → Preparado, sin activar

public/
  logo.webp         → Logo oficial
  images/           → fachada, interior, mostrador, equipo, helena
```

---

## 9. Orden de secciones en la home (`app/page.tsx`)

1. Hero (+ AboutIntro / Helena)
2. InfoCards (Lo esencial)
3. QuickActions
4. HolidayCalendar (festivos Granada)
5. Services
6. Gallery
7. TrustSection
8. Contact
9. LocalSeo
10. FAQ

*(Guardias comentado hasta tener calendario.)*

---

## 10. Pendientes (cuando toque)

| Tarea | Dónde / cómo |
|-------|----------------|
| Place ID Google → enlace «Escribir reseña» | `PHARMACY.googleWriteReviewUrl` |
| Activar calendario guardias | `data/guardias/`, `GUARDIAS.enabled`, `<Guardias />` en page |
| Revisar textos legales con profesional | `app/aviso-legal`, `politica-*` |
| Confirmar coordenadas / embed mapa exactos | `PHARMACY.geo`, `googleMapsEmbedUrl` |
| URL Google Maps «oficial» de la ficha | `googleMapsUrl`, `googleReviewsUrl` |
| Sincronizar festivos cada enero | `npm run sync:holidays` |

---

## 11. Historial de commits relevantes

```
7ff9747 GSC verification + SEO técnico
2e4e970 Quitar fachada del hero
393ef18 Helena al inicio de la página
74452e1 Lema «Cuidamos de ti» en hero
01bb8ad Logo oficial
d91bff6 InfoCards layout bento
fd68285 Logo en branding
55be9d1 Email fciagranadarg@gmail.com
5d755f9 Festivos Granada oficiales
d7a3da3 Abierto/cerrado + quick actions
b0f9406 Teléfono 613 + diseño Apple
8f7bfdc Landing inicial
```

---

## 12. Contacto del proyecto

- **Cliente / titular:** Farmacia Helena Soldevila (Helena Soldevila, farmacéutica titular desde 2022).
- **Repositorio:** `citry84-afk/farmacia-helena-soldevila`.
- **Cuenta Vercel:** citry84-5661.

---

## 13. Retomar el proyecto — checklist rápido

1. `git pull` en la carpeta del repo.
2. `npm install` (si hace falta).
3. `npm run dev` → revisar en localhost:3000.
4. Cambios de datos → **`lib/constants.ts`**.
5. `npm run build` antes de push.
6. `git push origin main` → deploy automático.
7. GSC: https://search.google.com/search-console → propiedad `farmaciasoldevila.com`.

Para detalle operativo (festivos, guardias, formulario), ver también **`README.md`**.
