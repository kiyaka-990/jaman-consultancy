'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, ChevronDown, Shield, Zap, BarChart3, Users, ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85',
    tag:'Kenya\'s Premier Consultancy',
    title:['Building Insight.','Inspiring Impact.'],
    sub:'Evidence-based, inclusive, and innovative consultancy solutions that transform lives and strengthen institutions across Africa.',
    color:'rgba(217,26,26,0.85)',
  },
  {
    img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85',
    tag:'Workplace Safety Leaders',
    title:['Protecting Lives,','Building Safe Workplaces.'],
    sub:'ISO 45001:2018 OHS consulting — hazard identification, safety audits, and full safety culture transformation.',
    color:'rgba(13,43,133,0.75)',
  },
  {
    img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=85',
    tag:'Energy & Sustainability',
    title:['Powering Efficiency,','Driving Green Growth.'],
    sub:'EPRA-compliant energy audits and renewable energy feasibility for industrial and commercial clients across Kenya.',
    color:'rgba(100,10,10,0.80)',
  },
  {
    img:'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1800&q=85',
    tag:'Pan-African Social Impact',
    title:['Empowering Communities','Across the Continent.'],
    sub:'From GESI analyses to resettlement planning — gender equity and social safeguards that make real differences.',
    color:'rgba(13,43,133,0.80)',
  },
]

const STATS = [
  {value:'500+',label:'Clients Served',icon:'🤝'},
  {value:'15+',label:'Years Experience',icon:'📅'},
  {value:'1000+',label:'Audits Done',icon:'✅'},
  {value:'50+',label:'Expert Team',icon:'👥'},
]

const PILLS = [
  {Icon:Shield,label:'ISO 45001 Certified',color:'#d91a1a'},
  {Icon:Zap,label:'EPRA Compliant',color:'#2563eb'},
  {Icon:BarChart3,label:'MEAL Systems',color:'#d91a1a'},
  {Icon:Users,label:'50+ Experts',color:'#2563eb'},
]

export function HeroSection() {
  const [idx,setIdx] = useState(0)
  const [fading,setFading] = useState(false)
  const [paused,setPaused] = useState(false)

  const goTo = useCallback((n:number) => {
    setFading(true)
    setTimeout(()=>{ setIdx(n); setFading(false) },700)
  },[])

  useEffect(()=>{
    if(paused) return
    const t = setInterval(()=>goTo((idx+1)%SLIDES.length),7000)
    return ()=>clearInterval(t)
  },[idx,paused,goTo])

  const s = SLIDES[idx]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero banner"
      onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
      {/* BG slides */}
      {SLIDES.map((sl,i)=>(
        <div key={i} className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms]"
          style={{backgroundImage:`url(${sl.img})`,opacity:i===idx?1:0}} aria-hidden="true"/>
      ))}
      {/* Overlay */}
      <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(3,6,15,0.95) 0%,rgba(3,6,15,0.82) 50%,rgba(3,6,15,0.55) 100%)'}} aria-hidden="true"/>
      {/* Accent bars */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{background:`linear-gradient(180deg,transparent,${s.color},transparent)`}} aria-hidden="true"/>
      <div className="absolute right-0 top-0 bottom-0 w-1" style={{background:'linear-gradient(180deg,transparent,rgba(13,43,133,0.8),transparent)'}} aria-hidden="true"/>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-36 transition-all duration-700 ${fading?'opacity-0 translate-y-3':'opacity-100 translate-y-0'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
          style={{background:'rgba(217,26,26,0.14)',border:'1px solid rgba(217,26,26,0.38)',animation:'badgePulse 3s infinite'}}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{background:'#d91a1a'}}/>
          <span className="text-xs font-bold tracking-widest uppercase" style={{color:'#ff4444'}}>{s.tag}</span>
        </div>

        <h1 style={{fontSize:'clamp(2.8rem,6vw,5.5rem)',fontFamily:"'Playfair Display',serif",fontWeight:800,lineHeight:1.06}} className="mb-7">
          <span className="block text-white drop-shadow-lg">{s.title[0]}</span>
          <span className="block gradient-text">{s.title[1]}</span>
        </h1>

        <p className="text-slate-300 text-xl max-w-xl leading-relaxed mb-10">{s.sub}</p>

        <div className="flex flex-wrap gap-4 mb-14">
          <Link href="/services" className="btn-red text-base"><ArrowRight size={18}/> Explore Services</Link>
          <Link href="/contact" className="btn-blue text-base"><Phone size={18}/> Free Consultation</Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
          {STATS.map(({value,label,icon})=>(
            <div key={label} className="glass rounded-2xl px-4 py-4 text-center hover:-translate-y-1 transition-transform duration-300 cursor-default"
              style={{boxShadow:'0 4px 20px rgba(217,26,26,0.12)',animation:'countUp 0.6s ease both'}}>
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-black text-xl gradient-text leading-none">{value}</div>
              <div className="text-slate-400 text-[11px] tracking-wide mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating pills */}
      <div className="absolute bottom-40 right-6 hidden xl:flex flex-col gap-2.5 z-10">
        {PILLS.map(({Icon,label,color})=>(
          <div key={label} className="glass flex items-center gap-3 px-4 py-3 rounded-2xl hover:-translate-x-1 transition-transform duration-300 cursor-default"
            style={{borderColor:`${color}30`}}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:`${color}20`}}>
              <Icon size={15} style={{color}}/>
            </div>
            <span className="text-white text-xs font-semibold">{label}</span>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button onClick={()=>goTo((idx-1+SLIDES.length)%SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center glass hover:scale-110 transition-all"
        aria-label="Previous slide">
        <ChevronLeft size={18} className="text-white"/>
      </button>
      <button onClick={()=>goTo((idx+1)%SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center glass hover:scale-110 transition-all"
        aria-label="Next slide">
        <ChevronRight size={18} className="text-white"/>
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((_,i)=>(
          <button key={i} onClick={()=>goTo(i)} role="tab" aria-selected={i===idx} aria-label={`Slide ${i+1}`}
            className="rounded-full transition-all duration-300"
            style={i===idx?{width:32,height:8,background:'linear-gradient(90deg,#d91a1a,#2563eb)'}:{width:8,height:8,background:'rgba(255,255,255,0.3)'}}/>
        ))}
      </div>

      {/* Scroll hint */}
      <button className="absolute bottom-10 right-8 z-10 flex flex-col items-center gap-1 cursor-pointer group"
        onClick={()=>document.getElementById('about-anchor')?.scrollIntoView({behavior:'smooth'})}
        aria-label="Scroll to content">
        <ChevronDown size={20} className="text-slate-400 animate-bounce group-hover:text-red-400 transition-colors"/>
        <span className="text-slate-500 text-[10px] tracking-widest uppercase">Scroll</span>
      </button>
    </section>
  )
}
