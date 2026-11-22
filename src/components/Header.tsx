import React from 'react';

interface HeaderProps {
  accentColor: string;
}

export const Header: React.FC<HeaderProps> = ({ accentColor }) => {
  return (
    <header
      className="relative z-40 border-b border-black/5 bg-[#F8F9FA]/85 backdrop-blur-md"
      data-purpose="top-navigation"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
        <a
          href="#hero-stage"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0057FF]"
        >
          <span
            className="w-2.5 h-2.5 shrink-0 theme-transition"
            style={{ backgroundColor: accentColor }}
          />
          <span className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-wider text-slate-900 uppercase whitespace-nowrap">
              INFORMATICS &amp; VFX
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase whitespace-nowrap">
              CREATIVE DEVELOPER
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 font-mono text-xs font-medium tracking-wide text-slate-700"
        >
          <a
            className="hover:text-[#0057FF] transition-colors whitespace-nowrap shrink-0"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="hover:text-[#0057FF] transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            href="#project"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            NEURO DAWN
          </a>
          <a
            className="hover:text-[#0057FF] transition-colors whitespace-nowrap shrink-0"
            href="#skills"
          >
            SKILLS
          </a>
          <a
            className="hover:text-[#0057FF] transition-colors whitespace-nowrap shrink-0"
            href="#experience"
          >
            EXPERIENCE
          </a>
          <a
            className="hover:text-[#0057FF] transition-colors whitespace-nowrap shrink-0"
            href="#contact"
          >
            CONNECT
          </a>
        </nav>

        <div className="flex items-center gap-3 font-mono text-xs text-right shrink-0">
          <div>
            <p className="font-bold text-slate-900 whitespace-nowrap">PALEMBANG • JAKARTA</p>
            <p className="text-[10px] text-slate-500 font-mono tracking-tighter whitespace-nowrap">
              IT-PLN &apos;26 +
            </p>
          </div>
          <span className="text-slate-400 font-bold text-sm" aria-hidden="true">
            +
          </span>
        </div>
      </div>
    </header>
  );
};
