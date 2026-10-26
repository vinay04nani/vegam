import type { ComponentProps } from "react";

type Variant = "dark" | "light" | "glass";
type Size = "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  dark: "border border-white/10 bg-[linear-gradient(180deg,#3A3C58_0%,#22233A_55%,#1C1D2E_100%)] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.16),0_1px_2px_rgb(15_16_30/0.3)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_12px_30px_rgb(30_31_43/0.28)]",
  light: "border border-line-strong bg-white text-ink shadow-[inset_0_-1px_0_rgb(30_31_43/0.04),0_1px_2px_rgb(30_31_43/0.06)] hover:shadow-[0_12px_30px_rgb(30_31_43/0.12)]",
  glass: "border border-white/30 bg-white/12 text-white backdrop-blur-md shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 text-base",
  lg: "min-h-14 px-7 text-lg",
  xl: "min-h-15 px-8 text-[19px]",
};

type Props = ComponentProps<"a"> & { variant?: Variant; size?: Size; block?: boolean };

export function ButtonLink({ variant = "dark", size = "lg", block, className = "", children, ...rest }: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold no-underline transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${block ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
