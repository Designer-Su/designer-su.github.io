import React from "react";

export default function SolidConnectionSolutions() {
  return (
    <div className="w-full bg-white text-neutral-900 flex flex-col gap-32 mb-32 overflow-hidden pt-24">
      {/* Solution 1: Consolidated Main Page */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-neutral-50 rounded-[3rem] mx-4 md:mx-6 md:w-[calc(100%-3rem)]">
        <div className="max-w-4xl text-center mb-16 z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white bg-blue-600">01</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">Solution</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Unified Information Experience
          </h3>
          <p className="text-lg text-neutral-600">
            We gathered scattered key information into a single main page, allowing users to navigate intuitively and take immediate action without friction.
          </p>
        </div>

        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 mt-12 md:mt-20">
          
          {/* Left: Scattered Components */}
          <div className="relative w-full md:w-[40%] aspect-square md:aspect-[4/3] flex items-center justify-center">
            <div className="absolute z-20 w-[45%] aspect-video rounded-lg border border-neutral-200 bg-white shadow-xl top-[10%] left-[5%] transform -rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
              <span className="text-neutral-400 font-bold text-[10px] md:text-xs text-center">Profile Card</span>
            </div>
            <div className="absolute z-20 w-[40%] aspect-square rounded-lg border border-neutral-200 bg-white shadow-xl bottom-[15%] left-[10%] transform -rotate-12 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
              <span className="text-neutral-400 font-bold text-[10px] md:text-xs text-center">Status Widget</span>
            </div>
            <div className="absolute z-20 w-[50%] aspect-[4/3] rounded-lg border border-neutral-200 bg-white shadow-xl top-[20%] right-[5%] transform rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
              <span className="text-neutral-400 font-bold text-[10px] md:text-xs text-center">Activity Feed</span>
            </div>
            <div className="absolute z-20 w-[45%] aspect-[21/9] rounded-lg border border-neutral-200 bg-white shadow-xl bottom-[25%] right-[0%] transform rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
              <span className="text-neutral-400 font-bold text-[10px] md:text-xs text-center">Navigation Menu</span>
            </div>
          </div>

          {/* Middle: Arrow */}
          <div className="flex flex-col items-center justify-center text-neutral-300 md:rotate-0 rotate-90 transform">
            <svg className="w-10 h-10 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* Right: Consolidated Main Page (Phone Mockup) */}
          <div className="relative w-full md:w-[40%] flex justify-center items-center">
            <div className="w-[180px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] md:rounded-[2.5rem] border-[4px] border-neutral-900 bg-white shadow-2xl flex flex-col items-center justify-center overflow-hidden relative transform hover:-translate-y-4 transition-transform duration-700">
              <div className="absolute top-0 w-full h-5 md:h-6 bg-neutral-900 flex justify-center items-start pt-1.5 md:pt-2 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2">
                <div className="w-8 md:w-10 h-1 bg-neutral-800 rounded-full"></div>
              </div>
              <span className="text-neutral-400 font-bold uppercase tracking-widest text-xs md:text-sm">Main View</span>
            </div>
          </div>

        </div>
      </section>

      {/* Solution 2: 9 Application Flows */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-white">
        <div className="max-w-4xl text-center mb-24 z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white bg-emerald-600">02</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">Solution</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Systematic 9-Step Application Flow
          </h3>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We broke down the complex application process into 9 intuitive screens, minimizing cognitive load. To reduce drop-off, we introduced a <strong>micro-interactive progress bar</strong> to visually chunk the journey and implemented <strong>real-time session autosave</strong>, preventing data loss and reducing user friction at each step.
          </p>
        </div>

        <div className="w-full max-w-[1400px] flex flex-col gap-16 md:gap-24 relative px-4">
          {/* Row 1 (Steps 1-5) */}
          <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-6 md:gap-8 justify-start md:justify-center items-center pb-8 md:pb-0 hide-scrollbar relative z-10 w-full">
            {[1, 2, 3, 4, 5].map((step, idx) => (
              <div key={step} className="flex flex-col items-center gap-6 shrink-0 relative group">
                <div className="w-[160px] md:w-[180px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <span className="text-neutral-400 font-bold text-xs">Step {step}</span>
                </div>
                <span className="text-sm font-bold text-neutral-600">Phase {step}</span>
                
                {/* Arrow to the right (only for 1-4) */}
                {idx < 4 && (
                  <div className="hidden md:block absolute right-[-28px] top-[40%] -translate-y-1/2 text-neutral-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Curved connecting arrow for desktop */}
          <div className="hidden md:block absolute top-[40%] right-[10%] lg:right-[15%] w-[120px] h-[150px] border-r-2 border-b-2 border-neutral-200 rounded-br-[50px] -z-10 mt-12"></div>
          <div className="hidden md:block absolute top-[40%] left-[10%] lg:left-[15%] w-[120px] h-[150px] border-l-2 border-t-2 border-neutral-200 rounded-tl-[50px] -z-10 mt-[150px]">
             <div className="absolute top-0 left-[-6px] text-neutral-200 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 transform -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </div>
          </div>

          {/* Row 2 (Steps 6-9) */}
          <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-6 md:gap-8 justify-start md:justify-center items-center pb-8 md:pb-0 hide-scrollbar relative z-10 w-full mt-8 md:mt-12">
            {[6, 7, 8, 9].map((step, idx) => (
              <div key={step} className="flex flex-col items-center gap-6 shrink-0 relative group">
                <div className="w-[160px] md:w-[180px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <span className="text-neutral-400 font-bold text-xs">Step {step}</span>
                </div>
                <span className="text-sm font-bold text-neutral-600">Phase {step}</span>

                {/* Arrow to the right (only for 6-8) */}
                {idx < 3 && (
                  <div className="hidden md:block absolute right-[-28px] top-[40%] -translate-y-1/2 text-neutral-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution 3: Mentor, Mentee, and Community */}
      <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-neutral-900 text-white overflow-hidden rounded-[3rem] mx-4 md:mx-6 md:w-[calc(100%-3rem)] mb-12">
        <div className="max-w-4xl text-center mb-32 z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-neutral-900 bg-purple-400">03</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">Solution</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Verified Mentors & Mentees
          </h3>
          <p className="text-lg text-white/70">
            Connecting trustworthy mentors with mentees seeking growth, we designed a platform that fosters continuous, meaningful relationships through an integrated community.
          </p>
        </div>

        <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[21/9] flex items-center justify-center mt-12 md:mt-0">
          
          {/* Background Community Image/Mockup */}
          <div className="absolute z-10 w-[90%] md:w-[50%] aspect-video rounded-2xl border border-white/10 bg-white/5 shadow-2xl flex items-center justify-center overflow-hidden top-[-15%] md:top-[-20%] transform opacity-60">
            <span className="text-white/40 font-bold tracking-widest text-lg uppercase">Community View</span>
          </div>

          {/* Left: Mentor View */}
          <div className="absolute z-20 w-[45%] md:w-[22%] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-700 bg-neutral-950 shadow-2xl left-[5%] md:left-[15%] transform -rotate-3 hover:-translate-y-4 hover:rotate-0 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-0 w-full h-5 bg-neutral-800 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%]">
              <div className="w-10 h-1 bg-neutral-700 rounded-full"></div>
            </div>
            <span className="text-white/50 font-bold uppercase tracking-widest text-xs">Mentor View</span>
          </div>

          {/* Right: Mentee View */}
          <div className="absolute z-20 w-[45%] md:w-[22%] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-700 bg-neutral-950 shadow-2xl right-[5%] md:right-[15%] transform rotate-3 hover:-translate-y-4 hover:rotate-0 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-0 w-full h-5 bg-neutral-800 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%]">
              <div className="w-10 h-1 bg-neutral-700 rounded-full"></div>
            </div>
            <span className="text-white/50 font-bold uppercase tracking-widest text-xs">Mentee View</span>
          </div>
        </div>
      </section>

      {/* Cross-Functional Collaboration & Influence Story */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-neutral-50 rounded-[3rem] mx-4 md:mx-6 md:w-[calc(100%-3rem)] mb-12">
        <div className="max-w-4xl text-center mb-12 z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white bg-indigo-600">04</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">Collaboration & Influence</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Role-Based UI & Developer Alignment
          </h3>
          <p className="text-lg text-neutral-600">
            How we resolved a major conflict between user experience necessity and engineering constraints to ship on time.
          </p>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          {/* Card 1: The Conflict */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col gap-4">
            <div className="text-red-500 font-black uppercase tracking-wider text-xs flex items-center gap-2">
              The Conflict
            </div>
            <h4 className="text-lg font-black text-neutral-900">UX Necessity vs. Dev Timeline</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Design argued that Mentors (reviewing profiles, managing schedules) and Mentees (searching mentors, tracking status) had completely different mental models, requiring separate, dedicated dashboards. 
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              However, Engineering strongly opposed this, stating that duplicating pages and endpoints would double development time, risking the 5-month launch deadline.
            </p>
          </div>

          {/* Card 2: The Rationale */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col gap-4">
            <div className="text-amber-500 font-black uppercase tracking-wider text-xs flex items-center gap-2">
              The Rationale
            </div>
            <h4 className="text-lg font-black text-neutral-900">Preventing Cognitive Load</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              As Lead Designer and PM, I presented user journey maps showing that merging the two views would create severe cognitive clutter, leading to an estimated 40% increase in bounce rates. 
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              I proved that merging conflicting dashboards would also lead to technical debt (code complexity) and buggy user sessions down the road.
            </p>
          </div>

          {/* Card 3: The Resolution */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col gap-4">
            <div className="text-emerald-500 font-black uppercase tracking-wider text-xs flex items-center gap-2">
              The Resolution
            </div>
            <h4 className="text-lg font-black text-neutral-900">Unified Shell & Dynamic Content</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              I proposed a Unified Dashboard Shell architecture. The core layout, sidebar navigation structure, and database profile tables were kept 100% shared to minimize backend engineering.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Only the internal view panels were dynamically swapped based on the user's logged-in role (Mentor vs. Mentee), saving 40% of dev resources while preserving tailored usability.
            </p>
          </div>
        </div>

        {/* Alignment Summary Bar */}
        <div className="w-full max-w-5xl mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col gap-2">
          <span className="text-indigo-900 font-black text-lg">Key Learning</span>
          <p className="text-sm text-indigo-750 max-w-4xl leading-relaxed">
            "Great UX isn't about fighting engineering; it's about understanding their database and timeline constraints, then designing a modular architecture that solves both the user's and the developer's problems."
          </p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
