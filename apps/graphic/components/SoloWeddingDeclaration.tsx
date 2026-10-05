"use client";

import Image from "next/image";

const declarationSteps = [
  { 
    id: 1, 
    src: "/SW/declaration/declaration.png", 
    title: "Drafting the Vow",
    desc: "Users review guided prompts and write down their personal promises, preparing their thoughts before speaking."
  },
  { 
    id: 2, 
    src: "/SW/declaration/declaration2.png", 
    title: "Ceremonial Recording",
    desc: "A dedicated recording interface captures the user's voice as they speak their self-marriage vow aloud."
  },
  { 
    id: 3, 
    src: "/SW/declaration/declaration3.png", 
    title: "Vow Archiving & Playback",
    desc: "The recorded audio is locked into a permanent archive, allowing users to replay their vows to reinforce self-commitment."
  },
];

export default function SoloWeddingDeclaration() {
  return (
    <section className="w-full bg-[#FAFAFA] pb-28 pt-16 text-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A93E32] text-xs font-black text-white">
              03
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
              Solo Wedding Declaration
            </span>
          </div>
          <h3 className="text-3xl font-black tracking-tight md:text-5xl">
            The Voice Vow Ritual
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            Hearing one&apos;s own voice read a self-promise adds psychological presence and sensory weight, turning a simple text entry into a meaningful auditory milestone.
          </p>
        </div>

        {/* 3 Grid items (3 columns, 1 row) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 justify-items-center max-w-5xl mx-auto">
          {declarationSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center gap-5 max-w-[280px] hover:-translate-y-2 transition-transform duration-300">
              {/* Thin iPhone mockup */}
              <div className="w-[180px] sm:w-[220px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative">
                {/* iPhone notch bezel */}
                <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                  <div className="w-8 h-[2px] bg-neutral-800 rounded-full"></div>
                </div>
                {/* Content Image filling the entire mockup */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={step.src}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 240px"
                    className="object-cover select-none pointer-events-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-black text-neutral-900 tracking-tight">
                  {step.title}
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
