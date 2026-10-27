"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Small SVG/HTML charts for the Reports page, following the data-viz method:
// one axis, thin marks, recessive grid, legends for 2+ series, a hover
// tooltip on every chart, and categorical colours in a fixed order (palette
// validated for colour-blind separation).

export const series = { blue: "#2a78d6", orange: "#eb6834", aqua: "#1baf7a" };
/** Blue sequential ramp, light → dark, for magnitude (heatmap). */
export const blueRamp = ["#edf4fd", "#cde2fb", "#9ec5f4", "#6da7ec", "#3987e5", "#256abf", "#184f95", "#104281"];

const ink = { primary: "#1E1F2B", secondary: "#5D5F6E", muted: "#8A8C99", grid: "#ECEDF2" };

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

/** A floating tooltip. */
function Tip({ x, y, children, width }: { x: number; y: number; children: ReactNode; width: number }) {
  const left = Math.min(Math.max(x, 70), width - 70);
  return (
    <div role="tooltip" className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-[8px] bg-ink px-2.5 py-1.5 text-[12.5px] whitespace-nowrap text-white shadow-[0_8px_20px_rgb(30_31_43/0.25)]" style={{ left, top: y - 8 }}>
      {children}
    </div>
  );
}

/** A tiny trend line for a stat tile (no axes; hover not needed). */
export function Sparkline({ values, color = series.blue }: { values: number[]; color?: string }) {
  const w = 96;
  const h = 28;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const pts = values.map((v, i) => `${(i / Math.max(1, values.length - 1)) * w},${h - 2 - ((v - min) / Math.max(1, max - min)) * (h - 4)}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" className="flex-none">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

type LineSeries = { id: string; label: string; color: string; values: number[] };

/** Line chart over time with a crosshair tooltip. One shared axis. */
export function LineChart({ labels, data, height = 240, format = (v: number) => String(v) }: { labels: string[]; data: LineSeries[]; height?: number; format?: (v: number) => string }) {
  const [ref, width] = useWidth<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const pad = { l: 34, r: 12, t: 12, b: 26 };
  const iw = Math.max(0, width - pad.l - pad.r);
  const ih = height - pad.t - pad.b;
  const n = labels.length;
  const maxV = Math.max(...data.flatMap((s) => s.values));
  const step = maxV > 40 ? 20 : maxV > 20 ? 10 : 5;
  const top = Math.ceil(maxV / step) * step;
  const x = (i: number) => pad.l + (n === 1 ? iw / 2 : (i / (n - 1)) * iw);
  const y = (v: number) => pad.t + ih - (v / top) * ih;
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);
  const every = Math.ceil(n / Math.max(2, Math.floor(iw / 70)));

  return (
    <div ref={ref} className="relative w-full">
      {width > 0 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label={`${data.map((s) => s.label).join(" and ")} over ${n} days`}
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const i = Math.round(((e.clientX - r.left - pad.l) / Math.max(1, iw)) * (n - 1));
            setHover(Math.max(0, Math.min(n - 1, i)));
          }}
          onPointerLeave={() => setHover(null)}
          className="block touch-pan-y"
        >
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} stroke={ink.grid} strokeWidth="1" />
              <text x={pad.l - 8} y={y(t)} dy="0.32em" textAnchor="end" fontSize="11" fill={ink.muted}>
                {t}
              </text>
            </g>
          ))}
          {labels.map((l, i) =>
            i % every === 0 || i === n - 1 ? (
              <text key={i} x={x(i)} y={height - 6} textAnchor={i === 0 ? "start" : i === n - 1 ? "end" : "middle"} fontSize="11" fill={ink.muted}>
                {l}
              </text>
            ) : null,
          )}
          {data.map((s, si) => (
            <g key={s.id}>
              {si === 0 && <path d={`M${x(0)},${y(0)} ${s.values.map((v, i) => `L${x(i)},${y(v)}`).join(" ")} L${x(n - 1)},${y(0)} Z`} fill={s.color} opacity="0.08" />}
              <polyline points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")} fill="none" stroke={s.color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            </g>
          ))}
          {hover !== null && (
            <g>
              <line x1={x(hover)} x2={x(hover)} y1={pad.t} y2={pad.t + ih} stroke={ink.secondary} strokeWidth="1" strokeDasharray="3 3" />
              {data.map((s) => (
                <circle key={s.id} cx={x(hover)} cy={y(s.values[hover])} r="4.5" fill={s.color} stroke="#fff" strokeWidth="2" />
              ))}
            </g>
          )}
        </svg>
      )}
      {hover !== null && width > 0 && (
        <Tip x={x(hover)} y={pad.t + 4} width={width}>
          <span className="block font-semibold">{labels[hover]}</span>
          {data.map((s) => (
            <span key={s.id} className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
              {s.label}: {format(s.values[hover])}
            </span>
          ))}
        </Tip>
      )}
    </div>
  );
}

/** Legend for charts with 2+ series. */
export function Legend({ items }: { items: { label: string; color: string; value?: string }[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-[13px] text-ink-soft">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-[3px]" style={{ background: it.color }} />
          {it.label}
          {it.value && <span className="font-semibold text-ink">{it.value}</span>}
        </li>
      ))}
    </ul>
  );
}

/** Horizontal bars for one series (single colour), with value labels and hover. */
export function BarList({ rows, color = series.blue, format = (v: number) => String(v), note }: { rows: { label: string; value: number }[]; color?: string; format?: (v: number) => string; note?: (row: { label: string; value: number }, i: number) => string }) {
  const max = Math.max(...rows.map((r) => r.value));
  const [hover, setHover] = useState<number | null>(null);
  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {rows.map((r, i) => (
        <li key={r.label} className="grid grid-cols-[minmax(0,172px)_minmax(0,1fr)_auto] items-center gap-3 text-[13.5px]" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
          <span className="truncate text-ink-soft">{r.label}</span>
          <span className="relative h-5">
            <span className="absolute inset-y-0 left-0 rounded-r-[4px] transition-opacity" style={{ width: `${Math.max(1.5, (r.value / max) * 100)}%`, background: color, opacity: hover === null || hover === i ? 1 : 0.45 }} />
            {hover === i && note && (
              <span role="tooltip" className="absolute -top-8 left-0 z-10 rounded-[8px] bg-ink px-2 py-1 text-[12px] whitespace-nowrap text-white">
                {note(r, i)}
              </span>
            )}
          </span>
          <span className="w-12 text-right font-semibold text-ink tabular-nums">{format(r.value)}</span>
        </li>
      ))}
    </ul>
  );
}

/** One stacked bar for a part-to-whole split (≤ 3 parts), 2px gaps, legend with values. */
export function SplitBar({ parts }: { parts: { label: string; share: number; color: string }[] }) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex h-7 gap-[2px]" role="img" aria-label={parts.map((p) => `${p.label} ${Math.round(p.share * 100)}%`).join(", ")}>
        {parts.map((p, i) => (
          <span
            key={p.label}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className={`h-full transition-opacity ${i === 0 ? "rounded-l-[6px]" : ""} ${i === parts.length - 1 ? "rounded-r-[6px]" : ""}`}
            style={{ width: `${p.share * 100}%`, background: p.color, opacity: hover === null || hover === i ? 1 : 0.45 }}
          />
        ))}
      </div>
      <Legend items={parts.map((p) => ({ label: p.label, color: p.color, value: `${Math.round(p.share * 100)}%` }))} />
    </div>
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
