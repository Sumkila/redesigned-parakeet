import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ShieldCheck,
  Sparkles,
  Wifi,
  Lock,
  ChevronRight
} from 'lucide-react';
import { UserRole } from '../../types/index.ts';
import { StudentPortal } from './StudentPortal.tsx';
import { TeacherPortal } from './TeacherPortal.tsx';
import { ParentPortal } from './ParentPortal.tsx';
import { PrincipalPortal } from './PrincipalPortal.tsx';
import { AdminPortal } from './AdminPortal.tsx';

interface DashboardPreviewProps {
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenDemo: (role?: UserRole) => void;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  activeRole,
  onRoleChange,
  onOpenDemo
}) => {
  const rolesConfig: { id: UserRole; title: string; label: string; icon: React.ComponentType<{ className?: string }>; color: string; bg: string; border: string; accent: string }[] = [
    {
      id: 'student',
      title: 'Learner Studio',
      label: 'Student Portal',
      icon: GraduationCap,
      color: 'text-[#FF9800]',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      accent: '#FF9800'
    },
    {
      id: 'teacher',
      title: 'Educator Hub',
      label: 'Teacher Portal',
      icon: BookOpen,
      color: 'text-[#1E88E5]',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      accent: '#1E88E5'
    },
    {
      id: 'parent',
      title: 'Guardian Link',
      label: 'Parent Portal',
      icon: Users,
      color: 'text-[#43A047]',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      accent: '#43A047'
    },
    {
      id: 'principal',
      title: 'Principal Hub',
      label: 'Principal Portal',
      icon: Award,
      color: 'text-[#6366F1]',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
      accent: '#6366F1'
    },
    {
      id: 'admin',
      title: 'Executive Command',
      label: 'Admin Portal',
      icon: ShieldCheck,
      color: 'text-[#0D1B3D]',
      bg: 'bg-slate-900/10',
      border: 'border-slate-800/30',
      accent: '#0D1B3D'
    },
  ];

  return (
    <section className="relative py-12 lg:py-20" id="platform-showcase">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
            Unified Education Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B3D] tracking-tight">
            One Intelligent Platform. Five Purpose-Built Portals.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Switch between real perspectives to experience how Lumani unites students, educators, parents, principals, and school executives seamlessly.
          </p>
        </div>

        {/* Interactive Role Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-200/70 backdrop-blur-md rounded-2xl gap-1 max-w-full overflow-x-auto shadow-inner">
            {rolesConfig.map((r) => {
              const Icon = r.icon;
              const isActive = activeRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => onRoleChange(r.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#0D1B3D] shadow-soft-md font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                  }`}
                  id={`portal-tab-${r.id}`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isActive ? r.bg : 'bg-slate-300/40 text-slate-500'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? r.color : 'text-slate-600'}`} />
                  </div>
                  <span>{r.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] animate-ping ml-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Interactive Dashboard Frame */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-soft-xl overflow-hidden transition-all duration-300">
          {/* Top Mock Window Bar (Apple / Notion aesthetic) */}
          <div className="bg-slate-900 text-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-800">
            {/* Left Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                https://portal.lumani.education/{activeRole}
              </span>
            </div>

            {/* Middle Badge */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <Lock className="w-3 h-3 text-[#43A047]" />
              <span className="hidden md:inline">POPIA Compliant • 256-Bit SSL</span>
            </div>

            {/* Right Status */}
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo Sandbox
              </span>
              <button
                onClick={() => onOpenDemo(activeRole)}
                className="hidden sm:inline-flex items-center gap-1 text-[#FF9800] hover:text-white font-bold transition text-xs"
              >
                <span>Request Custom Walkthrough</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Dynamic Content Container */}
          <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/50 min-h-[620px]">
            <AnimatePresence mode="wait">
              {activeRole === 'student' && <StudentPortal key="student" onOpenDemo={() => onOpenDemo('student')} />}
              {activeRole === 'teacher' && <TeacherPortal key="teacher" onOpenDemo={() => onOpenDemo('teacher')} />}
              {activeRole === 'parent' && <ParentPortal key="parent" onOpenDemo={() => onOpenDemo('parent')} />}
              {activeRole === 'principal' && <PrincipalPortal key="principal" onOpenDemo={() => onOpenDemo('principal')} />}
              {activeRole === 'admin' && <AdminPortal key="admin" onOpenDemo={() => onOpenDemo('admin')} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
