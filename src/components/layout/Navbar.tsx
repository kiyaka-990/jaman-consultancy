'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href:'/', label:'Home' },
  { href:'/services', label:'Services' },
  { href:'/about', label:'About' },
  { href:'/portfolio', label:'Portfolio' },
  { href:'/contact', label:'Contact', cta:true },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(4,9,30,0.97)' : 'rgba(4,9,30,0.75)',
          backdropFilter:'blur(24px)',
          WebkitBackdropFilter:'blur(24px)',
          borderBottom:'1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 2px 30px rgba(220,26,26,0.12)' : 'none',
        }}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative" style={{width:52,height:44}}>
              <Image src="/logo.png" alt="Jaman Consultancy" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-widest text-white text-lg">JAMAN</span>
              <span className="text-[10px] font-semibold tracking-[3px] uppercase" style={{color:'#dc1a1a'}}>Consultancy Limited</span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map(({ href, label, cta }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  {cta ? (
                    <Link href={href} className="btn-primary text-sm !py-2 !px-5">
                      {label}
                    </Link>
                  ) : (
                    <Link href={href}
                      className={`relative text-sm font-semibold transition-colors duration-200 pb-1
                        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300
                        ${active ? 'text-white after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500' : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500'}`}>
                      {label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>

          <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-x-0 top-[68px] z-[998] transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
        style={{ background:'rgba(4,9,30,0.98)', backdropFilter:'blur(24px)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`py-3 px-4 rounded-xl text-base font-semibold transition-all ${pathname===href ? 'text-white bg-white/08' : 'text-slate-300 hover:text-white hover:bg-white/05'}`}
              style={pathname===href ? {background:'rgba(220,26,26,0.12)',borderLeft:'3px solid #dc1a1a'} : {}}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
