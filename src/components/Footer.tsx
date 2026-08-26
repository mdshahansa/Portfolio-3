import React from 'react';
import { 
  Code2, 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap 
} from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {studentProfile.name}
              </span>
            </div>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              BCA Student at <strong>{studentProfile.university}</strong>, {studentProfile.location}. Aspiring software developer passionate about building reliable web systems, problem solving, and software engineering.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={studentProfile.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={studentProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${studentProfile.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Education & Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Academic Degree
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-400">
              <p className="font-semibold text-slate-200">
                {studentProfile.course}
              </p>
              <p className="flex items-center gap-1 text-slate-400">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                {studentProfile.university}
              </p>
              <p>{studentProfile.location}</p>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {studentProfile.name}. All rights reserved. Designed for BCA software developer portfolio.
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
