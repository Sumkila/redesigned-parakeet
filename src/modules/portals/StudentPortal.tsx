import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  FileText,
  Sparkles,
  Check,
  CheckCircle,
  Flame,
  Star,
  Wifi,
  WifiOff
} from 'lucide-react';
import { StudentQuizQuestion } from '../../types/index.ts';

interface StudentPortalProps {
  onOpenDemo?: () => void;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({ onOpenDemo }) => {
  const [lowDataMode, setLowDataMode] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [studentXP, setStudentXP] = useState(1480);
  const [homeworkSubmitted, setHomeworkSubmitted] = useState(false);

  const sampleQuiz: StudentQuizQuestion = {
    question: "In CAPS Grade 11 Mathematics (Trigonometry), what is the identity for sin²(θ) + cos²(θ)?",
    options: ["tan(θ)", "1", "2sin(θ)", "0"],
    correctIndex: 1,
    explanation: "Fundamental Pythagorean trigonometric identity: sin²(θ) + cos²(θ) = 1 for all real angles θ.",
    topic: "Trigonometry & Functions"
  };

  const handleAnswerQuiz = (index: number) => {
    setQuizAnswered(index);
    if (index === sampleQuiz.correctIndex) {
      setStudentXP(prev => prev + 50);
    }
  };

  return (
    <motion.div
      key="student"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      {/* Top Bar Banner */}
      <div className="bg-gradient-to-r from-[#0D1B3D] to-[#152A5E] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-soft-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#FF9800] p-0.5">
              <div className="w-full h-full bg-[#0D1B3D] rounded-2xl flex items-center justify-center text-xl font-bold text-white">
                SN
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#43A047] border-2 border-[#0D1B3D]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white">Sipho Ndlovu</h3>
              <span className="px-2 py-0.5 rounded-full bg-[#FF9800]/20 text-[#FFB74D] text-xs font-bold">Grade 11-A (CAPS)</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">Pretoria Boys STEM High • Term 3 Academics</p>
          </div>
        </div>

        {/* Gamification XP & Low Data Mode */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold backdrop-blur-sm">
            <Flame className="w-4 h-4 text-[#FF9800] fill-[#FF9800]" />
            <span>12-Day Streak</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold backdrop-blur-sm">
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>{studentXP} Study XP</span>
          </div>
          <button
            onClick={() => setLowDataMode(!lowDataMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition ${
              lowDataMode
                ? 'bg-[#43A047] text-white'
                : 'bg-white/15 text-slate-200 hover:bg-white/20'
            }`}
          >
            {lowDataMode ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            <span>{lowDataMode ? 'Low-Data: Active (85% Saved)' : 'Standard Stream'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Schedule & Curriculum Quiz Master */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Schedule & Assignments */}
        <div className="lg:col-span-2 space-y-5">
          {/* Today's Live Schedule */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1E88E5]" />
                <h4 className="font-bold text-sm text-[#0D1B3D]">Today's Academic Schedule</h4>
              </div>
              <span className="text-xs text-slate-500">Wednesday, Term 3</span>
            </div>

            <div className="space-y-2.5">
              {[
                { time: '08:00 - 09:30', title: 'Mathematics CAPS', topic: 'Calculus: Cubic Polynomials & Derivatives', room: 'Lab 4', status: 'completed' },
                { time: '09:45 - 11:15', title: 'Physical Sciences', topic: 'Newtonian Gravitation & Momentum', room: 'Physics Dept', status: 'in-progress' },
                { time: '11:45 - 12:45', title: 'Information Technology', topic: 'Algorithms & Database Normalization', room: 'Com-Lab B', status: 'upcoming' },
                { time: '13:30 - 14:30', title: 'Life Orientation', topic: 'Career Pathways & Higher Education Funding', room: 'Hall 2', status: 'upcoming' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition ${
                    item.status === 'in-progress'
                      ? 'bg-[#1E88E5]/5 border-[#1E88E5]/40 shadow-sm'
                      : 'bg-slate-50/60 border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-500 min-w-[90px]">{item.time}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-[#0D1B3D]">{item.title}</span>
                        {item.status === 'in-progress' && (
                          <span className="px-2 py-0.5 rounded-full bg-[#1E88E5] text-white text-[10px] font-bold animate-pulse">
                            Live Now
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600">{item.topic}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium self-start sm:self-center">
                    {item.room}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Assignment Dropzone */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm text-[#0D1B3D] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#FF9800]" />
                Physical Sciences Formal Assessment Task (FAT 3)
              </h4>
              <span className="text-xs font-bold text-[#FF9800] bg-[#FF9800]/10 px-2.5 py-1 rounded-full">
                Due Tomorrow, 23:59
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Upload your laboratory report on Linear Momentum collisions with full vector diagrams and error analysis.
            </p>

            <div className="p-4 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/80 flex flex-col items-center justify-center text-center">
              {homeworkSubmitted ? (
                <div className="flex items-center gap-2 text-xs font-bold text-[#43A047]">
                  <CheckCircle className="w-5 h-5" />
                  <span>Uploaded: ndlovu_physics_lab_fat3.pdf (1.8 MB) — Rubric Ready</span>
                </div>
              ) : (
                <>
                  <svg className="w-6 h-6 text-[#1E88E5] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div className="text-xs font-bold text-slate-700">Drag & Drop report PDF or tap to browse</div>
                  <p className="text-[10px] text-slate-500 mt-1">Automatic POPIA virus scan & plagiarism check enabled</p>
                  <button
                    onClick={() => setHomeworkSubmitted(true)}
                    className="mt-3 px-4 py-1.5 bg-[#0D1B3D] hover:bg-[#152A5E] text-white text-xs font-bold rounded-lg transition"
                  >
                    Simulate One-Click Submit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Col: Curriculum Revision & Interactive Quiz */}
        <div className="space-y-5">
          <div className="bg-gradient-to-br from-white to-blue-50/30 p-5 rounded-2xl border border-blue-200 shadow-soft-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-[#1E88E5] text-white rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0D1B3D]">Lumani Study Master</h4>
                <span className="text-[10px] text-slate-500">CAPS / IEB Knowledge Base</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Test your recall before tomorrow's class with this quick 60-second micro-challenge.
            </p>

            <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs space-y-3">
              <div className="font-bold text-[#0D1B3D] leading-snug">
                {sampleQuiz.question}
              </div>

              <div className="space-y-1.5">
                {sampleQuiz.options.map((opt, optIdx) => {
                  const isSelected = quizAnswered === optIdx;
                  const isCorrect = optIdx === sampleQuiz.correctIndex;
                  let btnClass = 'bg-slate-50 border-slate-200 hover:bg-blue-50 text-slate-700';

                  if (quizAnswered !== null) {
                    if (isCorrect) {
                      btnClass = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnClass = 'bg-rose-50 border-rose-400 text-rose-800';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleAnswerQuiz(optIdx)}
                      disabled={quizAnswered !== null}
                      className={`w-full text-left p-2 rounded-lg border text-xs transition flex items-center justify-between ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {quizAnswered !== null && isCorrect && (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {quizAnswered !== null && (
                <div className="p-2.5 bg-blue-50/80 rounded-lg text-[11px] text-blue-900 border border-blue-200">
                  <span className="font-bold">Explanation: </span>
                  {sampleQuiz.explanation}
                </div>
              )}
            </div>
          </div>

          {/* Quick Academic Progress Stats */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80">
            <div className="text-xs font-bold text-[#0D1B3D] mb-2 flex items-center justify-between">
              <span>Subject Mastery Matrix</span>
              <span className="text-[11px] text-emerald-600 font-extrabold">+4.2% this term</span>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { name: 'Mathematics CAPS', score: 86, color: 'bg-[#1E88E5]' },
                { name: 'Physical Sciences', score: 82, color: 'bg-[#FF9800]' },
                { name: 'Information Tech', score: 94, color: 'bg-[#43A047]' },
                { name: 'English Home Lang', score: 79, color: 'bg-[#0D1B3D]' },
              ].map((subj, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600 font-medium">{subj.name}</span>
                    <span className="font-bold text-slate-800">{subj.score}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full ${subj.color} rounded-full`} style={{ width: `${subj.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
