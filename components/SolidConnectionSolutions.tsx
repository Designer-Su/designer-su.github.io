import React from "react";

export default function SolidConnectionSolutions() {
  return (
    <div className="w-full bg-white text-neutral-900 flex flex-col gap-32 mb-32 overflow-hidden pt-24">
      {/* Solution 1: Consolidated Main Page */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-neutral-50 rounded-[3rem] mx-4 md:mx-6 md:w-[calc(100%-3rem)]">
        <div className="max-w-4xl text-center mb-6 z-10">
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

        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8 mt-4 md:mt-6">
          
          {/* Left: Scattered Components */}
          <div className="relative w-full md:w-[46%] aspect-square md:aspect-[4/3] flex items-center justify-center">
            <img
              src="/SC/Main/score.png"
              alt="Score Widget"
              className="absolute z-20 w-[48%] h-auto top-[5%] left-[8%] transform -rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-500"
            />
            <img
              src="/SC/Main/chanel%20cards.png"
              alt="Channel Card"
              className="absolute z-20 w-[64%] h-auto top-[18%] right-[2%] transform rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-500"
            />
            <img
              src="/SC/Main/main%20btn.png"
              alt="Main Button"
              className="absolute z-30 w-[38%] h-auto top-[48%] left-[2%] transform -rotate-12 hover:-translate-y-2 hover:rotate-0 transition-all duration-500"
            />
            <img
              src="/SC/Main/chanel%20cards%202.png"
              alt="Channel Card 2"
              className="absolute z-20 w-[68%] h-auto -bottom-[6%] right-[5%] transform rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-500"
            />
          </div>

          {/* Middle: Arrow */}
          <div className="flex flex-col items-center justify-center text-neutral-300 md:rotate-0 rotate-90 transform">
            <svg className="w-10 h-10 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* Right: Consolidated Main Page (Phone Mockup) */}
          <div className="relative w-full md:w-[40%] flex justify-center items-center">
            <div className="w-[180px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] md:rounded-[2.5rem] border-[4px] border-neutral-900 bg-[#5950F6] shadow-2xl overflow-hidden relative transform hover:-translate-y-4 transition-transform duration-700">
              {/* Notch */}
              <div className="absolute top-0 w-full h-5 md:h-6 bg-neutral-900 flex justify-center items-start pt-1.5 md:pt-2 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                <div className="w-8 md:w-10 h-1 bg-neutral-800 rounded-full"></div>
              </div>
              {/* Scrollable Screen */}
              <div className="w-full h-full overflow-y-auto hide-scrollbar scroll-smooth z-10">
                <img
                  src="/SC/Main/Main%20Eng.png"
                  alt="Solid Connection Main View"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Solution 2: 9 Application Flows */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 pt-8 pb-20 bg-white">
        <div className="max-w-4xl text-center mb-10 z-10">
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

        <div className="w-full max-w-[1400px] flex flex-col gap-8 md:gap-12 relative px-4">
          {/* Row 1 (Steps 1-5) */}
          <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-6 md:gap-8 justify-start md:justify-center items-center pb-8 md:pb-0 hide-scrollbar relative z-10 w-full">
            {[1, 2, 3, 4, 5].map((step, idx) => (
              <div key={step} className="flex flex-col items-center gap-6 shrink-0 relative group z-10 hover:z-20">
                <div className="w-[160px] md:w-[180px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative group-hover:-translate-y-4 group-hover:scale-[1.08] group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <img
                    src={`/SC/Apply/${step}.png`}
                    alt={`Apply Step ${step}`}
                    className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
                  />
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
          <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-6 md:gap-8 justify-start md:justify-center items-center pb-8 md:pb-0 hide-scrollbar relative z-10 w-full">
            {[6, 7, 8, 9].map((step, idx) => (
              <div key={step} className="flex flex-col items-center gap-6 shrink-0 relative group z-10 hover:z-20">
                <div className="w-[160px] md:w-[180px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative group-hover:-translate-y-4 group-hover:scale-[1.08] group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <img
                    src={`/SC/Apply/${step}.png`}
                    alt={`Apply Step ${step}`}
                    className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
                  />
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
      <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-white text-neutral-900 overflow-hidden mb-12">
        <div className="max-w-4xl text-center mb-12 z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white bg-purple-600">03</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">Solution</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-neutral-900">
            Verified Mentors & Mentees
          </h3>
          <p className="text-lg text-neutral-600">
            Connecting trustworthy mentors with mentees seeking growth, we designed a platform that fosters continuous, meaningful relationships through an integrated community.
          </p>
        </div>

        <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[21/9] flex items-center justify-center mt-16 md:mt-16">
          
          {/* Center: Mentor Profile */}
          <div className="absolute z-10 w-[45%] md:w-[22%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transform hover:-translate-y-2 transition-all duration-500">
            <div className="w-full aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
              </div>
              <img
                src="/SC/Mentor/Mentor%20page.png"
                alt="Mentor Profile"
                className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
              />
            </div>
            <span className="text-xs md:text-sm font-bold text-neutral-600 tracking-wide uppercase">Mentor Profile</span>
          </div>

          {/* Left: Mentor View */}
          <div className="absolute z-20 w-[45%] md:w-[22%] left-[5%] md:left-[15%] flex flex-col items-center gap-4 transform -rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-500">
            <div className="w-full aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
              </div>
              <img
                src="/SC/Mentor/mentor.png"
                alt="Mentor Home"
                className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
              />
            </div>
            <span className="text-xs md:text-sm font-bold text-neutral-600 tracking-wide uppercase">Mentor Home</span>
          </div>

          {/* Right: Mentee View */}
          <div className="absolute z-20 w-[45%] md:w-[22%] right-[5%] md:right-[15%] flex flex-col items-center gap-4 transform rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-500">
            <div className="w-full aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-10 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
              </div>
              <img
                src="/SC/Mentor/mentee.png"
                alt="Mentee Home"
                className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
              />
            </div>
            <span className="text-xs md:text-sm font-bold text-neutral-600 tracking-wide uppercase">Mentee Home</span>
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
            How we bridged the gap between user needs and engineering limits to launch our product on time.
          </p>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          {/* Card 1: The Conflict */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col gap-4">
            <div className="text-red-500 font-black uppercase tracking-wider text-xs flex items-center gap-2">
              The Conflict
            </div>
            <h4 className="text-lg font-black text-neutral-900">User Needs vs. Dev Timeline</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We wanted to build two separate dashboards: one for Mentors to manage schedules, and one for Mentees to search for help. They had completely different goals, so they needed different interfaces.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              However, developers opposed this. Building two separate dashboards would take twice as long, making us miss our 5-month launch deadline.
            </p>
          </div>

          {/* Card 2: The Rationale */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col gap-4">
            <div className="text-amber-500 font-black uppercase tracking-wider text-xs flex items-center gap-2">
              The Rationale
            </div>
            <h4 className="text-lg font-black text-neutral-900">Why We Couldn't Compromise</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Combining both dashboards into one would make the page too messy and confuse our users, causing many of them to leave the app.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              It would also create messy code, leading to bugs and higher maintenance costs in the future. We needed a clean split for both users and code quality.
            </p>
          </div>

          {/* Card 3: The Resolution */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col gap-4">
            <div className="text-emerald-500 font-black uppercase tracking-wider text-xs flex items-center gap-2">
              The Resolution
            </div>
            <h4 className="text-lg font-black text-neutral-900">One Shell, Two Experiences</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              I proposed a smart compromise: build one shared framework. The main navigation sidebar and layout were kept identical, which saved developers from coding everything twice.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We only swapped the content inside based on who logged in (Mentor or Mentee). This saved 40% of development time while keeping the experience clean and simple.
            </p>
          </div>
        </div>

        {/* Alignment Summary Bar */}
        <div className="w-full max-w-5xl mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col gap-2">
          <span className="text-indigo-900 font-black text-lg">Key Takeaway</span>
          <p className="text-sm text-indigo-750 max-w-4xl leading-relaxed">
            "Good design isn't about fighting developers. It's about understanding their limits and finding a modular solution that works for both the user and the team."
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
