import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const POINTS = [
  'Over a decade of technical and operational excellence',
  'Data-driven, inclusive, and sustainable solutions',
  'Aligned with World Bank ESF and IFC Performance Standards',
  'ISO 9001:2015, ISO 45001:2018, and ISO 14001 compliant',
]

export function AboutStrip() {
  return (
    <section id="about-section" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <SectionHeader
            tag="Who We Are"
            title="Transforming Organizations"
            highlight="Across Africa"
          />
          <p className="text-slate-400 leading-relaxed mb-6">
            Jaman Consultancy Ltd is a Kenyan-registered firm providing research, monitoring &amp;
            evaluation, occupational health and safety, energy audit, resettlement action planning,
            training, and development consulting services across the public, private, and development
            sectors.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {POINTS.map(p => (
              <li key={p} className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle size={16} className="text-sky-400 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary inline-flex">
            Learn More <ArrowRight size={16} />
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden" style={{ height: 420 }}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Jaman team at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, transparent 60%, rgba(10,22,40,0.6))' }} />
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-5 -right-5 rounded-2xl p-5 text-center"
            style={{
              background: 'linear-gradient(135deg, #1a3a8f, #0ea5e9)',
              boxShadow: '0 16px 40px rgba(14,165,233,0.35)',
            }}
          >
            <span className="block text-3xl font-black text-white">15+</span>
            <span className="block text-[11px] text-white/80 uppercase tracking-widest mt-1">Years of<br />Excellence</span>
          </div>
        </div>
      </div>
    </section>
  )
}
