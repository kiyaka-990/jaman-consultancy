import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { ChatBot } from '@/components/chatbot/ChatBot'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jaman Consultancy Limited | Building Insight. Inspiring Impact.',
  description:
    'Evidence-based, inclusive, and innovative consultancy solutions — OHS, Energy Audits, MEAL, Research, RAP, and Training across Africa.',
  keywords: 'consultancy, Kenya, OHS, energy audit, MEAL, resettlement, research, training, Nairobi',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Jaman Consultancy Limited',
    description: 'Building Insight. Inspiring Impact. — Premier consultancy across Africa.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        {/* Ambient orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
          <div
            className="absolute rounded-full animate-orb-float"
            style={{
              width: 700, height: 700,
              background: 'radial-gradient(circle, rgba(26,58,143,0.18), transparent)',
              filter: 'blur(90px)',
              top: -200, left: -200,
            }}
          />
          <div
            className="absolute rounded-full animate-orb-float"
            style={{
              width: 500, height: 500,
              background: 'radial-gradient(circle, rgba(14,165,233,0.14), transparent)',
              filter: 'blur(80px)',
              top: '35%', right: -150,
              animationDelay: '-8s',
            }}
          />
          <div
            className="absolute rounded-full animate-orb-float"
            style={{
              width: 400, height: 400,
              background: 'radial-gradient(circle, rgba(204,31,31,0.10), transparent)',
              filter: 'blur(70px)',
              bottom: -100, left: '35%',
              animationDelay: '-16s',
            }}
          />
        </div>

        <Navbar />
        <main className="relative z-10">{children}</main>
        <ChatBot />
      </body>
    </html>
  )
}
