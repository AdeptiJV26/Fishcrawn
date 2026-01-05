import Link from "next/link";
import GoHome from "../components/goHome";
import ThemeToggle from "../components/ThemeToggle";

export default function Settings() {
  return (
    <>
      <div className="container w-full">
        <div className="relative flex flex-col justify-center items-center w-full">
          <span className="w-auto h-auto">
            <GoHome />
          </span>
          <span className="flex justify-center text-title-01  text-4xl items-center w-full uppercase font-bold text-center pb-10">
            Settings
          </span>
        </div>

        <div className="grid grid-cols-5 w-full items-center bg-mode-light border-borderprime border-2 rounded-lg p-2">
          <div className="col-span-4 text-title-01 ml-2 font-bold">Daylight Toggle</div>
          <div className="col-span-1 flex justify-center items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
