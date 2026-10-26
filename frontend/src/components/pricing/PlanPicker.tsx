"use client";

import { useState } from "react";
import { pickerQuestions, plans, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";

/** A few quick questions that recommend a plan and highlight its card. */
export function PlanPicker({ onPick }: { onPick: (plan: PlanId | null) => void }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const answered = Object.keys(answers).length;
  const complete = answered === pickerQuestions.length;

  const recommend = (next: Record<string, number>): PlanId => {
    const score: Record<PlanId, number> = { starter: 0, growth: 0, pro: 0 };
    for (const q of pickerQuestions) {
      const choice = next[q.id];
      if (choice === undefined) continue;
      for (const [plan, pts] of Object.entries(q.options[choice].score)) score[plan as PlanId] += pts ?? 0;
    }
    // Ties go to the larger plan: it covers everything the smaller one does.
    return (["pro", "growth", "starter"] as PlanId[]).reduce((best, p) => (score[p] > score[best] ? p : best), "pro");
  };

  const choose = (qid: string, index: number) => {
    const next = { ...answers, [qid]: index };
    setAnswers(next);
    if (Object.keys(next).length === pickerQuestions.length) onPick(recommend(next));
  };

  const result = complete ? plans.find((p) => p.id === recommend(answers)) : undefined;

  return (
    <div className="rounded-[26px] border border-line bg-white p-[clamp(20px,3.5vw,40px)] shadow-[0_20px_60px_rgb(21_16_173/0.07)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="m-0 font-serif text-[clamp(28px,3vw,38px)] font-normal tracking-[-0.02em]">Which plan fits you?</h2>
        <span className="text-sm font-medium text-subtle" aria-live="polite">
          {answered} of {pickerQuestions.length} answered
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-panel" aria-hidden="true">
        <div className="h-full rounded-full bg-[linear-gradient(90deg,#ee7a2e,#6e77e6)] transition-[width] duration-500" style={{ width: `${(answered / pickerQuestions.length) * 100}%` }} />
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-2">
        {pickerQuestions.map((q) => (
          <fieldset key={q.id} className="m-0 flex flex-col gap-3 border-0 p-0">
            <legend className="mb-3 p-0 text-[16px] font-semibold text-ink">{q.question}</legend>
            <div className="flex flex-wrap gap-2">
              {q.options.map((o, i) => {
                const active = answers[q.id] === i;
                return (
                  <button
                    key={o.label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => choose(q.id, i)}
                    className={`min-h-11 cursor-pointer rounded-full border px-4 text-[14.5px] font-medium transition ${
                      active ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink hover:border-subtle"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-7 flex min-h-14 flex-wrap items-center justify-between gap-4 rounded-[18px] bg-panel px-5 py-4" aria-live="polite">
        {result ? (
          <>
            <p className="m-0 text-[17px] text-ink">
              We recommend <strong className="font-semibold">{result.name}</strong>: {result.promise.toLowerCase()}.
            </p>
            <div className="flex gap-3">
              <a href={`#plan-${result.id}`} className="inline-flex items-center gap-1 font-semibold text-indigo hover:underline hover:underline-offset-4">
                See {result.name}
                <Icon name="chevron-down" size={18} />
              </a>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  onPick(null);
                }}
                className="cursor-pointer font-medium text-subtle hover:text-ink"
              >
                Start over
              </button>
            </div>
          </>
        ) : (
          <p className="m-0 text-[15px] text-subtle">Answer the questions and we’ll highlight the plan that fits.</p>
        )}
      </div>
    </div>
  );
}
