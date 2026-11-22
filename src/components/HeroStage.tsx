import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff, Pause, Play, Search, X } from 'lucide-react';
import {
  CONTACT_INFO,
  HERO_PORTRAIT_URL,
  STACK_LAYERS,
  StackLayer,
  WHAT_I_DO_ITEMS,
} from '../data/portfolioData';
import { filterLayers, toggleLayerVisibility } from '../utils/studioLogic';

type ToolId = 'select' | 'pen' | 'crop' | 'code' | 'text' | 'hand' | 'zoom';

interface HeroStageProps {
  activeLayer: StackLayer;
  onSelectLayer: (layer: StackLayer) => void;
  onInspectTool: (toolId: string) => void;
}

const DOCK_TOOLS: { id: ToolId; label: string }[] = [
  { id: 'select', label: 'Select Pointer' },
  { id: 'pen', label: 'Pen Tool' },
  { id: 'crop', label: 'Crop' },
  { id: 'code', label: 'Code Brackets' },
  { id: 'text', label: 'Text Tool' },
  { id: 'hand', label: 'Hand Tool' },
  { id: 'zoom', label: 'Zoom' },
];

export const HeroStage: React.FC<HeroStageProps> = ({
  activeLayer,
  onSelectLayer,
  onInspectTool,
}) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [layerQuery, setLayerQuery] = useState('');
  const [hiddenLayerIds, setHiddenLayerIds] = useState<StackLayer['id'][]>([]);
  const [activeTool, setActiveTool] = useState<ToolId>('pen');
  const [timelinePlaying, setTimelinePlaying] = useState(true);
  const [timelineFrame, setTimelineFrame] = useState(18);
  const [portraitFailed, setPortraitFailed] = useState(false);

  const visibleLayers = filterLayers(STACK_LAYERS, layerQuery);

  // Ctrl+L keyboard shortcut focuses the Layers search input
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'l') {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Gentle keyframe scrubber advance when playing
  useEffect(() => {
    if (!timelinePlaying) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const interval = window.setInterval(() => {
      setTimelineFrame((prev) => (prev >= 59 ? 0 : prev + 1));
    }, 320);
    return () => window.clearInterval(interval);
  }, [timelinePlaying]);

  // Mousemove parallax on floating workspace elements
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const parallaxElements = stage.querySelectorAll<HTMLElement>('[data-parallax]');

    const handleMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

      parallaxElements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-parallax') || '10');
        el.style.transform = `translate3d(${(mouseX * depth).toFixed(1)}px, ${(mouseY * depth).toFixed(1)}px, 0)`;
      });
    };

    const handleMouseLeave = () => {
      parallaxElements.forEach((el) => {
        el.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        el.style.transform = 'translate3d(0px, 0px, 0)';
      });
    };

    const handleMouseEnter = () => {
      parallaxElements.forEach((el) => {
        el.style.transition = 'none';
      });
    };

    stage.addEventListener('mousemove', handleMouseMove);
    stage.addEventListener('mouseleave', handleMouseLeave);
    stage.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      stage.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('mouseleave', handleMouseLeave);
      stage.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const handleToggleVisibility = (layerId: StackLayer['id']) => {
    setHiddenLayerIds((prev) => toggleLayerVisibility(prev, layerId));
  };

  const scrollToSection = (sectionId: string, toolId?: string) => {
    if (toolId) {
      onInspectTool(toolId);
    }
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const formattedTimecode = `00:04:18:${String(timelineFrame).padStart(2, '0')}`;
  const timelinePercent = Math.round(((timelineFrame + 1) / 60) * 100);
  const showPortrait = !hiddenLayerIds.includes('vfx');
  const showTimeline = !hiddenLayerIds.includes('biotech');

  return (
    <section
      className="relative min-h-[calc(100svh-65px)] flex flex-col justify-between overflow-hidden"
      data-purpose="hero-workspace-stage"
    >
      <div
        ref={stageRef}
        id="hero-stage"
        className={`relative flex-1 max-w-[1360px] w-full mx-auto px-4 pt-5 pb-8 sm:pb-12 sm:min-h-[730px] flex flex-col sm:flex-row items-center justify-center ${
          activeTool === 'zoom' ? 'cursor-zoom-in' : activeTool === 'hand' ? 'cursor-grab' : ''
        }`}
      >
        {/* LAYER Z-1: MASSIVE CENTER & TOP TYPOGRAPHY */}
        <div className="relative sm:absolute sm:inset-x-0 sm:top-3 text-center pointer-events-none select-none z-25 flex flex-col items-center px-2 sm:px-4">
          <span
            id="hero-script-tag"
            className="font-script text-5xl sm:text-6xl md:text-8xl -rotate-3 transform -mb-4 sm:-mb-6 transition-all duration-300 drop-shadow-sm font-bold"
            style={{ color: activeLayer.color }}
          >
            {activeLayer.scriptTag}
          </span>
          <h1 className="font-display uppercase text-7xl sm:text-9xl md:text-[13rem] tracking-tight leading-[0.82] text-[#0F1115]">
            CREATOR
          </h1>
          <p className="mt-3 sm:mt-4 font-mono text-[10px] sm:text-xs tracking-widest text-slate-800 uppercase font-semibold bg-[#F8F9FA]/90 backdrop-blur-xs px-3 py-1 rounded max-w-full">
            {activeLayer.taglinePrefix}
            <span
              id="hero-tagline-highlight"
              className="font-black underline decoration-2 underline-offset-4 theme-transition"
              style={{ color: activeLayer.color }}
            >
              {activeLayer.taglineHighlight}
            </span>
            {activeLayer.taglineSuffix}
          </p>
        </div>

        {/* LAYER Z-2: TILTED SECONDARY VIEWPORT FRAME (Pastel Pink Frame behind cutout) */}
        {showTimeline && (
          <div
            className="absolute right-[4%] lg:right-[7%] top-[30%] sm:top-[29%] w-[280px] sm:w-[365px] aspect-[4/3] bg-[#F4A8E8] rounded-2xl p-3 tilted-preview-frame z-15 hidden md:block"
            data-parallax="14"
          >
            <div className="w-full h-full bg-[#16181D] rounded-xl overflow-hidden flex flex-col border border-white/20 shadow-inner">
              <div className="bg-[#1F232B] px-3 py-2 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-[10px] text-slate-300">
                    workspace_timeline.vfx
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setTimelinePlaying((p) => !p)}
                  aria-label={timelinePlaying ? 'Pause VFX timeline' : 'Play VFX timeline'}
                  className="text-slate-300 hover:text-white p-1 rounded transition-colors"
                >
                  {timelinePlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
              </div>

              <div className="p-3.5 text-[11px] font-mono text-slate-300 space-y-1.5 leading-relaxed opacity-95 overflow-hidden flex-1 flex flex-col justify-between">
                <div>
                  <p>
                    <span className="text-blue-400">&lt;canvas</span>{' '}
                    <span className="text-pink-400">engine</span>=
                    <span className="text-amber-300">&quot;neuro_vfx&quot;</span>&gt;
                  </p>
                  <p className="pl-4 text-emerald-400">
                    &lt;track type=&quot;keyframe&quot; id=&quot;01&quot; fps=&quot;60&quot;&gt;
                  </p>
                  <p className="pl-8 text-slate-400">
                    // Substantia nigra dopamine stimulus
                  </p>
                  <p className="pl-8 text-sky-300">
                    triggerPulse(2.4mA, target: &quot;brainwave&quot;);
                  </p>
                  <p className="pl-4 text-emerald-400">&lt;/track&gt;</p>
                  <p>
                    <span className="text-blue-400">&lt;/canvas&gt;</span>
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      timelinePlaying ? 'bg-blue-500' : 'bg-slate-500'
                    }`}
                  />
                  <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-200"
                      style={{ width: `${timelinePercent}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-slate-300 font-mono tabular-nums">
                    {formattedTimecode}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LAYER Z-3: CENTER PORTRAIT CUTOUT */}
        <div
          className={`relative z-20 flex items-end justify-center w-full max-w-[520px] h-[340px] sm:h-[550px] pointer-events-none mt-4 sm:mt-24 transition-opacity duration-300 ${
            showPortrait ? 'opacity-100' : 'opacity-25'
          }`}
          data-parallax="6"
        >
          <div
            className={`relative w-full h-full flex items-end justify-center portrait-mask-fade ${
              activeTool === 'crop' ? 'outline-1 outline-dashed outline-[#0057FF]/60' : ''
            }`}
          >
            {!portraitFailed ? (
              <img
                src={HERO_PORTRAIT_URL}
                alt="Muhammad Nadhif Al-Fatih — Creative Developer Portrait"
                referrerPolicy="no-referrer"
                onError={() => setPortraitFailed(true)}
                className="max-h-full w-auto object-contain filter grayscale contrast-125 brightness-95 drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
              />
            ) : (
              <div className="w-72 h-96 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-300 border border-slate-400/50 flex flex-col items-center justify-center text-slate-700 shadow-lg">
                <span className="font-display text-7xl tracking-tight">NA</span>
                <span className="font-mono text-[11px] uppercase tracking-widest mt-2">
                  Muhammad Nadhif Al-Fatih
                </span>
              </div>
            )}
          </div>
        </div>

        {/* LAYER Z-4: FLOATING SOFTWARE TILES & TOOLBARS */}
        {/* Floating Tile 1: After Effects (Ae) Left */}
        <div
          className="hidden sm:block absolute left-4 sm:left-[5vw] top-[31%] sm:top-[28%] z-30"
          data-parallax="18"
        >
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollToSection('skills', 'ae')}
              aria-label="Inspect After Effects capability"
              className="squircle-badge relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#001E36] border-2 border-[#31A8FF] flex flex-col items-center justify-center text-white shadow-[0_10px_25px_rgba(0,30,54,0.6)] cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#31A8FF]"
            >
              <span className="font-display text-4xl sm:text-5xl text-[#31A8FF] group-hover:scale-110 transition-transform">
                Ae
              </span>
              <span className="font-mono text-[9px] text-sky-200 mt-1 uppercase tracking-tighter">
                After Effects
              </span>
            </button>

            <div className="absolute -top-7 -left-3 pointer-events-none select-none flex items-center gap-1 whitespace-nowrap">
              <span className="font-script text-xl font-bold text-slate-800 -rotate-8">
                Adobe After Effects
              </span>
              <svg
                className="w-5 h-5 text-slate-800 -rotate-12 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Tile 2: Premiere Pro (Pr) Left Lower */}
        <div
          className="hidden sm:block absolute left-6 sm:left-[4vw] top-[49%] sm:top-[46%] z-30"
          data-parallax="22"
        >
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollToSection('skills', 'pr')}
              aria-label="Inspect Premiere Pro capability"
              className="squircle-badge relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-[#140826] border-2 border-[#EA77FF] flex flex-col items-center justify-center text-white shadow-[0_10px_25px_rgba(20,8,38,0.5)] cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA77FF]"
            >
              <span className="font-display text-4xl sm:text-5xl text-[#EA77FF] group-hover:scale-110 transition-transform">
                Pr
              </span>
              <span className="font-mono text-[9px] text-fuchsia-200 mt-0.5 uppercase tracking-tighter">
                Premiere Pro
              </span>
            </button>
            <div className="absolute -bottom-6 left-1 pointer-events-none select-none whitespace-nowrap">
              <span className="font-script text-lg font-bold text-slate-800 rotate-6 inline-block">
                Video Editor
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Quick Tool Pills + Status Pill (prevents overlap on 390px) */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-2 mb-3 z-30">
          <button
            type="button"
            onClick={() => scrollToSection('skills', 'ae')}
            className="w-12 h-12 rounded-xl bg-[#001E36] border border-[#31A8FF] flex items-center justify-center font-display text-2xl text-[#31A8FF]"
            aria-label="Inspect After Effects capability"
          >
            Ae
          </button>
          <a
            href="#project"
            className="px-3 py-1.5 rounded text-white font-mono text-[10px] font-bold tracking-wider shadow-md flex items-center gap-1.5 theme-transition"
            style={{ backgroundColor: activeLayer.color }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-300" aria-hidden="true" />
            <span>GOLD MEDALIST • IIIEX 2025</span>
          </a>
          <button
            type="button"
            onClick={() => scrollToSection('skills', 'pr')}
            className="w-12 h-12 rounded-xl bg-[#140826] border border-[#EA77FF] flex items-center justify-center font-display text-2xl text-[#EA77FF]"
            aria-label="Inspect Premiere Pro capability"
          >
            Pr
          </button>
        </div>

        {/* Floating Tile 3: Vertical Tool Dock on Right */}
        <div
          className="absolute right-4 sm:right-[4.5vw] top-[15%] sm:top-[17%] z-30 hidden sm:flex flex-col items-center gap-2.5 w-12 py-3.5 bg-[#16181D] rounded-xl border border-white/10 shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-300"
          data-parallax="16"
          role="toolbar"
          aria-label="Studio Viewport tools"
        >
          {DOCK_TOOLS.map((tool) => {
            const isSelected = activeTool === tool.id;
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => setActiveTool(tool.id)}
                title={tool.label}
                aria-label={tool.label}
                aria-pressed={isSelected}
                className={`p-1.5 rounded-lg transition-colors ${
                  isSelected
                    ? 'text-blue-400 bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tool.id === 'select' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 3a.5.5 0 00-.5.5v12.5a.5.5 0 00.8.4l3.6-2.7 2.1 4.5a.5.5 0 00.9-.4l-2.1-4.5 4.5-.4a.5.5 0 00.3-.8L5.5 3z" />
                  </svg>
                )}
                {tool.id === 'pen' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                )}
                {tool.id === 'crop' && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 2v14a2 2 0 002 2h14M2 6h14a2 2 0 012 2v14" />
                  </svg>
                )}
                {tool.id === 'code' && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {tool.id === 'text' && <span className="font-serif font-black text-sm leading-none">T</span>}
                {tool.id === 'hand' && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 11V7a2 2 0 014 0v4m0 0V5a2 2 0 014 0v6m0 0V7a2 2 0 014 0v9a5 5 0 01-10 0v-5z" />
                  </svg>
                )}
                {tool.id === 'zoom' && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </button>
            );
          })}
          <div
            className="w-5 h-5 border border-white/30 mt-1 rounded-xs theme-transition"
            style={{ backgroundColor: activeLayer.color }}
            title={`Active accent: ${activeLayer.color}`}
          />
        </div>

        {/* Floating Blue Status Pill (Desktop/Tablet) */}
        <div
          className="hidden sm:block absolute right-[4vw] sm:right-[9vw] top-[59%] z-30 -rotate-3 transform"
          data-parallax="12"
        >
          <a
            href="#project"
            id="status-pill"
            className="px-3.5 py-1.5 rounded text-white font-mono text-[10px] sm:text-xs font-bold tracking-wider shadow-lg flex items-center gap-1.5 theme-transition hover:scale-105"
            style={{ backgroundColor: activeLayer.color }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-300" aria-hidden="true" />
            <span>GOLD MEDALIST • IIIEX 2025</span>
          </a>
        </div>

        {/* LAYER Z-5: FOREGROUND DARK UI WINDOWS & COLLAGE PANELS */}
        {/* Panel 1: Bottom-Left "Layers" Switcher Window */}
        <div
          className="relative sm:absolute sm:left-[3vw] sm:bottom-8 z-30 w-full max-w-[340px] sm:w-[270px] bg-[#16181D] text-slate-100 rounded-xl border border-white/10 shadow-custom-card overflow-hidden"
          data-parallax="8"
          data-purpose="layers-panel"
        >
          <div className="bg-[#1F232B] px-3.5 py-2.5 flex items-center justify-between border-b border-white/10">
            <span className="font-mono text-xs font-bold tracking-wide text-slate-200">
              Layers
            </span>
            <span className="font-mono text-[10px] text-slate-400">Ctrl + L</span>
          </div>

          {/* Search input inside panel */}
          <div className="p-2 border-b border-white/5 bg-[#121418]">
            <label htmlFor="layers-search" className="sr-only">
              Search stack layers
            </label>
            <div className="px-2 py-1 bg-black/40 rounded flex items-center gap-2 text-[11px] text-slate-300 font-mono focus-within:ring-1 focus-within:ring-[#0057FF]">
              <Search className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
              <input
                ref={searchInputRef}
                id="layers-search"
                type="text"
                value={layerQuery}
                onChange={(e) => setLayerQuery(e.target.value)}
                placeholder="Search stack layers..."
                className="w-full bg-transparent text-[11px] text-slate-100 placeholder:text-slate-400 focus:outline-none"
              />
              {layerQuery && (
                <button
                  type="button"
                  onClick={() => setLayerQuery('')}
                  aria-label="Clear layer search"
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Layer Rows */}
          <div
            id="layer-selector-container"
            className="p-2 space-y-1 text-xs font-mono select-none max-h-[210px] overflow-y-auto"
          >
            {visibleLayers.length === 0 ? (
              <div className="px-2.5 py-3 text-center text-[11px] text-slate-400">
                <p>No layers matching &quot;{layerQuery}&quot;</p>
                <button
                  type="button"
                  onClick={() => setLayerQuery('')}
                  className="mt-1.5 text-blue-400 hover:underline font-mono text-[10px]"
                >
                  Reset filter
                </button>
              </div>
            ) : (
              visibleLayers.map((layer) => {
                const isActive = activeLayer.id === layer.id;
                const isHidden = hiddenLayerIds.includes(layer.id);
                return (
                  <div
                    key={layer.id}
                    className={`flex items-center justify-between px-2 py-1.5 rounded border transition-all ${
                      isActive ? 'bg-white/10' : 'hover:bg-white/5 border-transparent'
                    }`}
                    style={{
                      borderColor: isActive ? layer.color : 'transparent',
                      backgroundColor: isActive ? `${layer.color}24` : undefined,
                    }}
                  >
                    <div className="flex items-center gap-1.5 min-w-0 flex-1">
                      <button
                        type="button"
                        onClick={() => handleToggleVisibility(layer.id)}
                        aria-label={`${isHidden ? 'Show' : 'Hide'} ${layer.label} layer`}
                        className={`p-0.5 rounded transition-colors ${
                          isHidden ? 'text-slate-600' : 'text-blue-400 hover:text-white'
                        }`}
                      >
                        {isHidden ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectLayer(layer)}
                        className={`flex items-center gap-2 text-left min-w-0 flex-1 ${
                          isHidden ? 'opacity-50' : ''
                        }`}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-sm shrink-0"
                          style={{ backgroundColor: layer.color }}
                        />
                        <span className="text-slate-100 font-sans font-medium text-[11px] truncate">
                          {layer.label}
                        </span>
                      </button>
                    </div>

                    <span
                      className={`text-[9px] shrink-0 ml-2 ${
                        layer.badge === 'GOLD' ? 'text-emerald-400' : 'text-slate-400'
                      }`}
                    >
                      {layer.badge}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Panel 2: Bottom-Center "WHAT I DO" Card + Circuit Node Connector */}
        <div
          className="absolute left-[31%] xl:left-[29%] bottom-8 z-30 hidden lg:block w-[225px] bg-[#16181D] text-white rounded-xl p-3.5 border border-white/10 shadow-custom-card"
          data-parallax="10"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
            <span className="font-mono text-[10px] font-bold text-sky-400 tracking-wider">
              WHAT I DO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono text-[11px]">
            {WHAT_I_DO_ITEMS.map((item) => {
              const matchedLayer = STACK_LAYERS.find((l) => l.id === item.layerId);
              const isHighlighted = activeLayer.id === item.layerId;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => matchedLayer && onSelectLayer(matchedLayer)}
                    className={`w-full flex items-center gap-2 text-left rounded px-1 py-0.5 transition-colors ${
                      isHighlighted ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-sm shrink-0 theme-transition"
                      style={{ backgroundColor: activeLayer.color }}
                    />
                    <span className="truncate">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* 90-degree decorative circuit wire to right panel */}
          <div
            className="absolute top-1/2 -right-10 w-10 h-[2px] pointer-events-none theme-transition"
            style={{ backgroundColor: activeLayer.color }}
          >
            <span
              className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full theme-transition"
              style={{ backgroundColor: activeLayer.color }}
            />
          </div>
        </div>

        {/* Panel 3: Bottom-Right "CTRL + CREATE" Window */}
        <div
          className="absolute right-2 sm:right-[3vw] bottom-5 sm:bottom-8 z-30 w-[270px] sm:w-[320px] bg-[#16181D] text-slate-100 rounded-xl border border-white/10 shadow-custom-card overflow-hidden hidden sm:block"
          data-parallax="6"
          data-purpose="create-window"
        >
          <div className="bg-[#1F232B] px-3 py-2 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <span
              id="ctrl-create-title"
              className="font-mono text-[10px] font-bold tracking-widest px-2 py-0.5 rounded border theme-transition"
              style={{
                color: '#FFFFFF',
                backgroundColor: `${activeLayer.color}33`,
                borderColor: `${activeLayer.color}88`,
              }}
            >
              CTRL + CREATE
            </span>
          </div>

          <div className="p-4 sm:p-5 relative">
            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-sans">
              You don&apos;t need a degree to design the future. Just curiosity, consistency &amp;
              the courage to keep creating.
            </p>
            <div
              id="manifesto-tags"
              className="mt-3 pt-3 border-t border-white/10 font-bold text-xs space-y-0.5 theme-transition"
              style={{ color: activeLayer.color }}
            >
              <p>Code with Logic.</p>
              <p>Design with Impact.</p>
              <p>Keep Innovating.</p>
            </div>
            <div className="absolute bottom-2 right-2 select-none pointer-events-none">
              <svg
                className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] -rotate-45"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.5 3a.5.5 0 00-.5.5v12.5a.5.5 0 00.8.4l3.6-2.7 2.1 4.5a.5.5 0 00.9-.4l-2.1-4.5 4.5-.4a.5.5 0 00.3-.8L5.5 3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Vector Bounding Box with Grips */}
        <div
          className="absolute left-4 sm:left-[3vw] bottom-0 z-30 hidden sm:flex items-center gap-2 px-2.5 py-1.5 bg-white/95 backdrop-blur-sm border border-slate-900 rounded shadow-sm text-[10px] font-mono select-none"
          data-purpose="vector-badge"
        >
          <span className="vector-anchor -top-1 -left-1" />
          <span className="vector-anchor -top-1 -right-1" />
          <span className="vector-anchor -bottom-1 -left-1" />
          <span className="vector-anchor -bottom-1 -right-1" />
          <svg
            className="w-3.5 h-3.5 text-slate-900 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
          </svg>
          <span className="text-slate-800 font-bold uppercase tracking-tight">
            LOGIC IS THINKING MADE{' '}
            <span className="theme-transition" style={{ color: activeLayer.color }}>
              VISUAL.
            </span>
          </span>
        </div>
      </div>

      {/* Hero Bottom 4-Column Status Strip */}
      <div
        className="relative z-30 border-t border-slate-900/10 bg-[#F8F9FA]/95 backdrop-blur-md"
        data-purpose="bottom-status-strip"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Col 1: Contact Direct */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                Let&apos;s Connect
              </p>
              <a
                className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0057FF] transition-colors tabular-nums"
                href={CONTACT_INFO.whatsappHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                {CONTACT_INFO.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Col 2: Education & Specialization Context */}
          <div className="border-l-0 sm:border-l border-slate-900/10 sm:pl-4">
            <p className="text-[11px] text-slate-700 leading-snug">
              Informatics Undergraduate at{' '}
              <span className="font-bold text-slate-900">Institut Teknologi PLN</span> — building
              web systems, AI models &amp; VFX.
            </p>
          </div>

          {/* Col 3: Collaboration Status */}
          <div className="border-l-0 lg:border-l border-slate-900/10 lg:pl-4">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              Available for
            </p>
            <a
              href="#contact"
              className="text-xs sm:text-sm font-bold theme-transition hover:underline"
              style={{ color: activeLayer.color }}
            >
              Tech Collabs &amp; Freelance
            </a>
          </div>

          {/* Col 4: Monogram & Identity */}
          <div className="flex items-center justify-between border-l-0 lg:border-l border-slate-900/10 lg:pl-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-display text-lg flex items-center justify-center shadow-sm">
                NA
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-none">nadhif.alfatih</p>
                <span className="text-[10px] font-mono text-slate-500">Student &amp; Creator</span>
              </div>
            </div>
            <span
              className="w-2.5 h-2.5 shrink-0 theme-transition"
              style={{ backgroundColor: activeLayer.color }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
