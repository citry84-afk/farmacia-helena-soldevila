import { PHARMACY } from "./constants";

export type PhoneKind = "mobile" | "landline";

export function buildTelUrl(kind: PhoneKind = "mobile"): string {
  const tel =
    kind === "landline" ? PHARMACY.phoneLandlineTel : PHARMACY.phoneMobileTel;
  return `tel:${tel}`;
}

export function buildWhatsAppUrl(message?: string): string {
  const phone = PHARMACY.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
