"use client";

import { siteShell } from "@/lib/layout";
import { usePathname } from "next/navigation";

export function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={`${siteShell} min-w-0 flex-1 ${
        isHome
          ? "pb-16 pt-0 sm:pb-20 lg:pb-24"
          : "pb-20 pt-6 sm:pb-24 sm:pt-8 lg:pb-32 lg:pt-12"
      }`}
    >
      {children}
    </main>
  );
}
