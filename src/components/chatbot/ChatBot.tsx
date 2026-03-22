'use client'
import { useState, useRef, useEffect } from 'react'
import {
  MessageCircle, X, Send, ChevronLeft,
  LayoutGrid, Phone, Mail, Globe,
  HardHat, Zap, BarChart3, Home, BookOpen, Users
} from 'lucide-react'
import { type ChatMessage, QUICK_REPLIES, getAIResponse } from '@/lib/chatbot'

type View = 'menu' | 'chat' | 'services' | 'contact'

const menuItems = [
  { id: 'chat' as View, icon: MessageCircle, label: 'Chat with AI', desc: 'Ask anything about Jaman', color: '#0ea5e9' },
  { id: 'services' as View, icon: LayoutGrid, label: 'Our Services', desc: 'Browse what we offer', color: '#1a3a8f' },
  { id: 'contact' as View, icon: Phone, label: 'Contact Us', desc: 'Get in touch directly', color: '#cc1f1f' },
]

const quickServices = [
  { icon: HardHat, label: 'OHS Consulting', q: 'Tell me about OHS services' },
  { icon: Zap, label: 'Energy Audits', q: 'Tell me about energy audit services' },
  { icon: BarChart3, label: 'MEAL Systems', q: 'Tell me about MEAL services' },
  { icon: Home, label: 'Resettlement', q: 'Tell me about resettlement action plans' },
  { icon: BookOpen, label: 'Research', q: 'Tell me about research and baseline studies' },
  { icon: Users, label: 'Training', q: 'Tell me about training and capacity development' },
]

function uid() { return Math.random().toString(36).slice(2) }

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<View>('menu')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      role: 'bot',
      text: `👋 Hello! I'm the Jaman Consultancy AI Assistant.\n\nI can answer questions about our services, portfolio, certifications, and more. How can I help you today?`,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) { setShowBadge(false); endRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  }, [open, messages])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const userMsg: ChatMessage = { id: uid(), role: 'user', text, timestamp: new Date() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setShowQuickReplies(false)
    setTyping(true)
    setTimeout(() => {
      const resp = getAIResponse(text)
      setMessages(prev => [...prev, { id: uid(), role: 'bot', text: resp, timestamp: new Date() }])
      setTyping(false)
    }, 700 + Math.random() * 600)
  }

  const headerTitle = view === 'menu' ? 'Jaman Assistant' : view === 'chat' ? 'AI Chat' : view === 'services' ? 'Our Services' : 'Contact Us'

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a3a8f, #0ea5e9)',
          boxShadow: open ? '0 8px 30px rgba(14,165,233,0.6)' : '0 8px 30px rgba(26,58,143,0.5)',
        }}
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {showBadge && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold animate-badge-pulse">
            1
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[9998] w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right shadow-2xl ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        style={{
          height: 520,
          background: 'rgba(6,14,26,0.97)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #1a3a8f, #0ea5e9)' }}
        >
          <div className="flex items-center gap-3">
            {view !== 'menu' && (
              <button
                onClick={() => setView('menu')}
                className="w-7 h-7 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Back to menu"
              >
                <ChevronLeft size={16} className="text-white" />
              </button>
            )}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.2)' }}
            >
              {view === 'menu' ? '🤖' : view === 'chat' ? '💬' : view === 'services' ? '⚡' : '📞'}
            </div>
            <div>
              <p className="text-white font-bold text-sm">{headerTitle}</p>
              <p className="text-white/70 text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-blink" />
                {view === 'menu' ? 'How can we help?' : 'Online — Ready to help'}
              </p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* ---- MENU VIEW ---- */}
        {view === 'menu' && (
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            <p className="text-slate-400 text-xs text-center mb-1">Choose an option to get started</p>
            {menuItems.map(({ id, icon: Icon, label, desc, color }) => (
              <button
                key={id}
                onClick={() => setView(id)}
                className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color + '60' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + '22' }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                </div>
                <ChevronLeft size={16} className="text-slate-500 ml-auto rotate-180" />
              </button>
            ))}

            <div className="mt-2 pt-3 border-t border-white/[0.07]">
              <p className="text-slate-500 text-[11px] text-center">
                Jaman Consultancy Limited • Nairobi, Kenya
              </p>
            </div>
          </div>
        )}

        {/* ---- SERVICES VIEW ---- */}
        {view === 'services' && (
          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-slate-400 text-xs mb-3">Tap a service to learn more in the AI chat</p>
            <div className="grid grid-cols-2 gap-2">
              {quickServices.map(({ icon: Icon, label, q }) => (
                <button
                  key={label}
                  onClick={() => { setView('chat'); setTimeout(() => sendMessage(q), 100) }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(14,165,233,0.15)' }}>
                    <Icon size={18} className="text-sky-400" />
                  </div>
                  <span className="text-white text-xs font-medium leading-tight">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ---- CONTACT VIEW ---- */}
        {view === 'contact' && (
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            <p className="text-slate-400 text-xs mb-1">Reach us directly through any channel</p>
            {[
              { Icon: Phone, label: 'Call Us', value: '+254 733 315 621', href: 'tel:+254733315621', color: '#22c55e' },
              { Icon: Mail, label: 'Email Us', value: 'jamanconsultingltd@gmail.com', href: 'mailto:jamanconsultingltd@gmail.com', color: '#0ea5e9' },
              { Icon: Globe, label: 'Website', value: 'www.jamanconsultancy.co.ke', href: 'http://www.jamanconsultancy.co.ke', color: '#1a3a8f' },
            ].map(({ Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + '22' }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-slate-400 text-[11px]">{label}</p>
                  <p className="text-white text-sm font-medium break-all">{value}</p>
                </div>
              </a>
            ))}
            <div className="mt-1 p-3 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-slate-400 text-xs">📍 Nairobi, Kenya</p>
              <p className="text-slate-500 text-[11px] mt-1">Mon–Fri · 8:00 AM – 6:00 PM EAT</p>
            </div>
          </div>
        )}

        {/* ---- CHAT VIEW ---- */}
        {view === 'chat' && (
          <>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map(msg => (
                <div key={msg.id} className={`flex gap-2 items-end ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 mb-1"
                      style={{ background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)' }}>🤖</div>
                  )}
                  <div
                    className="max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                    style={msg.role === 'bot'
                      ? { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)', color: '#e2e8f0', borderRadius: '16px 16px 16px 4px' }
                      : { background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)', color: '#fff', borderRadius: '16px 16px 4px 16px' }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)' }}>🤖</div>
                  <div className="px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}>
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <span key={i} className="w-2 h-2 rounded-full bg-sky-400 inline-block"
                          style={{ animation: `bounce 1.2s infinite`, animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick Replies */}
            {showQuickReplies && (
              <div className="flex gap-2 px-3 pb-2 flex-wrap">
                {QUICK_REPLIES.slice(0, 4).map(qr => (
                  <button
                    key={qr.value}
                    onClick={() => sendMessage(qr.value)}
                    className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:border-sky-400 hover:text-sky-300"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#94a3b8' }}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t flex gap-2" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') sendMessage(input) }}
                placeholder="Ask about our services..."
                className="flex-1 px-4 py-2.5 rounded-full text-sm text-white placeholder-slate-500 outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = 'rgba(14,165,233,0.5)' }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
              />
              <button
                onClick={() => sendMessage(input)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#1a3a8f,#0ea5e9)' }}
              >
                <Send size={15} />
              </button>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  )
}
