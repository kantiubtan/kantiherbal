// Centralized brand contact info
export const WHATSAPP_NUMBER = "919921431729"; // intl format, no +
export const PHONE_DISPLAY = "9921431729";
export const PHONE_TEL = "+919921431729";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
