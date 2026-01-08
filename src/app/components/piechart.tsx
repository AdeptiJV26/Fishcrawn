"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function ExpensePieChart() {
  const [timeframe, setTimeframe] = useState<"day" | "month" | "year">("month");

  const expenseData = {
    day: [{ name: "Fuel", value: 150 }, { name: "Labor", value: 300 }, { name: "Maintenance", value: 50 }],
    month: [{ name: "Fuel", value: 4500 }, { name: "Labor", value: 9000 }, { name: "Logistics", value: 2100 }, { name: "Utilities", value: 1200 }],
    year: [{ name: "Fuel", value: 54000 }, { name: "Labor", value: 108000 }, { name: "Equipment", value: 25000 }, { name: "Tax", value: 15000 }],
  };

  const currentData = expenseData[timeframe];
  const total = currentData.reduce((acc, curr) => acc + curr.value, 0);
  const COLORS = ["#facc15", "#22c55e", "#a855f7", "#3b82f6"];

  return (
    <div className="w-full h-full bg-sidebar-01 p-6 rounded-xl border-2 border-borderprime flex flex-col gap-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-black uppercase tracking-widest text-title-01 text-xs">
          Expense Analysis
        </h3>
        
        <div className="flex bg-secondary/50 p-1 rounded-lg border border-borderprime text-[9px] font-black">
          {["day", "month", "year"].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t as any)}
              className={`px-3 py-1 rounded transition uppercase ${
                timeframe === t ? "bg-highlighter text-sidebar-03 shadow-sm" : "text-title-01 hover:bg-secondary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex-1 min-h-62.5 w-full">
        {/* Absolute Centered Total */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <span className="text-[10px] font-black uppercase text-title-01 opacity-40 tracking-tighter">Total Expense</span>
          <span className="text-2xl font-black text-title-01 tracking-tighter">
            ₱{total.toLocaleString()}
          </span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={currentData}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="95%"
              paddingAngle={4}
              dataKey="value"
              stroke="var(--color-sidebar-01)"
              strokeWidth={4}
              animationDuration={1000}
            >
              {currentData.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  className="hover:opacity-80 transition-opacity cursor-crosshair"
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-sidebar-01)",
                border: "2px solid var(--color-borderprime)",
                borderRadius: "4px",
                fontSize: "10px",
                fontWeight: "900",
                textTransform: "uppercase"
              }}
              itemStyle={{ color: "var(--color-title-01)" }}
              cursor={{ fill: 'transparent' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}