"use client";

import React, { useState } from "react";

interface Stage {
  stage: string;
  doing: string;
  feeling: string;
  solution: string;
}

interface Journey {
  type: string;
  description: string;
  stages: Stage[];
}

interface UserJourneyCarouselProps {
  journeys: Journey[];
  colors?: string[];
}

export default function UserJourneyCarousel({ journeys, colors }: UserJourneyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!journeys || journeys.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : journeys.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < journeys.length - 1 ? prev + 1 : 0));
  };

  const activeJourney = journeys[activeIndex];

  const splitIdx = activeJourney.type.indexOf(':');
  let badgeText = activeJourney.type;
  let mainTitle = '';
  if (splitIdx !== -1) {
    badgeText = activeJourney.type.substring(0, splitIdx).trim();
    mainTitle = activeJourney.type.substring(splitIdx + 1).trim();
  }

  const journeyColor = colors ? colors[activeIndex % colors.length] : null;

  return (
    <div className="relative">
      {/* Navigation Controls */}
      <div className="flex items-center justify-between md:justify-center gap-4 mb-8">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
          aria-label="Previous Journey"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {journeys.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? "w-8" 
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              style={idx === activeIndex ? { backgroundColor: colors ? colors[idx % colors.length] : '#0a0a0a' } : {}}
              aria-label={`Go to journey ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
          aria-label="Next Journey"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Active Journey Card */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-6 md:text-center max-w-4xl mx-auto">
          <span 
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-3 ${journeyColor ? 'text-white' : 'bg-neutral-950 text-white'}`}
            style={journeyColor ? { backgroundColor: journeyColor } : {}}
          >
            {badgeText}
          </span>
          {mainTitle && (
            <h3 className="text-xl md:text-2xl font-black text-neutral-950 tracking-tight mb-3">
              {mainTitle}
            </h3>
          )}
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed md:whitespace-nowrap truncate whitespace-normal">{activeJourney.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activeJourney.stages.map((stage, sIdx) => (
            <div 
              key={sIdx} 
              className="flex flex-col bg-white border border-neutral-200/60 rounded-3xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              {/* Stage Header */}
              <div className="px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400 mb-1">Step 0{sIdx + 1}</div>
                <h4 className="text-xl font-black text-neutral-950">{stage.stage}</h4>
              </div>

              <div className="p-6 flex flex-col flex-grow gap-6">
                {/* Doing */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                    Doing
                  </div>
                  <p className="text-neutral-700 leading-relaxed font-medium">{stage.doing}</p>
                </div>

                {/* Feeling */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${journeyColor ? '' : 'bg-blue-400'}`} style={journeyColor ? { backgroundColor: journeyColor } : {}}></span>
                    Feeling
                  </div>
                  <div className={`relative rounded-2xl p-5 border ${journeyColor ? '' : 'bg-blue-50/50 border-blue-100/50'}`} style={journeyColor ? { backgroundColor: `${journeyColor}10`, borderColor: `${journeyColor}30` } : {}}>
                    <span className={`absolute -top-4 -left-1 text-5xl font-serif leading-none ${journeyColor ? '' : 'text-blue-200/50'}`} style={journeyColor ? { color: `${journeyColor}40` } : {}}>{"\""}</span>
                    <p className={`italic leading-relaxed relative z-10 text-sm md:text-base ${journeyColor ? '' : 'text-blue-800'}`} style={journeyColor ? { color: journeyColor } : {}}>
                      {stage.feeling.replace(/^"|"$/g, '')}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="mt-auto pt-5 border-t border-neutral-100">
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${journeyColor ? '' : 'text-emerald-500'}`} style={journeyColor ? { color: journeyColor } : {}}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Core Solution
                  </div>
                  <div className={`rounded-2xl p-5 ${journeyColor ? 'text-white' : 'bg-neutral-950 text-white'}`} style={journeyColor ? { backgroundColor: journeyColor } : {}}>
                    <p className="font-bold leading-relaxed">{stage.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
