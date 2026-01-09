export const TableLoading = () => (
  <div className="flex items-center justify-center w-full h-full">
    <div className="text-center font-bold animate-pulse text-title-01 uppercase tracking-widest">
      LOADING TRANSACTIONS...
    </div>
  </div>
);


export const TableEmpty = () => (
<div className="flex flex-1 items-center justify-center w-full min-h-50 w-full">
  <div className="text-center font-bold animate-pulse text-title-01 uppercase tracking-widest">
      No transactions recorded.
    </div>
  </div>
);