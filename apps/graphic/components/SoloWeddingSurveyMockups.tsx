"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const surveySteps = Array.from({ length: 12 }, (_, index) => {
  const step = index + 1;

  return {
    step,
    src: `/SW/survey/${step}.png`,
    title: `Personal Survey ${String(step).padStart(2, "0")}`,
  };
});

export default function SoloWeddingSurveyMockups() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 240;
  const cardHeight = 520;
  const cardGap = 24; // gap-6
  const cardOuterWidth = cardWidth + cardGap;

  const handleScroll = () => {
    if (scrollRef.current) {
      const currentScrollX = scrollRef.current.scrollLeft;
      const newIndex = Math.round(currentScrollX / cardOuterWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      // Set initial index
      const initialIndex = Math.round(scrollContainer.scrollLeft / cardOuterWidth);
      setActiveIndex(initialIndex);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToStep = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardOuterWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA] pb-28 pt-16 text-neutral-950 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 mb-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A93E32] text-xs font-black text-white">
            01
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
            Personalized Survey
          </span>
        </div>
        <h3 className="text-3xl font-black tracking-tight md:text-5xl">
          12-Step Personalization Flow
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
          A guided survey turns the user&apos;s memories, emotions, and self-promises into a personalized solo wedding ritual.
        </p>
      </div>

      {/* Interactive Phone Slider Section */}
      <div className="relative w-full flex flex-col items-center select-none">
        {/* Main viewport container with height containing the phone */}
        <div className="relative w-full h-[560px] flex items-center justify-center overflow-visible">
          
          {/* Left navigation arrow */}
          <button
            onClick={() => scrollToStep(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute left-4 md:left-12 lg:left-24 z-40 p-3 rounded-full bg-white/80 hover:bg-white border border-neutral-200/50 shadow-md transition-all disabled:opacity-30 disabled:pointer-events-none hover:scale-105 active:scale-95"
            aria-label="Previous step"
          >
            <svg className="w-6 h-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right navigation arrow */}
          <button
            onClick={() => scrollToStep(activeIndex + 1)}
            disabled={activeIndex === surveySteps.length - 1}
            className="absolute right-4 md:right-12 lg:right-24 z-40 p-3 rounded-full bg-white/80 hover:bg-white border border-neutral-200/50 shadow-md transition-all disabled:opacity-30 disabled:pointer-events-none hover:scale-105 active:scale-95"
            aria-label="Next step"
          >
            <svg className="w-6 h-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Centered CSS Line Bezel Overlay (matches Solid Connection mockup style, adjusted border to 6px) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[520px] pointer-events-none z-30 border-[6px] border-neutral-900 rounded-[2rem] shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2">
              <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="w-full h-full overflow-x-auto snap-x snap-mandatory flex items-center gap-6 no-scrollbar cursor-grab active:cursor-grabbing px-[calc(50%-120px)]"
            style={{ scrollBehavior: "auto" }}
          >
            {surveySteps.map((screen, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={screen.step}
                  className={`snap-center shrink-0 relative overflow-hidden bg-white shadow-md border border-neutral-200/50 transition-all duration-300 ease-out ${
                    isActive
                      ? "scale-100 opacity-100 z-10"
                      : "scale-[0.78] opacity-35 z-0"
                  }`}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    borderRadius: "2rem",
                  }}
                >
                  {/* Screen Content - horizontally expanded by 4px to bleed under the 6px mockup borders */}
                  <div className="absolute bottom-0 -left-[2px] w-[calc(100%+4px)] h-[calc(100%-1.5rem)]">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      fill
                      sizes="240px"
                      className="object-contain object-top select-none pointer-events-none"
                      priority={i < 3}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator & Step Info */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-[#A93E32] transition-all duration-300">
            Step {String(activeIndex + 1).padStart(2, "0")} / 12
          </span>
          <div className="flex gap-2.5">
            {surveySteps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToStep(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-[#A93E32]"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
