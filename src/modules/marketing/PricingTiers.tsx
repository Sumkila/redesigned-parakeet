import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { SchoolPricingTier } from '../../types/index.ts';

interface PricingTiersProps {
  onOpenDemo: () => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ onOpenDemo }) => {
  const [currency, setCurrency] = useState<'ZAR' | 'USD'>('ZAR');

  const tiers: SchoolPricingTier[] = [
    {
      id: 'starter',
      name: 'Foundation Campus',
      badge: 'Single Phase',
      description: 'Ideal for independent primary or high schools getting started with modern digital management.',
      priceZAR: 'R 18.50',
      priceUSD: '$ 1.20',
      period: 'per learner / month',
      features: [
        'Up to 600 enrolled learners',
        'Student, Teacher & Parent Portals',
        'CAPS marksheets & term report cards',
        'Basic SMS broadcast alerts',
        'POPIA security & cloud backups',
        'Standard email & helpdesk support',
      ],
      ctaLabel: 'Select Foundation'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Campus',
      badge: 'Most Popular Across SA',
      highlighted: true,
      description: 'The complete education operating system for ambitious schools seeking peak academic & operational performance.',
      priceZAR: 'R 28.00',
      priceUSD: '$ 1.80',
      period: 'per learner / month',
      features: [
        'Unlimited enrolled learners',
        'All 5 Portals (Student, Teacher, Parent, Principal, Admin)',
        'Full WhatsApp Business Gateway integration',
        'Automated SASAMS & EMIS 1-click exporter',
        'Instant EFT & Ozow school fee billing',
        'Curriculum Revision Modules & Diagnostic Heatmaps',
        'Load-shedding resilient offline sync',
        'Dedicated campus onboarding specialist'
      ],
      ctaLabel: 'Deploy Comprehensive'
    },
    {
      id: 'enterprise',
      name: 'Enterprise District',
      badge: 'Multi-Campus Groups',
      description: 'Custom governance, centralized billing, and multi-school analytics for educational trusts and district groups.',
      priceZAR: 'Custom',
      priceUSD: 'Custom',
      period: 'tailored annual contract',
      features: [
        'Multi-campus consolidated dashboard',
        'Custom SIS / legacy database migration',
        'Dedicated POPIA Data Protection Officer audit',
        'Custom domain (e.g. portal.yourschool.co.za)',
        '24/7 Priority VIP phone support',
        'On-site teacher training workshops',
        'SLA guaranteed 99.99% uptime'
      ],
      ctaLabel: 'Contact Erica Innovations'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAFCFF] border-t border-slate-200/80" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-xs font-bold uppercase tracking-wider mb-3">
            Transparent Campus Licensing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B3D] tracking-tight">
            Predictable, Value-Driven Investment
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            No hidden setup fees or surprise server charges. Free data migration from SASAMS or spreadsheets included.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl mt-6">
            <button
              onClick={() => setCurrency('ZAR')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                currency === 'ZAR' ? 'bg-white text-[#0D1B3D] shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              South African Rand (ZAR - R)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                currency === 'USD' ? 'bg-white text-[#0D1B3D] shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              US Dollar (USD - $)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                t.highlighted
                  ? 'bg-gradient-to-b from-[#0D1B3D] to-[#152A5E] text-white shadow-soft-xl border-2 border-[#1E88E5] lg:-translate-y-2'
                  : 'bg-white text-slate-800 border border-slate-200 shadow-soft-sm hover:shadow-soft-md'
              }`}
            >
              {t.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase shadow-sm ${
                      t.highlighted
                        ? 'bg-[#FF9800] text-slate-950'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {t.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className={`text-xl font-extrabold ${t.highlighted ? 'text-white' : 'text-[#0D1B3D]'}`}>
                    {t.name}
                  </h3>
                  <p className={`text-xs mt-1 ${t.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                    {t.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-200/40">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {currency === 'ZAR' ? t.priceZAR : t.priceUSD}
                    </span>
                    {t.priceZAR !== 'Custom' && (
                      <span className={`text-xs ${t.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                        {t.period}
                      </span>
                    )}
                  </div>
                  {t.priceZAR === 'Custom' && (
                    <span className={`text-xs block mt-1 ${t.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                      {t.period}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${t.highlighted ? 'text-[#64B5F6]' : 'text-slate-400'}`}>
                    What’s included:
                  </span>
                  {t.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-medium">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.highlighted ? 'text-[#43A047]' : 'text-[#1E88E5]'}`} />
                      <span className={t.highlighted ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenDemo}
                className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 ${
                  t.highlighted
                    ? 'bg-[#1E88E5] hover:bg-[#1976D2] text-white shadow-soft-md'
                    : 'bg-[#0D1B3D] hover:bg-[#152A5E] text-white'
                }`}
              >
                <span>{t.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#43A047] flex-shrink-0" />
            <div>
              <span className="font-bold text-[#0D1B3D] block">Risk-Free 60-Day Full Term Trial</span>
              <span>Test Lumani across your entire staff and student body with zero upfront licence fees.</span>
            </div>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0D1B3D] font-bold rounded-xl whitespace-nowrap transition"
          >
            Request Trial Access
          </button>
        </div>
      </div>
    </section>
  );
};
