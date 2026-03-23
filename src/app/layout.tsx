import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { ChatBot } from '@/components/chatbot/ChatBot'

const outfit = Outfit({ subsets:['latin'], variable:'--font-outfit', display:'swap' })
const playfair = Playfair_Display({ subsets:['latin'], variable:'--font-playfair', display:'swap' })

export const metadata: Metadata = {
  title: 'Jaman Consultancy Limited | Building Insight. Inspiring Impact.',
  description: 'Evidence-based, inclusive, and innovative consultancy — OHS, Energy Audits, MEAL, Research, RAP, Training across Africa.',
  icons: { icon:'/logo.png', shortcut:'/logo.png', apple:'/logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        {/* Ambient orbs — red + blue matching logo */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
          <div className="absolute rounded-full" style={{ width:800,height:800,background:'radial-gradient(circle,rgba(220,26,26,0.13),transparent 65%)',filter:'blur(100px)',top:-300,left:-200,animation:'orbFloat 22s infinite ease-in-out' }} />
          <div className="absolute rounded-full" style={{ width:700,height:700,background:'radial-gradient(circle,rgba(14,45,138,0.18),transparent 65%)',filter:'blur(90px)',top:'20%',right:-200,animation:'orbFloat 18s infinite ease-in-out',animationDelay:'-9s' }} />
          <div className="absolute rounded-full" style={{ width:500,height:500,background:'radial-gradient(circle,rgba(220,26,26,0.10),transparent 65%)',filter:'blur(80px)',bottom:-100,left:'40%',animation:'orbFloat 24s infinite ease-in-out',animationDelay:'-16s' }} />
          <div className="absolute rounded-full" style={{ width:400,height:400,background:'radial-gradient(circle,rgba(37,99,235,0.12),transparent 65%)',filter:'blur(70px)',bottom:'15%',left:-100,animation:'orbFloat 20s infinite ease-in-out',animationDelay:'-4s' }} />
        </div>

        <style>{`
          @keyframes orbFloat {
            0%,100% { transform:translate(0,0) scale(1); }
            33%      { transform:translate(40px,-50px) scale(1.06); }
            66%      { transform:translate(-30px,30px) scale(0.94); }
          }
          @keyframes scrollClients {
            0%   { transform:translateX(0); }
            100% { transform:translateX(-50%); }
          }
          @keyframes spin {
            from { transform:rotate(0deg); }
            to   { transform:rotate(360deg); }
          }
          @keyframes blink {
            0%,100% { opacity:1; } 50% { opacity:0.3; }
          }
          @keyframes badgePulse {
            0%,100% { box-shadow:0 0 0 0 rgba(220,26,26,0.4); }
            50%      { box-shadow:0 0 0 10px rgba(220,26,26,0); }
          }
          @keyframes slideUp {
            from { opacity:0; transform:translateY(24px); }
            to   { opacity:1; transform:translateY(0); }
          }
        `}</style>

        <Navbar />
        <main className="relative z-10">{children}</main>
        <ChatBot />
      </body>
    </html>
  )
}
