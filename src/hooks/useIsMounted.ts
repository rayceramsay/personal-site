'use client'

import { useSyncExternalStore } from 'react'

// useSyncExternalStore lets us return different values on the server vs client
// without causing a hydration mismatch. The server snapshot (false) and the
// client snapshot (true) are both used during hydration so React sees a
// consistent render, then switches to true once hydration is complete.
export function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}
