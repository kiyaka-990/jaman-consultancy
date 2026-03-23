export interface TeamMember {
  name: string
  role: string
  dept: string
  bio: string
  expertise: string[]
  img: string
  linkedin?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. James Mwangi',
    role: 'Managing Director & Lead Consultant',
    dept: 'Leadership',
    bio: 'Chartered OHS professional with 18 years in occupational safety, energy management, and development consulting across East Africa.',
    expertise: ['OHS Strategy','ISO 45001','Energy Policy','Leadership'],
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Amina Hassan',
    role: 'Head of Research & M&E',
    dept: 'Research',
    bio: 'Gender and development economist with 12 years designing MEAL systems and GESI analyses for GIZ, World Bank, and AKF-funded programmes.',
    expertise: ['MEAL Systems','GESI Analysis','Baseline Studies','Impact Assessment'],
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Eng. Peter Oduya',
    role: 'Senior Energy Auditor',
    dept: 'Energy',
    bio: 'EPRA-registered engineer specialising in industrial energy audits and renewable energy feasibility across manufacturing, hospitality, and ports sectors.',
    expertise: ['Energy Audits','Solar Feasibility','EPRA Compliance','Industrial Efficiency'],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Faith Wanjiku',
    role: 'Social Safeguards Specialist',
    dept: 'Social',
    bio: 'Expert in resettlement action planning and social impact assessments, with experience on World Bank and AfDB-financed infrastructure projects.',
    expertise: ['RAP Planning','SIA','Grievance Mechanisms','Community Engagement'],
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
  },
  {
    name: 'Samuel Kibet',
    role: 'OHS Training Manager',
    dept: 'Training',
    bio: 'Certified safety trainer with expertise in fire safety, confined space entry, and behavioural safety programs for industrial and construction clients.',
    expertise: ['Safety Training','Fire Safety','Confined Space','Behavioural Safety'],
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Dr. Lydia Achieng',
    role: 'Gender & Inclusion Advisor',
    dept: 'Gender',
    bio: 'PhD in Gender Studies with 10 years supporting civil society capacity building and gender mainstreaming across 14 African countries.',
    expertise: ['Gender Mainstreaming','GESI','CSO Capacity','Policy Research'],
    img: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80',
  },
  {
    name: 'Brian Otieno',
    role: 'Data Science & Digital M&E Lead',
    dept: 'Technology',
    bio: 'Data scientist building digital monitoring dashboards and mobile data collection tools for development programme evaluation and adaptive management.',
    expertise: ['Data Dashboards','KoboToolbox','Power BI','GIS Mapping'],
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Grace Mutua',
    role: 'Project Management Officer',
    dept: 'Management',
    bio: 'PMP-certified project manager overseeing multi-stakeholder development projects, donor reporting, and proposal development across the portfolio.',
    expertise: ['Project Management','Donor Reporting','RBM','Stakeholder Engagement'],
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

export const DEPT_COLORS: Record<string,{red:boolean}> = {
  Leadership:  {red:true},
  Research:    {red:false},
  Energy:      {red:true},
  Social:      {red:false},
  Training:    {red:true},
  Gender:      {red:false},
  Technology:  {red:true},
  Management:  {red:false},
}
