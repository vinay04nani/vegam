import { MARK_DOTS, MARK_PATH } from "@/components/ui/Kolam";

/** The Vegam mark as a carved bronze object: stacked depth, a grooved face and a lit edge. */
export function CarvedMark({ size = 220 }: { size?: number }) {
  const depth = [6, 5, 4, 3, 2, 1];
  const shape = (stroke: string, width: number, opacity = 1, fill?: string) => (
    <>
      <path d={MARK_PATH} fill="none" stroke={stroke} strokeWidth={width} strokeLinejoin="round" opacity={opacity} />
      {MARK_DOTS.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={width * 0.62} fill={fill ?? stroke} opacity={opacity} />
      ))}
    </>
  );
  return (
    <svg width={size} height={size} viewBox="-8 -8 116 116" aria-hidden="true">
      <defs>
        <linearGradient id="bronze-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE4BC" />
          <stop offset="0.3" stopColor="#E9A462" />
          <stop offset="0.65" stopColor="#A9622D" />
          <stop offset="1" stopColor="#5E3418" />
        </linearGradient>
        <linearGradient id="bronze-side" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6A3A1A" />
          <stop offset="1" stopColor="#24130A" />
        </linearGradient>
      </defs>
      {depth.map((k) => (
        <g key={k} transform={`translate(${k * 0.55} ${k * 0.75})`}>
          {shape("url(#bronze-side)", 11)}
        </g>
      ))}
      {shape("url(#bronze-face)", 11)}
      {shape("#3E2110", 3.4, 0.55)}
      {shape("#FFF1DC", 0.9, 0.7, "none")}
    </svg>
  );
}
