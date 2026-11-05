import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

// Small building blocks shared by the dashboard's pages.

const DAY = 86_400_000;

export function pilotDay(liveAt: string | null) {
  if (!liveAt) return 3;
  return Math.min(30, Math.max(1, Math.floor((Date.now() - new Date(liveAt).getTime()) / DAY) + 1));
}

export function SampleTag() {
  return <span className="rounded-full bg-panel px-2 py-0.5 text-caption font-semibold tracking-[0.06em] whitespace-nowrap text-muted uppercase">Sample data</span>;
}

export function Card({ title, extra, children, className = "" }: { title: string; extra?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`flex flex-col gap-4 rounded-xl border border-line bg-surface p-5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="m-0 text-body-lg font-semibold text-ink">{title}</h2>
        {extra}
      </div>
      {children}
    </section>
  );
}

export function Ring({ done, total }: { done: number; total: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" role="img" aria-label={`${done} of ${total} done`}>
      <circle cx="28" cy="28" r={r} fill="none" stroke="var(--v-border)" strokeWidth="6" />
      <circle
        cx="28"
        cy="28"
        r={r}
        fill="none"
        stroke="var(--v-brand)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - done / total)}
        transform="rotate(-90 28 28)"
        className="transition-[stroke-dashoffset] duration-700"
      />
      <text x="28" y="33" textAnchor="middle" className="fill-ink text-body font-bold">
        {done}/{total}
      </text>
    </svg>
  );
}

/** Page title with an optional back link, used by setup task pages. */
export function PageTitle({ title, body, onBack, backLabel = "Back" }: { title: string; body?: string; onBack?: () => void; backLabel?: string }) {
  return (
    <div className="flex flex-col gap-3">
      {onBack && (
        <button type="button" onClick={onBack} className="inline-flex w-fit cursor-pointer items-center gap-1 text-body font-semibold text-subtle hover:text-ink">
          <Icon name="chevron-left" size={17} />
          {backLabel}
        </button>
      )}
      <h1 className="m-0 text-h1 font-semibold tracking-[-0.015em] text-text">{title}</h1>
      {body && <p className="m-0 max-w-[620px] text-body-lg leading-relaxed text-subtle">{body}</p>}
    </div>
  );
}

/** A settings group: title and explanation on the left, controls on the right (stacked on phones). */
export function SettingsSection({ title, description, children, id }: { title: string; description?: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} aria-label={title} className="grid grid-cols-[minmax(0,1fr)] gap-4 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-10">
      <div className="flex flex-col gap-1">
        <h2 className="m-0 text-body-lg font-semibold text-ink">{title}</h2>
        {description && <p className="m-0 text-body leading-relaxed text-subtle">{description}</p>}
      </div>
      <div className="flex min-w-0 flex-col gap-4">{children}</div>
    </section>
  );
}

/** Floating bar shown while a settings form has unsaved changes. */
export function SaveBar({ onSave, onDiscard }: { onSave: () => void; onDiscard: () => void }) {
  return (
    <div role="region" aria-label="Unsaved changes" className="sticky bottom-20 z-10 mt-4 lg:bottom-6">
      <div className="flex items-center justify-between gap-3 rounded-lg bg-brand-fill px-4 py-3 text-white shadow-2">
        <span className="text-body font-medium">You have unsaved changes</span>
        <span className="flex gap-2">
          <button type="button" onClick={onDiscard} className="min-h-9 cursor-pointer rounded-md px-3 text-body font-semibold text-white/80 hover:text-white">
            Discard
          </button>
          <button type="button" onClick={onSave} className="min-h-9 cursor-pointer rounded-md bg-surface px-4 text-body font-semibold text-ink">
            Save changes
          </button>
        </span>
      </div>
    </div>
  );
}

/** A quiet note on pages above the business's plan. Plan limits are off while the app is built, so the page still works with sample data. */
export function PlanNotice({ feature, planName, currentName, onPlans }: { feature: string; planName: string; currentName: string; onPlans: () => void }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-border bg-brand-subtle px-4 py-3">
      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-surface text-indigo">
        <Icon name="sparkle" size={16} />
      </span>
      <p className="m-0 min-w-0 flex-1 text-body text-ink-soft">
        <strong className="font-semibold text-ink">{feature} is part of {planName}.</strong> You’re on {currentName}, so this page shows sample data to explore.
      </p>
      <button type="button" onClick={onPlans} className="inline-flex min-h-9 flex-none cursor-pointer items-center gap-1 rounded-md bg-brand-fill px-3.5 text-body font-semibold text-white hover:bg-brand-hover">
        Upgrade to {planName}
        <Icon name="chevron-right" size={15} />
      </button>
    </div>
  );
}
