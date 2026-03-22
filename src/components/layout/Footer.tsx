'use client'
import Link from 'next/link'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

/* Inline SVG social icons — avoids lucide version differences */
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

const SOCIAL_ICONS = [LinkedInIcon, TwitterIcon, FacebookIcon]

const services = [
  'Occupational Health & Safety',
  'Energy Audit & Efficiency',
  'MEAL Systems',
  'Resettlement Action Plans',
  'Research & Baseline Studies',
  'Training & Capacity Building',
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact Us', href: '/contact' },
]

export function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{
        background: 'rgba(4,10,20,0.97)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.07]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size={48} className="mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-5">
              Building Insight. Inspiring Impact. — A subsidiary of Jaman Engineering Works Ltd,
              delivering data-driven consultancy across Africa since 2009.
            </p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg,#1a3a8f,#0ea5e9)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'transparent'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
                  }}
                >
                  <Icon size={14} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-sky-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-slate-400 text-sm hover:text-sky-300 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-sky-400 mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 text-sm hover:text-sky-300 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-sky-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              {[
                { Icon: Phone, text: '+254 733 315 621', href: 'tel:+254733315621' },
                { Icon: Mail, text: 'jamanconsultingltd@gmail.com', href: 'mailto:jamanconsultingltd@gmail.com' },
                { Icon: Globe, text: 'jamanconsultancy.co.ke', href: 'http://www.jamanconsultancy.co.ke' },
                { Icon: MapPin, text: 'Nairobi, Kenya', href: '#' },
              ].map(({ Icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex items-start gap-3 text-slate-400 text-sm hover:text-sky-300 transition-colors">
                    <Icon size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                    <span className="break-all">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} <span className="text-sky-400">Jaman Consultancy Limited</span>. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Designed with <span className="text-red-400">♥</span> in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
