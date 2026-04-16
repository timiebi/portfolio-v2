/**
 * Shared max width + horizontal padding (scales down on narrow phones).
 * `min-w-0` prevents flex/grid children from forcing horizontal overflow.
 * Safe-area insets respect notched devices.
 */
export const siteShell =
  "mx-auto w-full min-w-0 max-w-[92rem] px-4 min-[400px]:px-5 sm:px-6 md:px-8 lg:px-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

/**
 * Project grids — scales up with the wider shell (was max-w-6xl).
 */
export const projectsGridShell = "mx-auto w-full max-w-[min(84rem,100%)]";
