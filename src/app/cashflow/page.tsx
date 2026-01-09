"use client";
import GoHome from "../components/goHome";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState, useMemo } from "react";

interface Product {
  id: string;
  name: string;
}

export default function Cashflow() {
  const [activeSide, setActiveSide] = useState<"income" | "expense">("income");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    async function getCashflow() {
      setLoading(true);
      const { data } = await supabase.from("products").select("*");
      if (data) setProducts(data as Product[]);
      setLoading(false);
    }
    getCashflow();
  }, [supabase]);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <div className="relative grid grid-cols-[1fr_1fr_1fr] items-center justify-center w-full min-h-24">
        <div className="flex justify-center items-center w-full h-full">
          <GoHome />
        </div>
        <div className="flex justify-center text-title-01 text-4xl items-center w-full uppercase font-bold text-center">
          Cashflow
        </div>
        <div></div>
      </div>

      <div className="bg-mode-reverse flex flex-1 border-mode border-3 rounded-xl">
        <div className="flex flex-1 w-full border-mode border-3 rounded-xl p-2 transition-all duration-500 ease-in-out overflow-hidden ">
          {/* LEFT SIDE: INCOME */}
          <div
            onClick={() => setActiveSide("income")}
            className={`relative transition-all duration-700 ease-in-out flex flex-col p-6 cursor-pointer border-r-4 border-borderprime ${
              activeSide === "income"
                ? "flex-10 bg-mode/50 border-2 rounded-lg"
                : "flex-1 bg-mode/90 hover:bg-highlighter/20"
            }`}
          >
            <div
              className={`transition-opacity duration-500 ${
                activeSide === "income" ? "opacity-100" : "opacity-0 invisible"
              }`}
            >
              <h2 className="text-4xl font-black text-green-500">INCOME</h2>
              {!loading && products.length > 0 && (
                <p className="text-xs opacity-50 uppercase mt-2">
                  {products.length} Products Loaded
                </p>
              )}
            </div>

            {activeSide !== "income" && (
              <span className="absolute inset-0 flex items-center justify-center rotate-180 [writing-mode:vertical-lr] font-bold text-green-500 text-4xl uppercase tracking-widest">
                Register Income
              </span>
            )}
          </div>

          {/* RIGHT SIDE: EXPENSE */}
          <div
            onClick={() => setActiveSide("expense")}
            className={`relative transition-all duration-700 ease-in-out flex flex-col p-6 cursor-pointer ${
              activeSide === "expense"
                ? "flex-10 bg-mode/10"
                : "flex-1 bg-mode/90 hover:bg-highlighter/20"
            }`}
          >
            <div
              className={`transition-opacity duration-500 ${
                activeSide === "expense" ? "opacity-100" : "opacity-0 invisible"
              }`}
            >
              <h2 className="text-4xl font-black text-red-500">EXPENSE</h2>
            </div>

            {activeSide !== "expense" && (
              <span className="absolute inset-0 flex items-center justify-center [writing-mode:vertical-lr] font-bold text-red-500 text-4xl uppercase tracking-widest">
                Register Expenses
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
