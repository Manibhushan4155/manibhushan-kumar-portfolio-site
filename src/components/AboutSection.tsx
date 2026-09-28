import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Brain, Cpu, Database, GraduationCap, Code2 } from 'lucide-react';

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

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning & Generative AI",
      description:
        "Practical experience in Python, Machine Learning, and Generative AI for real-world problem solving.",
    },
    {
      icon: Cpu,
      title: "Computer Vision & Speech",
      description:
        "Applied experience with OpenCV, Face Recognition, VOSK, Whisper AI, and HuggingFace Transformers.",
    },
    {
      icon: Database,
      title: "Data Science Workflows",
      description:
        "Data acquisition, cleaning, exploratory data analysis using Python, statistical modelling, and machine learning algorithms.",
    },
    {
      icon: Code2,
      title: "Algorithms & Systems",
      description:
        "Data Structures and Algorithms in C++, Operating Systems, and DBMS.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
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
            01. Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Narrative Grid */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="text-white text-lg font-medium">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-slate-400 text-base">
              B.Tech CSE (AI & Data Science) student at Poornima College of Engineering, Jaipur (expected 2027).
            </p>

            {/* Academic Reference */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Poornima College of Engineering, Jaipur (expected 2027)</span>
              </div>
            </div>
          </div>

          {/* Core Areas */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
