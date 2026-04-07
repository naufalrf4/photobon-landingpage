import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { MetaStrip } from "@/components/ui/MetaStrip"
import { shared } from "@/content/shared"
import { MessageCircle, ChevronRight } from "lucide-react"

const CLOSING_COPY = {
  heading: "Masih Ragu?",
  body: "Tidak ada kewajiban. Ceritakan dulu dan kami akan bantu cari opsi terbaik.",
  cta: "Mulai Percakapan",
} as const

export function ContactClosingSection() {
  return (
    <Section
      id="contact-closing"
      className="relative overflow-hidden border-t border-pb-border-strong bg-pb-dark"
    >
      {/* Background pattern */}
      <div
        className="bg-pattern-dots-dark pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Accent top rule */}
      <div
        className="absolute top-0 right-0 left-0 h-0.5 bg-pb-accent opacity-60"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6 py-4 text-center">
          {/* Receipt meta top */}
          <MetaStrip
            items={["Photobon", "Hubungi Kami"]}
            className="justify-center text-white/30"
          />

          <div
            className="pb-receipt-divider-strong w-full"
            aria-hidden="true"
            style={{ opacity: 0.1, borderColor: "rgba(255,255,255,0.15)" }}
          />

          {/* Heading */}
          <h2 className="font-display text-4xl leading-none font-extrabold tracking-tight text-white uppercase md:text-5xl">
            {CLOSING_COPY.heading}
          </h2>

          {/* Body */}
          <p className="font-body text-base leading-relaxed text-white/50">
            {CLOSING_COPY.body}
          </p>

          {/* CTA */}
          <Button
            href={shared.whatsapp.url}
            variant="primary"
            size="md"
            aria-label="Buka WhatsApp untuk memulai percakapan dengan Photobon"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {CLOSING_COPY.cta}
            <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>

          <div
            className="pb-receipt-divider-strong w-full"
            aria-hidden="true"
            style={{ opacity: 0.1, borderColor: "rgba(255,255,255,0.15)" }}
          />

          {/* Barcode visual anchor */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="pb-barcode"
              aria-hidden="true"
              style={{
                opacity: 0.2,
                filter: "invert(1)",
              }}
            />
            <p className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">
              PHOTOBON-CONTACT-2025
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
