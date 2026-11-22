import React, { useState } from 'react';
import { NeuroTelemetryProfile } from '../data/portfolioData';
import { getNeuroTelemetryState } from '../utils/studioLogic';

interface NeuroDawnSectionProps {
  accentColor: string;
}

const TELEMETRY_MODES: { id: NeuroTelemetryProfile['mode']; label: string }[] = [
  { id: 'meditation', label: 'Meditation' },
  { id: 'focus', label: 'Focus' },
  { id: 'stress', label: 'Stress' },
];

export const NeuroDawnSection: React.FC<NeuroDawnSectionProps> = ({ accentColor }) => {
  const [telemetryMode, setTelemetryMode] = useState<NeuroTelemetryProfile['mode']>('meditation');
  const telemetry = getNeuroTelemetryState(telemetryMode);

  return (
    <section
      id="project"
      className="py-24 px-5 sm:px-8 border-t border-slate-900/10 bg-slate-100/50"
      data-purpose="flagship-project-section"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span
              className="font-mono text-xs font-bold tracking-widest uppercase theme-transition"
              style={{ color: accentColor }}
            >
              [ 02 // FEATURED_RESEARCH_&amp;_AWARD ]
            </span>
            <h2 className="font-display uppercase text-5xl sm:text-7xl text-slate-900 mt-2 tracking-tight">
              NEURO DAWN
            </h2>
          </div>
          <div
            className="font-script text-2xl sm:text-3xl -rotate-2 font-bold theme-transition"
            style={{ color: accentColor }}
          >
            International Gold Medalist ✦
          </div>
        </div>

        {/* Main Showcase UI Window Card */}
        <div className="bg-[#16181D] rounded-2xl border border-white/10 shadow-custom-card overflow-hidden">
          <div className="bg-[#1F232B] px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-xs text-slate-300">
                neuro_dawn_v1.0 — Parkinson&apos;s Disease Prevention Technology
              </span>
            </div>
            <span className="bg-emerald-500/20 text-emerald-400 font-mono text-[10px] px-2.5 py-1 rounded border border-emerald-500/30">
              VERIFIED INVENTION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* Left Side: Technical Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#0057FF]/20 border border-[#0057FF]/40 text-sky-300 rounded font-mono text-[11px] font-bold">
                BIOTECHNOLOGY • NEURO-MONITORING • PREVENTIVE TECH
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Parkinson&apos;s Disease Prevention &amp; Neural Stabilization Device
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                NEURO DAWN is an innovative biomedical system developed to detect and mitigate
                Parkinson&apos;s disease early stages through non-invasive neuro-telemetry and
                micro-current brain stimulation.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#1F232B] rounded-xl border-l-4 border-[#0057FF] border-y border-r border-white/5">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" aria-hidden="true" />
                    Brainwave &amp; Dopamine Telemetry:
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    A specialized recording module designed to capture and analyze brain activity
                    patterns and dopamine level indicators across meditation, attention/focus, and
                    stress states.
                  </p>
                </div>

                <div className="p-4 bg-[#1F232B] rounded-xl border-l-4 border-emerald-500 border-y border-r border-white/5">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    Controlled Electrical Neuro-Stimulation:
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Applies calibrated micro-electrical currents to stimulate targeted brain regions
                    (specifically the{' '}
                    <span className="text-emerald-300 font-semibold">substantia nigra</span>) to
                    boost and stabilize dopamine production.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {['#SubstantiaNigra', '#DopamineStabilizer', '#BrainwaveTelemetry', '#HealthTech'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-white/5 text-slate-300 font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right Side: Gold Medal Award Certificate Metallic Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#232731] via-[#1B1E26] to-[#121418] rounded-xl p-6 sm:p-7 border border-amber-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6 gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl" aria-hidden="true">
                      🥇
                    </span>
                    <div>
                      <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                        Award Distinction
                      </span>
                      <span className="font-display text-xl text-amber-300 tracking-wide">
                        GOLD MEDAL (MEDALI EMAS)
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full font-bold tabular-nums">
                    2025
                  </span>
                </div>

                <div className="space-y-3.5 text-xs text-slate-300 font-sans border-t border-white/10 pt-4">
                  <div>
                    <p className="font-mono text-[10px] text-slate-400 uppercase">Competition</p>
                    <p className="font-bold text-white text-sm">
                      Indonesia International Invention Expo (IIIEX) 2025
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-slate-400 uppercase">
                      Category &amp; Level
                    </p>
                    <p className="text-slate-200">Biotechnology — International Level</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-slate-400 uppercase">Organizers</p>
                    <p className="text-slate-200">
                      Indonesian Young Scientist Association (IYSA) × Universitas Negeri Semarang
                      (UNNES)
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Neural Telemetry State & Waveform */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-400">
                    NEURAL TELEMETRY FREQ
                  </span>
                  <span
                    className="text-[11px] font-mono text-emerald-400 font-bold tabular-nums"
                    data-testid="neuro-telemetry-status"
                  >
                    {telemetry.statusText}
                  </span>
                </div>

                {/* State Switcher Tabs */}
                <div
                  className="grid grid-cols-3 gap-1 p-1 bg-black/30 rounded-lg border border-white/10"
                  role="tablist"
                  aria-label="Brainwave telemetry state"
                >
                  {TELEMETRY_MODES.map((m) => {
                    const selected = telemetryMode === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setTelemetryMode(m.id)}
                        className={`px-2 py-1 rounded text-[10px] font-mono font-semibold transition-colors ${
                          selected
                            ? 'bg-[#0057FF] text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {m.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span>{telemetry.dopamineDelta}</span>
                  <span className="text-sky-300">{telemetry.stimulationCurrent}</span>
                </div>

                {/* Waveform visualization */}
                <div className="h-10 w-full flex items-center gap-1.5" aria-hidden="true">
                  {telemetry.bars.map((heightLevel, idx) => {
                    const colorClass =
                      idx % 3 === 0
                        ? 'bg-amber-400'
                        : idx % 3 === 1
                          ? 'bg-blue-500'
                          : 'bg-emerald-400';
                    return (
                      <span
                        key={idx}
                        className={`w-1.5 rounded-full transition-all duration-300 ${colorClass}`}
                        style={{ height: `${heightLevel * 10}%` }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
