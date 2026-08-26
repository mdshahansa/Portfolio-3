import React, { useState } from 'react';
import { 
  Code, 
  CodeXml, 
  Terminal, 
  FileCode2, 
  Palette, 
  Sparkles, 
  Binary, 
  Database, 
  GitBranch, 
  Layers, 
  CheckCircle,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'database', label: 'CS & Databases' },
    { id: 'tools', label: 'Tools & Workflow' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'CodeXml':
        return <CodeXml className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Binary':
        return <Binary className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Proficiencies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Core programming languages, web technologies, and computational foundations acquired through coursework and practical projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-skill-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Percentage Chip */}
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    {skill.percent}%
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <span>Proficiency</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-teal-400 transition-all duration-700 ease-out group-hover:brightness-110"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Skill Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-linear-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800/80 border border-blue-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Always Learning & Expanding Tech Horizons
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Currently exploring advanced React ecosystem, backend REST APIs, and algorithmic challenge solving.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
          >
            See Skills In Action
          </a>
        </div>

      </div>
    </section>
  );
};
