/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'experience',
        'projects',
        'skills',
        'education',
        'certifications',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        if (sectionId === 'hero') {
          if (window.scrollY < 300) {
            setActiveSection('hero');
            break;
          }
          continue;
        }

        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onCopySuccess={showToast} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection onCopySuccess={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />
      <Toast message={toastMessage} />
    </div>
  );
}
