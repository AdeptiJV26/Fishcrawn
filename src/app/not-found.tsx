import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {" "}
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 m-0 p-0 border-2 border-border-01 bg-misc-01 rounded-lg hover:bg-misc-03">
          <Link
            href="/"
            className="flex flex-row text-misc-02 font-bold rounded-lg hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 text-txt-02 hover:text-misc-02"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-txt-02">
            404 - Page Not Found
          </h2>
          <p className="text-txt-01 mt-2">Contact Administrator for assistance...</p>
        </div>
        <div className="h-[50vh] aspect-square'" id="notFoundImg"></div>
      </div>
    </>
  );
}
