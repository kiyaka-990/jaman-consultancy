'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ServicesGrid() {
  return (
    <section className="py-24 px-6 relative z-10" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="What We Do"
          title="Core Consultancy"
          highlight="Areas"
          sub="Comprehensive, evidence-based consulting solutions built on deep expertise and measurable impact."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className="card-glow group relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-400 hover:-translate-y-2 cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(14,165,233,0.4)'
                el.style.boxShadow = '0 20px 60px rgba(26,58,143,0.2)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.10)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,58,143,0.5), rgba(14,165,233,0.3))',
                  boxShadow: '0 6px 20px rgba(26,58,143,0.3)',
                }}
              >
                {svc.icon}
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {svc.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(14,165,233,0.10)', border: '1px solid rgba(14,165,233,0.22)', color: '#38bdf8' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl transition-transform duration-400 scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ background: 'linear-gradient(90deg, #1a3a8f, #0ea5e9)' }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary inline-flex">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
