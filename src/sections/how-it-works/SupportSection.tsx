import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import type { SupportSection as SupportSectionContent } from "@/content/how-it-works"
import {
  Printer,
  Truck,
  Palette,
  FolderOpen,
  Headphones,
  CheckCircle,
  type LucideIcon,
} from "lucide-react"

export interface SupportSectionProps {
  support: SupportSectionContent
}

/** Best-effort mapping of known support strings to icons */
const SUPPORT_ICONS: LucideIcon[] = [
  Printer,
  Truck,
  Palette,
  FolderOpen,
  Headphones,
]

interface SupportCardProps {
  text: string
  index: number
}

function SupportCard({ text, index }: SupportCardProps) {
  const Icon = SUPPORT_ICONS[index] ?? CheckCircle
  const itemNumber = (index + 1).toString().padStart(2, "0")

  return (
    <div className="group hover-lift relative flex flex-col gap-4 overflow-hidden border-2 border-pb-border bg-white px-5 py-5 transition-all duration-200 hover:border-pb-accent hover:bg-pb-surface">
      {/* Receipt number — top right */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-pb-border bg-pb-surface-alt transition-colors duration-200 group-hover:border-pb-accent group-hover:bg-pb-accent">
          <Icon
            className="h-4 w-4 text-pb-accent transition-colors duration-200 group-hover:text-black"
            strokeWidth={2}
          />
        </div>
        <span className="font-mono text-[10px] text-pb-text-muted transition-colors group-hover:text-pb-accent">
          {itemNumber}
        </span>
      </div>

      {/* Text content */}
      <p className="flex-1 font-body text-sm leading-relaxed text-pb-text-secondary transition-colors group-hover:text-pb-text-primary">
        {text}
      </p>

      {/* Bottom receipt row */}
      <div className="flex items-center gap-2">
        <CheckCircle
          className="h-3 w-3 shrink-0 text-pb-accent"
          strokeWidth={2.5}
        />
        <span className="font-mono text-[9px] tracking-[0.15em] text-pb-accent uppercase">
          Termasuk
        </span>
      </div>

      {/* Subtle accent notch — bottom-left corner decoration */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0 w-0 border-r-[20px] border-b-[20px] border-r-transparent border-b-pb-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </div>
  )
}

export function SupportSection({ support }: SupportSectionProps) {
  return (
    <Section className="bg-pattern-dots-light border-y border-pb-border bg-pb-surface-alt">
      <Container>
        {/* Section header with receipt-style label */}
        <div className="mb-10 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.2em] text-pb-text-muted uppercase">
              Inklusi
            </span>
            <div className="max-w-[60px] flex-1 border-t border-dashed border-pb-border" />
          </div>
          <SectionHeader heading={support.heading} className="mb-0" />
        </div>

        {/* Receipt container — top accent stripe */}
        <div className="relative overflow-hidden border-2 border-pb-border-strong bg-white">
          {/* Accent top bar */}
          <div className="h-[4px] w-full bg-pb-accent" />

          {/* Desktop: Grid of cards | Mobile: horizontal scroll */}
          <div className="hidden gap-px bg-pb-border sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {support.items.map((item, index) => (
              <div key={item} className="bg-white">
                <SupportCard text={item} index={index} />
              </div>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="scroll-snap-x bg-white p-4 sm:hidden">
            {support.items.map((item, index) => (
              <div key={item} className="w-[260px]">
                <SupportCard text={item} index={index} />
              </div>
            ))}
          </div>

          {/* Bottom receipt footer */}
          <div className="border-t-2 border-pb-border bg-pb-surface-alt px-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] tracking-[0.2em] text-pb-text-muted uppercase">
                  Total Item
                </span>
                <span className="font-display text-xl leading-none font-extrabold text-pb-text-primary">
                  {support.items.length.toString().padStart(2, "0")}
                </span>
              </div>

              <div
                className="pb-receipt-divider-strong flex-1"
                style={{ marginTop: 0, marginBottom: 0 }}
              />

              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-[9px] tracking-[0.2em] text-pb-text-muted uppercase">
                  Status
                </span>
                <span className="font-display text-xl leading-none font-extrabold text-pb-accent uppercase">
                  Included
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
