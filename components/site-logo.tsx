type Props = {
  className?: string;
  /** Larger mark for footer / hero */
  variant?: "header" | "footer";
};

/**
 * Signal mark — a rising path with two nodes.
 * Not letters. Reads as motion / making / shipping.
 */
export function SiteLogo({ className = "", variant = "header" }: Props) {
  const size =
    variant === "footer"
      ? "h-11 w-11 sm:h-12 sm:w-12"
      : "h-9 w-9 shrink-0 sm:h-10 sm:w-10";

  const plate = variant === "footer" ? "fill-white" : "fill-foreground";
  const mark = variant === "footer" ? "fill-black" : "fill-background";
  const stroke = variant === "footer" ? "stroke-black" : "stroke-background";

  return (
    <svg
      className={`${size} ${className}`.trim()}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="1" y="1" width="38" height="38" rx="12" className={plate} />
      <path
        d="M11 26.2C12.4 17.8 20.2 12.2 28.4 13.8"
        className={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="11" cy="26.2" r="2.05" className={mark} />
      <circle cx="28.6" cy="13.7" r="2.85" className={mark} />
    </svg>
  );
}
