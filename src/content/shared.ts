export interface NavItem {
  label: string;
  href: string;
}

export interface FooterContent {
  tagline: string;
  copyright: string;
}

export interface WhatsAppInfo {
  number: string;
  displayLabel: string;
  ctaLabel: string;
  url: string;
}

export interface SharedContent {
  brandName: string;
  slogan: string;
  nav: NavItem[];
  footer: FooterContent;
  whatsapp: WhatsAppInfo;
  instagramHandle: string;
}

export const shared: SharedContent = {
  brandName: "PHOTOBON",
  slogan: "Foto Struk, Bukan Foto Biasa",

  nav: [
    { label: "Beranda", href: "/" },
    { label: "Cara Kerja", href: "/cara-kerja" },
    { label: "Penempatan", href: "/penempatan" },
    { label: "Kontak", href: "/kontak" },
  ],

  footer: {
    tagline:
      "Fotobooth struk portabel untuk event, kafe, dan brand activation. Cetak instan, format unik, kesan membekas.",
    copyright: `© ${new Date().getFullYear()} Photobon. All rights reserved.`,
  },

  whatsapp: {
    number: "6281234567890",
    displayLabel: "WhatsApp Kami",
    ctaLabel: "Hubungi via WhatsApp",
    url: "https://wa.me/6281234567890",
  },

  instagramHandle: "@photobon.id",
};
