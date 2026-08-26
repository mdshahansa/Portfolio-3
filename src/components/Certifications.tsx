import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  PlusCircle, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  FileCheck,
  X,
  Code
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { CertificateItem } from '../types';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<CertificateItem[]>(certificationsData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newSkills, setNewSkills] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newIssuer) return;

    const newCert: CertificateItem = {
      id: `cert-${Date.now()}`,
      title: newTitle,
      issuer: newIssuer,
      issueDate: newDate || '2024',
      description: newDesc || 'Completed coursework and verified technical competencies.',
      skills: newSkills ? newSkills.split(',').map(s => s.trim()) : ['Computer Science', 'Programming'],
      credentialUrl: '#',
      isPlaceholder: false,
    };

    setCerts([newCert, ...certs]);
    setShowAddModal(false);
    setNewTitle('');
    setNewIssuer('');
    setNewDate('');
    setNewSkills('');
    setNewDesc('');
    
    setNotification('Certificate successfully added to your live preview!');
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <section id="certifications" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <Award className="w-3.5 h-3.5" />
            <span>Learning & Verifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Self-paced courses, workshops, and verified skill achievements. Add and customize with your credentials.
          </p>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="max-w-xl mx-auto mb-8 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="text-xs uppercase font-bold underline">
              Close
            </button>
          </div>
        )}

        {/* Action Header Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white dark:bg-slate-800/90 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Certification Management
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                You can add certificates dynamically here or customize the list in <code className="text-blue-600 dark:text-blue-400">src/data/portfolioData.ts</code>
              </p>
            </div>
          </div>

          <button
            id="add-cert-btn"
            onClick={() => setShowAddModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Certificate</span>
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/70 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.issueDate}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                {cert.isPlaceholder ? (
                  <span className="text-slate-400 italic">
                    Placeholder (Ready to customize)
                  </span>
                ) : (
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                )}

                <a
                  href={cert.credentialUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Certificate Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Add New Certificate
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddCertificate} className="space-y-4 pt-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Certificate Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Python Programming"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Issuer / Platform *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Coursera / HackerRank"
                    value={newIssuer}
                    onChange={(e) => setNewIssuer(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Year / Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2024"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Skills Covered (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Python, OOP, DSA"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief description of key topics learned..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                >
                  Save to Preview
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
