'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Globe, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'

const SERVICES_LIST = [
  'Occupational Health & Safety',
  'Energy Audit & Efficiency',
  'MEAL Systems',
  'Resettlement Action Plans',
  'Research & Baseline Studies',
  'Training & Capacity Development',
  'Project Management Support',
  'Other',
]

const CONTACT_INFO = [
  { Icon: Phone, label: 'Phone', value: '+254 733 315 621', href: 'tel:+254733315621', color: '#22c55e' },
  { Icon: Mail, label: 'Email', value: 'jamanconsultingltd@gmail.com', href: 'mailto:jamanconsultingltd@gmail.com', color: '#0ea5e9' },
  { Icon: Globe, label: 'Website', value: 'www.jamanconsultancy.co.ke', href: 'http://www.jamanconsultancy.co.ke', color: '#1a3a8f' },
  { Icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: '#map', color: '#cc1f1f' },
  { Icon: Clock, label: 'Business Hours', value: 'Mon–Fri · 8:00 AM – 6:00 PM EAT', href: '#', color: '#f59e0b' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', org: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1800)
  }

  const inputClass = `w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-300 placeholder-slate-500`
  const inputStyle = { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(6,14,26,1) 0%, rgba(13,31,60,1) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(14,165,233,0.13), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
          <div className="section-tag">Get In Touch</div>
          <h1 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Ready to transform your organization? Reach out to our expert team for a consultation
            tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.4)' }}>
                  <CheckCircle size={40} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-2xl">Message Sent!</h3>
                <p className="text-slate-400 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', org: '', message: '' }) }}
                  className="btn-ghost text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-xl mb-1">Send Us a Message</h3>
                <p className="text-slate-400 text-sm mb-7">We&apos;ll respond within 24 hours</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: 'firstName', label: 'First Name', placeholder: 'John', type: 'text' },
                      { key: 'lastName', label: 'Last Name', placeholder: 'Doe', type: 'text' },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key}>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                          className={inputClass}
                          style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = 'rgba(14,165,233,0.5)')}
                          onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                          required
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { key: 'email', label: 'Email Address', placeholder: 'john@organization.com', type: 'email' },
                    { key: 'phone', label: 'Phone Number', placeholder: '+254 700 000 000', type: 'tel' },
                    { key: 'org', label: 'Organization', placeholder: 'Your organization name', type: 'text' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className={inputClass}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'rgba(14,165,233,0.5)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                        required={key === 'email'}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Service of Interest</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className={inputClass}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(14,165,233,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                    >
                      <option value="" style={{ background: '#0d1f3c' }}>Select a service…</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s} style={{ background: '#0d1f3c' }}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project or inquiry…"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className={`${inputClass} resize-vertical`}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(14,165,233,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-sm"
                    style={{ opacity: loading ? 0.75 : 1 }}
                  >
                    {loading ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info + Map */}
          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map(({ Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-1"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = color + '55')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)')}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: color + '18' }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                  <p className="text-white font-semibold text-sm break-all">{value}</p>
                </div>
              </a>
            ))}

            {/* Google Map */}
            <div
              id="map"
              className="map-container rounded-2xl overflow-hidden"
              style={{ height: 280, border: '1px solid rgba(255,255,255,0.09)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35859285376!2d36.68259959999999!3d-1.3029295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jaman Consultancy Location — Nairobi, Kenya"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
