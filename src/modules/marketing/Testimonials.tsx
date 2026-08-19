import React from 'react';
import { Star, Quote, Award, Building, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../../types/index.ts';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Dr. Thabo Sithole',
      role: 'Executive Headmaster',
      school: 'Gauteng STEM Academy',
      city: 'Johannesburg, GP',
      avatar: 'TS',
      quote: 'Lumani replaced three fragmented legacy systems in one term. Our fee collection rate increased to 96.4% in 90 days, and our teachers have completely eliminated weekend report-card burnout.',
      metrics: '+14% Fee Recovery • 100% SASAMS Sync',
      roleType: 'admin'
    },
    {
      name: 'Brenda Van Zyl',
      role: 'Head of Academics & IEB Moderator',
      school: 'Cape Coastal College',
      city: 'Cape Town, WC',
      avatar: 'BV',
      quote: 'The diagnostic mastery heatmaps transformed how we prepare for IEB finals. We identified Grade 11 geometry stumbling blocks in April rather than discovering them after trial exams in September.',
      metrics: '98.8% Matric Pass Rate • 81% Bachelor Degree Passes',
      roleType: 'teacher'
    },
    {
      name: 'Nomsa & Jabu Dlamini',
      role: 'Guardians & SGB Members',
      school: 'eThekwini Leadership High',
      city: 'Durban, KZN',
      avatar: 'ND',
      quote: 'Receiving instant WhatsApp alerts when our son scores well or when school sports times shift makes us feel genuinely connected. Paying school fees via Instant EFT takes literally 15 seconds.',
      metrics: 'Instant WhatsApp Alerts • 100% Transparency',
      roleType: 'parent'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#FF9800]" />
            Proven Educational Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B3D] tracking-tight">
            Trusted by South Africa’s Leading Educators
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Real feedback from school leaders, academic moderators, and guardians across the country.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#FF9800] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF9800]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D1B3D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#0D1B3D]">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                    <p className="text-[10px] text-[#1E88E5] font-semibold">{t.school} • {t.city}</p>
                  </div>
                </div>

                <div className="p-2 bg-white rounded-lg border border-slate-200/70 text-[10px] font-bold text-[#43A047] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>{t.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
