'use client'
import { VALUES } from '@/lib/data'

export function ValuesGrid() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden" aria-labelledby="values-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=40')",backgroundSize:'cover',backgroundPosition:'center',position:'absolute',inset:0,opacity:0.06}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg,var(--bg) 0%,var(--bg2) 50%,var(--bg) 100%)'}}/>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">Our Foundation</div>
          <h2 id="values-heading" className="section-title">Core <span className="gradient-text">Values</span></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VALUES.map((v) => (
            <div key={v.title}
              className="group card relative overflow-hidden p-5 text-center flex flex-col items-center gap-3 cursor-default hover:-translate-y-2"
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(217,26,26,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor='var(--border)'}>
              <span className="text-3xl" role="img" aria-hidden="true">{v.icon}</span>
              <h3 className="font-bold text-sm" style={{color:'var(--text)'}}>{v.title}</h3>
              <p className="text-xs leading-relaxed" style={{color:'var(--text2)'}}>{v.desc}</p>
              <div className="red-line"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
