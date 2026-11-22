/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ConnectSection } from './components/ConnectSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Header } from './components/Header';
import { HeroStage } from './components/HeroStage';
import { NeuroDawnSection } from './components/NeuroDawnSection';
import { SkillsSection } from './components/SkillsSection';
import { STACK_LAYERS, StackLayer } from './data/portfolioData';

export default function App() {
  const [activeLayer, setActiveLayer] = useState<StackLayer>(STACK_LAYERS[0]);
  const [selectedToolId, setSelectedToolId] = useState<string>('ae');

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', activeLayer.color);
  }, [activeLayer.color]);

  return (
    <div className="min-h-screen relative text-[#0F1115] theme-transition">
      {/* Background Technical Registration Marks */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        data-purpose="registration-marks"
      >
        <div className="absolute top-24 left-8 crosshair-mark w-4 h-4" />
        <div className="absolute top-72 right-10 crosshair-mark w-4 h-4" />
        <div
          className="absolute top-[48%] left-6 w-2 h-2 theme-transition"
          style={{ backgroundColor: activeLayer.color }}
        />
        <div
          className="absolute top-[82%] right-12 w-2 h-2 theme-transition"
          style={{ backgroundColor: activeLayer.color }}
        />
        {/* 3x4 Dot Matrix Indicator */}
        <div className="absolute top-28 right-24 grid grid-cols-3 gap-1.5 opacity-25">
          {Array.from({ length: 12 }).map((_, idx) => (
            <span key={idx} className="w-1 h-1 rounded-full bg-slate-900" />
          ))}
        </div>
      </div>

      <Header accentColor={activeLayer.color} />

      <main className="relative z-10">
        <HeroStage
          activeLayer={activeLayer}
          onSelectLayer={setActiveLayer}
          onInspectTool={setSelectedToolId}
        />
        <AboutSection accentColor={activeLayer.color} />
        <NeuroDawnSection accentColor={activeLayer.color} />
        <SkillsSection
          accentColor={activeLayer.color}
          selectedToolId={selectedToolId}
          onSelectTool={setSelectedToolId}
        />
        <ExperienceSection accentColor={activeLayer.color} />
        <ConnectSection accentColor={activeLayer.color} />
      </main>

      <footer
        className="relative z-10 border-t border-slate-900/10 py-8 px-5 sm:px-8 bg-[#F8F9FA]"
        data-purpose="site-footer"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            © 2026 <span className="font-bold text-slate-900">Muhammad Nadhif Al-Fatih</span>. All
            rights reserved.
          </p>
          <div className="font-mono text-[10px] tracking-wider text-slate-500 uppercase flex items-center gap-3">
            <span>HTML</span>
            <span>•</span>
            <span>AI</span>
            <span>•</span>
            <span>COMPETITIVE PROGRAMMING</span>
            <span>•</span>
            <span>VFX</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
