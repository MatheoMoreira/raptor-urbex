import { featuredSlug, formatDate, getExploration } from '../data/explorations'
import { ArrowRightIcon } from './icons'
import { ButtonLink, Eyebrow, external } from './ui'

export function FeaturedStory() {
  const story = getExploration(featuredSlug)

  const facts = [
    { label: 'Catégorie', value: story.tag },
    { label: 'Publié', value: formatDate(story.date) },
    { label: 'Lieu', value: 'Non communiqué' },
  ]

  return (
    <section id="recit" className="bg-surface">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="h-[480px] overflow-hidden lg:h-[760px]">
          <img
            src={story.image}
            alt={story.alt}
            loading="lazy"
            className="size-full object-cover"
            style={{ objectPosition: story.focus }}
          />
        </div>
        <div className="flex flex-col justify-center gap-7 px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <Eyebrow>Récit · Épisode 08</Eyebrow>
          <h2 className="font-display text-story uppercase">
            Le pavillon
            <br />
            de chasse
          </h2>
          <p className="max-w-120 text-lg leading-relaxed text-sand">
            Boiseries, trophées, portraits de famille&nbsp;: une demeure figée, comme si ses occupants
            venaient tout juste de quitter la pièce.
          </p>
          <dl className="grid grid-cols-3 gap-4 border-y border-edge py-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-[0.16em] text-ash uppercase">{fact.label}</dt>
                <dd className="mt-2 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div>
            <ButtonLink href={story.instagram} {...external}>
              Lire le récit
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
