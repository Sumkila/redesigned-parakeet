import React from 'react';
import { BookOpen, Cpu, Users, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';

interface CorePillarsProps {
  onOpenBrandModal: () => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ onOpenBrandModal }) => {
  const pillars = [
    {
      id: 'learning',
      badge: 'Cognitive Excellence',
      title: 'Learning',
      tagline: 'Deep comprehension over rote memorization',
      color: 'text-[#FF9800]',
      accentColor: '#FF9800',
      bgGlow: 'from-amber-500/10 to-transparent',
      borderColor: 'border-amber-200/80',
      icon: BookOpen,
      desc: 'Adaptive learning pathways engineered for CAPS, IEB, and international syllabi. Interactive assessments with real-time feedback empower students to master difficult concepts at their individual pace.',
      highlights: [
        'CAPS & IEB curated curriculum matrix',
        'Interactive curriculum revision quizzes',
        'Gamified learning milestones & badges',
        'Continuous diagnostic mastery tracking'
      ]
    },
    {
      id: 'technology',
      badge: 'Modern Architecture',
      title: 'Technology',
      tagline: 'Fast, offline-resilient & effortlessly intuitive',
      color: 'text-[#1E88E5]',
      accentColor: '#1E88E5',
      bgGlow: 'from-blue-500/10 to-transparent',
      borderColor: 'border-blue-200/80',
      icon: Cpu,
      desc: 'Built with the sleek ergonomics of Notion, Apple, and Canva. Optimized for South African load-shedding realities with ultra-lightweight data usage and automatic offline caching.',
      highlights: [
        'Load-shedding resilient offline sync',
        'PWA support for budget smartphones & tablets',
        'Zero-clutter Scandinavian UI design',
        'Microsecond cloud sync with automated backup'
      ]
    },
    {
      id: 'community',
      badge: 'Human Connection',
      title: 'Community',
      tagline: 'Bridging classroom, home & executive leadership',
      color: 'text-[#43A047]',
      accentColor: '#43A047',
      bgGlow: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-200/80',
      icon: Users,
      desc: 'A thriving education system requires unanimous alignment. Lumani unites educators, learners, guardians, and SGBs through omnichannel messaging, transparent reporting, and collaborative rooms.',
      highlights: [
        'Integrated zero-rated WhatsApp & SMS alerts',
        'Direct encrypted guardian-teacher messenger',
        'School-wide calendar & event ticketing',
        'Multilingual interface (isiZulu, Afrikaans, Sesotho, English)'
      ]
    },
    {
      id: 'trust',
      badge: 'Institutional Security',
      title: 'Trust',
      tagline: 'Bank-grade compliance & sovereign data security',
      color: 'text-[#0D1B3D]',
      accentColor: '#0D1B3D',
      bgGlow: 'from-slate-900/10 to-transparent',
      borderColor: 'border-slate-300/80',
      icon: ShieldCheck,
      desc: 'Sovereign peace of mind. Every record, mark, and financial transaction is protected by AES-256 encryption and strictly adheres to South Africa’s Protection of Personal Information Act (POPIA).',
      highlights: [
        '100% POPIA compliance with audit trail logs',
        'Granular Role-Based Access Control (RBAC)',
        'Automated SASAMS & EMIS data format exports',
        'Instant EFT & Ozow bank-grade payment security'
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative" id="core-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B3D]/5 text-[#0D1B3D] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
              The Lumani DNA
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B3D] tracking-tight">
              Rooted in Four Guiding Principles
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every interface, workflow, and security layer inside Lumani is built upon these four core pillars by Erica Innovations.
            </p>
          </div>

          <button
            onClick={onOpenBrandModal}
            className="self-start md:self-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0D1B3D] text-xs font-bold rounded-xl transition flex items-center gap-2"
          >
            <span>Explore Brand Geometry Guide</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#1E88E5]" />
          </button>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`p-6 sm:p-8 rounded-3xl border ${p.borderColor} bg-gradient-to-br ${p.bgGlow} shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-slate-700">
                      {p.badge}
                    </span>
                    <div className="p-2.5 rounded-2xl bg-white shadow-soft-sm">
                      <Icon className={`w-6 h-6 ${p.color}`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0D1B3D] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    {p.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#43A047] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
