'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, ChevronLeft, LayoutGrid, Phone, Mail, Globe, HardHat, Zap, BarChart3, Home, BookOpen, Users, ChevronRight, MapPin } from 'lucide-react'
import { type ChatMessage, QUICK_REPLIES, getAIResponse } from '@/lib/chatbot'

type View = 'menu' | 'chat' | 'services' | 'contact'

const MENU_ITEMS = [
  { id:'chat' as View,     icon:MessageCircle, label:'Chat with AI Assistant', desc:'Ask anything about Jaman',       color:'#dc1a1a' },
  { id:'services' as View, icon:LayoutGrid,    label:'Browse Our Services',     desc:'Explore what we offer',         color:'#2563eb' },
  { id:'contact' as View,  icon:Phone,         label:'Contact Us Directly',     desc:'Get in touch with our team',    color:'#dc1a1a' },
]

const QUICK_SERVICES = [
  { icon:HardHat,   label:'OHS Consulting',    q:'Tell me about OHS services' },
  { icon:Zap,       label:'Energy Audits',     q:'Tell me about energy audit services' },
  { icon:BarChart3, label:'MEAL Systems',      q:'Tell me about MEAL services' },
  { icon:Home,      label:'Resettlement',      q:'Tell me about resettlement action plans' },
  { icon:BookOpen,  label:'Research',          q:'Tell me about research and baseline studies' },
  { icon:Users,     label:'Training',          q:'Tell me about training and capacity development' },
]

function uid() { return Math.random().toString(36).slice(2) }

export function ChatBot() {
  const [open, setOpen]         = useState(false)
  const [view, setView]         = useState<View>('menu')
  const [badge, setBadge]       = useState(true)
  const [input, setInput]       = useState('')
  const [typing, setTyping]     = useState(false)
  const [showQR, setShowQR]     = useState(true)
  const [msgs, setMsgs]         = useState<ChatMessage[]>([{
    id:uid(), role:'bot', timestamp:new Date(),
    text:'👋 Hello! I\'m the Jaman Consultancy AI Assistant.\n\nI can answer questions about our services, portfolio, certifications, team, and more.\n\nHow can I help you today?',
  }])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && view==='chat') {
      setBadge(false)
      setTimeout(() => endRef.current?.scrollIntoView({behavior:'smooth'}), 80)
    }
  }, [open, msgs, view])

  const goTo = (v: View) => setView(v)
  const goBack = () => setView('menu')

  const sendMsg = (text: string) => {
    if (!text.trim()) return
    setMsgs(p => [...p, { id:uid(), role:'user', text, timestamp:new Date() }])
    setInput('')
    setShowQR(false)
    setTyping(true)
    setTimeout(() => {
      setMsgs(p => [...p, { id:uid(), role:'bot', text:getAIResponse(text), timestamp:new Date() }])
      setTyping(false)
    }, 700 + Math.random()*600)
  }

  const VIEW_TITLE: Record<View,string> = {
    menu:'Jaman Assistant', chat:'AI Chat', services:'Our Services', contact:'Contact Us'
  }
  const VIEW_ICON: Record<View,string> = { menu:'🤖', chat:'💬', services:'⚡', contact:'📞' }

  return (
    <>
      {/* FAB */}
      <button onClick={() => { setOpen(!open); if(!open) setBadge(false) }}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-2xl"
        style={{ background:'linear-gradient(135deg,#a81010,#dc1a1a)', boxShadow: open ? '0 8px 30px rgba(220,26,26,0.7)':'0 8px 30px rgba(220,26,26,0.5)', transform: open ? 'scale(0.95)':'scale(1)' }}>
        {open ? <X size={22}/> : <MessageCircle size={22}/>}
        {badge && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background:'#dc1a1a', animation:'badgePulse 2s infinite' }}>1</span>
        )}
      </button>

      {/* Window */}
      <div className={`fixed bottom-24 right-6 z-[9998] w-[370px] max-w-[calc(100vw-2rem)] rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-300 origin-bottom-right ${open ? 'opacity-100 scale-100 pointer-events-auto':'opacity-0 scale-90 pointer-events-none'}`}
        style={{ height:530, background:'rgba(4,9,30,0.98)', backdropFilter:'blur(30px)', border:'1px solid rgba(255,255,255,0.10)' }}>

        {/* ─── HEADER ─── */}
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
          style={{ background:'linear-gradient(135deg,#6b0000,#a81010 40%,#0e2d8a)', borderBottom:'1px solid rgba(255,255,255,0.10)' }}>
          <div className="flex items-center gap-3">
            {/* Back button — shown on any non-menu view */}
            {view !== 'menu' && (
              <button onClick={goBack}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/25 transition-colors flex-shrink-0"
                aria-label="Back to menu">
                <ChevronLeft size={16} className="text-white"/>
              </button>
            )}
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
              style={{ background:'rgba(255,255,255,0.18)' }}>
              {VIEW_ICON[view]}
            </div>
            <div>
              <p className="text-white font-bold text-sm">{VIEW_TITLE[view]}</p>
              <p className="text-white/65 text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"/>
                {view==='menu' ? 'Select an option below' : 'Online — Ready to help'}
              </p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors p-1">
            <X size={18}/>
          </button>
        </div>

        {/* ─── MENU VIEW ─── */}
        {view==='menu' && (
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            <p className="text-slate-400 text-xs text-center mb-1 tracking-wider uppercase">How can we help you today?</p>
            {MENU_ITEMS.map(({ id, icon:Icon, label, desc, color }) => (
              <button key={id} onClick={() => goTo(id)}
                className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor=`${color}50`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.08)'}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:`${color}18`, border:`1px solid ${color}30` }}>
                  <Icon size={20} style={{color}}/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                </div>
                <ChevronRight size={16} className="text-slate-500 group-hover:text-slate-300 transition-colors flex-shrink-0"/>
              </button>
            ))}

            <div className="mt-2 pt-3 border-t border-white/[0.06] text-center">
              <p className="text-slate-500 text-[11px]">📍 Jaman Consultancy Limited · Nairobi, Kenya</p>
            </div>
          </div>
        )}

        {/* ─── SERVICES VIEW ─── */}
        {view==='services' && (
          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-slate-400 text-xs mb-4 tracking-wider uppercase">Tap a service to learn more</p>
            <div className="grid grid-cols-2 gap-2">
              {QUICK_SERVICES.map(({ icon:Icon, label, q }) => (
                <button key={label}
                  onClick={() => { goTo('chat'); setTimeout(() => sendMsg(q),150) }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5 group"
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(220,26,26,0.45)'; (e.currentTarget as HTMLElement).style.background='rgba(220,26,26,0.06)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.04)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background:'rgba(220,26,26,0.15)', border:'1px solid rgba(220,26,26,0.25)' }}>
                    <Icon size={18} style={{color:'#ff4444'}}/>
                  </div>
                  <span className="text-white text-xs font-semibold leading-tight">{label}</span>
                </button>
              ))}
            </div>
            <button onClick={goBack}
              className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}>
              <ChevronLeft size={15}/> Back to Menu
            </button>
          </div>
        )}

        {/* ─── CONTACT VIEW ─── */}
        {view==='contact' && (
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            <p className="text-slate-400 text-xs mb-1 tracking-wider uppercase">Reach us directly</p>
            {[
              { icon:Phone,  label:'Call Us',   value:'+254 733 315 621',            href:'tel:+254733315621',                        color:'#22c55e' },
              { icon:Mail,   label:'Email Us',  value:'jamanconsultingltd@gmail.com', href:'mailto:jamanconsultingltd@gmail.com',      color:'#dc1a1a' },
              { icon:Globe,  label:'Website',   value:'www.jamanconsultancy.co.ke',   href:'http://www.jamanconsultancy.co.ke',         color:'#2563eb' },
              { icon:MapPin, label:'Location',  value:'Nairobi, Kenya',               href:'#',                                        color:'#f59e0b' },
            ].map(({ icon:Icon, label, value, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor=`${color}50`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.08)'}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:`${color}18`, border:`1px solid ${color}30` }}>
                  <Icon size={18} style={{color}}/>
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] uppercase tracking-widest">{label}</p>
                  <p className="text-white text-sm font-semibold break-all">{value}</p>
                </div>
              </a>
            ))}
            <div className="p-3 rounded-xl text-center mt-1"
              style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-slate-400 text-xs">Mon–Fri · 8:00 AM – 6:00 PM EAT</p>
            </div>
            <button onClick={goBack}
              className="w-full mt-1 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}>
              <ChevronLeft size={15}/> Back to Menu
            </button>
          </div>
        )}

        {/* ─── CHAT VIEW ─── */}
        {view==='chat' && (
          <>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{scrollbarWidth:'thin'}}>
              {msgs.map(msg => (
                <div key={msg.id} className={`flex gap-2 items-end ${msg.role==='user'?'flex-row-reverse':'flex-row'}`}
                  style={{animation:'slideUp 0.3s ease'}}>
                  {msg.role==='bot' && (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 mb-1"
                      style={{ background:'linear-gradient(135deg,#a81010,#dc1a1a)' }}>🤖</div>
                  )}
                  <div className="max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                    style={msg.role==='bot'
                      ? { background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.09)', color:'#eef2ff', borderRadius:'16px 16px 16px 4px' }
                      : { background:'linear-gradient(135deg,#a81010,#dc1a1a)', color:'#fff', borderRadius:'16px 16px 4px 16px', boxShadow:'0 4px 16px rgba(220,26,26,0.3)' }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background:'linear-gradient(135deg,#a81010,#dc1a1a)' }}>🤖</div>
                  <div className="px-4 py-3 rounded-2xl" style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.09)' }}>
                    <div className="flex gap-1">
                      {[0,1,2].map(i => (
                        <span key={i} className="w-2 h-2 rounded-full inline-block"
                          style={{ background:'#dc1a1a', animation:'blink 1.2s infinite', animationDelay:`${i*0.2}s` }}/>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef}/>
            </div>

            {/* Quick replies */}
            {showQR && (
              <div className="flex gap-2 px-3 pb-2 flex-wrap">
                {QUICK_REPLIES.slice(0,4).map(qr => (
                  <button key={qr.value} onClick={() => sendMsg(qr.value)}
                    className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:text-white"
                    style={{ background:'rgba(220,26,26,0.10)', border:'1px solid rgba(220,26,26,0.25)', color:'#ff8888' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(220,26,26,0.20)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(220,26,26,0.5)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(220,26,26,0.10)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(220,26,26,0.25)' }}>
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input row */}
            <div className="p-3 flex gap-2" style={{ borderTop:'1px solid rgba(255,255,255,0.07)' }}>
              {/* Back-to-menu mini button */}
              <button onClick={goBack} title="Back to menu"
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110"
                style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)' }}>
                <LayoutGrid size={15} className="text-slate-400"/>
              </button>
              <input value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if(e.key==='Enter') sendMsg(input) }}
                placeholder="Ask about our services…"
                className="flex-1 px-4 py-2.5 rounded-full text-sm text-white placeholder-slate-500 outline-none transition-all"
                style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.10)' }}
                onFocus={e => (e.target.style.borderColor='rgba(220,26,26,0.5)' )}
                onBlur={e => (e.target.style.borderColor='rgba(255,255,255,0.10)')}/>
              <button onClick={() => sendMsg(input)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-all hover:scale-110"
                style={{ background:'linear-gradient(135deg,#a81010,#dc1a1a)', boxShadow:'0 4px 16px rgba(220,26,26,0.4)' }}>
                <Send size={15}/>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
