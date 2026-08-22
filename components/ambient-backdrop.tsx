export function AmbientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid lives on body (bg-grid-faint) so it covers the full viewport under fixed UI */}
      {/* Light: soft highlight wash — reads as airy */}
      <div
        className="absolute -top-[40%] left-1/2 h-[85vh] w-[min(140vw,1200px)] -translate-x-1/2 rounded-[50%] dark:hidden animate-light-blob"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 42%, color-mix(in oklab, var(--highlight) 11%, transparent) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-0 right-[-20%] h-[50vh] w-[70vw] rounded-[50%] opacity-75 dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 60% 70%, color-mix(in oklab, var(--highlight) 7%, transparent) 0%, transparent 62%)",
        }}
      />
      {/* Dark: premium cyan/highlight ambient glow for modern tech aesthetic */}
      <div
        className="absolute inset-0 hidden dark:block animate-dark-backdrop"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% -10%, color-mix(in oklab, var(--highlight) 5%, transparent) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 85% 100%, color-mix(in oklab, var(--highlight) 3%, transparent) 0%, transparent 55%)
          `,
        }}
      />
    </div>
  );
}
