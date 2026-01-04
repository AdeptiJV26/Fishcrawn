import Link from "next/link";
import GoHome from "../components/goHome";
import ThemeToggle from "../components/ThemeToggle";

export default function Settings() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center">
      <div className="flex flex-col flex-1">
        <GoHome />

        <span className="flex justify-center text-title-01 text-4xl items-center w-full uppercase font-bold text-center pb-10">
          Settings
        </span>
        <div className="flex flex-col justify-start items-center w-full">
          <ThemeToggle />
        </div>

        

      </div>
    </div>
  );
}
