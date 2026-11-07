import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { categories, curated, explorations, getExploration, type CategoryId, type Exploration } from '../data/explorations'
import { ExplorationCard } from './ExplorationCard'
import { Gallery } from './Gallery'
import { ArrowRightIcon } from './icons'
import { buttonClass } from './ui'

type Filter = 'tout' | CategoryId

const filters: { id: Filter; label: string; count: number }[] = [
  { id: 'tout', label: 'Tout', count: explorations.length },
  ...categories
    .map((c) => ({ id: c.id, label: c.label, count: explorations.filter((e) => e.category === c.id).length }))
    .filter((c) => c.count > 0),
]

const uniformLayout = 'lg:col-span-4 lg:[--media-h:480px]'
const pageSize = 12

export function Explorations() {
  // Le filtre vit dans l'URL (?categorie=militaire) pour pouvoir être partagé ou ciblé depuis une autre page.
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('categorie')
  const filter = filters.find((f) => f.id === requested)?.id ?? 'tout'
  const [showAll, setShowAll] = useState(false)
  const [visible, setVisible] = useState(pageSize)
  const [opened, setOpened] = useState<Exploration | null>(null)

  const isCurated = filter === 'tout' && !showAll
  const pool = filter === 'tout' ? explorations : explorations.filter((e) => e.category === filter)
  const items = isCurated
    ? curated.map((slot) => ({ exploration: getExploration(slot.slug), layout: slot.layout }))
    : pool.slice(0, visible).map((exploration) => ({ exploration, layout: uniformLayout }))
  const remaining = isCurated ? 0 : pool.length - items.length

  const selectFilter = (next: Filter) => {
    setSearchParams(next === 'tout' ? {} : { categorie: next }, { replace: true })
    setShowAll(false)
    setVisible(pageSize)
  }

  return (
    <section id="explorations" className="px-gutter py-32">
      <div className="mx-auto flex max-w-content flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-section uppercase">Explorations</h2>
          <div role="group" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = f.id === filter
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectFilter(f.id)}
                  className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-5 text-sm transition-colors ${
                    active
                      ? 'border-torch bg-torch font-semibold text-night'
                      : 'border-chip font-medium text-bone hover:border-torch hover:text-torch'
                  }`}
                >
                  {f.label}
                  <span className={active ? 'text-night/70' : 'text-ash'}>{f.count}</span>
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
            <ExplorationCard
              key={exploration.slug}
              exploration={exploration}
              index={i + 1}
              onOpen={() => setOpened(exploration)}
              className={layout}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {remaining > 0 && (
            <button
              type="button"
              onClick={() => setVisible((v) => v + pageSize)}
              className={buttonClass('solid', 'cursor-pointer')}
            >
              Voir plus ({remaining})
              <ArrowRightIcon className="size-4 rotate-90" />
            </button>
          )}
          {filter === 'tout' && (
            <button
              type="button"
              onClick={() => {
                setShowAll((v) => !v)
                setVisible(pageSize)
              }}
              className={buttonClass('outline', 'cursor-pointer')}
            >
              {showAll ? 'Revenir à la sélection' : `Toutes les explorations (${explorations.length})`}
              <ArrowRightIcon className={`size-4 ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          )}
        </div>
      </div>

      {opened && (
        <Gallery
          exploration={opened}
          start={(opened.cover ?? 1) - 1}
          onClose={() => setOpened(null)}
        />
      )}
    </section>
  )
}
