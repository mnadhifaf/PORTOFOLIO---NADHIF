import React, { useState } from 'react';
import { Check, Copy, Send, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { CollabInquiryInput, validateCollabInquiry } from '../utils/studioLogic';

interface ConnectSectionProps {
  accentColor: string;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ accentColor }) => {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState<CollabInquiryInput>({
    name: '',
    email: '',
    topic: 'Web & AI Systems',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CollabInquiryInput, string>>>({});

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateCollabInquiry(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleResetModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setErrors({});
    setFormState({
      name: '',
      email: '',
      topic: 'Web & AI Systems',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-5 sm:px-8 border-t border-slate-900/10"
      data-purpose="contact-section"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#16181D] text-white rounded-3xl p-8 sm:p-16 border border-white/15 shadow-custom-card text-center relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-8 sm:mb-10">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-2 font-mono text-xs text-slate-400">connect_session.sh</span>
          </div>

          <div className="mb-3">
            <span
              className="font-script text-3xl sm:text-4xl theme-transition font-bold"
              style={{ color: accentColor }}
            >
              ready to collaborate?
            </span>
          </div>

          <h2 className="font-display uppercase text-4xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-6">
            LET&apos;S BUILD SOMETHING GREAT ✦
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 font-sans mb-10 leading-relaxed">
            Open for web development projects, competitive programming squads, AI research
            initiatives, and multimedia VFX commissions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              className="px-6 py-3.5 rounded-lg text-white font-bold text-xs sm:text-sm tracking-wide shadow-accent-glow hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 theme-transition"
              style={{ backgroundColor: accentColor }}
              href={`mailto:${CONTACT_INFO.email}`}
            >
              <span>{CONTACT_INFO.email}</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="px-6 py-3.5 rounded-lg bg-[#1F232B] hover:bg-slate-800 text-white border border-white/10 font-semibold text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              href={CONTACT_INFO.whatsappHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>WhatsApp ({CONTACT_INFO.whatsappDisplay})</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="px-6 py-3.5 rounded-lg bg-[#1F232B] hover:bg-slate-800 text-white border border-white/10 font-semibold text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              href={CONTACT_INFO.linkedinHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>LinkedIn Profile</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Secondary Utility Actions */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-slate-200 flex items-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied email</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-slate-200 flex items-center gap-2 transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>Send brief</span>
            </button>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-slate-300">
            <span aria-hidden="true">📍</span> {CONTACT_INFO.location}
          </div>
        </div>
      </div>

      {/* Interactive Collaboration Brief Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="collab-modal-title"
        >
          <div className="w-full max-w-lg bg-[#16181D] text-white rounded-2xl border border-white/15 shadow-custom-card overflow-hidden">
            <div className="bg-[#1F232B] px-5 py-3.5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span id="collab-modal-title" className="ml-2 font-mono text-xs text-slate-200">
                  new_collaboration_brief.json
                </span>
              </div>
              <button
                type="button"
                onClick={handleResetModal}
                aria-label="Close collaboration form"
                className="text-slate-400 hover:text-white p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Brief Prepared</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Thanks, <span className="font-semibold text-white">{formState.name}</span>. Your{' '}
                  <span className="text-sky-300">{formState.topic}</span> brief is ready to send via
                  email or WhatsApp.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
                      `[Collab Brief] ${formState.topic} — ${formState.name}`
                    )}&body=${encodeURIComponent(formState.message)}`}
                    className="px-4 py-2.5 rounded-lg text-xs font-bold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    Open in Email App ↗
                  </a>
                  <button
                    type="button"
                    onClick={handleResetModal}
                    className="px-4 py-2.5 rounded-lg bg-[#1F232B] border border-white/10 text-xs font-semibold text-slate-200 hover:bg-slate-800"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">
                <div>
                  <label htmlFor="collab-name" className="block font-mono text-xs text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="collab-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="e.g. Rafi Pratama"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F232B] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0057FF]"
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="collab-email" className="block font-mono text-xs text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="collab-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F232B] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0057FF]"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="collab-topic" className="block font-mono text-xs text-slate-300 mb-1.5">
                    Collaboration Track
                  </label>
                  <select
                    id="collab-topic"
                    value={formState.topic}
                    onChange={(e) => setFormState((s) => ({ ...s, topic: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F232B] border border-white/15 text-sm text-white focus:outline-none focus:border-[#0057FF]"
                  >
                    <option value="Web & AI Systems">Web &amp; AI Systems</option>
                    <option value="Competitive Programming Squad">Competitive Programming Squad</option>
                    <option value="VFX & Motion Production">VFX &amp; Motion Production</option>
                    <option value="Biotech & NEURO DAWN Research">
                      Biotech &amp; NEURO DAWN Research
                    </option>
                  </select>
                  {errors.topic && <p className="text-xs text-rose-400 mt-1">{errors.topic}</p>}
                </div>

                <div>
                  <label htmlFor="collab-message" className="block font-mono text-xs text-slate-300 mb-1.5">
                    Project Note
                  </label>
                  <textarea
                    id="collab-message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Share timeline, scope, or competition details..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F232B] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0057FF]"
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleResetModal}
                    className="px-4 py-2 rounded-lg bg-[#1F232B] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: accentColor }}
                  >
                    Prepare Brief
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
