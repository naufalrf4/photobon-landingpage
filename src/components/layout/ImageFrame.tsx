import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageModal } from "@/components/ui/ImageModal";

export type ImageAspectRatio = "square" | "4/3" | "16/9";

export interface ImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: ImageAspectRatio;
  className?: string;
  interactive?: boolean;
  caption?: string;
}

const aspectRatioStyles: Record<ImageAspectRatio, string> = {
  square: "aspect-square",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
};

export function ImageFrame({
  src,
  alt,
  aspectRatio = "4/3",
  className,
  interactive = false,
  caption,
}: ImageFrameProps) {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const content = (
    <>
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-transform duration-500",
          interactive && "group-hover:scale-105"
        )}
        loading="lazy"
      />
      {interactive && (
        <div className="absolute inset-0 bg-[#0a0a0a]/0 transition-colors duration-300 group-hover:bg-[#0a0a0a]/20 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded-full text-pb-bg shadow-xl">
            <Search className="w-5 h-5 text-stone-900" />
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {interactive ? (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label={`View larger image of ${alt}`}
          className={cn(
            "relative w-full group overflow-hidden border-2 border-pb-border-strong text-left focus:outline-none focus:ring-4 focus:ring-pb-accent",
            aspectRatioStyles[aspectRatio],
            className,
          )}
        >
          {content}
        </button>
      ) : (
        <div
          className={cn(
            "relative overflow-hidden border-2 border-pb-border-strong",
            aspectRatioStyles[aspectRatio],
            className,
          )}
        >
          {content}
        </div>
      )}

      {interactive && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          imageSrc={src}
          imageAlt={alt}
          caption={caption || alt}
        />
      )}
    </>
  );
}
