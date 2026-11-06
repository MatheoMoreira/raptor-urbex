import type { ReactNode } from 'react'
import { Link } from 'react-router'
import portrait from '../assets/photos/portrait-souterrain.jpg'
import { ArrowRightIcon, InstagramIcon, PlusIcon } from '../components/icons'
import { ButtonLink, Eyebrow, MetaLabel, buttonClass, external } from '../components/ui'
import { categories, explorations, type Category } from '../data/explorations'
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

const themeDescriptions: Record<Category, string> = {
  Châteaux: 'Demeures figées, salons intacts, plafonds peints.',
  Militaire: "Bunkers, hangars et cimetières d'avions.",
  Souterrain: 'Carrières et galeries taillées dans la roche.',
  Industriel: 'Béton brut et architecture fonctionnelle.',
  Patrimoine: "Cloîtres et édifices chargés d'histoire.",
}

const themes = categories.map((category) => {
  const items = explorations.filter((e) => e.category === category)
  return { category, count: items.length, cover: items[0] }
})

const faq = [
  {
    question: 'Où se trouvent ces lieux ?',
    answer:
      "Je ne communique aucune adresse, ni en commentaire ni en message privé. C'est la règle de l'urbex : moins un lieu est connu, plus il a de chances de rester intact.",
  },
  {
    question: 'Comment proposer une collaboration ?',
    answer: `Par e-mail ou en message privé sur Instagram (${site.handle}). Marque, média, tirage photo ou presse : décris ton projet en quelques lignes.`,
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
                Derrière
                <br />
                la lampe torche
              </h1>
              <p className="text-manifesto font-medium tracking-[-0.01em]">
                On m'appelle Raptor. Explorateur français basé à {site.city}, je pars à la recherche
                des lieux que le temps a oubliés.
              </p>
              <div className="flex flex-col gap-5 text-lg leading-relaxed text-sand">
                <p>
                  Châteaux figés dans leur dernier jour, bunkers, hangars militaires, carrières
                  creusées dans la roche&nbsp;: chaque exploration se termine à la lueur d'une lampe
                  frontale, au milieu de pièces que plus personne ne regarde.
                </p>
                <p>
                  Mes photos et mes vidéos sont partagées sur Instagram avec une communauté de{' '}
                  {site.followers} abonnés, entre la France, l'Italie, la Belgique et l'Espagne. Ma
                  devise tient en trois mots&nbsp;: <em className="text-bone">never stop exploring</em>.
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-4 border-y border-edge py-6">
                <div>
                  <dt>
                    <MetaLabel>Abonnés</MetaLabel>
                  </dt>
                  <dd className="mt-2 font-display text-4xl leading-none">{site.followers}</dd>
                </div>
                <div>
                  <dt>
                    <MetaLabel>Pays</MetaLabel>
                  </dt>
                  <dd className="mt-2 font-display text-4xl leading-none">{site.countries.length}</dd>
                </div>
                <div>
                  <dt>
                    <MetaLabel>Base</MetaLabel>
                  </dt>
                  <dd className="mt-2 font-display text-4xl leading-none">{site.city}</dd>
                </div>
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
                {themes.map(({ category, count, cover }) => (
                  <li key={category}>
                    <Link
                      to={`/?categorie=${encodeURIComponent(category)}#explorations`}
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
                        <span className="font-semibold transition-colors group-hover:text-torch">{category}</span>
                        <span className="text-sm leading-snug text-sand">{themeDescriptions[category]}</span>
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
            <Eyebrow>Collaborations · Tirages · Presse</Eyebrow>
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
