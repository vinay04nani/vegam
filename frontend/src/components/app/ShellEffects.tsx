"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const THEME_KEY = "vegham-theme";

/**
 * The shell's menus, settings pop-up and theme are driven by hidden radio inputs, as in the design boards.
 * This closes any open menu when the page changes, and remembers the chosen theme on this device.
 */
export default function ShellEffects() {
  const path = usePathname();

  useEffect(() => {
    const none = document.getElementById("ov-none") as HTMLInputElement | null;
    if (none) none.checked = true;
  }, [path]);

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
