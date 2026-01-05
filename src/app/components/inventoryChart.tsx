"use client";
import { useState } from "react";

export default function InventoryChartFish() {
  const [view, setView] = useState<"both" | "fish" | "copra">("both");

  const data = [
    { label: "Jan", fish: 205, copra: 520 }, { label: "Feb", fish: 540, copra: 420 },
    { label: "Mar", fish: 0, copra: 20 }, { label: "Apr", fish: 0, copra: 0 },
    { label: "May", fish: 0, copra: 0 }, { label: "Jun", fish: 0, copra: 20 },
    { label: "Jul", fish: 0, copra: 0 }, { label: "Aug", fish: 0, copra: 505 },
    { label: "Sep", fish: 0, copra: 0 }, { label: "Oct", fish: 0, copra: 0 },
    { label: "Nov", fish: 321, copra: 0 }, { label: "Dec", fish: 126, copra: 120 },
  ];

  // 1. Find the highest value in the entire dataset to set the scale
  const maxValue = Math.max(...data.flatMap(d => [d.fish, d.copra]), 100);

  const isBoth = view === "both";
  const barWidth = isBoth ? "w-3" : "w-10";
  const depthWidth = isBoth ? "w-1" : "w-3";

  return (
    <div className="w-full bg-secondary/30 p-6 rounded-xl border border-misc-03 flex flex-col gap-10">
      {/* ... Toggle Buttons ... */}
      <div className="flex justify-between items-center">
        <h3 className="text-txt-02 font-bold uppercase tracking-wider text-title-01">Inventory Analysis</h3>
        <div className="flex bg-secondary/50 p-1 rounded-lg border border-misc-03 text-xs font-bold">
          <button onClick={() => setView("fish")} className={`px-3 py-1 rounded transition ${view === 'fish' ? 'bg-purple-500 text-white' : 'text-txt-01'}`}>FISH</button>
          <button onClick={() => setView("both")} className={`px-3 py-1 rounded transition ${view === 'both' ? 'bg-misc-03 text-white' : 'text-txt-01'}`}>BOTH</button>
          <button onClick={() => setView("copra")} className={`px-3 py-1 rounded transition ${view === 'copra' ? 'bg-amber-500 text-white' : 'text-txt-01'}`}>COPRA</button>
        </div>
      </div>

      <div className="relative h-64 w-full flex items-end justify-around px-4" style={{ perspective: "1000px" }}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full h-full justify-end">
            <div className={`flex items-end justify-center w-full h-full transition-all duration-500 ${isBoth ? 'gap-1' : 'gap-0'}`}>
              
              {/* Fish Bar */}
              {(view === "both" || view === "fish") && (
                <div 
                  className={`group relative bg-purple-500 transition-all duration-500 ${barWidth}`}
                  // 2. Normalize height: (Value / Max) * 100
                  style={{ 
                    height: `${(item.fish / maxValue) * 100}%`, 
                    transform: "rotateY(-20deg) rotateX(5deg)", 
                    transformStyle: "preserve-3d" 
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-bold whitespace-nowrap">
                    {item.fish} kg
                  </div>
                  <div className={`absolute top-0 right-0 h-full bg-purple-700 origin-right [transform:rotateY(90deg)] ${depthWidth}`} />
                  <div className="absolute top-0 left-0 w-full h-2 bg-purple-400 origin-top [transform:rotateX(90deg)]" />
                </div>
              )}

              {/* Copra Bar */}
              {(view === "both" || view === "copra") && (
                <div 
                  className={`group relative bg-amber-500 transition-all duration-500 ${barWidth}`}
                  // 2. Normalize height: (Value / Max) * 100
                  style={{ 
                    height: `${(item.copra / maxValue) * 100}%`, 
                    transform: "rotateY(-20deg) rotateX(5deg)", 
                    transformStyle: "preserve-3d" 
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-bold whitespace-nowrap">
                    {item.copra} kg
                  </div>
                  <div className={`absolute top-0 right-0 h-full bg-amber-700 origin-right [transform:rotateY(90deg)] ${depthWidth}`} />
                  <div className="absolute top-0 left-0 w-full h-2 bg-amber-300 origin-top [transform:rotateX(90deg)]" />
                </div>
              )}

            </div>
            <span className="text-[10px] text-txt-01 font-bold mt-6 uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}