export interface PageIntroContent {
  badge: string;
  heading: string;
  subtitle: string;
}

export interface CategoryItem {
  id: string;
  label: string;
}

export interface PlacementItem {
  id: string;
  categoryId: string;
  title: string;
  contextNote: string;
  imageSrc: string;
  imageAlt: string;
}

export interface InsightSection {
  heading: string;
  body: string;
}

export interface PlacementCtaContent {
  headline: string;
  buttonLabel: string;
}

export interface PlacementContent {
  pageIntro: PageIntroContent;
  categories: CategoryItem[];
  items: PlacementItem[];
  insight: InsightSection;
  cta: PlacementCtaContent;
}

export const placement: PlacementContent = {
  pageIntro: {
    badge: "Portofolio Penempatan",
    heading: "Jejak Langkah Kami",
    subtitle:
      "Dari acara komunitas intim hingga festival ribuan orang — Photobon sudah hadir dan membuktikan.",
  },

  categories: [
    { id: "all", label: "Semua" },
    { id: "event", label: "Event" },
    { id: "cafe", label: "Kafe & F&B" },
    { id: "tenant", label: "Tenant & Bazaar" },
    { id: "brand", label: "Brand Activation" },
  ],

  items: [
    {
      id: "placement-001",
      categoryId: "event",
      title: "Pop Culture Festival",
      contextNote: "Event komunitas, 2 hari, 3.000+ pengunjung",
      imageSrc: "/images/placements/pop-culture-festival.jpg",
      imageAlt: "Photobon di Pop Culture Festival dengan antrean pengunjung",
    },
    {
      id: "placement-002",
      categoryId: "cafe",
      title: "Kafe Sudut Tua, Bandung",
      contextNote: "Penempatan tetap, weekend activation",
      imageSrc: "/images/placements/kafe-sudut-tua.jpg",
      imageAlt: "Unit Photobon di pojok kafe bergaya vintage",
    },
    {
      id: "placement-003",
      categoryId: "tenant",
      title: "Pasar Kreatif Jogja",
      contextNote: "Bazaar tahunan, tenant spot premium",
      imageSrc: "/images/placements/pasar-kreatif-jogja.jpg",
      imageAlt: "Booth Photobon di pasar kreatif outdoor",
    },
    {
      id: "placement-004",
      categoryId: "brand",
      title: "Brand X Launch Event",
      contextNote: "Brand activation, custom frame & prop set",
      imageSrc: "/images/placements/brand-launch.jpg",
      imageAlt: "Photobon dengan branding kustom di acara peluncuran produk",
    },
    {
      id: "placement-005",
      categoryId: "event",
      title: "Graduation Celebration",
      contextNote: "Event wisuda komunal, indoor hall",
      imageSrc: "/images/placements/graduation.jpg",
      imageAlt: "Tamu berfoto di Photobon saat acara wisuda",
    },
    {
      id: "placement-006",
      categoryId: "cafe",
      title: "Warung Kopi Kontemporari",
      contextNote: "Weekend-only placement, satu bulan",
      imageSrc: "/images/placements/warung-kopi.jpg",
      imageAlt: "Photobon berdiri di area duduk warung kopi modern",
    },
  ],

  insight: {
    heading: "Standar Sama di Setiap Skala",
    body: "Mau event kecil atau besar, kami selalu kirim tim terlatih dan mesin dalam kondisi terbaik. Anda cukup terima beres — dari pasang sampai bongkar.",
  },

  cta: {
    headline: "Ingin Photobon hadir di venue Anda?",
    buttonLabel: "Diskusikan Penempatan",
  },
};
