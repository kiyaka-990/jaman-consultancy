'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from '@/components/ui/ThemeProvider'

const NAV = [
  { href:'/', label:'Home' },
  { href:'/services', label:'Services', sub:['OHS Consulting','Energy Audits','MEAL Systems','Research','Training'] },
  { href:'/about', label:'About' },
  { href:'/portfolio', label:'Portfolio' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string|null>(null)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav role="navigation" aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
        style={{
          background: scrolled ? (theme==='light'?'rgba(248,250,255,0.97)':'rgba(3,6,15,0.97)') : 'var(--nav-bg)',
          backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)',
          borderBottom:'1px solid var(--border)',
          boxShadow: scrolled ? '0 2px 30px rgba(217,26,26,0.10)' : 'none',
        }}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" aria-label="Jaman Consultancy Limited - Home" className="flex items-center gap-3 group">
            <div className="relative transition-transform duration-300 group-hover:scale-105" style={{width:58,height:46}}>
              <Image src="/logo.png" alt="Jaman Consultancy Limited logo" fill className="object-contain" priority sizes="58px"/>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-widest text-lg" style={{color:'var(--text)'}}>JAMAN</span>
              <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{color:'var(--red)'}}>Consultancy Limited</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none" role="menubar">
            {NAV.map(({ href, label, sub }) => {
              const active = pathname === href
              return (
                <li key={href} role="none" className="relative"
                  onMouseEnter={() => setHoveredNav(label)}
                  onMouseLeave={() => setHoveredNav(null)}>
                  <Link href={href} role="menuitem"
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 py-1 ${active ? 'text-red-500' : 'hover:text-red-400'}`}
                    style={{color: active ? 'var(--red)' : 'var(--text2)'}}>
                    {label}
                    {sub && <ChevronDown size={13} className={`transition-transform ${hoveredNav===label?'rotate-180':''}`}/>}
                  </Link>
                  {/* Dropdown */}
                  {sub && hoveredNav===label && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden shadow-2xl z-50"
                      role="menu" aria-label={`${label} submenu`}
                      style={{background:'var(--bg2)',border:'1px solid var(--border)',animation:'fadeIn 0.15s ease'}}>
                      {sub.map(s => (
                        <Link key={s} href="/services" role="menuitem"
                          className="block px-4 py-2.5 text-sm transition-all duration-150 hover:pl-6"
                          style={{color:'var(--text2)',borderBottom:'1px solid var(--border)'}}
                          onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='var(--red)'}
                          onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='var(--text2)'}>
                          {s}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button onClick={toggle} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
              {theme==='dark'
                ? <Sun size={16} style={{color:'var(--red)'}}/>
                : <Moon size={16} style={{color:'var(--blue-mid)'}}/>}
            </button>

            {/* Accessibility toggle: font size */}
            <button id="font-size-btn" aria-label="Increase text size"
              className="hidden md:flex w-9 h-9 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 font-bold text-xs"
              style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text2)'}}
              onClick={() => {
                const html = document.documentElement
                const curr = parseFloat(getComputedStyle(html).fontSize)
                html.style.fontSize = curr >= 20 ? '16px' : `${curr+2}px`
              }}>A+</button>

            <Link href="/contact" className="btn-red text-sm !py-2 !px-5 hidden md:inline-flex"
              aria-label="Contact Jaman Consultancy">
              Contact Us
            </Link>
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={()=>setOpen(!open)} aria-label="Toggle mobile menu" aria-expanded={open}>
              {open ? <X size={22} style={{color:'var(--text)'}}/> : <Menu size={22} style={{color:'var(--text)'}}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-x-0 top-[68px] z-[998] transition-all duration-300 ${open?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'}`}
        style={{background:theme==='light'?'rgba(248,250,255,0.98)':'rgba(3,6,15,0.98)',backdropFilter:'blur(24px)',borderBottom:'1px solid var(--border)'}}
        role="dialog" aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
          {[...NAV,{href:'/contact',label:'Contact Us'}].map(({ href, label }) => (
            <Link key={href} href={href}
              className="py-3 px-4 rounded-xl text-base font-semibold transition-all"
              style={{
                color: pathname===href ? 'var(--red)' : 'var(--text2)',
                background: pathname===href ? 'rgba(217,26,26,0.08)' : 'transparent',
                borderLeft: pathname===href ? '3px solid var(--red)' : '3px solid transparent',
              }}>
              {label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4 pt-4" style={{borderTop:'1px solid var(--border)'}}>
            <button onClick={toggle} className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl" style={{background:'var(--surface)',color:'var(--text2)'}}>
              {theme==='dark' ? <><Sun size={15}/> Light Mode</> : <><Moon size={15}/> Dark Mode</>}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
