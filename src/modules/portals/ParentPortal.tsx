import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CreditCard,
  MessageSquare,
  CheckCircle,
  FileCheck,
  Download,
  Lock,
  Send,
  Building
} from 'lucide-react';

interface ParentPortalProps {
  onOpenDemo?: () => void;
}

export const ParentPortal: React.FC<ParentPortalProps> = ({ onOpenDemo }) => {
  const [selectedChild, setSelectedChild] = useState<'sipho' | 'lerato'>('sipho');
  const [feeSettled, setFeeSettled] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatThread, setChatThread] = useState([
    { sender: 'teacher', text: 'Good day Mr. Ndlovu. Sipho scored 86% in today\'s Mathematics FAT test! Well done.', time: '09:45 AM' },
    { sender: 'parent', text: 'Thank you Mrs. Sithole! He practiced on Lumani study revision modules last night.', time: '10:02 AM' },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatThread(prev => [...prev, { sender: 'parent', text: chatMessage, time: 'Just now' }]);
    setChatMessage('');
  };

  return (
    <motion.div
      key="parent"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      {/* Parent Header */}
      <div className="bg-[#0D1B3D] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-soft-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#43A047]/20 border border-[#43A047]/40 flex items-center justify-center text-xl font-bold text-[#81C784]">
            TN
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white">Thulani Ndlovu (Guardian)</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#43A047]/30 text-[#A5D6A7] text-xs font-bold">2 Enrolled Learners</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">Parent Code #PTA-9821 • Pretoria Boys STEM High</p>
          </div>
        </div>

        {/* Child Switcher */}
        <div className="flex items-center gap-2 p-1 bg-white/10 rounded-xl backdrop-blur-sm">
          <button
            onClick={() => setSelectedChild('sipho')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedChild === 'sipho' ? 'bg-white text-[#0D1B3D] shadow-sm' : 'text-slate-200 hover:text-white'
            }`}
          >
            Sipho (Gr 11-A)
          </button>
          <button
            onClick={() => setSelectedChild('lerato')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedChild === 'lerato' ? 'bg-white text-[#0D1B3D] shadow-sm' : 'text-slate-200 hover:text-white'
            }`}
          >
            Lerato (Gr 8-C)
          </button>
        </div>
      </div>

      {/* Grid: Financials & Academic Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Academic Performance & Secure Fee Settlement */}
        <div className="lg:col-span-2 space-y-5">
          {/* Tuition Fee Statement Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#43A047]" />
                <div>
                  <h4 className="font-bold text-sm text-[#0D1B3D]">School Fee Account (Term 3, 2026)</h4>
                  <p className="text-[11px] text-slate-500">Includes Tuition, STEM Lab Levies, and Sports & Cultural Dues</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${feeSettled ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'}`}>
                {feeSettled ? 'Account In Good Standing (R 0.00)' : 'Current Due: R 2,450.00'}
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs text-slate-500">Next Payment Cycle: 1 September 2026</div>
                <div className="text-base font-extrabold text-[#0D1B3D] mt-0.5">
                  {feeSettled ? 'R 0.00 Outstanding' : 'R 2,450.00 Outstanding'}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                  <Lock className="w-3 h-3 text-[#43A047]" />
                  <span>Instant Settlement via Ozow / PayFast / Capitec Pay</span>
                </div>
              </div>

              {!feeSettled ? (
                <button
                  onClick={() => setFeeSettled(true)}
                  className="px-4 py-2.5 bg-[#43A047] hover:bg-[#388E3C] text-white text-xs font-bold rounded-xl shadow-soft-sm transition flex items-center gap-2"
                >
                  <Building className="w-4 h-4" />
                  <span>Pay Now (Instant EFT)</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle className="w-5 h-5" />
                  <span>Receipt #LMN-8921 Issued</span>
                </div>
              )}
            </div>
          </div>

          {/* Child Real-time Academic Mastery */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm text-[#0D1B3D]">Live Academic Progress Overview</h4>
              <button className="text-xs font-bold text-[#1E88E5] hover:underline flex items-center gap-1">
                <Download className="w-3.5 h-3.5" />
                <span>Download Term 2 DBE Report Card</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { subj: 'Mathematics', mark: '86%', grade: 'Level 7', trend: '+4%' },
                { subj: 'Physical Sciences', mark: '82%', grade: 'Level 7', trend: '+2%' },
                { subj: 'Information Tech', mark: '94%', grade: 'Level 7', trend: '+1%' },
                { subj: 'English Home Lang', mark: '79%', grade: 'Level 6', trend: '+3%' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                  <div className="text-[11px] font-semibold text-slate-600 truncate">{item.subj}</div>
                  <div className="text-lg font-extrabold text-[#0D1B3D]">{item.mark}</div>
                  <div className="text-[10px] font-bold text-[#43A047] bg-green-50 rounded-md py-0.5">{item.grade} ({item.trend})</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Encrypted Teacher Channel */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col justify-between h-full min-h-[380px]">
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#1E88E5]/15 flex items-center justify-center font-bold text-xs text-[#1E88E5]">
                NS
              </div>
              <div>
                <div className="text-xs font-bold text-[#0D1B3D]">Mrs. Nomvula Sithole</div>
                <div className="text-[10px] text-slate-500">Grade 11 Mathematics • Active Now</div>
              </div>
            </div>

            {/* Chat Thread */}
            <div className="py-4 space-y-3 max-h-[220px] overflow-y-auto">
              {chatThread.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'parent' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs ${
                      msg.sender === 'parent'
                        ? 'bg-[#43A047] text-white rounded-br-none'
                        : 'bg-slate-100 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="pt-3 border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder="Ask teacher a question..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#43A047]"
            />
            <button
              type="submit"
              className="p-2 bg-[#43A047] hover:bg-[#388E3C] text-white rounded-xl transition"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
