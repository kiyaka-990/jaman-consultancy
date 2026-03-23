'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'

export function ServicesGrid() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <div style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=50')",
          backgroundSize:'cover',backgroundPosition:'center',
          position:'absolute',inset:0,opacity:0.05,
        }}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg,rgba(4,9,30,0.96),rgba(4,9,30,0.92))'}}/>
      </div>

      {/* Red-blue divider top */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:'linear-gradient(90deg,transparent,#dc1a1a 30%,#2563eb 70%,transparent)'}}/>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">What We Do</div>
          <h2 className="section-title">Core Consultancy <span className="gradient-text">Areas</span></h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Comprehensive, evidence-based consulting solutions built on deep expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <div key={svc.id} className="card-glow group relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-350 hover:-translate-y-2 cursor-pointer"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(220,26,26,0.45)'
                el.style.boxShadow = '0 20px 60px rgba(220,26,26,0.12), 0 0 0 1px rgba(220,26,26,0.15)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.boxShadow = 'none'
              }}>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0"
                style={{ background:'linear-gradient(135deg,rgba(168,16,16,0.4),rgba(37,99,235,0.25))', boxShadow:'0 6px 20px rgba(220,26,26,0.25)' }}>
                {svc.icon}
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {svc.tags.slice(0,3).map(tag => (
                  <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background:'rgba(220,26,26,0.12)', border:'1px solid rgba(220,26,26,0.25)', color:'#ff6666' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="red-line"/>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary inline-flex">
            View All Services <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
    </section>
  )
}
