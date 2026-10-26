"use client";

import { useEffect, useRef } from "react";
import { seededRandom } from "@/lib/random";

// A dark field of letters from many of the world's scripts. Letters inside
// the Vegam mark glow brighter, so the mark appears out of every language.
// A few letters change at a time, like a quiet conversation.

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

export function GlyphField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rand = seededRandom(7);
    let cols = 0;
    let rows = 0;
    let alpha: number[] = [];
    let chars: string[] = [];

    const brightness = (cx: number, cy: number, w: number, h: number) => {
      // On small screens the panel is a short header behind text: no mark.
      if (w < 480) return 0;
      // Rose curve r = R|cos 2(θ - 45°)|: four petals on the diagonals, like the Vegam mark.
      const ox = w * 0.5;
      const oy = h * 0.47;
      const R = Math.min(w, h) * 0.34;
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

    const drawCell = (i: number) => {
      const x = (i % cols) * CELL;
      const y = Math.floor(i / cols) * CELL;
      ctx.clearRect(x, y, CELL, CELL);
      const a = alpha[i];
      if (a <= 0) return;
      ctx.fillStyle = a > 0.5 ? `rgba(255, 186, 120, ${a})` : `rgba(238, 122, 46, ${a})`;
      ctx.fillText(chars[i], x + CELL / 2, y + CELL / 2 + 1);
    };

    const layout = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `500 13px "Noto Sans", "Noto Sans Telugu", "Noto Sans Devanagari", system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      alpha = [];
      chars = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const glow = brightness(c * CELL + CELL / 2, r * CELL + CELL / 2, width, height);
          const fadeY = Math.min(1, (r / rows) * 1.6 + 0.25);
          const empty = rand() < (glow ? 0.05 : 0.32);
          alpha.push(empty ? 0 : glow ? 0.6 + glow * 0.4 * rand() : (0.05 + rand() * 0.16) * fadeY);
          chars.push(GLYPHS[Math.floor(rand() * GLYPHS.length)]);
        }
      }
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < alpha.length; i++) drawCell(i);
    };

    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(canvas);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = reduce
      ? undefined
      : window.setInterval(() => {
          const n = Math.ceil(alpha.length * 0.012);
          for (let k = 0; k < n; k++) {
            const i = Math.floor(Math.random() * alpha.length);
            chars[i] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            drawCell(i);
          }
        }, 140);

    return () => {
      observer.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
