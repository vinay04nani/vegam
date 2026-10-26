// Helpers for the generated pixel-art scenes: colour maths and a small
// pixel grid that renders to a PNG data URL.

import { seededRandom } from "./random";

export type RGB = [number, number, number];
export type Stops = [number, string][];

export const hex = (h: string): RGB => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

export const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

export function gradient(stops: Stops, t: number): RGB {
  for (let i = 1; i < stops.length; i++) {
    const [p1, c1] = stops[i];
    const [p0, c0] = stops[i - 1];
    if (t <= p1) return mix(hex(c0), hex(c1), (t - p0) / (p1 - p0));
  }
  return hex(stops[stops.length - 1][1]);
}

/** A W×H pixel grid with a seeded random source. `render` adds per-pixel texture and returns a PNG. */
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
      return cells[Math.round(y) * w + Math.round(x)] ?? [0, 0, 0];
    },
    render(jitter = 14) {
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "";
      const img = ctx.createImageData(w, h);
      for (let i = 0; i < w * h; i++) {
        const c = cells[i] ?? hex("#fbfbfd");
        const j = (rand() - 0.5) * jitter;
        img.data[i * 4] = Math.max(0, Math.min(255, c[0] + j));
        img.data[i * 4 + 1] = Math.max(0, Math.min(255, c[1] + j));
        img.data[i * 4 + 2] = Math.max(0, Math.min(255, c[2] + j));
        img.data[i * 4 + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
      return canvas.toDataURL("image/png");
    },
  };
}

export type PixelGrid = ReturnType<typeof pixelGrid>;
