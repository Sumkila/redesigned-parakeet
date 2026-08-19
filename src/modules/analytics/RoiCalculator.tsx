import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, CreditCard, FileSpreadsheet, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [learnerCount, setLearnerCount] = useState<number>(850);
  const [teacherCount, setTeacherCount] = useState<number>(42);
  const [feeRate, setFeeRate] = useState<number>(78);
  const [avgTuition, setAvgTuition] = useState<number>(2400);

  // Calculations
  const hoursSavedPerTeacherMonthly = 16.5; // grading, marksheet, rollcall
  const totalTeacherHoursYearly = Math.round(teacherCount * hoursSavedPerTeacherMonthly * 10);
  
  // Fee collection bump: on average +11% recovery with instant payment links & automated WhatsApp reminders
  const potentialFeeBumpPercent = Math.min(96 - feeRate, 14);
  const currentAnnualFees = learnerCount * avgTuition * 10 * (feeRate / 100);
  const recoveredAnnualRevenueZAR = Math.max(0, Math.round(learnerCount * avgTuition * 10 * (potentialFeeBumpPercent / 100)));
  
  // Paper & Printing Savings (estimated R85/learner/year on paper report cards & notices)
  const paperSavingsZAR = Math.round(learnerCount * 92);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80" id="roi-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#43A047]/10 text-[#43A047] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Institutional Impact Analysis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B3D] tracking-tight">
            Calculate Your School's Operational ROI
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Adjust the sliders below to estimate time saved by educators, increased fee recovery, and paperless operational savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-soft-xl">
          {/* Sliders Input Controls (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-[#0D1B3D] pb-2 border-b border-slate-100 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-[#1E88E5]" />
              Campus Parameters
            </h3>

            {/* Slider 1: Learner Count */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="font-semibold text-slate-700">Total Enrolled Learners</span>
                <span className="font-extrabold text-sm text-[#0D1B3D] px-2.5 py-0.5 bg-slate-100 rounded-lg">
                  {learnerCount.toLocaleString()} Learners
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={learnerCount}
                onChange={(e) => setLearnerCount(Number(e.target.value))}
                className="w-full accent-[#1E88E5] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>100</span>
                <span>1,500</span>
                <span>3,000+</span>
              </div>
            </div>

            {/* Slider 2: Teachers Count */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="font-semibold text-slate-700">Teaching & Academic Staff</span>
                <span className="font-extrabold text-sm text-[#0D1B3D] px-2.5 py-0.5 bg-slate-100 rounded-lg">
                  {teacherCount} Educators
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                step="1"
                value={teacherCount}
                onChange={(e) => setTeacherCount(Number(e.target.value))}
                className="w-full accent-[#1E88E5] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>5</span>
                <span>75</span>
                <span>150</span>
              </div>
            </div>

            {/* Slider 3: Current Fee Recovery */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="font-semibold text-slate-700">Current Tuition Fee Collection Rate</span>
                <span className="font-extrabold text-sm text-[#43A047] px-2.5 py-0.5 bg-emerald-50 rounded-lg">
                  {feeRate}%
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="98"
                step="1"
                value={feeRate}
                onChange={(e) => setFeeRate(Number(e.target.value))}
                className="w-full accent-[#43A047] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>50%</span>
                <span>75%</span>
                <span>98%</span>
              </div>
            </div>

            {/* Slider 4: Average Monthly Tuition */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="font-semibold text-slate-700">Avg. Monthly Tuition Fee per Learner (ZAR)</span>
                <span className="font-extrabold text-sm text-[#0D1B3D] px-2.5 py-0.5 bg-slate-100 rounded-lg">
                  R {avgTuition.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={avgTuition}
                onChange={(e) => setAvgTuition(Number(e.target.value))}
                className="w-full accent-[#0D1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>R 500 (Subsidized)</span>
                <span>R 5,000</span>
                <span>R 10,000+ (Private)</span>
              </div>
            </div>
          </div>

          {/* Results Output Cards (Right 6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0D1B3D] via-[#10244F] to-[#162A5E] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-soft-lg space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Estimated Annual Value Delivered</span>
                <span className="text-[10px] text-[#43A047] font-bold px-2 py-0.5 bg-white/10 rounded-md">
                  100% Guaranteed Outcome
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {/* Result 1: Hours Saved */}
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-blue-200 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#1E88E5]" />
                    <span>Educator Hours Saved</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white">
                    {totalTeacherHoursYearly.toLocaleString()} hrs
                  </div>
                  <span className="text-[11px] text-slate-300 mt-1 block">
                    ~{hoursSavedPerTeacherMonthly} hrs/educator each month
                  </span>
                </div>

                {/* Result 2: Fee Recovery Boost */}
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-emerald-200 mb-1">
                    <CreditCard className="w-3.5 h-3.5 text-[#43A047]" />
                    <span>Est. Fee Recovery Boost</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#81C784]">
                    +R {recoveredAnnualRevenueZAR.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-300 mt-1 block">
                    Through instant EFT & automated WhatsApp bills
                  </span>
                </div>

                {/* Result 3: Paper Printing Saved */}
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-amber-200 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#FF9800]" />
                    <span>Paper & Ink Saved</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#FFB74D]">
                    R {paperSavingsZAR.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-300 mt-1 block">
                    100% digital marksheets & report packs
                  </span>
                </div>

                {/* Result 4: SASAMS Readiness */}
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-slate-200 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E88E5]" />
                    <span>Compliance Velocity</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white">
                    3-Sec Sync
                  </div>
                  <span className="text-[11px] text-slate-300 mt-1 block">
                    Zero manual double-entry for EMIS
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-soft-md flex items-center justify-center gap-2"
              >
                <span>Request Custom Campus Audit & Proposal</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
