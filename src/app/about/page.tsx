import Image from 'next/image'
import Link from 'next/link'
import { StatsStrip, VisionMissionSection, ValuesSection, StandardsSection } from '@/components/sections/AboutClientSections'
import { TeamSection } from '@/components/sections/TeamSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'About Us | Jaman Consultancy Limited',
  description: 'Learn about Jaman Consultancy — our vision, mission, values, team, and expert credentials.',
}

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-28 px-6 overflow-hidden" aria-labelledby="about-page-heading">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
            alt="" fill className="object-cover" priority/>
          <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(3,6,15,0.95) 0%,rgba(80,5,5,0.87) 50%,rgba(3,6,15,0.92) 100%)'}}/>
          <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{background:'linear-gradient(180deg,transparent,#d91a1a 50%,transparent)'}}/>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-sm" style={{color:'var(--text3)'}}>
            <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span style={{color:'var(--text)'}} aria-current="page">About Us</span>
          </nav>
          <div className="section-tag">Our Story</div>
          <h1 id="about-page-heading" className="section-title !text-white">
            About <span className="gradient-text">Jaman Consultancy</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            A decade of evidence-based solutions transforming institutions, empowering communities, and driving sustainable impact across Africa.
          </p>
        </div>
      </section>
      <StatsStrip />
      <VisionMissionSection />
      <ValuesSection />
      <TeamSection />
      <StandardsSection />
      <CtaBanner />
      <Footer />
    </>
  )
}
