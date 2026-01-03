import InventoryChartFish from "./components/inventoryChart";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-title-01 text-2xl font-bold mb-6">Overview</h1>
      <div className="mb-4">
        <InventoryChartFish />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-misc-01 rounded-xl shadow-sm border-2 border-border-01">
          <p className="text-sm text-txt-02 uppercase">Total Fish Stock  "(kilo)"</p>
          <p className="text-3xl font-bold">20</p>
        </div>
        <div className="p-6 bg-misc-01 rounded-xl shadow-sm border-2 border-border-01">
          <p className="text-sm text-txt-02 uppercase">Total Produce Stock  "(kilo)"</p>
          <p className="text-3xl font-bold">1,284</p>
        </div>
        <div className="p-6 bg-misc-01 rounded-xl shadow-sm border-2 border-border-01">
          <p className="text-sm  text-txt-02 uppercase">Low Stock Alert</p>
          <p className="text-3xl font-bold text-orange-600">12</p>
        </div>
        <div className="p-6 bg-misc-01 rounded-xl shadow-sm border-2 border-border-01">
          <p className="text-sm text-txt-02 uppercase">Out of Stock</p>
          <p className="text-3xl font-bold text-red-600">3</p>
        </div>
      </div>
    </div>
  );
}
