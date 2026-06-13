"use client";

import { useState } from "react";

// Option A items
const sportsA = [
  { id: "all", label: "All" },
  { id: "tennis", label: "Tennis" },
  { id: "futsal", label: "Futsal" },
  { id: "icehockey", label: "Ice Hockey" },
  { id: "hockey", label: "Hockey" },
  { id: "volleyball", label: "Volleyball" },
  { id: "badminton", label: "Badminton" },
  { id: "athletics", label: "Athletics" },
  { id: "billiards", label: "Billiards" },
  { id: "cricket", label: "Cricket" },
  { id: "handball", label: "Handball" },
  { id: "golf", label: "Golf" },
  { id: "squash", label: "Squash" },
  { id: "football", label: "Football" },
  { id: "tabletennis", label: "Table Tennis" },
  { id: "jokgu", label: "Jokgu" },
  { id: "sepaktakraw", label: "Sepak" },
  { id: "fitness", label: "Fitness" },
  { id: "other", label: "Other" },
];

// Option B items
const sportsB = [
  { id: "common", label: "General" },
  { id: "soccer", label: "Soccer", initialSelected: true },
  { id: "baseball", label: "Baseball" },
  { id: "basketball", label: "Basketball" },
  { id: "tennis", label: "Tennis" },
  { id: "futsal", label: "Futsal", initialSelected: true },
  { id: "icehockey", label: "Ice Hockey" },
  { id: "hockey", label: "Hockey", initialSelected: true },
  { id: "tabletennis", label: "Table Tennis" },
  { id: "volleyball", label: "Volleyball" },
  { id: "badminton", label: "Badminton" },
  { id: "esports", label: "eSports" },
  { id: "athletics", label: "Athletics" },
  { id: "billiards", label: "Billiards" },
  { id: "cricket", label: "Cricket" },
  { id: "handball", label: "Handball" },
  { id: "jokgu", label: "Jokgu" },
  { id: "golf", label: "Golf" },
  { id: "squash", label: "Squash" },
  { id: "americanfootball", label: "Am. Football" },
  { id: "sepaktakraw", label: "Sepak" },
  { id: "bodybuilding", label: "Bodybuilding" },
  { id: "other", label: "Other" },
];

const BallIcon = ({ active }: { active: boolean }) => (
  <svg 
    className={`w-6 h-6 transition-colors duration-200 ${active ? "text-[#37C556]" : "text-neutral-400"}`} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M17.5 7.5a9 9 0 0 0-11 0" />
    <path d="M6.5 16.5a9 9 0 0 0 11 0" />
  </svg>
);

export default function CameraFiABTest() {
  const [selectedA, setSelectedA] = useState("all");
  const [selectedB, setSelectedB] = useState<Record<string, boolean>>(
    sportsB.reduce((acc, sport) => {
      acc[sport.id] = !!sport.initialSelected;
      return acc;
    }, {} as Record<string, boolean>)
  );
  const [toastMessage, setToastMessage] = useState("");

  const toggleB = (id: string) => {
    setSelectedB((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleApplyB = () => {
    const selectedLabels = sportsB
      .filter((s) => selectedB[s.id])
      .map((s) => s.label);
    
    setToastMessage(`Filter Applied: ${selectedLabels.length} items selected`);
    setTimeout(() => setToastMessage(""), 2500);
  };

  return (
    <div className="w-full mt-10">
      {/* Visual A/B Simulator Shell */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center max-w-4xl mx-auto">
        
        {/* Phone A: Traditional Grid Layout */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-black text-neutral-500 uppercase tracking-widest">Version A: Traditional Grid</span>
          
          <div className="w-[280px] sm:w-[300px] aspect-[9/18.5] border-[4px] border-neutral-900 rounded-[2.5rem] bg-[#9CA3AF] shadow-xl overflow-hidden relative flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="w-8 h-[2px] bg-neutral-800 rounded-full"></div>
            </div>

            {/* A Screen Header */}
            <div className="h-14 pt-4 px-4 flex items-center bg-[#8b919d]/90 text-white shrink-0">
              <button onClick={() => setSelectedA("all")} className="p-1 hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            {/* A Screen Content */}
            <div className="flex-grow bg-white overflow-y-auto hide-scrollbar p-4 rounded-t-3xl mt-[-8px] z-10">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center">
                {sportsA.map((sport) => {
                  const isSelected = selectedA === sport.id;
                  return (
                    <button 
                      key={sport.id}
                      onClick={() => setSelectedA(sport.id)}
                      className="flex flex-col items-center gap-1.5 p-1 transition-transform active:scale-95"
                    >
                      <div 
                        className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? "border-[#37C556] bg-[#37C556]/5"
                            : "border-neutral-200 bg-white"
                        }`}
                      >
                        <BallIcon active={isSelected} />
                      </div>
                      <span className={`text-[9px] font-bold text-center leading-none transition-colors duration-200 ${
                        isSelected ? "text-[#37C556]" : "text-neutral-500"
                      }`}>
                        {sport.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Phone B: Interactive Chips & Bottom Sheet */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-black text-[#37C556] uppercase tracking-widest">Version B: Filter Chips (Winner)</span>
          
          <div className="w-[280px] sm:w-[300px] aspect-[9/18.5] border-[4px] border-neutral-900 rounded-[2.5rem] bg-[#4B5563] shadow-xl overflow-hidden relative flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="w-8 h-[2px] bg-neutral-800 rounded-full"></div>
            </div>

            {/* B Screen Header (Dark background representing collapsed screen) */}
            <div className="h-14 pt-4 px-4 flex items-center bg-[#434b57] text-white shrink-0">
              <svg className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            {/* B Screen Content - Bottom Sheet overlay style */}
            <div className="flex-grow bg-white overflow-hidden rounded-t-3xl mt-[-8px] z-10 flex flex-col shadow-2xl border-t border-neutral-200/50">
              {/* Bottom Sheet Header */}
              <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-neutral-100 shrink-0">
                <span className="text-sm font-black text-neutral-800">Filter</span>
                <button 
                  onClick={() => setSelectedB(sportsB.reduce((acc, s) => ({ ...acc, [s.id]: !!s.initialSelected }), {} as Record<string, boolean>))}
                  className="p-1 hover:opacity-70 transition-opacity text-neutral-400"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Bottom Sheet Chips Container */}
              <div className="flex-grow overflow-y-auto p-4 flex flex-wrap gap-2 content-start pb-20 no-scrollbar">
                {sportsB.map((sport) => {
                  const isSelected = !!selectedB[sport.id];
                  const hasIcon = sport.id !== "common" && sport.id !== "other";

                  return (
                    <button
                      key={sport.id}
                      onClick={() => toggleB(sport.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold transition-all duration-150 active:scale-95 ${
                        isSelected
                          ? "border-[#37C556] bg-[#37C556]/10 text-[#37C556]"
                          : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300"
                      }`}
                    >
                      {hasIcon && (
                        <svg 
                          className={`w-3.5 h-3.5 ${isSelected ? "text-[#37C556]" : "text-neutral-400"}`} 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M17.5 7.5a9 9 0 0 0-11 0" />
                          <path d="M6.5 16.5a9 9 0 0 0 11 0" />
                        </svg>
                      )}
                      <span>{sport.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Sheet Apply Button (Sticky at bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-white border-t border-neutral-100 z-20 shrink-0">
                <button 
                  onClick={handleApplyB}
                  className="w-full bg-[#37C556] hover:bg-[#2fa849] active:scale-[0.98] text-white text-xs font-black py-2.5 rounded-xl shadow-md transition-all uppercase tracking-wider text-center"
                >
                  Apply Filter
                </button>
              </div>
            </div>

            {/* In-App Toast Alert Feedback */}
            {toastMessage && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-neutral-900/90 text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg z-30 transition-all duration-300 animate-bounce text-center whitespace-nowrap">
                {toastMessage}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
