'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  { name:'Sarah Omondi', role:'Programme Manager', org:'GIZ Kenya', avatar:'SO', color:'#d91a1a',
    text:'Jaman Consultancy delivered an outstanding GESI analysis that directly shaped our CE4HOW project design. Their depth of understanding of gender dynamics in Kakamega County was remarkable. Highly professional team.' },
  { name:'Dr. Kwame Asante', role:'Country Director', org:'Aga Khan Foundation', avatar:'KA', color:'#2563eb',
    text:'The civil society capacity strengthening work under AGECS was exactly what our partners needed. Jaman brought both technical rigour and genuine community sensitivity. We will partner with them again without hesitation.' },
  { name:'Eng. Fatuma Mwenda', role:'Head of HSE', org:'Kenya Ports Authority', avatar:'FM', color:'#d91a1a',
    text:'Their OHS audit transformed how we think about workplace safety at the Port. The ISO 45001 implementation roadmap was practical and immediately actionable. Zero LTIs in the 18 months since implementation.' },
  { name:'James Kariuki', role:'Operations Director', org:'Industrial Client', avatar:'JK', color:'#2563eb',
    text:'The energy audit identified savings we had completely missed. Jaman\'s recommendations cut our electricity bill by 23% in the first year alone. The ROI was extraordinary — we recovered the consultancy cost in four months.' },
  { name:'Dr. Amina Yusuf', role:'M&E Specialist', org:'Development Partner', avatar:'AY', color:'#d91a1a',
    text:'Exceptional M&E framework design. The digital dashboard Jaman built gives us real-time programme visibility we never had before. Their data science team integrated everything seamlessly with our existing systems.' },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 5500)
    return () => clearInterval(t)
  }, [auto])

  const prev = () => { setAuto(false); setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) }
  const next = () => { setAuto(false); setIdx(i => (i + 1) % TESTIMONIALS.length) }
  const t = TESTIMONIALS[idx]

  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=40')",backgroundSize:'cover',backgroundPosition:'center',position:'absolute',inset:0,opacity:0.05}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg,var(--bg) 0%,var(--bg2) 100%)'}}/>
      </div>
      <div className="absolute top-0 left-0 right-0 divider-rg h-[3px]" aria-hidden="true"/>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">What Clients Say</div>
          <h2 id="testimonials-heading" className="section-title">Client <span className="gradient-text">Testimonials</span></h2>
        </div>

        {/* Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 text-center" style={{background:'var(--card-bg)',border:'1px solid var(--border)',boxShadow:'0 20px 60px rgba(0,0,0,0.15)',transition:'all 0.5s ease',animation:'fadeIn 0.4s ease'}} key={idx}>
          {/* Quote icon */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{background:`${t.color}18`,border:`2px solid ${t.color}35`}}>
            <Quote size={24} style={{color:t.color}}/>
          </div>

          <blockquote>
            <p className="text-lg sm:text-xl leading-relaxed mb-8 italic" style={{color:'var(--text2)'}}>
              &ldquo;{t.text}&rdquo;
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
              style={{background:`linear-gradient(135deg,${t.color}cc,${t.color})`}}>
              {t.avatar}
            </div>
            <div className="text-left">
              <p className="font-bold text-sm" style={{color:'var(--text)'}}>{t.name}</p>
              <p className="text-xs" style={{color:'var(--text3)'}}>{t.role} · {t.org}</p>
            </div>
          </div>

          {/* Red accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl"
            style={{background:`linear-gradient(90deg,${t.color},${t.color === '#d91a1a' ? '#2563eb' : '#d91a1a'})`}}/>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text2)'}}>
            <ChevronLeft size={18}/>
          </button>

          <div className="flex gap-2" role="tablist" aria-label="Testimonial indicators">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => { setAuto(false); setIdx(i) }}
                role="tab" aria-selected={i === idx} aria-label={`Testimonial ${i+1}`}
                className="rounded-full transition-all duration-300"
                style={i === idx
                  ? {width:24,height:8,background:'linear-gradient(90deg,#d91a1a,#2563eb)'}
                  : {width:8,height:8,background:'var(--border)'}}/>
            ))}
          </div>

          <button onClick={next} aria-label="Next testimonial"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text2)'}}>
            <ChevronRight size={18}/>
          </button>
        </div>
      </div>
    </section>
  )
}
