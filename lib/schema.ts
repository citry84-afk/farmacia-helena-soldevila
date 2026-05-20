import { GALLERY_IMAGES, PHARMACY, SITE_URL } from "./constants";

export function getPharmacyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": `${SITE_URL}/#pharmacy`,
    name: PHARMACY.name,
    description:
      "Farmacia en Granada con atención farmacéutica profesional, trato humano y asesoramiento personalizado en Ribera del Violón.",
    url: SITE_URL,
    telephone: PHARMACY.phoneTel,
    email: PHARMACY.email,
    image: `${SITE_URL}${GALLERY_IMAGES[0].src}`,
    logo: `${SITE_URL}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: PHARMACY.address.street,
      addressLocality: PHARMACY.address.city,
      addressRegion: PHARMACY.address.region,
      postalCode: PHARMACY.address.postalCode,
      addressCountry: PHARMACY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PHARMACY.geo.latitude,
      longitude: PHARMACY.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "13:30",
      },
    ],
    sameAs: [PHARMACY.instagram],
    areaServed: {
      "@type": "City",
      name: "Granada",
    },
    priceRange: "$$",
  };
}
