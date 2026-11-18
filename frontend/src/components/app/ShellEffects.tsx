"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const THEME_KEY = "vegham-theme";

/**
 * The shell's menus, settings pop-up and theme are driven by hidden radio inputs, as in the design boards.
 * This closes any open menu when the page changes, opens search with Cmd+K or Ctrl+K, closes pop-ups with Escape,
 * and remembers the chosen theme on this device.
 */
export default function ShellEffects() {
  const path = usePathname();

  useEffect(() => {
    const none = document.getElementById("ov-none") as HTMLInputElement | null;
    if (none) none.checked = true;
  }, [path]);

  useEffect(() => {
    // Cmd+K or Ctrl+K opens search; Escape closes any open menu or pop-up.
    const onKey = (e: KeyboardEvent) => {
      const pick = (id: string) => {
        const el = document.getElementById(id) as HTMLInputElement | null;
        if (el) el.checked = true;
      };
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        pick("ov-pal");
      } else if (e.key === "Escape") {
        pick("ov-none");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const light = document.getElementById("th-light") as HTMLInputElement | null;
    const dark = document.getElementById("th-dark") as HTMLInputElement | null;
    if (!light || !dark) return;
    try {
      if (localStorage.getItem(THEME_KEY) === "dark") dark.checked = true;
    } catch {
      // Storage can be blocked; the theme then just resets on reload.
    }
    const save = () => {
      try {
        localStorage.setItem(THEME_KEY, dark.checked ? "dark" : "light");
      } catch {
        // Ignored for the same reason.
      }
    };
    light.addEventListener("change", save);
    dark.addEventListener("change", save);
    return () => {
      light.removeEventListener("change", save);
      dark.removeEventListener("change", save);
    };
  }, []);

  return null;
}
