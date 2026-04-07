import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col border-t border-pb-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "border-b border-pb-border transition-colors duration-200",
              isOpen ? "bg-[#fcf7e3]" : "hover:bg-pb-surface-alt"
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between py-5 px-4 text-left outline-none focus:ring-2 focus:ring-pb-accent focus:ring-inset"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-bold text-pb-text-primary tracking-tight">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-pb-text-secondary transition-transform duration-200",
                  isOpen && "rotate-180 text-pb-accent"
                )}
              />
            </button>
            
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out px-4",
                isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="font-body text-base text-pb-text-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
