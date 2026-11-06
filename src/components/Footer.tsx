import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-line px-gutter py-7 text-[13px] text-ash">
      <span>
        © {new Date().getFullYear()} {site.name} · {site.city}
      </span>
      <span>Toutes les photographies sont protégées. Aucun lieu n'est communiqué.</span>
    </footer>
  )
}
