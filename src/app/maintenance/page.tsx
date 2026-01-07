import Link from "next/link";
import GoHome from "../components/goHome";
import ThemeToggle from "../components/ThemeToggle";

export default function NotFound() {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="flex min-h-24">
          <div className="relative flex flex-col items-center justify-center">
            <GoHome />
          </div>
          
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-txt-02">
                Page Under Maintenance
              </h2>
              <p className="text-txt-01 mt-2">
                Contact Administrator for assistance...
              </p>
            </div>
            <div className="h-[50vh] aspect-square'" id="maintenanceImg"></div>
          </div>
      </div>
    </>
  );
}
