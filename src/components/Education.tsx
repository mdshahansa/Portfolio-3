import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Building2,
  Sparkles
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Formal computer applications and software engineering degree journey.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              id={`education-card-${edu.id}`}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative accent element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-bl-full pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-700/60">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>{edu.status}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-slate-100">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex md:flex-col items-center md:items-end gap-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="pt-6 space-y-6">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Key Coursework Tags */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    Key Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.coursework.map((course, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-3.5 py-2 rounded-xl border border-slate-100 dark:border-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements / Highlights */}
                {edu.achievements && (
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-500" />
                      Academic Milestones & Activities
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
