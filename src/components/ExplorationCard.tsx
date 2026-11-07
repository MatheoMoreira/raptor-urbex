import { formatDate, type Exploration } from '../data/explorations'
import { PhotosIcon } from './icons'

type Props = {
  exploration: Exploration
  index: number
  /** Ouvre la galerie des photos du post. */
  onOpen: () => void
  /** Classes de placement dans la grille ; peuvent redéfinir --media-h. */
  className?: string
}

export function ExplorationCard({ exploration, index, onOpen, className = '' }: Props) {
  const count = exploration.photos.length

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${exploration.title}, voir ${count > 1 ? `les ${count} photos` : 'la photo'}`}
      className={`group flex min-w-0 cursor-pointer flex-col gap-4 text-left [--media-h:420px] md:[--media-h:480px] ${className}`}
    >
      <span className="relative block h-(--media-h) overflow-hidden bg-surface">
        <img
          src={exploration.image}
          alt={exploration.alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: exploration.focus }}
        />
        {count > 1 && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-night/75 px-3 py-1.5 text-xs font-semibold text-bone">
            <PhotosIcon className="size-4" />
            {count}
          </span>
        )}
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="flex items-baseline gap-3.5">
          <span className="font-display text-xl text-torch">{String(index).padStart(2, '0')}</span>
          <span className="text-xl font-semibold transition-colors group-hover:text-torch-light">
            {exploration.title}
          </span>
        </span>
        <span className="text-[13px] tracking-[0.12em] text-ash uppercase">
          {exploration.tag} · {formatDate(exploration.date)}
          {exploration.credit && <> · Photo @{exploration.credit}</>}
        </span>
      </span>
    </button>
  )
}
