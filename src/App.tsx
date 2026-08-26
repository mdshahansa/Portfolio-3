import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Code, HelpCircle, Check, Copy, ExternalLink, X } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [copiedFile, setCopiedFile] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleCopyFilePath = () => {
    navigator.clipboard.writeText('src/data/portfolioData.ts');
    setCopiedFile(true);
    setTimeout(() => setCopiedFile(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-300 relative flex flex-col">
      {/* Top Fixed Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Single-Page Portfolio Content */}
      <main className="grow">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Customization Assistant Pill */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          id="customization-guide-btn"
          onClick={() => setIsHelpOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          title="How to easily customize this portfolio"
        >
          <Code className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Easy Customization Guide</span>
        </button>
      </div>

      {/* Customization Guide Modal */}
      {isHelpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Customizing Your Portfolio
                </h3>
              </div>
              <button
                onClick={() => setIsHelpOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <p>
                Hello <strong>MD SHAHANSA</strong>! All your portfolio content (projects, GitHub links, live demos, skills, certifications, and bio) is centralized in one clean, easy-to-edit file:
              </p>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono text-xs text-blue-600 dark:text-blue-400">
                <span>src/data/portfolioData.ts</span>
                <button
                  onClick={handleCopyFilePath}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white px-2 py-0.5 rounded bg-white dark:bg-slate-700 shadow-xs"
                >
                  {copiedFile ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                  What you can customize:
                </h4>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li><strong>Project Links:</strong> Replace placeholder GitHub & Live Demo links with your real repositories</li>
                  <li><strong>Social Handles:</strong> Update LinkedIn, GitHub username, and email</li>
                  <li><strong>Certificates:</strong> Add verified certificate credentials or add new course IDs</li>
                  <li><strong>Skills:</strong> Adjust percentages or add new frameworks anytime</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsHelpOpen(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
