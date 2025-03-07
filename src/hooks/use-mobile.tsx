
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024
const DESKTOP_BREAKPOINT = 1280

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Add event listener for window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(
    typeof window !== 'undefined' 
      ? window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < TABLET_BREAKPOINT 
      : false
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial value
    setIsTablet(window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < TABLET_BREAKPOINT)
    
    // Add event listener for window resize
    const handleResize = () => {
      setIsTablet(window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < TABLET_BREAKPOINT)
    }
    
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isTablet
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth >= DESKTOP_BREAKPOINT : true
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial value
    setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    
    // Add event listener for window resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    }
    
    window.addEventListener("resize", handleResize)
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isDesktop
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const media = window.matchMedia(query)
    
    // Set initial value
    setMatches(media.matches)
    
    // Define callback to handle changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }
    
    // Add event listener
    media.addEventListener("change", listener)
    
    // Clean up
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}
