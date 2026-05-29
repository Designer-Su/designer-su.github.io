import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import ProjectTOC from "@/components/ProjectTOC";
import UserJourneyCarousel from "@/components/UserJourneyCarousel";
import SolidConnectionDesignSystem from "@/components/SolidConnectionDesignSystem";
import SolidConnectionSolutions from "@/components/SolidConnectionSolutions";
import SolidConnectionImpact from "@/components/SolidConnectionImpact";
import CameraFiSolutions from "@/components/CameraFiSolutions";
import SmartFridgeSolutions from "@/components/SmartFridgeSolutions";
import SmartFridgeUserFlowMap from "@/components/SmartFridgeUserFlowMap";
import SoloWeddingResearchCharts from "@/components/SoloWeddingResearchCharts";
import SolidConnectionUserFlowMap from "@/components/SolidConnectionUserFlowMap";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function generateStaticParams() {
  return [
    ...portfolioData.projects,
    ...portfolioData.brandingProjects,
    ...portfolioData.productProjects,
  ].map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const uxProject = portfolioData.projects.find((p) => p.slug === resolvedParams.slug);
  const brandingProject = portfolioData.brandingProjects.find((p) => p.slug === resolvedParams.slug);
  const productProject = portfolioData.productProjects.find((p) => p.slug === resolvedParams.slug);

  if (brandingProject) {
    return <BrandingProjectPage project={brandingProject} />;
  }

  if (productProject) {
    return <ProductProjectPage project={productProject} />;
  }

  const project = uxProject;

  if (!project) {
    notFound();
  }

  const isRealProject = project.slug === 'solid-connection' || project.slug === 'camerafi-studio';
  const isSolidConnection = project.slug === 'solid-connection';
  const solidConnectionProblemImage = isSolidConnection
    ? "/SC/Solid%20Connection%20Problem.png"
    : null;
  const cameraFiResearchChart = project.slug === 'camerafi-studio'
    ? (project.research as any).chart
    : null;
  const cameraFiResearchPalette = project.slug === 'camerafi-studio' && project.colors && project.colors.length > 0
    ? project.colors
    : ["#2563eb", "#4f46e5", "#7c3aed", "#94a3b8"];
  const cameraFiResearchChartSegments = cameraFiResearchChart
    ? cameraFiResearchChart.items.map((item: any, idx: number) => {
        const startPct = cameraFiResearchChart.items
          .slice(0, idx)
          .reduce((sum: number, prev: any) => sum + prev.value, 0);
        const endPct = startPct + item.value;
        return {
          label: item.label,
          value: item.value,
          color: cameraFiResearchPalette[idx % cameraFiResearchPalette.length],
          startDeg: startPct * 3.6,
          endDeg: endPct * 3.6,
        };
      })
    : [];

  const labels = isRealProject
    ? {
        overview: "Project Overview",
        problem: "Background & Challenge",
        research: "Research & Insights",
        ideation: "Design Strategy",
        design: project.slug === 'solid-connection' ? "The Solution" : "Design Process",
        hifi: "Final Solution",
        testing: "Validation",
        impact: "Outcome"
      }
    : {
        overview: "Overview",
        problem: "Background & Problem",
        research: "Research & Insights",
        ideation: "Ideation & UX Strategy",
        design: "Design Solution",
        hifi: "Final Solution",
        testing: "Usability Testing",
        impact: "Impact & Learnings"
      };

  const tocSections = [
    { id: "overview", label: labels.overview },
    { id: "problem", label: labels.problem },
    { id: "research", label: labels.research },
    { id: "ideation", label: labels.ideation },
    ...(project.testing && project.testing.length > 0 ? [{ id: "testing", label: labels.testing }] : []),
    { id: "design", label: labels.design },
    ...(isRealProject && (project.design as any).hiFiGallery ? [{ id: "hifi", label: labels.hifi }] : []),
    { id: "impact", label: labels.impact }
  ];

  return (
    <article className="bg-white pb-32 font-sans text-neutral-950">
      {/* 1. Hero Section & Main Image */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="max-w-5xl mx-auto relative aspect-video w-full overflow-hidden rounded-xl bg-foreground/5 shadow-sm border border-foreground/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover ${project.imagePosition || "object-center"}`}
            priority
          />
        </div>
      </section>

      <ProjectTOC sections={tocSections} />

      {/* 2. Overview Bar */}
      <section id="overview" className="px-6 mb-24 border-b border-neutral-200 pb-12 pt-12 scroll-mt-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-2">Year</h3>
            <p className="font-semibold text-lg">{project.overview.year}</p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-2">Duration</h3>
            <p className="font-semibold text-lg">{project.overview.duration}</p>
          </div>
          <div>
            <div>
              <h3 className="font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-2">Role</h3>
              <p className="font-semibold text-lg whitespace-pre-line leading-relaxed">{project.overview.role}</p>
            </div>
          </div>
          {project.overview.team && (
            <div>
              <h3 className="font-semibold text-neutral-400 uppercase tracking-[0.2em] mb-2">Team</h3>
              <p className="font-semibold text-lg whitespace-pre-line leading-relaxed">{project.overview.team}</p>
            </div>
          )}
          {(project.overview.web || project.overview.git) && (
            <div className="col-span-1 md:col-span-2 mt-6 flex flex-wrap gap-4">
              {project.overview.web && (
                <a href={project.overview.web} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/10 bg-foreground/5 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-bold text-sm uppercase tracking-wider">
                  {project.overview.logo ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center border border-foreground/10 flex-shrink-0">
                      <Image src={project.overview.logo} alt="Logo" fill className="object-contain p-1 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  ) : (
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">🌐</span>
                  )}
                  Visit Website
                </a>
              )}
              {project.overview.git && (
                <a href={project.overview.git} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/10 bg-foreground/5 hover:bg-foreground hover:text-background transition-all duration-300 font-bold text-sm uppercase tracking-wider">
                  <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 3. Background & Problem */}
      <section id="problem" className="px-6 mb-24 scroll-mt-32">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400">{labels.problem}</h2>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {(project as any).userProblem && (project as any).businessGoal && (project as any).designHypothesis ? (
            <div className="flex flex-col w-full border-b border-neutral-200/80">
              {/* Row 1: User Problem */}
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12 py-8 md:py-10 border-t border-neutral-200/80 items-start">
                <span className="font-sans tracking-[0.2em] text-xs md:text-sm text-neutral-800 font-extrabold uppercase md:pt-1">
                  USER PROBLEM
                </span>
                <div className="flex flex-col gap-6 w-full">
                  <div className="text-lg md:text-xl text-neutral-600 font-normal leading-[1.6] tracking-tight">
                    {(project as any).userProblem}
                  </div>
                  {/* Render problem image for solid-connection if present (Smaller sized) */}
                  {isSolidConnection && solidConnectionProblemImage && (
                    <div className="relative aspect-[16/10] w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-sm mt-2">
                      <Image
                        src={solidConnectionProblemImage}
                        alt={`${project.title} problem visual`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Business Goal */}
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12 py-8 md:py-10 border-t border-neutral-200/80 items-start">
                <span className="font-sans tracking-[0.2em] text-xs md:text-sm text-neutral-800 font-extrabold uppercase md:pt-1">
                  BUSINESS GOAL & CONSTRAINTS
                </span>
                <div className="text-lg md:text-xl text-neutral-600 font-normal leading-[1.6] tracking-tight">
                  {(project as any).businessGoal}
                </div>
              </div>

              {/* Row 3: Design Hypothesis */}
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12 py-8 md:py-10 border-t border-neutral-200/80 items-start">
                <span className="font-sans tracking-[0.2em] text-xs md:text-sm text-neutral-800 font-extrabold uppercase md:pt-1">
                  CORE DESIGN HYPOTHESIS
                </span>
                <div className="text-lg md:text-xl text-neutral-900 font-bold leading-[1.6] tracking-tight">
                  &ldquo;{(project as any).designHypothesis}&rdquo;
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold tracking-tight">The Problem</h3>
              <p className="text-xl leading-relaxed text-neutral-600">{project.problem}</p>
            </div>
          )}
        </div>
      </section>      {/* 4. Background Quote */}
      <section id="background" className="px-6 mb-24 py-16 bg-neutral-50 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <p 
            className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-neutral-950"
            style={project.colors && project.colors.length > 0 ? { color: project.colors[0] } : {}}
          >
            &quot;{project.background}&quot;
          </p>
        </div>
      </section>

      {/* 5. Research */}
      <section id="research" className="px-6 mb-24 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-8">{labels.research}</h2>
          <p className="text-lg leading-relaxed mb-12 text-neutral-600">{project.research.text}</p>
          
          {project.research.insights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {project.research.insights.map((insight, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-neutral-50 border border-neutral-200">
                  <h4 className="font-black text-xl mb-3">{insight.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          )}

          {project.slug === 'fiora-solo-wedding' && (
            <SoloWeddingResearchCharts />
          )}

          {cameraFiResearchChart && (
            <div className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-black tracking-tight">{cameraFiResearchChart.title}</h3>
                  {"question" in cameraFiResearchChart && (
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-400">
                      {cameraFiResearchChart.question}
                    </p>
                  )}
                  <p className="mt-3 text-neutral-600 leading-relaxed">{cameraFiResearchChart.note}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative flex h-64 w-64 items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(${cameraFiResearchChartSegments
                          .map((segment: any) => `${segment.color} ${segment.startDeg}deg ${segment.endDeg}deg`)
                          .join(", ")})`,
                      }}
                    />
                    <div className="absolute inset-[22%] rounded-full border border-white/70 bg-white shadow-inner flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-black uppercase tracking-[0.24em] text-neutral-400">Survey</span>
                      <span className="mt-2 text-2xl font-black tracking-tight text-neutral-950">100%</span>
                      <span className="mt-1 text-xs font-semibold text-neutral-500">priority split</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cameraFiResearchChartSegments.map((segment: any) => {
                  return (
                    <div key={segment.label} className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: segment.color }} />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-neutral-700">{segment.label}</div>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-neutral-100">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${segment.value}%`,
                              backgroundColor: segment.color,
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-right text-sm font-black text-neutral-950">{segment.value}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5.2 User Scenarios */}
      {"userScenarioImages" in project && project.userScenarioImages && project.userScenarioImages.length > 0 && (
        <section id="scenarios" className="px-6 mb-24 scroll-mt-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-12 text-center">User Scenarios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {project.userScenarioImages.map((scenario) => (
                <div key={scenario.src} className="relative aspect-[1427/1102] w-full rounded-lg bg-white border border-neutral-200 shadow-sm transition-all duration-300 hover:scale-125 md:hover:scale-150 hover:z-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 cursor-zoom-in">
                  <Image
                    src={scenario.src}
                    alt={scenario.alt}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5.3 Lo-Fi Prototype */}
      {"loFiImages" in project && project.loFiImages && project.loFiImages.length > 0 && (
        <section id="lo-fi" className="px-6 mb-24 scroll-mt-32">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400">Lo-Fi Prototype</h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                Early wireframes mapped the app structure, inventory flow, recipe access, and feature discovery.
              </p>
            </div>
            <div className="-mx-6 overflow-x-auto px-6 pb-4">
              <div className="flex w-max gap-5">
                {project.loFiImages.map((image) => (
                  <div key={image.src} className="relative aspect-[1491/1055] w-[280px] shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm sm:w-[340px] md:w-[420px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 420px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5.5 User Journey Map */}
      {project.userJourney && project.userJourney.length > 0 && (
        <section id="journey" className="px-6 mb-24 scroll-mt-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-12 text-center">User Journey Map</h2>
            <UserJourneyCarousel journeys={project.userJourney} colors={project.colors} />
          </div>
        </section>
      )}

      {/* 5.6 User Flow */}
      {"userFlow" in project && project.userFlow && project.userFlow.length > 0 && (
        <section id="user-flow" className="px-6 mb-24 scroll-mt-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-12 text-center">User Flow</h2>
            {project.slug === 'smart-fridge' ? (
              <SmartFridgeUserFlowMap />
            ) : (
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                {(project as any).userFlow.map((flowGroup: any, idx: number) => {
                  const groupColor = project.colors ? project.colors[idx % project.colors.length] : null;
                  return (
                    <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[380px] snap-center flex flex-col bg-white border border-neutral-200/60 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
                      <h3 className="text-xl font-black mb-4 tracking-tight" style={groupColor ? { color: groupColor } : { color: '#0a0a0a' }}>
                        {flowGroup.title}
                      </h3>
                      {flowGroup.description && (
                        <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                          {flowGroup.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-2 mt-auto">
                        {flowGroup.flow.map((step: string, sIdx: number) => (
                          <React.Fragment key={sIdx}>
                            <div 
                              className="bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-700 font-bold text-xs tracking-wide"
                              style={groupColor ? { backgroundColor: `${groupColor}08`, borderColor: `${groupColor}20` } : {}}
                            >
                              {step}
                            </div>
                            {sIdx < flowGroup.flow.length - 1 && (
                              <svg className="w-3 h-3 text-neutral-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {project.slug === 'solid-connection' && (
              <SolidConnectionUserFlowMap />
            )}
          </div>
        </section>
      )}
      {/* 6. Ideation & Strategy */}
      <section id="ideation" className="px-6 mb-24 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-8">{labels.ideation}</h2>
          <p className="text-lg leading-relaxed mb-12 text-neutral-600">{project.ideation.text}</p>
          
          {project.ideation.points.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.ideation.points.map((point, idx) => {
                const splitIdx = point.title.indexOf(':');
                let badgeText = '';
                let mainTitle = point.title;
                
                if (splitIdx !== -1) {
                  badgeText = point.title.substring(0, splitIdx).trim();
                  mainTitle = point.title.substring(splitIdx + 1).trim();
                }

                let badgeColor = "bg-neutral-100 text-neutral-600";
                let customBadgeStyle = {};
                
                if (project.colors && project.colors.length > 0) {
                  let colorHex = project.colors[0]; // default to first color
                  
                  if (mainTitle.toLowerCase().includes("type a") || badgeText.toLowerCase().includes("type a")) {
                    colorHex = project.colors[0];
                  } else if (mainTitle.toLowerCase().includes("type b") || badgeText.toLowerCase().includes("type b")) {
                    colorHex = project.colors[1 % project.colors.length];
                  } else if (mainTitle.toLowerCase().includes("type c") || badgeText.toLowerCase().includes("type c")) {
                    colorHex = project.colors[2 % project.colors.length];
                  } else if (badgeText.toLowerCase().includes("strategy")) {
                    colorHex = project.colors[1 % project.colors.length];
                  }

                  badgeColor = "ring-1";
                  customBadgeStyle = {
                    backgroundColor: `${colorHex}15`,
                    color: colorHex,
                    borderColor: `${colorHex}30`
                  };
                } else if (badgeText.toLowerCase().includes("opportunity") || badgeText.toLowerCase().includes("hmw")) {
                  badgeColor = "bg-blue-50 text-blue-600 ring-1 ring-blue-500/20";
                } else if (badgeText.toLowerCase().includes("strategy")) {
                  badgeColor = "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/20";
                }

                return (
                  <div 
                    key={idx} 
                    className="group relative p-8 rounded-3xl bg-white border border-neutral-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {badgeText && (
                      <span 
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${badgeColor}`}
                        style={customBadgeStyle}
                      >
                        {badgeText}
                      </span>
                    )}
                    
                    <h4 className="text-xl font-black text-neutral-950 mb-3 tracking-tight">
                      {mainTitle}
                    </h4>
                    
                    <p className="text-neutral-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 8. Validation / Testing (Relocated after Design Strategy) */}
      {project.testing && project.testing.length > 0 && (
        <section id="testing" className="px-6 mb-24 scroll-mt-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-12">{labels.testing}</h2>
            
            <div className="flex flex-col gap-24">
              {project.testing.map((test, idx) => (
                <div key={idx} className="flex flex-col gap-8">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight mb-4">{idx + 1}. {test.title}</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">{test.description}</p>
                  </div>

                  {"focusAreas" in test && test.focusAreas && test.focusAreas.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {test.focusAreas.map((area: any) => (
                        <div key={area.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                          <h4 className="text-base font-black text-neutral-950">{area.title}</h4>
                          <p className="mt-3 text-sm font-semibold text-neutral-700">{area.action}</p>
                          <p className="mt-2 text-sm leading-relaxed text-neutral-500">{area.observation}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {"findings" in test && test.findings && test.findings.length > 0 && (
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                      <h4 className="text-base font-black text-emerald-700">Research Findings</h4>
                      <ul className="mt-4 flex flex-col gap-3">
                        {test.findings.map((finding: string) => (
                          <li key={finding} className="flex gap-3 text-sm leading-relaxed text-emerald-950">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {"userQuotes" in test && test.userQuotes && test.userQuotes.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {test.userQuotes.map((quote: string) => (
                        <blockquote
                          key={quote}
                          className="relative rounded-[1.5rem] border border-neutral-200 bg-white px-5 py-4 text-base font-semibold leading-relaxed text-neutral-800 shadow-sm before:absolute before:-bottom-2 before:left-8 before:h-4 before:w-4 before:rotate-45 before:border-b before:border-r before:border-neutral-200 before:bg-white after:absolute after:left-4 after:top-2 after:text-4xl after:font-black after:leading-none after:text-emerald-100 after:content-['“']"
                        >
                          <span className="relative z-10 block pl-4">{quote}</span>
                        </blockquote>
                      ))}
                    </div>
                  )}
                  
                  {project.slug !== 'smart-fridge' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">Before</span>
                        <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-100">
                          <Image src={test.beforeImage} alt="Before" fill className="object-cover" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">After</span>
                        <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-100">
                          <Image src={test.afterImage} alt="After" fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Design & Core Features */}
      <section id="design" className="px-6 mb-24 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-8 text-center">{labels.design}</h2>
          <p className="text-xl md:text-2xl font-bold leading-relaxed text-neutral-900 text-center max-w-3xl mx-auto mb-16">{project.design.text}</p>
          
          {isSolidConnection && <SolidConnectionDesignSystem />}

        </div>
      </section>

      {/* 7.1 Full-Screen Feature Highlights */}
      {isSolidConnection ? (
        <SolidConnectionSolutions />
      ) : project.slug === 'camerafi-studio' ? (
        <CameraFiSolutions />
      ) : project.slug === 'smart-fridge' ? (
        <SmartFridgeSolutions />
      ) : (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes pan-image {
              0% { object-position: 0% 50%; }
              50% { object-position: 100% 50%; }
              100% { object-position: 0% 50%; }
            }
            .animate-pan-image {
              animation: pan-image 40s ease-in-out infinite;
            }
            .animate-pan-image:hover {
              animation-play-state: paused !important;
            }
          `}} />
          <section className="w-full bg-white text-neutral-900 flex flex-col mb-24">
            {project.design.features.map((feature, idx) => {
              const featureAny = feature as any;
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`min-h-screen w-full flex ${
                    feature.title === "Mock Application System" || feature.title === "Predictive Application"
                      ? 'flex-col justify-center overflow-hidden relative' 
                      : `flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`
                  } items-center px-6 md:px-16 lg:px-24 py-20 gap-12 lg:gap-16 border-b border-neutral-200/60 last:border-b-0`}
                >
                  {/* Text Side */}
                  <div className={`w-full flex flex-col gap-6 z-10 ${
                    feature.title === "Mock Application System" || feature.title === "Predictive Application"
                      ? 'max-w-5xl text-center items-center mb-4 md:mb-10' 
                      : 'lg:w-5/12'
                  }`}>
                    {/* Solution Badge */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white"
                            style={{
                              backgroundColor:
                                idx === 0
                                  ? "#2563eb"
                                  : idx === 1
                                    ? "#059669"
                                    : "#7c3aed",
                            }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-400">
                        Solution
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                    <p className={`text-xl text-neutral-600 leading-relaxed ${
                      feature.title === "Mock Application System" || feature.title === "Predictive Application"
                        ? 'max-w-3xl' 
                        : 'max-w-xl'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  {/* Image Side */}
                  <div className={`flex justify-center items-center relative ${
                    feature.title === "Mock Application System" || feature.title === "Predictive Application"
                      ? 'w-[100vw] h-[55vh] md:h-[65vh] lg:h-[75vh]' 
                      : 'w-full lg:w-7/12 h-[60vh] lg:h-[85vh]'
                  }`}>
                    {featureAny.image ? (
                      <img 
                        src={featureAny.image} 
                        alt={feature.title} 
                        className={
                          feature.title === "Mock Application System" || feature.title === "Predictive Application"
                            ? "w-full h-full object-cover object-left animate-pan-image drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-crosshair transition-all duration-300"
                            : "w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                        }
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-400 font-medium bg-neutral-50 rounded-3xl border border-neutral-100 shadow-inner">
                        Mockup Placeholder
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        </>
      )}
      

      {/* 7.5 Style Guide */}
      {project.slug !== 'smart-fridge' && (project.design as any).styleGuide && (
        <section id="style-guide" className="px-6 mb-32 scroll-mt-32">
          <div className="max-w-6xl mx-auto bg-neutral-950 text-white rounded-[2rem] p-8 md:p-16 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-sm font-black uppercase tracking-[0.28em] text-white/50">Style Guide</h2>
                <p className="text-2xl md:text-3xl font-bold leading-tight">{(project.design as any).styleGuide.text}</p>
              </div>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white/10 shadow-2xl border border-white/10">
                <Image
                  src={(project.design as any).styleGuide.image}
                  alt="Style Guide"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7.6 Hi-Fi Gallery */}
      {project.slug !== 'smart-fridge' && (project.design as any).hiFiGallery && (
        <section id="hifi-gallery" className="px-6 mb-32 scroll-mt-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-16 text-center">{isRealProject ? "Final Solution" : "Final Interfaces"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {((project.design as any).hiFiGallery).map((mockup: any, idx: number) => (
                <div key={idx} className="relative aspect-[9/18] w-full rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-200 bg-white group transition-all duration-500 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2">
                  <Image
                    src={mockup.src}
                    alt={mockup.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7.7 Final Mockup Showcase */}
      {isSolidConnection && (
        <section id="final-mockups" className="px-0 md:px-6 mb-40 scroll-mt-32 w-full">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-24 px-6">
              <h2 className="text-sm font-black uppercase tracking-[0.28em] text-neutral-400 mb-4">Design Showcase</h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Experience the Final Design</p>
            </div>
            
            <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-6 md:gap-8 justify-start md:justify-center items-center pb-8 md:pb-0 hide-scrollbar w-full px-6 md:px-0">
              
              {/* 1. Onboarding */}
              <div className="flex flex-col items-center gap-4 shrink-0 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-[180px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <img
                    src="/SC/onboarding/3.png"
                    alt="Onboarding"
                    className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
                  />
                </div>
                <span className="text-xs md:text-sm font-bold text-neutral-500 tracking-wide uppercase">Onboarding</span>
              </div>

              {/* 2. Community */}
              <div className="flex flex-col items-center gap-4 shrink-0 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-[180px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <img
                    src="/SC/commu.png"
                    alt="Community"
                    className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
                  />
                </div>
                <span className="text-xs md:text-sm font-bold text-neutral-500 tracking-wide uppercase">Community</span>
              </div>

              {/* 3. Main Dashboard */}
              <div className="flex flex-col items-center gap-4 shrink-0 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-[180px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-[#5950F6] shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <div className="w-full h-full overflow-y-auto hide-scrollbar scroll-smooth z-10">
                    <img
                      src="/SC/Main/Main%20Eng.png"
                      alt="Main Dashboard"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
                <span className="text-xs md:text-sm font-bold text-neutral-500 tracking-wide uppercase">Main Dashboard</span>
              </div>

              {/* 4. Applicant Status */}
              <div className="flex flex-col items-center gap-4 shrink-0 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-[180px] md:w-[240px] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-900 bg-white shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 w-full h-5 bg-neutral-900 flex justify-center items-start pt-1.5 z-20 rounded-b-xl max-w-[40%] left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full"></div>
                  </div>
                  <img
                    src="/SC/applicant-status.png"
                    alt="Applicant Status"
                    className="absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)] object-contain object-top"
                  />
                </div>
                <span className="text-xs md:text-sm font-bold text-neutral-500 tracking-wide uppercase">Apply Status</span>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 9. Outcome / Impact */}
      {isSolidConnection ? (
        <SolidConnectionImpact />
      ) : (
        project.impact && project.impact.points && project.impact.points.length > 0 && (
          <section id="impact" className="px-6 mb-24 py-16 bg-neutral-950 text-white rounded-lg max-w-5xl mx-auto scroll-mt-32">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-sm font-black uppercase tracking-[0.28em] text-white/40 mb-12">{labels.impact}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.impact.points.map((point, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <h3 className="text-xl font-black">{point.title}</h3>
                    <p className="text-lg text-white/65 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      )}

      {/* Footer Navigation */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center border-t border-neutral-200 pt-16 mt-16">
          <Link href="/#projects" className="inline-flex items-center text-lg font-bold hover:opacity-70 transition-opacity">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </section>
    </article>
  );
}

function ProductProjectPage({
  project,
}: {
  project: (typeof portfolioData.productProjects)[number];
}) {
  const overviewItems = [
    { label: "Year", value: project.overview.year },
    { label: "Duration", value: project.overview.duration },
    { label: "Role", value: project.overview.role },
  ];

  return (
    <article className="bg-white font-sans text-neutral-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[360px_minmax(0,1fr)] md:gap-16 md:py-24">
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <span className="text-sm font-bold uppercase tracking-[0.28em] text-neutral-400">
                {project.category}
              </span>
              <h1 className="text-5xl font-black leading-none tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="text-base font-medium leading-relaxed text-neutral-600">
                {project.summary}
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-5 border-y border-neutral-200 py-6">
              {overviewItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-bold leading-relaxed text-neutral-950">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-8">
              <section>
                <h2 className="text-sm font-black uppercase tracking-[0.22em] text-neutral-400">
                  Problem
                </h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{project.problem}</p>
              </section>

              <section>
                <h2 className="text-sm font-black uppercase tracking-[0.22em] text-neutral-400">
                  Solution
                </h2>
                <ul className="mt-3 flex flex-col gap-3">
                  {project.solution.map((item) => (
                    <li key={item} className="text-sm leading-7 text-neutral-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-sm font-black uppercase tracking-[0.22em] text-neutral-400">
                  Impact
                </h2>
                <ul className="mt-3 flex flex-col gap-3">
                  {project.impact.points.map((point) => (
                    <li key={point.title} className="text-sm leading-7 text-neutral-600">
                      <strong className="text-neutral-950">{point.title}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <Link href="/#product" className="inline-flex items-center text-sm font-bold hover:opacity-70 transition-opacity">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Product
            </Link>
          </div>
        </aside>

        <section className="flex flex-col gap-8">
          {project.presentationImages.map((image, index) => (
            <div key={image.src} className="relative aspect-video w-full overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 860px"
              />
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}

function BrandingProjectPage({
  project,
}: {
  project: (typeof portfolioData.brandingProjects)[number];
}) {
  return (
    <article className="bg-white pb-28 font-sans text-neutral-950">
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-neutral-400">
              {project.category}
            </span>
            <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
              {project.title}
            </h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-neutral-600">
              {project.summary}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className={`object-cover ${project.imagePosition || "object-center"}`}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 px-6 py-8">
        <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="font-bold uppercase tracking-[0.2em] text-neutral-400">Year</dt>
            <dd className="mt-2 text-lg font-bold">{project.overview.year}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-[0.2em] text-neutral-400">Duration</dt>
            <dd className="mt-2 text-lg font-bold">{project.overview.duration}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-[0.2em] text-neutral-400">Role</dt>
            <dd className="mt-2 text-lg font-bold">{project.overview.role}</dd>
          </div>
        </dl>
      </section>

      {"brandImages" in project && project.brandImages && project.brandImages.length > 0 && (
        <section className="bg-neutral-100 py-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
            {project.brandImages.map((image, index) => (
              <div key={image.src} className="relative aspect-video w-full overflow-hidden bg-white shadow-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-6">
        <div className="mx-auto max-w-4xl border-t border-neutral-200 pt-16 text-center">
          <Link href="/#projects" className="inline-flex items-center text-lg font-bold hover:opacity-70 transition-opacity">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </section>
    </article>
  );
}
