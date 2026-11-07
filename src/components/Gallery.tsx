import { useEffect, useRef, useState } from 'react'
import { formatDate, type Exploration } from '../data/explorations'
import { ArrowRightIcon, CloseIcon, InstagramIcon } from './icons'
import { ButtonLink, external } from './ui'

type Props = {
  exploration: Exploration
  /** Index (0) de la photo affichée à l'ouverture. */
  start?: number
  onClose: () => void
}

const navButton =
  'grid size-12 shrink-0 cursor-pointer place-items-center rounded-full border border-chip bg-night/60 text-bone transition-colors hover:border-torch hover:text-torch'

/** Visionneuse plein écran de toutes les photos d'un post (flèches, clavier, glisser du doigt). */
export function Gallery({ exploration, start = 0, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const [index, setIndex] = useState(start)
  const { photos, title } = exploration
  const count = photos.length
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    const opener = document.activeElement as HTMLElement | null
    el.showModal()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
      el.close()
      // La galerie est retirée du DOM avant sa fermeture : on rend nous-mêmes le focus au bouton qui l'a ouverte.
      opener?.focus({ preventScroll: true })
    }
  }, [])

  // Précharge les photos voisines pour que le défilement soit instantané.
  useEffect(() => {
    for (const offset of [1, -1]) new Image().src = photos[(index + offset + count) % count]
  }, [index, photos, count])

  return (
    <dialog
      ref={dialog}
      aria-label={`${title} — photos`}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') go(1)
        if (event.key === 'ArrowLeft') go(-1)
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onTouchStart={(event) => (touchX.current = event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchX.current === null) return
        const dx = event.changedTouches[0].clientX - touchX.current
        touchX.current = null
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
      }}
      className="m-0 h-svh max-h-none w-screen max-w-none flex-col bg-night/95 p-0 text-bone backdrop:bg-black/80 open:flex"
    >
      <header className="flex items-start justify-between gap-6 px-gutter pt-6">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="font-display text-2xl uppercase md:text-3xl">{title}</h2>
          <p className="text-[13px] tracking-[0.12em] text-ash uppercase">
            {exploration.tag} · {formatDate(exploration.date)}
            {exploration.credit && <> · Photo @{exploration.credit}</>}
          </p>
        </div>
        <button type="button" onClick={onClose} aria-label="Fermer" className={navButton}>
          <CloseIcon className="size-5" />
        </button>
      </header>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-gutter py-6"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose()
        }}
      >
        <img
          key={photos[index]}
          src={photos[index]}
          alt={count > 1 ? `${exploration.alt} — photo ${index + 1} sur ${count}` : exploration.alt}
          className="max-h-full max-w-full object-contain"
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Photo précédente"
              className={`${navButton} absolute top-1/2 left-[clamp(0.75rem,3vw,2.5rem)] hidden -translate-y-1/2 md:grid`}
            >
              <ArrowRightIcon className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Photo suivante"
              className={`${navButton} absolute top-1/2 right-[clamp(0.75rem,3vw,2.5rem)] hidden -translate-y-1/2 md:grid`}
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </>
        )}
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-4 px-gutter pb-6">
        {count > 1 ? (
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Photo précédente" className={`${navButton} md:hidden`}>
              <ArrowRightIcon className="size-5 rotate-180" />
            </button>
            <p aria-live="polite" className="font-display text-xl tracking-[0.04em]">
              <span className="text-torch">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-ash"> / {String(count).padStart(2, '0')}</span>
            </p>
            <button type="button" onClick={() => go(1)} aria-label="Photo suivante" className={`${navButton} md:hidden`}>
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        ) : (
          <span />
        )}
        <ButtonLink href={`${exploration.instagram}?img_index=${index + 1}`} variant="outline" {...external}>
          <InstagramIcon className="size-4.5" />
          Voir le post
        </ButtonLink>
      </footer>
    </dialog>
  )
}
