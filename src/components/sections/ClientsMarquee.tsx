import { CLIENTS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ClientsMarquee() {
  const doubled = [...CLIENTS, ...CLIENTS]

  return (
    <section
      className="py-20 px-6 relative z-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="Trusted By" title="Our Clients &" highlight="Partners" center />

        <div
          className="rounded-2xl overflow-hidden py-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
        >
          {/* Fade edges */}
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(10,22,40,1), transparent)' }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(10,22,40,1), transparent)' }}
            />

            <div className="marquee-track">
              {doubled.map(({ name, icon }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    minWidth: 'max-content',
                  }}
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-white font-semibold text-sm whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
