import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

/**
 * Remonte en haut à chaque changement de page et suit les ancres (/#contact).
 * Un simple changement de paramètre (?categorie=…) ne fait pas défiler la page.
 */
export function ScrollManager() {
  const { pathname, search, hash, key } = useLocation()
  const previous = useRef({ pathname, search })

  useEffect(() => {
    const searchOnly = previous.current.pathname === pathname && previous.current.search !== search
    previous.current = { pathname, search }

    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    } else if (!searchOnly) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, search, hash, key])

  return null
}
