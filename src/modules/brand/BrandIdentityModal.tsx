import React from 'react';
import { motion } from 'motion/react';
import { X, BookOpen, Users, Cpu, Shield, Sparkles, Sun, Award, CheckCircle2, Wifi } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface BrandIdentityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandIdentityModal: React.FC<BrandIdentityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const colorPalette = [
    { name: 'Navy', hex: '#0D1B3D', role: 'Trust & Foundation', desc: 'Represents institutional credibility, security, and stability.' },
    { name: 'Blue', hex: '#1E88E5', role: 'Technology & Clarity', desc: 'Symbols modern digital infrastructure, innovation, and learning intelligence.' },
    { name: 'Green', hex: '#43A047', role: 'Growth & Vitality', desc: 'Signifies learner development, thriving communities, and progressive education.' },
    { name: 'Orange', hex: '#FF9800', role: 'Achievement & Hope', desc: 'Radiates African warmth, student celebration, optimism, and academic excellence.' },
    { name: 'White', hex: '#FFFFFF', role: 'Simplicity & Focus', desc: 'Ensures cognitive ease, uncluttered UX, and modern Scandinavian-Apple minimalism.' },
  ];

  const visualPillars = [
    {
      icon: BookOpen,
      title: "Open Digital Book with Hidden 'L'",
      desc: "The open 3D pages represent limitless knowledge, while the central spine structure forms the distinct letter 'L' for Lumani.",
      color: "text-[#1E88E5]",
      bg: "bg-[#1E88E5]/10"
    },
    {
      icon: Users,
      title: "Three Connected People Figures",
      desc: "In Green (Learner), Orange (Educator), and Blue (Guardian/Community) uniting together to elevate each student's journey.",
      color: "text-[#43A047]",
      bg: "bg-[#43A047]/10"
    },
    {
      icon: Sun,
      title: "Radiant Sunburst of Hope",
      desc: "7 energetic golden-orange rays radiating from the horizon, symbolizing a luminous dawn of equal opportunity for all schools.",
      color: "text-[#FF9800]",
      bg: "bg-[#FF9800]/10"
    },
    {
      icon: Award,
      title: "Graduation Cap & Star of Excellence",
      desc: "A navy mortarboard cap atop and a 5-pointed star honor every milestone from primary foundations to matric triumphs.",
      color: "text-[#FF9800]",
      bg: "bg-[#FF9800]/10"
    },
    {
      icon: Cpu,
      title: "Dual Circuit Lines & Tech Nodes",
      desc: "Vibrant blue and green circuit traces spanning outwards represent intelligent analytics, cloud infrastructure, and low-data resilience.",
      color: "text-[#1E88E5]",
      bg: "bg-[#1E88E5]/10"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Arcs on Book Spine",
      desc: "Broadcast arcs at the spine base signify continuous synchronization, offline caching, and zero-rated WhatsApp connectivity.",
      color: "text-[#0D1B3D]",
      bg: "bg-[#0D1B3D]/10"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto" id="brand-identity-modal">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="bg-[#0D1B3D] text-white p-6 sm:p-8 flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#1E88E5]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider text-blue-200 uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" /> Official Brand Mark & Geometry
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">The Lumani Identity System</h2>
            <p className="text-slate-300 text-sm mt-1">Erica Innovations (Pty) Ltd — Learning • Technology • Community • Trust</p>
          </div>
          <button
            onClick={onClose}
            className="relative z-10 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Logo Showcase Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 gap-6">
            <div className="flex items-center gap-5">
              <Logo size="2xl" showSubtitle={true} />
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block px-3 py-1 bg-[#43A047]/15 text-[#2E7D32] rounded-full text-xs font-bold tracking-wide mb-1">
                Official Registered Mark
              </span>
              <p className="text-xs text-slate-600 max-w-xs">
                Rendered with precision vector geometry, high optical balance, and responsive visual hierarchy.
              </p>
            </div>
          </div>

          {/* Core Symbolism Grid */}
          <div>
            <h3 className="text-lg font-bold text-[#0D1B3D] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#1E88E5]" /> Embedded Symbolism & Design Elements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visualPillars.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-[#0D1B3D]">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Color Palette */}
          <div>
            <h3 className="text-lg font-bold text-[#0D1B3D] mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E88E5]" /> Color Spectrum & Psychology
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {colorPalette.map((c, i) => (
                <div key={i} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white p-3 flex flex-col justify-between shadow-soft-sm">
                  <div>
                    <div className="w-full h-12 rounded-xl mb-2 flex items-center justify-center font-mono text-xs font-bold" style={{ backgroundColor: c.hex, color: c.hex === '#FFFFFF' ? '#0D1B3D' : '#FFFFFF', border: c.hex === '#FFFFFF' ? '1px solid #E2E8F0' : 'none' }}>
                      {c.hex}
                    </div>
                    <div className="font-bold text-sm text-[#0D1B3D]">{c.name}</div>
                    <div className="text-[11px] font-semibold text-[#1E88E5] mb-1">{c.role}</div>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-2">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography System */}
          <div className="p-5 rounded-2xl bg-[#0D1B3D] text-white space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Typography Hierarchy</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#FF9800] font-semibold block mb-1">Brandmark / Logo</span>
                <p className="font-['Poppins',sans-serif] text-base font-semibold">Poppins Bold</p>
                <p className="text-slate-400 text-[11px] mt-1">Friendly, geometric clarity for high identity recognition.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#64B5F6] font-semibold block mb-1">Headings & Key Metrics</span>
                <p className="font-['Manrope',sans-serif] text-base font-bold">Manrope Bold</p>
                <p className="text-slate-400 text-[11px] mt-1">Crisp, structured modern sans-serif with high optical contrast.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#81C784] font-semibold block mb-1">Body Text & Data UI</span>
                <p className="font-['Inter',sans-serif] text-base font-normal">Inter Regular & Medium</p>
                <p className="text-slate-400 text-[11px] mt-1">World-standard reading ergonomics for dense academic dashboards.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-[#43A047]" /> Erica Innovations (Pty) Ltd Certified Design System
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0D1B3D] hover:bg-[#152A5E] text-white font-medium text-sm rounded-xl transition"
          >
            Close System Guide
          </button>
        </div>
      </motion.div>
    </div>
  );
};
