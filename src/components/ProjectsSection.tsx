import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { Layers, ArrowRight, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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

export const ProjectsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Fade-in Animation */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
              03. Technical Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Projects detailing the problem, functional capabilities, and technology stack.
            </p>
          </div>

          {/* Search by technology or feature */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or features..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* Projects Grid: Staggered animation cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors duration-300 overflow-hidden group shadow-lg shadow-black/20"
            >
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Card Editorial Index */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="text-blue-400 font-semibold tracking-wider">
                    PROJECT // 0{index + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Problem Statement Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Problem Addressed</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Key Features Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Card Footer: Tech Stack & Action */}
              <div className="p-6 sm:p-7 pt-4 border-t border-slate-800/80 bg-slate-950/30 space-y-4">
                
                {/* Tech Stack */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-300">
                    {project.techStack.map((tech, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span className="hover:text-blue-300 transition-colors">
                          {tech}
                        </span>
                        {tIdx < project.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Interactive Modal Action */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 text-xs font-medium text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/50 hover:border-blue-700 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-sm text-slate-500">
            No projects match the query "{searchQuery}". Try clearing your search.
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
