"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

// Small SVG/HTML charts for the Reports page, following the data-viz method:
// one axis, thin marks (2px lines, bars ≤ 24px with a 4px rounded end and a
// 2px surface gap), a recessive solid grid, legends for 2+ series, a hover
// tooltip on every chart that keyboard focus also shows, and categorical
// colours in a fixed order (palette validated for colour-blind separation).

export const series = { blue: "#2a78d6", orange: "#eb6834", aqua: "#1baf7a", yellow: "#eda100" };
/** The fixed order for categorical series. Colour follows the entity, never its rank. */
export const slots = [series.blue, series.orange, series.aqua, series.yellow];
/** De-emphasis grey: the comparison period, "other". */
export const quiet = "#B9BBC7";
/** Blue sequential ramp, light → dark, for magnitude (heatmap). */
export const blueRamp = ["#edf4fd", "#cde2fb", "#9ec5f4", "#6da7ec", "#3987e5", "#256abf", "#184f95", "#104281"];

const ink = { primary: "#1E1F2B", secondary: "#5D5F6E", muted: "#8A8C99", grid: "#ECEDF2" };

/** Compact numbers for axes: 950, 1.2K, 3.4L, 1.1Cr (Indian grouping). */
export function compact(v: number) {
  const a = Math.abs(v);
  const trim = (n: number) => (n >= 10 ? Math.round(n) : Math.round(n * 10) / 10).toString();
  if (a >= 1e7) return `${trim(v / 1e7)}Cr`;
  if (a >= 1e5) return `${trim(v / 1e5)}L`;
  if (a >= 1e3) return `${trim(v / 1e3)}K`;
  return trim(v);
}

/** Round axis ticks from 0 to just above `max`. */
function niceTicks(max: number, count = 4) {
  if (max <= 0) return [0, 1];
  const raw = max / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? 10 * mag;
  const top = Math.ceil(max / step - 1e-9) * step;
  return Array.from({ length: Math.round(top / step) + 1 }, (_, i) => Math.round(i * step * 1e6) / 1e6);
}

/** Width of an element, kept up to date. */
function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(Math.round(e.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

/** Arrow keys move the highlighted point, as hover does. */
function useKeyboardIndex(n: number, setHover: (fn: (h: number | null) => number | null) => void) {
  return {
    tabIndex: 0,
    onFocus: () => setHover((h) => h ?? n - 1),
    onBlur: () => setHover(() => null),
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        setHover((h) => Math.max(0, Math.min(n - 1, (h ?? n - 1) + (e.key === "ArrowRight" ? 1 : -1))));
      } else if (e.key === "Home") setHover(() => 0);
      else if (e.key === "End") setHover(() => n - 1);
    },
  };
}

/** A floating tooltip. */
function Tip({ x, y, children, width }: { x: number; y: number; children: ReactNode; width: number }) {
  const left = Math.min(Math.max(x, 84), width - 84);
  return (
    <div role="tooltip" className="pointer-events-none absolute z-10 flex -translate-x-1/2 -translate-y-full flex-col gap-0.5 rounded-[10px] bg-ink px-3 py-2 text-[12.5px] whitespace-nowrap text-white shadow-[0_8px_20px_rgb(30_31_43/0.25)]" style={{ left, top: y - 8 }}>
      {children}
    </div>
  );
}

function TipRow({ color, label, value, dim }: { color: string; label: string; value: string; dim?: boolean }) {
  return (
    <span className={`flex items-center gap-2 ${dim ? "text-white/70" : ""}`}>
      <span className="h-2 w-2 flex-none rounded-full" style={{ background: color }} />
      <span className="flex-1">{label}</span>
      <span className="pl-3 font-semibold tabular-nums">{value}</span>
    </span>
  );
}

/** A tiny trend line for a stat tile (no axes; the tile carries the number). */
export function Sparkline({ values, color = series.blue, width = 96, height = 28, className = "" }: { values: number[]; color?: string; width?: number; height?: number; className?: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const pts = values.map((v, i) => [(i / Math.max(1, values.length - 1)) * (width - 4) + 2, height - 3 - ((v - min) / Math.max(1e-9, max - min)) * (height - 6)]);
  const last = pts[pts.length - 1];
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" className={`flex-none overflow-visible ${className}`}>
      <polyline points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {last && <circle cx={last[0]} cy={last[1]} r="2.5" fill={color} />}
    </svg>
  );
}

export type Series = { id: string; label: string; color: string; values: number[]; /** Drawn as the quiet comparison line. */ muted?: boolean };

const axisWidth = (labels: string[]) => Math.max(...labels.map((l) => l.length)) * 6.6 + 12;

/** Line chart over time with a crosshair tooltip. One shared axis. */
export function LineChart({
  labels,
  tipLabels = labels,
  data,
  height = 260,
  format = (v: number) => String(v),
  axisFormat = compact,
  label,
}: {
  labels: string[];
  /** Fuller labels for the tooltip (e.g. "Mon 3 Oct" when the axis says "Mon"). */
  tipLabels?: string[];
  data: Series[];
  height?: number;
  format?: (v: number) => string;
  axisFormat?: (v: number) => string;
  label: string;
}) {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const n = labels.length;
  const ticks = niceTicks(Math.max(...data.flatMap((s) => s.values)));
  const top = ticks[ticks.length - 1];
  const pad = { l: axisWidth(ticks.map(axisFormat)), r: 12, t: 14, b: 28 };
  const iw = Math.max(0, width - pad.l - pad.r);
  const ih = height - pad.t - pad.b;
  const x = (i: number) => pad.l + (n === 1 ? iw / 2 : (i / (n - 1)) * iw);
  const y = (v: number) => pad.t + ih - (v / top) * ih;
  const every = Math.ceil(n / Math.max(2, Math.floor(iw / 76)));
  const keys = useKeyboardIndex(n, setHover);
  const main = data.find((s) => !s.muted);

  return (
    <div ref={ref} className="relative w-full">
      {width > 0 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label={`${label}. Use the arrow keys to read each point.`}
          {...keys}
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const i = Math.round(((e.clientX - r.left - pad.l) / Math.max(1, iw)) * (n - 1));
            setHover(Math.max(0, Math.min(n - 1, i)));
          }}
          onPointerLeave={() => setHover(null)}
          className="block touch-pan-y rounded-[8px] outline-none focus-visible:ring-2 focus-visible:ring-indigo"
        >
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} stroke={ink.grid} strokeWidth="1" />
              <text x={pad.l - 10} y={y(t)} dy="0.32em" textAnchor="end" fontSize="11" fill={ink.muted} className="tabular-nums">
                {axisFormat(t)}
              </text>
            </g>
          ))}
          {labels.map((l, i) =>
            i % every === 0 || i === n - 1 ? (
              (i === n - 1 || n - 1 - i >= every * 0.75) && (
                <text key={i} x={x(i)} y={height - 8} textAnchor={i === 0 ? "start" : i === n - 1 ? "end" : "middle"} fontSize="11" fill={ink.muted}>
                  {l}
                </text>
              )
            ) : null,
          )}
          {main && <path d={`M${x(0)},${y(0)} ${main.values.map((v, i) => `L${x(i)},${y(v)}`).join(" ")} L${x(n - 1)},${y(0)} Z`} fill={main.color} opacity="0.1" />}
          {[...data].reverse().map((s) => (
            <polyline key={s.id} points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")} fill="none" stroke={s.color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          ))}
          {hover === null && main && <circle cx={x(n - 1)} cy={y(main.values[n - 1])} r="4" fill={main.color} stroke="#fff" strokeWidth="2" />}
          {hover !== null && (
            <g>
              <line x1={x(hover)} x2={x(hover)} y1={pad.t} y2={pad.t + ih} stroke={ink.secondary} strokeWidth="1" />
              {data.map((s) => (
                <circle key={s.id} cx={x(hover)} cy={y(s.values[hover])} r="4.5" fill={s.color} stroke="#fff" strokeWidth="2" />
              ))}
            </g>
          )}
        </svg>
      )}
      {hover !== null && width > 0 && (
        <Tip x={x(hover)} y={pad.t + 2} width={width}>
          <span className="block pb-0.5 font-semibold">{tipLabels[hover]}</span>
          {data.map((s) => (
            <TipRow key={s.id} color={s.color} label={s.label} value={format(s.values[hover])} dim={s.muted} />
          ))}
        </Tip>
      )}
    </div>
  );
}

/** A column with only its top corners rounded (the data end); square at the baseline. */
const column = (x: number, y: number, w: number, h: number, r: number) => {
  const rr = Math.min(r, h, w / 2);
  return `M${x},${y + h} V${y + rr} Q${x},${y} ${x + rr},${y} H${x + w - rr} Q${x + w},${y} ${x + w},${y + rr} V${y + h} Z`;
};

/** Vertical columns: one series, or several stacked (2px surface gap between segments). */
export function ColumnChart({
  labels,
  tipLabels = labels,
  data,
  height = 260,
  format = (v: number) => String(v),
  axisFormat = compact,
  label,
  total = true,
}: {
  labels: string[];
  tipLabels?: string[];
  data: Series[];
  height?: number;
  format?: (v: number) => string;
  axisFormat?: (v: number) => string;
  label: string;
  /** Show a total line in the tooltip for stacks. */
  total?: boolean;
}) {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const n = labels.length;
  const totals = labels.map((_, i) => data.reduce((a, s) => a + s.values[i], 0));
  const ticks = niceTicks(Math.max(...totals));
  const top = ticks[ticks.length - 1];
  const pad = { l: axisWidth(ticks.map(axisFormat)), r: 8, t: 14, b: 28 };
  const iw = Math.max(0, width - pad.l - pad.r);
  const ih = height - pad.t - pad.b;
  const slot = iw / Math.max(1, n);
  const bw = Math.max(3, Math.min(24, slot * 0.62));
  const cx = (i: number) => pad.l + slot * i + slot / 2;
  const h = (v: number) => (v / top) * ih;
  const every = Math.ceil(n / Math.max(2, Math.floor(iw / 64)));
  const keys = useKeyboardIndex(n, setHover);

  return (
    <div ref={ref} className="relative w-full">
      {width > 0 && (
        <svg width={width} height={height} role="img" aria-label={`${label}. Use the arrow keys to read each column.`} {...keys} onPointerLeave={() => setHover(null)} className="block touch-pan-y rounded-[8px] outline-none focus-visible:ring-2 focus-visible:ring-indigo">
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pad.l} x2={width - pad.r} y1={pad.t + ih - h(t)} y2={pad.t + ih - h(t)} stroke={ink.grid} strokeWidth="1" />
              <text x={pad.l - 10} y={pad.t + ih - h(t)} dy="0.32em" textAnchor="end" fontSize="11" fill={ink.muted} className="tabular-nums">
                {axisFormat(t)}
              </text>
            </g>
          ))}
          {labels.map((l, i) => {
            let base = pad.t + ih;
            const visible = data.map((s) => s.values[i]).filter((v) => v > 0).length;
            let drawn = 0;
            return (
              <g key={i} opacity={hover === null || hover === i ? 1 : 0.45} className="transition-opacity">
                {data.map((s) => {
                  const v = s.values[i];
                  if (v <= 0) return null;
                  drawn++;
                  const isTop = drawn === visible;
                  const segH = Math.max(1, h(v) - (drawn > 1 ? 2 : 0));
                  const yTop = base - (drawn > 1 ? 2 : 0) - segH;
                  const d = isTop ? column(cx(i) - bw / 2, yTop, bw, segH, 4) : `M${cx(i) - bw / 2},${yTop} h${bw} v${segH} h${-bw} Z`;
                  base = yTop;
                  return <path key={s.id} d={d} fill={s.color} />;
                })}
                {(i % every === 0 || i === n - 1) && (i === n - 1 || n - 1 - i >= every * 0.75) && (
                  <text x={cx(i)} y={height - 8} textAnchor="middle" fontSize="11" fill={ink.muted}>
                    {l}
                  </text>
                )}
                <rect x={pad.l + slot * i} y={pad.t} width={slot} height={ih} fill="transparent" onPointerEnter={() => setHover(i)} />
              </g>
            );
          })}
          <line x1={pad.l} x2={width - pad.r} y1={pad.t + ih} y2={pad.t + ih} stroke="#D9DAE3" strokeWidth="1" />
        </svg>
      )}
      {hover !== null && width > 0 && (
        <Tip x={cx(hover)} y={pad.t + ih - h(totals[hover]) - 2} width={width}>
          <span className="block pb-0.5 font-semibold">{tipLabels[hover]}</span>
          {[...data].reverse().map((s) => (
            <TipRow key={s.id} color={s.color} label={s.label} value={format(s.values[hover])} />
          ))}
          {total && data.length > 1 && (
            <span className="mt-0.5 flex justify-between border-t border-white/20 pt-1 font-semibold">
              Total <span className="tabular-nums">{format(totals[hover])}</span>
            </span>
          )}
        </Tip>
      )}
    </div>
  );
}

/** Legend for charts with 2+ series. */
export function Legend({ items }: { items: { label: string; color: string; value?: string; line?: boolean }[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-[13px] text-ink-soft">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-1.5">
          <span aria-hidden="true" className={it.line ? "h-[2px] w-3.5 rounded-full" : "h-2.5 w-2.5 rounded-[3px]"} style={{ background: it.color }} />
          {it.label}
          {it.value && <span className="font-semibold text-ink tabular-nums">{it.value}</span>}
        </li>
      ))}
    </ul>
  );
}

/** Horizontal bars for one series (single colour), with value labels and hover. */
export function BarList({
  rows,
  color = series.blue,
  format = (v: number) => String(v),
  note,
  labelWidth = 172,
}: {
  rows: { label: string; value: number }[];
  color?: string;
  format?: (v: number) => string;
  note?: (row: { label: string; value: number }, i: number) => string;
  labelWidth?: number;
}) {
  const max = Math.max(...rows.map((r) => r.value));
  const [hover, setHover] = useState<number | null>(null);
  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {rows.map((r, i) => (
        <li
          key={r.label}
          className="grid items-center gap-3 text-[13.5px]"
          style={{ gridTemplateColumns: `minmax(0,${labelWidth}px) minmax(0,1fr) auto` }}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <span className="truncate text-ink-soft">{r.label}</span>
          <span className="relative h-5">
            <span className="absolute inset-y-0 left-0 rounded-r-[4px] transition-opacity" style={{ width: `${Math.max(1.5, (r.value / max) * 100)}%`, background: color, opacity: hover === null || hover === i ? 1 : 0.45 }} />
            {hover === i && note && (
              <span role="tooltip" className="absolute -top-8 left-0 z-10 rounded-[8px] bg-ink px-2 py-1 text-[12px] whitespace-nowrap text-white">
                {note(r, i)}
              </span>
            )}
          </span>
          <span className="min-w-12 text-right font-semibold text-ink tabular-nums">{format(r.value)}</span>
        </li>
      ))}
    </ul>
  );
}

/** One stacked bar for a part-to-whole split (≤ 4 parts), 2px gaps, legend with values. */
export function SplitBar({ parts }: { parts: { label: string; share: number; color: string }[] }) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex h-6 gap-[2px]" role="img" aria-label={parts.map((p) => `${p.label} ${Math.round(p.share * 100)}%`).join(", ")}>
        {parts.map((p, i) => (
          <span
            key={p.label}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            title={`${p.label}: ${Math.round(p.share * 100)}%`}
            className={`h-full transition-opacity ${i === 0 ? "rounded-l-[6px]" : ""} ${i === parts.length - 1 ? "rounded-r-[6px]" : ""}`}
            style={{ width: `${p.share * 100}%`, background: p.color, opacity: hover === null || hover === i ? 1 : 0.45 }}
          />
        ))}
      </div>
      <Legend items={parts.map((p) => ({ label: p.label, color: p.color, value: `${Math.round(p.share * 100)}%` }))} />
    </div>
  );
}

/** A conversion funnel: each step's bar against the first, with what moved on and what dropped off between steps. */
export function Funnel({ steps, format = (v: number) => v.toLocaleString("en-IN") }: { steps: { label: string; value: number; hint?: string }[]; format?: (v: number) => string }) {
  const first = Math.max(1, steps[0]?.value ?? 1);
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {steps.map((s, i) => {
        const prev = steps[i - 1];
        const kept = prev ? s.value / Math.max(1, prev.value) : 1;
        return (
          <li key={s.label} className="flex flex-col">
            {prev && (
              <span className="flex items-center gap-2 py-1.5 pl-3 text-[12.5px] text-subtle">
                <svg width="10" height="14" viewBox="0 0 10 14" aria-hidden="true" className="flex-none text-line-strong">
                  <path d="M5 0v12M1 8l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  <span className="font-semibold text-ink-soft">{Math.round(kept * 100)}%</span> moved on · {format(prev.value - s.value)} dropped off
                </span>
              </span>
            )}
            <div className="flex flex-col gap-1.5">
              <span className="flex items-baseline justify-between gap-3 text-[13.5px]">
                <span className="min-w-0 truncate font-medium text-ink">
                  {s.label}
                  {s.hint && <span className="font-normal text-subtle"> · {s.hint}</span>}
                </span>
                <span className="flex-none text-ink-soft">
                  <span className="font-semibold text-ink tabular-nums">{format(s.value)}</span>
                  <span className="ml-2 inline-block w-10 text-right text-subtle tabular-nums">{Math.round((s.value / first) * 100)}%</span>
                </span>
              </span>
              <span className="block h-5 rounded-[6px] bg-[#edf4fd]">
                <span className="block h-full rounded-[6px]" style={{ width: `${Math.max(1.5, (s.value / first) * 100)}%`, background: series.blue }} />
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Weekday × hour heatmap on a one-hue sequential ramp, with hover and a scale legend. */
export function Heatmap({ rows, cols, values }: { rows: string[]; cols: string[]; values: number[][] }) {
  const flat = values.flat();
  const max = Math.max(...flat);
  const [hover, setHover] = useState<{ r: number; c: number } | null>(null);
  const shade = (v: number) => blueRamp[Math.min(blueRamp.length - 1, Math.floor((v / (max + 0.01)) * blueRamp.length))];
  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-x-auto">
        <table className="w-full min-w-[420px] border-separate border-spacing-[3px] text-[11px]" aria-label="Enquiries by day and hour">
          <thead>
            <tr>
              <th scope="col" className="w-9">
                <span className="sr-only">Day</span>
              </th>
              {cols.map((c) => (
                <th key={c} scope="col" className="font-normal text-muted">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r}>
                <th scope="row" className="pr-1 text-left font-normal text-muted">
                  {r}
                </th>
                {values[ri].map((v, ci) => (
                  <td
                    key={ci}
                    onMouseEnter={() => setHover({ r: ri, c: ci })}
                    onMouseLeave={() => setHover(null)}
                    className={`relative h-7 rounded-[4px] ${hover?.r === ri && hover?.c === ci ? "ring-2 ring-ink" : ""}`}
                    style={{ background: shade(v) }}
                  >
                    <span className="sr-only">
                      {r} {cols[ci]}: {v} enquiries
                    </span>
                    {hover?.r === ri && hover?.c === ci && (
                      <span role="tooltip" className="absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 rounded-[8px] bg-ink px-2 py-1 text-[12px] whitespace-nowrap text-white">
                        {r} {cols[ci]} · {v} enquiries
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2 text-[12px] text-muted">
        Fewer
        <span className="flex gap-[2px]">
          {blueRamp.map((c) => (
            <span key={c} className="h-2.5 w-5 rounded-[2px]" style={{ background: c }} />
          ))}
        </span>
        More
      </div>
    </div>
  );
}
