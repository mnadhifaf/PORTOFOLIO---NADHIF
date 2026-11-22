import React, { useState } from 'react';
import { EXPERIENCE_ITEMS, ExperienceItem } from '../data/portfolioData';
import { filterExperiences } from '../utils/studioLogic';

interface ExperienceSectionProps {
  accentColor: string;
}

const FILTER_TABS: { id: 'all' | ExperienceItem['category']; label: string }[] = [
  { id: 'all', label: 'All Roles (5)' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'events', label: 'National Events' },
  { id: 'tech', label: 'ICT & Editing' },
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ accentColor }) => {
  const [category, setCategory] = useState<'all' | ExperienceItem['category']>('all');
  const visibleItems = filterExperiences(EXPERIENCE_ITEMS, category);

  return (
    <section
      id="experience"
      className="py-24 px-5 sm:px-8 border-t border-slate-900/10 bg-slate-100/50"
      data-purpose="experience-log"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span
              className="font-mono text-xs font-bold tracking-widest uppercase theme-transition"
              style={{ color: accentColor }}
            >
              [ 04 // LEADERSHIP_&amp;_COMMITTEES ]
            </span>
            <h2 className="font-display uppercase text-5xl sm:text-7xl text-slate-900 mt-2 tracking-tight">
              EXPERIENCE LOG
            </h2>
            <p className="font-script text-2xl sm:text-3xl text-slate-700 mt-1">
              Campus, Dormitory &amp; National Events
            </p>
          </div>

          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-white border border-slate-900/15 rounded-lg"
            role="group"
            aria-label="Filter experience by category"
          >
            {FILTER_TABS.map((tab) => {
              const active = category === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  aria-pressed={active}
                  className={`px-3 py-1.5 rounded-md font-mono text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active ? 'text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  style={active ? { backgroundColor: accentColor } : undefined}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className={`bg-[#16181D] rounded-xl p-6 border border-white/10 shadow-custom-card flex flex-col justify-between ${
                item.spanFull && category === 'all' ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 gap-2">
                  <span className="font-mono text-xs text-sky-400 font-bold bg-sky-500/10 px-2.5 py-0.5 rounded tabular-nums">
                    {item.period}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 text-right">
                    {item.organization}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base sm:text-lg mb-3 leading-snug">
                  {item.role}
                </h3>

                <ul
                  className={
                    item.spanFull && category === 'all'
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 font-sans leading-relaxed'
                      : 'space-y-2 text-xs text-slate-300 font-sans leading-relaxed'
                  }
                >
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 font-mono shrink-0" aria-hidden="true">
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
                {item.division}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
