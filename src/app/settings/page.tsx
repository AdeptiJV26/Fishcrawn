import Link from "next/link";
import GoHome from "../components/goHome";
import ThemeToggle from "../components/ThemeToggle";

export default function Settings() {
  return (
    <>
      <div className="w-full text-2xl">
        <div className="relative flex flex-col justify-center items-center w-full">
          <span className="w-auto h-auto">
            <GoHome />
          </span>
          <span className="flex justify-center text-title-01  text-4xl items-center w-full uppercase font-bold text-center pb-10">
            Settings
          </span>
        </div>
        <div className="bg-mode/50 border-4 border-borderprime rounded-md mx-5 mt-10">
          <div className="flex max-w-none min-h-28  justify-center items-center border-t-4 border-mode">
            <div className="flex flex-[3] justify-center items-center text-title-02 uppercase font-bold">
              Day / Night Toggle
            </div>
            <div className="flex flex-[2] justify-center items-center">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex max-w-none min-h-28  justify-center items-center border-t-4 border-mode">
            <div className="flex flex-[3] justify-center items-center text-title-02 uppercase font-bold">
              Password
            </div>
            <div className="flex flex-[2] justify-center items-center">
              <button className="bg-mode-reverse h-12 border-2 border-borderprime aspect-square rounded-lg flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-mode"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
