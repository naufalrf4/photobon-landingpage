import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/Container";

export interface PageIntroProps {
  badge?: string;
  heading: string;
  subtitle?: string;
  className?: string;
}

function MultilineHeading({ text }: { text: string }) {
  const lines = text.split("\n");
  if (lines.length === 1) return <>{text}</>;
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export function PageIntro({ badge, heading, subtitle, className }: PageIntroProps) {
  return (
    <div className={cn("w-full bg-pb-bg border-b border-pb-border section-py", className)}>
      <Container>
        <div className="flex flex-col items-start gap-5 max-w-3xl">
          {badge && <Badge>{badge}</Badge>}
          <h1 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-pb-text-primary md:text-6xl lg:text-7xl">
            <MultilineHeading text={heading} />
          </h1>
          {subtitle && (
            <p className="font-body text-base text-pb-text-secondary md:text-lg">{subtitle}</p>
          )}
        </div>
      </Container>
    </div>
  );
}
