import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Terminal, 
  Copy, 
  Check, 
  Download,
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `// MD SHAHANSA's Developer Profile
const student = {
  name: "${studentProfile.name}",
  degree: "${studentProfile.course}",
  university: "${studentProfile.university}",
  location: "${studentProfile.location}",
  status: "Seeking Opportunities",
  coreSkills: ["C", "C++", "Python", "Web Development", "SQL", "DSA"],
  passion: "Crafting impactful software solutions"
};

console.log("Ready to contribute, learn & build!");`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-teal-500/10 dark:bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status & University Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
              </span>
              <span className="font-semibold">{studentProfile.status}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" />
                {studentProfile.university}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                Hello, I am
              </p>
              <h1
                id="hero-name"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
              >
                {studentProfile.name}
              </h1>
              <h2
                id="hero-role"
                className="text-xl sm:text-2xl lg:text-3xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-teal-500 dark:from-blue-400 dark:via-indigo-300 dark:to-teal-300 bg-clip-text text-transparent"
              >
                {studentProfile.role}
              </h2>
            </div>

            {/* Short Introduction */}
            <p
              id="hero-intro"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              Pursuing Bachelor of Computer Applications (BCA) at{' '}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                {studentProfile.university}
              </strong>
              , {studentProfile.location}. Focused on full-stack web technologies, algorithm design, and building real-world software applications.
            </p>

            {/* Location & Key Points */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{studentProfile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span>{studentProfile.course}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:translate-y-[-2px] active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-me-btn"
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 dark:bg-slate-800/90 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700 shadow-xs transition-all hover:translate-y-[-2px] active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Contact Me</span>
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800/60 dark:hover:bg-slate-700 dark:text-slate-300 transition-colors"
                title="View & Download formatted Resume"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">Connect:</span>
              <a
                id="hero-github-link"
                href={studentProfile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-all"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href={studentProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${studentProfile.email}`}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-all"
                aria-label="Send Direct Email"
                title={`Email: ${studentProfile.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Interactive Code Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-slate-950/30 overflow-hidden text-slate-200">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    developer.ts
                  </span>
                </div>
                <button
                  id="hero-copy-code-btn"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
                  title="Copy snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto select-text bg-slate-950/50">
                <div className="space-y-1">
                  <p className="text-slate-500 italic">// Developer Identity</p>
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">student</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-teal-300">name</span>:{' '}
                    <span className="text-amber-300">"{studentProfile.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-teal-300">course</span>:{' '}
                    <span className="text-amber-300">"BCA"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-teal-300">university</span>:{' '}
                    <span className="text-amber-300">"{studentProfile.university}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-teal-300">location</span>:{' '}
                    <span className="text-amber-300">"West Bengal, India"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-teal-300">coreSkills</span>: [
                  </p>
                  <p className="pl-8 text-amber-200">
                    "C", "C++", "Python", "Web Dev", "SQL", "DSA"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-teal-300">availableForHire</span>:{' '}
                    <span className="text-emerald-400">true</span>
                  </p>
                  <p>{'};'}</p>
                  <p className="pt-2">
                    <span className="text-purple-400">console</span>.
                    <span className="text-blue-400">log</span>(
                    <span className="text-amber-300">
                      "Building future-ready solutions 🚀"
                    </span>
                    );
                  </p>
                </div>
              </div>

              {/* Terminal Bottom Output Badge */}
              <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-300 font-mono text-xs">Ready for Opportunities</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">TypeScript / React</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
