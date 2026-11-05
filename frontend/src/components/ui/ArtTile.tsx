import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export type Palette = "periwinkle" | "saffron" | "indigo" | "mist";

/** One indigo field. Palette is kept so older call sites still compile. */
export function ArtTile({
  className = "",
  style,
  children,
}: {
  palette?: Palette;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-brand-subtle text-brand ${className}`} style={style}>
      <div className="flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

export function FrostedIcon({ name, size = 48 }: { name: IconName; size?: number }) {
  return <Icon name={name} size={size} strokeWidth={1.75} className="text-brand" />;
}
