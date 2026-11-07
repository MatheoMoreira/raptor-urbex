import { useState } from 'react'
import { formatDate } from '../data/explorations'
import { stories, storyPreview, type StoryBlock } from '../data/story'
import { Gallery } from './Gallery'
import { ArrowRightIcon, InstagramIcon, PhotosIcon } from './icons'
import { ButtonLink, Eyebrow, buttonClass, external } from './ui'

function Paragraph({ block }: { block: StoryBlock }) {
  return (
    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4">
      <span className="pt-0.5 font-display text-2xl leading-none text-torch">{block.time ?? ''}</span>
      <p className="text-lg leading-relaxed text-sand">{block.text}</p>
    </div>
  )
}

/** Carrousel des récits : un récit à la fois, photo à gauche, texte à droite. */
export function FeaturedStory() {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  const story = stories[current]
  const { photos } = story.exploration
  const visible = expanded ? story.blocks : story.blocks.slice(0, storyPreview)
  const nextIndex = (current + 1) % stories.length

  const show = (index: number) => {
    setCurrent(index)
    setExpanded(false)
  }

  const facts = [
    { label: 'Catégorie', value: story.tag },
    { label: 'Publié', value: formatDate(story.exploration.date) },
    story.fact,
  ]

  return (
    // overflow-anchor: none, sinon le navigateur fait défiler la page quand on change de récit.
    <section id="recit" className="bg-surface [overflow-anchor:none]">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2">
        <div className="h-[560px] overflow-hidden lg:sticky lg:top-0 lg:h-svh lg:self-start">
          <img
            key={story.label}
            src={photos[story.photo]}
            alt={story.alt}
            loading="lazy"
            className="size-full object-cover transition-opacity duration-500 starting:opacity-0"
          />
        </div>

        <div className="flex flex-col gap-8 px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <div className="flex flex-col gap-5">
            <Eyebrow>
              Récits · {String(current + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
            </Eyebrow>
            <div role="group" aria-label="Choisir un récit" className="flex flex-wrap gap-2">
              {stories.map((s, i) => {
                const active = i === current
                return (
                  <button
                    key={s.label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => show(i)}
                    className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-5 text-sm transition-colors ${
                      active
                        ? 'border-torch bg-torch font-semibold text-night'
                        : 'border-chip font-medium text-bone hover:border-torch hover:text-torch'
                    }`}
                  >
                    {s.label}
                  </button>
                )
              })}
            </div>
          </div>

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
              <Paragraph key={`${story.label}-${i}`} block={block} />
            ))}
            {expanded && story.quote && (
              <blockquote className="mt-4 border-l-2 border-torch pl-6 font-display text-3xl leading-tight uppercase">
                {story.quote}
              </blockquote>
            )}
            {expanded && story.partner && (
              <p className="text-sm text-ash">
                Exploration avec{' '}
                <a href={story.partner.url} {...external} className="text-bone underline-offset-4 hover:text-torch hover:underline">
                  @{story.partner.handle}
                </a>
              </p>
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
            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className={buttonClass('outline', 'cursor-pointer')}
            >
              <PhotosIcon className="size-4.5" />
              Voir les {photos.length} photos
            </button>
            <ButtonLink
              href={`${story.exploration.instagram}?img_index=${story.photo + 1}`}
              variant="outline"
              {...external}
            >
              <InstagramIcon className="size-4.5" />
              Voir le post
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => {
              show(nextIndex)
              document.getElementById('recit')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex cursor-pointer items-center gap-3 self-start border-t border-edge pt-6 text-left"
          >
            <span className="text-xs tracking-[0.16em] text-ash uppercase">Récit suivant</span>
            <span className="font-display text-2xl uppercase transition-colors group-hover:text-torch">
              {stories[nextIndex].label}
            </span>
            <ArrowRightIcon className="size-5 text-torch transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {galleryOpen && (
        <Gallery exploration={story.exploration} start={story.photo} onClose={() => setGalleryOpen(false)} />
      )}
    </section>
  )
}
