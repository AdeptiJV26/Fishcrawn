import InventoryChartFish from "./components/inventoryChart";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-title-01 text-2xl font-bold mb-6">Overview</h1>
      <div className="mb-4">
        <InventoryChartFish />
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="grid grid-cols-4 md:grid-cols-3 gap-6 w-full justify-center items-center">
          <div className="p-6 bg-mode/40 rounded-xl shadow-sm border-2 border-border-01">
            <p className="text-sm text-title-01 uppercase">Total Fish Stock</p>
            <p className="text-3xl text-txt-01 font-bold">20</p>
          </div>
          <div className="p-6 bg-mode/40 rounded-xl shadow-sm border-2 border-border-01">
            <p className="text-sm text-title-01 uppercase">
              Total Produce Stock
            </p>
            <p className="text-3xl text-txt-01 font-bold">1,284</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-04">
        <div className="grid grid-cols-4 md:grid-cols-3 gap-6 w-full justify-center items-center">
          <div className="p-6 bg-mode/40 rounded-xl shadow-sm border-2 border-border-01">
            <p className="text-sm  text-title-01 uppercase">Low Stock Alert</p>
            <p className="text-3xl text-txt-01 font-bold text-orange-600">12</p>
          </div>
          <div className="p-6 bg-mode/40 rounded-xl shadow-sm border-2 border-border-01">
            <p className="text-sm text-title-01 uppercase">Out of Stock</p>
            <p className="text-3xl text-txt-01 font-bold text-red-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
