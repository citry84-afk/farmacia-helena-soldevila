import { PHARMACY } from "./constants";

const query = encodeURIComponent(PHARMACY.address.full);
const { latitude, longitude } = PHARMACY.geo;

export const MAP_LINKS = [
  {
    id: "google",
    label: "Google Maps",
    href: PHARMACY.googleMapsUrl,
  },
  {
    id: "apple",
    label: "Apple Maps",
    href: `https://maps.apple.com/?q=${query}&ll=${latitude},${longitude}`,
  },
  {
    id: "waze",
    label: "Waze",
    href: `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes&q=${query}`,
  },
] as const;
