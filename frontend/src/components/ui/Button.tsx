import type { ComponentProps } from "react";

type Variant = "dark" | "light" | "glass";
type Size = "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  dark: "border border-transparent bg-brand-fill text-white shadow-1 hover:bg-brand-hover",
  light: "border border-border-strong bg-surface text-text shadow-1 hover:bg-surface-muted",
  glass: "border border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25",
};

const sizes: Record<Size, string> = {
  md: "min-h-9 px-4 text-body",
  lg: "min-h-10 px-5 text-body",
  xl: "min-h-12 px-6 text-body-lg",
};

type Props = ComponentProps<"a"> & { variant?: Variant; size?: Size; block?: boolean };

export function ButtonLink({ variant = "dark", size = "lg", block, className = "", children, ...rest }: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold no-underline transition duration-150 ${variants[variant]} ${sizes[size]} ${block ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
