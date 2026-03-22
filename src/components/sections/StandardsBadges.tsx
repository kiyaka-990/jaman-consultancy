'use client'
import { STANDARDS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function StandardsBadges() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Our Standards"
          title="Quality &"
          highlight="Compliance"
          sub="Adhering to international standards for quality, safety, and sustainability in every engagement."
          center
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STANDARDS.map((s, i) => (
            <div
              key={s.title}
              className="card-glow group rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all duration-350 hover:-translate-y-2 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(14,165,233,0.4)'
                el.style.boxShadow = '0 0 30px rgba(14,165,233,0.15)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.09)'
                el.style.boxShadow = 'none'
              }}
            >
              <span className="text-3xl">{s.icon}</span>
              <h4 className="text-white font-bold text-sm leading-tight">{s.title}</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
