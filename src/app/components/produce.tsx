"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client"; // Path to your client file

export default function Produce() {
  const [niyog, setFish] = useState<any>(null);
  const [copra, setCopra] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    async function getStock() {
      const { data } = await supabase.from("inventory").select("*");

      if (data) {
        setFish(data.find((item) => item.item_name === "Fish"));
        setCopra(data.find((item) => item.item_name === "Copra"));
      }
    }
    getStock();
  }, []);

  return (
    <>
      <div className="p-6 bg-mode/40 rounded-xl border-2 border-borderprime gap-6 flex flex-col justify-center items-center h-48">
        <p className="text-sm text-title-01 font-black uppercase border-mode tracking-widest">
          {niyog?.item_name || "Loading..."}
        </p>
        <p className="text-3xl font-black text-text-01">
          {niyog?.quantity || 0}
        </p>
      </div>
      <div className="p-6 bg-mode/40 rounded-xl border-2 border-borderprime gap-6 flex flex-col justify-center items-center h-48">
        <p className="text-sm text-title-01 font-black uppercase border-mode tracking-widest">
          {copra?.item_name || "Loading..."}
        </p>
        <p className="text-3xl font-black text-text-01">
          {copra?.quantity || 0}
        </p>
      </div>
    </>
  );
}
