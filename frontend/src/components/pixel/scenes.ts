// Landscape pixel scenes for the "coming soon" pages. Each draws onto a
// small grid that is scaled up with crisp pixels.

import { gradient, hex, mix, pixelGrid, type PixelGrid, type Stops } from "@/lib/pixel";

export type SceneName = "sunrise" | "lighthouse" | "kites";

const W = 200;
const H = 124;

/** Dithered sky bands from y = 0 down to `bottom`. */
function sky(g: PixelGrid, stops: Stops, bottom: number) {
  for (let y = 0; y < bottom; y++) {
    for (let x = 0; x < W; x++) {
      const t = Math.min(1, Math.max(0, y / bottom + (g.rand() - 0.5) * 0.06));
      g.set(x, y, gradient(stops, Math.round(t * 16) / 16));
    }
  }
}

function disc(g: PixelGrid, cx: number, cy: number, r: number, stops: Stops, glow: string, maxY = H) {
  for (let y = Math.floor(cy - r - 8); y <= cy + r + 8; y++) {
    if (y >= maxY) continue;
    for (let x = Math.floor(cx - r - 8); x <= cx + r + 8; x++) {
      const d = Math.hypot(x - cx, y - cy);
      if (d <= r) g.set(x, y, gradient(stops, (y - (cy - r)) / (2 * r)));
      else if (d <= r + 8 && g.rand() < 0.75) g.set(x, y, mix(g.get(x, y), hex(glow), 0.4 * (1 - (d - r) / 8)));
    }
  }
}

function birds(g: PixelGrid, points: [number, number][], colour: string) {
  for (const [bx, by] of points) {
    g.set(bx - 1, by - 1, hex(colour));
    g.set(bx, by, hex(colour));
    g.set(bx + 1, by - 1, hex(colour));
  }
}

/** Careers: sunrise over layered hills, with a winding path climbing toward the sun. */
function sunrise(g: PixelGrid) {
  const horizon = Math.round(H * 0.6);
  sky(g, [[0, "#2a2f7a"], [0.35, "#5b67d6"], [0.62, "#b8a8e6"], [0.82, "#f4b48c"], [1, "#ffb56a"]], horizon + 12);
  disc(g, W * 0.75, horizon - 4, 16, [[0, "#ffe08a"], [0.5, "#ffb020"], [1, "#f2762e"]], "#ffd9a8");

  // Thin pink cloud streaks.
  for (const [cx, cy, len] of [[40, 30, 34], [150, 22, 28], [120, 44, 20], [62, 52, 16]]) {
    for (let x = cx - len / 2; x < cx + len / 2; x++) {
      g.set(x, cy, hex("#f6c9c0"));
      if (x > cx - len / 3 && x < cx + len / 4) g.set(x, cy - 1, hex("#fbe0d8"));
    }
  }
  birds(g, [[70, 34], [76, 31], [132, 38]], "#2a2f7a");

  const layer = (top: (x: number) => number, stops: Stops, speckle: string) => {
    for (let x = 0; x < W; x++) {
      const t0 = Math.round(top(x));
      for (let y = t0; y < H; y++) {
        let c = gradient(stops, Math.min(1, (y - t0) / 40 + (g.rand() - 0.5) * 0.1));
        if (g.rand() < 0.06) c = mix(c, hex(speckle), 0.5);
        g.set(x, y, c);
      }
    }
  };
  const back = (x: number) => horizon - 4 + 5 * Math.sin(x / 17) + 3 * Math.sin(x / 7 + 1);
  const middle = (x: number) => horizon + 12 + 8 * Math.sin(x / 23 + 2) + 3 * Math.sin(x / 9);
  const front = (x: number) => horizon + 30 + 7 * Math.sin(x / 19 + 4) + 2 * Math.sin(x / 6);
  layer(back, [[0, "#7d86d8"], [1, "#5f67b8"]], "#a3a9e8");
  layer(middle, [[0, "#6fbf6a"], [1, "#3f8a55"]], "#a6dd7a");
  layer(front, [[0, "#4f9e5c"], [1, "#245c3a"]], "#86c35a");

  // A path winding up from the bottom toward the sun.
  for (let y = H - 1; y > middle(W / 2) + 2; y--) {
    const rise = (H - y) / (H - middle(W / 2));
    const cx = W / 2 + 16 * Math.sin((H - y) / 8) * (1 - rise);
    const half = 1 + (1 - rise) * 5;
    for (let x = Math.round(cx - half); x <= cx + half; x++) {
      g.set(x, y, g.rand() < 0.8 ? hex("#f3dba8") : hex("#e3c391"));
    }
  }

  // Small trees on the front hill.
  for (const tx of [18, 34, 58, 142, 160, 181]) {
    const ty = Math.round(front(tx));
    for (let y = 0; y < 3; y++) g.set(tx, ty - y, hex("#5b3a1e"));
    for (let r = 0; r < 6; r++) for (let x = -r / 2; x <= r / 2; x++) g.set(tx + x, ty - 9 + r, hex(r % 2 ? "#2f7448" : "#3d8a55"));
  }
}

/** Technical support: a lighthouse on the rocks at night, its warm beam over a dark sea. */
function lighthouse(g: PixelGrid) {
  const horizon = Math.round(H * 0.64);
  sky(g, [[0, "#0d0e2b"], [0.5, "#1d2263"], [0.85, "#383d8c"], [1, "#574c94"]], horizon);

  for (let y = 0; y < horizon - 6; y++) {
    for (let x = 0; x < W; x++) {
      if (g.rand() < 0.011) {
        const bright = g.rand() < 0.25;
        g.set(x, y, hex(bright ? "#ffffff" : "#c9cdf5"));
        if (bright && g.rand() < 0.5) {
          g.set(x - 1, y, hex("#7d84d6"));
          g.set(x + 1, y, hex("#7d84d6"));
          g.set(x, y - 1, hex("#7d84d6"));
          g.set(x, y + 1, hex("#7d84d6"));
        }
      }
    }
  }

  // Crescent moon.
  const moon = { x: 34, y: 22, r: 8 };
  for (let y = moon.y - moon.r; y <= moon.y + moon.r; y++) {
    for (let x = moon.x - moon.r; x <= moon.x + moon.r; x++) {
      const inMoon = Math.hypot(x - moon.x, y - moon.y) <= moon.r;
      const inShadow = Math.hypot(x - moon.x - 4, y - moon.y + 2) <= moon.r - 1;
      if (inMoon && !inShadow) g.set(x, y, hex("#fff4d6"));
    }
  }

  // Sea with the moon's reflection.
  for (let y = horizon; y < H; y++) {
    const t = (y - horizon) / (H - horizon);
    for (let x = 0; x < W; x++) {
      let c = gradient([[0, "#2c3284"], [1, "#0c0f3c"]], Math.round(Math.min(1, t + (g.rand() - 0.5) * 0.08) * 8) / 8);
      if (g.rand() < 0.03 || (x * 5 + y * 3) % 29 === 0) c = mix(c, hex("#5866c8"), 0.6);
      if (Math.abs(x - moon.x) < 5 - t * 2 && y % 2 === 0 && g.rand() < 0.6) c = hex("#efe2bd");
      g.set(x, y, c);
    }
  }

  // Rocky headland on the right.
  const rockTop = (x: number) => horizon - 3 - 9 * Math.exp(-(((x - 160) / 18) ** 2)) + 1.5 * Math.sin(x / 3);
  for (let x = 118; x < W; x++) {
    const top = Math.round(rockTop(x));
    for (let y = top; y < horizon + 10 + Math.sin(x / 5) * 2; y++) {
      g.set(x, y, gradient([[0, "#3a3f78"], [1, "#171a40"]], Math.min(1, (y - top) / 18 + (g.rand() - 0.5) * 0.2)));
    }
  }

  // The beam, drawn before the tower so the tower sits in front of it.
  const lamp = { x: 160, y: Math.round(rockTop(160)) - 36 };
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < lamp.x; x++) {
      const dx = x - lamp.x;
      const dy = y - lamp.y;
      const angle = Math.atan2(dy, dx);
      const target = Math.PI - 0.08;
      const diff = Math.abs(Math.atan2(Math.sin(angle - target), Math.cos(angle - target)));
      const spread = 0.2;
      if (diff < spread) {
        const fall = Math.max(0, 1 - Math.hypot(dx, dy) / 190);
        g.set(x, y, mix(g.get(x, y), hex("#ffe2a0"), 0.55 * fall * (1 - diff / spread)));
      }
    }
  }

  // Striped tower, lamp room and roof.
  const base = Math.round(rockTop(160));
  for (let y = lamp.y + 4; y < base; y++) {
    const h = (y - lamp.y) / (base - lamp.y);
    const half = Math.round(2 + h * 2.5);
    const band = Math.floor((y - lamp.y) / 5) % 2 === 0;
    for (let x = -half; x <= half; x++) g.set(lamp.x + x, y, hex(band ? "#f5f1e8" : "#ee7a2e"));
    g.set(lamp.x + half, y, hex(band ? "#cfc8b8" : "#b4500a"));
  }
  for (let x = -3; x <= 3; x++) g.set(lamp.x + x, lamp.y + 4, hex("#262a52"));
  for (let y = lamp.y; y < lamp.y + 4; y++) for (let x = -2; x <= 2; x++) g.set(lamp.x + x, y, hex(x === 0 ? "#fff6c8" : "#ffd66b"));
  for (let r = 0; r < 3; r++) for (let x = -3 + r; x <= 3 - r; x++) g.set(lamp.x + x, lamp.y - 1 - r, hex("#262a52"));
  disc(g, lamp.x, lamp.y + 2, 0, [[0, "#fff6c8"], [1, "#fff6c8"]], "#ffd66b");

  // A small boat with a lantern.
  const boat = { x: 62, y: horizon + 22 };
  for (let x = -6; x <= 6; x++) g.set(boat.x + x, boat.y, hex("#0a0c2a"));
  for (let x = -4; x <= 4; x++) g.set(boat.x + x, boat.y + 1, hex("#0a0c2a"));
  for (let y = 1; y <= 7; y++) g.set(boat.x, boat.y - y, hex("#0a0c2a"));
  g.set(boat.x + 1, boat.y - 3, hex("#ffd66b"));
}

/** Press / media: Sankranti kites over rooftop terraces at dusk. */
function kites(g: PixelGrid) {
  const roofline = Math.round(H * 0.7);
  sky(g, [[0, "#3a3f9a"], [0.42, "#8c86d8"], [0.74, "#f2a7a0"], [1, "#f8c58c"]], H);
  disc(g, W * 0.74, roofline - 2, 12, [[0, "#ffd66b"], [0.6, "#ffb020"], [1, "#f2762e"]], "#ffd9a8");
  birds(g, [[30, 20], [36, 17], [104, 14]], "#3a3f9a");

  const KITES = [
    { x: 30, y: 30, s: 6, c: "#EE7A2E", to: 22 },
    { x: 64, y: 16, s: 5, c: "#FF5C8A", to: 52 },
    { x: 96, y: 40, s: 7, c: "#2BB673", to: 90 },
    { x: 128, y: 20, s: 5, c: "#4A47E0", to: 118 },
    { x: 162, y: 36, s: 6, c: "#FFB020", to: 172 },
    { x: 186, y: 14, s: 4, c: "#8B6CFF", to: 190 },
  ];

  // Strings first, so roofs and kites sit on top.
  for (const k of KITES) {
    const sx = k.x;
    const sy = k.y + k.s * 1.4;
    for (let t = 0; t <= 1; t += 0.006) {
      const x = sx + (k.to - sx) * t;
      const y = sy + (roofline + 4 - sy) * t + Math.sin(t * Math.PI) * 6;
      if (Math.round(t * 160) % 3 !== 0) g.set(x, y, mix(g.get(x, y), hex("#fdfbf8"), 0.55));
    }
  }

  // Rooftop terraces with windows, parapets and water tanks.
  let x = 0;
  while (x < W) {
    const width = 12 + Math.floor(g.rand() * 16);
    const top = roofline + Math.floor(g.rand() * 10) - 3;
    const wall = g.rand() < 0.5 ? "#ead8c6" : "#dcc4b2";
    for (let bx = x; bx < Math.min(W, x + width); bx++) {
      const shade = bx > x + width - 3;
      for (let y = top; y < H; y++) g.set(bx, y, hex(shade ? "#bfa392" : wall));
      g.set(bx, top, hex("#f7ece0"));
    }
    for (let wy = top + 4; wy < H - 3; wy += 6) {
      for (let wx = x + 2; wx < x + width - 4; wx += 5) {
        const lit = g.rand() < 0.35;
        for (let dy = 0; dy < 3; dy++) for (let dx = 0; dx < 2; dx++) g.set(wx + dx, wy + dy, hex(lit ? "#ffd66b" : "#6a5c9e"));
      }
    }
    if (g.rand() < 0.45) {
      const tx = x + 2 + Math.floor(g.rand() * Math.max(1, width - 8));
      for (let dy = 1; dy <= 4; dy++) for (let dx = 0; dx < 5; dx++) g.set(tx + dx, top - dy, hex(dx === 4 ? "#262a52" : "#3a3f78"));
    }
    x += width;
  }

  // Diamond kites with cross sticks and bow-tie tails.
  for (const k of KITES) {
    const a = k.s;
    const b = k.s * 1.4;
    for (let y = -b; y <= b; y++) {
      for (let dx = -a; dx <= a; dx++) {
        if (Math.abs(dx) / a + Math.abs(y) / b <= 1) {
          const lighter = dx < 0 !== y < 0;
          g.set(k.x + dx, k.y + y, lighter ? mix(hex(k.c), hex("#ffffff"), 0.25) : hex(k.c));
        }
      }
    }
    for (let y = -b; y <= b; y++) g.set(k.x, k.y + y, hex("#fff3e0"));
    for (let dx = -a; dx <= a; dx++) g.set(k.x + dx, k.y - 1, hex("#fff3e0"));
    for (let i = 1; i <= 3; i++) {
      const tx = k.x + Math.sin(i * 1.3) * 2;
      const ty = k.y + b + i * 3;
      g.set(tx - 1, ty, hex(k.c));
      g.set(tx + 1, ty, hex(k.c));
      g.set(tx, ty, hex("#fff3e0"));
    }
  }
}

const SCENES: Record<SceneName, (g: PixelGrid) => void> = { sunrise, lighthouse, kites };

export function drawScene(name: SceneName): string {
  const g = pixelGrid(W, H, name.length * 7919 + 2026);
  SCENES[name](g);
  return g.render(12);
}
