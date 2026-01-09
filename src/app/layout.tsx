import type { Metadata } from "next";
import "../style/globals.css";
import ParticlesBG from "./components/particles";
import LogoutPanel from "./components/logout";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Inventory System",
  description: "Manage income and expenses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-primary text-text-01"
    >
      <body className="flex h-screen antialiased">
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesBG />

          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <LogoutPanel />
            <main className="flex-1 overflow-y-auto px-4 py-2">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
