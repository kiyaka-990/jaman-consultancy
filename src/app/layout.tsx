import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { ChatBot } from '@/components/chatbot/ChatBot'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const outfit = Outfit({ subsets:['latin'], variable:'--font-outfit', display:'swap' })
const playfair = Playfair_Display({ subsets:['latin'], variable:'--font-playfair', display:'swap' })

export const metadata: Metadata = {
  title: 'Jaman Consultancy Limited | Building Insight. Inspiring Impact.',
  description:'Evidence-based, inclusive, and innovative consultancy — OHS, Energy Audits, MEAL, Research, RAP, and Training across Africa.',
  icons:{ icon:'/logo.png', shortcut:'/logo.png', apple:'/logo.png' },
  openGraph:{ title:'Jaman Consultancy Limited', description:'Building Insight. Inspiring Impact.', images:['/logo.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          {/* Ambient orbs */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <div className="absolute rounded-full" style={{width:900,height:900,background:'radial-gradient(circle,rgba(217,26,26,0.11),transparent 65%)',filter:'blur(110px)',top:-350,left:-250,animation:'orbFloat 22s infinite ease-in-out'}}/>
            <div className="absolute rounded-full" style={{width:700,height:700,background:'radial-gradient(circle,rgba(13,43,133,0.16),transparent 65%)',filter:'blur(90px)',top:'25%',right:-200,animation:'orbFloat 18s infinite ease-in-out',animationDelay:'-9s'}}/>
            <div className="absolute rounded-full" style={{width:500,height:500,background:'radial-gradient(circle,rgba(217,26,26,0.09),transparent 65%)',filter:'blur(80px)',bottom:-80,left:'35%',animation:'orbFloat 26s infinite ease-in-out',animationDelay:'-16s'}}/>
            <div className="absolute rounded-full" style={{width:400,height:400,background:'radial-gradient(circle,rgba(37,99,235,0.10),transparent 65%)',filter:'blur(70px)',bottom:'20%',left:-100,animation:'orbFloat 20s infinite ease-in-out',animationDelay:'-4s'}}/>
          </div>
          <Navbar />
          <main id="main-content" className="relative z-10" tabIndex={-1}>{children}</main>
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
