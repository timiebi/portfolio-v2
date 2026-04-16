import { useSyncExternalStore } from "react";

function subscribeToNothing() {
  return () => {};
}

/** True on the client after hydration; false on the server and initial SSR payload. */
export function useHydrated() {
  return useSyncExternalStore(subscribeToNothing, () => true, () => false);
}
