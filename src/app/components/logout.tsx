"use client";
import ThemeToggle from "./ThemeToggle";

export default function LogoutPanel() {
  return (
    <header className="bg-secondary/70 h-16 border-b-2 border-borderprime flex items-center justify-end px-3 min-h-20">
      <ThemeToggle />
      <button className="sm:text-sm md:text-base lg:text-lg uppercase transition font-bold px-3 py-3 rounded-2xl border-3 text-icon-01 border-button-01 hover:bg-button-02 hover:text-icon-01 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="size-7 stroke-[1.9]"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </header>
  );
}
