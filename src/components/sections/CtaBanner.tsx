import Link from 'next/link'

export function CtaBanner() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-12 text-center"
          style={{ background:'linear-gradient(135deg,#6b0000 0%,#a81010 25%,#dc1a1a 50%,#0e2d8a 80%,#1a3fbf 100%)' }}>
          {/* Bg image overlay */}
          <div className="absolute inset-0"
            style={{ backgroundImage:"url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=50')", backgroundSize:'cover',backgroundPosition:'center',opacity:0.12 }}/>
          <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,rgba(100,0,0,0.7),rgba(14,45,138,0.7))' }}/>
          {/* Top accent lines */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background:'linear-gradient(90deg,#dc1a1a,#fff,#2563eb)' }}/>

          <div className="relative z-10">
            <h2 className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize:'clamp(1.8rem,4vw,3.2rem)', fontFamily:"'Playfair Display',serif" }}>
              Ready to Transform Your Organization?
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Let&apos;s build evidence-based solutions together. Contact our expert team today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm"
                style={{ background:'#fff', color:'#a81010' }}>
                Get a Free Consultation
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 text-sm"
                style={{ background:'rgba(255,255,255,0.12)', border:'2px solid rgba(255,255,255,0.35)', backdropFilter:'blur(8px)' }}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
