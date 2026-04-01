/**
* This code defines a custom React hook, useIsMobile, used to determine whether the
* user is currently on a mobile-sized viewport based on a breakpoint (768px).
* Although shadcn provides responsive UI primitives, it does not ship with a built-in
* hook for viewport detection, meaning developers need to implement this logic themselves.
* This hook fills that gap and becomes especially useful when building responsive
* behaviors like conditional sidebars, drawers, or layout changes.
*/

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
