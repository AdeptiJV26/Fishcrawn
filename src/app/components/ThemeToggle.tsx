"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex gap-2 rounded-2xl border-borderprime border-2 p-2 w-32 bg-zinc-500/70 cursor-pointer select-none"
    >
      <div className={`flex-1 h-12 rounded-xl flex items-center justify-center ${
        !isDark ? "bg-mode-reverse border border-borderprime" : ""
      }`}>
        ☀️
      </div>
      <div className={`flex-1 h-12 rounded-xl flex items-center justify-center ${
        isDark ? "bg-mode-reverse border border-borderprime" : ""
      }`}>
        🌙
      </div>
    </div>
  );
}
