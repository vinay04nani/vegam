// A small pixel-art engine for the generated scenes. It follows the habits of
// hand-made pixel art: limited colour ramps, ordered (Bayer) dithering instead
// of random noise, smooth value noise for organic shapes, and a crafted
// finish where every block gets a soft highlight and a faint seam.

import { seededRandom } from "./random";

export type RGB = [number, number, number];

export const hex = (h: string): RGB => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((v) => (v + 0.5) / 16));

/** Ordered-dither threshold for a pixel, in [0, 1). */
export const bayer = (x: number, y: number) => {
  const ix = Math.round(x) || 0;
  const iy = Math.round(y) || 0;
  return BAYER[((iy % 4) + 4) % 4][((ix % 4) + 4) % 4];
};

const clamp01 = (t: number) => Math.max(0, Math.min(1, t));

/**
 * Picks a colour from a ramp at position t. Most of each band stays solid;
 * only a `soft` share of it, around the boundary, is dithered between shades.
 */
export function ramp(colors: readonly string[], t: number, x: number, y: number, soft = 0.45): RGB {
  const f = clamp01(t) * (colors.length - 1);
  const i = Math.floor(f);
  const frac = clamp01((f - i - 0.5) / soft + 0.5);
  const pick = frac > bayer(x, y) ? i + 1 : i;
  return hex(colors[Math.min(pick, colors.length - 1)]);
}

export const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

/**
 * A soft glow in a few stepped bands (not a dotted grid), dithered only at band
 * edges. "screen" adds light like a real light source; "mix" tints.
 */
export function glow(under: RGB, color: RGB, amount: number, x: number, y: number, levels = 4, mode: "mix" | "screen" = "mix"): RGB {
  const q = clamp01(amount) * levels;
  const base = Math.floor(q);
  const frac = clamp01((q - base - 0.5) / 0.3 + 0.5);
  const level = Math.min(levels, base + (frac > bayer(x, y) ? 1 : 0));
  const k = (level / levels) * 0.85;
  if (mode === "mix") return mix(under, color, k);
  return [0, 1, 2].map((i) => 255 - ((255 - under[i]) * (255 - color[i] * k)) / 255) as RGB;
}

/** Dithered blend: shows `over` on a share of pixels equal to `amount`. */
export const dither = (under: RGB, over: RGB, amount: number, x: number, y: number): RGB =>
  amount > bayer(x, y) ? over : under;

/** Smooth 2D value noise in [0, 1). */
export function noise(x: number, y: number, seed: number) {
  const hash = (ix: number, iy: number) => {
    let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(seed, 2246822519);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const top = hash(ix, iy) + (hash(ix + 1, iy) - hash(ix, iy)) * sx;
  const bottom = hash(ix, iy + 1) + (hash(ix + 1, iy + 1) - hash(ix, iy + 1)) * sx;
  return top + (bottom - top) * sy;
}

/** Fractal noise: several octaves of value noise, in [0, 1). */
export function fbm(x: number, y: number, seed: number, octaves = 4) {
  let sum = 0;
  let amp = 0.5;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += noise(x, y, seed + o * 101) * amp;
    norm += amp;
    x *= 2;
    y *= 2;
    amp *= 0.5;
  }
  return sum / norm;
}

/** A W×H grid of colours that renders to a PNG with crafted pixel blocks. */
export function pixelGrid(w: number, h: number, seed: number) {
  const rand = seededRandom(seed);
  const cells: RGB[] = new Array(w * h);
  const inside = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h;
  return {
    w,
    h,
    rand,
    set(x: number, y: number, c: RGB) {
      x = Math.round(x);
      y = Math.round(y);
      if (inside(x, y)) cells[y * w + x] = c;
    },
    get(x: number, y: number): RGB {
      x = Math.round(x);
      y = Math.round(y);
      return (inside(x, y) && cells[y * w + x]) || [0, 0, 0];
    },
    /** Renders each grid cell as a `block`-sized tile with a soft top-left light and a faint seam. */
    render(block = 6) {
      const canvas = document.createElement("canvas");
      canvas.width = w * block;
      canvas.height = h * block;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "";
      const img = ctx.createImageData(canvas.width, canvas.height);
      const d = img.data;
      for (let cy = 0; cy < h; cy++) {
        for (let cx = 0; cx < w; cx++) {
          const c = cells[cy * w + cx] ?? hex("#fbfbfd");
          // Gentle per-block variation from smooth noise, not random static.
          const tone = (noise(cx * 0.35, cy * 0.35, seed) - 0.5) * 8;
          for (let py = 0; py < block; py++) {
            for (let px = 0; px < block; px++) {
              let k = tone;
              if (px === block - 1 || py === block - 1) k -= 9; // seam
              else if (px === 0 || py === 0) k += 6; // highlight
              const i = ((cy * block + py) * canvas.width + cx * block + px) * 4;
              d[i] = Math.max(0, Math.min(255, c[0] + k));
              d[i + 1] = Math.max(0, Math.min(255, c[1] + k));
              d[i + 2] = Math.max(0, Math.min(255, c[2] + k));
              d[i + 3] = 255;
            }
          }
        }
      }
      ctx.putImageData(img, 0, 0);
      return canvas.toDataURL("image/png");
    },
  };
}

export type PixelGrid = ReturnType<typeof pixelGrid>;
