import * as React from "react"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import {
  Sparkles,
  ShoppingBag,
  Coffee,
  Megaphone,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { UseCaseSection } from "@/content/home"

export interface UseCaseSectionProps {
  content: UseCaseSection
}

/** Icon mapping by index */
const USE_CASE_ICONS: LucideIcon[] = [Sparkles, ShoppingBag, Coffee, Megaphone]

/** Short receipt-style code per use case */
const USE_CASE_CODES = ["EVT-01", "POP-02", "F&B-03", "BRD-04"]

export function UseCaseSection({ content }: UseCaseSectionProps) {
  return (
    <Section className="bg-pattern-dots-light bg-pb-surface">
      <Container>
        {/* Header row with receipt ticket-style indicator */}
        <div className="mb-2 flex items-start justify-between">
          <SectionHeader
            badge={content.sectionLabel}
            heading={content.heading}
            className="mb-0"
          />
          <div className="hidden flex-col items-end gap-2 pt-2 md:flex">
            <span className="font-mono text-[10px] tracking-widest text-pb-text-muted uppercase">
              SKENARIO AKTIF
            </span>
            <div className="flex gap-1">
              {USE_CASE_CODES.map((code) => (
                <span
                  key={code}
                  className="border border-pb-border px-2 py-1 font-mono text-[9px] text-pb-text-muted uppercase"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-receipt-divider mb-6" />

        {/* Desktop: 4-col grid | Mobile: horizontal scroll */}
        <div className="hidden border border-pb-border sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <UseCaseCard
              key={item.label}
              label={item.label}
              description={item.description}
              index={index}
              icon={USE_CASE_ICONS[index] ?? Sparkles}
              code={USE_CASE_CODES[index] ?? "---"}
              isLast={index === content.items.length - 1}
            />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="flex scroll-snap-x sm:hidden">
          {content.items.map((item, index) => (
            <div key={item.label} className="w-[280px]">
              <UseCaseCard
                label={item.label}
                description={item.description}
                index={index}
                icon={USE_CASE_ICONS[index] ?? Sparkles}
                code={USE_CASE_CODES[index] ?? "---"}
                isLast={false}
              />
            </div>
          ))}
        </div>

        {/* Receipt footer */}
        <div className="pb-receipt-divider mt-0 mb-0" />
        <div className="flex items-center justify-between pb-2">
          <span className="font-mono text-[9px] tracking-widest text-pb-text-muted uppercase">
            {content.items.length} SKENARIO TERSEDIA
          </span>
          <span className="font-mono text-[9px] text-pb-text-muted">
            PHOTOBON / KONTEKS PENGGUNAAN
          </span>
        </div>
      </Container>
    </Section>
  )
}

interface UseCaseCardProps {
  label: string
  description: string
  index: number
  icon: LucideIcon
  code: string
  isLast: boolean
}

function UseCaseCard({
  label,
  description,
  index,
  icon: Icon,
  code,
  isLast,
}: UseCaseCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col gap-4 bg-white p-6",
        "border-b border-pb-border sm:border-b-0",
        "border-r border-pb-border",
        isLast && "border-r-0",
        "hover-lift group cursor-default",
        "transition-colors duration-150 hover:bg-pb-surface-alt"
      )}
    >
      {/* Accent top bar — hidden by default, visible on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-pb-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      />

      {/* Code tag top-right */}
      <div className="absolute top-4 right-4">
        <span className="border border-pb-border px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-pb-text-muted uppercase">
          {code}
        </span>
      </div>

      {/* Icon in outlined box */}
      <div className="flex h-12 w-12 items-center justify-center border-2 border-pb-accent/30 transition-colors duration-150 group-hover:border-pb-accent/70">
        <Icon size={20} className="text-pb-accent" strokeWidth={1.5} />
      </div>

      {/* Dashed separator */}
      <div className="pb-receipt-divider my-0" />

      <h3 className="pr-8 font-display text-xl leading-tight font-extrabold tracking-wide text-pb-accent uppercase">
        {label}
      </h3>

      <p className="font-body text-sm leading-relaxed text-pb-text-secondary">
        {description}
      </p>

      {/* Index number as visual anchor */}
      <div className="mt-auto flex items-center gap-2 border-t border-pb-border pt-2">
        <span className="font-mono text-xs text-pb-text-muted">
          {String(index + 1).padStart(2, "0")} /
        </span>
        <span className="font-mono text-[9px] tracking-widest text-pb-text-muted uppercase">
          Skenario
        </span>
      </div>
    </article>
  )
}
