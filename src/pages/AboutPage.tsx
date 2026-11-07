import type { ReactNode } from 'react'
import { Link } from 'react-router'
import portrait from '../assets/photos/gouffre/01.jpg'
import { ArrowRightIcon, InstagramIcon, PlusIcon } from '../components/icons'
import { ButtonLink, Eyebrow, MetaLabel, buttonClass, external } from '../components/ui'
import { categories, explorations } from '../data/explorations'
import { site } from '../data/site'
import { usePageTitle } from '../lib/usePageTitle'

const photoCredit = { handle: '@echo_du_passe', url: 'https://www.instagram.com/echo_du_passe/' }

const rules = [
  {
    title: 'Ne rien forcer',
    text: "On entre seulement là où c'est ouvert. Aucune porte, aucune serrure, aucune fenêtre n'est forcée.",
  },
  {
    title: 'Ne rien prendre',
    text: "Rien n'est déplacé, rien n'est emporté. Seules les photographies quittent les lieux.",
  },
  {
    title: 'Ne rien révéler',
    text: 'Les emplacements restent secrets, pour protéger les lieux du vandalisme et du pillage.',
  },
]

const themes = categories
  .map((category) => {
    const items = explorations.filter((e) => e.category === category.id)
    return { ...category, count: items.length, cover: items[0] }
  })
  .filter((theme) => theme.count > 0)

const stats = [
  { label: "D'exploration", value: site.yearsExploring },
  { label: 'Lieux explorés', value: site.placesExplored },
  { label: 'Pays', value: String(site.countries.length) },
  { label: 'Abonnés', value: site.followers },
]

const faq = [
  {
    question: 'Où se trouvent ces lieux ?',
    answer:
      "Je ne communique aucune adresse, ni en commentaire ni en message privé. C'est la règle de l'urbex : moins un lieu est connu, plus il a de chances de rester intact.",
  },
  {
    question: 'Comment proposer une collaboration ?',
    answer: `Par e-mail (${site.email}) ou en message privé sur Instagram et TikTok (${site.handle}). Collaboration ou tirage photo : décris ton projet en quelques lignes.`,
  },
  {
    question: 'Puis-je utiliser tes photos ?',
    answer:
      "Toutes les photographies sont protégées. Pour une publication, un article ou un projet, demande-moi l'autorisation avant toute utilisation.",
  },
]

function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="font-display text-handle uppercase">
        {children}
      </h2>
    </div>
  )
}

export function AboutPage() {
  usePageTitle('À propos — Raptor Urbex')

  return (
    <>
      <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <figure className="relative m-0 h-[620px] overflow-hidden bg-black lg:sticky lg:top-0 lg:h-svh lg:self-start">
          <img
            src={portrait}
            alt="Raptor, frontale rouge allumée, au fond d'un gouffre envahi par la végétation"
            fetchPriority="high"
            className="size-full object-cover"
            style={{ objectPosition: '50% 60%' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-night/70 via-night/0 via-35% to-night/60"
          />
          <figcaption className="absolute inset-x-0 bottom-0 px-gutter pb-6 text-xs font-semibold tracking-[0.2em] text-sand uppercase">
            Photo&nbsp;:{' '}
            <a href={photoCredit.url} {...external} className="text-bone transition-colors hover:text-torch">
              {photoCredit.handle}
            </a>
          </figcaption>
        </figure>

        <div className="px-gutter pt-16 pb-32 lg:pt-44">
          <div className="mx-auto flex max-w-170 flex-col gap-28">
            <section aria-labelledby="about-title" className="flex flex-col gap-8">
              <Eyebrow>À propos · {site.city}</Eyebrow>
              <h1 id="about-title" className="font-display text-story uppercase">
                Présentation
              </h1>
              <p className="text-manifesto font-medium tracking-[-0.01em]">
                Je m'appelle Raptor, j'ai une vingtaine d'années et je suis basé à {site.city}. Je pars
                à la recherche des lieux que le temps a oubliés.
              </p>
              <div className="flex flex-col gap-5 text-lg leading-relaxed text-sand">
                <p>
                  Depuis mon plus jeune âge, j’ai toujours été fasciné par les univers apocalyptiques,
                  que ce soit à travers les jeux vidéo, les films, les séries ou encore les vidéos
                  YouTube.
                </p>
                <p>
                  C’est ensuite l’exploration qui est devenue une véritable passion lorsque j’ai
                  découvert, par moi-même, ce sentiment unique de liberté et d’adrénaline que procure
                  la découverte de lieux abandonnés, parfois situés à quelques kilomètres seulement de
                  chez moi.
                </p>
                <p>
                  Au fil des années, chaque structure découverte est devenue une nouvelle source
                  d’inspiration. J’ai ainsi commencé à prendre le temps de capturer ces instants à
                  travers la photographie et la vidéo, afin de conserver une trace de ces lieux et de
                  leur atmosphère si particulière.
                </p>
                <p>
                  Cela fait maintenant plus de 7 ans que je pratique cette passion, avec à mon actif
                  plus de 500 lieux explorés dans 4 pays différents. Des endroits tous plus
                  surprenants, insolites et fascinants les uns que les autres, qui ont chacun contribué
                  à enrichir mon parcours et ma vision de l'exploration.
                </p>
                <p>
                  Ce site est avant tout une trace photographique de mes aventures, mais aussi un moyen
                  de partager mon univers, mon parcours et cette passion qui m'anime depuis toutes ces
                  années.
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-6 border-y border-edge py-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>
                      <MetaLabel>{stat.label}</MetaLabel>
                    </dt>
                    <dd className="mt-2 font-display text-4xl leading-none">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="code-title" className="flex flex-col gap-10">
              <SectionTitle id="code-title" eyebrow="Éthique">
                Le code de l'explorateur
              </SectionTitle>
              <ol className="border-t border-edge">
                {rules.map((rule, i) => (
                  <li key={rule.title} className="grid grid-cols-[4rem_minmax(0,1fr)] gap-4 border-b border-edge py-7">
                    <span className="font-display text-3xl leading-none text-torch">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{rule.title}</h3>
                      <p className="mt-2 leading-relaxed text-sand">{rule.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="themes-title" className="flex flex-col gap-10">
              <SectionTitle id="themes-title" eyebrow="Terrains de jeu">
                Ce que j'explore
              </SectionTitle>
              <ul className="grid gap-4 sm:grid-cols-2">
                {themes.map(({ id, label, description, count, cover }) => (
                  <li key={id}>
                    <Link
                      to={`/?categorie=${id}#explorations`}
                      className="group flex h-full items-center gap-4 border border-edge p-3 transition-colors hover:border-torch"
                    >
                      <span className="size-20 shrink-0 overflow-hidden bg-surface">
                        <img
                          src={cover.image}
                          alt=""
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{ objectPosition: cover.focus }}
                        />
                      </span>
                      <span className="flex min-w-0 flex-col gap-1">
                        <span className="font-semibold transition-colors group-hover:text-torch">{label}</span>
                        <span className="text-sm leading-snug text-sand">{description}</span>
                        <span className="text-xs tracking-[0.12em] text-ash uppercase">
                          {count} exploration{count > 1 ? 's' : ''}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="faq-title" className="flex flex-col gap-10">
              <SectionTitle id="faq-title" eyebrow="Questions">
                On me demande souvent
              </SectionTitle>
              <div className="border-t border-edge">
                {faq.map((item) => (
                  <details key={item.question} className="group border-b border-edge">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold transition-colors hover:text-torch [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-chip text-torch transition-transform duration-300 group-open:rotate-45">
                        <PlusIcon className="size-4" />
                      </span>
                    </summary>
                    <p className="max-w-[60ch] pb-6 leading-relaxed text-sand">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="border-t border-line px-gutter py-28">
        <div className="mx-auto flex max-w-content flex-wrap items-end justify-between gap-10">
          <div className="flex flex-col gap-6">
            <Eyebrow>Collaborations · Tirages</Eyebrow>
            <h2 className="font-display text-section uppercase">
              Un projet&nbsp;?
              <br />
              Parlons-en.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/#contact" className={buttonClass('solid')}>
              Me contacter
              <ArrowRightIcon className="size-4" />
            </Link>
            <ButtonLink href={site.instagram} variant="outline" {...external}>
              <InstagramIcon className="size-4.5" />
              Suivre {site.handle}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
