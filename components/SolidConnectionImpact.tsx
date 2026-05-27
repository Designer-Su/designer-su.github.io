import React from 'react';

export default function SolidConnectionImpact() {
  return (
    <section id="impact" className="px-4 md:px-6 mb-24 py-20 bg-neutral-950 text-white rounded-[3rem] mx-4 md:mx-6 md:w-[calc(100%-3rem)] xl:mx-auto max-w-[1400px] scroll-mt-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 px-2 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-sm font-black uppercase tracking-[0.28em] text-white/40 mb-4">Outcome & Impact</h2>
          <p className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Validated Success & Learnings</p>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/50">
            Based on GA4 Data: Jan 1, 2025 - Dec 16, 2025
          </span>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/5 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:bg-white/10 transition-colors">
            <span className="text-3xl md:text-4xl font-black text-blue-400 mb-2">2.0k</span>
            <span className="text-sm font-bold text-white/60">Active Users</span>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:bg-white/10 transition-colors">
            <span className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">2.0k</span>
            <span className="text-sm font-bold text-white/60">New Users</span>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:bg-white/10 transition-colors">
            <span className="text-3xl md:text-4xl font-black text-purple-400 mb-2">83k</span>
            <span className="text-sm font-bold text-white/60">Total Events</span>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:bg-white/10 transition-colors">
            <span className="text-3xl md:text-4xl font-black text-amber-400 mb-2">2m 56s</span>
            <span className="text-sm font-bold text-white/60">Avg. Session Time</span>
          </div>
        </div>

        {/* Qualitative & Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: User Voice & Traffic Patterns */}
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col justify-start h-full">
            <h3 className="text-2xl font-black mb-8 text-white">Qualitative Feedback</h3>
            <div className="flex flex-col gap-6 mb-12">
              <div className="bg-neutral-900 rounded-2xl p-6 border-l-4 border-blue-500 shadow-xl">
                <p className="text-lg font-medium text-white/90 leading-relaxed italic">
                  "This finally makes the exchange application predictable."
                </p>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 border-l-4 border-emerald-500 shadow-xl">
                <p className="text-lg font-medium text-white/90 leading-relaxed italic">
                  "I don't need to ask seniors every semester anymore."
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-black mb-6 text-white">Traffic & Acquisition</h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-purple-400 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Strong Seasonality
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Traffic spikes heavily during Jan-Feb and Sep-Oct, aligning perfectly with university application periods. This indicates the product is currently functioning as a highly trusted <strong>"season-specific problem-solving tool"</strong> rather than a habitual platform.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Community-Driven Growth
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Referral data shows significant organic diffusion through university communities (e.g., Everytime) and messengers (Kakao). Word-of-mouth is strong among the target demographic.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Analysis & Areas for Improvement */}
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col justify-start h-full">
            <h3 className="text-2xl font-black mb-6 text-white">Analysis & Next Steps</h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-red-400 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  High Churn on First Screen
                </h4>
                <p className="text-white/70 leading-relaxed">
                  While inner information pages boast excellent engagement (e.g., School List at 5.6% churn), the Main Page suffers from a <strong>21.4% churn rate</strong>. This reveals a missing or weak Call-to-Action (CTA) upon first landing.
                </p>
              </div>

              {/* Mini Chart for Page Views & Churn */}
              <div className="my-2 bg-neutral-900 rounded-xl p-5 border border-white/5">
                <div className="flex justify-between text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
                  <span>Page</span>
                  <span className="text-right">Views / Churn</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  {/* Bar 1 */}
                  <div className="relative">
                    <div className="flex justify-between text-sm font-bold text-white mb-1 relative z-10">
                      <span>Main Page</span>
                      <span className="text-red-400">24k / 21.4%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-500/80 h-full w-[100%] rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Bar 2 */}
                  <div className="relative">
                    <div className="flex justify-between text-sm font-bold text-white mb-1 relative z-10">
                      <span>Beginner's Guide</span>
                      <span className="text-amber-400">6.3k / 12.5%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400/80 h-full w-[25%] rounded-full"></div>
                    </div>
                  </div>

                  {/* Bar 3 */}
                  <div className="relative">
                    <div className="flex justify-between text-sm font-bold text-white mb-1 relative z-10">
                      <span>School List</span>
                      <span className="text-emerald-400">3.9k / 5.6%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500/80 h-full w-[15%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <h4 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Actionable Strategies
                </h4>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                    <span className="text-sm font-bold text-emerald-400 block mb-1">1. Main UX Simplification</span>
                    <p className="text-sm text-white/70">Unify the first-screen CTA to guide users to core actions within 60 seconds of entry.</p>
                  </div>
                  <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                    <span className="text-sm font-bold text-emerald-400 block mb-1">2. Retention Experiments</span>
                    <p className="text-sm text-white/70">Implement "Save School" features and "Deadline D-3 Alerts" to encourage repeat visits and track 7/30-day retention.</p>
                  </div>
                  <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                    <span className="text-sm font-bold text-emerald-400 block mb-1">3. Data Integrity</span>
                    <p className="text-sm text-white/70">Establish explicit conversion events (e.g., School Search, Signup) and implement robust UTM tagging for community channels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
