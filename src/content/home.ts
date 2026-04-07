export interface HeroContent {
  badgeLabel: string;
  headline: string;
  subheadline: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ValueSection {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  items: ValueItem[];
}

export interface UseCaseItem {
  label: string;
  description: string;
}

export interface UseCaseSection {
  sectionLabel: string;
  heading: string;
  items: UseCaseItem[];
}

export interface PlacementPreviewSection {
  label: string;
  heading: string;
  subtitle: string;
  ctaLabel: string;
}

export interface ClosingCtaSection {
  headline: string;
  supportingText: string;
  ctaLabel: string;
}

export interface HomeContent {
  hero: HeroContent;
  value: ValueSection;
  useCases: UseCaseSection;
  placementPreview: PlacementPreviewSection;
  closingCta: ClosingCtaSection;
}

export const home: HomeContent = {
  hero: {
    badgeLabel: "Fotobooth Struk Pertama di Indonesia",
    headline: "Foto Struk\nyang Disimpan\nBukan Dibuang",
    subheadline:
      "Satu-satunya fotobooth yang mencetak hasil foto dalam format struk. Ringkas, instan, dan bikin pengunjung event Anda bawa pulang kenangan — bukan buang di tempat sampah.",
    ctaPrimaryLabel: "Diskusi Penempatan",
    ctaSecondaryLabel: "Lihat Cara Kerja",
  },

  value: {
    sectionLabel: "Kenapa Photobon",
    heading: "Kecil Tapi Berdampak",
    subtitle:
      "Tidak butuh ruang besar untuk membuat kesan yang membekas. Photobon dirancang ringkas tapi efeknya besar.",
    items: [
      {
        title: "Cetak Format Struk",
        description:
          "Output cetakan berbentuk struk kasir — unik, compact, dan langsung masuk dompet. Pengunjung menyimpan, bukan membuang.",
      },
      {
        title: "Setup 30 Menit",
        description:
          "Hanya butuh satu meja kecil dan satu colokan listrik. Tim kami tiba, pasang, dan mesin langsung siap melayani tamu.",
      },
      {
        title: "Tanpa Operator",
        description:
          "Dirancang self-service: tamu sentuh layar, bergaya, dan struk keluar otomatis. Anda fokus acara, kami yang urus mesin.",
      },
      {
        title: "QR ke File Digital",
        description:
          "Selain struk fisik, setiap foto tersimpan digital. Tamu tinggal scan QR untuk unduh — tanpa instalasi apapun.",
      },
    ],
  },

  useCases: {
    sectionLabel: "Cocok Untuk",
    heading: "Dimana Saja Photobon Beraksi",
    items: [
      {
        label: "Event & Festival",
        description:
          "Jadi magnet kerumunan di area event. Antrean terkelola, pengalaman interaktif, dan zero effort untuk kru lapangan.",
      },
      {
        label: "Pop-Up & Bazaar",
        description:
          "Tarik traffic pengunjung ke booth Anda. Photobon jadi conversation starter yang bikin orang berhenti, bukan lewat.",
      },
      {
        label: "Kafe & F&B",
        description:
          "Hiburan tambahan di area tunggu atau spot Instagrammable. Struk bisa dikustom dengan logo kafe Anda.",
      },
      {
        label: "Brand Activation",
        description:
          "Template struk disesuaikan identitas kampanye. Setiap cetakan jadi media promosi yang dibawa pulang audiens.",
      },
    ],
  },

  placementPreview: {
    label: "Portofolio",
    heading: "Sudah Dipercaya",
    subtitle:
      "Dari acara komunitas kecil hingga festival ribuan pengunjung — Photobon sudah ada di sana.",
    ctaLabel: "Lihat Semua Dokumentasi",
  },

  closingCta: {
    headline: "Siap Hadirkan\nPhotobon di Acara Anda?",
    supportingText:
      "Ceritakan rencana event atau venue Anda. Konsultasi gratis, tanpa kewajiban — kami bantu carikan opsi terbaik.",
    ctaLabel: "Mulai Chat di WhatsApp",
  },
};
