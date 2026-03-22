import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          deep: '#060e1a',
          mid: '#0d1f3c',
          light: '#112040',
        },
        brand: {
          red: '#cc1f1f',
          blue: '#1a3a8f',
          cyan: '#0ea5e9',
          gold: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'orb-float': 'orbFloat 20s infinite ease-in-out',
        'scroll-clients': 'scrollClients 25s linear infinite',
        'badge-pulse': 'badgePulse 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'blink': 'blink 1.5s infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 10px rgba(14,165,233,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(14,165,233,0.7)' },
        },
        orbFloat: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-40px) scale(1.05)' },
          '66%': { transform: 'translate(-30px,30px) scale(0.95)' },
        },
        scrollClients: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        badgePulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(14,165,233,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(14,165,233,0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
export default config
