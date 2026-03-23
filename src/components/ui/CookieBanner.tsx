'use client'
import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('jaman-cookies')
    if (!accepted) setTimeout(() => setShow(true), 2000)
  }, [])

  const accept = () => { localStorage.setItem('jaman-cookies', 'accepted'); setShow(false) }
  const decline = () => { localStorage.setItem('jaman-cookies', 'declined'); setShow(false) }

  if (!show) return null

  return (
    <div
      role="dialog" aria-live="polite" aria-label="Cookie consent"
      className="fixed bottom-24 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-[380px] z-[9990] rounded-2xl p-5 shadow-2xl"
      style={{background:'var(--bg2)',border:'1px solid var(--border)',backdropFilter:'blur(20px)',animation:'slideUp 0.4s ease'}}>
      <button onClick={decline} aria-label="Close cookie banner"
        className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
        style={{color:'var(--text3)'}}>
        <X size={13}/>
      </button>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(217,26,26,0.15)'}}>
          <Cookie size={18} style={{color:'var(--red)'}}/>
        </div>
        <div>
          <p className="font-bold text-sm mb-1" style={{color:'var(--text)'}}>Cookie Preferences</p>
          <p className="text-xs leading-relaxed" style={{color:'var(--text2)'}}>
            We use cookies to enhance your experience and analyse site traffic. Your privacy matters to us.
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={accept}
          className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:-translate-y-0.5"
          style={{background:'linear-gradient(135deg,#a00e0e,#d91a1a)'}}>
          Accept All
        </button>
        <button onClick={decline}
          className="flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5"
          style={{background:'var(--surface)',border:'1px solid var(--border)',color:'var(--text2)'}}>
          Decline
        </button>
      </div>
    </div>
  )
}
