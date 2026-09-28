import React, { useState } from 'react';
import { ArrowDown, Mail, Phone, ExternalLink, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GeometricProfileVisual } from './GeometricProfileVisual';

interface HeroSectionProps {
  onCopySuccess: (text: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCopySuccess }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onCopySuccess(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-900/15 via-indigo-900/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Domain & Institutional Context */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs md:text-sm text-slate-400 font-mono tracking-wide">
              <span className="text-blue-400 font-semibold">{PERSONAL_INFO.educationSubtitle}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{PERSONAL_INFO.institution}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{PERSONAL_INFO.expectedYear}</span>
            </div>

            {/* Display Headline: Name & Positioning */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl mx-auto lg:mx-0">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Exact Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {PERSONAL_INFO.about}
            </p>

            {/* Action Zone: Primary Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-blue-200" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>

              {/* Quick Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                type="button"
                className="px-4 py-3 text-xs font-mono text-slate-400 hover:text-slate-200 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 rounded-xl transition-colors inline-flex items-center gap-2"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate max-w-[150px] sm:max-w-none">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Contact Links Bar (Clean unboxed metadata) */}
            <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span className="tabular-nums font-mono">{PERSONAL_INFO.phone}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 text-slate-300 font-medium"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Abstract Geometric Profile Visual (No fabricated photo) */}
          <div className="lg:col-span-5 flex justify-center">
            <GeometricProfileVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
