import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Building2, User, Mail, Phone, CheckCircle2, Sparkles, School, ArrowRight } from 'lucide-react';
import { UserRole } from '../../types/index.ts';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: UserRole;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialRole = 'teacher' }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRole);
  const [schoolType, setSchoolType] = useState('High School (Grade 8-12)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    province: 'Gauteng',
    studentCount: '500 - 1,200 learners',
    date: '2026-08-25',
    time: '10:00 AM SAST',
    notes: 'Interested in CAPS alignment, automated report cards, and parent WhatsApp messaging integration.'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" id="demo-modal">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6"
      >
        {/* Header */}
        <div className="bg-[#0D1B3D] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E88E5]/20 text-[#64B5F6] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" /> Personalized Campus Consultation
          </div>
          <h2 className="text-2xl font-bold">Experience Lumani at Your School</h2>
          <p className="text-slate-300 text-sm mt-1">
            Book a 20-minute tailored walkthrough for your executive board, teachers, or bursar team.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'form' ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 space-y-5 max-h-[70vh] overflow-y-auto"
            >
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Primary Interest Portal
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { id: 'principal', label: 'Principal / Head', color: 'border-[#6366F1] text-[#6366F1] bg-indigo-50/50' },
                    { id: 'admin', label: 'Bursar / Admin', color: 'border-[#0D1B3D] text-[#0D1B3D] bg-slate-50' },
                    { id: 'teacher', label: 'Educator / HOD', color: 'border-[#1E88E5] text-[#1E88E5] bg-blue-50/50' },
                    { id: 'parent', label: 'Parent / SGB', color: 'border-[#43A047] text-[#43A047] bg-green-50/50' },
                    { id: 'student', label: 'Student / LMS', color: 'border-[#FF9800] text-[#FF9800] bg-amber-50/50' },
                  ].map((r) => (
                    <button
                      type="button"
                      key={r.id}
                      onClick={() => setSelectedRole(r.id as UserRole)}
                      className={`p-2.5 text-left rounded-xl border text-xs font-medium transition flex flex-col justify-between ${
                        selectedRole === r.id
                          ? 'border-[#1E88E5] bg-[#1E88E5]/10 font-bold text-[#0D1B3D] shadow-sm'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span>{r.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* School Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Thabo Mokoena"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Official Work Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="principal@school.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+27 (0)82 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">School / Institution Name</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. St. Stithians or Pretoria High"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Province & Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Province</label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5]"
                  >
                    <option>Gauteng</option>
                    <option>Western Cape</option>
                    <option>KwaZulu-Natal</option>
                    <option>Eastern Cape</option>
                    <option>Free State</option>
                    <option>Mpumalanga</option>
                    <option>Limpopo</option>
                    <option>North West</option>
                    <option>Northern Cape</option>
                    <option>SADC / International</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">School Type</label>
                  <select
                    value={schoolType}
                    onChange={(e) => setSchoolType(e.target.value)}
                    className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5]"
                  >
                    <option>Combined School (Gr R-12)</option>
                    <option>High School (Grade 8-12)</option>
                    <option>Primary School (Grade R-7)</option>
                    <option>Independent / Private College</option>
                    <option>Multi-Campus Academy Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Enrolment Size</label>
                  <select
                    value={formData.studentCount}
                    onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                    className="w-full py-2 px-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1E88E5]"
                  >
                    <option>Under 300 learners</option>
                    <option>300 - 800 learners</option>
                    <option>800 - 1,500 learners</option>
                    <option>1,500+ learners (Multi-campus)</option>
                  </select>
                </div>
              </div>

              {/* Consultation Date */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#1E88E5]" />
                  <div>
                    <div className="text-xs font-bold text-[#0D1B3D]">Preferred Meeting Time</div>
                    <div className="text-[11px] text-slate-600">Conducted via Google Meet or in-person for Gauteng campuses</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-medium"
                  />
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="text-xs bg-white border border-slate-200 px-2 py-1.5 rounded-lg font-medium"
                  >
                    <option>09:00 AM SAST</option>
                    <option>11:30 AM SAST</option>
                    <option>02:00 PM SAST</option>
                    <option>04:00 PM SAST</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0D1B3D] hover:bg-[#152A5E] text-white font-bold text-sm rounded-xl shadow-soft-md transition flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Consultation Booking</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF9800]" />
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  🔒 Zero commitment. Free data migration assessment included. Fully POPIA compliant.
                </p>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center space-y-5"
            >
              <div className="w-16 h-16 bg-[#43A047]/15 rounded-full flex items-center justify-center mx-auto text-[#43A047]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">Booking Confirmed</span>
                <h3 className="text-2xl font-extrabold text-[#0D1B3D] mt-1">Consultation Scheduled!</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name || 'Educator'}</strong>. An executive product specialist from <strong>Erica Innovations (Pty) Ltd</strong> has reserved your consultation for:
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Institution:</span>
                  <span className="font-semibold text-slate-800">{formData.schoolName || 'St. Jude College'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-slate-800">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Focus Module:</span>
                  <span className="font-semibold text-[#1E88E5] capitalize">{selectedRole} Portal & CAPS Integration</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0D1B3D] text-white text-sm font-semibold rounded-xl hover:bg-[#152A5E] transition"
                >
                  Back to Website & Live Sandbox
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
