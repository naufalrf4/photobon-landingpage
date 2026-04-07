import * as React from "react";
import { cn } from "@/lib/utils";

export interface ReceiptRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  inverted?: boolean;
}

export function ReceiptRow({
  label,
  value,
  inverted = false,
  className,
  ...props
}: ReceiptRowProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 border-b pb-4 mb-4",
        inverted ? "border-stone-200" : "border-pb-border",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "font-body text-xs uppercase tracking-widest",
          inverted ? "text-stone-500" : "text-pb-text-muted",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight",
          inverted ? "text-stone-900" : "text-pb-text-primary",
        )}
      >
        {value}
      </span>
    </div>
  );
}
