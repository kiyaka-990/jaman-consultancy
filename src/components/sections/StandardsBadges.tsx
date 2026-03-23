'use client'
import { STANDARDS } from '@/lib/data'

export function StandardsBadges() {
  return (
    <section className="py-24 px-6 relative z-10" aria-labelledby="standards-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">Our Standards</div>
          <h2 id="standards-heading" className="section-title">Quality & <span className="gradient-text">Compliance</span></h2>
          <p className="text-lg max-w-lg mx-auto" style={{color:'var(--text2)'}}>International standards for quality, safety, and sustainability.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STANDARDS.map((s) => (
            <div key={s.title}
              className="card-glow group card relative overflow-hidden rounded-2xl p-5 text-center flex flex-col items-center gap-3 hover:-translate-y-2"
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(217,26,26,0.5)';el.style.boxShadow='0 0 30px rgba(217,26,26,0.14)'}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='var(--border)';el.style.boxShadow='none'}}
              style={{background:'var(--card-bg)',border:'1px solid var(--border)',transition:'all 0.3s',borderRadius:'1rem',overflow:'hidden',position:'relative'}}>
              <span className="text-3xl" role="img" aria-hidden="true">{s.icon}</span>
              <h3 className="font-bold text-sm leading-tight" style={{color:'var(--text)'}}>{s.title}</h3>
              <p className="text-[11px] leading-relaxed" style={{color:'var(--text2)'}}>{s.desc}</p>
              <div className="red-line"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
