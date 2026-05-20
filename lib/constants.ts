/**
 * Datos editables de la farmacia.
 * Actualiza estos valores y confirma horario/dirección en Google Business Profile.
 */

export const SITE_URL = "https://www.farmaciasoldevila.com";

export const PHARMACY = {
  name: "Farmacia Helena Soldevila",
  shortName: "Farmacia Helena Soldevila",
  address: {
    street: "C. Ribera del Violón, 6",
    postalCode: "18006",
    city: "Granada",
    region: "Andalucía",
    country: "ES",
    full: "C. Ribera del Violón, 6, 18006 Granada",
  },
  /** Móvil — llamadas y WhatsApp */
  phoneMobile: "613 51 39 22",
  phoneMobileTel: "+34613513922",
  /** Fijo de la farmacia */
  phoneLandline: "958 81 31 03",
  phoneLandlineTel: "+34958813103",
  /** Número WhatsApp (móvil) */
  whatsapp: "+34613513922",
  /** Foto de Helena — sustituye por /public/images/helena.webp cuando la tengas */
  portraitImage: "/images/helena.webp",
  portraitAlt:
    "Helena Soldevila, farmacéutica titular de Farmacia Helena Soldevila en Granada",
  email: "info@farmaciasoldevila.com",
  instagram: "https://www.instagram.com/farmacia.helenasoldevila/",
  /** Enlace a Google Maps — sustituye por tu URL de Google Business si la tienes */
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Farmacia+Helena+Soldevila+Calle+Ribera+del+Violon+6+Granada",
  /** URL del iframe de mapa (embed de Google Maps → Compartir → Insertar mapa) */
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178!2d-3.5986!3d37.1689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR3JhbmFkYQ!5e0!3m2!1ses!2ses!4v1&q=Calle+Ribera+del+Viol%C3%B3n+6%2C+18006+Granada",
  geo: {
    latitude: 37.1689,
    longitude: -3.5986,
  },
  schedule: {
    note: "Horario orientativo. Confirma en farmacia o por teléfono antes de acudir.",
    weekdays: "Lunes a viernes: 09:00–14:00 y 17:00–20:30",
    saturday: "Sábado: 09:30–13:30",
    sunday: "Domingo: cerrado",
    summary:
      "Lunes a viernes 09:00–14:00 y 17:00–20:30 · Sábado 09:30–13:30 · Domingo cerrado",
    holidaysNote:
      "En festivos locales y nacionales el horario puede variar. Confirma por teléfono o WhatsApp antes de acudir.",
  },
  access: {
    ramp: "Entrada a nivel de calle con rampa, accesible para sillas de ruedas y carritos.",
    transport:
      "Muy bien ubicada en Ribera del Violón, a pocos minutos de Camino de Ronda.",
    parking: "Aparcamiento en zona reglada en las calles adyacentes.",
  },
  prescriptions:
    "Gestionamos recetas electrónicas y te ayudamos con el seguimiento de tu medicación habitual.",
  /** Sustituye por el enlace directo de reseñas de tu ficha de Google Business */
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Farmacia+Helena+Soldevila+Calle+Ribera+del+Violon+6+Granada",
  whatsappMessages: {
    general: "Hola, me gustaría información sobre Farmacia Helena Soldevila.",
    product:
      "Hola, quería consultar si tenéis disponible el siguiente producto: ",
  },
  openingHoursSchema: [
    "Mo-Fr 09:00-14:00",
    "Mo-Fr 17:00-20:30",
    "Sa 09:30-13:30",
  ],
} as const;

export const SEO = {
  title: "Farmacia Helena Soldevila en Granada | Ribera del Violón",
  description:
    "Tu farmacia cercana en C. Ribera del Violón, 6, Granada. Horario, teléfono, WhatsApp y cómo llegar. Atención farmacéutica profesional y trato humano.",
  keywords: [
    "farmacia en Granada",
    "farmacia Ribera del Violón",
    "farmacia cerca de Camino de Ronda",
    "Farmacia Helena Soldevila",
    "farmacia 18006 Granada",
  ],
} as const;

export const NAV_LINKS = [
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#horario", label: "Horario" },
  { href: "#sobre-nosotros", label: "Sobre nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const SERVICES = [
  {
    title: "Consejo farmacéutico personalizado",
    description:
      "Asesoramiento profesional adaptado a tu situación de salud, medicación y hábitos.",
  },
  {
    title: "Dermocosmética y cuidado de la piel",
    description:
      "Selección de marcas de referencia y recomendaciones para cada tipo de piel.",
  },
  {
    title: "Salud familiar y bienestar",
    description:
      "Productos y orientación para el cuidado diario de toda la familia.",
  },
  {
    title: "Consulta de disponibilidad de productos",
    description:
      "Pregúntanos por WhatsApp o teléfono antes de desplazarte.",
  },
  {
    title: "Encargo de productos de farmacia y parafarmacia",
    description:
      "Te ayudamos a conseguir lo que necesitas con la mayor rapidez posible.",
  },
  {
    title: "Atención cercana en Granada",
    description:
      "Farmacia de barrio en Ribera del Violón, cerca de Camino de Ronda y el centro.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿Dónde está la Farmacia Helena Soldevila?",
    answer: `Estamos en ${PHARMACY.address.full}, en el barrio de Ribera del Violón, Granada. Puedes abrir Google Maps con el botón «Cómo llegar».`,
  },
  {
    question: "¿Cuál es el horario de la farmacia?",
    answer: `${PHARMACY.schedule.weekdays}. ${PHARMACY.schedule.saturday}. ${PHARMACY.schedule.sunday}. ${PHARMACY.schedule.note}`,
  },
  {
    question: "¿Abrís los sábados por la tarde?",
    answer: `Los sábados abrimos de 09:30 a 13:30. ${PHARMACY.schedule.note}`,
  },
  {
    question: "¿Qué teléfonos puedo usar para contactar?",
    answer: `Móvil ${PHARMACY.phoneMobile} (WhatsApp y llamadas) y fijo ${PHARMACY.phoneLandline}.`,
  },
  {
    question: "¿Está abierta la farmacia ahora?",
    answer:
      "En la parte superior de la web verás si estamos abiertos o cerrados según el horario habitual. En festivos puede variar: confirma por teléfono o WhatsApp.",
  },
  {
    question: "¿Abrís en festivos?",
    answer: PHARMACY.schedule.holidaysNote,
  },
  {
    question: "¿Gestionáis recetas electrónicas?",
    answer: PHARMACY.prescriptions,
  },
  {
    question: "¿Hay aparcamiento o acceso para sillas de ruedas?",
    answer: `${PHARMACY.access.ramp} ${PHARMACY.access.parking}`,
  },
  {
    question: "¿Puedo consultar si tenéis un producto antes de ir?",
    answer:
      "Sí. Llámanos o escríbenos por WhatsApp y te confirmamos disponibilidad o plazo de encargo.",
  },
  {
    question: "¿Hacéis encargos de parafarmacia?",
    answer:
      "Sí, gestionamos encargos de farmacia y parafarmacia. Contacta con nosotros para más detalles.",
  },
  {
    question: "¿Sois farmacia cerca de Camino de Ronda?",
    answer:
      "Sí, estamos en Ribera del Violón, una zona muy accesible desde Camino de Ronda y el sur de Granada.",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/fachada.webp",
    alt: "Fachada de Farmacia Helena Soldevila en Granada, C. Ribera del Violón",
    caption: "Fachada",
  },
  {
    src: "/images/interior.webp",
    alt: "Interior luminoso de la Farmacia Helena Soldevila en Granada",
    caption: "Interior",
  },
  {
    src: "/images/mostrador.webp",
    alt: "Mostrador y zona de atención en Farmacia Helena Soldevila",
    caption: "Mostrador",
  },
  {
    src: "/images/equipo.webp",
    alt: "Estanterías de dermocosmética en Farmacia Helena Soldevila Granada",
    caption: "Dermocosmética",
  },
] as const;
