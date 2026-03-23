'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'

export function ServicesGrid() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=40" alt="" fill className="object-cover" style={{opacity:0.05}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg,var(--bg) 0%,var(--bg2) 50%,var(--bg) 100%)'}}/>
      </div>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:'linear-gradient(90deg,transparent,var(--red) 30%,var(--blue-light) 70%,transparent)'}} aria-hidden="true"/>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">What We Do</div>
          <h2 id="services-heading" className="section-title">Core Consultancy <span className="gradient-text">Areas</span></h2>
          <p className="text-lg max-w-xl mx-auto" style={{color:'var(--text2)'}}>
            Comprehensive, evidence-based consulting solutions built on deep expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc,i)=>(
            <article key={svc.id}
              className="group card relative overflow-hidden cursor-pointer hover:-translate-y-2"
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(217,26,26,0.45)';el.style.boxShadow='0 20px 60px rgba(217,26,26,0.12)'}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='var(--border)';el.style.boxShadow='none'}}
              aria-label={svc.title}>
              {/* Card image top strip */}
              <div className="relative h-36 overflow-hidden">
                <Image src={svc.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0" style={{background:'linear-gradient(to bottom,transparent 20%,var(--bg2))'}}/>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                  style={{background:'linear-gradient(135deg,var(--red-dark),var(--red))',boxShadow:'0 2px 12px rgba(217,26,26,0.4)'}}>
                  {svc.short}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{background:'linear-gradient(135deg,rgba(160,14,14,0.4),rgba(37,99,235,0.25))',boxShadow:'0 4px 16px rgba(217,26,26,0.2)'}}>
                    {svc.icon}
                  </div>
                  <h3 className="font-bold text-sm leading-tight" style={{color:'var(--text)'}}>{svc.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'var(--text2)'}}>{svc.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.slice(0,3).map(tag=>(
                    <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{background:'rgba(217,26,26,0.10)',border:'1px solid rgba(217,26,26,0.22)',color:'#ff6666'}}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="red-line"/>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-red inline-flex">
            View All Services <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
    </section>
  )
}
