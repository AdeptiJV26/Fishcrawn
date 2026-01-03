import type { Metadata } from "next";
import Link from "next/link"; // 1. Import Link
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
    <html lang="en">
      <body className="flex h-screen bg-primary/90 text-slate-900 antialiased">
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
