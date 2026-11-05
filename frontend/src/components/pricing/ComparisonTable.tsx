"use client";

import { useState } from "react";
import { featureGroups, plans, type PlanId } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";

function Value({ v }: { v: boolean | string }) {
  if (v === true)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F3EA] text-success" aria-label="Included">
        <Icon name="check" size={18} strokeWidth={2} />
      </span>
    );
  if (v === false) return <span className="text-faint" aria-label="Not included">–</span>;
  return <span className="text-body font-semibold text-ink">{v}</span>;
}

/** Full feature comparison: grouped rows that collapse, sticky plan headers, one-plan view on phones. */
export function ComparisonTable() {
  const [open, setOpen] = useState<Record<string, boolean>>(() => Object.fromEntries(featureGroups.map((g) => [g.title, true])));
  const [mobilePlan, setMobilePlan] = useState<PlanId>("growth");

  return (
    <div className="rounded-xl border border-line bg-surface">
      {/* Phone: pick one plan to view */}
      <div className="sticky top-[64px] z-20 flex gap-1 rounded-t-[26px] border-b border-line bg-surface/95 p-2 backdrop-blur md:hidden" role="tablist" aria-label="Plan to compare">
        {plans.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={mobilePlan === p.id}
            onClick={() => setMobilePlan(p.id)}
            className={`min-h-10 flex-1 cursor-pointer rounded-full text-body font-semibold transition ${mobilePlan === p.id ? "bg-brand-fill text-white" : "text-muted"}`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <table className="w-full border-collapse text-start">
        <caption className="sr-only">Features included in each plan</caption>
        <thead className="sticky top-[64px] z-10 hidden bg-surface/95 backdrop-blur md:table-header-group">
          <tr>
            <th scope="col" className="w-[44%] rounded-ss-[26px] border-b border-line px-6 py-5 text-body font-semibold text-subtle">
              Features
            </th>
            {plans.map((p) => (
              <th key={p.id} scope="col" className={`border-b border-line px-4 py-5 text-center ${p.popular ? "bg-signal/15" : ""} ${p.id === "pro" ? "rounded-se-[26px]" : ""}`}>
                <span className="block text-h3 font-bold text-ink">{p.name}</span>
                {p.popular && <span className="mt-0.5 block text-caption font-semibold tracking-[0.08em] text-signal-ink uppercase">Most popular</span>}
              </th>
            ))}
          </tr>
        </thead>
        {featureGroups.map((g) => (
          <tbody key={g.title}>
            <tr>
              <th colSpan={4} scope="colgroup" className="border-b border-line bg-panel/70 p-0">
                <button
                  type="button"
                  aria-expanded={open[g.title]}
                  onClick={() => setOpen((o) => ({ ...o, [g.title]: !o[g.title] }))}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-3.5 text-start text-label font-semibold tracking-[0.12em] text-muted uppercase"
                >
                  {g.title}
                  <Icon name="chevron-down" size={18} className={`transition ${open[g.title] ? "rotate-180" : ""}`} />
                </button>
              </th>
            </tr>
            {open[g.title] &&
              g.rows.map((r) => (
                <tr key={r.name} className="group border-b border-line last:border-b-0 hover:bg-page">
                  <th scope="row" className="px-5 py-4 align-top font-normal sm:px-6">
                    <span className="flex flex-col gap-0.5">
                      <span className="text-body-lg font-medium text-ink">{r.name}</span>
                      <span className="text-label leading-snug text-subtle">{r.info}</span>
                    </span>
                  </th>
                  {plans.map((p) => (
                    <td
                      key={p.id}
                      className={`min-w-[96px] px-3 py-4 text-center align-middle whitespace-nowrap sm:px-4 ${p.popular ? "bg-brand-subtle" : ""} ${mobilePlan === p.id ? "table-cell" : "hidden md:table-cell"}`}
                    >
                      <span className="inline-flex justify-center">
                        <Value v={r.values[p.id]} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
