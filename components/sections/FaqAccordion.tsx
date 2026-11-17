"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** One answer open at a time (the first one to start with); the open question gets the orange bar */
export const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState(items[0]?.id ?? "");

  return (
    <ul className="grid gap-3 lg:gap-[0.8125rem]">
      {items.map((item, index) => {
        const isOpen = open === item.id;
        return (
          <li
            key={item.id}
            data-reveal
            data-reveal-delay={index * 80}
            className={`overflow-hidden rounded-xl border-2 transition-colors duration-300 lg:rounded-[0.75rem] lg:border-[0.125rem] ${
              isOpen ? "border-transparent bg-[var(--color-bg-answer)]" : "border-[var(--color-border)] bg-[var(--color-white)]"
            }`}
          >
            <h3>
              <button
                type="button"
                id={`faq-question-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => setOpen(isOpen ? "" : item.id)}
                className={`-m-[0.125rem] flex min-h-[3.75rem] w-[calc(100%+0.25rem)] items-center justify-between gap-4 rounded-xl px-5 py-3 text-left font-accent text-base font-semibold leading-snug transition-colors duration-300 sm:text-lg lg:min-h-[4.875rem] lg:rounded-[0.75rem] lg:py-0 lg:pl-[2.0625rem] lg:pr-[2.25rem] lg:text-[1.92rem] ${
                  isOpen ? "rounded-b-none bg-[var(--color-primary-dark)] text-[var(--color-white)] lg:min-h-[4.75rem]" : "text-[var(--color-heading)] hover:text-[var(--color-primary)]"
                }`}
              >
                {item.question}
                <Icon name="LuChevronDown" className={`size-6 shrink-0 transition-transform duration-300 lg:size-[2.5rem] ${isOpen ? "rotate-180" : ""}`} strokeWidth={2.6} />
              </button>
            </h3>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-5 pb-5 pt-4 font-accent text-[0.95rem] leading-relaxed text-[var(--color-text)] sm:text-base lg:pb-[1.6875rem] lg:pl-[2.0625rem] lg:pr-[5rem] lg:pt-[1rem] lg:text-[1.5425rem] lg:leading-[2.25rem]">{item.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
