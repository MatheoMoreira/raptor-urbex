import { formatDate, type Exploration } from '../data/explorations'
import { external } from './ui'

type Props = {
  exploration: Exploration
  index: number
  /** Classes de placement dans la grille ; peuvent redéfinir --media-h. */
  className?: string
}

export function ExplorationCard({ exploration, index, className = '' }: Props) {
  return (
    <a
      href={exploration.instagram}
      {...external}
      aria-label={`${exploration.title} — voir sur Instagram`}
      className={`group flex min-w-0 flex-col gap-4 [--media-h:420px] md:[--media-h:480px] ${className}`}
    >
      <div className="h-(--media-h) overflow-hidden bg-surface">
        <img
          src={exploration.image}
          alt={exploration.alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: exploration.focus }}
        />
      </div>
      <div className="flex flex-col gap-1.5">
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
      </div>
    </a>
  )
}
