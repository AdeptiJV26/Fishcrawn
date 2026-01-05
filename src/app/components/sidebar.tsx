"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Reports", href: "/reports" },
  { name: "Events", href: "/events" },
  { name: "Settings", href: "/settings" },
  { name: "Error", href: "/pages/pages" },
  { name: "Maintenance", href: "/maintenance" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-secondary/70 flex flex-col z-10">
      <div className="text-title-01 flex justify-start items-center px-6 text-2xl border-b-2 border-borderprime font-bold min-h-[70px]">
        FishCrAwn
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block p-3 rounded transition ${
                isActive
                  ? "bg-highlighter text-sidebar-03 font-bold shadowl-lg rounded-lg"
                  : "text-mode hover:text-sidebar-01 hover:bg-sidebar-02/90 font-bold"
              }`}
            > 
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
