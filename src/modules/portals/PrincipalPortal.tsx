import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Award,
  FileCheck,
  CheckCircle2,
  Download,
  AlertTriangle,
  Building2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface PrincipalPortalProps {
  onOpenDemo?: () => void;
}

export const PrincipalPortal: React.FC<PrincipalPortalProps> = ({ onOpenDemo }) => {
  const [sgbReportGenerated, setSgbReportGenerated] = useState(false);
  const [remedialBootcamp, setRemedialBootcamp] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState<'stem' | 'humanities' | 'commerce'>('stem');
  const [iqmsApproved, setIqmsApproved] = useState<Record<string, boolean>>({
    'math': true,
    'physics': true,
    'accounting': false,
    'life_sci': true
  });

  const toggleIqms = (key: string) => {
    setIqmsApproved(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div
      key="principal"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      {/* Principal Executive Banner */}
      <div className="bg-gradient-to-r from-[#0D1B3D] via-[#152A5E] to-[#1E1B4B] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-soft-sm border border-indigo-500/20">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/20 border border-[#6366F1]/40 flex items-center justify-center text-xl font-bold text-[#A5B4FC]">
            KM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white">Dr. Kenneth Mthembu</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#6366F1]/30 text-[#C7D2FE] text-xs font-bold">Executive Headmaster</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">Pretoria Boys STEM High • SGB Strategic Review Term 3</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setSgbReportGenerated(true)}
            className="px-3.5 py-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{sgbReportGenerated ? 'SGB Pack Ready (PDF)' : 'Generate SGB Report'}</span>
          </button>
          <div className="px-3 py-1.5 bg-white/10 rounded-xl text-xs text-slate-200 font-semibold flex items-center gap-1.5 border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>DBE Compliance: 100%</span>
          </div>
        </div>
      </div>

      {/* Strategic Metrics Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Projected Matric Pass',
            val: remedialBootcamp ? '99.4%' : '98.6%',
            sub: remedialBootcamp ? '+0.8% with Bootcamp' : 'Historical baseline',
            trend: 'up',
            icon: Award,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 border-indigo-100'
          },
          {
            title: 'Bachelor Pass Trajectory',
            val: remedialBootcamp ? '88.5%' : '82.1%',
            sub: '6.4% Distinctions lift',
            trend: 'up',
            icon: TrendingUp,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 border-emerald-100'
          },
          {
            title: 'Curriculum Pacing',
            val: '96.2%',
            sub: 'All 24 Depts on Schedule',
            trend: 'up',
            icon: FileCheck,
            color: 'text-blue-600',
            bg: 'bg-blue-50 border-blue-100'
          },
          {
            title: 'Teacher IQMS Moderation',
            val: '4.8 / 5.0',
            sub: '32 of 34 Audits Approved',
            trend: 'up',
            icon: Building2,
            color: 'text-amber-600',
            bg: 'bg-amber-50 border-amber-100'
          },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`p-4 rounded-2xl border ${stat.bg} space-y-1`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">{stat.title}</span>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className="text-2xl font-black text-[#0D1B3D]">{stat.val}</div>
              <div className="text-[11px] font-semibold text-slate-600">{stat.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Matric Performance Forecaster & IQMS Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Predictive Grade 12 Matric Performance Model */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="font-bold text-sm text-[#0D1B3D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6366F1]" />
                  Matric Cohort Trajectory & Risk Forecaster (Grade 12)
                </h4>
                <p className="text-xs text-slate-500">Machine learning calibrated on past 5 years of NSC/DBE examination results.</p>
              </div>

              {/* Remedial Intervention Toggle */}
              <button
                onClick={() => setRemedialBootcamp(!remedialBootcamp)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  remedialBootcamp
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{remedialBootcamp ? 'Simulate: Bootcamp Active' : 'Simulate: Baseline Only'}</span>
              </button>
            </div>

            {/* Subject Breakdown Bars */}
            <div className="space-y-3">
              {[
                { subj: 'Mathematics CAPS', target: 85, current: remedialBootcamp ? 88 : 81, atRisk: remedialBootcamp ? 3 : 11 },
                { subj: 'Physical Sciences', target: 80, current: remedialBootcamp ? 84 : 76, atRisk: remedialBootcamp ? 4 : 14 },
                { subj: 'Accounting', target: 90, current: remedialBootcamp ? 92 : 88, atRisk: remedialBootcamp ? 1 : 6 },
                { subj: 'English Home Language', target: 95, current: remedialBootcamp ? 97 : 94, atRisk: remedialBootcamp ? 0 : 2 },
              ].map((s, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex justify-between text-xs items-center">
                    <span className="font-bold text-slate-800">{s.subj}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-500">Target: {s.target}%</span>
                      <span className="font-extrabold text-[#0D1B3D] text-xs">{s.current}% Projected</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        s.atRisk <= 3 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {s.atRisk} Learners At Risk
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full ${s.current >= s.target ? 'bg-indigo-600' : 'bg-amber-500'} rounded-full transition-all duration-500`}
                      style={{ width: `${s.current}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Head IQMS Moderation Status */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-bold text-sm text-[#0D1B3D]">Faculty IQMS Appraisals & Department Verification</h4>
                <p className="text-xs text-slate-500">Principal executive sign-off for HOD moderation files and curriculum logs.</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg">
                Term 3 Cycle
              </span>
            </div>

            <div className="space-y-2">
              {[
                { key: 'math', dept: 'Mathematics Dept (Mrs. N. Sithole)', items: '64 Script Moderations', due: 'Approved by Principal' },
                { key: 'physics', dept: 'Science Dept (Mr. J. De Klerk)', items: '48 Lab Moderations', due: 'Approved by Principal' },
                { key: 'accounting', dept: 'Commerce Dept (Mrs. P. Khumalo)', items: '32 Ledger Portfolios', due: 'Pending Executive Signature' },
                { key: 'life_sci', dept: 'Life Sciences (Dr. V. Naicker)', items: '55 Practical Logs', due: 'Approved by Principal' },
              ].map((row) => (
                <div
                  key={row.key}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-800">{row.dept}</div>
                    <div className="text-[11px] text-slate-500">{row.items}</div>
                  </div>

                  <button
                    onClick={() => toggleIqms(row.key)}
                    className={`px-3 py-1.5 rounded-lg font-bold transition text-xs flex items-center gap-1.5 ${
                      iqmsApproved[row.key]
                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
                    }`}
                  >
                    {iqmsApproved[row.key] ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Signed & Verified</span>
                      </>
                    ) : (
                      <span>Sign IQMS Moderation</span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: SGB Governance & Strategic Advisory */}
        <div className="space-y-5">
          <div className="bg-gradient-to-br from-indigo-900 to-[#0D1B3D] text-white p-5 rounded-2xl shadow-soft-sm space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF9800]" />
              <h4 className="font-bold text-sm">SGB Governance Summary</h4>
            </div>
            <p className="text-xs text-indigo-200 leading-relaxed">
              School Governing Body executive package is automatically compiled from live bursar data, academic marks, and IQMS compliance logs.
            </p>

            <div className="p-3 bg-white/10 rounded-xl border border-white/10 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-indigo-200">Total Enrolment:</span>
                <span className="font-bold">1,248 Learners</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200">Staff Complement:</span>
                <span className="font-bold">68 Academic / 14 Admin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200">Fee Collection Rate:</span>
                <span className="font-bold text-emerald-300">96.4% (YTD)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-200">DBE Circuit Rank:</span>
                <span className="font-bold text-amber-300">#1 in Pretoria East</span>
              </div>
            </div>

            <button
              onClick={() => setSgbReportGenerated(true)}
              className="w-full py-2.5 bg-white text-[#0D1B3D] hover:bg-slate-100 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download SGB Executive Pack</span>
            </button>
          </div>

          {/* Quick Notice to All Faculty */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">Principal's Broadcast</h4>
            <p className="text-xs text-slate-700 leading-snug">
              Send instant executive notice to all 68 academic staff members via the Lumani Faculty Channel.
            </p>
            <button
              onClick={onOpenDemo}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
            >
              Compose Staff Directive
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
