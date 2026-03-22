'use client'
import { VALUES, STANDARDS, TEAM_ROLES, STATS } from '@/lib/data'

export function StatsStrip() {
  return (
    <section
      className="py-12 px-6 relative z-10"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
          >
            <div className="font-black text-3xl gradient-text mb-1">{value}</div>
            <div className="text-slate-400 text-sm">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ValuesSection() {
  return (
    <section
      className="py-20 px-6 relative z-10"
      style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-tag justify-center">Our Foundation</div>
          <h2 className="section-title">Core <span className="gradient-text">Values</span></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="group relative rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.35)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)' }}
            >
              <span className="text-3xl">{v.icon}</span>
              <h3 className="text-white font-bold text-sm">{v.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ background: 'linear-gradient(90deg,#cc1f1f,#1a3a8f,#0ea5e9)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-tag justify-center">The People</div>
          <h2 className="section-title">Our Expert <span className="gradient-text">Team</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed mt-2 max-w-xl mx-auto">
            Our multi-disciplinary team brings together specialists across diverse fields to deliver holistic solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {TEAM_ROLES.map((member) => (
            <div
              key={member.title}
              className="group rounded-2xl p-6 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.35)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)' }}
              >
                {member.initials}
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">{member.title}</h3>
                <p className="text-sky-400 text-[11px] font-bold uppercase tracking-widest mb-2">{member.role}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StandardsSection() {
  return (
    <section
      className="py-16 px-6 relative z-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-tag justify-center">Compliance</div>
          <h2 className="section-title">International <span className="gradient-text">Standards</span></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STANDARDS.map((s) => (
            <div
              key={s.title}
              className="card-glow rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.4)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(14,165,233,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <span className="text-3xl">{s.icon}</span>
              <h4 className="text-white font-bold text-sm">{s.title}</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
