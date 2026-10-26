"use client";

import { useEffect, useState } from "react";
import { drawScene, type SceneName } from "./scenes";

const FALLBACK: Record<SceneName, string> = {
  sunrise: "linear-gradient(180deg,#2a2f7a 0%,#b8a8e6 45%,#ffb56a 62%,#4f9e5c 64%,#245c3a 100%)",
  lighthouse: "linear-gradient(180deg,#0d0e2b 0%,#383d8c 60%,#2c3284 64%,#0c0f3c 100%)",
  kites: "linear-gradient(180deg,#3a3f9a 0%,#f2a7a0 55%,#f8c58c 70%,#ead8c6 72%,#dcc4b2 100%)",
};

/** Full-bleed generated pixel scene, scaled up with crisp pixels. */
export function PixelBackdrop({ scene, className = "" }: { scene: SceneName; className?: string }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    setSrc(drawScene(scene));
  }, [scene]);

  return (
    <div
      aria-hidden="true"
      className={className}
      style={
        src
          ? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center bottom", imageRendering: "pixelated" }
          : { background: FALLBACK[scene] }
      }
    />
  );
}
