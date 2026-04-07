export interface PageIntroContent {
  badge: string;
  heading: string;
  subtitle: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface SupportSection {
  heading: string;
  items: string[];
}

export interface HowItWorksCtaContent {
  headline: string;
  buttonLabel: string;
}

export interface HowItWorksContent {
  pageIntro: PageIntroContent;
  steps: StepItem[];
  support: SupportSection;
  cta: HowItWorksCtaContent;
}

export const howItWorks: HowItWorksContent = {
  pageIntro: {
    badge: "Proses & Mekanisme",
    heading: "Cara Kerja Photobon",
    subtitle:
      "Dari chat pertama hingga mesin siap melayani tamu — hanya empat langkah, semua kami yang urus.",
  },

  steps: [
    {
      number: "01",
      title: "Chat & Konsultasi",
      description:
        "Hubungi kami via WhatsApp. Ceritakan event atau venue Anda — kami bantu tentukan paket dan konfigurasi yang paling cocok.",
    },
    {
      number: "02",
      title: "Jadwal & Konfirmasi",
      description:
        "Setelah deal, kami kunci tanggal dan siapkan tim serta unit mesin. Anda tinggal tunggu hari-H.",
    },
    {
      number: "03",
      title: "Pasang & Siap",
      description:
        "Tim datang sebelum acara, pasang unit dalam 30 menit. Mesin langsung aktif — tanpa repot, tanpa ribet.",
    },
    {
      number: "04",
      title: "Jalan & Beres",
      description:
        "Tamu berfoto self-service, struk keluar otomatis. Selesai acara, tim kami yang bongkar dan bawa pulang — Anda terima beres.",
    },
  ],

  support: {
    heading: "Semua Sudah Termasuk",
    items: [
      "Unit fotobooth struk lengkap siap pakai",
      "Pengiriman dan pemasangan oleh tim kami",
      "Desain template struk dikustomisasi sesuai brand",
      "Seluruh file digital terkumpul dan bisa diunduh",
      "Dukungan tim on-site selama mesin beroperasi",
    ],
  },

  cta: {
    headline: "Punya pertanyaan soal lokasi atau teknis?",
    buttonLabel: "Tanya Langsung via WhatsApp",
  },
};
