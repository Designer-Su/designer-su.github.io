"use client";

import Image from "next/image";

const weddingTypes = [
  { id: 1, src: "/SW/type/Group 1707478097.png", title: "Type 01: Warm Ivory" },
  { id: 2, src: "/SW/type/Group 1707478106.png", title: "Type 02: Classic Rose" },
  { id: 3, src: "/SW/type/Group 1707478107.png", title: "Type 03: Forest Hues" },
  { id: 4, src: "/SW/type/Group 1707478108.png", title: "Type 04: Twilight Blue" },
  { id: 5, src: "/SW/type/Group 1707478109.png", title: "Type 05: Golden Sunset" },
  { id: 6, src: "/SW/type/Group 1707478110.png", title: "Type 06: Pure White" },
];

export default function SoloWeddingTypes() {
  return (
    <section className="w-full bg-white pb-28 pt-16 text-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A93E32] text-xs font-black text-white">
              02
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
              Solo Wedding Definition
            </span>
          </div>
          <h3 className="text-3xl font-black tracking-tight md:text-5xl">
            Defining My Solo Wedding
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            Through the personalization survey, the user defines their self-celebration by selecting one of six distinct solo wedding styles.
          </p>
        </div>

        {/* 6 Grid items (3 columns, 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 justify-items-center max-w-4xl mx-auto">
          {weddingTypes.map((type) => (
            <div key={type.id} className="flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
              {/* Thin iPhone mockup */}
              <div className="w-[180px] sm:w-[220px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative">
                {/* iPhone notch bezel */}
                <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                  <div className="w-8 h-[2px] bg-neutral-800 rounded-full"></div>
                </div>
                {/* Content Image filling the entire mockup */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={type.src}
                    alt={type.title}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 240px"
                    className="object-cover select-none pointer-events-none"
                  />
                </div>
              </div>
              <span className="text-xs md:text-sm font-bold text-neutral-500 tracking-wide uppercase">
                {type.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
