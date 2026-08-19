import React, { useState } from 'react';
import { Logo } from '../brand/Logo.tsx';
import { ShieldCheck, Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { UserRole } from '../../types/index.ts';

interface FooterProps {
  onSelectRole: (role: UserRole) => void;
  onOpenBrandModal: () => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectRole,
  onOpenBrandModal,
  onOpenDemo,
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub.trim()) return;
    setSubSuccess(true);
    setEmailSub('');
  };

  return (
    <footer className="bg-[#0D1B3D] text-slate-300 pt-16 pb-12 border-t border-slate-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="monochrome-white" size="lg" showSubtitle={true} />
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Lumani is a state-of-the-art education technology ecosystem developed by <strong>Erica Innovations (Pty) Ltd</strong>. Transforming classrooms through Learning, Technology, Community, and Trust.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#43A047]" />
                POPIA Act 4 of 2013 Certified
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                🇿🇦 South African Sovereign Cloud
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBrandModal}
                className="text-xs text-[#64B5F6] hover:text-white font-semibold flex items-center gap-1.5 transition"
              >
                <span>Read the Lumani Brand Geometry & Symbolism Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: The 5 Portals */}
          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider mb-4">
              Dedicated Portals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectRole('student')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9800]" />
                  <span>Student (Learner Studio)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectRole('teacher')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                  <span>Teacher (Educator Hub)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectRole('parent')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#43A047]" />
                  <span>Parent (Guardian Link)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectRole('principal')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                  <span>Principal (Leadership Hub)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectRole('admin')}
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span>Admin (Executive Command)</span>
                </button>
              </li>
              <li className="pt-2">
                <a href="#roi-calculator" className="hover:text-[#64B5F6] transition text-[11px] font-semibold text-slate-400">
                  → School ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Curriculum */}
          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider mb-4">
              Curricula & Standards
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#curriculum-ecosystem" className="hover:text-white transition">CAPS DBE (Grade R-12)</a></li>
              <li><a href="#curriculum-ecosystem" className="hover:text-white transition">IEB Independent Syllabi</a></li>
              <li><a href="#curriculum-ecosystem" className="hover:text-white transition">Cambridge International</a></li>
              <li><a href="#curriculum-ecosystem" className="hover:text-white transition">SASAMS Data Sync</a></li>
              <li><a href="#features-deepdive" className="hover:text-white transition">Load-Shedding Offline PWA</a></li>
              <li><a href="#features-deepdive" className="hover:text-white transition">Zero-Rated WhatsApp Gateway</a></li>
            </ul>
          </div>

          {/* Col 5: Educational Insights Newsletter */}
          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider mb-4">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Quarterly whitepapers on South African matric trends, EdTech policy, and DBE updates.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="educator@school.co.za"
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="w-full pl-3 pr-8 py-2 text-xs bg-white/10 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1E88E5]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 text-[#FF9800] hover:text-white transition"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subSuccess && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#81C784]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to Erica Innovations Gazette!</span>
                </div>
              )}
            </form>

            <div className="pt-4 space-y-1 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#FF9800]" />
                <span>Johannesburg & Pretoria, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-[#1E88E5]" />
                <span>support@lumani.education</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {new Date().getFullYear()} Erica Innovations (Pty) Ltd. All rights reserved.</span>
            <div className="flex gap-4 text-[11px]">
              <a href="#" className="hover:text-slate-300 transition">Privacy & POPIA Notice</a>
              <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition">Security Architecture</a>
            </div>
          </div>

          <div className="text-[11px] text-slate-400">
            Crafted for South African Learners, Educators & Guardians.
          </div>
        </div>
      </div>
    </footer>
  );
};
