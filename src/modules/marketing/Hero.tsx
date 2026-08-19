import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Play,
  CheckCircle2,
  Users,
  GraduationCap,
  BookOpen,
  WifiOff,
  Zap,
  Building,
  Award
} from 'lucide-react';
import { UserRole } from '../../types/index.ts';

interface HeroProps {
  onSelectRole: (role: UserRole) => void;
  onOpenDemo: (role?: UserRole) => void;
  onOpenBrandModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectRole,
  onOpenDemo,
  onOpenBrandModal,
}) => {
  const roleBadges: { id: UserRole; title: string; subtitle: string; icon: React.ComponentType<{ className?: string }>; color: string; border: string; bg: string }[] = [
    {
      id: 'student',
      title: 'Learner Studio',
      subtitle: 'Gamified CAPS & Study Hub',
      icon: GraduationCap,
      color: 'text-[#FF9800]',
      border: 'hover:border-[#FF9800]',
      bg: 'bg-amber-500/10'
    },
    {
      id: 'teacher',
      title: 'Educator Hub',
      subtitle: 'Fast Rubrics & SASAMS Sync',
      icon: BookOpen,
      color: 'text-[#1E88E5]',
      border: 'hover:border-[#1E88E5]',
      bg: 'bg-blue-500/10'
    },
    {
      id: 'parent',
      title: 'Guardian Link',
      subtitle: 'Real-time Marks & Instant EFT',
      icon: Users,
      color: 'text-[#43A047]',
      border: 'hover:border-[#43A047]',
      bg: 'bg-green-500/10'
    },
    {
      id: 'principal',
      title: 'Principal Hub',
      subtitle: 'Strategy, SGB & Matric Target',
      icon: Award,
      color: 'text-[#6366F1]',
      border: 'hover:border-[#6366F1]',
      bg: 'bg-indigo-500/10'
    },
    {
      id: 'admin',
      title: 'Executive Command',
      subtitle: 'POPIA, Billing & Operations',
      icon: ShieldCheck,
      color: 'text-[#0D1B3D]',
      border: 'hover:border-[#0D1B3D]',
      bg: 'bg-slate-900/10'
    },
  ];

  return (
    <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-grid-pattern" id="hero">
      {/* Subtle Ambient Light Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#1E88E5]/10 via-[#43A047]/8 to-[#FF9800]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Brand Category Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-soft-sm text-xs font-semibold text-[#0D1B3D]"
          >
            <span className="w-2 h-2 rounded-full bg-[#1E88E5] animate-pulse" />
            <span className="text-[#1E88E5] font-bold">Erica Innovations</span>
            <span className="text-slate-300">•</span>
            <span>Learning + Technology + Community + Trust</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D1B3D] tracking-tight leading-[1.12]"
          >
            Modern Education Technology,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E88E5] via-[#43A047] to-[#FF9800] bg-clip-text text-transparent">
                Elevating Every Learner.
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#1E88E5]/10 -rotate-1 rounded-sm -z-0" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Lumani delivers a sleek, human-centered ecosystem uniting <strong>students, teachers, guardians, and administrators</strong>. Designed with the elegance of Apple and Notion, tailored for South African schools, CAPS/IEB curricula, and POPIA trust.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#0D1B3D] hover:bg-[#152A5E] text-white font-bold text-sm rounded-2xl shadow-soft-md hover:shadow-soft-xl transition flex items-center justify-center gap-2.5 group"
            >
              <span>Schedule Campus Walkthrough</span>
              <ArrowRight className="w-4 h-4 text-[#FF9800] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#platform-showcase"
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-[#0D1B3D] border border-slate-200/90 font-bold text-sm rounded-2xl shadow-soft-sm transition flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#1E88E5]" />
              <span>Explore Live Sandbox</span>
            </a>
          </motion.div>

          {/* Interactive Role Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-6"
          >
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Explore Lumani Through Every Stakeholder Perspective:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {roleBadges.map((r) => {
                const Icon = r.icon;
                return (
                  <button
                    key={r.id}
                    onClick={() => onSelectRole(r.id)}
                    className={`p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-soft-sm text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-md group ${r.border}`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className={`p-1.5 rounded-lg ${r.bg} ${r.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-extrabold text-xs text-[#0D1B3D] group-hover:text-[#1E88E5] transition">
                        {r.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {r.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Trust Highlights Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#43A047]" />
              <span>CAPS & IEB Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0D1B3D]" />
              <span>POPIA Certified & AES-256</span>
            </div>
            <div className="flex items-center gap-2">
              <WifiOff className="w-4 h-4 text-[#1E88E5]" />
              <span>Offline & Load-Shedding Resilient</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF9800]" />
              <span>SASAMS / DBE Compatible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
