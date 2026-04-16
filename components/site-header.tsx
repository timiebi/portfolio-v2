"use client";

import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteShell } from "@/lib/layout";
import { mainNav, routes } from "@/lib/routes";
import { site } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 pt-[env(safe-area-inset-top)] dark:bg-background/92">
      <div
        className={`flex min-h-16 items-center justify-between gap-3 sm:min-h-18 sm:gap-4 ${siteShell}`}
      >
        <Link
          href={routes.home}
          className="group/logo flex min-w-0 max-w-[min(100%,15rem)] shrink cursor-pointer items-center gap-2.5 font-display text-sm font-semibold tracking-[-0.02em] text-foreground min-[400px]:max-w-[min(100%,18rem)] min-[400px]:gap-3 sm:max-w-[min(100%,22rem)] sm:text-[0.9375rem] md:max-w-none"
        >
          <SiteLogo className="shrink-0 transition-transform duration-300 ease-out group-hover/logo:scale-105" />
          <span className="truncate sm:hidden">{site.nameShort}</span>
          <span className="hidden truncate sm:inline">{site.name}</span>
        </Link>

        <div className="flex min-w-0 shrink items-center justify-end gap-1.5 sm:gap-3">
          <ThemeToggle />
          <nav
            aria-label="Primary"
            className="nav-scroll-x max-w-full min-w-0 overflow-x-auto sm:overflow-visible"
          >
            <ul className="flex w-max max-w-full items-center gap-px rounded-full border border-border/80 bg-surface p-px dark:bg-surface-elevated sm:w-auto">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-flex min-h-9 cursor-pointer items-center justify-center rounded-full px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight min-[380px]:px-2.5 min-[380px]:tracking-[0.18em] sm:min-h-10 sm:px-3 sm:text-xs sm:tracking-[0.2em] ${
                        active
                          ? "bg-background text-foreground shadow-sm dark:bg-background/15"
                          : "text-muted hover:bg-background/80 hover:text-foreground dark:hover:bg-background/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
