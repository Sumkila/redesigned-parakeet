import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Download,
  AlertTriangle,
  FileCheck,
  CheckCircle,
  Clock,
  Sparkles,
  Database
} from 'lucide-react';

interface AdminPortalProps {
  onOpenDemo?: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onOpenDemo }) => {
  const [sasamsExporting, setSasamsExporting] = useState(false);
  const [sasamsSuccess, setSasamsSuccess] = useState(false);
  const [emergencyAlertSent, setEmergencyAlertSent] = useState(false);

  const handleTriggerSasams = () => {
    setSasamsExporting(true);
    setTimeout(() => {
      setSasamsExporting(false);
      setSasamsSuccess(true);
      setTimeout(() => setSasamsSuccess(false), 4000);
    }, 1500);
  };

  const handleTriggerEmergency = () => {
    setEmergencyAlertSent(true);
    setTimeout(() => setEmergencyAlertSent(false), 3500);
  };

  return (
    <motion.div
      key="admin"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      {/* Admin Executive Header */}
      <div className="bg-[#0D1B3D] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-soft-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-xl font-bold text-white">
            PB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white">Pretoria Boys STEM High</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-[#64B5F6] text-xs font-bold">EMIS #700412891</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">Central Campus Control • Gauteng Department of Education</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleTriggerSasams}
            disabled={sasamsExporting}
            className="px-4 py-2 bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-xl text-xs font-bold shadow-soft-sm transition flex items-center gap-2"
          >
            {sasamsExporting ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Exporting SASAMS...</span>
              </>
            ) : sasamsSuccess ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-300" />
                <span>SASAMS Batch Exported!</span>
              </>
            ) : (
              <>
                <Database className="w-3.5 h-3.5" />
                <span>1-Click SASAMS Export</span>
              </>
            )}
          </button>

          <button
            onClick={handleTriggerEmergency}
            className="px-4 py-2 bg-rose-600/90 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-2"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{emergencyAlertSent ? 'Broadcast Sent to 1,248 Guardians' : 'Emergency SMS / App Broadcast'}</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Enrolled Learners', val: '1,248', sub: '99.2% Active PWA', trend: '+42 this term', color: 'text-[#1E88E5]' },
          { label: 'Tuition Collected', val: 'R 3.42M', sub: '96.4% Collection Rate', trend: '+14% via Ozow EFT', color: 'text-[#43A047]' },
          { label: 'CAPS Mark Completion', val: '98.8%', sub: '24 Depts Moderated', trend: 'All on schedule', color: 'text-[#FF9800]' },
          { label: 'POPIA Compliance', val: '100%', sub: 'AES-256 Audit Green', trend: 'Zero breaches', color: 'text-[#0D1B3D]' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft-sm space-y-1">
            <div className="text-xs font-medium text-slate-500">{item.label}</div>
            <div className={`text-2xl font-black ${item.color}`}>{item.val}</div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-slate-600 font-medium">{item.sub}</span>
              <span className="text-[#43A047] font-bold">{item.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Deep Operational Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Bursar Fee Inflow & Live Audit Logs */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-sm text-[#0D1B3D]">Bursar Real-time Fee Reconciliation</h4>
                <p className="text-xs text-slate-500">Instant reconciliation across Ozow, Capitec Pay, PayFast, and Cash deposits.</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                +R 142,500 settled today
              </span>
            </div>

            <div className="space-y-2">
              {[
                { ref: 'EFT-9921', payer: 'S. Ndlovu (Grade 11-A)', amount: 'R 2,450.00', method: 'Ozow Instant EFT', time: '10 mins ago', status: 'Reconciled' },
                { ref: 'CP-4402', payer: 'L. Van Der Merwe (Gr 9-B)', amount: 'R 3,100.00', method: 'Capitec Pay', time: '24 mins ago', status: 'Reconciled' },
                { ref: 'PF-1109', payer: 'A. Patel (Grade 12-A)', amount: 'R 4,800.00', method: 'Debit Order / Card', time: '1 hr ago', status: 'Reconciled' },
                { ref: 'EFT-8830', payer: 'K. Molefe (Grade 8-C)', amount: 'R 1,950.00', method: 'Direct Bank EFT', time: '2 hrs ago', status: 'Reconciled' },
              ].map((tx, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-500 text-[11px]">{tx.ref}</span>
                    <div>
                      <div className="font-bold text-[#0D1B3D]">{tx.payer}</div>
                      <div className="text-[10px] text-slate-500">{tx.method} • {tx.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-slate-800">{tx.amount}</div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: POPIA & Security Telemetry */}
        <div className="space-y-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft-sm space-y-4">
            <h4 className="font-bold text-sm text-[#0D1B3D] flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#43A047]" />
              POPIA Compliance & Access Vault
            </h4>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Learner Data Encryption:</span>
                  <span className="text-emerald-700">AES-256 GCM</span>
                </div>
                <p className="text-[11px] text-slate-500">Every student record and medical profile is encrypted at rest.</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Audit Trail Logging:</span>
                  <span className="text-emerald-700">Active</span>
                </div>
                <p className="text-[11px] text-slate-500">Every report card view, mark amendment, and phone number lookup is immutably logged.</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Sovereign Cloud Hosting:</span>
                  <span className="text-emerald-700">South Africa</span>
                </div>
                <p className="text-[11px] text-slate-500">Zero cross-border learner data transfers outside SA jurisdiction.</p>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
            >
              View Full POPIA Compliance Certificate
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
