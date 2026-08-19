import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, ChevronDown, ExternalLink } from 'lucide-react';
import { Logo } from '../brand/Logo.tsx';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenBrandModal: () => void;
  onScrollToPortals: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  onOpenBrandModal,
  onScrollToPortals,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft-sm border-b border-slate-200/70 py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <Logo size="md" showSubtitle={true} />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#platform-showcase"
              onClick={(e) => {
                e.preventDefault();
                onScrollToPortals();
              }}
              className="hover:text-[#1E88E5] transition flex items-center gap-1"
            >
              <span>Portals</span>
              <span className="text-[10px] bg-blue-50 text-[#1E88E5] px-1.5 py-0.5 rounded-full font-bold">5 Portals</span>
            </a>
            <a href="#core-pillars" className="hover:text-[#1E88E5] transition">
              Core Pillars
            </a>
            <a href="#features-deepdive" className="hover:text-[#1E88E5] transition">
              Analytics & Security
            </a>
            <a href="#curriculum-ecosystem" className="hover:text-[#1E88E5] transition">
              CAPS & Ecosystem
            </a>
            <a href="#roi-calculator" className="hover:text-[#1E88E5] transition">
              Impact Calculator
            </a>
            <a href="#pricing" className="hover:text-[#1E88E5] transition">
              Pricing
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenBrandModal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#0D1B3D] bg-slate-100 hover:bg-slate-200/80 rounded-xl transition flex items-center gap-1.5"
              title="View Lumani Brand Geometry & Symbolism"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
              <span>Brand Story</span>
            </button>

            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 bg-[#0D1B3D] hover:bg-[#152A5E] text-white text-xs font-bold rounded-xl shadow-soft-sm hover:shadow-soft-md transition flex items-center gap-2 group"
              id="nav-book-demo-btn"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FF9800]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBrandModal}
              className="p-2 text-slate-700 bg-slate-100 rounded-xl"
              aria-label="Brand Details"
            >
              <Sparkles className="w-4 h-4 text-[#FF9800]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#1E88E5] bg-slate-100 hover:bg-slate-200 rounded-xl transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-xl"
          >
            <nav className="flex flex-col space-y-3.5 text-sm font-semibold text-slate-800">
              <a
                href="#platform-showcase"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToPortals();
                }}
                className="p-2 hover:bg-slate-50 rounded-lg text-[#0D1B3D] flex items-center justify-between"
              >
                <span>Interactive Portals (5 Portals)</span>
                <span className="text-xs bg-[#1E88E5]/10 text-[#1E88E5] px-2 py-0.5 rounded-full font-bold">Live Demo</span>
              </a>
              <a
                href="#core-pillars"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-lg"
              >
                Core Pillars (Learning • Tech • Community • Trust)
              </a>
              <a
                href="#features-deepdive"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-lg"
              >
                Analytics, Security & Offline Sync
              </a>
              <a
                href="#curriculum-ecosystem"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-lg"
              >
                CAPS / IEB & South African Ecosystem
              </a>
              <a
                href="#roi-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-lg"
              >
                School ROI & Time-Savings Calculator
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-lg"
              >
                Pricing Tiers (ZAR / USD)
              </a>

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrandModal();
                  }}
                  className="w-full py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
                  <span>Explore Lumani Brand Identity</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 bg-[#0D1B3D] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Book School Walkthrough</span>
                  <ArrowRight className="w-4 h-4 text-[#FF9800]" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
