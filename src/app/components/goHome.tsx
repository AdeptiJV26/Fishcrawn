import Link from "next/link";

export default function GoHome() {
  return (
    <div className="absolute top-0 left-0 border-2 border-button-01 bg-primary hover:bg-button-02 rounded-lg transition">
      <Link
        href="/"
        className="flex flex-row text-misc-01 font-bold rounded-lg hover:opacity-80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9 stroke-[2.5] text-icon-01 hover:text-icon-02"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </Link>
    </div>
  );
}
