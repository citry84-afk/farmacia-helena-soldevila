import { PHARMACY } from "./constants";

export function buildWhatsAppUrl(message?: string): string {
  const phone = PHARMACY.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildTelUrl(): string {
  return `tel:${PHARMACY.phoneTel}`;
}
