import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface SectionHeaderProps {
  badge?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  inverted?: boolean;
}

export function SectionHeader({
  badge,
  heading,
  subtitle,
  align = "left",
  className,
  inverted = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  const headingColor = inverted ? "text-stone-900" : "text-pb-text-primary";
  const subtitleColor = inverted ? "text-stone-700" : "text-pb-text-secondary";

  return (
    <div className={cn("flex flex-col gap-4 mb-8", alignClass, className)}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className={cn("font-display text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl", headingColor)}>
        {heading}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl font-body text-base md:text-lg", subtitleColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
