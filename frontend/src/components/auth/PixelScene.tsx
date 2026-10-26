"use client";

import { useEffect, useState } from "react";
import { gradient, hex, mix, type RGB, type Stops } from "@/lib/pixel";
import { seededRandom } from "@/lib/random";

// A pixel-art coast at sunset: dithered sky, saffron sun, sea with fishing
// boats, green hills, and a kolam drawn on the sand. Drawn once on a tiny
// canvas and scaled up with crisp pixels.

// K scales the scene: higher means finer pixels.
const K = 1.6;
const W = Math.round(96 * K);
const H = Math.round(112 * K);
const HORIZON = Math.round(64 * K);
const SHORE = Math.round(88 * K);

const SKY: Stops = [
  [0, "#5f78e2"],
  [0.4, "#9fb0f4"],
  [0.72, "#e9c3c0"],
  [0.9, "#f6b07e"],
  [1, "#f59a5c"],
];
const SEA: Stops = [
  [0, "#8a9cf0"],
  [0.35, "#5672de"],
  [1, "#2c47c4"],
];

function drawScene(): string {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  const img = ctx.createImageData(W, H);
  const rand = seededRandom(20261026);
  const grid: RGB[] = new Array(W * H);
  const set = (x: number, y: number, c: RGB) => {
    if (x >= 0 && y >= 0 && x < W && y < H) grid[y * W + x] = c;
  };
  const get = (x: number, y: number) => grid[y * W + x];

  // Sky, quantised into dithered bands.
  for (let y = 0; y < HORIZON; y++) {
    for (let x = 0; x < W; x++) {
      const t = Math.min(1, Math.max(0, y / HORIZON + (rand() - 0.5) * 0.07));
      set(x, y, gradient(SKY, Math.round(t * 14) / 14));
    }
  }

  // Sun, setting on the horizon, with a soft glow and retro gaps.
  const sun = { x: Math.round(W * 0.86), y: HORIZON - Math.round(6 * K), r: Math.round(10 * K) };
  for (let y = 0; y < HORIZON; y++) {
    for (let x = 0; x < W; x++) {
      const d = Math.hypot(x - sun.x, y - sun.y);
      if (d <= sun.r) {
        const gap = y > sun.y - 2 && (y - sun.y) % 3 === 1;
        if (gap) continue;
        const t = (y - (sun.y - sun.r)) / (sun.r * 2);
        set(x, y, gradient([[0, "#ffd66b"], [0.5, "#ffb020"], [1, "#f2762e"]], t));
      } else if (d <= sun.r + 6 && rand() < 0.7) {
        set(x, y, mix(get(x, y), hex("#ffd9a8"), 0.4 * (1 - (d - sun.r) / 6)));
      }
    }
  }

  // Clouds.
  const cloud = (cx: number, cy: number, w: number) => {
    const blobs = [
      { x: cx, y: cy, rx: w / 2, ry: 2.6 * K },
      { x: cx - w / 5, y: cy - 2 * K, rx: w / 4, ry: 2.4 * K },
      { x: cx + w / 6, y: cy - 3 * K, rx: w / 4.5, ry: 2.8 * K },
    ];
    for (let y = Math.floor(cy - 7 * K); y <= cy + 3 * K; y++) {
      for (let x = Math.floor(cx - w / 2 - 1); x <= cx + w / 2 + 1; x++) {
        const inside = blobs.some((b) => ((x - b.x) / b.rx) ** 2 + ((y - b.y) / b.ry) ** 2 <= 1);
        if (!inside) continue;
        const below = blobs.some((b) => ((x - b.x) / b.rx) ** 2 + ((y + 1 - b.y) / b.ry) ** 2 <= 1);
        set(x, y, below ? hex("#fdfbf8") : hex("#dcdcf3"));
      }
    }
  };
  cloud(18 * K, 14 * K, 18 * K);
  cloud(78 * K, 12 * K, 15 * K);
  cloud(52 * K, 30 * K, 10 * K);

  // Birds.
  for (const [bx, by] of [
    [Math.round(30 * K), Math.round(22 * K)],
    [Math.round(35 * K), Math.round(19 * K)],
    [Math.round(66 * K), Math.round(36 * K)],
  ]) {
    set(bx - 1, by - 1, hex("#3a3f72"));
    set(bx, by, hex("#3a3f72"));
    set(bx + 1, by - 1, hex("#3a3f72"));
  }

  // Sea with wave streaks and the sun's reflection.
  for (let y = HORIZON; y < SHORE + 3; y++) {
    const t = (y - HORIZON) / (SHORE - HORIZON);
    for (let x = 0; x < W; x++) {
      let c = gradient(SEA, Math.round(Math.min(1, t + (rand() - 0.5) * 0.08) * 8) / 8);
      if ((x * 3 + y * 7) % 23 === 0 || rand() < 0.035) c = mix(c, hex("#dfe6ff"), 0.6);
      const spread = (7 - t * 2.5) * K;
      if (Math.abs(x - sun.x) < spread && rand() < 0.55 - t * 0.35 && (y % 2 === 0 || rand() < 0.3)) {
        c = rand() < 0.5 ? hex("#ffc861") : hex("#f59a5c");
      }
      set(x, y, c);
    }
  }

  // Hills on the left, in front of the sea.
  const hillTop = (x: number) =>
    HORIZON + 2 - 24 * K * Math.exp(-(((x - 10 * K) / (13 * K)) ** 2)) - 10 * K * Math.exp(-(((x - 29 * K) / (8 * K)) ** 2));
  for (let x = 0; x < 44 * K; x++) {
    const top = Math.round(hillTop(x));
    for (let y = top; y < HORIZON + 3; y++) {
      const depth = (y - top) / (20 * K);
      let c = gradient([[0, "#7cc46a"], [0.4, "#4f9e5c"], [1, "#2f7448"]], Math.min(1, depth + (rand() - 0.5) * 0.15));
      if (rand() < 0.08) c = mix(c, hex("#a6dd7a"), 0.5);
      set(x, y, c);
    }
  }
  // A small white shrine on the hilltop.
  const shrine = { x: Math.round(10 * K), y: Math.round(hillTop(10 * K)) };
  for (let y = shrine.y - 6; y < shrine.y + 1; y++) for (let x = shrine.x - 3; x <= shrine.x + 3; x++) set(x, y, hex("#fbf6ec"));
  for (let x = shrine.x - 2; x <= shrine.x + 2; x++) set(x, shrine.y - 7, hex("#fbf6ec"));
  for (let x = shrine.x - 1; x <= shrine.x + 1; x++) set(x, shrine.y - 8, hex("#fbf6ec"));
  set(shrine.x, shrine.y - 9, hex("#fbf6ec"));
  set(shrine.x, shrine.y - 10, hex("#ee7a2e"));
  set(shrine.x + 1, shrine.y - 10, hex("#ee7a2e"));
  for (let y = shrine.y - 3; y < shrine.y + 1; y++) set(shrine.x, y, hex("#b9a98f"));

  // Fishing boats.
  const boat = (bx: number, by: number, sail: string) => {
    for (let x = -4; x <= 4; x++) set(bx + x, by, hex("#6b3f24"));
    for (let x = -3; x <= 3; x++) set(bx + x, by + 1, hex("#4d2c19"));
    for (let y = 1; y <= 6; y++) set(bx, by - y, hex("#3d2414"));
    for (let y = 1; y <= 5; y++) for (let x = 1; x <= 6 - y; x++) set(bx + x, by - y, hex(sail));
  };
  boat(Math.round(W * 0.1), HORIZON + Math.round(14 * K), "#fdf3e1");
  boat(Math.round(W * 0.88), HORIZON + Math.round(18 * K), "#ee7a2e");

  // Shore foam and sand.
  for (let x = 0; x < W; x++) {
    const top = SHORE + Math.round(1.5 * K * Math.sin(x / (6 * K)));
    set(x, top - 1, rand() < 0.75 ? hex("#f4f6ff") : hex("#c9d4fb"));
    for (let y = top; y < H; y++) {
      const wet = y - top < 3 * K;
      let c = wet ? hex("#e3c391") : gradient([[0, "#f3dba8"], [1, "#eccb8a"]], (y - top) / (H - top));
      if (rand() < 0.1) c = mix(c, hex("#fff3d6"), 0.5);
      if (rand() < 0.06) c = mix(c, hex("#cfa86a"), 0.5);
      set(x, y, c);
    }
  }

  // A kolam on the sand: a chain of loops around a row of dots.
  const kolamY = Math.round(H - 10 * K);
  const step = Math.round(8 * K);
  const dots = [-2, -1, 0, 1, 2].map((i) => Math.round(W / 2 + i * step));
  const chalk = hex("#fffdf6");
  for (const dx of dots) {
    for (let a = 0; a < 64; a++) {
      const t = (a / 64) * Math.PI * 2;
      set(Math.round(dx + 4.4 * K * Math.cos(t)), Math.round(kolamY + 4.4 * K * Math.sin(t)), chalk);
    }
    set(dx, kolamY, hex("#ee7a2e"));
    set(dx + 1, kolamY, hex("#ee7a2e"));
    set(dx, kolamY + 1, hex("#ee7a2e"));
    set(dx + 1, kolamY + 1, hex("#ee7a2e"));
  }

  // Per-pixel jitter gives each block its own texture.
  for (let i = 0; i < W * H; i++) {
    const c = grid[i] ?? hex("#fbfbfd");
    const j = (rand() - 0.5) * 14;
    img.data[i * 4] = Math.max(0, Math.min(255, c[0] + j));
    img.data[i * 4 + 1] = Math.max(0, Math.min(255, c[1] + j));
    img.data[i * 4 + 2] = Math.max(0, Math.min(255, c[2] + j));
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL("image/png");
}

export function PixelScene({ className = "" }: { className?: string }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    setSrc(drawScene());
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`bg-[linear-gradient(180deg,#5f78e2_0%,#9fb0f4_35%,#f6b07e_57%,#5672de_58%,#2c47c4_78%,#f3dba8_79%)] ${className}`}
      style={
        src
          ? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center bottom", imageRendering: "pixelated" }
          : undefined
      }
    />
  );
}
