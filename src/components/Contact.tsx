import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Clock, 
  ArrowUpRight
} from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studentProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have an internship opening, software project collaboration, or question? Send a message or connect through social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="p-6 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire & Projects
                </div>
                <h3 className="text-2xl font-bold">
                  Let's Build Something Impactful Together
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  I am actively seeking internship opportunities, mentorship, and project collaborations in software engineering and web development.
                </p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${studentProfile.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                    >
                      {studentProfile.email}
                    </a>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Placeholder Card */}
              <a
                id="contact-linkedin-card"
                href={studentProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-blue-300 dark:hover:border-blue-700 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      LinkedIn Profile
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      linkedin.com/in/mdshahansa
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Placeholder Card */}
              <a
                id="contact-github-card"
                href={studentProfile.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-blue-300 dark:hover:border-blue-700 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      GitHub Repositories
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      github.com/mdshahansa
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-rose-50 dark:bg-rose-950/80 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {studentProfile.location}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Fill in your details and I'll get back to you as soon as possible.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will reply to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. contact@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Write your message, project idea, or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
