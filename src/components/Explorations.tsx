import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { categories, curated, explorations, getExploration, type Category } from '../data/explorations'
import { ExplorationCard } from './ExplorationCard'
import { ArrowRightIcon } from './icons'
import { buttonClass } from './ui'

type Filter = 'Tout' | Category

const filters: Filter[] = ['Tout', ...categories]

const uniformLayout = 'lg:col-span-4 lg:[--media-h:520px]'

export function Explorations() {
  // Le filtre vit dans l'URL (?categorie=Militaire) pour pouvoir être partagé ou ciblé depuis une autre page.
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('categorie')
  const filter = filters.find((f) => f === requested) ?? 'Tout'
  const [showAll, setShowAll] = useState(false)

  const isCurated = filter === 'Tout' && !showAll
  const items = isCurated
    ? curated.map((slot) => ({ exploration: getExploration(slot.slug), layout: slot.layout }))
    : explorations
        .filter((e) => filter === 'Tout' || e.category === filter)
        .map((exploration) => ({ exploration, layout: uniformLayout }))

  const selectFilter = (next: Filter) => {
    setSearchParams(next === 'Tout' ? {} : { categorie: next }, { replace: true })
    setShowAll(false)
  }

  return (
    <section id="explorations" className="px-gutter py-32">
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-section uppercase">Explorations</h2>
          <div role="group" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = f === filter
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectFilter(f)}
                  className={`min-h-11 cursor-pointer rounded-full border px-5 text-sm transition-colors ${
                    active
                      ? 'border-torch bg-torch font-semibold text-night'
                      : 'border-chip font-medium text-bone hover:border-torch hover:text-torch'
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {items.length} exploration{items.length > 1 ? 's' : ''} affichée{items.length > 1 ? 's' : ''}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {items.map(({ exploration, layout }, i) => (
            <ExplorationCard key={exploration.slug} exploration={exploration} index={i + 1} className={layout} />
          ))}
        </div>

        {filter === 'Tout' && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className={buttonClass('outline', 'cursor-pointer')}
            >
              {showAll ? 'Revenir à la sélection' : `Toutes les explorations (${explorations.length})`}
              <ArrowRightIcon className={`size-4 transition-transform ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
