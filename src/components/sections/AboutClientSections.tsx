'use client'
import Image from 'next/image'
import { VALUES, STANDARDS, TEAM_ROLES, STATS } from '@/lib/data'

export function StatsStrip() {
  return (
    <section className="py-14 px-6 relative z-10" style={{ borderBottom:'1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ value, label }, i) => (
          <div key={label}
            className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            style={{ background:'var(--card-bg)', border:'1px solid var(--border)' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = i % 2 === 0 ? 'rgba(217,26,26,0.5)' : 'rgba(37,99,235,0.5)'
              el.style.boxShadow = i % 2 === 0 ? '0 8px 30px rgba(217,26,26,0.15)' : '0 8px 30px rgba(37,99,235,0.15)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.boxShadow = 'none'
            }}>
            <div className="font-black text-3xl gradient-text mb-1">{value}</div>
            <div className="text-sm" style={{ color:'var(--text2)' }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function VisionMissionSection() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=50')",
          backgroundSize:'cover', backgroundPosition:'center',
          position:'absolute', inset:0, opacity:0.06,
        }}/>
        <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,var(--bg) 0%,var(--bg2) 100%)' }}/>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="section-tag">Vision &amp; Mission</div>
          <h2 className="section-title">Trusted Partner for <span className="gradient-text">Sustainable Impact</span></h2>
          <div className="flex flex-col gap-5">
            {[
              {
                emoji:'👁️', label:'Our Vision', color:'#d91a1a',
                text:'To be a trusted partner in delivering evidence-based, inclusive, and innovative consultancy solutions that transform lives and strengthen institutions across Africa.',
              },
              {
                emoji:'🎯', label:'Our Mission', color:'#2563eb',
                text:'To provide high-quality consultancy services through applied research, participatory approaches, and results-oriented strategies that promote safety, equity, sustainability, and measurable impact.',
              },
            ].map(({ emoji, label, text, color }) => (
              <div key={label} className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background:'var(--card-bg)', border:`1px solid ${color}30` }}>
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background:`linear-gradient(180deg,${color},transparent)` }}/>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ background:`${color}25`, border:`1px solid ${color}40` }}>
                    {emoji}
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-widest" style={{ color }}>{label}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color:'var(--text2)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden" style={{ height:460 }}>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85"
              alt="Jaman Consultancy office" fill className="object-cover"
            />
            <div className="absolute inset-0"
              style={{ background:'linear-gradient(to bottom,transparent 50%,rgba(3,6,15,0.75))' }}/>
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl p-5 text-center z-10"
            style={{ background:'linear-gradient(135deg,#a00e0e,#d91a1a)', boxShadow:'0 20px 50px rgba(217,26,26,0.5)' }}>
            <span className="block text-3xl font-black text-white">1000+</span>
            <span className="block text-[10px] text-white/80 uppercase tracking-widest mt-0.5">Audits<br/>Completed</span>
          </div>
          <div className="absolute -top-5 -left-4 rounded-2xl px-5 py-4 z-10"
            style={{ background:'linear-gradient(135deg,#0d2b85,#2563eb)', boxShadow:'0 16px 40px rgba(13,43,133,0.5)' }}>
            <span className="block text-2xl font-black text-white">50+</span>
            <span className="block text-[10px] text-white/80 uppercase tracking-widest">Expert Team</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ValuesSection() {
  return (
    <section className="py-20 px-6 relative z-10 overflow-hidden"
      style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=40')",
          backgroundSize:'cover', backgroundPosition:'center',
          position:'absolute', inset:0, opacity:0.05,
        }}/>
        <div className="absolute inset-0" style={{ background:'linear-gradient(180deg,var(--bg) 0%,var(--bg2) 100%)' }}/>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">Our Foundation</div>
          <h2 className="section-title">Core <span className="gradient-text">Values</span></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VALUES.map((v) => (
            <div key={v.title}
              className="group relative rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-default"
              style={{ background:'var(--card-bg)', border:'1px solid var(--border)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(217,26,26,0.45)'
                el.style.boxShadow   = '0 10px 30px rgba(217,26,26,0.12)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.boxShadow   = 'none'
              }}>
              <span className="text-3xl" role="img" aria-hidden="true">{v.icon}</span>
              <h3 className="font-bold text-sm" style={{ color:'var(--text)' }}>{v.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color:'var(--text2)' }}>{v.desc}</p>
              <div className="red-line"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=40')",
          backgroundSize:'cover', backgroundPosition:'center top',
          position:'absolute', inset:0, opacity:0.06,
        }}/>
        <div className="absolute inset-0" style={{ background:'linear-gradient(180deg,var(--bg) 0%,var(--bg2) 100%)' }}/>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">The People</div>
          <h2 className="section-title">Our Expert <span className="gradient-text">Team</span></h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color:'var(--text2)' }}>
            Multi-disciplinary specialists delivering holistic solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {TEAM_ROLES.map((member, i) => (
            <div key={member.title}
              className="group rounded-2xl p-6 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ background:'var(--card-bg)', border:'1px solid var(--border)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = i % 2 === 0 ? 'rgba(217,26,26,0.45)' : 'rgba(37,99,235,0.45)'
                el.style.boxShadow   = i % 2 === 0 ? '0 10px 30px rgba(217,26,26,0.12)' : '0 10px 30px rgba(37,99,235,0.12)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.boxShadow   = 'none'
              }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-black text-sm text-white"
                style={{
                  background: i % 2 === 0 ? 'linear-gradient(135deg,#a00e0e,#d91a1a)' : 'linear-gradient(135deg,#0d2b85,#2563eb)',
                  boxShadow:  i % 2 === 0 ? '0 6px 20px rgba(217,26,26,0.35)' : '0 6px 20px rgba(13,43,133,0.35)',
                }}>
                {member.initials}
              </div>
              <h3 className="font-bold text-sm" style={{ color:'var(--text)' }}>{member.title}</h3>
              <p className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: i % 2 === 0 ? '#d91a1a' : '#2563eb' }}>{member.role}</p>
              <p className="text-xs leading-relaxed" style={{ color:'var(--text2)' }}>{member.desc}</p>
              <div className="red-line"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StandardsSection() {
  return (
    <section className="py-16 px-6 relative z-10" style={{ borderTop:'1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-tag justify-center">Compliance</div>
          <h2 className="section-title">International <span className="gradient-text">Standards</span></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STANDARDS.map((s, i) => (
            <div key={s.title}
              className="rounded-2xl p-5 text-center flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ background:'var(--card-bg)', border:'1px solid var(--border)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = i % 2 === 0 ? 'rgba(217,26,26,0.5)' : 'rgba(37,99,235,0.5)'
                el.style.boxShadow   = i % 2 === 0 ? '0 0 30px rgba(217,26,26,0.15)' : '0 0 30px rgba(37,99,235,0.15)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.boxShadow   = 'none'
              }}>
              <span className="text-3xl" role="img" aria-hidden="true">{s.icon}</span>
              <h4 className="font-bold text-sm" style={{ color:'var(--text)' }}>{s.title}</h4>
              <p className="text-[11px] leading-relaxed" style={{ color:'var(--text2)' }}>{s.desc}</p>
              <div className="red-line"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
