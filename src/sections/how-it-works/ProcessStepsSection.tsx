import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import type { StepItem } from "@/content/how-it-works"
import {
  MessageCircle,
  CalendarCheck,
  Wrench,
  PartyPopper,
  type LucideIcon,
} from "lucide-react"

export interface ProcessStepsSectionProps {
  steps: StepItem[]
}

const STEPS_HEADER = {
  heading: "Empat Langkah",
  subtitle: "Dari percakapan awal hingga unit beroperasi di lokasi Anda.",
} as const satisfies { heading: string; subtitle: string }

/** Map step number to an icon */
const STEP_ICONS: Record<string, LucideIcon> = {
  "01": MessageCircle,
  "02": CalendarCheck,
  "03": Wrench,
  "04": PartyPopper,
}

interface StepCardProps {
  step: StepItem
  index: number
}

function StepCard({ step, index }: StepCardProps) {
  const Icon = STEP_ICONS[step.number] ?? MessageCircle
  const isEven = index % 2 === 1

  return (
    <div
      className={`group hover-lift flex flex-col gap-0 overflow-hidden border-2 border-pb-border-strong bg-white transition-colors duration-200 hover:border-pb-accent sm:flex-row`}
    >
      {/* Left accent column — number + icon */}
      <div
        className={`flex min-w-[100px] flex-col items-center justify-center gap-3 border-b-2 border-pb-border-strong px-6 py-6 transition-colors duration-200 group-hover:border-pb-accent group-hover:bg-pb-accent sm:border-r-2 sm:border-b-0 ${isEven ? "bg-pb-surface-alt" : "bg-white"} `}
      >
        {/* Receipt number */}
        <span className="font-mono text-[10px] tracking-[0.2em] text-pb-text-muted uppercase transition-colors group-hover:text-black">
          No.
        </span>
        <span className="font-display text-5xl leading-none font-extrabold text-pb-text-primary transition-colors group-hover:text-black">
          {step.number}
        </span>
        <div className="h-[2px] w-8 bg-pb-accent transition-colors group-hover:bg-black" />
        <Icon
          className="h-5 w-5 text-pb-accent transition-colors group-hover:text-black"
          strokeWidth={2}
        />
      </div>

      {/* Right content column */}
      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        {/* Receipt label for step */}
        <span className="font-mono text-[9px] tracking-[0.2em] text-pb-text-muted uppercase">
          Langkah {step.number}
        </span>

        <h3 className="font-display text-2xl leading-tight font-extrabold tracking-tight text-pb-text-primary uppercase md:text-3xl">
          {step.title}
        </h3>

        <div
          className="pb-receipt-divider"
          style={{ marginTop: 0, marginBottom: 0, opacity: 0.4 }}
        />

        <p className="font-body text-sm leading-relaxed text-pb-text-secondary md:text-base">
          {step.description}
        </p>

        {/* Receipt row: status */}
        <div className="mt-auto flex items-center gap-2 pt-2">
          <span className="font-mono text-[9px] tracking-[0.15em] text-pb-text-muted uppercase">
            Status
          </span>
          <div className="flex-1 border-b border-dotted border-pb-border" />
          <span className="font-mono text-[9px] font-bold tracking-[0.1em] text-pb-accent uppercase">
            Termasuk
          </span>
        </div>
      </div>
    </div>
  )
}

export function ProcessStepsSection({ steps }: ProcessStepsSectionProps) {
  return (
    <Section className="bg-pattern-dots-subtle border-b border-pb-border bg-pb-bg">
      <Container>
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.2em] text-pb-text-muted uppercase">
              Proses
            </span>
            <div className="max-w-[60px] flex-1 border-t border-dashed border-pb-border" />
          </div>
          <SectionHeader
            heading={STEPS_HEADER.heading}
            subtitle={STEPS_HEADER.subtitle}
            className="mb-0"
          />
        </div>

        {/* Desktop: Two column grid */}
        <div className="hidden max-w-4xl gap-x-8 gap-y-6 sm:grid sm:grid-cols-1 lg:grid-cols-2">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="scroll-snap-x sm:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="w-[300px]">
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom receipt divider */}
        <div className="mt-12 max-w-4xl">
          <div className="pb-receipt-divider-strong" />
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.2em] text-pb-text-muted uppercase">
              Total Langkah
            </span>
            <span className="font-display text-2xl font-extrabold text-pb-text-primary">
              {steps.length.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
