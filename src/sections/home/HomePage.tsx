import * as React from "react";
import { home } from "@/content/home";
import { placement } from "@/content/placement";
import { HeroSection } from "@/sections/home/HeroSection";
import { ValueSection } from "@/sections/home/ValueSection";
import { UseCaseSection } from "@/sections/home/UseCaseSection";
import { PlacementPreviewSection } from "@/sections/home/PlacementPreviewSection";
import { ClosingCtaSection } from "@/sections/home/ClosingCtaSection";

// Three placement items used for the preview grid
const PREVIEW_ITEMS = placement.items.slice(0, 3);

// Hero image representing the actual unit
const HERO_IMAGE_SRC = "/images/placements/photobon-unit-hero.jpg";
const HERO_IMAGE_ALT = "Unit Photobon tampak depan";
const HERO_IMAGE_CAPTION = "Bentuk mesin Photobon yang sangat ringkas, siap ditempatkan di mana saja.";

export function HomePage() {
  return (
    <main>
      <HeroSection
        content={home.hero}
        heroImageSrc={HERO_IMAGE_SRC}
        heroImageAlt={HERO_IMAGE_ALT}
        heroImageCaption={HERO_IMAGE_CAPTION}
      />
      <ValueSection content={home.value} />
      <UseCaseSection content={home.useCases} />
      <PlacementPreviewSection content={home.placementPreview} previewItems={PREVIEW_ITEMS} />
      <ClosingCtaSection content={home.closingCta} />
    </main>
  );
}
