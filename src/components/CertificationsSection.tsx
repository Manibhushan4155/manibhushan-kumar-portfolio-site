import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';
import { Award } from 'lucide-react';

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-t border-slate-800/80 relative">
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
            06. Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Certifications from CV.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS_LIST.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
