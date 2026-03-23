'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
      setShowTop(scrolled > 400)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 z-[9996] h-[3px] transition-all duration-100"
        style={{
          width:`${progress}%`,
          background:'linear-gradient(90deg,#d91a1a,#2563eb)',
          boxShadow:'0 0 8px rgba(217,26,26,0.6)',
        }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page reading progress"
      />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
        aria-label="Scroll back to top"
        className="fixed bottom-24 right-4 sm:right-6 z-[9990] w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300"
        style={{
          background:'linear-gradient(135deg,#a00e0e,#d91a1a)',
          boxShadow:'0 4px 16px rgba(217,26,26,0.4)',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.8)',
          pointerEvents: showTop ? 'auto' : 'none',
        }}>
        <ArrowUp size={18}/>
      </button>
    </>
  )
}
