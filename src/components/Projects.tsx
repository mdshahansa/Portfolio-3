import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  ArrowUpRight,
  Eye,
  Info
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [linkNotice, setLinkNotice] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, type: 'github' | 'demo') => {
    // If it's an example/placeholder link, notify user gracefully
    if (url.includes('example.com') || url.includes('placeholder')) {
      e.preventDefault();
      setLinkNotice(`Placeholder link: ${url}. You can easily replace this with your real link in src/data/portfolioData.ts!`);
      setTimeout(() => setLinkNotice(null), 4000);
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic & Practical Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Showcase of applications built with modern web technologies, object-oriented languages, and relational database systems.
          </p>
        </div>

        {/* Temporary link notice if placeholder clicked */}
        {linkNotice && (
          <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/90 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-sm flex items-center justify-between">
            <span>{linkNotice}</span>
            <button
              onClick={() => setLinkNotice(null)}
              className="text-xs font-bold uppercase underline ml-2"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 sm:p-7 space-y-5">
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Project 0{index + 1} • {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-xl text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                    title="View Project Architecture & Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Technologies Used Tags */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-700/70 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Key Features
                  </div>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* GitHub Button */}
                  <a
                    id={`project-${project.id}-github-btn`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => handleLinkClick(e, project.githubUrl, 'github')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors shadow-xs"
                    title={`View code on GitHub: ${project.title}`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {/* Live Demo Button */}
                  <a
                    id={`project-${project.id}-demo-btn`}
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => handleLinkClick(e, project.liveDemoUrl, 'demo')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs shadow-blue-500/20"
                    title={`Launch live demo: ${project.title}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>

                {/* More details trigger */}
                <button
                  id={`project-${project.id}-details-btn`}
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
