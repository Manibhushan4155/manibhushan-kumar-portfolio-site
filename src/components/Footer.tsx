import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060913] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Academic Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-slate-400">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.institution}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#certifications" className="hover:text-white transition-colors">
              Certifications
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-slate-500 text-center md:text-right font-mono text-[11px]">
            © {new Date().getFullYear()} Manibhushan Kumar. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
