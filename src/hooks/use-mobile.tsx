
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
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

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
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
