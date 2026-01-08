"use client";
import Link from "next/link";
import GoHome from "../components/goHome";
import ThemeToggle from "../components/ThemeToggle";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function Expenses() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    async function getTransactions() {
      const { data } = await supabase.from("transactions").select("*");
      if (data) setTransactions(data);
    }
    getTransactions();
  }, []);

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="relative grid grid-cols-[1fr_8fr_1fr] items-center justify-center w-full min-h-24">
          <div className="flex flex-col flex-1">
            <GoHome />
          </div>
          <div className="flex justify-center text-title-01 text-4xl items-center w-full uppercase font-bold text-center">
            Expenses
          </div>
          <div className="flex justify-end items-center">
            <button className="flex justify-center items-center h-16 aspect-square border-4 rounded-xl bg-mode-reverse  text-mode hover:text-mode-reverse hover:bg-mode border-button-03 transition-all duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-9"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-row bg-mode-reverse rounded-lg border-3 border-borderprime custom-scrollbar">
          <table className="min-w-full border-collapse text-sm">
            <thead className="sticky top-0 bg-mode-reverse text-mode">
              <tr>
                <th className="px-4 py-2 text-left text-mode">Transaction ID</th>
                <th className="px-4 py-2 text-left text-mode">Item</th>
                <th className="px-4 py-2 text-left text-mode">Quantity</th>
                <th className="px-4 py-2 text-left text-mode">Total Price</th>
                <th className="px-4 py-2 text-left text-mode">Date</th>
              </tr >
            </thead>

            <tbody className="divide-y divide-mode text-mode">
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td className="px-4 py-2 font-mono text-[10px]">
                    {t.id.slice(0, 8).toUpperCase()}
                  </td>
                  <td className="px-4 py-2 uppercase font-bold text-title-01">
                    {t.item_name}
                  </td>
                  <td className="px-4 py-2">{t.quantity}</td>
                  <td
                    className={`px-4 py-2 font-black ${
                      t.type === "income" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {t.type === "income" ? "+" : "-"} ₱
                    {Number(t.amount).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 opacity-60">
                    {new Date(t.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
