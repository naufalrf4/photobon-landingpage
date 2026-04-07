import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  /** If true, the section wraps children in a Container automatically */
  contained?: boolean;
}

export function Section({ id, contained = false, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-py", className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
