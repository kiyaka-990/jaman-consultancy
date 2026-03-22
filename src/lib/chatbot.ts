export interface ChatMessage {
  id: string
  role: 'user' | 'bot'
  text: string
  timestamp: Date
}

export interface QuickReply {
  label: string
  value: string
}

export const QUICK_REPLIES: QuickReply[] = [
  { label: '📋 Services', value: 'What services do you offer?' },
  { label: '🏆 Portfolio', value: 'Tell me about your past projects' },
  { label: '📞 Contact', value: 'How do I contact you?' },
  { label: '✅ Certifications', value: 'What are your ISO certifications?' },
  { label: 'ℹ️ About', value: 'Tell me about Jaman Consultancy' },
  { label: '💼 Quote', value: 'How do I get a quote?' },
]

type KB = Record<string, string>

const kb: KB = {
  services: `**Our 6 Core Service Areas:**

🦺 **Occupational Health & Safety (OHS)**
— Safety audits, HIRA, ISO 45001:2018, JSA, behavioral safety programs

⚡ **Energy Audit & Efficiency**
— EPRA-compliant audits, renewable energy feasibility, energy management training

📊 **Monitoring, Evaluation & Learning (MEAL)**
— M&E frameworks, baselines, impact assessments, digital dashboards

🏘️ **Resettlement Action Plans (RAPs)**
— RAPs, SIA, livelihood restoration, World Bank ESF compliance

🔬 **Research & Baseline Studies**
— GESI analyses, labor market studies, climate adaptation research

🎓 **Training & Capacity Development**
— Corporate training, gender mainstreaming, institutional strengthening

Would you like details on any specific service?`,

  contact: `📞 **Phone:** +254 733 315 621

📧 **Email:** jamanconsultingltd@gmail.com

🌐 **Website:** www.jamanconsultancy.co.ke

📍 **Location:** Nairobi, Kenya

⏰ **Hours:** Monday–Friday, 8:00 AM – 6:00 PM EAT

You can also use our **Contact page** to submit an enquiry and we'll respond within 24 hours.`,

  portfolio: `🏆 **Our Key Engagements:**

1️⃣ **OHS Training — GIZ Kenya**
Industrial & construction safety training

2️⃣ **GESI Analysis — CE4HOW Project, Kakamega**
Regen Organics / Sanergy Inc.

3️⃣ **Women's Economic Empowerment — Blue Economy**
6 coastal counties for GIZ Kenya

4️⃣ **Civil Society Strengthening — AGECS**
Aga Khan Foundation (AKF)

5️⃣ **M&E Support — Industrial Safety Programs**

6️⃣ **Energy Efficiency Advisory**
Partnership with Jaman Engineering Works Ltd

Visit our **Portfolio page** for full details!`,

  certifications: `✅ **Our Standards & Certifications:**

🏅 **ISO 9001:2015** — Quality Management System
⚙️ **ISO 45001:2018** — Occupational Health & Safety
🌿 **ISO 14001** — Environmental Management System
⚡ **EPRA Compliant** — Energy & Petroleum Regulatory Authority (Kenya)
🌍 **World Bank ESF** — Environmental & Social Framework
📋 **IFC Performance Standards** — International Finance Corporation`,

  about: `ℹ️ **About Jaman Consultancy Limited:**

Jaman Consultancy Ltd is a **Kenyan-registered firm** established as a subsidiary of Jaman Engineering Works Ltd.

📅 **Experience:** 15+ years of technical excellence
👥 **Team:** 50+ dedicated professionals
🤝 **Clients:** 500+ served
✅ **Audits:** 1000+ completed

**Vision:** To be a trusted partner delivering evidence-based, inclusive, and innovative consultancy solutions that transform lives across Africa.

We serve **governments, development partners, and private organizations** continent-wide.`,

  quote: `💼 **Getting a Quote:**

We provide **custom proposals** tailored to your specific project scope and organizational context.

To request a quote:
📞 Call: +254 733 315 621
📧 Email: jamanconsultingltd@gmail.com
📝 Use our **Contact page** form

Our team will respond within **24 hours** with a tailored proposal.`,

  ohs: `🦺 **OHS Services in Detail:**

• OHS policy development and implementation
• Workplace Hazard Identification & Risk Assessment (HIRA)
• Safety audits, inspections, and compliance reporting
• Job Safety Analysis (JSA) and Safe Work Procedures
• Training: fire safety, confined space, working at height, emergency response
• ISO 45001:2018 implementation & internal auditing
• Safety culture enhancement programs

Ready to make your workplace safer? **Contact us today!**`,

  energy: `⚡ **Energy Audit & Efficiency Services:**

• Industrial, commercial & institutional energy audits
• Energy-saving opportunity identification
• Renewable energy feasibility (solar, biomass, waste-to-energy)
• EPRA Energy Management Regulations 2012 compliance
• Technology upgrade advisory
• Energy management training and awareness

**Contact us** for a custom energy audit proposal!`,

  meal: `📊 **MEAL Services in Detail:**

• M&E framework and results chain design
• Baseline, midterm & endline evaluations
• Performance indicators & reporting tools
• Impact assessment & knowledge documentation
• Digital dashboard-based M&E systems
• Adaptive learning and capacity building

We serve governments, NGOs, and development organizations.`,

  default: `I can help you with information about Jaman Consultancy. Try asking about:

• 📋 **Services** — "What services do you offer?"
• 🏆 **Portfolio** — "Tell me about past projects"
• 📞 **Contact** — "How do I get in touch?"
• ✅ **Certifications** — "What are your ISO certifications?"
• ℹ️ **About Us** — "Tell me about Jaman"
• 💼 **Quotes** — "How do I get a quote?"

Or use the quick reply buttons below! 👇`,
}

export function getAIResponse(message: string): string {
  const m = message.toLowerCase()

  if (m.match(/hello|hi|hey|good morning|good afternoon|greet/))
    return `👋 Hello! Welcome to Jaman Consultancy Limited. I'm your AI assistant and I'm here to help you learn about our services, team, past engagements, and how to get in touch. What would you like to know?`

  if (m.match(/service|consult|offer|what do you do|provide|help with/)) return kb.services
  if (m.match(/contact|phone|email|reach|touch|call|address|location|hours/)) return kb.contact
  if (m.match(/project|portfolio|past|engagement|experience|case study|work done/)) return kb.portfolio
  if (m.match(/iso|certif|standard|epra|world bank|ifc|compliance|accredit/)) return kb.certifications
  if (m.match(/about|company|history|vision|mission|who are you|what is jaman|founded/)) return kb.about
  if (m.match(/price|cost|fee|quote|proposal|how much|budget/)) return kb.quote
  if (m.match(/ohs|safety|health|hazard|hira|iso 45001|workplace/)) return kb.ohs
  if (m.match(/energy|audit|solar|biomass|renewable|epra|efficiency/)) return kb.energy
  if (m.match(/meal|m&e|monitor|evaluat|baseline|impact|dashboard/)) return kb.meal
  if (m.match(/client|partner|giz|aga khan|regen|loreal|kenya ports|sanergy/))
    return `🤝 **Our Selected Clients & Partners:**\n\n• **GIZ Kenya** — Deutsche Gesellschaft für Internationale Zusammenarbeit\n• **Aga Khan Foundation (AKF)** — International development\n• **Regen Organics / Sanergy Inc.** — Sustainable waste solutions\n• **Kenya Ports Authority** — State corporation\n• **L'Oréal East Africa** — Global beauty leader\n• **BSP Engineering** — Bulk Storage Plants\n• **Jaman Engineering Works Ltd** — Parent company & technical partner`
  if (m.match(/team|staff|expert|specialist|who work/))
    return `👥 **Our Expert Team includes specialists in:**\n\n• Occupational Health & Safety (OHS)\n• Energy Auditing and Environmental Engineering\n• Monitoring & Evaluation (M&E)\n• Gender and Social Inclusion (GESI)\n• Resettlement and Social Safeguards (RAP & SIA)\n• Training and Capacity Building\n• Data Science and Digital Tools for M&E\n• Engineering and Infrastructure Development\n\nOver **50 dedicated professionals** ready to serve you!`
  if (m.match(/thank|thanks|great|awesome|helpful/))
    return `You're very welcome! 😊 Is there anything else I can help you with about Jaman Consultancy Limited?`

  return kb.default
}
