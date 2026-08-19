import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Users,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Send,
  MessageCircle,
  Database
} from 'lucide-react';

interface TeacherPortalProps {
  onOpenDemo?: () => void;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'attendance' | 'rubric' | 'remarks'>('attendance');
  const [attendance, setAttendance] = useState([
    { id: 1, name: 'Babalwa Zulu', status: 'present', parentContact: '+27 82 456 7890' },
    { id: 2, name: 'Liam Van Der Merwe', status: 'present', parentContact: '+27 83 234 5678' },
    { id: 3, name: 'Sipho Ndlovu', status: 'present', parentContact: '+27 71 987 6543' },
    { id: 4, name: 'Aaliyah Patel', status: 'absent', parentContact: '+27 84 345 6789' },
    { id: 5, name: 'Kagiso Molefe', status: 'present', parentContact: '+27 76 567 8901' },
    { id: 6, name: 'Chloe Naidoo', status: 'late', parentContact: '+27 82 890 1234' },
  ]);
  const [selectedRemarkStudent, setSelectedRemarkStudent] = useState('Sipho Ndlovu');
  const [remarkGenerated, setRemarkGenerated] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState<number | null>(null);

  const handleToggleAttendance = (id: number) => {
    setAttendance(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextStatus = item.status === 'present' ? 'absent' : item.status === 'absent' ? 'late' : 'present';
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const handleSendWhatsappAlert = (id: number) => {
    setWhatsappSent(id);
    setTimeout(() => setWhatsappSent(null), 3000);
  };

  return (
    <motion.div
      key="teacher"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      {/* Educator Header */}
      <div className="bg-[#0D1B3D] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-soft-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#1E88E5]/20 border border-[#1E88E5]/40 flex items-center justify-center text-xl font-bold text-[#64B5F6]">
            MS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white">Mrs. Nomvula Sithole</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1E88E5]/30 text-[#64B5F6] text-xs font-bold">HOD Mathematics</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">Grade 11 & 12 Advanced Programme • Period 2 Active</p>
          </div>
        </div>

        {/* Action Pills */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'attendance'
                ? 'bg-[#1E88E5] text-white'
                : 'bg-white/10 text-slate-200 hover:bg-white/15'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Roll Call</span>
          </button>
          <button
            onClick={() => setActiveTab('rubric')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'rubric'
                ? 'bg-[#1E88E5] text-white'
                : 'bg-white/10 text-slate-200 hover:bg-white/15'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>CAPS Rubric</span>
          </button>
          <button
            onClick={() => setActiveTab('remarks')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'remarks'
                ? 'bg-[#1E88E5] text-white'
                : 'bg-white/10 text-slate-200 hover:bg-white/15'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
            <span>Remark Engine</span>
          </button>
        </div>
      </div>

      {/* Dynamic Tab Views */}
      {activeTab === 'attendance' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-sm text-[#0D1B3D]">Grade 11-A Live Attendance Register</h4>
                <p className="text-xs text-slate-500">Tap status badge to toggle. Automated instant WhatsApp SMS alert ready for absent learners.</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg">
                92% Class Attendance
              </span>
            </div>

            <div className="space-y-2">
              {attendance.map((stu) => (
                <div
                  key={stu.id}
                  className="p-3 bg-slate-50/80 hover:bg-slate-100/80 rounded-xl border border-slate-200 flex items-center justify-between transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
                      {stu.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0D1B3D]">{stu.name}</div>
                      <div className="text-[10px] text-slate-500">{stu.parentContact}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleAttendance(stu.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition capitalize ${
                        stu.status === 'present'
                          ? 'bg-emerald-100 text-emerald-800'
                          : stu.status === 'absent'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {stu.status}
                    </button>

                    {stu.status === 'absent' && (
                      <button
                        onClick={() => handleSendWhatsappAlert(stu.id)}
                        className="p-1.5 bg-[#43A047]/10 hover:bg-[#43A047]/20 text-[#43A047] rounded-lg transition"
                        title="Send Zero-Rated WhatsApp Absence Notification to Guardian"
                      >
                        {whatsappSent === stu.id ? (
                          <span className="text-[10px] font-bold text-emerald-700 px-1">Sent!</span>
                        ) : (
                          <MessageCircle className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
              <h4 className="font-bold text-sm text-[#0D1B3D] mb-2 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#1E88E5]" />
                SASAMS Sync Status
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                Daily period marks and attendance are synchronized directly with Department of Basic Education formats.
              </p>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>SASAMS DBE 2026.1:</span>
                  <span>Synchronized</span>
                </div>
                <div className="text-[11px] text-emerald-700">Last auto-batch export: 08:05 AM today</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E88E5]/10 to-indigo-50 p-5 rounded-2xl border border-blue-200">
              <div className="text-xs font-bold text-[#0D1B3D] mb-1">Time Saved This Month</div>
              <div className="text-2xl font-extrabold text-[#1E88E5]">14.5 Hours</div>
              <p className="text-[11px] text-slate-600 mt-1">
                Via automated roll calls, rubric grade scaling, and batch WhatsApp report delivery.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rubric' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-base text-[#0D1B3D]">CAPS DBE Mathematics Assessment Rubric (FAT 2 - Calculus)</h4>
              <p className="text-xs text-slate-500">1-click criterion scoring with automatic weighting and standard deviations.</p>
            </div>
            <span className="px-3 py-1 bg-blue-50 text-[#1E88E5] font-bold text-xs rounded-xl">Weight: 25% of Term Mark</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
            {[
              { level: 'Level 1-2 (0-39%)', desc: 'Elementary understanding; requires continuous guided intervention.', pts: '0 - 19 pts' },
              { level: 'Level 3-4 (40-59%)', desc: 'Adequate calculation; procedural fluency in standard derivative rules.', pts: '20 - 29 pts' },
              { level: 'Level 5-6 (60-79%)', desc: 'Substantial synthesis; handles complex tangents and optimization problems.', pts: '30 - 39 pts' },
              { level: 'Level 7 (80-100%)', desc: 'Meritorious mastery; exceptional problem-solving and proof rigor.', pts: '40 - 50 pts' },
            ].map((col, i) => (
              <div key={i} className={`p-4 rounded-xl border text-xs space-y-2 ${i === 3 ? 'bg-amber-50/50 border-amber-300' : 'bg-slate-50 border-slate-200'}`}>
                <div className="font-extrabold text-[#0D1B3D]">{col.level}</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">{col.desc}</p>
                <div className="font-mono font-bold text-[#1E88E5] text-[11px]">{col.pts}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'remarks' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-base text-[#0D1B3D] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF9800]" />
                Automated CAPS Report Card Remark Engine
              </h4>
              <p className="text-xs text-slate-500">Generates objective, personalized, and encouraging comments aligned with DBE standards.</p>
            </div>
            <select
              value={selectedRemarkStudent}
              onChange={(e) => {
                setSelectedRemarkStudent(e.target.value);
                setRemarkGenerated(false);
              }}
              className="text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5]"
            >
              <option>Sipho Ndlovu (86% - Level 7)</option>
              <option>Babalwa Zulu (74% - Level 6)</option>
              <option>Liam Van Der Merwe (62% - Level 5)</option>
            </select>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Diagnostic Assessment Summary:</span>
              <span className="text-[#1E88E5] font-semibold">Strengths: Calculus, Functions • Growth Area: Euclidean Geometry Proofs</span>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed italic">
              {remarkGenerated ? (
                "\"Sipho has demonstrated outstanding conceptual mastery in differential calculus and polynomial functions this term (86%). He consistently assists peers during group problem-solving. With focused revision on Euclidean geometry cyclic quadrilaterals, he is well on track for a Grade 12 Matric Distinction.\""
              ) : (
                "Tap 'Generate Contextual Remark' below to synthesize teacher observations, test mark trends, and class participation into a polished comment."
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setRemarkGenerated(true)}
                className="px-4 py-2 bg-[#0D1B3D] hover:bg-[#152A5E] text-white text-xs font-bold rounded-xl transition flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
                <span>{remarkGenerated ? 'Regenerate Remark' : 'Generate Contextual Remark'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
