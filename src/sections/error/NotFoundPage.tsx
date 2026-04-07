import * as React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center bg-pb-bg">
      <Container>
        <div className="max-w-md mx-auto text-center flex flex-col items-center gap-6 border border-pb-border p-8 bg-pb-surface">
          <div className="font-display text-9xl font-extrabold text-pb-text-secondary opacity-20 leading-none">
            404
          </div>
          
          <div className="pb-receipt-divider mt-2 mb-4 w-1/2 mx-auto" />
          
          <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-pb-text-primary">
            Halaman Tidak Ditemukan
          </h1>
          
          <p className="font-body text-sm text-pb-text-secondary leading-relaxed">
            Mungkin penempatan ini belum ada atau tautannya salah.
          </p>

          <div className="pt-6 w-full flex justify-center border-t border-pb-border mt-4">
            <Button variant="primary" size="lg" href="/">
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
