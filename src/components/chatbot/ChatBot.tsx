'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import {
  MessageCircle, X, Send, ChevronLeft, LayoutGrid,
  Phone, Mail, Globe, HardHat, Zap, BarChart3,
  Home, BookOpen, Users, ChevronRight, MapPin, Minimize2, Maximize2
} from 'lucide-react'
import { useTheme } from '@/components/ui/ThemeProvider'
import { type ChatMessage, QUICK_REPLIES, getAIResponse } from '@/lib/chatbot'

type View = 'menu' | 'chat' | 'services' | 'contact'

const MENU_ITEMS = [
  { id: 'chat'     as View, icon: MessageCircle, label: 'Chat with AI', desc: 'Ask anything about Jaman', color: '#d91a1a' },
  { id: 'services' as View, icon: LayoutGrid,    label: 'Our Services',  desc: 'Browse what we offer',    color: '#2563eb' },
  { id: 'contact'  as View, icon: Phone,         label: 'Contact Us',    desc: 'Reach us directly',       color: '#16a34a' },
]

const QUICK_SERVICES = [
  { icon: HardHat,   label: 'OHS',      q: 'Tell me about OHS services' },
  { icon: Zap,       label: 'Energy',   q: 'Tell me about energy audit services' },
  { icon: BarChart3, label: 'MEAL',     q: 'Tell me about MEAL services' },
  { icon: Home,      label: 'RAP',      q: 'Tell me about resettlement action plans' },
  { icon: BookOpen,  label: 'Research', q: 'Tell me about research and baseline studies' },
  { icon: Users,     label: 'Training', q: 'Tell me about training and capacity development' },
]

function uid() { return Math.random().toString(36).slice(2) }

export function ChatBot() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const [open, setOpen]     = useState(false)
  const [view, setView]     = useState<View>('menu')
  const [badge, setBadge]   = useState(true)
  const [input, setInput]   = useState('')
  const [typing, setTyping] = useState(false)
  const [showQR, setShowQR] = useState(true)
  const [mini, setMini]     = useState(false)
  const [msgs, setMsgs]     = useState<ChatMessage[]>([{
    id: uid(), role: 'bot', timestamp: new Date(),
    text: "👋 Hi! I'm the Jaman Consultancy AI Assistant.\n\nUse the menu below to browse services, get contact info, or just ask me anything!",
  }])

  const endRef   = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && view === 'chat') {
      setBadge(false)
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 80)
    }
  }, [open, msgs, view])

  const goTo   = useCallback((v: View) => setView(v), [])
  const goBack = useCallback(() => setView('menu'), [])

  const sendMsg = useCallback((text: string) => {
    if (!text.trim()) return
    setMsgs(p => [...p, { id: uid(), role: 'user', text, timestamp: new Date() }])
    setInput('')
    setShowQR(false)
    setTyping(true)
    setTimeout(() => {
      setMsgs(p => [...p, { id: uid(), role: 'bot', text: getAIResponse(text), timestamp: new Date() }])
      setTyping(false)
    }, 700 + Math.random() * 500)
  }, [])

  /* ── Colours that flip with theme ── */
  const C = {
    /* Window */
    winBg:        dark ? '#07101f'            : '#ffffff',
    winBorder:    dark ? 'rgba(255,255,255,0.10)' : 'rgba(13,43,133,0.15)',
    winShadow:    dark ? '0 24px 60px rgba(0,0,0,0.6)' : '0 24px 60px rgba(13,43,133,0.18)',
    /* Body */
    bodyBg:       dark ? '#07101f'            : '#f4f7ff',
    /* Cards / rows */
    cardBg:       dark ? 'rgba(255,255,255,0.05)'  : 'rgba(13,43,133,0.05)',
    cardBorder:   dark ? 'rgba(255,255,255,0.08)'  : 'rgba(13,43,133,0.12)',
    cardBgHov:    dark ? 'rgba(217,26,26,0.08)'    : 'rgba(217,26,26,0.06)',
    cardBrdHov:   'rgba(217,26,26,0.45)',
    /* Text */
    text:         dark ? '#eef2ff'            : '#0d1226',
    text2:        dark ? '#94a3b8'            : '#374151',
    text3:        dark ? '#64748b'            : '#6b7280',
    /* Input */
    inputBg:      dark ? 'rgba(255,255,255,0.07)' : 'rgba(13,43,133,0.06)',
    inputBorder:  dark ? 'rgba(255,255,255,0.12)' : 'rgba(13,43,133,0.18)',
    inputText:    dark ? '#eef2ff'            : '#0d1226',
    inputPlaceholder: dark ? '#64748b'        : '#9ca3af',
    /* Bot bubble */
    botBubbleBg:  dark ? 'rgba(255,255,255,0.08)' : '#e9eef8',
    botBubbleBrd: dark ? 'rgba(255,255,255,0.10)' : 'rgba(13,43,133,0.15)',
    botBubbleTxt: dark ? '#eef2ff'            : '#0d1226',
    /* Section divider */
    divider:      dark ? 'rgba(255,255,255,0.07)' : 'rgba(13,43,133,0.10)',
    /* Back btn */
    backBg:       dark ? 'rgba(255,255,255,0.05)' : 'rgba(13,43,133,0.06)',
    backBrd:      dark ? 'rgba(255,255,255,0.10)' : 'rgba(13,43,133,0.15)',
    backTxt:      dark ? '#94a3b8'            : '#374151',
    /* Mini pill */
    menuBtnBg:    dark ? 'rgba(255,255,255,0.07)' : 'rgba(13,43,133,0.07)',
    menuBtnBrd:   dark ? 'rgba(255,255,255,0.12)' : 'rgba(13,43,133,0.15)',
    menuBtnIco:   dark ? '#94a3b8'            : '#374151',
    /* QR chips */
    qrBg:         dark ? 'rgba(217,26,26,0.10)'  : 'rgba(217,26,26,0.08)',
    qrBrd:        dark ? 'rgba(217,26,26,0.25)'  : 'rgba(217,26,26,0.30)',
    qrTxt:        dark ? '#ff8888'               : '#a00e0e',
    /* Footer note */
    footerTxt:    dark ? 'rgba(100,116,139,0.8)' : '#6b7280',
    /* Hours pill */
    hoursBg:      dark ? 'rgba(255,255,255,0.04)' : 'rgba(13,43,133,0.04)',
    hoursBrd:     dark ? 'rgba(255,255,255,0.07)' : 'rgba(13,43,133,0.10)',
  }

  const TITLE: Record<View, string> = { menu:'Jaman Assistant', chat:'AI Chat', services:'Services', contact:'Contact' }
  const EMOJI: Record<View, string> = { menu:'🤖', chat:'💬', services:'⚡', contact:'📞' }

  return (
    <>
      {/* ── Responsive sizing via <style> ── */}
      <style>{`
        .jcb-win {
          /* Mobile-first: full screen */
          position: fixed;
          inset: 0;
          border-radius: 0;
          width: 100%;
          height: 100dvh;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        /* sm+ : floating panel anchored bottom-right */
        @media (min-width: 480px) {
          .jcb-win {
            inset: auto;
            bottom: 5.5rem;
            right: 1rem;
            left: auto;
            top: auto;
            width: 360px;
            height: ${mini ? '60px' : '540px'};
            border-radius: 20px;
          }
        }
        /* If minimised on mobile, also shrink */
        .jcb-win.jcb-mini {
          height: 60px !important;
          inset: auto !important;
          bottom: 5.5rem !important;
          right: 1rem !important;
          left: auto !important;
          top: auto !important;
          width: min(360px, calc(100vw - 2rem)) !important;
          border-radius: 16px !important;
        }
      `}</style>

      {/* ── FAB ── */}
      <button
        onClick={() => { setOpen(o => !o); setBadge(false) }}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        aria-expanded={open}
        className="fixed bottom-6 right-4 sm:right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg,#a00e0e,#d91a1a)',
          boxShadow: open ? '0 8px 30px rgba(217,26,26,0.7)' : '0 8px 30px rgba(217,26,26,0.5)',
          transform: open ? 'scale(0.92) rotate(90deg)' : 'scale(1)',
        }}
      >
        {open ? <X size={20} /> : <MessageCircle size={22} />}
        {badge && !open && (
          <span aria-hidden="true"
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: '#d91a1a', animation: 'badgePulse 2.5s infinite' }}>
            1
          </span>
        )}
      </button>

      {/* ── Chat Window ── */}
      {open && (
        <div
          role="dialog"
          aria-label="Jaman Consultancy Chat Assistant"
          aria-modal="true"
          className={`jcb-win${mini ? ' jcb-mini' : ''}`}
          style={{
            background: C.winBg,
            border: `1px solid ${C.winBorder}`,
            boxShadow: C.winShadow,
            transition: 'height 0.3s ease, border-radius 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* ── HEADER ── */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg,#5a0000,#a00e0e 45%,#0d2b85)',
              borderBottom: `1px solid rgba(255,255,255,0.10)`,
              minHeight: 56,
            }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {view !== 'menu' && (
                <button
                  onClick={goBack}
                  aria-label="Back to main menu"
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white hover:bg-white/20 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <ChevronLeft size={16} />
                </button>
              )}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.18)' }}>
                {EMOJI[view]}
              </div>
              <div className="min-w-0">
                <p className="text-white font-bold text-sm leading-tight truncate">{TITLE[view]}</p>
                <p className="text-white/60 text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse flex-shrink-0" />
                  <span className="truncate">{view === 'menu' ? 'Select an option' : 'Online · Ready to help'}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => setMini(m => !m)}
                aria-label={mini ? 'Expand chat' : 'Minimize chat'}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all"
              >
                {mini ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* ── BODY (hidden when minimised) ── */}
          {!mini && (
            <div className="flex flex-col flex-1 min-h-0" style={{ background: C.bodyBg }}>

              {/* ═══ MENU VIEW ═══ */}
              {view === 'menu' && (
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-center pb-1" style={{ color: C.text3 }}>
                    How can we help you?
                  </p>
                  {MENU_ITEMS.map(({ id, icon: Icon, label, desc, color }) => (
                    <button
                      key={id}
                      onClick={() => goTo(id)}
                      aria-label={`${label}: ${desc}`}
                      className="w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 hover:-translate-y-0.5 group"
                      style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}` }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = `${color}55`
                        el.style.background  = dark ? `${color}12` : `${color}08`
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = C.cardBorder
                        el.style.background  = C.cardBg
                      }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm leading-tight" style={{ color: C.text }}>{label}</p>
                        <p className="text-xs mt-0.5 truncate" style={{ color: C.text2 }}>{desc}</p>
                      </div>
                      <ChevronRight size={15} style={{ color: C.text3, flexShrink: 0 }} />
                    </button>
                  ))}
                  <div className="mt-auto pt-3" style={{ borderTop: `1px solid ${C.divider}` }}>
                    <p className="text-[11px] text-center" style={{ color: C.footerTxt }}>
                      📍 Jaman Consultancy · Nairobi, Kenya
                    </p>
                  </div>
                </div>
              )}

              {/* ═══ SERVICES VIEW ═══ */}
              {view === 'services' && (
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: C.text3 }}>
                    Tap to ask AI about any service
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {QUICK_SERVICES.map(({ icon: Icon, label, q }) => (
                      <button
                        key={label}
                        onClick={() => { goTo('chat'); setTimeout(() => sendMsg(q), 150) }}
                        aria-label={`Ask about ${label}`}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5"
                        style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}` }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement
                          el.style.borderColor = C.cardBrdHov
                          el.style.background  = C.cardBgHov
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement
                          el.style.borderColor = C.cardBorder
                          el.style.background  = C.cardBg
                        }}
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{ background: 'rgba(217,26,26,0.14)', border: '1px solid rgba(217,26,26,0.28)' }}>
                          <Icon size={16} style={{ color: '#d91a1a' }} />
                        </div>
                        <span className="text-[11px] font-semibold leading-tight" style={{ color: C.text }}>{label}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={goBack}
                    className="w-full mt-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    style={{ background: C.backBg, border: `1px solid ${C.backBrd}`, color: C.backTxt }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#d91a1a'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.backTxt}
                  >
                    <ChevronLeft size={14} /> Back to Menu
                  </button>
                </div>
              )}

              {/* ═══ CONTACT VIEW ═══ */}
              {view === 'contact' && (
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                  <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: C.text3 }}>
                    Reach us directly
                  </p>
                  {[
                    { icon: Phone,  label: 'Call',     value: '+254 733 315 621',             href: 'tel:+254733315621',                    color: '#16a34a' },
                    { icon: Mail,   label: 'Email',    value: 'jamanconsultingltd@gmail.com',  href: 'mailto:jamanconsultingltd@gmail.com',  color: '#d91a1a' },
                    { icon: Globe,  label: 'Website',  value: 'www.jamanconsultancy.co.ke',    href: 'http://www.jamanconsultancy.co.ke',     color: '#2563eb' },
                    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya',                href: '/contact#map',                         color: '#d97706' },
                  ].map(({ icon: Icon, label, value, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      aria-label={`${label}: ${value}`}
                      className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}`, textDecoration: 'none' }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = `${color}55`
                        el.style.background  = dark ? `${color}10` : `${color}08`
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = C.cardBorder
                        el.style.background  = C.cardBg
                      }}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.text3 }}>{label}</p>
                        <p className="text-sm font-semibold truncate" style={{ color: C.text }}>{value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="p-3 rounded-xl text-center" style={{ background: C.hoursBg, border: `1px solid ${C.hoursBrd}` }}>
                    <p className="text-xs" style={{ color: C.text3 }}>Mon–Fri · 8:00 AM – 6:00 PM EAT</p>
                  </div>
                  <button
                    onClick={goBack}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                    style={{ background: C.backBg, border: `1px solid ${C.backBrd}`, color: C.backTxt }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#d91a1a'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.backTxt}
                  >
                    <ChevronLeft size={14} /> Back to Menu
                  </button>
                </div>
              )}

              {/* ═══ CHAT VIEW ═══ */}
              {view === 'chat' && (
                <>
                  {/* Messages */}
                  <div
                    className="flex-1 overflow-y-auto p-4 flex flex-col gap-3"
                    aria-live="polite"
                    aria-label="Chat messages"
                    style={{ minHeight: 0 }}
                  >
                    {msgs.map(msg => (
                      <div
                        key={msg.id}
                        className={`flex gap-2 items-end ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                        style={{ animation: 'slideUp 0.25s ease' }}
                      >
                        {msg.role === 'bot' && (
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 mb-1"
                            style={{ background: 'linear-gradient(135deg,#a00e0e,#d91a1a)' }}>🤖</div>
                        )}
                        <div
                          className="max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words"
                          style={msg.role === 'bot'
                            ? {
                                background: C.botBubbleBg,
                                border: `1px solid ${C.botBubbleBrd}`,
                                color: C.botBubbleTxt,
                                borderRadius: '16px 16px 16px 4px',
                              }
                            : {
                                background: 'linear-gradient(135deg,#a00e0e,#d91a1a)',
                                color: '#fff',
                                borderRadius: '16px 16px 4px 16px',
                                boxShadow: '0 4px 16px rgba(217,26,26,0.3)',
                              }
                          }
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {typing && (
                      <div className="flex gap-2 items-end">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg,#a00e0e,#d91a1a)' }}>🤖</div>
                        <div className="px-4 py-3 rounded-2xl"
                          style={{ background: C.botBubbleBg, border: `1px solid ${C.botBubbleBrd}` }}>
                          <div className="flex gap-1" role="status" aria-label="Typing">
                            {[0, 1, 2].map(i => (
                              <span key={i} className="w-2 h-2 rounded-full inline-block"
                                style={{ background: '#d91a1a', animation: `blink 1.2s infinite`, animationDelay: `${i * 0.2}s` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={endRef} />
                  </div>

                  {/* Quick replies */}
                  {showQR && (
                    <div className="flex gap-1.5 px-3 pb-2 flex-wrap" role="group" aria-label="Quick replies">
                      {QUICK_REPLIES.slice(0, 4).map(qr => (
                        <button
                          key={qr.value}
                          onClick={() => sendMsg(qr.value)}
                          className="text-[11px] px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                          style={{ background: C.qrBg, border: `1px solid ${C.qrBrd}`, color: C.qrTxt }}
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Input row */}
                  <div
                    className="p-3 flex gap-2 items-center flex-shrink-0"
                    style={{ borderTop: `1px solid ${C.divider}` }}
                  >
                    {/* Menu icon — back to menu */}
                    <button
                      onClick={goBack}
                      aria-label="Back to menu"
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110"
                      style={{ background: C.menuBtnBg, border: `1px solid ${C.menuBtnBrd}` }}
                    >
                      <LayoutGrid size={14} style={{ color: C.menuBtnIco }} />
                    </button>

                    <input
                      ref={inputRef}
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(input) } }}
                      placeholder="Ask about our services…"
                      aria-label="Type your message"
                      className="flex-1 min-w-0 px-3.5 py-2.5 rounded-full text-sm outline-none transition-all"
                      style={{
                        background: C.inputBg,
                        border: `1px solid ${C.inputBorder}`,
                        color: C.inputText,
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(217,26,26,0.55)')}
                      onBlur={e  => (e.target.style.borderColor = C.inputBorder)}
                    />

                    <button
                      onClick={() => sendMsg(input)}
                      aria-label="Send message"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-all hover:scale-110 active:scale-95"
                      style={{ background: 'linear-gradient(135deg,#a00e0e,#d91a1a)', boxShadow: '0 4px 16px rgba(217,26,26,0.4)' }}
                    >
                      <Send size={14} />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}
