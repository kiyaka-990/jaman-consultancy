import Link from 'next/link'
import Image from 'next/image'

export function CtaBanner() {
  return (
    <section className="py-16 px-6 relative z-10" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center">
          <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=60" alt="" fill className="object-cover"/>
          <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(100,0,0,0.92) 0%,rgba(160,14,14,0.88) 35%,rgba(13,43,133,0.88) 70%,rgba(26,63,191,0.92) 100%)'}}/>
          <div className="absolute top-0 left-0 right-0 h-1" style={{background:'linear-gradient(90deg,#d91a1a,#fff,#2563eb)'}} aria-hidden="true"/>
          <div className="relative z-10">
            <h2 id="cta-heading" className="font-bold text-white leading-tight mb-4"
              style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontFamily:"'Playfair Display',serif"}}>
              Ready to Transform Your Organization?
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Let&apos;s build evidence-based solutions together. Contact our expert team today for a tailored consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 text-sm"
                style={{background:'#fff',color:'#a00e0e',boxShadow:'0 8px 24px rgba(0,0,0,0.2)'}}>
                Get a Free Consultation
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 text-sm"
                style={{background:'rgba(255,255,255,0.12)',border:'2px solid rgba(255,255,255,0.4)',backdropFilter:'blur(8px)'}}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
