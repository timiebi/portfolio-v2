"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
  "[data-cursor-hover]",
  "label[for]",
].join(", ");

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(0);
  
  const isVisible = useRef(false);
  const isHovering = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    if (reduceMotion.matches || coarse.matches) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      
      // Update visibility on first move
      if (!isVisible.current) {
        isVisible.current = true;
        if (containerRef.current) {
          containerRef.current.setAttribute("data-visible", "true");
        }
      }

      // Check hover hit
      const hit = (e.target as Element | null)?.closest(INTERACTIVE_SELECTOR);
      const shouldHover = Boolean(hit);
      if (shouldHover !== isHovering.current) {
        isHovering.current = shouldHover;
        if (ringRef.current) {
          ringRef.current.setAttribute("data-hover", shouldHover ? "true" : "false");
        }
      }
    };

    const leaveWindow = () => {
      isVisible.current = false;
      if (containerRef.current) {
        containerRef.current.setAttribute("data-visible", "false");
      }
    };

    const loop = () => {
      dotPos.current.x = lerp(dotPos.current.x, target.current.x, 0.38);
      dotPos.current.y = lerp(dotPos.current.y, target.current.y, 0.38);
      ringPos.current.x = lerp(ringPos.current.x, target.current.x, 0.14);
      ringPos.current.y = lerp(ringPos.current.y, target.current.y, 0.14);

      const ring = ringRef.current;
      const dot = dotRef.current;
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px,${ringPos.current.y}px,0) translate(-50%,-50%)`;
      }
      if (dot) {
        dot.style.transform = `translate3d(${dotPos.current.x}px,${dotPos.current.y}px,0) translate(-50%,-50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.body.addEventListener("mouseleave", leaveWindow);

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseleave", leaveWindow);
      cancelAnimationFrame(rafRef.current);
      root.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      data-visible="false"
      className="custom-cursor-root pointer-events-none fixed inset-0 z-10050 opacity-0 data-[visible=true]:opacity-100 transition-opacity duration-200"
    >
      <div
        ref={ringRef}
        data-hover="false"
        className="custom-cursor-ring absolute left-0 top-0 h-9 w-9 rounded-full border border-highlight/40 bg-highlight/5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_8%,transparent)] transition-[height,width,border-color,background-color] duration-300 ease-out will-change-transform dark:border-highlight/50 dark:bg-highlight/10 data-[hover=true]:h-11 data-[hover=true]:w-11 data-[hover=true]:border-highlight/65 data-[hover=true]:dark:border-highlight/70"
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot absolute left-0 top-0 h-[5px] w-[5px] rounded-full bg-highlight shadow-sm will-change-transform"
      />
    </div>
  );
}
