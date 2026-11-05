"use client";

import { useState } from "react";
import { faqs, overage } from "@/content/pricing";
import { useLocale } from "@/components/LocaleProvider";
import { Icon } from "@/components/ui/Icon";
import { formatMoney, taxNote } from "@/lib/locale";

/** Accordion: one answer open at a time. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const locale = useLocale();
  const answer = (q: string, a: string) => {
    if (q === "Are taxes included?") {
      return `Prices are shown ${taxNote(locale.region)}. Tax is added on your invoice based on where your business is based.`;
    }
    if (q === "What happens if I go over my allowance?") {
      const rates = overage[locale.currency];
      return `Nothing stops working. Extra AI conversations are ${formatMoney(rates.conversation, locale.currency, locale.locale)} each and extra voice minutes are ${formatMoney(rates.minute, locale.currency, locale.locale)} each, and we'll tell you before you reach your limit.`;
    }
    return a;
  };
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-surface">
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
                className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-start text-body-lg font-semibold text-ink sm:px-7"
              >
                {f.q}
                <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line-strong transition duration-300 ${isOpen ? "rotate-45 bg-brand-fill text-white" : "text-ink"}`}>
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
                <p className="m-0 max-w-[760px] px-6 pb-6 text-body-lg leading-relaxed text-subtle sm:px-7">{answer(f.q, f.a)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
