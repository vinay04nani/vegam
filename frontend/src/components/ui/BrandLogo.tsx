import { brands, type BrandSlug } from "@/content/brands";

type Props = {
  /** A Simple Icons brand, or a letter tile for services without one (e.g. Microsoft, Tally). */
  brand: BrandSlug | { letter: string; color: string; title: string };
  size?: number;
  /** Draw the mark alone, without the white tile. */
  bare?: boolean;
  className?: string;
};

/** A third-party brand mark on a white rounded tile, in the brand's own colour. */
export function BrandLogo({ brand, size = 40, bare = false, className = "" }: Props) {
  const tile = `inline-flex flex-none items-center justify-center ${bare ? "" : "border border-line bg-white shadow-[0_1px_2px_rgb(30_31_43/0.05)]"} ${className}`;
  if (typeof brand !== "string") {
    return (
      <span role="img" aria-label={brand.title} title={brand.title} className={tile} style={{ width: size, height: size, borderRadius: size * 0.28 }}>
        <span className="font-bold text-white" style={{ background: brand.color, width: size * 0.6, height: size * 0.6, borderRadius: size * 0.16, fontSize: size * (brand.letter.length > 2 ? 0.2 : brand.letter.length === 2 ? 0.26 : 0.34), display: "flex", alignItems: "center", justifyContent: "center" }}>
          {brand.letter}
        </span>
      </span>
    );
  }
  const b = brands[brand];
  const inner = bare ? size : size * 0.56;
  return (
    <span role="img" aria-label={b.title} title={b.title} className={tile} style={{ width: size, height: size, borderRadius: size * 0.28 }}>
      <svg width={inner} height={inner} viewBox="0 0 24 24" aria-hidden="true">
        <path d={b.path} fill={b.hex} />
      </svg>
    </span>
  );
}
