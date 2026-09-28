import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { SKILLS } from '../data/portfolioData';
import { Search } from 'lucide-react';

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
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredSkills = SKILLS.filter((skill) =>
    skill.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
              04. Technical Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Technical proficiencies and foundational subject areas from CV.
            </p>
          </div>

          {/* Quick Filter */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-slate-200">{skill}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                0{idx + 1 > 9 ? idx + 1 : `0${idx + 1}`}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="py-8 text-center text-xs font-mono text-slate-500">
            No matching skills found for "{filterQuery}".
          </div>
        )}

        {/* Skills list from CV */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-950/50 border border-slate-800/70">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            From CV
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-slate-300">
            {SKILLS.map((skill, idx) => (
              <React.Fragment key={skill}>
                <span className="hover:text-blue-300 transition-colors">
                  {skill}
                </span>
                {idx < SKILLS.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
