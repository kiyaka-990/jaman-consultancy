'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

function LinkedInIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
}
function TwitterIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
}
function FacebookIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
}

const SOCIAL = [LinkedInIcon, TwitterIcon, FacebookIcon]

const SERVICES = [
  'Occupational Health & Safety','Energy Audit & Efficiency',
  'MEAL Systems','Resettlement Action Plans',
  'Research & Baseline Studies','Training & Capacity Building',
]
const COMPANY = [
  { label:'About Us', href:'/about' },{ label:'Our Services', href:'/services' },
  { label:'Portfolio', href:'/portfolio' },{ label:'Contact Us', href:'/contact' },
]

export function Footer() {
  return (
    <footer className="relative z-10" style={{
      background:'rgba(2,6,18,0.98)',
      backdropFilter:'blur(20px)',
      borderTop:'1px solid rgba(220,26,26,0.20)',
    }}>
      {/* Red-blue top bar */}
      <div className="h-[3px]" style={{background:'linear-gradient(90deg,#dc1a1a 0%,#a81010 35%,#0e2d8a 65%,#2563eb 100%)'}}/>

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
          style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative" style={{width:50,height:42}}>
                <Image src="/logo.png" alt="Jaman Consultancy" fill className="object-contain"/>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black tracking-widest text-white text-base">JAMAN</span>
                <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{color:'#dc1a1a'}}>Consultancy Limited</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Building Insight. Inspiring Impact. — A subsidiary of Jaman Engineering Works Ltd,
              delivering data-driven consultancy across Africa since 2009.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background='linear-gradient(135deg,#a81010,#dc1a1a)'
                    ;(e.currentTarget as HTMLElement).style.borderColor='transparent'
                    ;(e.currentTarget as HTMLElement).style.boxShadow='0 4px 16px rgba(220,26,26,0.4)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.06)'
                    ;(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.12)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow='none'
                  }}>
                  <span className="text-slate-400"><Icon/></span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:'#dc1a1a'}}>Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-slate-400 text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-colors group-hover:bg-red-500" style={{background:'rgba(220,26,26,0.5)'}}/>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:'#2563eb'}}>Company</h4>
            <ul className="space-y-2.5">
              {COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-colors group-hover:bg-blue-500" style={{background:'rgba(37,99,235,0.5)'}}/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:'#dc1a1a'}}>Contact</h4>
            <ul className="space-y-4">
              {[
                { Icon:Phone, text:'+254 733 315 621', href:'tel:+254733315621', color:'#dc1a1a' },
                { Icon:Mail, text:'jamanconsultingltd@gmail.com', href:'mailto:jamanconsultingltd@gmail.com', color:'#2563eb' },
                { Icon:Globe, text:'jamanconsultancy.co.ke', href:'http://www.jamanconsultancy.co.ke', color:'#dc1a1a' },
                { Icon:MapPin, text:'Nairobi, Kenya', href:'#', color:'#2563eb' },
              ].map(({ Icon, text, href, color }) => (
                <li key={text}>
                  <a href={href} className="flex items-start gap-3 text-slate-400 text-sm hover:text-white transition-colors group">
                    <Icon size={14} className="mt-0.5 flex-shrink-0 transition-colors" style={{color}}/>
                    <span className="break-all">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} <span style={{color:'#dc1a1a'}}>Jaman Consultancy Limited</span>. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Designed with <span className="text-red-500">♥</span> in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
