export const BRAND_CONFIG = {
  name: 'Lumani',
  company: 'Erica Innovations (Pty) Ltd',
  companyReg: 'Reg. 2024/098124/07',
  tagline: 'Modern Education Technology, Elevating Every Learner',
  corePillars: [
    {
      id: 'learning',
      title: 'Learning (Adaptive Pedagogy)',
      description: 'Dynamic CAPS & IEB mastery, curriculum diagnostic homework assistance, and gamified study loops.',
      color: '#FF9800',
      badge: 'Pedagogy First'
    },
    {
      id: 'technology',
      title: 'Technology (Cloud & PWA)',
      description: 'Load-shedding resilient offline sync, zero-rated data options, and lightning-fast cloud architecture.',
      color: '#1E88E5',
      badge: 'High Performance'
    },
    {
      id: 'community',
      title: 'Community (3-Way Link)',
      description: 'Bridging educators, learners, and guardians through real-time WhatsApp alerts and transparent communication.',
      color: '#43A047',
      badge: 'Human Centric'
    },
    {
      id: 'trust',
      title: 'Trust (POPIA & DBE)',
      description: 'South African Sovereign Cloud hosting, AES-256 encryption, and certified automated SASAMS / EMIS exporters.',
      color: '#0D1B3D',
      badge: 'Enterprise Security'
    }
  ],
  colors: {
    navy: '#0D1B3D',
    blue: '#1E88E5',
    green: '#43A047',
    orange: '#FF9800',
    purple: '#6366F1',
    white: '#FFFFFF',
    background: '#FAFCFF',
  },
  compliance: {
    popia: 'POPIA Act 4 of 2013 Certified',
    dbe: 'CAPS & IEB Syllabus Aligned',
    cloud: 'South African Sovereign Cloud (Johannesburg & Cape Town Datacenters)',
    encryption: 'Bank-Grade AES-256 at Rest & in Transit',
  }
} as const;
