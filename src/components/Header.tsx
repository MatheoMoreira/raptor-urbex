import { Link, NavLink } from 'react-router'
import { site } from '../data/site'
import { InstagramIcon } from './icons'
import { external } from './ui'

const links = [
  { to: '/#explorations', label: 'Explorations' },
  { to: '/#recit', label: 'Récits' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/#contact', label: 'Contact' },
]

const linkClass = 'transition-colors hover:text-torch'

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 px-gutter py-7">
      <Link to="/" className="flex items-baseline gap-2.5 text-bone">
        <span className="font-display text-[30px] leading-none tracking-[0.04em]">RAPTOR</span>
        <span className="text-[11px] font-bold tracking-[0.34em] text-torch">URBEX</span>
      </Link>
      <nav
        aria-label="Navigation principale"
        className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium tracking-[0.03em]"
      >
        {links.map((link) =>
          link.to.includes('#') ? (
            <Link key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </Link>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${linkClass} ${isActive ? 'text-torch' : ''}`}
            >
              {link.label}
            </NavLink>
          ),
        )}
        <a
          href={site.instagram}
          {...external}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-bone/40 px-4.5 transition-colors hover:border-torch hover:text-torch"
        >
          <InstagramIcon className="size-4" />
          Instagram
        </a>
      </nav>
    </header>
  )
}
