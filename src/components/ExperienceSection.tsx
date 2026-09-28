import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar } from 'lucide-react';

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

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
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
            02. Professional History
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Internships focused on machine learning workflows, data-driven solutions, and collaborative software engineering.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-5 before:w-0.5 before:bg-slate-800/80 before:h-full">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-9 md:pl-14 group"
            >
              
              {/* Timeline marker */}
              <div className="absolute left-1.5 md:left-3 top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-blue-600 shadow-md shadow-blue-500/30 transition-transform duration-300 group-hover:scale-125" />

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300">
                
                {/* Header row: Role, Company, and Duration if present */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-blue-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {exp.duration && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.duration}</span>
                    </div>
                  )}
                </div>

                {/* Scope Description directly from CV */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
