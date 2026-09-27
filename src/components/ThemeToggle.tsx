"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/45 text-base shadow-[0_4px_16px_-6px_rgba(120,60,30,0.2)] backdrop-blur-md transition duration-300 hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      {dark === null ? null : dark ? "☀️" : "🌙"}
    </button>
  );
}
