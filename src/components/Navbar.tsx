import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D1A]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links with hover underlines */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1 hover:text-white ${
                  isActive ? 'text-blue-400 font-semibold' : 'text-slate-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 transition-colors whitespace-nowrap"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/20 whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-xs font-medium text-white bg-blue-600 px-3 py-1.5 rounded-md"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F1F] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 text-sm text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
