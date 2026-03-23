'use client'
import { VALUES } from '@/lib/data'

export function ValuesGrid() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0">
        <div style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=50')",
          backgroundSize:'cover',backgroundPosition:'center',
          position:'absolute',inset:0,opacity:0.07,
        }}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg,rgba(4,9,30,0.95),rgba(10,5,25,0.95))'}}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">Our Foundation</div>
          <h2 className="section-title">Core <span className="gradient-text">Values</span></h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VALUES.map((v) => (
            <div key={v.title}
              className="group relative rounded-2xl p-6 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-default"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(220,26,26,0.4)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.08)' }}>
              <span className="text-3xl">{v.icon}</span>
              <h3 className="text-white font-bold text-sm">{v.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              <div className="red-line"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
