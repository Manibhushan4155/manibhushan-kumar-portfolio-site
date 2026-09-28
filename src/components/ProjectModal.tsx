import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, AlertCircle, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C1222] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pr-10">
            {project.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            <AlertCircle className="w-4 h-4" />
            <span>Problem Addressed</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* System Features */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Features</span>
          </h3>
          <ul className="space-y-2.5">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/60"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-slate-300">
            {project.techStack.map((tech, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-blue-300 transition-colors">
                  {tech}
                </span>
                {idx < project.techStack.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500 border-t border-slate-800/60">
          <span>Engineered by Manibhushan Kumar</span>
          <button
            onClick={onClose}
            className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
