import { Contact } from '../components/Contact'
import { Explorations } from '../components/Explorations'
import { FeaturedStory } from '../components/FeaturedStory'
import { Hero } from '../components/Hero'
import { InstagramStrip } from '../components/InstagramStrip'
import { Manifesto } from '../components/Manifesto'
import { Territories } from '../components/Territories'
import { usePageTitle } from '../lib/usePageTitle'

export function HomePage() {
  usePageTitle('Raptor Urbex — Never stop exploring')

  return (
    <>
      <Hero />
      <Manifesto />
      <Explorations />
      <FeaturedStory />
      <Territories />
      <InstagramStrip />
      <Contact />
    </>
  )
}
