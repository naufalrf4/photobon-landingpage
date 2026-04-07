import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MetaStrip } from "@/components/ui/MetaStrip"
import { ImageFrame } from "@/components/layout/ImageFrame"
import { Container } from "@/components/layout/Container"
import { ReceiptRow } from "@/components/ui/ReceiptRow"
import { Camera, Printer, Zap, ArrowRight } from "lucide-react"
import type { HeroContent } from "@/content/home"

export interface HeroSectionProps {
  content: HeroContent
  heroImageSrc: string
  heroImageAlt: string
  heroImageCaption?: string
}

/** Split the headline on newlines and accent the last line in yellow */
function AccentedHeadline({ headline }: { headline: string }) {
  const lines = headline.split("\n")
  return (
    <>
      {lines.map((line, i) => {
        const isLast = i === lines.length - 1
        return (
          <React.Fragment key={i}>
            <span className={isLast ? "text-pb-accent" : "text-white"}>
              {line}
            </span>
            {!isLast && <br />}
          </React.Fragment>
        )
      })}
    </>
  )
}

export function HeroSection({
  content,
  heroImageSrc,
  heroImageAlt,
  heroImageCaption,
}: HeroSectionProps) {
  return (
    <section className="bg-pattern-dots-dark relative overflow-hidden bg-pb-dark">
      {/* Top receipt strip */}
      <div className="border-b border-white/10 bg-black/30">
        <Container>
          <div className="flex items-center justify-between py-2">
            <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
              PB-2026 / RECEIPT PHOTOBOOTH / JAKARTA
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-white/20">
                UNIT: PHOTOBON-X1
              </span>
              <span
                aria-hidden="true"
                className="inline-block h-3 w-px bg-white/15"
              />
              <span className="font-mono text-[10px] text-pb-accent/60">
                ● AKTIF
              </span>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid min-h-[88vh] grid-cols-1 items-center gap-12 py-20 md:grid-cols-[3fr_2fr] md:gap-8 lg:gap-16">
          {/* ── Left column — text ── */}
          <div className="flex flex-col items-start gap-8">
            <Badge>{content.badgeLabel}</Badge>

            <h1 className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight uppercase md:text-6xl lg:text-7xl xl:text-8xl">
              <AccentedHeadline headline={content.headline} />
            </h1>

            {/* Receipt-style divider under headline */}
            <div className="w-full max-w-sm">
              <div
                className="pb-receipt-divider-strong my-0"
                style={{ opacity: 0.3, borderColor: "rgba(255,255,255,0.2)" }}
              />
            </div>

            <p className="max-w-lg font-body text-base text-white/50 md:text-lg">
              {content.subheadline}
            </p>

            {/* Inline spec grid — receipt style */}
            <div className="grid w-full max-w-sm grid-cols-3 gap-0 border border-white/10">
              {[
                { icon: Camera, label: "Format", value: "Struk" },
                { icon: Zap, label: "Setup", value: "<30 Min" },
                { icon: Printer, label: "Output", value: "Instan" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-1 px-3 py-4 ${i < 2 ? "border-r border-white/10" : ""}`}
                >
                  <Icon size={14} className="text-pb-accent" strokeWidth={2} />
                  <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
                    {label}
                  </span>
                  <span className="font-display text-sm font-extrabold text-white uppercase">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/kontak?context=Tertarik%20dengan%20Photobon%20dari%20beranda"
              >
                {content.ctaPrimaryLabel}
              </Button>
              <Button variant="ghost" size="lg" href="/cara-kerja">
                <span className="flex items-center gap-2">
                  {content.ctaSecondaryLabel}
                  <ArrowRight size={16} />
                </span>
              </Button>
            </div>

            <MetaStrip
              items={["Portable System", "Cetak Instan", "Setup < 30 Menit"]}
              className="mt-2 text-white/30"
            />
          </div>

          {/* ── Right column — image ── */}
          <div className="relative hidden md:block">
            {/* Diagonal accent label */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-3 z-20 bg-pb-accent px-3 py-1"
            >
              <span className="font-mono text-[10px] font-bold tracking-widest text-black uppercase">
                FOTO ↓
              </span>
            </div>
            {/* Offset accent block behind the frame */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 h-full w-full border-2 border-pb-accent"
            />
            {/* Secondary offset — dimmer */}
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-6 h-full w-full border border-white/10"
            />
            <ImageFrame
              src={heroImageSrc}
              alt={heroImageAlt}
              aspectRatio="4/3"
              className="relative z-10"
              interactive={true}
              caption={heroImageCaption}
            />

            {/* Receipt caption strip below frame */}
            <div className="relative z-10 mt-0 border border-t-0 border-white/10 bg-black/50 px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
                  PHOTOBON / UNIT DEMO
                </span>
                <span className="font-mono text-[9px] text-white/20">
                  CETAK INSTAN
                </span>
              </div>
            </div>
          </div>

          {/* Mobile image — no offset trick, just full width */}
          <div className="md:hidden">
            <ImageFrame
              src={heroImageSrc}
              alt={heroImageAlt}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </Container>

      {/* Bottom receipt meta strip */}
      <div className="border-t border-white/10 bg-black/30">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 py-3">
            {/* Receipt row items inline */}
            <div className="flex items-center gap-6">
              <ReceiptRow
                label="Kategori"
                value="Photo Booth"
                className="mb-0 border-0 pb-0 text-left"
                style={{ color: "rgba(255,255,255,0.5)" }}
              />
              <span
                aria-hidden="true"
                className="hidden h-6 w-px bg-white/10 sm:block"
              />
              <ReceiptRow
                label="Output"
                value="Struk Fisik + QR"
                className="mb-0 hidden border-0 pb-0 sm:flex"
                style={{ color: "rgba(255,255,255,0.5)" }}
              />
            </div>
            {/* Barcode visual anchor */}
            <div
              className="pb-barcode opacity-20"
              aria-hidden="true"
              style={{ filter: "invert(1)" }}
            />
          </div>
        </Container>
      </div>
    </section>
  )
}
