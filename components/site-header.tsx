"use client";

import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteShell } from "@/lib/layout";
import { mainNav, routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { brandMark, eyebrowHighlight, navLink } from "@/lib/typography";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function SiteHeader() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const menu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex h-[100dvh] w-full flex-col bg-background pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] lg:hidden"
          >
            <div
              className={`flex min-h-16 shrink-0 items-center justify-between gap-3 sm:min-h-[4.5rem] ${siteShell}`}
            >
              <Link
                href={routes.home}
                onClick={closeMenu}
                className={`group/logo flex w-fit min-w-0 shrink cursor-pointer items-center gap-2.5 ${brandMark} sm:gap-3`}
              >
                <SiteLogo className="shrink-0" />
                <span className="truncate">{site.brand}</span>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-colors hover:bg-background/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight dark:bg-surface-elevated/80"
                aria-label="Close main menu"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto overscroll-contain p-6 sm:p-8">
              <nav aria-label="Mobile Navigation" className="flex flex-col gap-6 pt-4">
                <ul className="flex flex-col gap-5">
                  {mainNav.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={active ? "page" : undefined}
                          className={`font-display text-[clamp(2rem,8vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight ${
                            active ? "text-foreground" : "text-foreground/80 hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: mainNav.length * 0.08,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-6 border-t border-border/60 pt-6"
              >
                <div className="space-y-1.5">
                  <p className={eyebrowHighlight}>Direct Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="block break-all font-sans text-lg font-medium leading-snug tracking-[-0.015em] text-foreground transition-colors hover:text-highlight"
                  >
                    {site.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.getElementById("site-overlays") ?? document.body
    );

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
        <div
          className={`relative grid min-h-16 grid-cols-[1fr_auto] items-center gap-3 sm:min-h-[4.5rem] lg:grid-cols-[1fr_auto_1fr] ${siteShell}`}
        >
          <Link
            href={routes.home}
            className={`group/logo flex w-fit min-w-0 shrink cursor-pointer items-center gap-2.5 justify-self-start ${brandMark} sm:gap-3`}
          >
            <SiteLogo className="shrink-0 transition-transform duration-300 ease-out group-hover/logo:scale-105" />
            <span className="truncate">{site.brand}</span>
          </Link>

          <nav aria-label="Primary" className="hidden justify-self-center lg:block">
            <ul className="flex items-center gap-1 lg:gap-2">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex min-h-10 cursor-pointer items-center justify-center px-3 py-1.5 ${navLink} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight ${
                        active
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {item.label}
                      {active ? (
                        <span
                          className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground"
                          aria-hidden
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex min-w-0 shrink items-center justify-end gap-2 justify-self-end sm:gap-3">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-colors hover:bg-background/80 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight dark:bg-surface-elevated/80 dark:hover:bg-background/10 lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Open main menu"
            >
              <div className="relative flex h-4 w-4 flex-col justify-between">
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
              </div>
            </button>
          </div>
        </div>
      </header>
      {menu}
    </>
  );
}
