"use client";
import GoHome from "../components/goHome";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState, useMemo } from "react";
import { TableEmpty, TableLoading } from "../components/tablestates";

interface Product {
  id: string;
  name: string;
  category: string;
  total_quantity: number;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const { data } = await supabase.from("products").select("*");
      if (data) setProducts(data as Product[]);
      setLoading(false);
    }
    getProducts();
  }, [supabase]);

  return (
    <div className="flex flex-col h-screen w-full">
      {/* HEADER */}
      <div className="flex flex-col items-center py-4">
        <GoHome />
        <h1 className="text-title-01 text-4xl uppercase font-bold text-center mb-4">
          Products
        </h1>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-y-auto px-4">
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <TableLoading />
          </div>
        ) : products.length > 0 ? (
          <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-secondary/20 border-2 border-borderprime rounded-xl hover:border-sidebar-03 transition-colors group"
              >
                <div className="flex flex-col items-start">
                  <span className="text-xs font-bold text-title-01 uppercase tracking-widest">
                    Product Name
                  </span>
                  <h2 className="text-xl font-bold text-title-01">{product.name}</h2>
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-xs font-bold text-title-01 uppercase tracking-widest">
                    Category
                  </span>
                  <h2 className="text-xl font-bold text-title-01">{product.category}</h2>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <span className="text-xs font-bold text-title-01 uppercase tracking-widest">
                      Stocks
                    </span>
                    <p
                      className={`font-bold ${
                        product.total_quantity < 20 ? "text-red-500 text-base" : "text-text-01"
                      }`}
                    >
                      {product.total_quantity}
                    </p>
                  </div>

                  <div className="text-right min-w-25">
                    <span className="text-xs font-bold text-title-01 uppercase tracking-widest">
                      Price (Kilo)
                    </span>
                    <p className="text-lg font-bold text-icon-02">₱ {product.price.toLocaleString()}</p>
                  </div>

                  <button className="bg-button-01 border border-borderprime text-button-02 px-4 py-2 rounded-lg font-bold text-sm hover:bg-secondary transition">
                    DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <TableEmpty />
          </div>
        )}
      </div>
    </div>
  );
}
