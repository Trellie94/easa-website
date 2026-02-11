"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionSectionProps {
  items: AccordionItem[];
}

export default function AccordionSection({ items }: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-xl border border-sand-dark overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-sand/30 transition-colors"
            >
              <span className="font-heading text-lg text-charcoal">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 text-warm-grey-light transition-transform duration-300 flex-shrink-0 ml-4 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 text-warm-grey leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
