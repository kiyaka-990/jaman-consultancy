'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, ChevronDown, Shield, Zap, BarChart3 } from 'lucide-react'

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85',
    tag: "Kenya's Premier Consultancy",
    title: ['Building Insight.', 'Inspiring Impact.'],
    sub: 'Evidence-based, inclusive, and innovative consultancy solutions that transform lives and strengthen institutions across Africa.',
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85',
    tag: 'Workplace Safety Experts',
    title: ['Protecting Lives,', 'Building Safe Workplaces.'],
    sub: 'ISO 45001:2018 certified OHS consulting — from hazard identification to full safety culture transformation.',
  },
  {
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=85',
    tag: 'Energy & Sustainability',
    title: ['Powering Efficiency,', 'Driving Green Growth.'],
    sub: 'EPRA-compliant energy audits and renewable energy feasibility assessments for industrial and commercial clients.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=85',
    tag: 'Pan-African Impact',
    title: ['Transforming Lives', 'Across Africa.'],
    sub: 'From coastal Kenya to six counties — gender equity, MEAL systems, and social safeguards that make a real difference.',
  },
]

const STATS = [
  { value:'500+', label:'Clients' },
  { value:'15+', label:'Years' },
  { value:'1000+', label:'Audits' },
  { value:'50+', label:'Experts' },
]

export function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [prev, setPrev] = useState<number|null>(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setInterval(() => transition((idx+1) % SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [idx])

  const transition = (n: number) => {
    setPrev(idx); setFading(true)
    setTimeout(() => { setIdx(n); setFading(false); setPrev(null) }, 800)
  }

  const s = SLIDES[idx]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG slides */}
      {SLIDES.map((sl, i) => (
        <div key={i} className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms]"
          style={{ backgroundImage:`url(${sl.img})`, opacity: i===idx ? 1 : 0 }} />
      ))}

      {/* Heavy dark overlay with red tint */}
      <div className="absolute inset-0" style={{
        background:'linear-gradient(135deg,rgba(4,9,30,0.95) 0%,rgba(10,5,20,0.85) 40%,rgba(4,9,30,0.60) 100%)'
      }}/>
      {/* Red streak left side */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background:'linear-gradient(180deg,transparent,#dc1a1a,transparent)' }}/>
      {/* Blue streak right */}
      <div className="absolute right-0 top-0 bottom-0 w-1" style={{ background:'linear-gradient(180deg,transparent,#1a3fbf,transparent)' }}/>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 transition-all duration-700 ${fading?'opacity-0 translate-y-3':'opacity-100 translate-y-0'}`}>

        {/* Tag badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{ background:'rgba(220,26,26,0.15)', border:'1px solid rgba(220,26,26,0.40)', animation:'badgePulse 3s infinite' }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{background:'#dc1a1a'}}/>
          <span className="text-xs font-bold tracking-widest uppercase" style={{color:'#ff4444'}}>{s.tag}</span>
        </div>

        <h1 style={{fontSize:'clamp(2.6rem,6vw,5.2rem)',fontFamily:"'Playfair Display',serif",fontWeight:800,lineHeight:1.08}} className="mb-6">
          <span className="block text-white">{s.title[0]}</span>
          <span className="block gradient-text">{s.title[1]}</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10">{s.sub}</p>

        <div className="flex flex-wrap gap-4 mb-14">
          <Link href="/services" className="btn-primary text-base">
            <ArrowRight size={18}/> Explore Services
          </Link>
          <Link href="/contact" className="btn-secondary text-base">
            <Phone size={18}/> Get Consultation
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-3">
          {STATS.map(({ value, label }) => (
            <div key={label} className="glass rounded-2xl px-6 py-4 text-center hover:-translate-y-1 transition-transform duration-300 cursor-default"
              style={{ boxShadow:'0 4px 20px rgba(220,26,26,0.15)' }}>
              <div className="font-black text-2xl gradient-text leading-none">{value}</div>
              <div className="text-slate-400 text-xs tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating feature pills */}
      <div className="absolute bottom-36 right-6 hidden lg:flex flex-col gap-3 z-10">
        {[
          { Icon:Shield, label:'ISO 45001 Certified', color:'#dc1a1a' },
          { Icon:Zap, label:'EPRA Compliant', color:'#2563eb' },
          { Icon:BarChart3, label:'MEAL Systems', color:'#dc1a1a' },
        ].map(({ Icon, label, color }) => (
          <div key={label} className="glass flex items-center gap-3 px-4 py-3 rounded-2xl hover:-translate-x-1 transition-transform duration-300"
            style={{ borderColor:`${color}30` }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background:`${color}20` }}>
              <Icon size={16} style={{color}}/>
            </div>
            <span className="text-white text-xs font-semibold">{label}</span>
          </div>
        ))}
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {SLIDES.map((_,i) => (
          <button key={i} onClick={() => transition(i)}
            className="rounded-full transition-all duration-300"
            style={i===idx
              ? { width:32, height:8, background:'linear-gradient(90deg,#dc1a1a,#2563eb)' }
              : { width:8, height:8, background:'rgba(255,255,255,0.3)' }}/>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-8 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => document.getElementById('about-anchor')?.scrollIntoView({behavior:'smooth'})}>
        <ChevronDown size={20} className="text-slate-400 animate-bounce"/>
        <span className="text-slate-500 text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
