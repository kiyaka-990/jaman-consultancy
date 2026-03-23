import { HeroSection } from '@/components/sections/HeroSection'
import { AboutStrip } from '@/components/sections/AboutStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ValuesGrid } from '@/components/sections/ValuesGrid'
import { TeamSection } from '@/components/sections/TeamSection'
import { ClientsMarquee } from '@/components/sections/ClientsMarquee'
import { StandardsBadges } from '@/components/sections/StandardsBadges'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutStrip />
      <ServicesGrid />
      <ValuesGrid />
      <TeamSection />
      <ClientsMarquee />
      <StandardsBadges />
      <CtaBanner />
      <Footer />
    </>
  )
}
