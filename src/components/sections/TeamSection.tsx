'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Linkedin, X, Award } from 'lucide-react'
import { TEAM, DEPT_COLORS, type TeamMember } from '@/lib/team'

const DEPTS = ['All', ...Array.from(new Set(TEAM.map(m=>m.dept)))]

export function TeamSection() {
  const [filter,setFilter] = useState('All')
  const [selected,setSelected] = useState<TeamMember|null>(null)

  const shown = filter==='All' ? TEAM : TEAM.filter(m=>m.dept===filter)

  return (
    <section className="py-28 px-6 relative z-10 overflow-hidden" aria-labelledby="team-heading">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=40')",backgroundSize:'cover',backgroundPosition:'center top',position:'absolute',inset:0,opacity:0.06}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg,var(--bg) 0%,var(--bg2) 50%,var(--bg) 100%)'}}/>
        {/* Diagonal red stripe */}
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg,transparent 55%,rgba(217,26,26,0.04) 100%)'}}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">The People</div>
          <h2 id="team-heading" className="section-title">
            Meet Our Expert <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{color:'var(--text2)'}}>
            Multi-disciplinary specialists delivering holistic solutions across Africa.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filter team by department">
          {DEPTS.map(d=>(
            <button key={d} onClick={()=>setFilter(d)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              aria-pressed={filter===d}
              style={filter===d
                ? {background:'linear-gradient(135deg,var(--red-dark),var(--red))',color:'#fff',boxShadow:'0 4px 16px rgba(217,26,26,0.35)'}
                : {background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text2)'}}>
              {d}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shown.map((member,i)=>{
            const isRed = DEPT_COLORS[member.dept]?.red ?? (i%2===0)
            const accentColor = isRed ? 'var(--red)' : 'var(--blue-light)'
            const gradBg = isRed
              ? 'linear-gradient(135deg,#a00e0e,#d91a1a)'
              : 'linear-gradient(135deg,#0d2b85,#2563eb)'
            const shadow = isRed ? '0 8px 24px rgba(217,26,26,0.35)' : '0 8px 24px rgba(13,43,133,0.35)'

            return (
              <article key={member.name}
                className="group card relative overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
                onClick={()=>setSelected(member)}
                tabIndex={0}
                onKeyDown={e=>{ if(e.key==='Enter'||e.key===' ') setSelected(member) }}
                aria-label={`${member.name}, ${member.role}`}>
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image src={member.img} alt={`Portrait of ${member.name}`}
                    fill className="object-cover transition-transform duration-500 group-hover:scale-107"/>
                  <div className="absolute inset-0" style={{background:`linear-gradient(to bottom,transparent 45%,var(--bg2))`}}/>
                  {/* Dept badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{background:gradBg,boxShadow:shadow}}>
                    {member.dept}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-base mb-0.5" style={{color:'var(--text)'}}>{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{color:accentColor}}>{member.role}</p>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{color:'var(--text2)'}}>{member.bio}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {member.expertise.slice(0,2).map(e=>(
                      <span key={e} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{background:`${isRed?'rgba(217,26,26,0.12)':'rgba(37,99,235,0.12)'}`,border:`1px solid ${isRed?'rgba(217,26,26,0.25)':'rgba(37,99,235,0.25)'}`,color:accentColor}}>
                        {e}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs mt-3 font-semibold" style={{color:'var(--text3)'}}>Click to view profile →</p>
                </div>
                <div className="red-line" style={{background:`linear-gradient(90deg,${accentColor},${isRed?'var(--blue-light)':'var(--red)'})`}}/>
              </article>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4"
          role="dialog" aria-modal="true" aria-label={`${selected.name} profile`}
          onClick={e=>{ if(e.target===e.currentTarget) setSelected(null) }}>
          <div className="absolute inset-0" style={{background:'rgba(3,6,15,0.85)',backdropFilter:'blur(12px)'}}/>
          <div className="relative rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            style={{background:'var(--bg2)',border:'1px solid var(--border)',animation:'slideUp 0.3s ease'}}>
            {/* Close */}
            <button onClick={()=>setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{background:'rgba(217,26,26,0.2)',border:'1px solid rgba(217,26,26,0.3)'}}
              aria-label="Close profile">
              <X size={16} style={{color:'var(--red)'}}/>
            </button>

            {/* Photo */}
            <div className="relative h-64 overflow-hidden">
              <Image src={selected.img} alt={selected.name} fill className="object-cover object-top"/>
              <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 40%,var(--bg2))'}}/>
            </div>

            <div className="p-8 -mt-16 relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-black text-2xl" style={{color:'var(--text)'}}>{selected.name}</h3>
                  <p className="font-bold text-sm mt-1" style={{color:'var(--red)'}}>{selected.role}</p>
                  <div className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{background:'linear-gradient(135deg,var(--blue),var(--blue-light))'}}>
                    {selected.dept}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{background:'rgba(217,26,26,0.15)',border:'1px solid rgba(217,26,26,0.3)'}}>
                  <Award size={20} style={{color:'var(--red)'}}/>
                </div>
              </div>

              <p className="text-sm leading-relaxed mt-5" style={{color:'var(--text2)'}}>{selected.bio}</p>

              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{color:'var(--text3)'}}>Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {selected.expertise.map(e=>(
                    <span key={e} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{background:'rgba(217,26,26,0.12)',border:'1px solid rgba(217,26,26,0.25)',color:'var(--red)'}}>
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
