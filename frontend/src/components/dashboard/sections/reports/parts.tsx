"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Sparkline, series } from "./charts";

// Building blocks for the Reports tabs: a panel that can switch any chart to
// its table (the accessible twin of the chart), KPI tiles, change badges and
// a sortable table.

export const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
export const pct = (n: number, digits = 0) => `${(n * 100).toFixed(digits)}%`;
export const rupees = (v: number) => `₹${Math.round(v).toLocaleString("en-IN")}`;
/** Short money for tiles: ₹84,000 · ₹4.6L · ₹1.2Cr. */
export const rupeesShort = (v: number) => (v >= 1e7 ? `₹${(v / 1e7).toFixed(1)}Cr` : v >= 1e5 ? `₹${(v / 1e5).toFixed(1)}L` : rupees(v));
export const seconds = (s: number) => (s < 60 ? `${Math.round(s * 10) / 10} sec` : s < 3600 ? `${Math.round(s / 60)} min` : `${Math.round(s / 360) / 10} h`);

export type TableData = { columns: string[]; rows: (string | number)[][] };

/** A titled report panel. With `table`, a toggle shows the same numbers as a table. */
export function Panel({ title, description, action, children, table, className = "" }: { title: string; description?: ReactNode; action?: ReactNode; children: ReactNode; table?: TableData; className?: string }) {
  const [asTable, setAsTable] = useState(false);
  return (
    <section aria-label={title} className={`flex min-w-0 flex-col gap-4 rounded-[18px] border border-line bg-white p-5 ${className}`}>
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div className="min-w-0">
          <h2 className="m-0 text-[15.5px] font-semibold text-ink">{title}</h2>
          {description && <p className="m-0 mt-0.5 text-[13px] text-subtle">{description}</p>}
        </div>
        <div className="flex items-center gap-3">
          {!asTable && action}
          {table && (
            <button
              type="button"
              aria-pressed={asTable}
              onClick={() => setAsTable(!asTable)}
              title={asTable ? "Show chart" : "Show as table"}
              aria-label={`${title}: show as table`}
              className={`inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[8px] transition ${asTable ? "bg-ink text-white" : "text-muted hover:bg-panel hover:text-ink"}`}
            >
              <Icon name="table" size={16} />
            </button>
          )}
        </div>
      </div>
      {asTable && table ? <PlainTable data={table} /> : children}
    </section>
  );
}

function PlainTable({ data }: { data: TableData }) {
  return (
    <div className="relative max-h-[320px] overflow-auto rounded-[10px] border border-line">
      <table className="w-full border-collapse text-[13.5px]">
        <thead className="sticky top-0 bg-[#F7F7FA]">
          <tr>
            {data.columns.map((c, i) => (
              <th key={c} scope="col" className={`px-3 py-2 font-medium whitespace-nowrap text-subtle ${i ? "text-right" : "text-left"}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((r, ri) => (
            <tr key={ri} className="border-t border-line">
              {r.map((v, i) => (
                <td key={i} className={`px-3 py-2 whitespace-nowrap ${i ? "text-right text-ink tabular-nums" : "text-ink-soft"}`}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Change against the previous period: arrow, percentage, and whether that's good. */
export function Delta({ value, better = "up", size = "md" }: { value: number; better?: "up" | "down"; size?: "sm" | "md" }) {
  const flat = Math.abs(value) < 0.005;
  const good = better === "up" ? value >= 0 : value <= 0;
  const tone = flat ? "bg-panel text-muted" : good ? "bg-[#E8F3EA] text-success" : "bg-[#FDECEC] text-danger";
  return (
    <span className={`inline-flex flex-none items-center gap-0.5 rounded-full font-semibold tabular-nums ${tone} ${size === "sm" ? "px-1.5 py-px text-[11.5px]" : "px-2 py-0.5 text-[12px]"}`}>
      {!flat && <Icon name="chevron-down" size={12} strokeWidth={2.6} className={value >= 0 ? "rotate-180" : ""} />}
      {flat ? "No change" : `${Math.abs(value * 100).toFixed(Math.abs(value) < 0.1 ? 1 : 0)}%`}
      {!flat && <span className="sr-only">{good ? " better" : " worse"} than the previous period</span>}
    </span>
  );
}

export type Kpi = { id: string; label: string; value: string; delta?: number; better?: "up" | "down"; trend: number[]; hint?: string };

/** A row of KPI tiles. With `selected`/`onSelect` they work as a picker for the main chart. */
export function KpiRow({ items, selected, onSelect, compare }: { items: Kpi[]; selected?: string; onSelect?: (id: string) => void; compare: boolean }) {
  return (
    <div className={`grid grid-cols-2 gap-3 md:grid-cols-3 [&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:col-span-1 ${items.length >= 5 ? "xl:grid-cols-5" : "xl:grid-cols-4"}`}>
      {items.map((k) => {
        const on = selected === k.id;
        const trend = k.trend.length > 12 ? Array.from({ length: 12 }, (_, i) => k.trend.slice(Math.floor((i * k.trend.length) / 12), Math.floor(((i + 1) * k.trend.length) / 12))).map((g) => g.reduce((a, b) => a + b, 0) / g.length) : k.trend;
        const body = (
          <>
            <span className="flex items-center justify-between gap-2">
              <span className="truncate text-[13px] font-medium text-subtle">{k.label}</span>
              {onSelect && <span aria-hidden="true" className={`h-2 w-2 flex-none rounded-full transition ${on ? "bg-[#2a78d6]" : "bg-transparent"}`} />}
            </span>
            <span className="flex items-end justify-between gap-2">
              <span className="text-[22px] leading-none font-semibold tracking-[-0.02em] whitespace-nowrap text-ink sm:text-[26px]">{k.value}</span>
              <Sparkline values={trend} width={64} height={24} className="hidden sm:block" color={on || !onSelect ? series.blue : "#9EA0AE"} />
            </span>
            <span className="flex min-h-5 min-w-0 items-center gap-1.5 text-[12px] text-subtle">
              {compare && k.delta !== undefined && <Delta value={k.delta} better={k.better} size="sm" />}
              <span className={`truncate ${compare && k.delta !== undefined ? "hidden sm:inline" : ""}`}>{compare && k.delta !== undefined ? "vs previous period" : k.hint}</span>
            </span>
          </>
        );
        const cls = `flex min-w-0 flex-col gap-2.5 rounded-[16px] border bg-white p-4 text-left transition`;
        return onSelect ? (
          <button
            key={k.id}
            type="button"
            aria-pressed={on}
            onClick={() => onSelect(k.id)}
            className={`${cls} cursor-pointer ${on ? "border-ink shadow-[0_0_0_1px_#1E1F2B,0_6px_18px_rgb(30_31_43/0.08)]" : "border-line hover:border-line-strong hover:shadow-[0_4px_14px_rgb(30_31_43/0.06)]"}`}
          >
            {body}
          </button>
        ) : (
          <div key={k.id} className={`${cls} border-line`}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

export type Column<R> = { id: string; label: string; align?: "left" | "right"; value: (r: R) => number | string; render?: (r: R) => ReactNode; sortable?: boolean; className?: string };

/** A sortable table. Click a header to sort; click again to reverse. */
export function DataTable<R>({ columns, rows, initialSort, label, footer }: { columns: Column<R>[]; rows: R[]; initialSort?: { id: string; desc: boolean }; label: string; footer?: ReactNode[] }) {
  const [sort, setSort] = useState(initialSort ?? null);
  const col = columns.find((c) => c.id === sort?.id);
  const sorted = col
    ? [...rows].sort((a, b) => {
        const x = col.value(a);
        const y = col.value(b);
        const r = typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y));
        return sort!.desc ? -r : r;
      })
    : rows;
  return (
    <div className="relative -mx-5 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-[13.5px]" aria-label={label}>
        <thead>
          <tr className="border-y border-line bg-[#FAFAFC]">
            {columns.map((c, i) => {
              const active = sort?.id === c.id;
              const right = c.align === "right";
              return (
                <th key={c.id} scope="col" aria-sort={active ? (sort!.desc ? "descending" : "ascending") : undefined} className={`h-10 font-medium whitespace-nowrap text-subtle ${i === 0 ? "pl-5" : "pl-3"} ${i === columns.length - 1 ? "pr-5" : "pr-3"} ${right ? "text-right" : "text-left"}`}>
                  {c.sortable === false ? (
                    c.label
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSort({ id: c.id, desc: active ? !sort!.desc : true })}
                      className={`inline-flex cursor-pointer items-center gap-1 rounded-[6px] hover:text-ink ${active ? "text-ink" : ""} ${right ? "flex-row-reverse" : ""}`}
                    >
                      {c.label}
                      <Icon name="chevron-down" size={13} className={`transition ${active ? "" : "opacity-0"} ${active && !sort!.desc ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r, ri) => (
            <tr key={ri} className="border-b border-line last:border-b-0 hover:bg-[#FAFAFC]">
              {columns.map((c, i) => (
                <td key={c.id} className={`h-12 ${i === 0 ? "pl-5" : "pl-3"} ${i === columns.length - 1 ? "pr-5" : "pr-3"} ${c.align === "right" ? "text-right tabular-nums" : ""} ${c.className ?? ""}`}>
                  {c.render ? c.render(r) : c.value(r)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr className="border-t border-line-strong font-semibold text-ink">
              {footer.map((f, i) => (
                <td key={i} className={`h-11 ${i === 0 ? "pl-5" : "pl-3"} ${i === footer.length - 1 ? "pr-5" : "pr-3"} ${columns[i]?.align === "right" ? "text-right tabular-nums" : ""}`}>
                  {f}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

/** A thin inline share bar for table cells. */
export function ShareBar({ share, color = series.blue }: { share: number; color?: string }) {
  return (
    <span className="flex items-center justify-end gap-2">
      <span className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-panel sm:block">
        <span className="block h-full rounded-full" style={{ width: `${Math.max(2, share * 100)}%`, background: color }} />
      </span>
      <span className="w-10 tabular-nums">{pct(share)}</span>
    </span>
  );
}

/** A small figure with a label, for panel footers. */
export function Figure({ label, value, hint }: { label: string; value: string; hint?: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-0.5">
      <span className="text-[12.5px] text-subtle">{label}</span>
      <span className="text-[20px] font-semibold tracking-[-0.01em] text-ink">{value}</span>
      {hint && <span className="text-[12px] text-subtle">{hint}</span>}
    </div>
  );
}
