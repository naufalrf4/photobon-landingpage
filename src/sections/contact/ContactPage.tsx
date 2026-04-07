import * as React from "react"
import { contact } from "@/content/contact"
import { Badge } from "@/components/ui/badge"
import { MetaStrip } from "@/components/ui/MetaStrip"
import { Container } from "@/components/layout/Container"
import { ContactFormSection } from "@/sections/contact/ContactFormSection"
import { FaqSection } from "@/sections/contact/FaqSection"
import { ContactClosingSection } from "@/sections/contact/ContactClosingSection"

export function ContactPage() {
  return (
    <main>
      {/* ── Dark Hero ────────────────────────────────────────────────── */}
      <section
        className="bg-pattern-dots-dark relative overflow-hidden border-b border-pb-border-strong bg-pb-dark"
      >
        {/* Accent horizontal rule */}
        <div
          className="absolute top-0 right-0 left-0 h-1 bg-pb-accent"
          aria-hidden="true"
        />

        <Container>
          <div className="flex max-w-3xl flex-col items-start gap-6 py-20 md:py-28 lg:py-32">
            {/* Badge */}
            <Badge
              variant="accent"
              className="border-pb-accent tracking-[0.2em] text-pb-accent"
            >
              {contact.pageIntro.badge}
            </Badge>

            {/* Heading */}
            <h1 className="font-display text-5xl leading-none font-extrabold tracking-tight text-white uppercase md:text-6xl lg:text-7xl">
              {contact.pageIntro.heading.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? (
                    <span className="text-pb-accent">{line}</span>
                  ) : (
                    line
                  )}
                </React.Fragment>
              ))}
            </h1>

            {/* Receipt-style dashed divider */}
            <div
              className="pb-receipt-divider-strong w-full"
              aria-hidden="true"
              style={{ opacity: 0.15, borderColor: "rgba(255,255,255,0.2)" }}
            />

            {/* Subtitle */}
            <p className="max-w-xl font-body text-base leading-relaxed text-white/50 md:text-lg">
              {contact.pageIntro.subtitle}
            </p>

            {/* Meta strip */}
            <MetaStrip
              items={[
                "Respon Cepat",
                "Jam Kerja 09–21",
                "Jabodetabek & Bandung",
              ]}
              className="mt-2 text-white/30"
            />
          </div>
        </Container>

        {/* Decorative corner accent */}
        <div
          className="absolute right-0 bottom-0 h-48 w-48 opacity-5"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at bottom right, #facc15 0%, transparent 70%)",
          }}
        />
      </section>

      <ContactFormSection
        contactInfo={contact.contactInfo}
        form={contact.form}
      />
      <FaqSection faqs={contact.faqs} />
      <ContactClosingSection />
    </main>
  )
}
