import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

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
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
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

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80 relative">
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
            05. Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Academic degrees and qualifications from CV.
          </p>
        </motion.div>

        {/* Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {EDUCATION_LIST.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Year and Grade line */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </span>
                  <span className="text-emerald-400 font-medium tabular-nums">
                    {edu.grade}
                  </span>
                </div>

                {/* Degree title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {edu.degree}
                </h3>

                {/* Institution & Location */}
                <div className="space-y-1 text-sm text-slate-300">
                  <div className="font-medium text-slate-200">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>0{index + 1}</span>
                <GraduationCap className="w-4 h-4 text-slate-600" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
