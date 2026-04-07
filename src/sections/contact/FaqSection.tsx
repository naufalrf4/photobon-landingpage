import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Accordion } from "@/components/ui/Accordion"
import { MetaStrip } from "@/components/ui/MetaStrip"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"
import type { FaqData } from "@/content/contact"

export interface FaqSectionProps {
  faqs: FaqData
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <Section className="bg-pb-surface-alt">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ── Left: heading column ─────────────────────────────── */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <MetaStrip items={["Informasi"]} className="mb-1" />

            <div className="flex items-start gap-3">
              <HelpCircle
                className="mt-1 h-6 w-6 shrink-0 text-pb-accent"
                aria-hidden="true"
              />
              <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-pb-text-primary uppercase md:text-4xl">
                {faqs.heading}
              </h2>
            </div>

            <p className="font-body text-pb-text-secondary">
              Pertanyaan umum mengenai teknis penyewaan dan penempatan mesin
              Photobon di lokasi Anda.
            </p>

            {/* Receipt meta strip below text */}
            <div className="mt-2 flex flex-col gap-2">
              <div className="pb-receipt-divider" aria-hidden="true" />
              <MetaStrip
                items={["Instalasi 30 mnt", "Self-Service", "Tim Standby"]}
                className="text-pb-text-muted"
              />
            </div>
          </div>

          {/* ── Right: accordion panel ───────────────────────────── */}
          <div className="relative overflow-hidden border border-pb-border-strong bg-pb-bg lg:col-span-8">
            {/* Subtle dots pattern */}
            <div
              className="bg-pattern-dots pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{ opacity: 0.25 }}
            />

            <div className="relative z-10 p-4 sm:p-8">
              {/* Panel header */}
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-[10px] tracking-[0.25em] text-pb-text-muted uppercase">
                  — FAQ
                </p>
                <Badge variant="muted">{faqs.items.length} pertanyaan</Badge>
              </div>

              <div
                className="pb-receipt-divider mt-0 mb-4"
                aria-hidden="true"
              />

              <Accordion items={faqs.items} />

              <div
                className="pb-receipt-divider mt-4 mb-4"
                aria-hidden="true"
              />

              {/* Bottom receipt meta */}
              <div className="flex items-center justify-between">
                <MetaStrip
                  items={["Photobon FAQ"]}
                  className="text-[9px] text-pb-text-muted"
                />
                {/* Mini barcode accent */}
                <div
                  className="pb-barcode opacity-30"
                  aria-hidden="true"
                  style={{ maxWidth: 80, height: "1.25rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
