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
    <div className="flex flex-row gap-4 bg-mode/70 rounded-lg border-primer p-2 w-fit">
      
      <div className="flex flex-row h-12 w-12 border-2 border-borderprime rounded-xl h-12 w-12 overflow-hidden bg-sidebar-01">
        <button
          onClick={toggleTheme}
          className="w-full h-full flex items-center justify-center rounded-lg bg-mode text-title-01 transition-all hover:bg-highlighter hover:text-sidebar-03 border-2 border-button-01 shadow-inner active:scale-90"
          title="Toggle System Theme"
        >
          <span className="text-xl leading-none">{isDark ? "🌙" : "☀️"}</span>
        </button>
      </div>
    </div>
  );
}
