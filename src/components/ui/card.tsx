import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Use this when card is highlighted with accent border */
  highlighted?: boolean;
}

export function Card({ highlighted = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-none p-6 font-body",
        "bg-pb-surface",
        highlighted
          ? "border-2 border-pb-accent"
          : "border border-pb-border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
