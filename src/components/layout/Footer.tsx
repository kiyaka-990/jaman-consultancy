'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Globe, MapPin, ArrowUp } from 'lucide-react'

function Li({ children }: {children:React.ReactNode}) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">{children}</svg>
}
const SocialIcons = [
  <Li key="li"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></Li>,
  <Li key="tw"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></Li>,
  <Li key="fb"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></Li>,
]

const SERVICES_LIST = ['Occupational Health & Safety','Energy Audit & Efficiency','MEAL Systems','Resettlement Action Plans','Research & Baseline Studies','Training & Capacity Building']
const COMPANY_LIST = [{label:'About Us',href:'/about'},{label:'Our Services',href:'/services'},{label:'Portfolio',href:'/portfolio'},{label:'Our Team',href:'/about#team'},{label:'Contact Us',href:'/contact'}]

export function Footer() {
  return (
    <footer className="relative z-10" role="contentinfo" aria-label="Site footer"
      style={{background:'rgba(2,4,14,0.99)',backdropFilter:'blur(20px)',borderTop:'1px solid rgba(217,26,26,0.18)'}}>
      {/* Red-blue bar */}
      <div className="h-[3px]" style={{background:'linear-gradient(90deg,var(--red) 0%,var(--red-dark) 35%,var(--blue) 65%,var(--blue-light) 100%)'}} aria-hidden="true"/>

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12" style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative" style={{width:58,height:46}}>
                <Image src="/logo.png" alt="Jaman Consultancy Limited" fill className="object-contain"/>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black tracking-widest text-white text-base">JAMAN</span>
                <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{color:'var(--red)'}}>Consultancy Limited</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Building Insight. Inspiring Impact. — A subsidiary of Jaman Engineering Works Ltd, delivering data-driven consultancy across Africa since 2009.
            </p>
            <div className="flex gap-2.5">
              {SocialIcons.map((Icon,i)=>(
                <a key={i} href="#" aria-label={['LinkedIn','Twitter','Facebook'][i]}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer text-slate-400"
                  style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.10)'}}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background='linear-gradient(135deg,#a00e0e,#d91a1a)';el.style.color='#fff';el.style.borderColor='transparent';el.style.boxShadow='0 4px 16px rgba(217,26,26,0.4)'}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background='rgba(255,255,255,0.06)';el.style.color='#94a3b8';el.style.borderColor='rgba(255,255,255,0.10)';el.style.boxShadow='none'}}>
                  {Icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:'var(--red)'}}>Services</h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES_LIST.map(s=>(
                <li key={s}>
                  <Link href="/services" className="text-slate-400 text-sm transition-colors flex items-center gap-2 group hover:text-red-400">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-colors group-hover:bg-red-500" style={{background:'rgba(217,26,26,0.5)'}}/>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:'var(--blue-light)'}}>Company</h3>
            <ul className="space-y-2.5" role="list">
              {COMPANY_LIST.map(({label,href})=>(
                <li key={href}>
                  <Link href={href} className="text-slate-400 text-sm transition-colors flex items-center gap-2 group hover:text-blue-400">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-colors group-hover:bg-blue-500" style={{background:'rgba(37,99,235,0.5)'}}/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:'var(--red)'}}>Get In Touch</h3>
            <ul className="space-y-4" role="list">
              {[
                {Icon:Phone,text:'+254 733 315 621',href:'tel:+254733315621',color:'var(--red)',label:'Phone number'},
                {Icon:Mail,text:'jamanconsultingltd@gmail.com',href:'mailto:jamanconsultingltd@gmail.com',color:'var(--blue-light)',label:'Email address'},
                {Icon:Globe,text:'jamanconsultancy.co.ke',href:'http://www.jamanconsultancy.co.ke',color:'var(--red)',label:'Website'},
                {Icon:MapPin,text:'Nairobi, Kenya',href:'/contact#map',color:'var(--blue-light)',label:'Location'},
              ].map(({Icon,text,href,color,label})=>(
                <li key={text}>
                  <a href={href} aria-label={label} className="flex items-start gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                    <Icon size={14} className="mt-0.5 flex-shrink-0" style={{color}}/>
                    <span className="break-all">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} <span style={{color:'var(--red)'}}>Jaman Consultancy Limited</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-sm">Designed with <span className="text-red-500">♥</span>by Asterleigh Systems</p>
            <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
              style={{background:'linear-gradient(135deg,var(--red-dark),var(--red))'}}
              aria-label="Scroll to top">
              <ArrowUp size={15} className="text-white"/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
