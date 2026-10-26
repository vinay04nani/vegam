import type { ComponentProps } from "react";

type Variant = "dark" | "light";
type Size = "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  dark: "bg-button text-white hover:bg-ink hover:shadow-[0_10px_30px_rgb(30_31_43/0.25)]",
  light: "bg-white text-ink shadow-[0_1px_2px_rgb(30_31_43/0.08)] hover:shadow-[0_10px_30px_rgb(30_31_43/0.12)]",
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
