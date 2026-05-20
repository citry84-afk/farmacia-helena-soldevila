# Farmacia Helena Soldevila — Web local

Landing page de posicionamiento local para [www.farmaciasoldevila.com](https://www.farmaciasoldevila.com).

Stack: **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS**

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cambiar datos de la farmacia

Edita **`lib/constants.ts`**:

| Constante | Qué cambiar |
|-----------|-------------|
| `PHARMACY.phoneMobile` / `phoneMobileTel` | Móvil y WhatsApp (613 51 39 22) |
| `PHARMACY.phoneLandline` / `phoneLandlineTel` | Fijo farmacia (958 81 31 03) |
| `PHARMACY.whatsapp` | WhatsApp = móvil (`+34613513922`) |
| `PHARMACY.portraitImage` | Foto de Helena (`public/images/helena.webp`) |
| `PHARMACY.googleReviewsUrl` | Enlace a reseñas de Google Business |
| `PHARMACY.whatsappMessages` | Textos predefinidos de WhatsApp |

## Calendario festivo oficial (Granada)

Los festivos se sincronizan con:

- **Nacionales y andaluces**: [Nager.Date](https://date.nager.at) + traslados al lunes (BOJA Andalucía)
- **Locales ciudad de Granada**: [Ayuntamiento de Granada](https://www.granada.org/inet/wordenanz.nsf/calendario?open=&tipo=f) → `data/granada-local-holidays.json`

```bash
npm run sync:holidays   # Regenera data/holidays/{año}.json (ejecutar cada enero)
```

API: `GET /api/holidays?year=2026`

## Pendiente (cuando los tengas)

- **Logo oficial** → sustituir `components/Logo.tsx` y `public/icon.svg`
- **Foto de Helena** → `public/images/helena.webp`
| `PHARMACY.address` | Dirección NAP (debe coincidir con Google Business) |
| `PHARMACY.schedule` | Horario y nota de confirmación |
| `PHARMACY.googleMapsUrl` | URL de «Cómo llegar» (enlace de Google Maps / Business) |
| `PHARMACY.geo` | Coordenadas para mapa y JSON-LD |
| `PHARMACY.email` | Email del formulario mailto |
| `PHARMACY.instagram` | Perfil Instagram (`sameAs` en schema) |
| `SITE_URL` | Dominio producción (`https://www.farmaciasoldevila.com`) |

## Cambiar fotos

Sustituye los archivos en **`public/images/`** manteniendo los nombres:

- `fachada.webp` — Fachada / escaparate
- `interior.webp` — Interior general
- `mostrador.webp` — Mostrador o zona de atención
- `equipo.webp` — Productos / dermocosmética (o foto del equipo)

Recomendado: WebP, ancho máximo ~1600 px, peso &lt; 300 KB por imagen.

Los textos alternativos (SEO) están en `GALLERY_IMAGES` dentro de `lib/constants.ts`.

## Formulario de contacto

Por defecto usa **mailto** y **WhatsApp con mensaje pre-rellenado**.

Para envío automático sin salir de la página, integra en `components/Contact.tsx`:

- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- API propia (`/api/contact`)

## Despliegue (Vercel — ya configurado)

| Recurso | URL |
|---------|-----|
| **Producción Vercel** | https://farmacia-helena-soldevila.vercel.app |
| **Repositorio GitHub** | https://github.com/citry84-afk/farmacia-helena-soldevila |
| **Panel Vercel** | https://vercel.com/citry84-5661s-projects/farmacia-helena-soldevila |

Cada push a `main` en GitHub despliega automáticamente en Vercel.

### Conectar dominio en Namecheap

En **Namecheap → Domain List → farmaciasoldevila.com → Advanced DNS**, añade:

| Tipo | Host | Valor |
|------|------|--------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

(Opción alternativa: cambiar nameservers del dominio a los de Vercel: `ns1.vercel-dns.com` y `ns2.vercel-dns.com`.)

La propagación DNS puede tardar hasta 48 h. Cuando esté activo, la web responderá en `https://www.farmaciasoldevila.com`.

### Search Console

Conecta [Google Search Console](https://search.google.com/search-console) y envía el sitemap: `https://www.farmaciasoldevila.com/sitemap.xml`.

## SEO local — checklist

- [ ] Verificar NAP idéntico en web y Google Business Profile
- [ ] Confirmar horario real antes de publicar
- [ ] Pedir reseñas a clientes en Google Maps
- [ ] Publicar 4–6 fotos reales en la ficha de Google
- [ ] Revisar textos legales con profesional

## Estructura

```
app/           → Páginas (landing + legales)
components/    → Header, Hero, InfoCards, About, Services, Gallery, Contact, FAQ, Footer
lib/           → constants.ts (datos editables), schema.ts (JSON-LD), utils.ts
public/images/ → Fotos optimizadas
```
