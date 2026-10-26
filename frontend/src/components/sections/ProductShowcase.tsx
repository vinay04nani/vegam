"use client";

import { useState } from "react";
import { links, showcaseViews, type ViewRow } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { DisplayHeading, Eyebrow } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { KolamOrnament } from "@/components/ui/Kolam";
import { Reveal } from "@/components/ui/Reveal";

const toneClass: Record<ViewRow["tone"], string> = {
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  neutral: "text-ink",
};

export function ProductShowcase() {
  const [viewId, setViewId] = useState(showcaseViews[0].id);
  const view = showcaseViews.find((v) => v.id === viewId) ?? showcaseViews[0];

  return (
    <section id="product" className="bg-peri scroll-mt-20 px-4 py-[clamp(72px,9vw,120px)] sm:px-10">
      <Reveal className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 text-center">
        <KolamOrnament color="#B9BED6" width={190} animated={false} />
        <Eyebrow>Vegam front desk</Eyebrow>
        <DisplayHeading className="max-w-[980px] text-[clamp(40px,5.2vw,76px)]">
          An AI front desk that catches every customer
        </DisplayHeading>
        <p className="m-0 max-w-[820px] text-[clamp(18px,1.6vw,22px)] text-muted">
          Vegam replies to messages, answers calls, books appointments and follows up on leads, then tells you exactly
          what it did. You step in only when it matters.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3.5">
          <ButtonLink href={links.demo}>Book a demo</ButtonLink>
          <ButtonLink href="#features" variant="light">
            See how it works
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className="mx-auto mt-14 flex max-w-[1240px] flex-wrap overflow-hidden rounded-[22px] border border-line-strong bg-white text-left shadow-[0_30px_80px_rgb(21_16_173/0.12)]"
      >
        <div className="flex max-w-full flex-[1_1_280px] flex-col border-line bg-panel sm:border-r">
          <div className="flex items-center gap-3 border-b border-line px-6 py-5.5">
            <span aria-hidden="true" className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-brand">
              <span className="h-3.5 w-3.5 rounded-full bg-accent" />
            </span>
            <span className="text-lg font-bold">Your front desk</span>
          </div>
          <div role="tablist" aria-label="Front desk views" aria-orientation="vertical" className="flex flex-col gap-1.5 p-4">
            {showcaseViews.map((v) => {
              const active = v.id === view.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  role="tab"
                  id={`view-tab-${v.id}`}
                  aria-selected={active}
                  aria-controls="view-panel"
                  onClick={() => setViewId(v.id)}
                  className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition duration-200 ${
                    active
                      ? "border-line-strong bg-white shadow-[0_2px_8px_rgb(30_31_43/0.05)]"
                      : "border-transparent hover:bg-white/60"
                  }`}
                >
                  <span className={`flex w-6 justify-center ${active ? "text-ink" : "text-subtle"}`}>
                    <Icon name={v.icon} size={20} />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className={`text-[17px] ${active ? "font-semibold" : "font-medium"}`}>{v.title}</span>
                    <span className="text-sm text-subtle">{v.subtitle}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="view-panel"
          role="tabpanel"
          aria-labelledby={`view-tab-${view.id}`}
          aria-live="polite"
          className="flex min-h-[560px] min-w-0 flex-[999_1_560px] flex-col"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-5.5 sm:px-8">
            <span className="text-lg font-semibold">{view.title}</span>
            <span className="rounded-md bg-periwinkle-soft px-2.5 py-1 font-mono text-sm tracking-[0.06em] text-brand">
              {view.tag}
            </span>
          </div>
          <div key={view.id} className="flex flex-col gap-6.5 px-5 pt-6 pb-8 sm:px-8">
            <div className="ml-2.5 flex flex-col gap-3.5 border-l-[1.5px] border-line-strong pl-5.5">
              {view.steps.map((s, i) => (
                <div
                  key={s}
                  className="bubble-in flex items-center gap-3 text-[17px] text-[#2E3040]"
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  <Icon name="check" size={20} className="flex-none text-success" strokeWidth={1.8} />
                  {s}
                </div>
              ))}
            </div>
            <p className="bubble-in m-0 text-[21px] font-medium" style={{ animationDelay: "460ms" }}>
              {view.summary}
            </p>
            <div role="table" aria-label={`${view.title} summary`} className="bubble-in" style={{ animationDelay: "560ms" }}>
              <div
                role="row"
                className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,2fr)] gap-4 border-b border-line-strong pb-3 text-[17px] font-semibold"
              >
                <span role="columnheader">{view.columns[0]}</span>
                <span role="columnheader">{view.columns[1]}</span>
                <span role="columnheader">Action</span>
              </div>
              {view.rows.map((r) => (
                <div
                  key={r.status}
                  role="row"
                  className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,2fr)] gap-4 border-b border-line py-3.5 text-[17px]"
                >
                  <span role="cell" className={`font-medium ${toneClass[r.tone]}`}>
                    {r.status}
                  </span>
                  <span role="cell">{r.count}</span>
                  <span role="cell" className="text-muted">
                    {r.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
