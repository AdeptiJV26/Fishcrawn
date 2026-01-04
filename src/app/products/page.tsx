import Link from "next/link";
import GoHome from "../components/goHome";
import ThemeToggle from "../components/ThemeToggle";


const products = [
  { id: 1, name: "Milkfish", price: "₱160/kg", stock: 0, category: "Seafood" },
  {
    id: 2,
    name: "King Crab",
    price: "₱505/kg",
    stock: 20,
    category: "Seafood",
  },
  { id: 3, name: "Copra", price: "₱14/kilo", stock: 124, category: "Produce" },
  { id: 4, name: "Niyog", price: "₱10/buko", stock: 120, category: "Produce" },
  { id: 5, name: "Prawn", price: "₱200/kilo", stock: 120, category: "Seafood" },
];

export default function Products() {
  return (
    <div className="relative flex flex-col w-full pt-2">
      <div className="flex flex-col flex-1 justify-start items-center">
         <GoHome />
        <h1 className="text-title-01  text-4xl uppercase font-bold text-center mb-10">
          Products
        </h1>
      </div>

      {/* Product List Container */}
      <div className="flex flex-col gap-4 overflow-y-auto max-w-4xl mx-auto w-full pr-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 bg-secondary/20 border-2 border-misc-03 rounded-xl hover:border-purple-500 transition-colors group"
          >
            <div className="flex flex-col items-start">
              <span className="text-xs font-bold text-title-01 uppercase tracking-widest">
                {product.category}
              </span>
              <h2 className="text-xl font-bold text-title-02">
                {product.name}
              </h2>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-xs text-txt-01 uppercase font-semibold">
                  Stock
                </p>
                <p
                  className={`font-bold ${
                    product.stock < 20 ? "text-red-500" : "text-txt-02"
                  }`}
                >
                  {product.stock}
                </p>
              </div>

              <div className="text-right min-w-[100px]">
                <p className="text-xs text-txt-01 uppercase font-semibold">
                  Price
                </p>
                <p className="text-lg font-bold text-amber-500">
                  {product.price}
                </p>
              </div>

              <button className="bg-misc-02/20 border border-border-01 text-txt-02 px-4 py-2 rounded-lg font-bold text-sm  hover:bg-misc-01 transition">
                DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
