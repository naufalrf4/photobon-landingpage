import * as React from "react";
import { shared } from "@/content/shared";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="bg-pattern-dots-subtle relative border-t border-pb-border bg-pb-bg">
      <Container>
        {/* Top section — two columns on desktop */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2">
          {/* Left: brand + slogan + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <span className="font-display text-xl font-extrabold uppercase tracking-widest text-pb-text-primary">
                {shared.brandName}
              </span>
              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-pb-accent" />
            </div>
            <p className="font-display text-lg font-bold uppercase tracking-widest text-pb-accent">
              {shared.slogan}
            </p>
            <p className="max-w-xs font-body text-sm text-pb-text-secondary">
              {shared.footer.tagline}
            </p>
          </div>

          {/* Right: nav links + WhatsApp */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-xs uppercase tracking-widest text-pb-text-muted">
              Navigasi
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {shared.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm text-pb-text-secondary transition-colors duration-150 hover:text-pb-text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={shared.whatsapp.url}
                className="font-body text-sm text-pb-accent transition-colors duration-150 hover:text-pb-accent-hover"
              >
                {shared.whatsapp.displayLabel}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="border-t border-pb-border py-6">
          <p className="font-body text-xs text-pb-text-muted">{shared.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
