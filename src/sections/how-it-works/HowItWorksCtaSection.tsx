import * as React from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { MetaStrip } from "@/components/ui/MetaStrip"
import type { HowItWorksCtaContent } from "@/content/how-it-works"
import { MessageCircle, ArrowRight } from "lucide-react"

export interface HowItWorksCtaSectionProps {
  cta: HowItWorksCtaContent
}

export function HowItWorksCtaSection({ cta }: HowItWorksCtaSectionProps) {
  return (
    <Section
      id="how-it-works-cta"
      className="bg-pattern-dots-dark relative overflow-hidden bg-pb-dark"
    >
      {/* Accent top border */}
      <div className="absolute inset-x-0 top-0 h-[4px] bg-pb-accent" />

      <Container>
        <div className="relative mx-auto max-w-3xl">
          {/* Receipt-style container */}
          <div className="border-2 border-white/8 bg-white/3 px-6 py-10 text-center md:px-12 md:py-14">
            {/* Receipt doc header */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="max-w-[80px] flex-1 border-t border-dashed border-white/10" />
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                  Dok
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-pb-accent">
                  CTA-001
                </span>
              </div>
              <div className="max-w-[80px] flex-1 border-t border-dashed border-white/10" />
            </div>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center border-2 border-pb-accent bg-pb-accent/8">
                <MessageCircle
                  className="h-6 w-6 text-pb-accent"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="mb-6 font-display text-4xl leading-tight font-extrabold tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
              {cta.headline.split(" ").map((word, i, arr) => {
                const isHighlight =
                  word.toLowerCase() === "spesifik" ||
                  word.toLowerCase() === "lokasi?" ||
                  word.toLowerCase() === "teknis?"
                return (
                  <React.Fragment key={i}>
                    <span
                      className={isHighlight ? "text-pb-accent" : "text-white"}
                    >
                      {word}
                    </span>
                    {i < arr.length - 1 && " "}
                  </React.Fragment>
                )
              })}
            </h2>

            {/* Divider */}
            <div
              className="pb-receipt-divider-strong mb-6"
              style={{ opacity: 0.08, borderColor: "rgba(255,255,255,0.15)" }}
            />

            {/* Meta strip */}
            <MetaStrip
              items={["Respon Cepat", "No Komitmen", "Gratis Konsultasi"]}
              className="mb-8 justify-center text-white/35"
            />

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                href="/kontak?context=Tertarik%20dengan%20info%20dari%20Cara%20Kerja"
                className="group flex items-center gap-2"
              >
                {cta.buttonLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Button>
            </div>

            {/* Bottom barcode anchor */}
            <div className="mt-10 flex justify-center">
              <div className="pb-barcode" style={{ opacity: 0.15, filter: "invert(1)" }} />
            </div>

            {/* Receipt footer text */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase">
                Photobon
              </span>
              <span aria-hidden="true" className="text-white/10">
                /
              </span>
              <span className="font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase">
                Portable Photobooth
              </span>
            </div>
          </div>

          {/* Offset accent border behind the box */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -right-2 -bottom-2 border-2 border-pb-accent opacity-20"
          />
        </div>
      </Container>
    </Section>
  )
}
