import Image from 'next/image'
import Link from 'next/link'
import { StatsStrip, ValuesSection, TeamSection, StandardsSection } from '@/components/sections/AboutClientSections'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'About Us | Jaman Consultancy Limited',
  description: 'Learn about Jaman Consultancy — our vision, mission, values, and expert team.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(6,14,26,1) 0%, rgba(13,31,60,1) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(204,31,31,0.10), transparent 65%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <div className="section-tag">Our Story</div>
          <h1 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
            About <span className="gradient-text">Jaman Consultancy</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            A decade of evidence-based solutions transforming institutions, empowering communities, and driving sustainable impact across Africa.
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Vision & Mission */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-tag">Vision &amp; Mission</div>
            <h2 className="section-title">Trusted Partner for <span className="gradient-text">Sustainable Impact</span></h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: '👁️',
                  label: 'Our Vision',
                  text: 'To be a trusted partner in delivering evidence-based, inclusive, and innovative consultancy solutions that transform lives and strengthen institutions across Africa.',
                },
                {
                  emoji: '🎯',
                  label: 'Our Mission',
                  text: 'To provide high-quality consultancy services through applied research, participatory approaches, and results-oriented strategies that promote safety, equity, sustainability, and measurable impact for our partners and beneficiaries.',
                },
              ].map(({ emoji, label, text }) => (
                <div key={label} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)' }}>
                      {emoji}
                    </div>
                    <h3 className="text-sky-400 font-bold text-sm uppercase tracking-widest">{label}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 440 }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Jaman Consultancy office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(10,22,40,0.7))' }} />
            </div>
            <div
              className="absolute -bottom-5 -right-5 rounded-2xl p-5 text-center"
              style={{ background: 'linear-gradient(135deg,#cc1f1f,#1a3a8f)', boxShadow: '0 16px 40px rgba(26,58,143,0.4)' }}
            >
              <span className="block text-3xl font-black text-white">1000+</span>
              <span className="block text-[11px] text-white/80 uppercase tracking-widest mt-1">Audits<br />Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values, Team, Standards — all client components */}
      <ValuesSection />
      <TeamSection />
      <StandardsSection />

      <CtaBanner />
      <Footer />
    </>
  )
}
