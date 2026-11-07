import { site } from '../data/site'
import { InstagramIcon, TikTokIcon } from './icons'
import { ButtonLink, Eyebrow, external } from './ui'

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-gutter pt-36 pb-24">
      <div className="mx-auto flex max-w-content flex-col gap-8">
        <Eyebrow>Collaborations · Tirages</Eyebrow>
        <h2 className="font-display text-contact uppercase">Écrivez-moi</h2>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
          <a
            href={`mailto:${site.email}`}
            className="text-email font-semibold break-all text-bone underline decoration-torch underline-offset-8 transition-colors hover:text-torch"
          >
            {site.email}
          </a>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={site.instagram} variant="outline" {...external}>
              <InstagramIcon className="size-4.5" />
              Instagram
            </ButtonLink>
            <ButtonLink href={site.tiktok} variant="outline" {...external}>
              <TikTokIcon className="size-4.5" />
              TikTok
            </ButtonLink>
          </div>
        </div>
        <p className="text-ash">
          {site.handle} sur Instagram et TikTok. Réponse en message privé ou par e-mail.
        </p>
      </div>
    </section>
  )
}
