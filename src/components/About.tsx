import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Compass, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  Rocket, 
  BookOpen
} from 'lucide-react';
import { studentProfile, quickStats } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'BCA Scholar',
      description: 'Undergraduate student at Swami Vivekananda University with strong academic focus in software principles and computing.',
      accent: 'blue',
    },
    {
      icon: Code2,
      title: 'Programming Foundations',
      description: 'Hands-on coding experience across C, C++, Python, and modern JavaScript with deep focus on logic and OOP concepts.',
      accent: 'indigo',
    },
    {
      icon: Layers,
      title: 'Web & Full Stack Tech',
      description: 'Building responsive, accessible web interfaces utilizing HTML5, CSS3, modern JavaScript, and component libraries.',
      accent: 'teal',
    },
    {
      icon: Rocket,
      title: 'Aspiring Software Developer',
      description: 'Committed to continuous learning, building production-ready projects, and contributing to high-impact developer teams.',
      accent: 'amber',
    },
  ];

  const focusAreas = [
    'Object-Oriented Programming (C++, Java, Python)',
    'Modern Web Technologies (HTML5, CSS3, JavaScript)',
    'Data Structures & Algorithmic Problem Solving',
    'Database Schema Modeling & Relational SQL Queries',
    'Git Version Control & Collaborative Development',
    'Software Engineering & Clean Architecture Patterns',
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Get to know my academic background, technical passions, and drive as an aspiring software developer.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Narrative Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-white text-lg sm:text-xl">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400 font-bold">{studentProfile.name}</span>, a Bachelor of Computer Applications (BCA) student at <span className="font-semibold text-slate-900 dark:text-slate-100">{studentProfile.university}</span> in {studentProfile.location}.
              </p>
              <p>
                I am deeply interested in <strong>programming, web development, software development</strong>, and constantly learning new technologies. My academic journey has provided me with strong foundations in Computer Science principles, algorithmic thinking, and modern development tools.
              </p>
              <p>
                Whether it's designing clean and responsive user interfaces with HTML, CSS, and JavaScript, structuring relational databases in MySQL, or writing efficient algorithms in C++ and Python, I take pride in writing well-organized, readable, and maintainable code.
              </p>
              <p>
                I am actively seeking internship and entry-level software engineering opportunities where I can apply my skills, solve real-world problems, and grow alongside talented mentors and engineers.
              </p>
            </div>

            {/* Core Focus Checklist */}
            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Key Focus & Academic Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusAreas.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  id={`about-highlight-${index}`}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Quick Stats Banner */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickStats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 text-center"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
