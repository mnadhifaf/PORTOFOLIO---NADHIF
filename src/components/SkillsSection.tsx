import React from 'react';
import { HARD_SKILLS, SOFT_SKILLS, TOOL_CAPABILITIES } from '../data/portfolioData';

interface SkillsSectionProps {
  accentColor: string;
  selectedToolId: string;
  onSelectTool: (id: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  accentColor,
  selectedToolId,
  onSelectTool,
}) => {
  const activeTool =
    TOOL_CAPABILITIES.find((t) => t.id === selectedToolId) ?? TOOL_CAPABILITIES[0];

  return (
    <section
      id="skills"
      className="py-24 px-5 sm:px-8 border-t border-slate-900/10"
      data-purpose="skills-section"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-14">
          <span
            className="font-mono text-xs font-bold tracking-widest uppercase theme-transition"
            style={{ color: accentColor }}
          >
            [ 03 // TECH_STACK_&amp;_TOOLKIT ]
          </span>
          <h2 className="font-display uppercase text-5xl sm:text-7xl text-slate-900 mt-2 tracking-tight">
            TOOLS &amp; CAPABILITIES
            <span
              className="font-script lowercase font-bold block sm:inline sm:ml-4 text-4xl sm:text-6xl theme-transition"
              style={{ color: accentColor }}
            >
              logic + motion
            </span>
          </h2>
        </div>

        {/* Part 1: Floating Interactive Software App Dock (6 Squircles) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-6">
          {TOOL_CAPABILITIES.map((tool) => {
            const isSelected = activeTool.id === tool.id;
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => onSelectTool(tool.id)}
                aria-pressed={isSelected}
                className={`squircle-badge p-5 rounded-2xl text-white flex flex-col justify-between h-44 shadow-lg text-left cursor-pointer transition-all ${
                  tool.bgClass
                } ${tool.borderClass ?? ''} ${
                  isSelected ? 'ring-3 ring-slate-900 ring-offset-2 ring-offset-[#F8F9FA]' : ''
                }`}
              >
                <span className={`font-mono text-[10px] uppercase ${tool.accentTextClass}`}>
                  {tool.category}
                </span>
                <span
                  className={`font-display text-4xl ${
                    tool.id === 'ae' || tool.id === 'pr' ? tool.accentTextClass : ''
                  }`}
                >
                  {tool.code}
                </span>
                <span className={`text-xs font-bold ${tool.subTextClass}`}>{tool.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tool Inspector Strip */}
        <div
          className="mb-12 px-5 py-4 bg-white border border-slate-900 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          data-testid="active-tool-inspector"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Selected Tool // {activeTool.category}
            </p>
            <p className="text-sm font-bold text-slate-900 mt-0.5">
              {activeTool.code} — {activeTool.title}:{' '}
              <span className="font-normal text-slate-700">{activeTool.detail}</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {activeTool.workflowTags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-slate-600 border border-slate-300 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Part 2: Two Column Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Hard Skills */}
          <div className="p-6 sm:p-8 bg-white border border-slate-900 rounded-xl shadow-[4px_4px_0px_#0F1115]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-900/10 mb-6">
              <h3 className="font-mono text-sm font-bold text-slate-900 tracking-wider">
                HARD SKILLS // TECHNICAL
              </h3>
              <span className="font-mono text-xs font-semibold" style={{ color: accentColor }}>
                3 CORE PILLARS
              </span>
            </div>

            <div className="space-y-6">
              {HARD_SKILLS.map((skill) => (
                <div key={skill.index}>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-display text-2xl theme-transition tabular-nums"
                      style={{ color: accentColor }}
                    >
                      {skill.index}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base">{skill.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-9 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Soft Skills (Dark UI Window) */}
          <div className="bg-[#16181D] rounded-xl border border-white/10 shadow-custom-card overflow-hidden">
            <div className="bg-[#1F232B] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-xs text-slate-300">soft_skills.config</span>
              </div>
              <span className="font-mono text-[10px] text-sky-400">ACTIVE ROLES</span>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Competencies honed through leadership, school committee execution, and team
                competitions:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SOFT_SKILLS.map((item) => (
                  <div
                    key={item.id}
                    className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#0057FF] hover:bg-[#0057FF]/10 transition-all text-xs font-medium text-slate-100"
                  >
                    <span className="mr-1.5" aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.title}
                    <span className="text-[10px] text-slate-400 block font-mono mt-0.5">
                      {item.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
