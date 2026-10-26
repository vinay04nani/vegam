// Vegam's motif set, drawn from kolam (muggu): looping lines around a grid of
// dots. Dots are customers; the loop is Vegam bringing them together.

/** Builds a four-petal rose curve (r = cos 2θ), rotated 45°, as an SVG path. */
function roseLoopPath(radius: number, cx: number, cy: number) {
  const steps = 160;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = radius * Math.cos(2 * t);
    const a = t + Math.PI / 4;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join(" L")}Z`;
}

export const MARK_PATH = roseLoopPath(40, 50, 50);
export const MARK_DOTS = [45, 135, 225, 315].map((deg) => {
  const a = (deg * Math.PI) / 180;
  return { x: 50 + 24 * Math.cos(a), y: 50 + 24 * Math.sin(a) };
});

/** The Vegam mark: one unbroken kolam loop around four dots. */
export function VegamMark({ size = 48, className = "", strokeWidth = 6 }: { size?: number; className?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <path d={MARK_PATH} stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      {MARK_DOTS.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={strokeWidth * 0.95} fill="currentColor" />
      ))}
    </svg>
  );
}

const CURL =
  "M26 47 C54 47 76 43 92 33 C106 24 104 9 92 9 C81 9 79 22 88 24 C93 25 96 21 94 17";

/** Hero ornament: two kolam curls with dots, gathering into the centre circle. */
export function KolamOrnament({
  color = "#FFFFFF",
  animated = true,
  width = 300,
}: {
  color?: string;
  animated?: boolean;
  width?: number;
}) {
  const half = (
    <>
      <path d={CURL} stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="44" cy="36" r="2.6" fill={color} opacity="0.7" />
      <circle cx="60" cy="31" r="3.4" fill={color} opacity="0.85" />
      <circle cx="75" cy="23" r="4" fill={color} />
      <circle cx="116" cy="30" r="2.8" fill={color} />
    </>
  );
  return (
    <svg width={width} height={width * (64 / 300)} viewBox="0 0 300 64" fill="none" aria-hidden="true" className="max-w-full">
      <g className={animated ? "animate-orn-l" : undefined}>{half}</g>
      <g className={animated ? "animate-orn-r" : undefined}>
        <g transform="translate(300 0) scale(-1 1)">{half}</g>
      </g>
      <circle cx="150" cy="30" r="16" stroke={color} strokeWidth="2.6" />
      <circle
        className={animated ? "animate-orn-c" : undefined}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
        cx="150"
        cy="30"
        r="7.5"
        fill={color}
      />
      <path d="M8 58H292" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Concentric ripples with two large side loops: the faint art behind tiles. */
export function RipplePattern({ className = "", opacity = 0.18 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" className={className}>
      <g stroke="#FFFFFF" strokeWidth="1" opacity={opacity}>
        {[34, 62, 92, 124, 158, 196, 238].map((r) => (
          <circle key={r} cx="200" cy="120" r={r} />
        ))}
      </g>
      <g stroke="#FFFFFF" strokeWidth="1.2" opacity={opacity * 0.8}>
        <circle cx="-30" cy="120" r="190" />
        <circle cx="430" cy="120" r="190" />
      </g>
    </svg>
  );
}

/** Interlocking circles on a dot grid, fading upward: the banner backdrop. */
export function CircleLattice({ className = "" }: { className?: string }) {
  const r = 300;
  const rows = [
    { y: 640, offset: 0 },
    { y: 780, offset: 150 },
  ];
  const circles = rows.flatMap((row) =>
    Array.from({ length: 9 }, (_, i) => ({ cx: -300 + row.offset + i * 300, cy: row.y })),
  );
  const dots = [];
  for (let y = 40; y < 600; y += 44) for (let x = 22; x < 1200; x += 44) dots.push({ x, y });
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="lattice-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="0.45" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>
        <mask id="lattice-mask">
          <rect width="1200" height="600" fill="url(#lattice-fade)" />
        </mask>
      </defs>
      <g mask="url(#lattice-mask)">
        <g fill="#FFFFFF" opacity="0.1">
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r="1.3" />
          ))}
        </g>
        <g stroke="#FFFFFF" strokeWidth="1.3" opacity="0.26">
          {circles.map((c, i) => (
            <circle key={i} cx={c.cx} cy={c.cy} r={r} />
          ))}
          <circle cx="600" cy="640" r="420" />
          <circle cx="600" cy="640" r="520" />
        </g>
      </g>
    </svg>
  );
}
