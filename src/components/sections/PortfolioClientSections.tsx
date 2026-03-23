'use client'
import Image from 'next/image'
import { ENGAGEMENTS, CLIENTS } from '@/lib/data'

export function EngagementCards() {
  return (
    <div className="flex flex-col gap-8">
      {ENGAGEMENTS.map((eng) => (
        <div
          key={eng.num}
          className="group rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:-translate-y-1"
          style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.09)' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(14,165,233,0.35)'
            el.style.boxShadow = '0 12px 50px rgba(26,58,143,0.18)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'var(--border)'
            el.style.boxShadow = 'none'
          }}
        >
          {/* Image */}
          <div className="relative w-full md:w-72 h-52 md:h-auto flex-shrink-0 overflow-hidden">
            <Image
              src={eng.image}
              alt={eng.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 50%, rgba(10,22,40,0.6))' }}
            />
            <div
              className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-sm"
              style={{
                background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)',
                boxShadow: '0 4px 16px rgba(14,165,233,0.4)',
              }}
            >
              {eng.num}
            </div>
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col justify-center flex-1">
            <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2">{eng.client}</p>
            <h3 className="text-white font-bold text-xl mb-3 leading-tight">{eng.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{eng.desc}</p>
            <div className="flex flex-wrap gap-2">
              {eng.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(14,165,233,0.10)',
                    border: '1px solid rgba(14,165,233,0.22)',
                    color: '#38bdf8',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ClientCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {CLIENTS.map(({ name, icon }) => (
        <div
          key={name}
          className="rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1"
          style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.09)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.35)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
        >
          <span className="text-3xl">{icon}</span>
          <span className="text-white font-semibold text-sm leading-tight">{name}</span>
        </div>
      ))}
    </div>
  )
}
