import { Link } from 'react-router'
import { ArrowRightIcon } from './icons'
import { Eyebrow } from './ui'

export function Manifesto() {
  return (
    <section className="border-b border-line px-gutter py-32">
      <div className="mx-auto flex max-w-content flex-wrap gap-x-20 gap-y-6">
        <Eyebrow className="flex-[1_1_200px] pt-3">L'esprit urbex</Eyebrow>
        <div className="flex flex-[999_1_640px] flex-col items-start gap-8">
          <p className="text-manifesto font-medium tracking-[-0.01em]">
            À travers mes explorations, je pars à la découverte de ces endroits oubliés là où le temps
            dort, sans jamais dégrader ni perturber leur tranquillité, derrière chaque porte
            entrouverte se cache peut-être une histoire qui mérite encore d’être racontée.
          </p>
          <Link
            to="/a-propos"
            className="inline-flex min-h-11 items-center gap-2.5 font-semibold text-torch transition-colors hover:text-torch-light"
          >
            Découvrir l'explorateur
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
