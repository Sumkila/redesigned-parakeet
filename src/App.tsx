import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { DashboardPreview } from './components/DashboardPreview.tsx';
import { CorePillars } from './components/CorePillars.tsx';
import { DeepFeatures } from './components/DeepFeatures.tsx';
import { CurriculumSection } from './components/CurriculumSection.tsx';
import { RoiCalculator } from './components/RoiCalculator.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { PricingTiers } from './components/PricingTiers.tsx';
import { Footer } from './components/Footer.tsx';
import { DemoModal } from './components/DemoModal.tsx';
import { BrandIdentityModal } from './components/BrandIdentityModal.tsx';
import { UserRole } from './types.ts';

export default function App() {
  const [activeRole, setActiveRole] = useState<UserRole>('student');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [demoRole, setDemoRole] = useState<UserRole>('teacher');
  const [isBrandModalOpen, setIsBrandModalOpen] = useState<boolean>(false);

  const handleOpenDemo = (role?: UserRole) => {
    if (role) setDemoRole(role);
    setIsDemoModalOpen(true);
  };

  const handleSelectRole = (role: UserRole) => {
    setActiveRole(role);
    const showcase = document.getElementById('platform-showcase');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPortals = () => {
    const showcase = document.getElementById('platform-showcase');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#FAFCFF] flex flex-col selection:bg-[#1E88E5]/20 selection:text-[#0D1B3D]"
      id="lumani-app-root"
    >
      {/* Vercel Web Analytics */}
      <Analytics />

      {/* Top Floating Glass Navigation */}
      <Navbar
        onOpenDemo={() => handleOpenDemo(activeRole)}
        onOpenBrandModal={() => setIsBrandModalOpen(true)}
        onScrollToPortals={handleScrollToPortals}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onSelectRole={handleSelectRole}
          onOpenDemo={handleOpenDemo}
          onOpenBrandModal={() => setIsBrandModalOpen(true)}
        />

        {/* 2. Interactive 4-Portal Live Dashboard Preview */}
        <DashboardPreview
          activeRole={activeRole}
          onRoleChange={setActiveRole}
          onOpenDemo={handleOpenDemo}
        />

        {/* 3. Core Identity Pillars (Learning, Tech, Community, Trust) */}
        <CorePillars
          onOpenBrandModal={() => setIsBrandModalOpen(true)}
        />

        {/* 4. Deep Dives: Analytics, Communication, Security, Offline */}
        <DeepFeatures />

        {/* 5. Curriculum & South African Ecosystem Alignment */}
        <CurriculumSection />

        {/* 6. Institutional ROI & Impact Calculator */}
        <RoiCalculator
          onOpenDemo={() => handleOpenDemo('admin')}
        />

        {/* 7. Case Studies & Testimonials */}
        <Testimonials />

        {/* 8. Pricing Tiers (ZAR / USD) */}
        <PricingTiers
          onOpenDemo={() => handleOpenDemo('admin')}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectRole={handleSelectRole}
        onOpenBrandModal={() => setIsBrandModalOpen(true)}
        onOpenDemo={() => handleOpenDemo(activeRole)}
      />

      {/* Interactive Consultation / Walkthrough Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialRole={demoRole}
      />

      {/* Brand Architecture & Symbolism Guide Modal */}
      <BrandIdentityModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />
    </div>
  );
}
