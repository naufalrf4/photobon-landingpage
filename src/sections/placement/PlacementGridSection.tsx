import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { ImageFrame } from "@/components/layout/ImageFrame"
import { Badge } from "@/components/ui/badge"
import { MetaStrip } from "@/components/ui/MetaStrip"
import type { CategoryItem, PlacementItem } from "@/content/placement"
import { MapPin, Calendar, Eye, Grid3x3, Star } from "lucide-react"

export interface PlacementGridSectionProps {
  categories: CategoryItem[]
  items: PlacementItem[]
}

/* ── Category icon map ───────────────────────────────────────────────────── */
const categoryIconMap: Record<string, React.ReactNode> = {
  event: <Calendar className="h-3 w-3" />,
  cafe: <MapPin className="h-3 w-3" />,
  tenant: <Grid3x3 className="h-3 w-3" />,
  brand: <Star className="h-3 w-3" />,
  all: <Eye className="h-3 w-3" />,
}

/* ── Grid section ────────────────────────────────────────────────────────── */
export function PlacementGridSection({
  categories,
  items,
}: PlacementGridSectionProps) {
  const [activeId, setActiveId] = React.useState<string>("all")

  const filtered =
    activeId === "all"
      ? items
      : items.filter((item) => item.categoryId === activeId)

  const categoryLabelMap = React.useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c.label])),
    [categories]
  )

  return (
    <Section id="placement-grid" className="bg-pattern-dots-subtle border-b border-pb-border bg-pb-bg">
      <Container>
        {/* ── Filter toolbar ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 pb-10">
          {/* Receipt-style section label */}
          <div className="mb-1 flex items-center gap-3">
            <div
              className="pb-receipt-divider-strong"
              style={{ margin: 0, flex: 1, opacity: 0.06 }}
            />
            <span className="font-mono text-[9px] tracking-widest whitespace-nowrap text-pb-text-muted uppercase">
              Filter — {filtered.length} item
            </span>
            <div
              className="pb-receipt-divider-strong"
              style={{ margin: 0, flex: 1, opacity: 0.06 }}
            />
          </div>

          {/* Horizontal scrollable filter bar on mobile */}
          <div
            role="toolbar"
            aria-label="Filter penempatan"
            className="flex scroll-snap-x flex-wrap sm:flex sm:flex-wrap sm:gap-2"
            style={{ scrollSnapType: "none" }}
          >
            {categories.map((cat) => {
              const isActive = cat.id === activeId
              const icon = categoryIconMap[cat.id]
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  aria-pressed={isActive}
                  className={[
                    "inline-flex cursor-pointer items-center gap-1.5 border-2 px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-150 select-none whitespace-nowrap",
                    isActive
                      ? "border-pb-accent bg-pb-accent text-black shadow-[2px_2px_0px_var(--pb-dark)]"
                      : "border-pb-border bg-transparent text-pb-text-secondary hover:border-pb-border-strong hover:bg-pb-surface-alt hover:text-pb-text-primary",
                  ].join(" ")}
                >
                  {icon}
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Placement grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, idx) => (
            <PlacementCard
              key={item.id}
              item={item}
              categoryLabel={
                categoryLabelMap[item.categoryId] ?? item.categoryId
              }
              index={idx}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

/* ── Single card ─────────────────────────────────────────────────────────── */

interface PlacementCardProps {
  item: PlacementItem
  categoryLabel: string
  index: number
}

function PlacementCard({ item, categoryLabel, index }: PlacementCardProps) {
  /* Parse a deployment "serial" from the item id, e.g. placement-001 → #001 */
  const serialRaw = item.id.split("-")[1] ?? "000"
  const serial = `#${serialRaw}`

  /* Simulated deployment date based on index for receipt flavour */
  const deployMonths = [
    "Mar 2024",
    "Jun 2024",
    "Aug 2024",
    "Oct 2024",
    "Nov 2024",
    "Jan 2025",
  ]
  const deployDate = deployMonths[index] ?? "2024"

  const categoryIcon = categoryIconMap[item.categoryId]

  return (
    <article className="group hover-lift flex flex-col">
      {/* Main card wrapper */}
      <div className="flex flex-col border-2 border-pb-border-strong bg-white transition-colors duration-200 hover:border-pb-accent">
        {/* ── Image region ───────────────────────────────────── */}
        <div className="relative">
          {/* Category badge */}
          <Badge className="absolute top-2 left-2 z-20 flex w-max items-center gap-1 rounded-none border-none bg-black/90 px-2 py-0.5 font-mono text-[9px] tracking-widest text-pb-accent uppercase backdrop-blur-sm">
            {categoryIcon}
            {categoryLabel}
          </Badge>

          {/* Serial badge top-right */}
          <span className="absolute top-2 right-2 z-20 bg-pb-accent px-2 py-0.5 font-mono text-[9px] tracking-widest text-black uppercase">
            {serial}
          </span>

          <ImageFrame
            src={item.imageSrc}
            alt={item.imageAlt}
            aspectRatio="4/3"
            interactive={true}
            caption={item.contextNote}
          />
        </div>

        {/* ── Receipt body ────────────────────────────────────── */}
        <div className="flex flex-col gap-0 px-4 pt-4 pb-3">
          {/* Top meta */}
          <MetaStrip
            items={["Deployment Data", serial]}
            className="font-mono text-[9px]"
          />

          {/* Title */}
          <h3 className="mt-2 mb-3 font-display text-2xl leading-none font-extrabold tracking-tight text-pb-text-primary uppercase">
            {item.title}
          </h3>

          {/* Dashed divider */}
          <div
            className="pb-receipt-divider"
            style={{ margin: "0 0 0.75rem 0" }}
          />

          {/* Receipt rows */}
          <div className="flex flex-col gap-0">
            {/* Label → value row: Category */}
            <div className="flex items-center gap-0 border-b border-dashed border-pb-border py-1.5">
              <span className="w-24 shrink-0 font-mono text-[9px] tracking-widest text-pb-text-muted uppercase">
                Kategori
              </span>
              <div className="pb-leader-line" />
              <span className="text-right font-mono text-[9px] tracking-widest text-pb-text-primary uppercase">
                {categoryLabel}
              </span>
            </div>

            {/* Label → value row: Deploy date */}
            <div className="flex items-center gap-0 border-b border-dashed border-pb-border py-1.5">
              <span className="w-24 shrink-0 font-mono text-[9px] tracking-widest text-pb-text-muted uppercase">
                Deploy
              </span>
              <div className="pb-leader-line" />
              <span className="text-right font-mono text-[9px] tracking-widest text-pb-text-primary uppercase">
                {deployDate}
              </span>
            </div>

            {/* Label → value row: Context note */}
            <div className="flex items-start gap-0 py-1.5">
              <span className="mt-0.5 w-24 shrink-0 font-mono text-[9px] tracking-widest text-pb-text-muted uppercase">
                Catatan
              </span>
              <div className="pb-leader-line" style={{ top: "-0.1rem" }} />
              <span className="max-w-[120px] text-right font-mono text-[9px] leading-snug tracking-widest text-pb-text-secondary uppercase">
                {item.contextNote}
              </span>
            </div>
          </div>

          {/* Bottom barcode strip */}
          <div className="mt-3 flex flex-col gap-1">
            <div
              className="pb-receipt-divider-accent"
              style={{ margin: 0, opacity: 0.3 }}
            />
            <div className="flex items-center justify-between">
              <div
                className="pb-barcode"
                style={{ width: "100px", height: "1.5rem", opacity: 0.35 }}
              />
              <span className="font-mono text-[7px] tracking-widest text-pb-text-muted uppercase">
                PB-{serialRaw}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
