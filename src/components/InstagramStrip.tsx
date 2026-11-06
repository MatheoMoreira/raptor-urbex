import { explorations } from '../data/explorations'
import { site } from '../data/site'
import { InstagramIcon } from './icons'
import { ButtonLink, external } from './ui'

const latest = explorations.slice(0, 6)

export function InstagramStrip() {
  return (
    <section className="px-gutter py-30">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-handle">{site.handle}</h2>
          <ButtonLink href={site.instagram} variant="outline" {...external}>
            <InstagramIcon className="size-4.5" />
            Suivre sur Instagram
          </ButtonLink>
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {latest.map((post) => (
            <li key={post.slug}>
              <a
                href={post.instagram}
                {...external}
                className="group block h-60 overflow-hidden bg-surface"
                aria-label={`${post.title} sur Instagram`}
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  style={{ objectPosition: post.focus }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
