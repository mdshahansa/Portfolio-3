import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Layers, 
  Briefcase, 
  Award,
  ExternalLink
} from 'lucide-react';
import { 
  studentProfile, 
  skillsData, 
  projectsData, 
  educationData, 
  certificationsData 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-base sm:text-lg">
              MD SHAHANSA — Professional Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Content (Print-Friendly Sheet) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-700 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
              {studentProfile.name}
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
              {studentProfile.role}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {studentProfile.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {studentProfile.email}
              </span>
              <span>•</span>
              <span>{studentProfile.linkedin}</span>
              <span>•</span>
              <span>{studentProfile.github}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 pb-1 inline-block">
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              Motivated Bachelor of Computer Applications (BCA) student at Swami Vivekananda University, West Bengal. Strong foundation in object-oriented programming, data structures, and responsive web technologies. Passionate about writing clean code, solving complex algorithms, and building user-centric software applications.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 pb-1 inline-block">
              Education
            </h2>
            {educationData.map((edu) => (
              <div key={edu.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between font-bold text-slate-900 dark:text-white text-sm">
                  <span>{edu.degree}</span>
                  <span className="text-xs font-normal text-slate-500">{edu.period}</span>
                </div>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {edu.institution}, {edu.location}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                  <strong>Core Coursework:</strong> {edu.coursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 pb-1 inline-block">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900 dark:text-white">Programming Languages:</strong> C, C++, Python, JavaScript (ES6+)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Web Technologies:</strong> HTML5, CSS3, Tailwind CSS, Responsive Design
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Databases & Core CS:</strong> MySQL, SQL Queries, Data Structures & Algorithms
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Tools & Version Control:</strong> Git, GitHub, VS Code, Terminal
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 pb-1 inline-block">
              Featured Academic & Software Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    <span>{project.title}</span>
                    <span className="text-xs font-normal text-slate-500">
                      Tech: {project.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {project.shortDescription}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400 space-y-0.5 pl-1">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 pb-1 inline-block">
              Certifications & Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="border-l-2 border-blue-400 pl-2">
                  <div className="font-semibold text-slate-900 dark:text-white">{cert.title}</div>
                  <div className="text-slate-500">{cert.issuer} ({cert.issueDate})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Formatted for BCA Internships & Developer Applications</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
