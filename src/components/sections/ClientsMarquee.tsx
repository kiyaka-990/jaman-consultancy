'use client'
import { CLIENTS } from '@/lib/data'

export function ClientsMarquee() {
  const doubled = [...CLIENTS, ...CLIENTS]
  return (
    <section className="py-20 px-6 relative z-10" style={{borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}} aria-label="Our clients and partners">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-tag justify-center">Trusted By</div>
          <h2 className="section-title">Our Clients & <span className="gradient-text">Partners</span></h2>
        </div>
        <div className="rounded-2xl overflow-hidden py-5 px-2" style={{background:'var(--card-bg)',border:'1px solid var(--border)'}}>
          <div className="marquee-wrap">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{background:'linear-gradient(to right,var(--bg),transparent)'}} aria-hidden="true"/>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{background:'linear-gradient(to left,var(--bg),transparent)'}} aria-hidden="true"/>
            <div className="marquee-track" aria-hidden="true">
              {doubled.map(({ name, icon }, i) => (
                <div key={`${name}-${i}`}
                  className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-default"
                  style={{background:'var(--surface2)',border:'1px solid var(--border)',minWidth:'max-content'}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor='rgba(217,26,26,0.4)'}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor='var(--border)'}>
                  <span className="text-xl" aria-hidden="true">{icon}</span>
                  <span className="font-semibold text-sm whitespace-nowrap" style={{color:'var(--text)'}}>{name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Accessible list for screen readers */}
          <ul className="sr-only">
            {CLIENTS.map(c => <li key={c.name}>{c.name}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
