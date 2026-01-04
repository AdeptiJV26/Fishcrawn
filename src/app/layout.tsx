import type { Metadata } from "next";
import Link from "next/link"; 
import "../style/globals.css";
import ParticlesBG from "./components/particles";
import LogoutPanel from "./components/logout";
import Sidebar from "./components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is needed because we are changing the class on the server/client
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
      </head>
      <body className="flex h-screen bg-primary/90 text-txt-01 antialiased transition-colors duration-300">
        <ParticlesBG />

        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <LogoutPanel />
          <main className="flex-1 overflow-y-auto px-4 py-2">{children}</main>
        </div>
      </body>
    </html>
  );
}