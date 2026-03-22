'use client'
import { VALUES } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ValuesGrid() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="Our Foundation" title="Core" highlight="Values" center />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="group relative rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all duration-350 hover:-translate-y-2 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                animationDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(14,165,233,0.35)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.09)'
              }}
            >
              <span className="text-3xl">{v.icon}</span>
              <h3 className="text-white font-bold text-sm">{v.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>

              {/* bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-350 scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ background: 'linear-gradient(90deg, #cc1f1f, #1a3a8f, #0ea5e9)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
