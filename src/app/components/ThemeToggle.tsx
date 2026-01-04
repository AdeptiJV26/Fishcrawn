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
    <div className="grid grid-cols-4 w-full border-2 border-borderprime rounded-xl min-w-[700px] overflow-hidden bg-sidebar-01">
      
      {/* Description Area (Left 3/4) */}
      <div className="col-span-3 flex flex-col justify-center px-4 py-2 border-r-2 border-borderprime bg-sidebar-01">
        <span className="text-[10px] font-black uppercase text-title-01 tracking-widest opacity-70">
          Environment Control
        </span>
        <span className="text-[11px] font-bold text-sidebar-03 uppercase">
          {isDark ? "Midnight Protocol Active" : "Daylight System Enabled"}
        </span>
      </div>

      {/* Control Area (Right 1/4) */}
      <div className="col-span-1 flex items-center justify-center p-1 bg-secondary/10">
        <button
          onClick={toggleTheme}
          className="w-full h-full flex items-center justify-center rounded-lg bg-mode text-title-02 transition-all hover:bg-highlighter hover:text-sidebar-03 border-2 border-button-01 shadow-inner active:scale-90"
          title="Toggle System Theme"
        >
          <span className="text-xl leading-none">
            {isDark ? "🌙" : "☀️"}
          </span>
        </button>
      </div>

    </div>
  );
}