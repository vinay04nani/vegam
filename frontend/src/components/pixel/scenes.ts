// Generated pixel-art scenes. Each uses limited colour ramps, ordered
// dithering and layered noise, then renders with crafted pixel blocks.

import { bayer, dither, fbm, glow, hex, noise, pixelGrid, ramp, type PixelGrid, type RGB } from "@/lib/pixel";

export type SceneName = "coast" | "sunrise" | "lighthouse" | "kites";

// ---------- Palettes ----------

const SUN = ["#fff4cc", "#ffe28f", "#ffc65f", "#fba54d", "#f2833d"];
const SEA_DAY = ["#a6b4f1", "#8a9de8", "#7187dc", "#5a70cd", "#4659b8", "#3648a0", "#2a3b88"];
const SAND = ["#f8e6c0", "#f2d8a9", "#eacb94", "#dfb980"];
const GREEN = ["#9fd19c", "#7fbd8a", "#64a77b", "#4f8f6c", "#3d775d", "#2f604f"];
const LAVENDER_FAR = ["#b4b2ea", "#a3a3e2", "#9395d8"];
const TREE = ["#79b787", "#5c9e74", "#457f60", "#33664f"];

// ---------- Shared painters ----------

function sky(g: PixelGrid, colors: readonly string[], bottom: number) {
  for (let y = 0; y < bottom; y++) for (let x = 0; x < g.w; x++) g.set(x, y, ramp(colors, y / bottom, x, y, 0.28));
}

function sun(g: PixelGrid, cx: number, cy: number, r: number, halo: string, haloR: number, clipY = Infinity) {
  for (let y = Math.floor(cy - r - haloR); y <= cy + r + haloR; y++) {
    if (y >= clipY) continue;
    for (let x = Math.floor(cx - r - haloR); x <= cx + r + haloR; x++) {
      const d = Math.hypot(x - cx, y - cy);
      if (d <= r) {
        // Lit from the top-left: lighter crescent, warmer lower half.
        const t = (y - (cy - r)) / (2 * r) * 0.85 + Math.max(0, (x - cx) / r) * 0.15;
        g.set(x, y, ramp(SUN, t, x, y));
      } else if (d <= r + haloR) {
        const a = Math.pow(1 - (d - r) / haloR, 1.5);
        g.set(x, y, glow(g.get(x, y), hex(halo), a, x, y));
      }
    }
  }
}

/** A cumulus cloud: a union of puffs, shaded top-to-bottom (or bottom-up at dawn). */
function cloud(g: PixelGrid, cx: number, cy: number, w: number, h: number, shades: readonly string[], fromBelow = false) {
  const puffs = [
    { x: cx, y: cy, r: h * 0.55 },
    { x: cx - w * 0.28, y: cy + h * 0.12, r: h * 0.42 },
    { x: cx + w * 0.26, y: cy + h * 0.1, r: h * 0.46 },
    { x: cx - w * 0.1, y: cy - h * 0.22, r: h * 0.48 },
    { x: cx + w * 0.12, y: cy - h * 0.12, r: h * 0.4 },
    { x: cx - w * 0.42, y: cy + h * 0.25, r: h * 0.28 },
    { x: cx + w * 0.42, y: cy + h * 0.25, r: h * 0.3 },
  ];
  const base = cy + h * 0.38;
  const top = cy - h * 0.75;
  for (let y = Math.floor(top); y <= base; y++) {
    for (let x = Math.floor(cx - w * 0.75); x <= cx + w * 0.75; x++) {
      const inside = puffs.some((p) => Math.hypot(x - p.x, (y - p.y) * 1.1) <= p.r);
      if (!inside) continue;
      let t = (y - top) / (base - top);
      if (fromBelow) t = 1 - t;
      g.set(x, y, ramp(shades, t * 0.9 + noise(x * 0.3, y * 0.3, 9) * 0.1, x, y));
    }
  }
}

/** A thin cloud streak with dithered ends. */
function streak(g: PixelGrid, cx: number, y: number, len: number, color: string, under?: string) {
  for (let x = Math.floor(cx - len / 2); x <= cx + len / 2; x++) {
    const edge = 1 - Math.abs(x - cx) / (len / 2);
    g.set(x, y, dither(g.get(x, y), hex(color), Math.min(1, edge * 2.2), x, y));
    if (under && Math.abs(x - cx) < len * 0.3) g.set(x, y + 1, dither(g.get(x, y + 1), hex(under), edge * 1.6, x, y + 1));
  }
}

/** A ridge whose top follows fractal noise, filled with a ramp by depth and rim-lit on its top edge. */
function ridge(
  g: PixelGrid,
  opts: { base: number; amp: number; scale: number; seed: number; colors: readonly string[]; depth: number; rim?: string; from?: number; to?: number; envelope?: (x: number) => number },
) {
  const { base, amp, scale, seed, colors, depth, rim, from = 0, to = g.w, envelope = () => 1 } = opts;
  const top = (x: number) => base - amp * envelope(x) * fbm(x / scale, 0.5, seed, 4);
  for (let x = from; x < to; x++) {
    const t0 = Math.round(top(x));
    for (let y = t0; y < g.h; y++) {
      const shade = (y - t0) / depth + (fbm(x / 9, y / 9, seed + 7, 3) - 0.5) * 0.25;
      g.set(x, y, ramp(colors, shade, x, y));
    }
    if (rim && top(x) < base - 0.5) g.set(x, t0, hex(rim));
  }
  return top;
}

/** Water: a ramp by depth with horizontal light streaks and an optional glowing reflection column. */
function water(
  g: PixelGrid,
  opts: { top: number; bottom: number; colors: readonly string[]; streak: string; seed: number; glowX?: number; glow?: readonly string[]; glowWidth?: number },
) {
  const { top, bottom, colors, seed, glowX, glow, glowWidth = 6 } = opts;
  for (let y = top; y < bottom; y++) {
    const t = (y - top) / (bottom - top);
    for (let x = 0; x < g.w; x++) {
      let c = ramp(colors, t, x, y);
      // Streaks: stretched noise so light lies in horizontal lines.
      const n = noise(x / 9, y * 1.7, seed);
      if (n > 0.8 - t * 0.12) c = hex(opts.streak);
      if (glowX !== undefined && glow) {
        const half = glowWidth * (0.6 + t * 1.4);
        const dx = Math.abs(x - glowX) / half;
        const s = noise(x / 3, y * 2.3, seed + 3);
        if (dx < 1 && s > 0.35 + dx * 0.45) c = ramp(glow, dx * 0.7 + t * 0.4, x, y);
      }
      g.set(x, y, c);
    }
  }
}

function birds(g: PixelGrid, points: [number, number][], color: string) {
  for (const [x, y] of points) {
    g.set(x - 2, y - 1, hex(color));
    g.set(x - 1, y, hex(color));
    g.set(x, y, hex(color));
    g.set(x + 1, y, hex(color));
    g.set(x + 2, y - 1, hex(color));
  }
}

function tree(g: PixelGrid, x: number, base: number, size: number) {
  for (let y = 0; y < Math.max(2, size * 0.45); y++) g.set(x, base - y, hex("#5b3d2b"));
  const cy = base - size * 0.9;
  const r = size * 0.62;
  for (let y = Math.floor(cy - r); y <= cy + r; y++) {
    for (let dx = -r - 1; dx <= r + 1; dx++) {
      const d = Math.hypot(dx * 0.95, y - cy);
      if (d > r) continue;
      const light = ((dx + r) / (2 * r)) * 0.4 + ((y - (cy - r)) / (2 * r)) * 0.6;
      g.set(x + dx, y, ramp(TREE, light, x + dx, y));
    }
  }
}

function sailboat(g: PixelGrid, x: number, y: number, size: number, sail: [string, string]) {
  for (let dx = -size; dx <= size; dx++) g.set(x + dx, y, hex("#6a3f25"));
  for (let dx = -size + 1; dx <= size - 1; dx++) g.set(x + dx, y + 1, hex("#4b2c1a"));
  for (let dy = 1; dy <= size + 3; dy++) g.set(x, y - dy, hex("#3b2416"));
  for (let dy = 1; dy <= size + 2; dy++) {
    const span = Math.round(((size + 3 - dy) / (size + 2)) * size * 0.9);
    for (let dx = 1; dx <= span; dx++) g.set(x + dx, y - dy, hex(dx < span * 0.5 ? sail[0] : sail[1]));
  }
  for (let dx = -size + 1; dx <= size - 1; dx++) if (bayer(x + dx, y + 2) < 0.5) g.set(x + dx, y + 2, hex("#3a4aa5"));
}

// ---------- Scenes ----------

/** Log in / sign up: a coast at sunset with hills, boats and a kolam on the sand. Portrait. */
function coast(g: PixelGrid) {
  const { w: W, h: H } = g;
  const horizon = Math.round(H * 0.57);
  const shore = Math.round(H * 0.79);
  sky(g, ["#3a3e9c", "#4950bb", "#5f67d2", "#7a81de", "#9a9ee6", "#bcafe2", "#dab4cf", "#eebdb0", "#f7c69b", "#f8b47e"], horizon);
  sun(g, W * 0.8, horizon - 8, 12, "#ffd7a3", 14, horizon);
  cloud(g, W * 0.22, H * 0.13, 40, 14, ["#fff8f1", "#f6e3ea", "#ddcde9", "#b9b1e2"]);
  cloud(g, W * 0.78, H * 0.08, 26, 9, ["#fff8f1", "#f3dfe8", "#cfc4e6"]);
  streak(g, W * 0.45, horizon - 16, 34, "#f6c7c0", "#e8b2b8");
  streak(g, W * 0.62, horizon - 9, 22, "#fbd0b0");
  birds(g, [[Math.round(W * 0.38), Math.round(H * 0.17)], [Math.round(W * 0.45), Math.round(H * 0.15)], [Math.round(W * 0.6), Math.round(H * 0.24)]], "#3a3e9c");

  // A faint far shore on the horizon, then the sea.
  ridge(g, { base: horizon + 1, amp: 5, scale: 18, seed: 3, colors: LAVENDER_FAR, depth: 30 });
  water(g, { top: horizon + 1, bottom: shore + 4, colors: SEA_DAY, streak: "#c3cdf6", seed: 11, glowX: W * 0.8, glow: ["#fff0bf", "#ffd284", "#fbb06a", "#e98f62"], glowWidth: 7 });

  // Green headland on the left with a small white shrine.
  const hill = ridge(g, {
    base: horizon + 4,
    amp: 44,
    scale: 22,
    seed: 5,
    colors: GREEN,
    depth: 46,
    rim: "#b8e0a8",
    to: Math.round(W * 0.48),
    envelope: (x) => Math.max(0, 1 - Math.pow(x / (W * 0.48), 1.8)),
  });
  const sx = Math.round(W * 0.1);
  const sy = Math.round(hill(sx));
  for (let y = sy - 8; y <= sy; y++) for (let x = sx - 4; x <= sx + 4; x++) g.set(x, y, ramp(["#fffaf0", "#efe6d6"], (x - sx + 4) / 8, x, y));
  for (let r = 0; r < 4; r++) for (let x = sx - 3 + r; x <= sx + 3 - r; x++) g.set(x, sy - 9 - r, hex(r % 2 ? "#efe6d6" : "#fffaf0"));
  for (let y = sy - 4; y <= sy; y++) g.set(sx, y, hex("#9a8466"));
  g.set(sx, sy - 13, hex("#5b3d2b"));
  g.set(sx + 1, sy - 13, hex("#ee7a2e"));
  g.set(sx + 1, sy - 14, hex("#ee7a2e"));
  g.set(sx + 2, sy - 14, hex("#f59a52"));
  for (const tx of [0.04, 0.2, 0.27, 0.33]) {
    const x = Math.round(W * tx);
    tree(g, x, Math.round(hill(x)) + 2, 5 + (x % 3));
  }

  sailboat(g, Math.round(W * 0.6), horizon + 14, 5, ["#fff6e6", "#e9dcc4"]);
  sailboat(g, Math.round(W * 0.92), horizon + 22, 4, ["#f59a52", "#e0763a"]);

  // Shore: foam, wet sand, dry sand.
  for (let x = 0; x < W; x++) {
    const top = Math.round(shore + 2 * Math.sin(x / 8) + (fbm(x / 6, 1, 21) - 0.5) * 3);
    g.set(x, top - 1, dither(hex("#d5ddfb"), hex("#f8faff"), 0.7, x, top - 1));
    g.set(x, top, hex("#f8faff"));
    for (let y = top + 1; y < H; y++) {
      const wet = y - top < 4;
      const t = (y - top) / (H - top) * 0.6 + fbm(x / 10, y / 10, 31, 3) * 0.4;
      g.set(x, y, wet ? ramp(["#e2c597", "#d8b886"], (y - top) / 4, x, y) : ramp(SAND, t, x, y));
    }
  }

  // A kolam on the sand: loops around a row of dots, with a soft shadow.
  const ky = Math.round(H - 15);
  const kx = Math.round(W / 2);
  const step = 10;
  for (let i = -2; i <= 2; i++) {
    const dx = kx + i * step;
    for (let a = 0; a < 96; a++) {
      const t = (a / 96) * Math.PI * 2;
      const x = Math.round(dx + 5.6 * Math.cos(t));
      const y = Math.round(ky + 5.6 * Math.sin(t));
      g.set(x, y + 1, hex("#d6b582"));
      g.set(x, y, hex("#fffaf0"));
    }
    g.set(dx, ky, hex("#ee7a2e"));
    g.set(dx + 1, ky, hex("#f59a52"));
    g.set(dx, ky + 1, hex("#d9672a"));
    g.set(dx + 1, ky + 1, hex("#ee7a2e"));
  }
}

/** Careers: sunrise over layered hills with a winding path. */
function sunrise(g: PixelGrid) {
  const { w: W, h: H } = g;
  const horizon = Math.round(H * 0.6);
  sky(g, ["#2b2f7c", "#3a40a0", "#4f57c1", "#6c71d5", "#918fe0", "#b8a2dd", "#d9adcb", "#efb7a8", "#f8c38e", "#fab06c"], horizon + 12);
  sun(g, W * 0.72, horizon - 3, 14, "#ffd6a0", 16);
  cloud(g, W * 0.2, H * 0.2, 44, 12, ["#ffe2cc", "#f0bcc4", "#c6a7d6", "#9a90d2"], true);
  cloud(g, W * 0.52, H * 0.12, 30, 8, ["#ffe7d4", "#eec0cb", "#b9a3d8"], true);
  streak(g, W * 0.86, H * 0.3, 40, "#f9cfb7", "#e7b0bd");
  streak(g, W * 0.35, H * 0.42, 30, "#f8c9a8");
  birds(g, [[Math.round(W * 0.4), Math.round(H * 0.28)], [Math.round(W * 0.44), Math.round(H * 0.25)], [Math.round(W * 0.62), Math.round(H * 0.33)]], "#2b2f7c");

  ridge(g, { base: horizon - 2, amp: 16, scale: 30, seed: 41, colors: ["#b9b0e6", "#a8a2df", "#9a96d8"], depth: 40 });
  ridge(g, { base: horizon + 8, amp: 14, scale: 24, seed: 43, colors: ["#9b97da", "#8784cd", "#7774c0"], depth: 40, rim: "#c8c1ee" });
  ridge(g, { base: horizon + 22, amp: 14, scale: 26, seed: 47, colors: ["#8fc7a0", "#72b28c", "#5a9b7c", "#46836b"], depth: 30, rim: "#c3e6b8" });
  const near = ridge(g, { base: H - 14, amp: 16, scale: 30, seed: 53, colors: GREEN, depth: 26, rim: "#bfe5ad" });

  // A path winding up from the bottom toward the sun.
  const startY = H - 1;
  const endY = Math.round(horizon + 18);
  for (let y = startY; y > endY; y--) {
    const rise = (startY - y) / (startY - endY);
    const cx = W * 0.5 + (W * 0.72 - W * 0.5) * rise * rise + 10 * Math.sin(rise * 6) * (1 - rise);
    const half = 1 + (1 - rise) * 6;
    for (let x = Math.round(cx - half); x <= cx + half; x++) {
      const edge = Math.abs(x - cx) / half;
      g.set(x, y, ramp(["#f9e5bd", "#efd3a2", "#ddb986"], edge * 0.8 + (fbm(x / 4, y / 4, 61, 2) - 0.5) * 0.3, x, y));
    }
  }
  for (const tx of [0.06, 0.13, 0.27, 0.36, 0.83, 0.9, 0.97]) {
    const x = Math.round(W * tx);
    tree(g, x, Math.round(near(x)) + 3, 6 + (x % 4));
  }
}

/** Technical support: a lighthouse at night, its beam over a moonlit sea. */
function lighthouse(g: PixelGrid) {
  const { w: W, h: H } = g;
  const horizon = Math.round(H * 0.63);
  sky(g, ["#0a0c25", "#0f1238", "#151948", "#1c2159", "#252b6c", "#30367e", "#3f428d", "#504c95"], horizon);

  // Stars: a few kinds, placed by noise so they cluster naturally.
  for (let y = 0; y < horizon - 4; y++) {
    for (let x = 0; x < W; x++) {
      const n = noise(x * 1.7, y * 1.7, 71);
      if (n > 0.965) {
        const kind = noise(x, y, 73);
        g.set(x, y, hex(kind > 0.6 ? "#ffffff" : kind > 0.3 ? "#dfe3ff" : "#ffe8c4"));
        if (n > 0.992) {
          for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) g.set(x + dx, y + dy, hex("#8d93db"));
        }
      }
    }
  }

  // Full moon with soft craters and a dithered halo.
  const moon = { x: W * 0.17, y: H * 0.2, r: 9 };
  for (let y = Math.floor(moon.y - moon.r - 12); y <= moon.y + moon.r + 12; y++) {
    for (let x = Math.floor(moon.x - moon.r - 12); x <= moon.x + moon.r + 12; x++) {
      const d = Math.hypot(x - moon.x, y - moon.y);
      if (d <= moon.r) {
        const crater = fbm(x / 3, y / 3, 79, 3);
        const t = crater * 0.7 + ((x - moon.x + moon.r) / (2 * moon.r)) * 0.3;
        g.set(x, y, ramp(["#fffbe9", "#f6eed2", "#e3d8b6"], t, x, y));
      } else if (d <= moon.r + 12) {
        g.set(x, y, glow(g.get(x, y), hex("#5a60b0"), Math.pow(1 - (d - moon.r) / 12, 1.4) * 0.7, x, y));
      }
    }
  }

  water(g, {
    top: horizon,
    bottom: H,
    colors: ["#2e358a", "#262c76", "#1f2464", "#191d54", "#131645", "#0d1037"],
    streak: "#3c4498",
    seed: 83,
    glowX: moon.x,
    glow: ["#f3ecd0", "#cfc9c6", "#8f8fb8"],
    glowWidth: 5,
  });

  // Rocky headland on the right, rim-lit by the moon.
  const rock = ridge(g, {
    base: horizon + 6,
    amp: 22,
    scale: 16,
    seed: 89,
    colors: ["#3d4279", "#30356a", "#262a58", "#1b1e45"],
    depth: 24,
    rim: "#5a5f9e",
    from: Math.round(W * 0.6),
    envelope: (x) => Math.exp(-Math.pow((x - W * 0.82) / (W * 0.14), 2)),
  });

  // The beam: a dithered cone of warm light, drawn before the tower.
  const lx = Math.round(W * 0.82);
  const base = Math.round(rock(lx));
  const ly = base - 34;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < lx - 2; x++) {
      const dx = x - lx;
      const dy = y - ly;
      const angle = Math.atan2(dy, dx);
      const target = Math.PI - 0.07;
      const diff = Math.abs(Math.atan2(Math.sin(angle - target), Math.cos(angle - target)));
      const spread = 0.16;
      if (diff < spread) {
        const fall = Math.max(0, 1 - Math.hypot(dx, dy) / (W * 0.9));
        const a = Math.pow(1 - diff / spread, 1.3) * fall;
        g.set(x, y, glow(g.get(x, y), hex("#ffb45a"), a, x, y, 4, "screen"));
      }
    }
  }

  // Striped tower with shading, gallery, lamp and roof.
  for (let y = ly + 5; y < base + 1; y++) {
    const h = (y - ly) / (base - ly);
    const half = Math.round(2.5 + h * 3);
    const band = Math.floor((y - ly - 5) / 5) % 2 === 0;
    for (let x = -half; x <= half; x++) {
      const shade = (x + half) / (2 * half);
      g.set(lx + x, y, ramp(band ? ["#fffaf0", "#ece4d4", "#c9c0b0"] : ["#f59a52", "#e0763a", "#b65a2b"], shade, lx + x, y));
    }
  }
  for (let x = -5; x <= 5; x++) g.set(lx + x, ly + 4, hex("#2a2e5c"));
  for (let x = -4; x <= 4; x += 2) g.set(lx + x, ly + 3, hex("#2a2e5c"));
  for (let y = ly; y < ly + 3; y++) for (let x = -3; x <= 3; x++) g.set(lx + x, y, ramp(["#fff8dc", "#ffe08a", "#ffc65f"], Math.abs(x) / 3, lx + x, y));
  for (let r = 0; r < 4; r++) for (let x = -4 + r; x <= 4 - r; x++) g.set(lx + x, ly - 1 - r, hex(r === 0 ? "#3a3f74" : "#2a2e5c"));
  g.set(lx, ly - 5, hex("#2a2e5c"));
  for (let y = ly - 8; y <= ly + 10; y++) {
    for (let x = lx - 9; x <= lx + 9; x++) {
      const d = Math.hypot(x - lx, y - ly - 1);
      if (d > 4 && d < 9) g.set(x, y, glow(g.get(x, y), hex("#ffcf7a"), (1 - (d - 4) / 5) * 0.9, x, y, 4, "screen"));
    }
  }

  // A small fishing boat with a lantern and its reflection.
  const bx = Math.round(W * 0.36);
  const by = horizon + 22;
  for (let dx = -7; dx <= 7; dx++) g.set(bx + dx, by, hex("#0a0c2a"));
  for (let dx = -5; dx <= 5; dx++) g.set(bx + dx, by + 1, hex("#0a0c2a"));
  for (let dy = 1; dy <= 9; dy++) g.set(bx - 2, by - dy, hex("#0a0c2a"));
  g.set(bx + 2, by - 3, hex("#ffd66b"));
  g.set(bx + 2, by - 2, hex("#ffb84a"));
  for (let dy = 3; dy <= 9; dy += 2) g.set(bx + 2, by + dy, hex(dy < 6 ? "#e8b25a" : "#8a6a4a"));
}

/** Press / media: Sankranti kites over rooftop terraces at dusk. */
function kites(g: PixelGrid) {
  const { w: W, h: H } = g;
  const roofline = Math.round(H * 0.68);
  sky(g, ["#33389a", "#4147b2", "#585dc5", "#7876d5", "#9a8fdb", "#bd9ed8", "#dfaac6", "#f2b7a8", "#f9c590"], roofline + 6);
  sun(g, W * 0.8, roofline - 2, 12, "#ffd7a3", 15);
  cloud(g, W * 0.16, H * 0.18, 34, 10, ["#ffe8d8", "#f2c8d2", "#c9b0dc", "#9f95d4"], true);
  cloud(g, W * 0.6, H * 0.1, 26, 8, ["#ffeadc", "#efc6d3", "#b9a8dc"], true);
  streak(g, W * 0.42, H * 0.46, 36, "#f6c4b4", "#e6aebc");
  birds(g, [[Math.round(W * 0.33), Math.round(H * 0.3)], [Math.round(W * 0.37), Math.round(H * 0.27)]], "#33389a");

  // Rooftop terraces: shaded walls, parapets, windows, water tanks.
  const roofs: { x: number; w: number; top: number }[] = [];
  let x = 0;
  while (x < W) {
    const w = 14 + Math.floor(g.rand() * 16);
    const top = roofline + Math.floor(g.rand() * 12) - 2;
    roofs.push({ x, w, top });
    const tint = g.rand() < 0.5 ? ["#f2e1cf", "#e7d1bd", "#d6bda8"] : ["#ecd6cc", "#dfc3b8", "#cbaa9f"];
    for (let bx = x; bx < Math.min(W, x + w); bx++) {
      const side = bx >= x + w - 3;
      for (let y = top; y < H; y++) g.set(bx, y, side ? ramp(["#b89c8c", "#a0857a"], (y - top) / 30, bx, y) : ramp(tint, (y - top) / 40, bx, y));
      g.set(bx, top, hex("#fbf2e8"));
      g.set(bx, top + 1, hex(side ? "#a0857a" : "#d9c4b2"));
    }
    for (let wy = top + 5; wy < H - 3; wy += 7) {
      for (let wx = x + 3; wx < x + w - 5; wx += 6) {
        const lit = noise(wx * 0.7, wy * 0.7, 97) > 0.62;
        for (let dy = 0; dy < 4; dy++) for (let dx = 0; dx < 3; dx++) g.set(wx + dx, wy + dy, hex(lit ? (dy === 0 ? "#ffe39a" : "#ffcf6e") : dy === 0 ? "#6f629f" : "#5b4f8f"));
        for (let dx = -1; dx < 4; dx++) g.set(wx + dx, wy + 4, hex("#fbf2e8"));
      }
    }
    if (g.rand() < 0.5 && w > 16) {
      const tx = x + 3 + Math.floor(g.rand() * (w - 12));
      for (let dy = 1; dy <= 5; dy++) for (let dx = 0; dx < 6; dx++) g.set(tx + dx, top - dy, ramp(["#4a4f8c", "#3a3f78", "#2c3066"], dx / 5, tx + dx, top - dy));
      for (let dx = 1; dx < 5; dx++) g.set(tx + dx, top - 6, hex("#5a5f9e"));
    }
    x += w;
  }

  // Kites: shaded diamonds with darker sticks and ribbon tails, strings down to the roofs.
  const KITES = [
    { x: 0.12, y: 0.24, s: 6, c: ["#f9a868", "#ee7a2e", "#c95f22", "#a24a1a"] },
    { x: 0.3, y: 0.1, s: 5, c: ["#ff9ab6", "#ff5c8a", "#d83f6c", "#ad2f55"] },
    { x: 0.47, y: 0.3, s: 7, c: ["#7fdcae", "#2bb673", "#1f925b", "#177146"] },
    { x: 0.64, y: 0.16, s: 5, c: ["#9a98f2", "#4a47e0", "#3533b5", "#272690"] },
    { x: 0.86, y: 0.3, s: 6, c: ["#ffd57a", "#ffb020", "#d98d0f", "#ad6f0a"] },
    { x: 0.96, y: 0.08, s: 4, c: ["#c8b6ff", "#8b6cff", "#6c4fe0", "#5239b5"] },
  ];
  for (const [i, k] of KITES.entries()) {
    const kx = Math.round(W * k.x);
    const ky = Math.round(H * k.y);
    const roof = roofs[Math.min(roofs.length - 1, Math.floor((kx / W) * roofs.length + (i % 2 ? 1 : -1)))] ?? roofs[0];
    const px = Math.max(1, Math.min(W - 2, roof.x + Math.floor(roof.w / 2)));
    const py = roof.top;
    // String: a thin, soft sagging curve down to a rooftop.
    for (let t = 0; t <= 1; t += 0.004) {
      const sx = kx + (px - kx) * t;
      const sy = ky + k.s * 1.4 + (py - (ky + k.s * 1.4)) * t + Math.sin(t * Math.PI) * 7;
      g.set(sx, sy, glow(g.get(sx, sy), hex("#fdf6ee"), 0.42, Math.round(sx), Math.round(sy), 2));
    }
    // Diamond, four shaded quadrants.
    const a = k.s;
    const b = Math.round(k.s * 1.4);
    for (let dy = -b; dy <= b; dy++) {
      for (let dx = -a; dx <= a; dx++) {
        const edge = Math.abs(dx) / a + Math.abs(dy) / b;
        if (edge > 1) continue;
        const q = dx <= 0 ? (dy <= 0 ? 0 : 2) : dy <= 0 ? 1 : 3;
        g.set(kx + dx, ky + dy, hex(edge > 0.86 ? k.c[3] : k.c[q === 0 ? 0 : q === 3 ? 2 : 1]));
      }
    }
    for (let dy = -b + 1; dy < b; dy++) g.set(kx, ky + dy, hex(k.c[3]));
    for (let dx = -a + 1; dx < a; dx++) g.set(kx + dx, ky - Math.round(b * 0.3), hex(k.c[3]));
    // Ribbon tail.
    for (let j = 1; j <= 7; j++) {
      const tx = Math.round(kx + Math.sin(j * 0.9) * 2);
      const ty = ky + b + j;
      g.set(tx, ty, hex(j % 3 === 0 ? "#fff3e0" : k.c[1]));
    }
  }
}

// ---------- Registry ----------

const SCENES: Record<SceneName, { w: number; h: number; draw: (g: PixelGrid) => void }> = {
  coast: { w: 150, h: 176, draw: coast },
  sunrise: { w: 200, h: 124, draw: sunrise },
  lighthouse: { w: 200, h: 124, draw: lighthouse },
  kites: { w: 200, h: 124, draw: kites },
};

export function drawScene(name: SceneName): string {
  const scene = SCENES[name];
  const g = pixelGrid(scene.w, scene.h, 20261026 + name.length * 7919);
  scene.draw(g);
  return g.render(7);
}

// Keep the helper type exported for anyone composing new scenes.
export type { RGB };
