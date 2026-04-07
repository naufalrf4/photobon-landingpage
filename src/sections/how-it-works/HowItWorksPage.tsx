import * as React from "react"
import { howItWorks } from "@/content/how-it-works"
import { Badge } from "@/components/ui/badge"
import { MetaStrip } from "@/components/ui/MetaStrip"
import { Container } from "@/components/layout/Container"
import { ProcessStepsSection } from "@/sections/how-it-works/ProcessStepsSection"
import { SupportSection } from "@/sections/how-it-works/SupportSection"
import { HowItWorksCtaSection } from "@/sections/how-it-works/HowItWorksCtaSection"
import { Camera, Printer, Receipt } from "lucide-react"

/** Visual device placeholder — receipt-style card stack */
function DeviceVisual() {
  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center">
      {/* Back card */}
      <div
        aria-hidden="true"
        className="absolute h-64 w-44 translate-x-4 translate-y-3 rotate-[-6deg] border border-white/5 bg-[#111]"
      />
      {/* Middle card */}
      <div
        aria-hidden="true"
        className="absolute h-64 w-44 -translate-x-2 rotate-[3deg] border border-white/8 bg-[#0d0d0d]"
      />
      {/* Front receipt card */}
      <div className="relative z-10 flex w-44 flex-col gap-3 border-2 border-pb-accent bg-white px-4 py-5">
        {/* Receipt header */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <span className="font-display text-sm font-extrabold tracking-tight text-black uppercase">
            Photobon
          </span>
          <Camera className="h-4 w-4 text-pb-accent" />
        </div>

        {/* Receipt rows */}
        {[
          { label: "Event", value: "Pernikahan" },
          { label: "Unit", value: "Booth-01" },
          { label: "Status", value: "Ready" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-2"
          >
            <span className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
              {row.label}
            </span>
            <span className="font-mono text-[10px] font-bold text-black">
              {row.value}
            </span>
          </div>
        ))}

        <div className="pb-receipt-divider-strong" style={{ opacity: 0.08 }} />

        {/* Barcode */}
        <div className="pb-barcode" style={{ opacity: 0.25 }} />

        {/* Footer icons */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <Printer className="h-3 w-3 text-neutral-400" />
          <Receipt className="h-3 w-3 text-pb-accent" />
        </div>
      </div>
    </div>
  )
}

/** Hero section — dark bg with dot pattern + receipt meta */
function HowItWorksHero() {
  const { pageIntro } = howItWorks

  return (
    <section className="bg-pattern-dots-dark relative overflow-hidden bg-pb-dark">
      {/* Accent edge line at top */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-pb-accent" />

      <Container>
        <div className="grid min-h-[72vh] grid-cols-1 items-center gap-10 py-20 md:grid-cols-[3fr_2fr] md:gap-8 lg:gap-16">
          {/* ── Left: text content ── */}
          <div className="flex flex-col items-start gap-6">
            {/* Receipt-style doc number */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
                Doc No.
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-pb-accent">
                HIW-001
              </span>
            </div>

            <Badge>{pageIntro.badge}</Badge>

            <h1 className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-white uppercase md:text-6xl lg:text-7xl xl:text-8xl">
              {pageIntro.heading.split(" ").map((word, i, arr) => {
                const isLast = i === arr.length - 1
                return (
                  <React.Fragment key={i}>
                    <span className={isLast ? "text-pb-accent" : "text-white"}>
                      {word}
                    </span>
                    {!isLast && " "}
                  </React.Fragment>
                )
              })}
            </h1>

            <p className="max-w-lg font-body text-base text-white/50 md:text-lg">
              {pageIntro.subtitle}
            </p>

            {/* Receipt meta strip */}
            <div className="w-full border-t border-white/8 pt-5">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Total Langkah", value: "04" },
                  { label: "Setup", value: "< 30 Min" },
                  { label: "Support", value: "Penuh" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/25 uppercase">
                      {item.label}
                    </span>
                    <span className="font-display text-xl leading-none font-extrabold text-pb-accent uppercase">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <MetaStrip
              items={["Chat", "Jadwal", "Pasang", "Selesai"]}
              className="mt-1 text-white/25"
            />
          </div>

          {/* ── Right: device visual ── */}
          <div className="relative hidden items-center justify-center md:flex">
            {/* Accent offset frame behind device */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 h-[270px] w-[180px] border-2 border-pb-accent opacity-40"
            />
            <DeviceVisual />
          </div>
        </div>
      </Container>

      {/* Bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/3" />
    </section>
  )
}

export function HowItWorksPage() {
  return (
    <main>
      <HowItWorksHero />
      <ProcessStepsSection steps={howItWorks.steps} />
      <SupportSection support={howItWorks.support} />
      <HowItWorksCtaSection cta={howItWorks.cta} />
    </main>
  )
}
