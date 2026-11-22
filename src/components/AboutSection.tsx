import React from 'react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

interface AboutSectionProps {
  accentColor: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ accentColor }) => {
  return (
    <section
      id="about"
      className="py-24 px-5 sm:px-8 border-t border-slate-900/10 relative"
      data-purpose="about-section"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-14">
          <span
            className="font-mono text-xs font-bold tracking-widest uppercase theme-transition"
            style={{ color: accentColor }}
          >
            [ 01 // PROFILE_INSPECTOR ]
          </span>
          <h2 className="font-display uppercase text-5xl sm:text-7xl text-slate-900 mt-2 tracking-tight">
            BUILDING AT THE INTERSECTION OF <br className="hidden sm:inline" />
            <span
              className="font-script lowercase font-bold theme-transition text-6xl sm:text-8xl"
              style={{ color: accentColor }}
            >
              code &amp; visuals
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editorial Bio & Metric Cards */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              Graduate of <span className="font-bold text-slate-900">MAN Insan Cendekia OKI</span>{' '}
              (Health &amp; Sociology track) currently enrolled as an Informatics Engineering
              undergraduate at{' '}
              <span className="font-bold text-slate-900">Institut Teknologi PLN</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Passionate about foundational web architecture (semantic HTML), Artificial
              Intelligence, competitive programming algorithms, and high-impact visual storytelling
              via Adobe After Effects &amp; Premiere Pro.
            </p>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-4">
              <div className="p-3 sm:p-4 bg-white border border-slate-900 rounded-lg shadow-[4px_4px_0px_#0F1115]">
                <span className="font-display text-xl sm:text-3xl text-slate-900 whitespace-nowrap">
                  IT-PLN
                </span>
                <p className="font-mono text-[9px] sm:text-[10px] text-slate-500 uppercase mt-1">
                  Informatics Undergrad
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-white border border-slate-900 rounded-lg shadow-[4px_4px_0px_#0F1115]">
                <span
                  className="font-display text-xl sm:text-3xl theme-transition whitespace-nowrap"
                  style={{ color: accentColor }}
                >
                  GOLD
                </span>
                <p className="font-mono text-[9px] sm:text-[10px] text-slate-500 uppercase mt-1">
                  IIIEX International &apos;25
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-white border border-slate-900 rounded-lg shadow-[4px_4px_0px_#0F1115]">
                <span className="font-display text-xl sm:text-3xl text-slate-900 whitespace-nowrap">
                  5+ ROLES
                </span>
                <p className="font-mono text-[9px] sm:text-[10px] text-slate-500 uppercase mt-1">
                  Leadership &amp; Org
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dark macOS UI Window "education_history.json" */}
          <div className="lg:col-span-6 bg-[#16181D] rounded-xl border border-white/10 shadow-custom-card overflow-hidden">
            <div className="bg-[#1F232B] px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-xs text-slate-300">
                  education_history.json
                </span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400">STATUS: VERIFIED</span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {EDUCATION_HISTORY.map((entry, idx) => {
                const isLast = idx === EDUCATION_HISTORY.length - 1;
                return (
                  <div
                    key={entry.id}
                    className={`relative pl-6 border-l-2 ${
                      entry.isActive
                        ? 'border-[#0057FF]'
                        : isLast
                          ? 'border-transparent'
                          : 'border-slate-700'
                    }`}
                    style={entry.isActive ? { borderColor: accentColor } : undefined}
                  >
                    <span
                      className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full ${
                        entry.isActive ? 'ring-4 ring-[#0057FF]/30' : 'bg-slate-500'
                      }`}
                      style={entry.isActive ? { backgroundColor: accentColor } : undefined}
                    />
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={entry.isActive ? 'text-sky-400 tabular-nums' : 'text-slate-400 tabular-nums'}>
                        {entry.period}
                      </span>
                      {entry.isActive && (
                        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                          Active
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-white text-base">{entry.institution}</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
