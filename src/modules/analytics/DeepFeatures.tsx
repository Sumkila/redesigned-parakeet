import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart3,
  MessageCircle,
  ShieldCheck,
  WifiOff,
  TrendingUp,
  AlertTriangle,
  Zap,
  Lock,
  Smartphone,
  CheckCircle2,
  FileCheck,
  Server,
  KeyRound,
  ArrowRight,
  Database
} from 'lucide-react';

export const DeepFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'communication' | 'security' | 'offline'>('analytics');

  const tabs = [
    {
      id: 'analytics',
      label: 'Analytics & Insights',
      icon: BarChart3,
      badge: 'Predictive Intervention',
      color: 'text-[#1E88E5]',
      accentBg: 'bg-[#1E88E5]'
    },
    {
      id: 'communication',
      label: 'Communication Hub',
      icon: MessageCircle,
      badge: 'Zero-Rated & WhatsApp',
      color: 'text-[#43A047]',
      accentBg: 'bg-[#43A047]'
    },
    {
      id: 'security',
      label: 'POPIA & Security',
      icon: ShieldCheck,
      badge: 'Bank-Grade AES-256',
      color: 'text-[#0D1B3D]',
      accentBg: 'bg-[#0D1B3D]'
    },
    {
      id: 'offline',
      label: 'Offline & Low-Data',
      icon: WifiOff,
      badge: 'Load-Shedding Proof',
      color: 'text-[#FF9800]',
      accentBg: 'bg-[#FF9800]'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAFCFF] border-y border-slate-200/80" id="features-deepdive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-xs font-bold uppercase tracking-wider mb-3">
            Engineered for Modern Institutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B3D] tracking-tight">
            Next-Generation Systems for Analytics, Messaging & Security
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Say goodbye to fragmented paper spreadsheets and disconnected legacy software.
          </p>
        </div>

        {/* Feature Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-slate-200/80 backdrop-blur rounded-2xl gap-1 shadow-inner">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#0D1B3D] shadow-soft-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? t.color : 'text-slate-500'}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft-xl p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {/* 1. ANALYTICS */}
            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-[#1E88E5] text-xs font-bold rounded-full">
                    Predictive Diagnostic Intelligence
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3D]">
                    Spot Learning Gaps Weeks Before Exams
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Lumani’s real-time analytics engine aggregates continuous assessment marks, attendance trends, and quiz telemetry to highlight struggling learners before final matric or term exams.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      { title: 'Automatic Early Intervention Triggers', desc: 'Alerts subject heads when a student’s rolling average dips below target threshold.' },
                      { title: 'CAPS & IEB Syllabus Milestone Velocity', desc: 'Track whether educators are ahead or behind on the National Curriculum Statement.' },
                      { title: 'One-Click Official Report Cards', desc: 'Generate high-res, printable PDF reports with QR verification stamps for SASAMS compliance.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#1E88E5]/15 text-[#1E88E5] mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#0D1B3D]">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Visual Graphic */}
                <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-500">School-Wide Academic Health</span>
                      <h4 className="text-base font-extrabold text-[#0D1B3D]">Grade 11 Mathematics Diagnostic</h4>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                      +6.8% YoY Pass Target
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { topic: 'Analytical Geometry (Paper 2)', mastery: 88, status: 'Mastered', color: 'bg-[#43A047]' },
                      { topic: 'Trigonometric Reduction & Identities', mastery: 81, status: 'On Track', color: 'bg-[#1E88E5]' },
                      { topic: 'Financial Mathematics & Annuities', mastery: 92, status: 'Exceptional', color: 'bg-[#43A047]' },
                      { topic: 'Differential Calculus & Optimisation', mastery: 64, status: 'Needs Intervention', color: 'bg-[#FF9800]' },
                    ].map((t, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200/70 text-xs">
                        <div className="flex justify-between font-semibold text-slate-800 mb-1.5">
                          <span>{t.topic}</span>
                          <span className="font-bold text-[#0D1B3D]">{t.mastery}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className={`h-full ${t.color} rounded-full`} style={{ width: `${t.mastery}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-3 text-xs text-amber-900">
                    <AlertTriangle className="w-5 h-5 text-[#FF9800] flex-shrink-0" />
                    <div>
                      <span className="font-bold">Automated Recommendation: </span>
                      Schedule supplementary Calculus review session for 14 learners in Grade 11-B.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. COMMUNICATION */}
            {activeTab === 'communication' && (
              <motion.div
                key="communication"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-[#43A047] text-xs font-bold rounded-full">
                    Zero-Friction Parent Engagement
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3D]">
                    Reach 100% of Guardians in Real-Time
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Most South African parents use WhatsApp as their primary digital channel. Lumani natively integrates zero-rated SMS and official WhatsApp Business APIs so vital notices and marks are never missed.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      { title: 'Instant Absentee Alerts', desc: 'As soon as a teacher records morning roll call, an instant WhatsApp/SMS notification is sent to the guardian.' },
                      { title: 'Encrypted Teacher-Parent Direct Line', desc: 'Teachers can communicate without giving out personal phone numbers, preserving work-life boundaries.' },
                      { title: 'Emergency School-Wide Broadcasts', desc: 'Broadcast load-shedding adjustments, early closures, or weather alerts in under 3 seconds.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#43A047]/15 text-[#43A047] mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#0D1B3D]">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Communication Mockup */}
                <div className="lg:col-span-6 bg-slate-900 text-white p-6 rounded-2xl shadow-soft-lg space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[#43A047]" />
                      <span className="text-xs font-bold font-mono">Lumani Omnichannel Gateway</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 bg-emerald-950 rounded-full border border-emerald-800">
                      99.98% Deliverability
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span className="text-emerald-400 font-bold">✓✓ WhatsApp Broadcast #9021</span>
                        <span>07:45 AM</span>
                      </div>
                      <p className="text-slate-200">
                        "Dear Parent, Pretoria STEM High sports day will commence at 08:30 AM tomorrow. Sunscreen and sports kit required."
                      </p>
                    </div>

                    <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span className="text-[#FF9800] font-bold">⚡ Instant Fee Receipt</span>
                        <span>Yesterday</span>
                      </div>
                      <p className="text-slate-200">
                        "Payment of R3,450.00 for Sipho Ndlovu received via Instant EFT. Balance: R0.00. Thank you for your continued partnership."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. SECURITY */}
            {activeTab === 'security' && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-block px-3 py-1 bg-slate-100 text-[#0D1B3D] text-xs font-bold rounded-full">
                    Sovereign Protection & POPIA Compliance
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3D]">
                    Bank-Grade Trust for Student Records
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Minor student records demand uncompromising legal and architectural safeguards. Lumani enforces strict South African POPIA compliance, biometric two-factor authentication, and military-grade encryption.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      { title: 'Local South African Cloud Hosting', desc: 'Data resides on dedicated, hyper-secure sovereign servers in Johannesburg and Cape Town.' },
                      { title: 'Granular Role-Based Access (RBAC)', desc: 'Educators only access their assigned classes; financial bursar data is strictly isolated.' },
                      { title: 'Comprehensive DPO Audit Trails', desc: 'Every mark modification, fee adjustment, and export is permanently logged with cryptographic timestamps.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#0D1B3D]/10 text-[#0D1B3D] mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#0D1B3D]">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Badge Visual */}
                <div className="lg:col-span-6 bg-gradient-to-br from-[#0D1B3D] to-[#152A5E] text-white p-6 rounded-2xl shadow-soft-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 rounded-xl text-[#FF9800]">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base">Lumani Security Vault</h4>
                      <p className="text-xs text-slate-300">Certified by Erica Innovations InfoSec Group</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <KeyRound className="w-4 h-4 text-[#1E88E5] mb-1" />
                      <span className="font-bold block text-slate-200">AES-256 & TLS 1.3</span>
                      <span className="text-[11px] text-slate-400">Zero plaintext storage</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <FileCheck className="w-4 h-4 text-[#43A047] mb-1" />
                      <span className="font-bold block text-slate-200">POPIA Act 4 of 2013</span>
                      <span className="text-[11px] text-slate-400">Full statutory adherence</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <Server className="w-4 h-4 text-[#FF9800] mb-1" />
                      <span className="font-bold block text-slate-200">99.99% Cloud SLA</span>
                      <span className="text-[11px] text-slate-400">Redundant multi-zone failover</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <Database className="w-4 h-4 text-[#81C784] mb-1" />
                      <span className="font-bold block text-slate-200">Continuous Backups</span>
                      <span className="text-[11px] text-slate-400">Point-in-time recovery</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. OFFLINE & LOW DATA */}
            {activeTab === 'offline' && (
              <motion.div
                key="offline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-block px-3 py-1 bg-amber-50 text-[#FF9800] text-xs font-bold rounded-full">
                    Engineered for South African Realities
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3D]">
                    Zero Interruption During Load-Shedding & Low Bandwidth
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Power cuts and costly mobile data should never disrupt a child’s education. Lumani’s offline-first Progressive Web App (PWA) caches lessons and tests locally, synchronizing automatically once connectivity is restored.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      { title: '85% Less Mobile Data Consumption', desc: 'Ultra-lean code architecture ensures students on limited prepaid data bundles can study without friction.' },
                      { title: 'Seamless Offline Roll-Call & Marks', desc: 'Teachers can record attendance and rubric marks with zero internet; auto-syncs when school Wi-Fi reconnects.' },
                      { title: 'Works Across Low-Spec Devices', desc: 'Optimized for entry-level Android tablets, laptops, and older desktop computers.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#FF9800]/15 text-[#FF9800] mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#0D1B3D]">{item.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offline Mode Visual */}
                <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-600 text-white rounded-lg">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-emerald-950">Offline Sync Protocol Active</h4>
                        <p className="text-[11px] text-emerald-800">42 local records saved in browser cache</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700">Ready to Sync</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="text-slate-500 text-[10px]">Data Usage / Hour:</span>
                      <div className="text-lg font-extrabold text-[#0D1B3D]">~1.4 MB</div>
                      <span className="text-[10px] text-[#43A047]">vs 45 MB on legacy portals</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="text-slate-500 text-[10px]">Offline Storage Footprint:</span>
                      <div className="text-lg font-extrabold text-[#0D1B3D]">&lt; 15 MB</div>
                      <span className="text-[10px] text-[#1E88E5]">Zero bloat guaranteed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
