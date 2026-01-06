import InventoryChartFish from "./components/inventoryChart";
import ExpensePieChart from "./components/piechart";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-title-01 text-4xl font-black uppercase tracking-tighter">
        Overview
      </h1>

      <div className="w-full">
        <InventoryChartFish />
      </div>

      {/* Main Container: 2/3 for cards, 1/3 for Chart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-mode/40 rounded-xl border-2 border-borderprime gap-6 flex flex-col justify-center items-center h-48">
            <p className="text-sm text-title-01 font-black uppercase border-mode tracking-widest">
              Bangus Stocks
            </p>
            <p className="text-3xl font-black text-text-01">27<span>pcs</span></p>
          </div>

          <div className="p-6 bg-mode/40 rounded-xl border-2 border-borderprime gap-6 flex flex-col justify-center items-center h-48">
            <p className="text-sm text-title-01 font-black uppercase tracking-widest">
              King Crab Stocks
            </p>
            <p className="text-3xl font-black text-text-01">3<span>pcs</span></p>
          </div>

          <div className="p-6 bg-mode/40 rounded-xl border-2 border-borderprime gap-6 flex flex-col justify-center items-center h-48">
            <p className="text-sm text-title-01 font-black uppercase tracking-widest">
              Niyog Stocks
            </p>
            <p className="text-3xl font-black text-text-01">12<span>pcs</span></p>
          </div>

          <div className="p-6 bg-mode/40 rounded-xl border-2 border-borderprime gap-6 flex flex-col justify-center items-center h-48">
            <p className="text-sm text-title-01 font-black uppercase tracking-widest">
              Copra Stocks
            </p>
            <p className="text-3xl font-black text-text-01">3<span>pcs</span></p>
          </div>

          {/* NEW CARDS added here will stay inside this 2-column zone */}
        </div>

        {/* RIGHT SIDE: Isolated Chart Zone (Fixed 3rd column) */}
        <div className="md:col-span-1 h-full min-h-[300px]">
          <div className="sticky top-6 bg-mode/40 rounded-xl border-2 border-borderprime overflow-hidden h-full">
            <ExpensePieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
