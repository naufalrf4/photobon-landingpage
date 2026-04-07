import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { MetaStrip } from "@/components/ui/MetaStrip"
import type { PlacementCtaContent } from "@/content/placement"
import { ArrowRight, MapPin, Building2, Users } from "lucide-react"

export interface PlacementCtaSectionProps {
  cta: PlacementCtaContent
}

/* ── Receipt meta item ───────────────────────────────────────────────────── */
interface CtaMetaItemProps {
  icon: React.ReactNode
  label: string
  value: string
}

function CtaMetaItem({ icon, label, value }: CtaMetaItemProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 text-white/40">
        {icon}
        <span className="font-mono text-[9px] tracking-widest uppercase">
          {label}
        </span>
      </div>
      <span className="font-display text-xl leading-none font-extrabold tracking-tight text-white uppercase">
        {value}
      </span>
    </div>
  )
}

export function PlacementCtaSection({ cta }: PlacementCtaSectionProps) {
  return (
    <Section
      id="placement-cta"
      className="bg-pattern-dots-dark relative overflow-hidden bg-pb-dark"
    >
      {/* Top accent border */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-pb-accent" />

      <Container>
        <div className="flex flex-col gap-10">
          {/* ── Receipt header row ──────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-4 border-b border-dashed border-white/10 pb-6">
            <MetaStrip
              items={["CTA", "Placement Request", "PB-2025"]}
              className="font-mono text-[9px] text-white/30"
            />
            <div className="ml-auto hidden sm:block">
              <span className="font-mono text-[9px] tracking-widest text-white/25 uppercase">
                Status: Open for Booking
              </span>
            </div>
          </div>

          {/* ── Main content ────────────────────────────────────── */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
            {/* Left: headline */}
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col gap-4">
                {/* Receipt divider accent before headline */}
                <div
                  className="pb-receipt-divider-accent"
                  style={{ margin: 0, maxWidth: "160px", opacity: 0.5 }}
                />
                <h2 className="max-w-2xl font-display text-5xl leading-none font-extrabold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
                  {cta.headline}
                </h2>
                <div
                  className="pb-receipt-divider-accent"
                  style={{ margin: 0, maxWidth: "320px", opacity: 0.3 }}
                />
              </div>

              {/* Meta strip */}
              <div className="flex flex-wrap gap-8">
                <CtaMetaItem
                  icon={<Building2 className="h-3 w-3" />}
                  label="Tipe Venue"
                  value="Kafe / Event"
                />
                <CtaMetaItem
                  icon={<MapPin className="h-3 w-3" />}
                  label="Coverage"
                  value="Jabodetabek+"
                />
                <CtaMetaItem
                  icon={<Users className="h-3 w-3" />}
                  label="Tim"
                  value="Terlatih"
                />
              </div>
            </div>

            {/* Right: CTA block */}
            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
              {/* Receipt item row */}
              <div className="flex w-full flex-col gap-2 border-2 border-dashed border-white/12 px-6 py-4 lg:w-auto lg:min-w-[280px]">
                <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase">
                  Total Investment
                </span>
                <span className="font-display text-2xl leading-none font-extrabold text-pb-accent uppercase">
                  Gratis Konsultasi
                </span>
                <div
                  className="pb-receipt-divider"
                  style={{ margin: "0.5rem 0 0.25rem", opacity: 0.1, borderColor: "rgba(255,255,255,0.15)" }}
                />
                <span className="font-mono text-[9px] tracking-widest text-white/35 uppercase">
                  Diskusi dulu, tanpa komitmen
                </span>
              </div>

              <Button
                href="/kontak?context=Tertarik%20untuk%20penempatan%20di%20cafe%2Fevent"
                variant="primary"
                size="lg"
                className="group w-full lg:w-auto"
              >
                {cta.buttonLabel}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* ── Bottom receipt footer ────────────────────────────── */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-white/10 pt-6">
            <div className="flex flex-col gap-1">
              <div
                className="pb-barcode"
                style={{
                  width: "180px",
                  height: "2rem",
                  opacity: 0.1,
                  filter: "invert(1)",
                }}
              />
              <span className="font-mono text-[7px] tracking-widest text-white/15 uppercase">
                PB-PLACEMENT-CTA-2025
              </span>
            </div>

            <span className="font-mono text-[9px] tracking-widest text-white/25 uppercase">
              Photobon · Fotobooth Struk · ID
            </span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
