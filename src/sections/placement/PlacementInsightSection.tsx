import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { MetaStrip } from "@/components/ui/MetaStrip"
import type { InsightSection } from "@/content/placement"
import { Sparkles, CheckCircle } from "lucide-react"

export interface PlacementInsightSectionProps {
  insight: InsightSection
}

export function PlacementInsightSection({
  insight,
}: PlacementInsightSectionProps) {
  return (
    <Section
      id="placement-insight"
      className="bg-pattern-dots-light border-y border-pb-border bg-pb-surface-alt"
    >
      <Container>
        {/* Receipt-style container with accent left border */}
        <div className="relative overflow-hidden border-2 border-pb-border-strong bg-white">
          {/* Accent top bar */}
          <div className="absolute top-0 right-0 left-0 h-0.5 bg-pb-accent" />

          <div className="flex flex-col lg:flex-row">
            {/* ── Left: Icon column / visual anchor ──────────────── */}
            <div className="bg-pattern-dots-dark relative flex shrink-0 flex-col items-center justify-center gap-6 bg-pb-dark px-10 py-12 lg:w-56 lg:py-16">
              {/* Large decorative icon */}
              <div className="flex flex-col items-center gap-3">
                <div className="border-2 border-pb-accent p-4 text-pb-accent">
                  <Sparkles className="h-8 w-8" />
                </div>
                <div
                  className="pb-receipt-divider-accent"
                  style={{ margin: 0, width: "64px", opacity: 0.5 }}
                />
              </div>

              {/* Rotated label */}
              <div
                className="hidden font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase lg:block"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Insight Penempatan
              </div>

              {/* Barcode */}
              <div
                className="pb-barcode"
                style={{
                  width: "80px",
                  height: "1.75rem",
                  opacity: 0.12,
                  filter: "invert(1)",
                }}
              />
            </div>

            {/* Vertical separator */}
            <div className="border-r-0 border-b-2 border-dashed border-pb-border lg:border-r-2 lg:border-b-0" />

            {/* ── Right: Content block ────────────────────────────── */}
            <div className="flex flex-1 flex-col gap-6 px-8 py-10 lg:py-14">
              {/* Section label */}
              <MetaStrip
                items={["Quality Report", "PB-STD-001", "All Scale"]}
                className="font-mono text-[9px]"
              />

              {/* Heading */}
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-4xl leading-none font-extrabold tracking-tight text-pb-text-primary uppercase sm:text-5xl">
                  {insight.heading}
                </h2>
                <div
                  className="pb-receipt-divider"
                  style={{ margin: 0, marginTop: "0.75rem", maxWidth: "240px" }}
                />
              </div>

              {/* Body */}
              <p className="max-w-lg font-body text-base leading-relaxed text-pb-text-secondary">
                {insight.body}
              </p>

              {/* Receipt-style checklist */}
              <div className="flex flex-col gap-2 border-t border-dashed border-pb-border pt-4">
                {[
                  "Tim terlatih di setiap deployment",
                  "Mesin prime condition, teruji",
                  "Setup & teardown inklusif",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-pb-accent" />
                    <span className="font-body text-sm text-pb-text-secondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom receipt strip */}
              <div className="flex items-center justify-between border-t border-dashed border-pb-border pt-2">
                <div
                  className="pb-barcode"
                  style={{ width: "120px", height: "1.25rem", opacity: 0.2 }}
                />
                <span className="font-mono text-[8px] tracking-widest text-pb-text-muted uppercase">
                  Guaranteed Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
