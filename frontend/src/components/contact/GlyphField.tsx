"use client";

import { useEffect, useRef } from "react";
import { seededRandom } from "@/lib/random";

// A dark field of letters from many of the world's scripts. Letters inside
// the Vegam mark glow brighter, so the mark appears out of every language.
// A few letters change at a time, like a quiet conversation. With a mouse,
// letters near the pointer glow and ripple gently outward.

const GLYPHS = [
  ..."అఆఇఈఉకగచజటడతదనపబమయరలవసహ", // Telugu
  ..."अआइकखगचजटडतदनपबमयरलवसह", // Devanagari
  ..."அஆஇகஙசஞடணதநபமயரலவ", // Tamil
  ..."ಅಆಇಕಗಚಜಟಡತದನಪಬಮಯರಲವ", // Kannada
  ..."ABCDEFGHJKMNPRSTVWXYZ", // Latin
  ..."ابتثجحدذرزسشصطعغفقكلمنهوي", // Arabic
  ..."あいうえおかきくけこさしすたなはまやらわ", // Japanese
  ..."가나다라마바사아자차카타파하", // Korean
  ..."ΑΒΓΔΕΖΘΛΞΠΣΦΨΩ", // Greek
  ..."БГДЖЗИЛПФЦЧШЭЮЯ", // Cyrillic
];

const CELL = 22;
const HALO = 200; // letters glow and ripple inside this radius

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function GlyphField({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const host = wrap?.parentElement;
    if (!wrap || !canvas || !ctx || !host) return;

    const rand = seededRandom(7);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let cols = 0;
    let alpha: number[] = [];
    let chars: string[] = [];

    const pointer = { x: 0, y: 0, inside: false };
    const pos = { x: 0, y: 0 };
    let intensity = 0;
    let frame = 0;

    const brightness = (cx: number, cy: number) => {
      // On small screens the panel is a short header behind text: no mark.
      if (width < 480) return 0;
      // Rose curve r = R|cos 2(θ - 45°)|: four petals on the diagonals, like the Vegam mark.
      const ox = width * 0.5;
      const oy = height * 0.47;
      const R = Math.min(width, height) * 0.34;
      const dx = cx - ox;
      const dy = cy - oy;
      const r = Math.hypot(dx, dy);
      const petal = R * Math.abs(Math.cos(2 * (Math.atan2(dy, dx) - Math.PI / 4)));
      const edge = petal - r;
      if (edge < 0) return 0;
      const onLine = edge < CELL * 1.4 ? 1 : 0.55;
      const dots = [45, 135, 225, 315].some((deg) => {
        const a = (deg * Math.PI) / 180;
        return Math.hypot(cx - (ox + R * 0.58 * Math.cos(a)), cy - (oy + R * 0.58 * Math.sin(a))) < CELL * 1.6;
      });
      return dots ? 1 : onLine;
    };

    const glyph = (i: number, a: number, dx = 0, dy = 0) => {
      if (a <= 0.004) return;
      const x = (i % cols) * CELL + CELL / 2 + dx;
      const y = Math.floor(i / cols) * CELL + CELL / 2 + 1 + dy;
      ctx.fillStyle = a > 0.5 ? `rgba(255, 186, 120, ${a})` : `rgba(238, 122, 46, ${a})`;
      ctx.fillText(chars[i], x, y);
    };

    const drawCell = (i: number) => {
      ctx.clearRect((i % cols) * CELL, Math.floor(i / cols) * CELL, CELL, CELL);
      glyph(i, alpha[i]);
    };

    const drawAll = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < alpha.length; i++) {
        if (intensity < 0.01) {
          glyph(i, alpha[i]);
          continue;
        }
        const cx = (i % cols) * CELL + CELL / 2;
        const cy = Math.floor(i / cols) * CELL + CELL / 2;
        const dx = cx - pos.x;
        const dy = cy - pos.y;
        const d = Math.hypot(dx, dy) || 1;
        let a = alpha[i];
        let ox = 0;
        let oy = 0;
        if (d < HALO) {
          const near = 1 - d / HALO;
          a = Math.min(1, a + near * near * 0.85 * intensity + (a > 0 ? 0 : near * 0.25 * intensity));
          const push = near * 16 * intensity;
          ox = (dx / d) * push;
          oy = (dy / d) * push;
        }
        glyph(i, a, ox, oy);
      }
    };

    const layout = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `500 13px "Noto Sans", "Noto Sans Telugu", "Noto Sans Devanagari", system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);
      alpha = [];
      chars = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const glow = brightness(c * CELL + CELL / 2, r * CELL + CELL / 2);
          const fadeY = Math.min(1, (r / rows) * 1.6 + 0.25);
          const empty = rand() < (glow ? 0.05 : 0.32);
          alpha.push(empty ? 0 : glow ? 0.6 + glow * 0.4 * rand() : (0.05 + rand() * 0.16) * fadeY);
          chars.push(GLYPHS[Math.floor(rand() * GLYPHS.length)]);
        }
      }
      drawAll();
    };

    const tick = () => {
      intensity = lerp(intensity, pointer.inside ? 1 : 0, 0.09);
      pos.x = lerp(pos.x, pointer.x, 0.16);
      pos.y = lerp(pos.y, pointer.y, 0.16);
      drawAll();

      if (pointer.inside || intensity > 0.01) {
        frame = requestAnimationFrame(tick);
      } else {
        intensity = 0;
        frame = 0;
        drawAll();
      }
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || reduce) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (!pointer.inside) {
        pointer.inside = true;
        if (intensity < 0.01) {
          pos.x = pointer.x;
          pos.y = pointer.y;
        }
      }
      start();
    };
    const onLeave = () => {
      pointer.inside = false;
      start();
    };

    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(canvas);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    const timer = reduce
      ? undefined
      : window.setInterval(() => {
          const n = Math.ceil(alpha.length * 0.012);
          for (let k = 0; k < n; k++) {
            const i = Math.floor(Math.random() * alpha.length);
            chars[i] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            if (!frame) drawCell(i);
          }
        }, 140);

    return () => {
      observer.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (timer) window.clearInterval(timer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" className={`pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
