import * as React from "react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { shared } from "@/content/shared"
import type { ContactInfo, FormLabels } from "@/content/contact"
import { buildLeadObject, saveLeadToLocal } from "@/utils/lead"
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/utils/whatsapp"
import { MessageCircle, MapPin, Send, Clock, Shield } from "lucide-react"

const VALIDATION_MESSAGES = {
  nameRequired: "Boleh tahu nama atau organisasi Anda?",
  whatsappRequired: "Nomor WhatsApp diperlukan untuk kami menghubungi Anda.",
  contextRequired:
    "Boleh ceritakan sedikit tentang rencana event / venue Anda?",
} as const

const INFO_LABELS = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  area: "Area Layanan",
  ctaHint: "Klik tombol di bawah untuk membuka WhatsApp secara langsung.",
} as const

export interface ContactFormSectionProps {
  contactInfo: ContactInfo
  form: FormLabels
}

interface FormState {
  name: string
  whatsapp: string
  useCase: string
  context: string
}

interface FormErrors {
  name: string
  whatsapp: string
  context: string
}

export function ContactFormSection({
  contactInfo,
  form,
}: ContactFormSectionProps) {
  const [fields, setFields] = React.useState<FormState>({
    name: "",
    whatsapp: "",
    useCase: "",
    context: "",
  })

  const [errors, setErrors] = React.useState<FormErrors>({
    name: "",
    whatsapp: "",
    context: "",
  })

  React.useEffect(() => {
    // Attempt to pre-fill context from search param if present
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const queryContext = params.get("context")
      if (queryContext) {
        setFields((prev) => ({ ...prev, context: queryContext }))
      }
    }
  }, [])

  function validate(): boolean {
    const next: FormErrors = { name: "", whatsapp: "", context: "" }
    let valid = true

    if (!fields.name.trim()) {
      next.name = VALIDATION_MESSAGES.nameRequired
      valid = false
    }
    if (!fields.whatsapp.trim()) {
      next.whatsapp = VALIDATION_MESSAGES.whatsappRequired
      valid = false
    }
    if (!fields.context.trim()) {
      next.context = VALIDATION_MESSAGES.contextRequired
      valid = false
    }

    setErrors(next)
    return valid
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    // Structured lead tracking
    const lead = buildLeadObject({
      name: fields.name,
      phone: fields.whatsapp,
      useCase: fields.useCase,
      context: fields.context,
    })

    saveLeadToLocal(lead)

    const message = buildWhatsAppMessage(lead)
    const url = buildWhatsAppUrl(contactInfo.whatsappNumber, message)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Section id="contact-form" className="border-b border-pb-border bg-pb-bg">
      <Container>
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
          {/* ── Contact info panel ──────────────────────────────────── */}
          <div className="relative flex flex-col gap-0 overflow-hidden border border-pb-border-strong bg-pb-surface lg:col-span-2">
            {/* Pattern overlay */}
            <div
              className="bg-pattern-dots pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{ opacity: 0.35 }}
            />

            <div className="relative z-10 flex h-full flex-col gap-6 p-8">
              {/* Panel header */}
              <div className="flex flex-col gap-1">
                <p className="font-mono text-[10px] font-medium tracking-[0.25em] text-pb-text-muted uppercase">
                  — Kontak Langsung
                </p>
                <div className="pb-receipt-divider mt-2 mb-0" />
              </div>

              {/* Receipt rows with icons */}
              <div className="flex flex-col gap-0">
                {/* WhatsApp */}
                <div className="mb-5 flex flex-col gap-1 border-b border-pb-border pb-5">
                  <div className="flex items-center gap-2">
                    <MessageCircle
                      className="h-3.5 w-3.5 shrink-0 text-pb-accent"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-pb-text-muted uppercase">
                      {INFO_LABELS.whatsapp}
                    </span>
                  </div>
                  <a
                    href={shared.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Hubungi kami di WhatsApp ${contactInfo.whatsappDisplayLabel}`}
                    className="font-display text-2xl font-extrabold tracking-tight text-pb-text-primary uppercase transition-colors hover:text-pb-accent"
                  >
                    {contactInfo.whatsappDisplayLabel}
                  </a>
                </div>

                {/* Instagram */}
                <div className="mb-5 flex flex-col gap-1 border-b border-pb-border pb-5">
                  <div className="flex items-center gap-2">
                    <MessageCircle
                      className="h-3.5 w-3.5 shrink-0 text-pb-accent"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-pb-text-muted uppercase">
                      {INFO_LABELS.instagram}
                    </span>
                  </div>
                  <a
                    href={`https://instagram.com/${contactInfo.instagramHandle.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Kunjungi Instagram kami ${contactInfo.instagramHandle}`}
                    className="font-display text-2xl font-extrabold tracking-tight text-pb-text-primary uppercase transition-colors hover:text-pb-accent"
                  >
                    {contactInfo.instagramHandle}
                  </a>
                </div>

                {/* Area */}
                <div className="mb-5 flex flex-col gap-1 border-b border-pb-border pb-5">
                  <div className="flex items-center gap-2">
                    <MapPin
                      className="h-3.5 w-3.5 shrink-0 text-pb-accent"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-pb-text-muted uppercase">
                      {INFO_LABELS.area}
                    </span>
                  </div>
                  <span className="font-display text-xl font-extrabold tracking-tight text-pb-text-primary uppercase">
                    {contactInfo.areaOfOperation}
                  </span>
                </div>

                {/* Response time */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Clock
                      className="h-3.5 w-3.5 shrink-0 text-pb-accent"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-pb-text-muted uppercase">
                      Jam Respons
                    </span>
                  </div>
                  <span className="font-display text-xl font-extrabold tracking-tight text-pb-text-primary uppercase">
                    09.00 – 21.00 WIB
                  </span>
                </div>
              </div>

              {/* Bottom hint + divider */}
              <div className="mt-auto border-t border-pb-border pt-5">
                <div
                  className="pb-receipt-divider-accent mb-4"
                  aria-hidden="true"
                />
                <p className="font-body text-sm leading-relaxed text-pb-text-muted">
                  {INFO_LABELS.ctaHint}
                </p>
              </div>
            </div>
          </div>

          {/* ── Form panel ──────────────────────────────────────────── */}
          <div className="relative flex flex-col gap-0 overflow-hidden border border-t-0 border-pb-border-strong bg-white lg:col-span-3 lg:border-t lg:border-l-0">
            {/* Subtle pattern */}
            <div
              className="bg-pattern-lines pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{ opacity: 0.025 }}
            />

            <div className="relative z-10 flex h-full flex-col gap-6 p-8">
              {/* Form header */}
              <div className="flex flex-col gap-1">
                <p className="font-mono text-[10px] font-medium tracking-[0.25em] text-pb-text-muted uppercase">
                  — Formulir Pertanyaan
                </p>
                <div className="pb-receipt-divider mt-2 mb-0" />
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Field 01 — Name / Org */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="flex items-center gap-2 font-body text-sm font-medium text-stone-900"
                  >
                    <span className="font-mono text-[10px] tracking-widest text-pb-text-muted">
                      01
                    </span>
                    {form.nameOrgLabel}
                    <span className="ml-auto text-pb-accent" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    placeholder={form.nameOrgPlaceholder}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    aria-invalid={!!errors.name}
                    className={[
                      "w-full bg-stone-50 font-body text-sm text-stone-900",
                      "rounded-none px-4 py-3 outline-none",
                      "border-2 transition-colors placeholder:text-stone-400",
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-stone-200 focus:border-pb-accent",
                    ].join(" ")}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="font-body text-xs text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Field 02 — WhatsApp */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-whatsapp"
                    className="flex items-center gap-2 font-body text-sm font-medium text-stone-900"
                  >
                    <span className="font-mono text-[10px] tracking-widest text-pb-text-muted">
                      02
                    </span>
                    {form.whatsappLabel}
                    <span className="ml-auto text-pb-accent" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    required
                    value={fields.whatsapp}
                    onChange={handleChange}
                    placeholder={form.whatsappPlaceholder}
                    aria-describedby={
                      errors.whatsapp ? "contact-whatsapp-error" : undefined
                    }
                    aria-invalid={!!errors.whatsapp}
                    className={[
                      "w-full bg-stone-50 font-body text-sm text-stone-900",
                      "rounded-none px-4 py-3 outline-none",
                      "border-2 transition-colors placeholder:text-stone-400",
                      errors.whatsapp
                        ? "border-red-500 focus:border-red-500"
                        : "border-stone-200 focus:border-pb-accent",
                    ].join(" ")}
                  />
                  {errors.whatsapp && (
                    <p
                      id="contact-whatsapp-error"
                      role="alert"
                      className="font-body text-xs text-red-400"
                    >
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Field 03 — Use Case */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-useCase"
                    className="flex items-center gap-2 font-body text-sm font-medium text-stone-900"
                  >
                    <span className="font-mono text-[10px] tracking-widest text-pb-text-muted">
                      03
                    </span>
                    Kebutuhan Anda
                    <span className="ml-auto font-mono text-[10px] tracking-widest text-pb-text-muted">
                      opsional
                    </span>
                  </label>
                  <select
                    id="contact-useCase"
                    name="useCase"
                    value={fields.useCase}
                    onChange={handleChange}
                    className={[
                      "w-full bg-stone-50 font-body text-sm text-stone-900",
                      "appearance-none rounded-none px-4 py-3 outline-none",
                      "border-2 border-stone-200 transition-colors focus:border-pb-accent",
                    ].join(" ")}
                  >
                    <option value="">Pilih Kebutuhan (Opsional)</option>
                    <option value="Event">Event / Festival</option>
                    <option value="Cafe / F&B">Cafe / F&B</option>
                    <option value="Brand Activation">
                      Brand Activation / Promosi
                    </option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Field 04 — Context */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-context"
                    className="flex items-center gap-2 font-body text-sm font-medium text-stone-900"
                  >
                    <span className="font-mono text-[10px] tracking-widest text-pb-text-muted">
                      04
                    </span>
                    {form.contextLabel}
                    <span className="ml-auto text-pb-accent" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="contact-context"
                    name="context"
                    required
                    rows={5}
                    value={fields.context}
                    onChange={handleChange}
                    placeholder={form.contextPlaceholder}
                    aria-describedby={
                      errors.context ? "contact-context-error" : undefined
                    }
                    aria-invalid={!!errors.context}
                    className={[
                      "w-full bg-stone-50 font-body text-sm text-stone-900",
                      "resize-y rounded-none px-4 py-3 outline-none",
                      "border-2 transition-colors placeholder:text-stone-400",
                      errors.context
                        ? "border-red-500 focus:border-red-500"
                        : "border-pb-border focus:border-pb-accent",
                    ].join(" ")}
                  />
                  {errors.context && (
                    <p
                      id="contact-context-error"
                      role="alert"
                      className="font-body text-xs text-red-400"
                    >
                      {errors.context}
                    </p>
                  )}
                </div>

                {/* Submit area */}
                <div className="mt-2 flex flex-col gap-3">
                  <div className="pb-receipt-divider" aria-hidden="true" />

                  <div className="flex items-center justify-center gap-2">
                    <Shield
                      className="h-3.5 w-3.5 shrink-0 text-pb-accent"
                      aria-hidden="true"
                    />
                    <p className="font-body text-xs text-pb-text-muted">
                      Kami biasanya langsung merespons pesan Anda pada jam
                      kerja.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                    {form.submitLabel}
                  </Button>

                  <p className="text-center font-mono text-[10px] tracking-[0.2em] text-pb-text-muted uppercase">
                    Akan membuka WhatsApp secara aman
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
