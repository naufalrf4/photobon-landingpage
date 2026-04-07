
import * as React from "react";
import { shared } from "@/content/shared";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [currentPath, setCurrentPath] = React.useState("/");

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-pb-bg border-b border-pb-border">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between container-px">
        {/* Brand */}
        <a href="/" className="flex items-center gap-1 shrink-0" onClick={closeMenu}>
          <span className="font-display text-xl font-extrabold uppercase tracking-widest text-pb-text-primary">
            {shared.brandName}
          </span>
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-pb-accent"
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {shared.nav.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-body text-xs uppercase tracking-widest transition-colors duration-150",
                  isActive
                    ? "text-pb-accent"
                    : "text-pb-text-secondary hover:text-pb-text-primary",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            size="sm"
            href={shared.whatsapp.url}
          >
            {shared.whatsapp.ctaLabel}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-pb-text-primary transition-transform duration-200",
              menuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-pb-text-primary transition-opacity duration-200",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-pb-text-primary transition-transform duration-200",
              menuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav
          className="border-t border-pb-border bg-pb-bg md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col container-px pb-4 pt-2">
            {shared.nav.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "border-b border-pb-border py-4 font-body text-sm uppercase tracking-widest transition-colors duration-150",
                    isActive
                      ? "text-pb-accent"
                      : "text-pb-text-secondary hover:text-pb-text-primary",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="mt-4">
              <Button
                variant="primary"
                size="md"
                href={shared.whatsapp.url}
                className="w-full justify-center"
              >
                {shared.whatsapp.ctaLabel}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
