import * as React from "react"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { ImageFrame } from "@/components/layout/ImageFrame"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { ReceiptRow } from "@/components/ui/ReceiptRow"
import { MapPin, ArrowRight, Star } from "lucide-react"
import type { PlacementPreviewSection } from "@/content/home"
import type { PlacementItem } from "@/content/placement"

export interface PlacementPreviewSectionProps {
  content: PlacementPreviewSection
  previewItems: PlacementItem[]
}

export function PlacementPreviewSection({
  content,
  previewItems,
}: PlacementPreviewSectionProps) {
  const [first, second, third] = previewItems

  return (
    <Section className="bg-pattern-dots-subtle border-b border-pb-border bg-pb-surface-alt">
      <Container>
        {/* Top receipt strip */}
        <div className="mb-8 border border-pb-border bg-white px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-pb-accent" />
              <span className="font-mono text-[10px] tracking-widest text-pb-text-muted uppercase">
                DOKUMENTASI LOKASI
              </span>
            </div>
            <div className="flex items-center gap-4">
              <ReceiptRow
                label="Status"
                value="Telah Digunakan"
                className="mb-0 border-0 pb-0"
              />
              <span
                aria-hidden="true"
                className="hidden h-6 w-px bg-pb-border sm:block"
              />
              <ReceiptRow
                label="Skala"
                value="Kecil — Ribuan"
                className="mb-0 hidden border-0 pb-0 sm:flex"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* ── Left — header + metadata + CTA ── */}
          <div className="flex flex-col justify-between gap-8 lg:gap-12">
            <div className="flex flex-col gap-6">
              <SectionHeader
                badge={content.label}
                heading={content.heading}
                subtitle={content.subtitle}
                className="mb-0"
              />

              {/* Receipt stat rows */}
              <div className="border border-pb-border bg-white">
                <div className="px-4 pt-4">
                  <ReceiptRow label="Jangkauan Event" value="50+ Lokasi" />
                  <ReceiptRow label="Skala Pengunjung" value="Hingga 10K+" />
                  <ReceiptRow label="Kota Operasi" value="Jakarta & Sekitar" />
                </div>
                {/* Barcode visual at bottom of stat block */}
                <div className="flex items-center justify-between border-t border-pb-border px-4 py-3">
                  <div
                    className="pb-barcode w-24 opacity-30"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={10}
                        className="fill-pb-accent text-pb-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="md"
              href="/penempatan"
              className="self-start"
            >
              <span className="flex items-center gap-2">
                {content.ctaLabel}
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>

          {/* ── Right — image grid ── */}
          {/* Desktop: asymmetric grid */}
          <div className="hidden gap-3 self-start sm:grid sm:grid-cols-2">
            {/* Large image spans both rows on the left sub-column */}
            {first && (
              <div className="row-span-2 flex flex-col gap-0">
                <ImageFrame
                  src={first.imageSrc}
                  alt={first.imageAlt}
                  aspectRatio="4/3"
                  className="h-full"
                />
                <div className="border border-t-0 border-pb-border bg-white px-3 py-2">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={10}
                      className="flex-shrink-0 text-pb-accent"
                    />
                    <span className="truncate font-mono text-[9px] tracking-wider text-pb-text-muted uppercase">
                      {first.title}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Two stacked smaller images */}
            {second && (
              <div className="flex flex-col gap-0">
                <ImageFrame
                  src={second.imageSrc}
                  alt={second.imageAlt}
                  aspectRatio="square"
                />
                <div className="border border-t-0 border-pb-border bg-white px-3 py-2">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={10}
                      className="flex-shrink-0 text-pb-accent"
                    />
                    <span className="truncate font-mono text-[9px] tracking-wider text-pb-text-muted uppercase">
                      {second.title}
                    </span>
                  </div>
                </div>
              </div>
            )}
            {third && (
              <div className="flex flex-col gap-0">
                <ImageFrame
                  src={third.imageSrc}
                  alt={third.imageAlt}
                  aspectRatio="square"
                />
                <div className="border border-t-0 border-pb-border bg-white px-3 py-2">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={10}
                      className="flex-shrink-0 text-pb-accent"
                    />
                    <span className="truncate font-mono text-[9px] tracking-wider text-pb-text-muted uppercase">
                      {third.title}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile: horizontal scroll for images */}
          <div className="scroll-snap-x sm:hidden">
            {previewItems.map((item) => (
              <div key={item.id} className="w-[280px]">
                <ImageFrame
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  aspectRatio="4/3"
                />
                <div className="border border-t-0 border-pb-border bg-white px-3 py-2">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={10}
                      className="flex-shrink-0 text-pb-accent"
                    />
                    <span className="truncate font-mono text-[9px] tracking-wider text-pb-text-muted uppercase">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
