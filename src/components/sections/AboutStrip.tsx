import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Award, Globe, Users } from 'lucide-react'

const POINTS = [
  'Over a decade of technical excellence across the African continent',
  'Data-driven, inclusive and sustainable consulting solutions',
  'World Bank ESF and IFC Performance Standards aligned',
  'ISO 9001:2015 · ISO 45001:2018 · ISO 14001 certified',
]

const MINI_STATS = [
  {Icon:Award,val:'ISO Certified',color:'var(--red)'},
  {Icon:Globe,val:'Pan-African Reach',color:'var(--blue-light)'},
  {Icon:Users,val:'50+ Experts',color:'var(--red)'},
]

export function AboutStrip() {
  return (
    <section id="about-anchor" className="py-28 px-6 relative z-10 overflow-hidden" aria-labelledby="about-heading">
      {/* Layered BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60')",backgroundSize:'cover',backgroundPosition:'center',position:'absolute',inset:0,opacity:0.07}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg,var(--bg) 0%,var(--bg2) 100%)'}}/>
        {/* Red diagonal glow */}
        <div className="absolute top-0 left-0 w-1/3 h-full" style={{background:'linear-gradient(to right,rgba(217,26,26,0.06),transparent)'}}/>
      </div>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,var(--red) 30%,var(--blue-light) 70%,transparent)'}}/>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{height:480}}>
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85"
              alt="Jaman Consultancy team collaborating" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"/>
            <div className="absolute inset-0" style={{background:'linear-gradient(to bottom right,transparent 55%,rgba(3,6,15,0.7))'}}/>
            {/* In-image badge */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{background:'linear-gradient(135deg,var(--red-dark),var(--red))'}}>
                <Award size={20} className="text-white"/>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Subsidiary of Jaman Engineering Works Ltd</p>
                <p className="text-slate-400 text-xs">Nairobi, Kenya · Est. 2009</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl p-5 text-center z-10 shadow-2xl"
            style={{background:'linear-gradient(135deg,#a00e0e,#d91a1a)',boxShadow:'0 20px 50px rgba(217,26,26,0.5)'}}>
            <span className="block text-3xl font-black text-white">15+</span>
            <span className="block text-[10px] text-white/80 uppercase tracking-widest mt-0.5">Years<br/>Excellence</span>
          </div>
          <div className="absolute -top-5 -left-4 rounded-2xl px-5 py-4 text-center z-10 shadow-2xl"
            style={{background:'linear-gradient(135deg,#0d2b85,#2563eb)',boxShadow:'0 16px 40px rgba(13,43,133,0.5)'}}>
            <span className="block text-2xl font-black text-white">500+</span>
            <span className="block text-[10px] text-white/80 uppercase tracking-widest">Clients<br/>Served</span>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <div className="section-tag">Who We Are</div>
          <h2 id="about-heading" className="section-title">
            Transforming Organizations<br/><span className="gradient-text">Across Africa</span>
          </h2>
          <p className="leading-relaxed mb-6 text-base" style={{color:'var(--text2)'}}>
            Jaman Consultancy Ltd is a Kenyan-registered firm providing research, monitoring & evaluation,
            occupational health and safety, energy audit, resettlement action planning, training, and
            development consulting services across the public, private, and development sectors.
          </p>
          <ul className="flex flex-col gap-3 mb-8" aria-label="Key strengths">
            {POINTS.map(p=>(
              <li key={p} className="flex items-start gap-3 text-sm" style={{color:'var(--text2)'}}>
                <CheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{color:'var(--red)'}}/>
                {p}
              </li>
            ))}
          </ul>

          {/* Mini stat pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {MINI_STATS.map(({Icon,val,color})=>(
              <div key={val} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text)'}}>
                <Icon size={14} style={{color}}/> {val}
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-red inline-flex">
            Learn More About Us <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
    </section>
  )
}
