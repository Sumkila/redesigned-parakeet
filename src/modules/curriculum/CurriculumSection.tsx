import React from 'react';
import { Award, Check, Sparkles, Building, BookCheck, ShieldCheck, Flag } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const frameworks = [
    {
      title: 'CAPS (DBE National Syllabi)',
      subtitle: 'Grades R to 12 South African Standards',
      desc: 'Pre-populated subject milestones, SBA rubrics, and FAT guidelines aligned with the Department of Basic Education Curriculum Assessment Policy Statements.',
      badge: 'National Standard',
      color: 'border-l-4 border-l-[#1E88E5]',
      features: ['Automatic SASAMS quarterly export', 'Formal Assessment Task rubrics', 'National Matric Past Paper bank']
    },
    {
      title: 'IEB Independent Assessments',
      subtitle: 'Higher Cognitive Demands & Portfolios',
      desc: 'Supports critical thinking matrices, portfolio assessments, and dual-moderation workflows favored by top private and independent colleges.',
      badge: 'Independent Colleges',
      color: 'border-l-4 border-l-[#FF9800]',
      features: ['Continuous portfolio grading', 'Cross-moderator feedback rooms', 'Advanced Mathematics & AP support']
    },
    {
      title: 'Cambridge & International Syllabi',
      subtitle: 'IGCSE, AS & A-Levels',
      desc: 'Configurable grading scales, percentage-to-letter grade conversions, and modular exam scheduling for international curricula.',
      badge: 'Global Pathways',
      color: 'border-l-4 border-l-[#43A047]',
      features: ['Percentage to A* conversion', 'International exam session tracking', 'Multi-currency fee invoices']
    },
    {
      title: 'TVET & Technical High Schools',
      subtitle: 'Vocational & Applied Engineering',
      desc: 'Practical workshop task logs, apprenticeship attendance verification, and modular occupational skills tracking.',
      badge: 'Technical & Vocational',
      color: 'border-l-4 border-l-[#0D1B3D]',
      features: ['Practical workshop logbooks', 'Apprenticeship safety badges', 'Modular trade certifications']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="curriculum-ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B3D]/5 text-[#0D1B3D] text-xs font-bold uppercase tracking-wider mb-3">
            <Flag className="w-3.5 h-3.5 text-[#43A047]" />
            South African & Pan-African Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B3D] tracking-tight">
            Curriculum Alignment with Unrivaled Local Depth
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Lumani by Erica Innovations (Pty) Ltd is purposefully built for South African classrooms, not retrofitted from overseas systems.
          </p>
        </div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {frameworks.map((f, i) => (
            <div
              key={i}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition ${f.color}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                  {f.badge}
                </span>
                <BookCheck className="w-5 h-5 text-slate-400" />
              </div>

              <h3 className="text-xl font-bold text-[#0D1B3D]">{f.title}</h3>
              <p className="text-xs font-semibold text-[#1E88E5] mb-2">{f.subtitle}</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">{f.desc}</p>

              <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                {f.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#43A047]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Erica Innovations Badge Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0D1B3D] via-[#152A5E] to-[#1E3A70] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#FFB74D] uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Erica Innovations (Pty) Ltd
            </div>
            <h3 className="text-2xl font-extrabold">Pioneering South Africa's EdTech Frontier</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Headquartered in South Africa, Erica Innovations develops scalable, dignified, and transformative software platforms for schools across urban metros and rural education districts.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm flex-shrink-0">
            <div className="text-right">
              <div className="text-xl font-extrabold text-white">280+ Campuses</div>
              <div className="text-[11px] text-blue-200">Across 9 Provinces</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-left">
              <div className="text-xl font-extrabold text-[#43A047]">145,000+</div>
              <div className="text-[11px] text-blue-200">Active Learners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
