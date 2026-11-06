import { useState } from 'react'
import { formatDate } from '../data/explorations'
import { story, type StoryBlock } from '../data/story'
import { ArrowRightIcon, InstagramIcon } from './icons'
import { ButtonLink, Eyebrow, buttonClass, external } from './ui'

function Paragraph({ block }: { block: StoryBlock }) {
  return (
    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4">
      <span className="pt-0.5 font-display text-2xl leading-none text-torch">{block.time ?? ''}</span>
      <p className="text-lg leading-relaxed text-sand">{block.text}</p>
    </div>
  )
}

export function FeaturedStory() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? story.blocks : story.blocks.slice(0, story.preview)

  const facts = [
    { label: 'Catégorie', value: story.tag },
    { label: 'Publié', value: formatDate(story.date) },
    { label: 'Lieu', value: story.place },
  ]

  return (
    <section id="recit" className="bg-surface">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2">
        <div className="h-[560px] overflow-hidden lg:sticky lg:top-0 lg:h-svh lg:self-start">
          <img src={story.image} alt={story.alt} loading="lazy" className="size-full object-cover" />
        </div>

        <div className="flex flex-col gap-8 px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <Eyebrow>Récit</Eyebrow>
          <h2 className="font-display text-story uppercase">{story.title}</h2>
          <dl className="grid grid-cols-3 gap-4 border-y border-edge py-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-[0.16em] text-ash uppercase">{fact.label}</dt>
                <dd className="mt-2 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div id="recit-texte" className="flex flex-col gap-6">
            {visible.map((block, i) => (
              <Paragraph key={i} block={block} />
            ))}
            {expanded && (
              <blockquote className="mt-4 border-l-2 border-torch pl-6 font-display text-3xl leading-tight uppercase">
                {story.quote}
              </blockquote>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="recit-texte"
              onClick={() => setExpanded((v) => !v)}
              className={buttonClass('solid', 'cursor-pointer')}
            >
              {expanded ? 'Réduire le récit' : 'Lire tout le récit'}
              <ArrowRightIcon className={`size-4 ${expanded ? '-rotate-90' : 'rotate-90'}`} />
            </button>
            <ButtonLink href={story.instagram} variant="outline" {...external}>
              <InstagramIcon className="size-4.5" />
              Voir le post
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
