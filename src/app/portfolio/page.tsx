import Link from 'next/link'
import { EngagementCards, ClientCards } from '@/components/sections/PortfolioClientSections'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Portfolio | Jaman Consultancy Limited',
  description: 'Flagship engagements and past projects by Jaman Consultancy Limited.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(6,14,26,1) 0%, rgba(13,31,60,1) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(14,165,233,0.12), transparent 65%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Portfolio</span>
          </div>
          <div className="section-tag">Our Track Record</div>
          <h1 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
            Flagship <span className="gradient-text">Engagements</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            A selection of key projects demonstrating our expertise and the breadth of our impact across sectors and geographies.
          </p>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <EngagementCards />
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-6 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Partnerships" title="Selected Clients &" highlight="Partners" center />
          <ClientCards />
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}
