'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
import { STATS } from '@/lib/data'

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    title: ['Building Insight.', 'Inspiring Impact.'],
    highlight: 1,
    sub: 'Evidence-based, inclusive, and innovative consultancy solutions that transform lives and strengthen institutions across Africa.',
  },
  {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    title: ['Evidence-Based', 'Consulting Excellence'],
    highlight: 1,
    sub: 'Data-driven solutions for governments, development partners, and private organizations across the continent.',
  },
  {
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80',
    title: ['Transforming Lives', 'Across Africa'],
    highlight: 1,
    sub: 'From occupational health to energy audits — comprehensive consultancy that delivers measurable results.',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    title: ['Safety, Equity &', 'Sustainability First'],
    highlight: 1,
    sub: 'Building safer, greener, and more equitable workplaces and communities with over 15 years of expertise.',
  },
]

export function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => { setIdx(i => (i + 1) % SLIDES.length); setFading(false) }, 700)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  const goTo = (n: number) => {
    setFading(true)
    setTimeout(() => { setIdx(n); setFading(false) }, 400)
  }

  const slide = SLIDES[idx]

  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Background Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms]"
          style={{ backgroundImage: `url(${s.img})`, opacity: i === idx ? 1 : 0 }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(6,14,26,0.93) 0%, rgba(10,22,40,0.75) 55%, rgba(10,22,40,0.45) 100%)' }}
      />

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 transition-all duration-700 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 animate-badge-pulse"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(14,165,233,0.35)', backdropFilter: 'blur(10px)' }}>
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-blink" />
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Kenya's Premier Consultancy</span>
        </div>

        <h1 className="font-display font-bold leading-tight mb-5" style={{ fontSize: 'clamp(2.4rem,6vw,5rem)' }}>
          <span className="text-white block">{slide.title[0]}</span>
          <span className="gradient-text block">{slide.title[1]}</span>
        </h1>

        <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-8">{slide.sub}</p>

        <div className="flex flex-wrap gap-3">
          <Link href="/services" className="btn-primary">
            <ArrowRight size={16} /> Our Services
          </Link>
          <Link href="/contact" className="btn-ghost">
            <Phone size={16} /> Get In Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-3 mt-10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="glass rounded-2xl px-5 py-3 text-center hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: '0 4px 20px rgba(26,58,143,0.2)' }}>
              <div className="font-black text-2xl gradient-text">{value}</div>
              <div className="text-slate-400 text-xs tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === idx ? 'w-7 h-2 bg-sky-400' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 right-8 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors text-[10px] tracking-widest uppercase"
      >
        <ChevronDown size={18} className="animate-bounce" />
        Scroll
      </button>
    </section>
  )
}
