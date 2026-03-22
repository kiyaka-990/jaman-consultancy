'use client'
import Image from 'next/image'

interface LogoProps {
  size?: number
  showText?: boolean
  className?: string
}

export function Logo({ size = 48, showText = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
        <Image
          src="/logo.png"
          alt="Jaman Consultancy Limited Logo"
          width={size}
          height={size}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-black tracking-widest text-white" style={{ fontSize: size * 0.29 }}>
            JAMAN
          </span>
          <span className="font-medium tracking-widest uppercase text-sky-400" style={{ fontSize: size * 0.14 }}>
            Consultancy Limited
          </span>
        </div>
      )}
    </div>
  )
}

/* Favicon-sized inline SVG for use in metadata — matches logo palette */
export function LogoFavicon() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a3a8f" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* outer arc */}
      <path d="M18 58 Q22 22 50 18 Q78 14 82 46" stroke="#1a3a8f" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <path d="M82 46 Q88 78 50 82 Q12 88 18 58" stroke="#1a3a8f" strokeWidth="9" fill="none" strokeLinecap="round"/>
      {/* check tick */}
      <path d="M30 54 L44 68 L72 36" stroke="url(#blueGrad)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* person head */}
      <circle cx="50" cy="20" r="8" fill="#cc1f1f"/>
    </svg>
  )
}
