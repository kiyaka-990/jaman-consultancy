'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((svc, i) => (
        <div
          key={svc.id}
          className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(14,165,233,0.4)'
            el.style.boxShadow = '0 20px 60px rgba(26,58,143,0.18)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(255,255,255,0.10)'
            el.style.boxShadow = 'none'
          }}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden flex-shrink-0">
            <Image
              src={svc.image}
              alt={svc.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.95))' }}
            />
            <div
              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{
                background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)',
                boxShadow: '0 4px 14px rgba(14,165,233,0.4)',
              }}
            >
              {svc.short}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,rgba(26,58,143,0.5),rgba(14,165,233,0.3))' }}
              >
                {svc.icon}
              </div>
              <h3 className="text-white font-bold text-base leading-tight">{svc.title}</h3>
            </div>

            <ul className="flex flex-col gap-2 flex-1">
              {svc.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                  <span className="text-sky-400 font-bold mt-0.5 flex-shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
              {svc.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
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

            <Link href="/contact" className="btn-primary text-sm !py-2.5 justify-center">
              Enquire Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
