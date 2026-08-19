import { UserRole, PortalConfig } from '../types/index.ts';

export const PORTAL_NAV_ITEMS: PortalConfig[] = [
  {
    id: 'student',
    label: 'Student Portal',
    title: 'Learner Studio',
    badge: 'Gamified CAPS & Study Modules',
    heroHeadline: 'Own Your Learning Journey with Clarity and Joy',
    heroSubheadline: 'Access daily timetables, submit FAT assessments, practice curriculum quizzes, and earn study XP offline.',
    color: 'text-[#FF9800]',
    accentColor: '#FF9800',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    icon: 'GraduationCap',
    keyFeatures: [
      'Interactive Daily Timetable',
      'Curriculum Knowledge Quiz & XP Streaks',
      'FAT Assessment Dropzone',
      'Low-Data & Offline PWA Sync'
    ]
  },
  {
    id: 'teacher',
    label: 'Teacher Portal',
    title: 'Educator Hub',
    badge: 'Fast Rubrics & SASAMS Sync',
    heroHeadline: 'Spend More Time Inspiring, Less Time on Admin',
    heroSubheadline: '1-tap roll call with automated WhatsApp guardian alerts, rubric gradebooks, and instant SASAMS mark exports.',
    color: 'text-[#1E88E5]',
    accentColor: '#1E88E5',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: 'BookOpen',
    keyFeatures: [
      'Instant Period Attendance',
      'Zero-Rated WhatsApp Absence Alerts',
      'Smart CAPS Rubric Marking',
      'Automated Report Card Remark Templates'
    ]
  },
  {
    id: 'parent',
    label: 'Parent Portal',
    title: 'Guardian Link',
    badge: 'Real-time Marks & Instant EFT',
    heroHeadline: 'Stay Involved in Every Milestone of Your Child’s Education',
    heroSubheadline: 'Live academic mastery feeds, instant fee statements with Ozow/Instant EFT, and direct encrypted teacher messaging.',
    color: 'text-[#43A047]',
    accentColor: '#43A047',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    icon: 'Users',
    keyFeatures: [
      'Multi-Child Academic Switcher',
      'Instant EFT Tuition Settlement',
      'Direct Encrypted Teacher Line',
      'Attendance & Term Report Vault'
    ]
  },
  {
    id: 'principal',
    label: 'Principal Portal',
    title: 'Principal Hub',
    badge: 'Strategy, SGB & Matric Target',
    heroHeadline: 'Strategic Foresight & Academic Governance in One View',
    heroSubheadline: 'Predictive Grade 12 Matric performance models, teacher IQMS moderation approvals, and 1-click SGB executive packs.',
    color: 'text-[#6366F1]',
    accentColor: '#6366F1',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    icon: 'Award',
    keyFeatures: [
      'Matric Pass & Distinction Predictor',
      'Saturday Remedial Impact Simulator',
      'Faculty IQMS Appraisal Matrix',
      '1-Click SGB Quarterly Briefing Pack'
    ]
  },
  {
    id: 'admin',
    label: 'Admin Portal',
    title: 'Executive Command',
    badge: 'POPIA, Billing & Operations',
    heroHeadline: 'Uncompromising Operational Control & Compliance',
    heroSubheadline: 'Automated DBE SASAMS exports, bursar fee collection tracking, and emergency multi-channel community broadcasts.',
    color: 'text-[#0D1B3D]',
    accentColor: '#0D1B3D',
    bgColor: 'bg-slate-900/10',
    borderColor: 'border-slate-800/30',
    icon: 'ShieldCheck',
    keyFeatures: [
      'Automated SASAMS Data Exporter',
      'Bursar Real-Time Fee Dashboard',
      'POPIA Audit & Access Control',
      'Multi-Channel Emergency Broadcasts'
    ]
  }
];

export const MAIN_NAV_LINKS = [
  { label: 'Portals', href: '#platform-showcase', badge: '5 Portals' },
  { label: 'Core Pillars', href: '#core-pillars' },
  { label: 'Analytics & Security', href: '#features-deepdive' },
  { label: 'CAPS & Ecosystem', href: '#curriculum-ecosystem' },
  { label: 'Impact Calculator', href: '#roi-calculator' },
  { label: 'Pricing', href: '#pricing' },
];
