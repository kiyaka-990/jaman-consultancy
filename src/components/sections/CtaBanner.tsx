import Link from 'next/link'

export function CtaBanner() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl p-12 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a3a8f 0%, #0ea5e9 100%)' }}
        >
          {/* bg texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=50')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,58,143,0.85), rgba(14,165,233,0.7))' }} />

          <div className="relative z-10">
            <h2
              className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.7rem,4vw,3rem)' }}
            >
              Ready to Transform Your Organization?
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Let&apos;s build evidence-based solutions together. Contact our expert team today for a
              consultation tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-brand-blue bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm"
                style={{ color: '#1a3a8f' }}
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 text-sm"
                style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)' }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
