import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

/**
 * Remonte en haut à chaque changement de page et suit les ancres (/#contact).
 * Un simple changement de paramètre (?categorie=…) ne fait pas défiler la page.
 */
export function ScrollManager() {
  const { pathname, search, hash, key } = useLocation()
  const previous = useRef<{ pathname: string; search: string } | null>(null)

  useEffect(() => {
    const prev = previous.current
    const samePage = prev !== null && prev.pathname === pathname
    previous.current = { pathname, search }

    if (hash) {
      // En arrivant sur une page, on saute directement : une animation peut être interrompue pendant le chargement.
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant' })
    } else if (!samePage || prev.search === search) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, search, hash, key])

  return null
}
