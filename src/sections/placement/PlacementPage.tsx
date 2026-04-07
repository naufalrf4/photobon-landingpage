import * as React from "react"
import { placement } from "@/content/placement"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/badge"
import { MetaStrip } from "@/components/ui/MetaStrip"
import { PlacementGridSection } from "@/sections/placement/PlacementGridSection"
import { PlacementInsightSection } from "@/sections/placement/PlacementInsightSection"
import { PlacementCtaSection } from "@/sections/placement/PlacementCtaSection"
import { MapPin, Camera, Grid3x3, Award } from "lucide-react"

/* ── Stat counter block ──────────────────────────────────────────────────── */
interface StatBlockProps {
  value: string
  label: string
}

function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-1 border-l-2 border-pb-accent pl-4">
      <span className="font-display text-4xl leading-none font-extrabold tracking-tight text-white uppercase">
        {value}
      </span>
      <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
        {label}
      </span>
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
function PlacementHero() {
  const { pageIntro, items, categories } = placement
  const categoryCount = categories.filter((c) => c.id !== "all").length

  return (
    <section
      id="placement-hero"
      className="bg-pattern-dots-dark relative overflow-hidden bg-pb-dark"
      style={{ minHeight: "520px" }}
    >
      {/* Accent top stripe */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-pb-accent" />

      {/* Bottom torn edge */}
      <div
        className="absolute right-0 bottom-0 left-0 h-4 bg-pb-bg"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
        }}
      />

      <Container>
        <div className="relative z-10 flex flex-col gap-8 pt-20 pb-24">
          {/* Top meta strip — receipt header */}
          <div className="flex flex-wrap items-center gap-4">
            <Badge className="rounded-none border-none bg-pb-accent px-3 py-1 font-mono text-[10px] tracking-widest text-black uppercase">
              {pageIntro.badge}
            </Badge>
            <MetaStrip
              items={["Portofolio", "Photobon Unit", "2024–2025"]}
              className="font-mono text-[10px] text-white/30"
            />
          </div>

          {/* Heading */}
          <div className="flex max-w-3xl flex-col gap-4">
            <h1 className="font-display text-6xl leading-none font-extrabold tracking-tight text-white uppercase sm:text-7xl lg:text-8xl">
              {pageIntro.heading}
            </h1>
            <div className="pb-receipt-divider-accent max-w-sm opacity-60" />
            <p className="max-w-xl font-body text-base leading-relaxed text-white/50 sm:text-lg">
              {pageIntro.subtitle}
            </p>
          </div>

          {/* Receipt-style meta strip */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-widest text-white/30 uppercase">
            <MapPin className="h-3 w-3 text-pb-accent opacity-70" />
            <span>{items.length} Lokasi</span>
            <span className="opacity-30">/</span>
            <Camera className="h-3 w-3 text-pb-accent opacity-70" />
            <span>{categoryCount} Kategori</span>
            <span className="opacity-30">/</span>
            <Grid3x3 className="h-3 w-3 text-pb-accent opacity-70" />
            <span>Jabodetabek &amp; Bandung</span>
            <span className="opacity-30">/</span>
            <Award className="h-3 w-3 text-pb-accent opacity-70" />
            <span>Jogja</span>
          </div>

          {/* Stat counters */}
          <div className="flex flex-wrap gap-8 pt-2">
            <StatBlock value={`${items.length}+`} label="Penempatan" />
            <StatBlock value={`${categoryCount}`} label="Kategori" />
            <StatBlock value="3" label="Kota" />
            <StatBlock value="3K+" label="Foto / Event" />
          </div>
        </div>
      </Container>

      {/* Decorative corner receipt stamp */}
      <div className="absolute right-8 bottom-8 hidden flex-col items-end gap-1 opacity-15 lg:flex">
        <div className="pb-barcode" style={{ width: "160px", filter: "invert(1)" }} />
        <span className="font-mono text-[8px] tracking-widest text-white uppercase">
          PB-PLACEMENT-2025
        </span>
      </div>
    </section>
  )
}

/* ── Page composition ─────────────────────────────────────────────────────── */
export function PlacementPage() {
  return (
    <main>
      <PlacementHero />
      <PlacementGridSection
        categories={placement.categories}
        items={placement.items}
      />
      <PlacementInsightSection insight={placement.insight} />
      <PlacementCtaSection cta={placement.cta} />
    </main>
  )
}
