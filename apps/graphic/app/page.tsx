"use client";

import React, { useState } from "react";
import Image from "next/image";
import GraphicPathShowcase from "@/components/GraphicPathShowcase";
import GraphicPatternCanvas from "@/components/GraphicPatternCanvas";
import { portfolioData } from "@/data/portfolio";

export default function GraphicAppPage() {
  const [activeGraphicApp, setActiveGraphicApp] = useState<"app1" | "app2">("app1");
  const graphicBrandingProjects = portfolioData.brandingProjects;
  const mainAppProject = portfolioData.projects.find((p) => p.slug === "solid-connection") || portfolioData.projects[0];

  return (
    <div className="py-20 bg-white text-neutral-950 font-sans">
      {/* 1. Hero Section */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600">
              Independent Graphic App (@designer-su/graphic)
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Graphic App Suite
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed font-normal">
            Independent Graphic Application package containing specialized interactive graphic engines: Bezier Vector Path Generator and Dynamic Generative Pattern Canvas.
          </p>
        </div>
      </section>

      {/* 2. Main App Integration Info */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-neutral-950 text-white p-8 md:p-12 border border-neutral-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-purple-300 border border-white/10">
                    Monorepo Main App Integration
                  </span>
                  <span className="text-xs font-mono text-neutral-400">@designer-su/main</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                  Main Product App: {mainAppProject.title}
                </h2>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {mainAppProject.summary}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full md:w-auto">
                <a
                  href="http://localhost:3000"
                  className="px-6 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all text-center shadow-lg hover:scale-105 active:scale-95"
                >
                  Open Main App (:3000)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Graphic Apps Split Interactive Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
                Graphic App Interactive Tools
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight">
                Graphic Apps Engine
              </h2>
            </div>

            {/* App 1 vs App 2 Tab Controls */}
            <div className="flex items-center gap-2 p-1.5 bg-neutral-100 rounded-full border border-neutral-200 self-start md:self-auto">
              <button
                onClick={() => setActiveGraphicApp("app1")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeGraphicApp === "app1"
                    ? "bg-purple-600 text-white shadow-md scale-105"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                Graphic Sub-App 01: Path Engine
              </button>
              <button
                onClick={() => setActiveGraphicApp("app2")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeGraphicApp === "app2"
                    ? "bg-cyan-600 text-white shadow-md scale-105"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                Graphic Sub-App 02: Pattern Canvas
              </button>
            </div>
          </div>

          {/* Render Active Graphic App */}
          {activeGraphicApp === "app1" ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 p-4 rounded-2xl border border-purple-100">
                <span>Graphic Sub-App 01 — Bezier Vector Path Engine</span>
                <span>Interactive Tool</span>
              </div>
              <GraphicPathShowcase />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-50 p-4 rounded-2xl border border-cyan-100">
                <span>Graphic Sub-App 02 — Generative Brand Pattern Canvas</span>
                <span>Interactive Tool</span>
              </div>
              <GraphicPatternCanvas />
            </div>
          )}
        </div>
      </section>

      {/* 4. Visual Identity & Graphic Projects Showcase Grid */}
      <section className="px-6 py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
                Graphic Identity Systems
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-1">
                Visual Identity Systems
              </h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-md">
              Graphic design guidelines, corporate identity, logo systems, and visual tokens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {graphicBrandingProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100">
                  <Image
                    src={project.thumbnail || project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-neutral-800 shadow-sm border border-neutral-200/60">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-neutral-950 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 text-xs md:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
