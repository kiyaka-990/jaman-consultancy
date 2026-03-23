'use client'
import { CLIENTS } from '@/lib/data'

export function ClientsMarquee() {
  const doubled = [...CLIENTS,...CLIENTS]
  return (
    <section className="py-20 px-6 relative z-10"
      style={{ borderTop:'1px solid rgba(255,255,255,0.06)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-tag justify-center">Trusted By</div>
          <h2 className="section-title">Our Clients & <span className="gradient-text">Partners</span></h2>
        </div>
        <div className="rounded-2xl overflow-hidden py-5 px-2"
          style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)' }}>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background:'linear-gradient(to right,rgba(4,9,30,1),transparent)' }}/>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background:'linear-gradient(to left,rgba(4,9,30,1),transparent)' }}/>
            <div className="marquee-track">
              {doubled.map(({ name, icon }, i) => (
                <div key={`${name}-${i}`} className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)', minWidth:'max-content' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor='rgba(220,26,26,0.4)' }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.09)' }}>
                  <span className="text-xl">{icon}</span>
                  <span className="text-white font-semibold text-sm whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
