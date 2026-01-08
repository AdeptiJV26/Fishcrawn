"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Produce() {
  const [products, setProducts] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => { 
    async function getStock() {
      const { data } = await supabase.from("products").select("*");
      if (data) setProducts(data);
    }
    getStock();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div 
          key={product.id} 
          className="p-6 bg-mode/40 rounded-xl border-2 border-borderprime gap-4 flex flex-col justify-center items-center h-48"
        >
          <p className="text-base text-title-01 font-black uppercase tracking-widest opacity-70">
            {product.name}
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-black text-text-01">
              {product.stock_level || 0}
            </p>
            <p className="text-lg font-bold text-text-01/70 uppercase">
              {product.unit || "kg"}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}