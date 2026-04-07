import * as React from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { MessageCircle, Check, Sparkles } from "lucide-react"
import type { ClosingCtaSection as ClosingCtaSectionContent } from "@/content/home"

export interface ClosingCtaSectionProps {
  content: ClosingCtaSectionContent
}

/** Render headline with newlines respected */
function MultilineHeadline({ text }: { text: string }) {
  const lines = text.split("\n")
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  )
}

export function ClosingCtaSection({ content }: ClosingCtaSectionProps) {
  return (
    <Section className="bg-pattern-dots-dark relative overflow-hidden border-t-4 border-pb-accent bg-pb-dark">
      {/* Subtle torn edge at top */}
      <div
        className="pb-torn-edge-top absolute inset-x-0 top-0 h-4 bg-pb-surface-alt"
        aria-hidden="true"
      />

      <Container>
        <div className="relative py-8">
          {/* Receipt header block */}
          <div className="mx-auto mb-12 max-w-2xl border border-white/10 bg-white/5 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-pb-accent" />
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
                  PHOTOBON / KONTAK
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/25">
                REQ-2026-DISC
              </span>
            </div>
          </div>

          {/* Main content split layout */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
            {/* Left — headline + CTA */}
            <div className="flex flex-col items-start gap-8">
              {/* Section divider accent */}
              <div className="pb-receipt-divider-accent my-0 w-16" />

              <h2 className="font-display text-4xl leading-tight font-extrabold text-white uppercase md:text-5xl lg:text-6xl">
                <MultilineHeadline text={content.headline} />
              </h2>

              <p className="max-w-md font-body text-base text-white/50 md:text-lg">
                {content.supportingText}
              </p>

              <div className="flex flex-col items-start gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href="/kontak?context=Tertarik%20dengan%20Photobon%20dari%20beranda"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    {content.ctaLabel}
                  </span>
                </Button>
                <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
                  Sesi diskusi tanpa komitmen.
                </p>
              </div>
            </div>

            {/* Right — receipt summary block */}
            <div className="border border-white/10 bg-white/5 p-6">
              {/* Receipt title */}
              <div className="mb-4 border-b border-white/10 pb-4">
                <p className="mb-1 font-mono text-[10px] tracking-widest text-white/40 uppercase">
                  RINGKASAN LAYANAN
                </p>
                <p className="font-display text-lg leading-tight font-extrabold text-white uppercase">
                  Photobon Portable System
                </p>
              </div>

              {/* Receipt rows — using inline styles for dark bg */}
              <div className="flex flex-col gap-0">
                {[
                  { label: "Tipe", value: "Portable Booth" },
                  { label: "Output", value: "Cetak Struk + QR" },
                  { label: "Setup", value: "< 30 Menit" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-white/10 pb-3 mb-3"
                  >
                    <span className="font-body text-xs tracking-widest text-white/40 uppercase">
                      {row.label}
                    </span>
                    <span className="font-display text-xl font-extrabold tracking-tight text-white uppercase sm:text-2xl">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                {[
                  "Diskusi gratis",
                  "Tanpa kontrak panjang",
                  "Tim terlatih",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center bg-pb-accent">
                      <Check size={10} strokeWidth={3} className="text-black" />
                    </div>
                    <span className="font-body text-sm text-white/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Barcode visual anchor */}
              <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-4">
                <div
                  className="pb-barcode"
                  aria-hidden="true"
                  style={{
                    filter: "invert(1)",
                    opacity: 0.25,
                    width: "120px",
                    flexShrink: 0,
                  }}
                />
                <span className="font-mono text-[9px] text-white/25">
                  PB-2026
                </span>
              </div>
            </div>
          </div>

          {/* Bottom receipt meta strip */}
          <div className="mx-auto mt-16 max-w-4xl border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <span className="font-mono text-[9px] tracking-widest text-white/25 uppercase">
                  PHOTOBON © 2026
                </span>
                <span aria-hidden="true" className="h-3 w-px bg-white/10" />
                <span className="font-mono text-[9px] tracking-widest text-white/25 uppercase">
                  JAKARTA, INDONESIA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-white/25">
                  STATUS:
                </span>
                <span className="font-mono text-[9px] text-pb-accent/60">
                  ● SIAP MELAYANI
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
