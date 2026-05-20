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
| `PHARMACY.phone` / `phoneTel` | Teléfono visible y enlace `tel:` |
| `PHARMACY.whatsapp` | Número WhatsApp internacional (`+34…`) |
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

## Despliegue (Vercel recomendado)

1. Sube el repositorio a GitHub.
2. Importa el proyecto en [Vercel](https://vercel.com).
3. En Namecheap, apunta el dominio a Vercel (registros A/CNAME según indique Vercel).
4. Añade dominio `www.farmaciasoldevila.com` en Vercel → Settings → Domains.
5. Conecta [Google Search Console](https://search.google.com/search-console) y envía el sitemap: `https://www.farmaciasoldevila.com/sitemap.xml`.

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
