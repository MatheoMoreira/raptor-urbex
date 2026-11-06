import { site } from '../data/site'
import { Eyebrow, external } from './ui'

const emailLink =
  'text-email font-semibold text-bone underline decoration-torch underline-offset-8 transition-colors hover:text-torch'

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-gutter pt-36 pb-24">
      <div className="mx-auto flex max-w-content flex-col gap-8">
        <Eyebrow>Collaborations · Tirages · Presse</Eyebrow>
        <h2 className="font-display text-contact uppercase">Écrivez-moi</h2>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {site.email ? (
            <a href={`mailto:${site.email}`} className={emailLink}>
              {site.email}
            </a>
          ) : (
            <span className={emailLink}>[ADRESSE E-MAIL]</span>
          )}
          <a href={site.instagram} {...external} className="text-ash transition-colors hover:text-bone">
            ou en message privé sur Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
