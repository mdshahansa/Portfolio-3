import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Info,
  Calendar,
  Sparkles
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-500" />
              Project Overview
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-500" />
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Key Features & Architectural Highlights
            </h4>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notice on customization */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
            💡 <strong>Customization Note:</strong> MD SHAHANSA can customize project descriptions, repository links, and live URLs in <code className="text-blue-600 dark:text-blue-400">src/data/portfolioData.ts</code>.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs shadow-blue-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
