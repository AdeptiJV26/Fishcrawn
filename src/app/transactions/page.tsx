"use client";
import GoHome from "../components/goHome";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState, useMemo } from "react";
import { TableLoading, TableEmpty } from "../components/tablestates";


interface Transaction {
  id: string;
  created_at: string;
  movement_quantity: number;
  movement_amount: number;
  ballance_type: "income" | "expense";
  products?: {
    name: string;
  };
}

export default function Expenses() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    async function getTransactions() {
      setLoading(true);
      const { data } = await supabase
        .from("transactions")
        .select("*, products(name)");
      
      if (data) setTransactions(data as Transaction[]);
      setLoading(false);
    }
    getTransactions();
  }, [supabase]); 

  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative grid grid-cols-[1fr_1fr_1fr] items-center justify-center w-full min-h-24">
        <div className="flex flex-col flex-1">
          <GoHome />
        </div>
        <div className="flex justify-center text-title-01 text-4xl items-center w-full uppercase font-bold text-center">
          Transaction Logs
        </div>
        <div></div>
      </div>
      <div className="flex-1 flex flex-row bg-mode-reverse rounded-lg border-3 border-borderprime custom-scrollbar">
        <table className="min-w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-mode-reverse text-mode">
            <tr>
              <th className="px-4 py-2 text-left text-mode">Transaction ID</th>
              <th className="px-4 py-2 text-left text-mode">Item Name</th>
              <th className="px-4 py-2 text-left text-mode">Quantity</th>
              <th className="px-4 py-2 text-left text-mode">Cash Flow</th>
              <th className="px-4 py-2 text-left text-mode">Amount</th>
              <th className="px-4 py-2 text-left text-mode">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-mode text-mode">
            {loading ? (
              <TableLoading />
            ) : transactions.length > 0 ? (
              transactions.map((t) => (
                <tr key={t.id}>
                  <td className="px-4 py-2 font-mono text-[10px]">
                    {t.id.slice(0, 8).toUpperCase()}
                  </td>
                  <td className="px-4 py-2 uppercase font-bold text-title-01">
                    {t.products?.name || "N/A"}
                  </td>
                  <td className="px-4 py-2">{t.movement_quantity}</td>
                  <td className="px-4 py-2">{t.ballance_type}</td>
                  <td
                    className={`px-4 py-2 font-black ${
                      t.ballance_type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {t.ballance_type === "income" ? "+" : "-"} ₱{" "}
                    {Number(t.movement_amount || 0).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 opacity-60">
                    {new Date(t.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <TableEmpty />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}