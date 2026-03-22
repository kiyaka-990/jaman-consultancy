'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact', cta: true },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(6,14,26,0.95)'
            : 'rgba(10,22,40,0.65)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[68px]">
          <Link href="/" aria-label="Home">
            <Logo size={44} />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ href, label, cta }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      cta
                        ? 'btn-primary text-sm !py-2.5 !px-5'
                        : `relative text-sm font-medium transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 ${
                            active
                              ? 'text-white after:w-full after:bg-sky-400'
                              : 'text-slate-400 hover:text-white after:w-0 hover:after:w-full after:bg-sky-400'
                          }`
                    }
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg transition-colors hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[68px] z-[998] transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(6,14,26,0.98)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-medium py-2.5 border-b border-white/5 transition-colors ${
                pathname === href ? 'text-sky-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
