"use client";

import { useState } from "react";
import { journeys, plans, type PlanId } from "@/content/pricing";
import { ChatDemo } from "@/components/sections/ChatDemo";
import { Icon } from "@/components/ui/Icon";

/** One tab per plan: the steps of a real customer journey beside a playing chat. */
export function HowItWorks() {
  const [planId, setPlanId] = useState<PlanId>("starter");
  const journey = journeys[planId];

  return (
    <div className="flex flex-col gap-8">
      <div role="tablist" aria-label="Plans" className="mx-auto inline-flex rounded-full border border-line-strong bg-white p-1">
        {plans.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            id={`journey-tab-${p.id}`}
            aria-selected={planId === p.id}
            aria-controls="journey-panel"
            onClick={() => setPlanId(p.id)}
            className={`min-h-11 cursor-pointer rounded-full px-6 text-[15px] font-semibold transition ${planId === p.id ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div id="journey-panel" role="tabpanel" aria-labelledby={`journey-tab-${planId}`} className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div key={planId} className="flex flex-col gap-6">
          <p className="bubble-in m-0 text-[19px] leading-relaxed text-ink-soft">{journey.intro}</p>
          <ol className="relative m-0 flex list-none flex-col gap-5 p-0">
            <span aria-hidden="true" className="absolute top-6 bottom-6 left-[23px] w-px bg-[linear-gradient(180deg,#ee7a2e,#6e77e6)] opacity-40" />
            {journey.steps.map((s, i) => (
              <li key={s.title} className="bubble-in relative flex items-start gap-4" style={{ animationDelay: `${i * 110}ms` }}>
                <span className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-line-strong bg-white text-ink shadow-[0_6px_18px_rgb(21_16_173/0.08)]">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="flex flex-col gap-0.5 pt-1.5">
                  <span className="text-[17px] font-semibold text-ink">
                    <span className="mr-2 font-mono text-[13px] text-subtle">0{i + 1}</span>
                    {s.title}
                  </span>
                  <span className="text-[15.5px] text-subtle">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <ChatDemo key={planId} tabs={journey.chat} label={`${planId} sample conversations`} />
      </div>
    </div>
  );
}
