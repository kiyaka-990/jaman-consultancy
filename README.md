# Jaman Consultancy Limited — Next.js Web App

A modern, glassmorphic Next.js 14 web application for Jaman Consultancy Limited.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Features

- ✅ Multi-page: Home, Services, About, Portfolio, Contact
- ✅ Heavy glassmorphism design with navy/red/blue brand theme
- ✅ Hero carousel with fade in/out (4 slides, auto-advance)
- ✅ AI Chatbot with **Menu → Chat / Services / Contact** navigation + Back button
- ✅ Dynamic badges & animated cards
- ✅ Clients marquee (infinite scroll)
- ✅ Google Maps embed on Contact page
- ✅ Unsplash images throughout (no team section images)
- ✅ Logo from `/public/logo.png` used in navbar + favicon
- ✅ Fully responsive (mobile-first)
- ✅ Scroll animations
- ✅ Contact form with success state

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero carousel, About, Services, Values, Clients, Standards, CTA |
| `/services` | All 6 service areas with detail cards |
| `/about` | Vision, Mission, Values, Team, Standards |
| `/portfolio` | Flagship engagements + clients |
| `/contact` | Contact form + info cards + Google Maps |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, ChatBot, fonts, favicon)
│   ├── page.tsx            # Home page
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── portfolio/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutStrip.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ValuesGrid.tsx
│   │   ├── ClientsMarquee.tsx
│   │   ├── StandardsBadges.tsx
│   │   └── CtaBanner.tsx
│   ├── chatbot/
│   │   └── ChatBot.tsx
│   └── ui/
│       ├── Logo.tsx
│       └── SectionHeader.tsx
├── lib/
│   ├── data.ts             # All content/data
│   └── chatbot.ts          # AI responses knowledge base
└── styles/
    └── globals.css
```

## Customization

- **Colors**: Edit CSS variables in `src/styles/globals.css`
- **Content**: Update `src/lib/data.ts`
- **AI Chatbot**: Extend `src/lib/chatbot.ts` with new intents
- **Logo**: Replace `/public/logo.png`

## Build for Production

```bash
npm run build
npm start
```
