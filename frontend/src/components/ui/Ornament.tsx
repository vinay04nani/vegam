/** The "pulse": customer dots gathering into one circle. */
export function PulseOrnament({ color = "#FFFFFF", animated = true }: { color?: string; animated?: boolean }) {
  const a = (cls: string) => (animated ? cls : undefined);
  return (
    <svg width="280" height="56" viewBox="0 0 280 56" fill="none" aria-hidden="true" className="max-w-full">
      <g className={a("animate-orn-l")}>
        <circle cx="40" cy="26" r="3" fill={color} opacity="0.55" />
        <circle cx="62" cy="26" r="4.5" fill={color} opacity="0.75" />
        <circle cx="88" cy="26" r="6" fill={color} opacity="0.9" />
        <path d="M14 26h18" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      </g>
      <g className={a("animate-orn-r")}>
        <circle cx="240" cy="26" r="3" fill={color} opacity="0.55" />
        <circle cx="218" cy="26" r="4.5" fill={color} opacity="0.75" />
        <circle cx="192" cy="26" r="6" fill={color} opacity="0.9" />
        <path d="M248 26h18" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      </g>
      <circle cx="140" cy="26" r="20" stroke={color} strokeWidth="2.5" />
      <circle
        className={a("animate-orn-c")}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
        cx="140"
        cy="26"
        r="11"
        fill={color}
      />
      <path d="M4 53h272" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SmallOrnament() {
  return (
    <svg width="180" height="30" viewBox="0 0 180 30" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="3" fill="#C4C8DA" />
      <circle cx="58" cy="15" r="4.5" fill="#C4C8DA" />
      <circle cx="122" cy="15" r="4.5" fill="#C4C8DA" />
      <circle cx="140" cy="15" r="3" fill="#C4C8DA" />
      <circle cx="90" cy="15" r="11" stroke="#C4C8DA" strokeWidth="2" />
      <circle cx="90" cy="15" r="5.5" fill="#C4C8DA" />
      <path d="M2 29h176" stroke="#DADDEA" strokeWidth="1.5" />
    </svg>
  );
}
