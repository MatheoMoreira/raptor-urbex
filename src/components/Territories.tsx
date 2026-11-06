import { site } from '../data/site'
import { Eyebrow } from './ui'

export function Territories() {
  return (
    <section id="terrains" className="border-b border-line px-gutter py-30">
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <Eyebrow>Terrains d'exploration</Eyebrow>
        <ul className="flex flex-wrap justify-between gap-10">
          {site.countries.map((country, i) => (
            <li key={country.code} className="flex flex-col gap-3">
              <span
                aria-hidden="true"
                className={`font-display text-country ${i % 2 === 1 ? 'text-outline' : ''}`}
              >
                {country.code}
              </span>
              <span className="text-sm font-semibold tracking-[0.2em] text-ash uppercase">{country.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
