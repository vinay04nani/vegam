import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { RipplePattern, VegamMark } from "./Kolam";

export type Palette = "periwinkle" | "saffron" | "rose" | "leaf" | "indigo" | "mist";

const palettes: Record<Palette, string> = {
  periwinkle:
    "radial-gradient(60% 70% at 50% 35%, #E4DEFA 0%, rgb(228 222 250 / 0) 70%), linear-gradient(160deg, #C7B6EE 0%, #D6D2F6 45%, #A3B1F6 100%)",
  saffron:
    "radial-gradient(60% 70% at 50% 30%, #EC6A35 0%, rgb(236 106 53 / 0) 70%), linear-gradient(160deg, #F08A3C 0%, #E8743A 50%, #F2A363 100%)",
  rose:
    "radial-gradient(60% 70% at 50% 30%, #F27A86 0%, rgb(242 122 134 / 0) 70%), linear-gradient(160deg, #F4A0AA 0%, #EE8592 50%, #F6BFAE 100%)",
  leaf:
    "radial-gradient(60% 60% at 50% 15%, #86C35A 0%, rgb(134 195 90 / 0) 70%), linear-gradient(170deg, #9BCB78 0%, #AED7A0 55%, #B7D3E6 100%)",
  indigo:
    "radial-gradient(60% 60% at 50% 20%, #2A26B8 0%, rgb(42 38 184 / 0) 70%), linear-gradient(180deg, #2E2AC6 0%, #6A6FE0 58%, #F0C2A6 100%)",
  mist: "radial-gradient(60% 60% at 50% 40%, #FFFFFF 0%, rgb(255 255 255 / 0) 70%), linear-gradient(180deg, #F4F5FE 0%, #DCE0FB 58%, #B5BFF6 100%)",
};

/** Gradient tile with film grain and faint ripple art, the base for icon cards and covers. */
export function ArtTile({
  palette,
  className = "",
  style,
  children,
}: {
  palette: Palette;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`} style={{ background: palettes[palette], ...style }}>
      <RipplePattern className="absolute inset-0 -z-10 h-full w-full" opacity={palette === "mist" ? 0.55 : 0.2} />
      <div className="bg-grain absolute inset-0 -z-10 opacity-70" />
      <div className="flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

/** A milky-glass glyph that sits on an ArtTile. */
export function FrostedIcon({ name, size = 60 }: { name: IconName; size?: number }) {
  return (
    <span className="frosted transition duration-500 group-hover:scale-110">
      <Icon name={name} size={size} strokeWidth={2.3} />
    </span>
  );
}

export function FrostedMark({ size = 72 }: { size?: number }) {
  return (
    <span className="frosted transition duration-500 group-hover:scale-110">
      <VegamMark size={size} />
    </span>
  );
}
