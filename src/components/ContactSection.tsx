import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

interface ContactSectionProps {
  onCopySuccess: (text: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopySuccess }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onCopySuccess(`Copied ${label} (${text}) to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Inquiry from Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
            07. Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Contact information from CV.
          </p>
        </motion.div>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          
          {/* Direct Communication Channels */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email')}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors font-mono tabular-nums"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'Phone')}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                      LinkedIn
                    </div>
                    <a
                      href={PERSONAL_INFO.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>manibhushan-kumar</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </a>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shrink-0"
                >
                  Visit
                </a>
              </div>
            </div>

          </div>

          {/* Quick Message Dispatcher */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Compose Quick Email
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Draft a message directly to <span className="text-slate-300 font-mono">{PERSONAL_INFO.email}</span>
                </p>
              </div>

              <form onSubmit={handleComposeMail} className="space-y-4">
                <div>
                  <label htmlFor="subject-input" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Project Discussion / Internship Opportunity"
                    className="w-full px-4 py-2.5 text-sm bg-slate-950/70 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message Body
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Manibhushan, I saw your portfolio and would like to connect regarding..."
                    className="w-full px-4 py-2.5 text-sm bg-slate-950/70 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Default Email Client</span>
                </button>
              </form>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
