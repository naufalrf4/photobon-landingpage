import * as React from "react"
import { X } from "lucide-react"

export interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt?: string
  caption?: string
}

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
}: ImageModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-pb-bg/90 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Close button top right */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[51] rounded-full bg-pb-surface p-2 text-pb-text-primary transition-colors hover:bg-pb-surface-alt hover:text-pb-accent focus:ring-2 focus:ring-pb-accent focus:outline-none"
        aria-label="Close image modal"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Modal Content */}
      <div
        className="relative flex h-full max-h-full w-full max-w-5xl flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex max-h-[90vh] max-w-full flex-col gap-4 overflow-hidden rounded-md border-4 border-pb-border bg-pb-bg p-2 shadow-2xl">
          <div className="min-h-0 overflow-auto">
            <img
              src={imageSrc}
              alt={imageAlt || "Zoomed image"}
              className="mx-auto max-h-[80vh] w-auto object-contain"
            />
          </div>
          {caption && (
            <div className="shrink-0 p-4 pt-0 text-center">
              <p className="font-body text-sm text-pb-text-secondary">
                {caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
