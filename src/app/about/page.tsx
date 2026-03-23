import Image from 'next/image'
import Link from 'next/link'
import { StatsStrip, VisionMissionSection, ValuesSection, TeamSection, StandardsSection } from '@/components/sections/AboutClientSections'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'About Us | Jaman Consultancy Limited',
  description: 'Learn about Jaman Consultancy — our vision, mission, values, and expert team.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero with full bg image */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div style={{
            backgroundImage:"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80')",
            backgroundSize:'cover', backgroundPosition:'center',
            position:'absolute', inset:0,
          }}/>
          <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(4,9,30,0.95) 0%,rgba(80,5,5,0.85) 50%,rgba(4,9,30,0.90) 100%)'}}/>
          {/* Red left bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{background:'linear-gradient(180deg,transparent,#dc1a1a 50%,transparent)'}}/>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
            <span>/</span><span className="text-white">About Us</span>
          </div>
          <div className="section-tag">Our Story</div>
          <h1 className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize:'clamp(2.2rem,5vw,4.2rem)', fontFamily:"'Playfair Display',serif" }}>
            About <span className="gradient-text">Jaman Consultancy</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            A decade of evidence-based solutions transforming institutions, empowering communities,
            and driving sustainable impact across Africa.
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
