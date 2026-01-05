"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkNow = document.documentElement.classList.contains("dark");
    setIsDark(isDarkNow);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newMode ? "dark" : "light");
    setIsDark(newMode);
  };

  return (
    <div 
      onClick={toggleTheme}
      className="flex flex-row gap-2 rounded-2xl border-borderprime border-3 p-2 w-32 bg-zinc-500/70 cursor-pointer select-none"
    >
      {/* Light Side Portion */}
      <div className={`flex-1 flex items-center justify-center h-12 rounded-xl transition-all duration-200 ${
        !isDark ? "bg-mode-reverse shadow-sm border-3 p-1 border-borderprime" : "bg-transparent"
      }`}>
        <span className={`text-xl ${!isDark ? "opacity-100" : "opacity-60"}`}>☀️</span>
      </div>

      {/* Dark Side Portion */}
      <div className={`flex-1 flex items-center justify-center h-12 rounded-xl transition-all duration-200 ${
        isDark ? "bg-mode-reverse shadow-sm border-3 p-1 border-borderprime" : "bg-transparent"
      }`}>
        <span className={`text-xl ${isDark ? "opacity-100" : "opacity-60"}`}>🌙</span>
      </div>
    </div>
  );
}