import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "muted";
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  accent: "text-pb-accent border border-pb-accent",
  muted: "text-pb-text-muted border border-pb-border",
};

export function Badge({ variant = "accent", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-none px-2 py-0.5 text-xs font-body font-medium uppercase tracking-widest",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
