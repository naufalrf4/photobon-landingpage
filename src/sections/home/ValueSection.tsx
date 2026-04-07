import * as React from "react"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"
import { Printer, MapPin, Users, Monitor, type LucideIcon } from "lucide-react"
import type { ValueSection as ValueSectionContent } from "@/content/home"

export interface ValueSectionProps {
  content: ValueSectionContent
}

/** Map item index to a lucide icon */
const VALUE_ICONS: LucideIcon[] = [Printer, MapPin, Users, Monitor]

export function ValueSection({ content }: ValueSectionProps) {
  return (
    <Section className="bg-pattern-dots-subtle border-b border-pb-border bg-pb-bg">
      <Container>
        {/* Header + receipt meta row */}
        <div className="mb-8 flex flex-col gap-0 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            badge={content.sectionLabel}
            heading={content.heading}
            subtitle={content.subtitle}
            className="mb-0"
          />
          {/* Receipt order meta */}
          <div className="hidden flex-col items-end gap-1 text-right lg:flex">
            <span className="font-mono text-[10px] tracking-widest text-pb-text-muted uppercase">
              SPESIFIKASI PRODUK
            </span>
            <div className="pb-barcode opacity-40" aria-hidden="true" />
            <span className="mt-1 font-mono text-[9px] text-pb-text-muted">
              4 FITUR UTAMA
            </span>
          </div>
        </div>

        <div className="pb-receipt-divider mb-6" />

        {/* Desktop: 4-col grid | Mobile: horizontal scroll */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <ValueCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
              icon={VALUE_ICONS[index] ?? Printer}
            />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="sm:hidden">
          <div className="scroll-snap-x">
            {content.items.map((item, index) => (
              <div key={item.title} className="w-[280px]">
                <ValueCard
                  title={item.title}
                  description={item.description}
                  index={index}
                  icon={VALUE_ICONS[index] ?? Printer}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom receipt strip */}
        <div className="mt-8 border-t border-pb-border pt-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-6">
              {content.items.map((item) => (
                <span
                  key={item.title}
                  className="font-mono text-[9px] tracking-widest text-pb-text-muted uppercase"
                >
                  {item.title.split(" ")[0]}
                </span>
              ))}
            </div>
            <span className="font-mono text-[9px] text-pb-text-muted">
              PHOTOBON / KENAPA KAMI
            </span>
          </div>
        </div>
      </Container>
    </Section>
  )
}

interface ValueCardProps {
  title: string
  description: string
  index: number
  icon: LucideIcon
}

function ValueCard({ title, description, index, icon: Icon }: ValueCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col gap-4 bg-white p-6",
        "border border-t-0 border-pb-border",
        "hover-lift hover-glow",
        "cursor-default"
      )}
    >
      {/* Accent top border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-pb-accent"
      />

      {/* Index + icon row */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center border border-pb-border bg-pb-surface-alt">
          <Icon size={18} className="text-pb-accent" strokeWidth={2} />
        </div>
        <span className="font-mono text-3xl font-bold text-black/5 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Dashed divider */}
      <div className="pb-receipt-divider my-0" />

      <h3 className="font-display text-xl leading-tight font-extrabold text-pb-text-primary uppercase">
        {title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-pb-text-secondary">
        {description}
      </p>

      {/* Receipt label at bottom */}
      <div className="mt-auto border-t border-pb-border pt-2">
        <span className="font-mono text-[9px] tracking-widest text-pb-text-muted uppercase">
          FITUR #{String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  )
}
