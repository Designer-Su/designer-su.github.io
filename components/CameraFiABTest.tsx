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

const SportIcon = ({ id, active, className = "w-6 h-6" }: { id: string; active: boolean; className?: string }) => {
  const colorClass = active ? "text-[#37C556]" : "text-neutral-400";
  const strokeColor = "currentColor";

  switch (id) {
    case "all":
    case "common":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <path d="M6 4h12v7c0 3.3-2.7 6-6 6s-6-2.7-6-6V4z" fill={active ? "currentColor" : "none"} fillOpacity={0.15} />
          <path d="M6 6H4c-1.1 0-2 .9-2 2v2c0 2 1.5 3 2.5 3.5M18 6h2c1.1 0 2 .9 2 2v2c0 2-1.5 3-2.5 3.5" />
          <path d="M12 17v4M8 21h8" strokeLinecap="round" />
        </svg>
      );
    case "soccer":
    case "football":
    case "futsal":
    case "jokgu":
    case "handball":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 9.5l2.5 1.8-.9 3h-3.2l-.9-3z" fill={active ? "currentColor" : "none"} fillOpacity={0.2} />
          <path d="M12 9.5V3M14.5 11.3l6.0-2.0M13.6 14.3l3.7 6.0M10.4 14.3L6.7 20.3M9.5 11.3L3.5 9.3" />
          <path d="M7.5 5.5l4.5-2.5 4.5 2.5M20.5 9.3l.5 3.7-3.7 3.3M3.5 9.3L3 13l3.7 3.3" />
        </svg>
      );
    case "basketball":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" />
          <path d="M5.5 5.5c3.5 3.5 3.5 9.5 0 13M18.5 5.5c-3.5 3.5-3.5 9.5 0 13" />
        </svg>
      );
    case "baseball":
    case "cricket":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <path d="M7.5 5.5c3 2 3 11 0 13M16.5 5.5c-3 2-3 11 0 13" />
          <path d="M6.5 8.5h2M6.2 12h2M6.5 15.5h2M17.5 8.5h-2M17.8 12h-2M17.5 15.5h-2" strokeLinecap="round" />
        </svg>
      );
    case "tennis":
    case "squash":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <path d="M7.5 5.5A7.5 7.5 0 0 1 7.5 18.5" />
          <path d="M16.5 5.5A7.5 7.5 0 0 0 16.5 18.5" />
        </svg>
      );
    case "golf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="9" cy="9" r="0.8" fill="currentColor" />
          <circle cx="12" cy="8" r="0.8" fill="currentColor" />
          <circle cx="15" cy="9" r="0.8" fill="currentColor" />
          <circle cx="8" cy="12" r="0.8" fill="currentColor" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" />
          <circle cx="16" cy="12" r="0.8" fill="currentColor" />
          <circle cx="9" cy="15" r="0.8" fill="currentColor" />
          <circle cx="12" cy="16" r="0.8" fill="currentColor" />
          <circle cx="15" cy="15" r="0.8" fill="currentColor" />
        </svg>
      );
    case "esports":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="M6 12h4M8 10v4M15 12h1M17 12h1" strokeLinecap="round" />
        </svg>
      );
    case "billiards":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" fill={active ? "currentColor" : "none"} fillOpacity={0.2} />
          <circle cx="12" cy="12" r="2.5" fill="white" />
          <path d="M12 11.2c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm0 1.2c.4 0 .6.3.6.6s-.2.6-.6.6-.6-.3-.6-.6.2-.6.6-.6z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "badminton":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <path d="M10 17.5a2 2 0 0 0 4 0v-1h-4v1z" fill={active ? "currentColor" : "none"} fillOpacity={0.2} />
          <path d="M10 16.5L7.5 7h9l-2.5 9.5" />
          <path d="M12 16.5V7M9.5 16.5L10.5 7M14.5 16.5L13.5 7" />
          <path d="M8.5 11h7M9 14h6" />
        </svg>
      );
    case "americanfootball":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <path d="M3 12c0-5 13-10 18-9 1 5-4 18-9 18-5 0-9-4-9-9z" />
          <path d="M8.5 15.5l7-7M10.5 11.5l2 2M12 10l2 2M9 13l2 2" strokeLinecap="round" />
        </svg>
      );
    case "tabletennis":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="10" cy="10" r="5" />
          <path d="M13.5 13.5l5.5 5.5" strokeWidth={2.5} strokeLinecap="round" />
          <path d="M12 12l2.5 2.5" strokeWidth={2} />
          <circle cx="17" cy="8" r="2" fill={active ? "currentColor" : "none"} fillOpacity={0.3} />
        </svg>
      );
    case "volleyball":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3c1.5 3 3.5 5.5 6.5 6.5M12 21c-1.5-3-3.5-5.5-6.5-6.5M3 12c3-1.5 5.5-3.5 6.5-6.5M21 12c-3 1.5-5.5 3.5-6.5 6.5" />
          <path d="M7 7.5a8.5 8.5 0 0 1 10 0M7 16.5a8.5 8.5 0 0 0 10 0" strokeDasharray="1 1" />
        </svg>
      );
    case "icehockey":
    case "hockey":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <path d="M16.5 4L8 15.5l-3 1.5c-1 .5-1.5-.5-1-1.2l1.5-2.3" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="16" cy="17" rx="3" ry="1.2" fill={active ? "currentColor" : "none"} fillOpacity={0.3} />
          <path d="M13 17v1c0 .7 1.3 1.2 3 1.2s3-.5 3-1.2v-1" />
        </svg>
      );
    case "sepaktakraw":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18M3 12a9 9 0 0 0 18 0" />
          <path d="M5.5 5.5c4 1 9 4 13 13M5.5 18.5c4-1 9-4 13-13" />
        </svg>
      );
    case "fitness":
    case "bodybuilding":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <path d="M6.5 12h11" strokeWidth={2} strokeLinecap="round" />
          <rect x="4.5" y="8" width="2" height="8" rx="0.5" fill={active ? "currentColor" : "none"} fillOpacity={0.2} />
          <rect x="2.5" y="9.5" width="2" height="5" rx="0.5" />
          <rect x="17.5" y="8" width="2" height="8" rx="0.5" fill={active ? "currentColor" : "none"} fillOpacity={0.2} />
          <rect x="19.5" y="9.5" width="2" height="5" rx="0.5" />
        </svg>
      );
    case "athletics":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <path d="M3 16.5h16.5c.8 0 1.5-.7 1.5-1.5v-1l-3.5-3.5h-5.5l-2.5 3H5l-2 3z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5 10.5l-1.5 2M13 10.5l-1.5 2" strokeLinecap="round" />
          <path d="M3 16.5c.5-1.5 2-1.5 3.5 0" />
        </svg>
      );
    case "other":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={1.5} className={`${className} ${colorClass} transition-colors duration-200`}>
          <circle cx="12" cy="12" r="9" />
          <path d="M7.5 5.5A7.5 7.5 0 0 1 7.5 18.5" />
          <path d="M16.5 5.5A7.5 7.5 0 0 0 16.5 18.5" />
        </svg>
      );
  }
};

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

  const handleApplyA = () => {
    const selectedLabel = sportsA.find((s) => s.id === selectedA)?.label || "All";
    setToastMessage(`Filter Applied: ${selectedLabel}`);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleApplyB = () => {
    const selectedLabels = sportsB
      .filter((s) => selectedB[s.id])
      .map((s) => s.label);
    
    setToastMessage(`Filter Applied: ${selectedLabels.length} items selected`);
    setTimeout(() => setToastMessage(""), 2500);
  };

  return (
    <div className="w-full mt-10 overflow-hidden">
      {/* Visual A/B Simulator Shell */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center max-w-4xl mx-auto px-2">
        
        {/* Phone A: Traditional Grid Layout */}
        <div className="w-full flex flex-col items-center gap-4">
          <span className="text-xs sm:text-sm font-black text-[#37C556] uppercase tracking-widest text-center px-2">Version A: Icon-Centric Grid (Winner)</span>
          
          <div className="w-full max-w-[270px] sm:max-w-[300px] aspect-[9/18.5] border-[4px] border-neutral-900 rounded-[2.5rem] bg-[#9CA3AF] shadow-xl overflow-hidden relative flex flex-col">
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
            <div className="flex-grow bg-white overflow-y-auto hide-scrollbar p-3 sm:p-4 pb-32 rounded-t-3xl mt-[-8px] z-10">
              <div className="grid grid-cols-4 gap-y-3 gap-x-1 justify-items-center">
                {sportsA.map((sport) => {
                  const isSelected = selectedA === sport.id;
                  return (
                    <button 
                      key={sport.id}
                      onClick={() => setSelectedA(sport.id)}
                      className="flex flex-col items-center gap-1 p-0.5 sm:p-1 transition-transform active:scale-95 max-w-full"
                    >
                      <div 
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? "border-[#37C556] bg-[#37C556]/5"
                            : "border-neutral-200 bg-white"
                        }`}
                      >
                        <SportIcon id={sport.id} active={isSelected} className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className={`text-[8px] sm:text-[9px] font-bold text-center leading-none transition-colors duration-200 break-words max-w-full ${
                        isSelected ? "text-[#37C556]" : "text-neutral-500"
                      }`}>
                        {sport.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sticky Apply Button for A */}
            <div className="absolute bottom-0 left-0 w-full px-4 pt-4 pb-8 sm:px-6 sm:pt-5 sm:pb-10 bg-white border-t border-neutral-100 z-20 shrink-0 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
              <button 
                onClick={handleApplyA}
                className="w-full bg-[#37C556] hover:bg-[#2fa849] active:scale-[0.98] text-white text-xs font-black py-3 sm:py-4 rounded-xl shadow-md transition-all uppercase tracking-wider text-center"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* Phone B: Interactive Chips & Bottom Sheet */}
        <div className="w-full flex flex-col items-center gap-4">
          <span className="text-xs sm:text-sm font-black text-neutral-500 uppercase tracking-widest text-center px-2">Version B: Text-Heavy Chips</span>
          
          <div className="w-full max-w-[270px] sm:max-w-[300px] aspect-[9/18.5] border-[4px] border-neutral-900 rounded-[2.5rem] bg-[#4B5563] shadow-xl overflow-hidden relative flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="w-8 h-[2px] bg-neutral-800 rounded-full"></div>
            </div>

            {/* B Screen Header */}
            <div className="h-14 pt-4 px-4 flex items-center bg-[#434b57] text-white shrink-0">
              <svg className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            {/* B Screen Content */}
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
              <div className="flex-grow overflow-y-auto p-3 sm:p-4 flex flex-wrap gap-1.5 sm:gap-2 content-start pb-32 no-scrollbar">
                {sportsB.map((sport) => {
                  const isSelected = !!selectedB[sport.id];

                  return (
                    <button
                      key={sport.id}
                      onClick={() => toggleB(sport.id)}
                      className={`inline-flex items-center gap-1 px-2 py-1 sm:gap-1.5 sm:px-3 sm:py-1.5 rounded-full border text-[9px] sm:text-[10px] font-bold transition-all duration-150 active:scale-95 ${
                        isSelected
                          ? "border-[#37C556] bg-[#37C556]/10 text-[#37C556]"
                          : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300"
                      }`}
                    >
                      <SportIcon id={sport.id} active={isSelected} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{sport.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sticky Apply Button for B */}
              <div className="absolute bottom-0 left-0 w-full px-4 pt-4 pb-8 sm:px-6 sm:pt-5 sm:pb-10 bg-white border-t border-neutral-100 z-20 shrink-0 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
                <button 
                  onClick={handleApplyB}
                  className="w-full bg-[#37C556] hover:bg-[#2fa849] active:scale-[0.98] text-white text-xs font-black py-3 sm:py-4 rounded-xl shadow-md transition-all uppercase tracking-wider text-center"
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
