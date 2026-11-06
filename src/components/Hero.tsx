import { getExploration, heroSlug } from '../data/explorations'
import { site } from '../data/site'
import { ArrowRightIcon } from './icons'
import { ButtonLink, Eyebrow, MetaLabel, external } from './ui'

export function Hero() {
  const cover = getExploration(heroSlug)

  return (
    <section id="top" className="relative flex min-h-[880px] flex-col justify-end overflow-hidden bg-black">
      <img
        src={cover.image}
        alt={cover.alt}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover opacity-80"
        style={{ objectPosition: cover.focus }}
      />
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />
      <p className="absolute top-32 right-[clamp(1.25rem,4.5vw,4rem)] hidden text-xs font-semibold tracking-[0.22em] text-sand uppercase md:block">
        En couverture — {cover.title}
      </p>

      <div className="relative flex flex-col gap-10 px-gutter pt-48 pb-16 md:flex-row-reverse md:flex-wrap md:items-end md:justify-between">
        <div className="flex min-w-0 flex-col gap-6 md:flex-[0_1_700px]">
          <Eyebrow>Explorateur français · {site.city}</Eyebrow>
          <h1 className="font-display text-hero tracking-[0.005em] uppercase">
            Never stop
            <br />
            exploring
          </h1>
          <p className="max-w-140 text-lg leading-relaxed text-sand">
            Châteaux oubliés, bunkers, hangars militaires et carrières souterraines. Photographie
            d'exploration urbaine entre la France, l'Italie, la Belgique et l'Espagne.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <ButtonLink href="#explorations">
              Voir les explorations
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href={site.instagram} variant="ghost" {...external}>
              Suivre {site.handle}
            </ButtonLink>
          </div>
        </div>

        <dl className="flex gap-12">
          <div>
            <dt>
              <MetaLabel>Abonnés</MetaLabel>
            </dt>
            <dd className="mt-1.5 font-display text-[44px] leading-none">{site.followers}</dd>
          </div>
          <div>
            <dt>
              <MetaLabel>Pays</MetaLabel>
            </dt>
            <dd className="mt-1.5 font-display text-[44px] leading-none">{site.countries.length}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
