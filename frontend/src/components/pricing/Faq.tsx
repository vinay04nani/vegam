"use client";

import { useState } from "react";
import { faqs } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";

/** Accordion: one answer open at a time. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-[26px] border border-line bg-white">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3 className="m-0">
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-[17.5px] font-semibold text-ink sm:px-8"
              >
                {f.q}
                <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line-strong transition duration-300 ${isOpen ? "rotate-45 bg-ink text-white" : "text-ink"}`}>
                  <Icon name="close" size={16} className="rotate-45" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="m-0 max-w-[760px] px-6 pb-6 text-[16.5px] leading-relaxed text-subtle sm:px-8">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
