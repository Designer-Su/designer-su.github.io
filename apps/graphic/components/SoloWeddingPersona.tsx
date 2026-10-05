"use client";

import Image from "next/image";

export default function SoloWeddingPersona() {
  return (
    <div className="mt-16 w-full max-w-4xl mx-auto">
      {/* Badge & Section Title */}
      <div className="text-center mb-10">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Target User</span>
        <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 mt-1">
          User Persona: Lee Dael
        </h4>
        <p className="mt-2 text-neutral-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Understanding the emotional needs and pain points of single professionals seeking personal milestones.
        </p>
      </div>

      {/* Persona Card */}
      <div className="bg-neutral-50/50 border border-neutral-200/60 rounded-3xl p-6 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col md:grid md:grid-cols-[280px_1fr] gap-8 md:gap-10">
        
        {/* Left Column: Portrait & Profile Chips */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-neutral-200/60 pb-8 md:pb-0 md:pr-10">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm mb-4">
            <Image
              src="/SW/lee_dael.png"
              alt="Lee Dael Portrait"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
          
          <h5 className="text-xl font-bold text-neutral-900">Lee Dael (이다엘)</h5>
          <span className="text-xs font-bold text-[#A93E32] mt-1">Brand Marketer • Age 31</span>
          
          {/* Demographic Chips */}
          <div className="flex flex-wrap gap-1.5 mt-4 justify-center md:justify-start w-full">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#A93E32]/10 text-[#A93E32] border border-[#A93E32]/20">
              1-Person Household
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-200/50 text-neutral-600 border border-neutral-300/30">
              Seoul, Korea
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-200/50 text-neutral-600 border border-neutral-300/30">
              Career-Driven
            </span>
          </div>

          <blockquote className="mt-6 p-4 rounded-2xl bg-white border border-neutral-200/50 text-xs font-bold text-[#A93E32] italic relative leading-relaxed">
            &ldquo;I want to celebrate my own growth and self-promises just as solemnly as a wedding, but entirely for myself.&rdquo;
          </blockquote>
        </div>

        {/* Right Column: Bio, Traits, Goals & Pain Points */}
        <div className="flex flex-col gap-6 justify-center">
          {/* Bio */}
          <div>
            <h6 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Background & Context</h6>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Dael is a 31-year-old marketer highly dedicated to her career. While witnessing peers receive public validation through marriage, she notes her own key milestones—career growth, burnout recovery, and buying her first apartment—go uncelebrated. She seeks a premium, private ritual to formally honor her self-reliance and declare lasting promises of self-love.
            </p>
          </div>

          {/* Traits Chips */}
          <div>
            <h6 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">User Traits</h6>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 shadow-sm">
                Independent Lifestyle
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 shadow-sm">
                Aesthetic-Oriented
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 shadow-sm">
                Mindful & Reflective
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 shadow-sm">
                High self-efficacy
              </span>
            </div>
          </div>

          {/* Grid for Goals & Pain Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-neutral-200/40">
            {/* Goals */}
            <div>
              <h6 className="text-xs font-bold uppercase tracking-wider text-[#A93E32] mb-3">Needs & Goals</h6>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex gap-2">
                  <span className="text-[#A93E32] font-black">•</span>
                  <span><strong>Validate Self-Growth:</strong> Needs a premium, deliberate ritual to mark her current life transitions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#A93E32] font-black">•</span>
                  <span><strong>Structured Vow Archive:</strong> Desires a permanent space to record and replay self-promises.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#A93E32] font-black">•</span>
                  <span><strong>Ceremonial UI Experience:</strong> Prefers an elegant, minimal visual pacing that feels ceremonial.</span>
                </li>
              </ul>
            </div>

            {/* Pain Points */}
            <div>
              <h6 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">Frustrations & Hurdles</h6>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex gap-2">
                  <span className="text-neutral-400 font-black">•</span>
                  <span><strong>Limited Social Rituals:</strong> Celebration culture is almost exclusively focused on traditional milestones.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-neutral-400 font-black">•</span>
                  <span><strong>Societal Judgment:</strong> Reluctant to share self-celebration publicly due to potential misunderstanding.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-neutral-400 font-black">•</span>
                  <span><strong>Transient Documentation:</strong> Simple journals fail to capture the sensory weight of emotional changes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
