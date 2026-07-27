"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    // Exactly one of the two is always present, matching the pre-paint script
    const classes = document.documentElement.classList;
    classes.toggle("dark", next);
    classes.toggle("light", !next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme just won't persist
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="w-9 h-9 rounded border border-edge-strong bg-panel flex items-center justify-center text-ash hover:text-sodium hover:border-sodium transition-colors"
    >
      {dark === null ? (
        <span className="w-4 h-4" />
      ) : dark ? (
        <Sun size={15} />
      ) : (
        <Moon size={15} />
      )}
    </button>
  );
}
