import Link from 'next/link'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Our Services | Jaman Consultancy Limited',
  description: 'OHS, Energy Audits, MEAL, Resettlement Action Plans, Research, Training & Capacity Development.',
}

export default function ServicesPage() {
  return (
    <>
      <section
        className="relative pt-36 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(6,14,26,1) 0%, rgba(13,31,60,1) 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,143,0.18), transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
          <div className="section-tag">What We Offer</div>
          <h1 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
            Our Core Consultancy <span className="gradient-text">Areas</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Comprehensive, evidence-based consultancy services designed to transform organizations and communities across Africa.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ServiceCards />
        </div>
      </section>

      <section className="pb-8 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)' }}>
            <h2 className="font-display font-bold text-white text-2xl mb-3">Need a Custom Solution?</h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">We tailor every engagement to your organisation&apos;s unique needs and context.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold bg-white hover:-translate-y-1 transition-transform" style={{ color: '#1a3a8f' }}>
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}
