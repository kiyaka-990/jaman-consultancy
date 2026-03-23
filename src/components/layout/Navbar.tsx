'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon, ChevronDown, Type, Contrast, Volume2 } from 'lucide-react'
import { useTheme } from '@/components/ui/ThemeProvider'
import { SERVICES } from '@/lib/data'

const NAV_LINKS = [
  { href:'/', label:'Home' },
  {
    href:'/services', label:'Services',
    mega: SERVICES.map(s=>({ href:`/services#${s.id}`, label:s.title, icon:s.icon, short:s.short })),
  },
  { href:'/about', label:'About' },
  { href:'/portfolio', label:'Portfolio' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [dyslexicFont, setDyslexicFont] = useState(false)
  const [accOpen, setAccOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)
  const accRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false); setMegaOpen(false) }, [pathname])

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false)
      if (accRef.current && !accRef.current.contains(e.target as Node)) setAccOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const changeFontSize = (delta: number) => {
    const next = Math.min(22, Math.max(14, fontSize + delta))
    setFontSize(next)
    document.documentElement.style.fontSize = `${next}px`
  }
  const toggleHighContrast = () => {
    const next = !highContrast
    setHighContrast(next)
    document.documentElement.classList.toggle('high-contrast', next)
  }
  const toggleDyslexic = () => {
    const next = !dyslexicFont
    setDyslexicFont(next)
    document.documentElement.style.fontFamily = next ? "'OpenDyslexic', 'Comic Sans MS', cursive" : ''
  }

  const isDark = theme === 'dark'

  return (
    <>
      <nav
        role="navigation" aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
        style={{
          background: scrolled
            ? (isDark ? 'rgba(2,4,14,0.97)' : 'rgba(244,247,255,0.97)')
            : 'var(--nav-bg)',
          backdropFilter:'blur(24px)',
          WebkitBackdropFilter:'blur(24px)',
          borderBottom:'1px solid var(--border)',
          boxShadow: scrolled ? '0 2px 30px rgba(217,26,26,0.10)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[68px]">

          {/* Logo */}
          <Link href="/" aria-label="Jaman Consultancy Limited — Home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative transition-transform duration-300 group-hover:scale-105" style={{width:52,height:42}}>
              <Image src="/logo.png" alt="Jaman Consultancy logo" fill className="object-contain" priority sizes="52px"/>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-widest text-base sm:text-lg" style={{color:'var(--text)'}}>JAMAN</span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[2px] uppercase" style={{color:'var(--red)'}}>Consultancy Limited</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none" role="menubar">
            {NAV_LINKS.map(({ href, label, mega }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <li key={href} role="none" className="relative" ref={label === 'Services' ? megaRef : undefined}>
                  {mega ? (
                    <>
                      <button
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={megaOpen}
                        onClick={() => setMegaOpen(!megaOpen)}
                        className={`flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-200 ${active ? '' : 'hover:bg-white/05'}`}
                        style={{color: active ? 'var(--red)' : 'var(--text2)'}}>
                        {label}
                        <ChevronDown size={13} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}/>
                      </button>

                      {/* Mega Menu */}
                      {megaOpen && (
                        <div
                          role="menu" aria-label="Services menu"
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] rounded-2xl overflow-hidden shadow-2xl z-50"
                          style={{
                            background: isDark ? 'rgba(5,8,24,0.98)' : 'rgba(244,247,255,0.99)',
                            border:'1px solid var(--border)',
                            backdropFilter:'blur(24px)',
                            animation:'scaleIn 0.18s ease',
                          }}
                        >
                          <div className="p-2">
                            <div className="px-3 py-2 mb-1">
                              <p className="text-xs font-bold tracking-widest uppercase" style={{color:'var(--red)'}}>Our Services</p>
                              <p className="text-xs mt-0.5" style={{color:'var(--text3)'}}>Click any service to learn more</p>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {mega.map(({ href: mhref, label: mlabel, icon, short }) => (
                                <Link key={mhref} href="/services" role="menuitem"
                                  onClick={() => setMegaOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group/item"
                                  style={{color:'var(--text2)'}}
                                  onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement
                                    el.style.background = 'rgba(217,26,26,0.09)'
                                    el.style.color = 'var(--red)'
                                  }}
                                  onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement
                                    el.style.background = 'transparent'
                                    el.style.color = 'var(--text2)'
                                  }}
                                >
                                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                                    style={{background:'rgba(217,26,26,0.10)'}}>
                                    {icon}
                                  </span>
                                  <div>
                                    <p className="text-xs font-bold leading-tight">{short}</p>
                                    <p className="text-[10px] leading-tight opacity-70 mt-0.5">{mlabel.replace(short,'').trim()}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2" style={{borderTop:'1px solid var(--border)'}}>
                              <Link href="/services" onClick={() => setMegaOpen(false)}
                                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all"
                                style={{background:'linear-gradient(135deg,var(--red-dark),var(--red))'}}>
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={href} role="menuitem" aria-current={active ? 'page' : undefined}
                      className={`flex items-center text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-200 ${active ? '' : 'hover:bg-white/05'}`}
                      style={{color: active ? 'var(--red)' : 'var(--text2)'}}>
                      {label}
                      {active && <span className="ml-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:'var(--red)'}}/>}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">

            {/* Accessibility panel */}
            <div className="relative hidden md:block" ref={accRef}>
              <button
                onClick={() => setAccOpen(!accOpen)}
                aria-label="Accessibility options" aria-expanded={accOpen}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
                <span className="text-xs font-black" style={{color:'var(--text2)'}}>A</span>
              </button>

              {accOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl overflow-hidden shadow-2xl z-50 p-3"
                  style={{background: isDark ? 'rgba(5,8,24,0.98)':'rgba(244,247,255,0.99)', border:'1px solid var(--border)', backdropFilter:'blur(24px)', animation:'scaleIn 0.15s ease'}}>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-2 px-1" style={{color:'var(--text3)'}}>Accessibility</p>

                  {/* Font size */}
                  <div className="flex items-center justify-between px-1 py-1.5 mb-1">
                    <span className="text-xs font-semibold" style={{color:'var(--text2)'}}>Text Size</span>
                    <div className="flex items-center gap-1">
                      <button onClick={() => changeFontSize(-2)} aria-label="Decrease text size"
                        className="w-7 h-7 rounded-lg font-bold text-sm flex items-center justify-center transition-all hover:scale-110"
                        style={{background:'rgba(217,26,26,0.15)',color:'var(--red)'}}>A−</button>
                      <span className="text-xs font-mono w-8 text-center" style={{color:'var(--text)'}}>{fontSize}</span>
                      <button onClick={() => changeFontSize(2)} aria-label="Increase text size"
                        className="w-7 h-7 rounded-lg font-bold text-sm flex items-center justify-center transition-all hover:scale-110"
                        style={{background:'rgba(217,26,26,0.15)',color:'var(--red)'}}>A+</button>
                    </div>
                  </div>

                  {/* High contrast */}
                  <button onClick={toggleHighContrast}
                    className="w-full flex items-center gap-2.5 px-2 py-2 rounded-xl mb-1 transition-all text-left"
                    style={{background: highContrast ? 'rgba(217,26,26,0.15)' : 'transparent', color:'var(--text2)'}}
                    aria-pressed={highContrast}>
                    <Contrast size={14} style={{color: highContrast ? 'var(--red)' : 'var(--text3)'}}/>
                    <span className="text-xs font-semibold">High Contrast</span>
                    <div className="ml-auto w-8 h-4 rounded-full transition-all relative"
                      style={{background: highContrast ? 'var(--red)' : 'var(--border)'}}>
                      <div className="absolute w-3 h-3 bg-white rounded-full top-0.5 transition-all"
                        style={{left: highContrast ? '18px':'2px'}}/>
                    </div>
                  </button>

                  {/* Dyslexia font */}
                  <button onClick={toggleDyslexic}
                    className="w-full flex items-center gap-2.5 px-2 py-2 rounded-xl mb-1 transition-all text-left"
                    style={{background: dyslexicFont ? 'rgba(37,99,235,0.15)' : 'transparent', color:'var(--text2)'}}
                    aria-pressed={dyslexicFont}>
                    <Type size={14} style={{color: dyslexicFont ? 'var(--blue-light)' : 'var(--text3)'}}/>
                    <span className="text-xs font-semibold">Dyslexia Friendly</span>
                    <div className="ml-auto w-8 h-4 rounded-full transition-all relative"
                      style={{background: dyslexicFont ? 'var(--blue-light)' : 'var(--border)'}}>
                      <div className="absolute w-3 h-3 bg-white rounded-full top-0.5 transition-all"
                        style={{left: dyslexicFont ? '18px':'2px'}}/>
                    </div>
                  </button>

                  {/* Reset */}
                  <button onClick={() => { setFontSize(16); document.documentElement.style.fontSize='16px'; document.documentElement.style.fontFamily=''; setHighContrast(false); setDyslexicFont(false); document.documentElement.classList.remove('high-contrast') }}
                    className="w-full text-center text-xs py-1.5 rounded-lg transition-all"
                    style={{color:'var(--text3)',background:'var(--surface)'}}>
                    Reset All
                  </button>
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button onClick={toggle} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
              {isDark
                ? <Sun size={15} style={{color:'#fbbf24'}}/>
                : <Moon size={15} style={{color:'var(--blue-mid)'}}/>}
            </button>

            {/* Contact CTA */}
            <Link href="/contact" className="btn-red text-sm !py-2 !px-4 hidden lg:inline-flex" aria-label="Contact us">
              Contact Us
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{color:'var(--text)',background:'var(--surface)',border:'1px solid var(--border)'}}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu">
              {mobileOpen ? <X size={18}/> : <Menu size={18}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog" aria-label="Navigation menu" aria-hidden={!mobileOpen}
        className="fixed inset-x-0 top-16 sm:top-[68px] z-[998] transition-all duration-300 lg:hidden"
        style={{
          background: isDark ? 'rgba(2,4,14,0.98)' : 'rgba(244,247,255,0.98)',
          backdropFilter:'blur(24px)',
          borderBottom:'1px solid var(--border)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
          maxHeight: mobileOpen ? '90vh' : '0',
          overflowY:'auto',
        }}>
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
          {[...NAV_LINKS.map(n=>({href:n.href,label:n.label})),{href:'/contact',label:'Contact Us'}].map(({ href, label }) => (
            <Link key={href} href={href}
              className="py-3 px-4 rounded-xl text-base font-semibold transition-all"
              style={{
                color: pathname === href ? 'var(--red)' : 'var(--text2)',
                background: pathname === href ? 'rgba(217,26,26,0.08)' : 'transparent',
                borderLeft: pathname === href ? '3px solid var(--red)' : '3px solid transparent',
              }}>
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-3 pt-3" style={{borderTop:'1px solid var(--border)'}}>
            <button onClick={toggle}
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl flex-1 justify-center"
              style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text2)'}}>
              {isDark ? <><Sun size={14} style={{color:'#fbbf24'}}/> Light Mode</> : <><Moon size={14}/> Dark Mode</>}
            </button>
            <div className="flex gap-1">
              <button onClick={() => changeFontSize(-2)} aria-label="Decrease font size"
                className="w-10 h-10 rounded-xl font-bold text-xs flex items-center justify-center"
                style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text2)'}}>A−</button>
              <button onClick={() => changeFontSize(2)} aria-label="Increase font size"
                className="w-10 h-10 rounded-xl font-bold text-xs flex items-center justify-center"
                style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--red)'}}>A+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
