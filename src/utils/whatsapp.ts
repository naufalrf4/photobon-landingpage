import type { Lead } from "@/utils/lead";

export function buildWhatsAppMessage(lead: Lead): string {
  const sections = [
    `Halo, saya tertarik dengan Photobon`,
    ``,
    `Nama: ${lead.name}`,
    `Kebutuhan: ${lead.context}`,
    ``,
    `Use Case: ${lead.useCase}`,
    `Halaman: ${lead.page}`,
  ];

  if (lead.source && lead.source !== "unknown") {
    sections.push(`Sumber: ${lead.source}`);
  }

  return sections.join("\n");
}

export function buildWhatsAppUrl(number: string, message: string): string {
  const normalized = number.replace(/\D/g, "");
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
