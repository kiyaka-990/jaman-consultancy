import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'

const POINTS = [
  'Over a decade of technical and operational excellence across Africa',
  'Data-driven, inclusive and sustainable consulting solutions',
  'World Bank ESF and IFC Performance Standards aligned',
  'ISO 9001:2015 · ISO 45001:2018 · ISO 14001 certified',
]

export function AboutStrip() {
  return (
    <section id="about-anchor" className="py-28 px-6 relative z-10">
      {/* Section BG image strip */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60')",
          backgroundSize:'cover', backgroundPosition:'center',
          opacity:0.06,
        }}/>
        <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,rgba(4,9,30,0.97),rgba(10,5,25,0.92))' }}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden" style={{height:460}}>
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85"
              alt="Jaman team" fill className="object-cover"/>
            <div className="absolute inset-0" style={{background:'linear-gradient(to bottom right,transparent 50%,rgba(4,9,30,0.7))'}}/>
          </div>

          {/* Floating badge — red */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl p-5 text-center z-10"
            style={{ background:'linear-gradient(135deg,#a81010,#dc1a1a)', boxShadow:'0 20px 50px rgba(220,26,26,0.45)' }}>
            <span className="block text-3xl font-black text-white">15+</span>
            <span className="block text-[10px] text-white/80 uppercase tracking-widest mt-0.5">Years<br/>Excellence</span>
          </div>

          {/* Floating badge — blue */}
          <div className="absolute -top-5 -left-4 rounded-2xl px-5 py-4 text-center z-10"
            style={{ background:'linear-gradient(135deg,#0e2d8a,#2563eb)', boxShadow:'0 16px 40px rgba(14,45,138,0.5)' }}>
            <span className="block text-2xl font-black text-white">500+</span>
            <span className="block text-[10px] text-white/80 uppercase tracking-widest">Clients</span>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <div className="section-tag">Who We Are</div>
          <h2 className="section-title">
            Transforming Organizations<br/>
            <span className="gradient-text">Across Africa</span>
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6 text-base">
            Jaman Consultancy Ltd is a Kenyan-registered firm providing research, monitoring & evaluation,
            occupational health and safety, energy audit, resettlement action planning, training, and
            development consulting services across the public, private, and development sectors.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {POINTS.map(p => (
              <li key={p} className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{color:'#dc1a1a'}}/>
                {p}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary inline-flex">
            Learn More <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
    </section>
  )
}
