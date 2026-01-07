import InventoryChartFish from "./components/inventoryChart";
import ExpensePieChart from "./components/piechart";
import Produce from "./components/produce";

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
        <div className="md:col-span-2 grid sm-grid-cols-1 md:grid-cols-2 gap-6">
        <Produce />


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
