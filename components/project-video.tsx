"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  width: number;
  height: number;
  label: string;
};

/**
 * Muted looping preview. React doesn't serialize `muted` into SSR HTML, so browsers can
 * refuse the native `autoPlay` — we set `muted` on the element and drive play/pause
 * ourselves, only while the card is on screen.
 */
export function ProjectVideo({ src, poster, width, height, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (reduce) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Rejected in e.g. iOS Low Power Mode — the poster stays visible.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      className="h-auto w-full"
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
