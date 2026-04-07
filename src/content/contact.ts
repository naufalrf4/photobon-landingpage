export interface PageIntroContent {
  badge: string;
  heading: string;
  subtitle: string;
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappDisplayLabel: string;
  instagramHandle: string;
  areaOfOperation: string;
}

export interface FormLabels {
  nameOrgLabel: string;
  nameOrgPlaceholder: string;
  whatsappLabel: string;
  whatsappPlaceholder: string;
  contextLabel: string;
  contextPlaceholder: string;
  submitLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  heading: string;
  items: FaqItem[];
}

export interface ContactContent {
  pageIntro: PageIntroContent;
  contactInfo: ContactInfo;
  form: FormLabels;
  faqs: FaqData;
  buildWhatsAppMessage: (name: string, context: string) => string;
}

export const contact: ContactContent = {
  pageIntro: {
    badge: "Hubungi Kami",
    heading: "Satu Pesan untuk\nMulai Semuanya",
    subtitle:
      "Kirim detail singkat tentang acara atau venue Anda, dan kami atur sisanya. Gratis konsultasi, tanpa kewajiban.",
  },

  contactInfo: {
    whatsappNumber: "6281234567890",
    whatsappDisplayLabel: "+62 812-3456-7890",
    instagramHandle: "@photobon.id",
    areaOfOperation: "Jabodetabek & Bandung",
  },

  form: {
    nameOrgLabel: "Nama / Representasi Brand",
    nameOrgPlaceholder: "Mis: Risa / Kafe Sentral",
    whatsappLabel: "Nomor WhatsApp",
    whatsappPlaceholder: "08XXXXXXXXXX",
    contextLabel: "Rencana Penggunaan (Tipe, Durasi)",
    contextPlaceholder:
      "Mis: Event festival musik, 3 hari, perkiraan 1000 pengunjung/hari, lokasi di JCC.",
    submitLabel: "Kirim via WhatsApp",
  },

  faqs: {
    heading: "Pertanyaan yang Sering Muncul",
    items: [
      {
        question: "Berapa lama pemasangan mesin Photobon?",
        answer:
          "Di bawah 30 menit. Tim kami tiba sebelum acara dimulai untuk memastikan unit siap beroperasi tepat waktu.",
      },
      {
        question: "Apakah tamu bisa langsung pakai sendiri?",
        answer:
          "Sangat mudah. Dirancang self-service — tamu sentuh layar, bergaya 3 kali, dan struk keluar otomatis. Tidak perlu operator.",
      },
      {
        question: "Butuh daya listrik berapa?",
        answer:
          "Hanya sekitar 200W, setara kipas angin. Cukup satu colokan standar di dekat area penempatan.",
      },
      {
        question: "Desain struk bisa dikustomisasi?",
        answer:
          "Tentu. Setiap sewa sudah termasuk kustomisasi desain bingkai struk — sesuai logo, warna, atau tema acara Anda.",
      },
      {
        question: "Bagaimana jika kertas habis saat event?",
        answer:
          "Satu roll cukup untuk ratusan cetakan. Kami juga selalu bawa roll cadangan, dan ada tim standby untuk event.",
      },
    ],
  },

  buildWhatsAppMessage: (name: string, context: string): string =>
    `Halo tim Photobon,\n\nNama/Brand: ${name}\nKonteks: ${context}\n\nMohon informasi ketersediaan unit dan pemesanan. Terima kasih.`,
};
