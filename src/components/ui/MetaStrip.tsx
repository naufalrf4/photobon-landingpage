import * as React from "react";
import { cn } from "@/lib/utils";

export interface MetaStripProps extends React.HTMLAttributes<HTMLDivElement> {
  items: string[];
}

export function MetaStrip({ items, className, ...props }: MetaStripProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 md:gap-4 font-body text-xs font-medium uppercase tracking-widest text-pb-text-muted",
        className,
      )}
      {...props}
    >
      {items.map((item, i) => (
        <React.Fragment key={item}>
          <span>{item}</span>
          {i < items.length - 1 && (
            <span aria-hidden="true" className="opacity-40">
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
