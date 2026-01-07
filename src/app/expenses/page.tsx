import Link from "next/link";
import GoHome from "../components/goHome";
import ThemeToggle from "../components/ThemeToggle";

export default function Expenses() {
  return (
    <>
      <div className="relative grid grid-cols-[1fr_8fr_1fr] items-center justify-center w-full items-center min-h-24">
        <div className="flex flex-col flex-1">
          <GoHome />
        </div>
        <div className="flex justify-center text-title-01 text-4xl items-center w-full uppercase font-bold text-center">
          Expenses
        </div>
        <div className="flex justify-end items-center">
          <button className="flex justify-center items-center h-16 aspect-square border-4 rounded-xl bg-mode-reverse  text-mode hover:text-mode-reverse hover:bg-mode border-button-03 transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-9"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      
    </>
  );
}
