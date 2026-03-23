'use client'
import { STANDARDS } from '@/lib/data'

export function StandardsBadges() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">Our Standards</div>
          <h2 className="section-title">Quality & <span className="gradient-text">Compliance</span></h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">International standards for quality, safety, and sustainability.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STANDARDS.map((s) => (
            <div key={s.title}
              className="card-glow group rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor='rgba(220,26,26,0.45)'
                el.style.boxShadow='0 0 30px rgba(220,26,26,0.15)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor='rgba(255,255,255,0.08)'
                el.style.boxShadow='none'
              }}>
              <span className="text-3xl">{s.icon}</span>
              <h4 className="text-white font-bold text-sm leading-tight">{s.title}</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">{s.desc}</p>
              <div className="red-line"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
