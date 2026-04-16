type Props = {
  className?: string;
  /** Larger mark for footer / hero */
  variant?: "header" | "footer";
};

/**
 * Custom mark: shared vertical stem with mid crossbar (T) and K legs — TK / Timiebi Kosu.
 * Renders as crisp SVG; uses theme colors (light/dark).
 */
export function SiteLogo({ className = "", variant = "header" }: Props) {
  const size = variant === "footer" ? "h-11 w-11 sm:h-12 sm:w-12" : "h-9 w-9 shrink-0";

  return (
    <svg
      className={`${size} ${className}`.trim()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        className="fill-surface stroke-border dark:fill-surface-elevated"
        strokeWidth="1"
      />
      <path
        d="M11 11v18M11 20h8.5M11 20l10.5 9M11 20l10.5-9"
        className="stroke-foreground"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28.5" cy="11.5" r="2.75" className="fill-highlight" />
    </svg>
  );
}
