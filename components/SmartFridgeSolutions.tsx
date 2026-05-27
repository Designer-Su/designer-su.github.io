"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ScreenData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  src: string;
}

const screens: ScreenData[] = [
  {
    id: 1,
    title: "Home Dashboard",
    subtitle: "홈 대시보드",
    description: "Surfaces fridge status, quick tracking alerts, and recipe recommendations.",
    src: "/SF/main.png",
  },
  {
    id: 2,
    title: "Inventory Management",
    subtitle: "인벤토리 관리",
    description: "Centralized pantry organizer showing category, quantity, and freshness status.",
    src: "/SF/feature 1.png",
  },
  {
    id: 3,
    title: "Expiration Alerts",
    subtitle: "유통기한 알림",
    description: "Prioritizes ingredients near expiry with clear color-coded countdown indicators.",
    src: "/SF/feature 1.png",
  },
  {
    id: 4,
    title: "Recipe Feed",
    subtitle: "레시피 피드",
    description: "Recommends personalized recipes based on ingredients currently in the fridge.",
    src: "/SF/feature 2.png",
  },
  {
    id: 5,
    title: "Recipe Step-by-Step",
    subtitle: "레시피 상세 정보",
    description: "Detailed cooking guides with dynamic ingredient checklist and step instructions.",
    src: "/SF/feature 2.png",
  },
  {
    id: 6,
    title: "Event Planner",
    subtitle: "이벤트 플래너",
    description: "Integrates meal planning with family events, linking required items to grocery lists.",
    src: "/SF/feature 3.png",
  },
  {
    id: 7,
    title: "Grocery Shopping List",
    subtitle: "쇼핑 목록",
    description: "Consolidates missing ingredients from the event planner for easy shopping.",
    src: "/SF/feature 3.png",
  },
  {
    id: 8,
    title: "Add Item Flow",
    subtitle: "식재료 등록 흐름",
    description: "A simplified interface to register new items quickly via search or barcodes.",
    src: "/SF/feature 4.png",
  }
];

export default function SmartFridgeSolutions() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setActivePhotoIdx(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActivePhotoIdx(null);
    document.body.style.overflow = "unset";
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : screens.length - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((prev) => (prev !== null && prev < screens.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full bg-white text-neutral-900 flex flex-col mb-24 pt-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Final Design Results</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Smart Fridge Interfaces
          </h3>
          <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            The final design features a clean, user-centric mobile UI focused on kitchen resource planning. Arrange ingredients, track expiration timelines, and get instant cooking inspirations.
          </p>
        </div>

        {/* 4x2 Grid of iPhone Mockups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-8">
          {screens.map((screen, idx) => (
            <div 
              key={screen.id} 
              className="flex flex-col items-center text-center group cursor-zoom-in"
              onClick={() => openLightbox(idx)}
            >
              {/* iPhone Frame Container */}
              <div className="relative aspect-[9/19.5] w-full max-w-[240px] sm:max-w-none rounded-[2.25rem] border-[6px] border-neutral-950 bg-neutral-950 shadow-[0_12px_36px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.15)] group-hover:-translate-y-3 group-hover:scale-[1.03] select-none">
                
                {/* Dynamic Island Notch */}
                <div className="absolute top-2.5 w-[35%] h-3.5 bg-neutral-950 rounded-full left-1/2 -translate-x-1/2 z-20 flex justify-center items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-950/40 absolute left-2.5"></span>
                  <span className="w-1 h-1 rounded-full bg-neutral-900/60 absolute right-3"></span>
                </div>

                {/* Glare/Glass Reflection Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-60 pointer-events-none z-10"></div>
                
                {/* Screen Image */}
                <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 4}
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="mt-6 flex flex-col gap-1.5 px-2">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                  Screen {String(idx + 1).padStart(2, "0")}
                </span>
                <h4 className="text-lg font-black text-neutral-950 tracking-tight leading-tight">
                  {screen.title}
                </h4>
                <span className="text-xs text-neutral-400 font-semibold mb-1">
                  {screen.subtitle}
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 max-w-[220px] mx-auto">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center backdrop-blur-sm p-4 md:p-8 select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/75 hover:text-white text-3xl font-light transition-colors z-[1000] p-2 hover:bg-white/10 rounded-full"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Display Container */}
          <div className="relative w-full max-w-4xl h-[75vh] md:h-[80vh] flex items-center justify-center">
            
            {/* Left navigation arrow */}
            <button 
              className="absolute left-0 md:-left-16 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full transition-all active:scale-95 z-50"
              onClick={showPrev}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Mockup Display inside Lightbox */}
            <div 
              className="relative aspect-[9/19.5] h-full rounded-[2.5rem] border-[8px] border-neutral-900 bg-neutral-950 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dynamic Island Notch */}
              <div className="absolute top-3 w-[35%] h-4 bg-neutral-950 rounded-full left-1/2 -translate-x-1/2 z-20 flex justify-center items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-950/40 absolute left-3"></span>
              </div>
              
              <Image
                src={screens[activePhotoIdx].src}
                alt={screens[activePhotoIdx].title}
                fill
                sizes="80vh"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Right navigation arrow */}
            <button 
              className="absolute right-0 md:-right-16 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full transition-all active:scale-95 z-50"
              onClick={showNext}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Lightbox Caption */}
          <div 
            className="mt-6 text-center text-white flex flex-col gap-1 max-w-xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
              Screen {String(activePhotoIdx + 1).padStart(2, "0")} of {screens.length}
            </span>
            <h4 className="text-xl font-bold tracking-tight">
              {screens[activePhotoIdx].title} <span className="text-sm font-semibold text-white/50 ml-1">({screens[activePhotoIdx].subtitle})</span>
            </h4>
            <p className="text-sm text-white/70 leading-relaxed mt-1">
              {screens[activePhotoIdx].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
