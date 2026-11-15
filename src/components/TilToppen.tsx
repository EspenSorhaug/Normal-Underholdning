import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroller til toppen når man bytter side. BrowserRouter gjør ikke dette selv,
// så uten denne starter en ny side på samme scrollposisjon som forrige.
export default function TilToppen() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    // 'instant' overstyrer scroll-behavior: smooth i index.css, så ny side
    // starter på toppen i stedet for å gli opp dit.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
