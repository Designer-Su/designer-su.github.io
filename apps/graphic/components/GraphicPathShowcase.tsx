"use client";

import React, { useState, useRef, useEffect } from "react";

interface PathPreset {
  id: string;
  name: string;
  description: string;
  points: { x: number; y: number; handle1?: { x: number; y: number }; handle2?: { x: number; y: number } }[];
  closed: boolean;
  gradient: [string, string, string];
}

const PRESETS: PathPreset[] = [
  {
    id: "fluid-wave",
    name: "Organic Fluid Path",
    description: "Smooth Bezier curves creating modern generative liquid motion.",
    points: [
      { x: 50, y: 200, handle2: { x: 120, y: 80 } },
      { x: 250, y: 100, handle1: { x: 180, y: 120 }, handle2: { x: 320, y: 80 } },
      { x: 450, y: 250, handle1: { x: 380, y: 300 }, handle2: { x: 520, y: 200 } },
      { x: 650, y: 120, handle1: { x: 580, y: 70 }, handle2: { x: 720, y: 180 } },
      { x: 850, y: 220, handle1: { x: 780, y: 260 } },
    ],
    closed: false,
    gradient: ["#ec4899", "#8b5cf6", "#3b82f6"],
  },
  {
    id: "geometric-loop",
    name: "Symmetric Vector Loop",
    description: "Closed mathematical loop with continuous curvature anchors.",
    points: [
      { x: 450, y: 80, handle1: { x: 300, y: 80 }, handle2: { x: 600, y: 80 } },
      { x: 750, y: 220, handle1: { x: 750, y: 140 }, handle2: { x: 750, y: 300 } },
      { x: 450, y: 360, handle1: { x: 600, y: 360 }, handle2: { x: 300, y: 360 } },
      { x: 150, y: 220, handle1: { x: 150, y: 300 }, handle2: { x: 150, y: 140 } },
    ],
    closed: true,
    gradient: ["#06b6d4", "#3b82f6", "#6366f1"],
  },
  {
    id: "monogram-crest",
    name: "Dynamic Branding Crest",
    description: "Vector path structure for identity symbols and iconographic logomarks.",
    points: [
      { x: 200, y: 320, handle2: { x: 250, y: 120 } },
      { x: 450, y: 60, handle1: { x: 350, y: 60 }, handle2: { x: 550, y: 60 } },
      { x: 700, y: 320, handle1: { x: 650, y: 120 }, handle2: { x: 620, y: 370 } },
      { x: 450, y: 320, handle1: { x: 520, y: 320 }, handle2: { x: 380, y: 320 } },
    ],
    closed: true,
    gradient: ["#f59e0b", "#ef4444", "#ec4899"],
  },
];

export default function GraphicPathShowcase() {
  const [activePreset, setActivePreset] = useState<PathPreset>(PRESETS[0]);
  const [points, setPoints] = useState(PRESETS[0].points);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [selectedHandle, setSelectedHandle] = useState<"handle1" | "handle2" | null>(null);
  const [strokeWidth, setStrokeWidth] = useState<number>(4);
  const [showHandles, setShowHandles] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [copiedPath, setCopiedPath] = useState<boolean>(false);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const animRef = useRef<number | null>(null);

  // Load preset
  const handleSelectPreset = (preset: PathPreset) => {
    setActivePreset(preset);
    setPoints(JSON.parse(JSON.stringify(preset.points)));
    setSelectedPoint(null);
    setSelectedHandle(null);
  };

  // Generate SVG path string (d attribute)
  const getPathString = (pts = points, isClosed = activePreset.closed) => {
    if (pts.length === 0) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;

    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];

      const cp1 = prev.handle2 ? prev.handle2 : { x: prev.x, y: prev.y };
      const cp2 = curr.handle1 ? curr.handle1 : { x: curr.x, y: curr.y };

      d += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${curr.x} ${curr.y}`;
    }

    if (isClosed && pts.length > 2) {
      const last = pts[pts.length - 1];
      const first = pts[0];
      const cp1 = last.handle2 ? last.handle2 : { x: last.x, y: last.y };
      const cp2 = first.handle1 ? first.handle1 : { x: first.x, y: first.y };
      d += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${first.x} ${first.y} Z`;
    }

    return d;
  };

  // Mouse Dragging on SVG
  const handleMouseDown = (pointIndex: number, handle: "handle1" | "handle2" | null = null) => {
    setSelectedPoint(pointIndex);
    setSelectedHandle(handle);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (selectedPoint === null || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = Math.round(((e.clientX - rect.left) / rect.width) * 900);
    const mouseY = Math.round(((e.clientY - rect.top) / rect.height) * 440);

    setPoints((prev) => {
      const updated = [...prev];
      if (selectedHandle === null) {
        // Move anchor point and offset handles accordingly
        const dx = mouseX - updated[selectedPoint].x;
        const dy = mouseY - updated[selectedPoint].y;
        updated[selectedPoint].x = mouseX;
        updated[selectedPoint].y = mouseY;
        if (updated[selectedPoint].handle1) {
          updated[selectedPoint].handle1!.x += dx;
          updated[selectedPoint].handle1!.y += dy;
        }
        if (updated[selectedPoint].handle2) {
          updated[selectedPoint].handle2!.x += dx;
          updated[selectedPoint].handle2!.y += dy;
        }
      } else if (selectedHandle === "handle1" && updated[selectedPoint].handle1) {
        updated[selectedPoint].handle1 = { x: mouseX, y: mouseY };
      } else if (selectedHandle === "handle2" && updated[selectedPoint].handle2) {
        updated[selectedPoint].handle2 = { x: mouseX, y: mouseY };
      }
      return updated;
    });
  };

  const handleMouseUp = () => {
    setSelectedPoint(null);
    setSelectedHandle(null);
  };

  // Animation Loop for fluid motion demonstration
  useEffect(() => {
    if (!isAnimating) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    let startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      setPoints((prev) =>
        prev.map((pt, idx) => {
          const offset = idx * 0.8;
          const dy = Math.sin(elapsed * 2 + offset) * 1.5;
          const dx = Math.cos(elapsed * 1.5 + offset) * 1.2;
          return {
            ...pt,
            y: pt.y + dy,
            x: pt.x + dx,
          };
        })
      );
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isAnimating]);

  const copySvgString = () => {
    const svgCode = `<svg viewBox="0 0 900 440" xmlns="http://www.w3.org/2000/svg">\n  <path d="${getPathString()}" fill="none" stroke="url(#grad)" stroke-width="${strokeWidth}" stroke-linecap="round" />\n</svg>`;
    navigator.clipboard.writeText(svgCode);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Control Panel Top */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-neutral-900 text-white p-6 rounded-3xl border border-neutral-800 shadow-xl">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            Interactive Vector Engine
          </span>
          <h3 className="text-xl font-black tracking-tight">Graphic Path Generator</h3>
          <p className="text-xs text-neutral-400">
            Drag anchor points & control handles to manipulate Bezier curves in real time.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activePreset.id === preset.id
                  ? "bg-white text-neutral-950 shadow-md scale-105"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Top Floating Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-3 bg-neutral-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-700 text-xs font-medium text-neutral-200">
            <span className="text-neutral-400">Stroke:</span>
            <input
              type="range"
              min="1"
              max="16"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="w-24 accent-purple-500 cursor-pointer"
            />
            <span className="font-mono font-bold w-5">{strokeWidth}px</span>
          </div>

          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={() => setShowHandles(!showHandles)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                showHandles
                  ? "bg-purple-600/30 border-purple-500/50 text-purple-200"
                  : "bg-neutral-900/80 border-neutral-700 text-neutral-400"
              }`}
            >
              {showHandles ? "Hide Nodes" : "Show Nodes"}
            </button>

            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                isAnimating
                  ? "bg-emerald-600/30 border-emerald-500/50 text-emerald-200 animate-pulse"
                  : "bg-neutral-900/80 border-neutral-700 text-neutral-400"
              }`}
            >
              {isAnimating ? "Pause Motion" : "Simulate Motion"}
            </button>

            <button
              onClick={copySvgString}
              className="px-4 py-1.5 rounded-full bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              {copiedPath ? "✓ Copied SVG" : "Copy SVG Code"}
            </button>
          </div>
        </div>

        {/* Interactive SVG Surface */}
        <svg
          ref={svgRef}
          viewBox="0 0 900 440"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-[320px] sm:h-[400px] md:h-[460px] cursor-crosshair select-none relative z-10"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={activePreset.gradient[0]} />
              <stop offset="50%" stopColor={activePreset.gradient[1]} />
              <stop offset="100%" stopColor={activePreset.gradient[2]} />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Glowing Shadow Path */}
          <path
            d={getPathString()}
            fill="none"
            stroke={activePreset.gradient[0]}
            strokeWidth={strokeWidth * 2.5}
            strokeLinecap="round"
            opacity="0.25"
            filter="url(#glow)"
          />

          {/* Main Vector Path */}
          <path
            d={getPathString()}
            fill={activePreset.closed ? "url(#pathGradient)" : "none"}
            fillOpacity={activePreset.closed ? 0.15 : 0}
            stroke="url(#pathGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Handles & Control Nodes Overlay */}
          {showHandles &&
            points.map((pt, idx) => (
              <g key={idx}>
                {/* Handle lines connecting anchor to control handles */}
                {pt.handle1 && (
                  <line
                    x1={pt.x}
                    y1={pt.y}
                    x2={pt.handle1.x}
                    y2={pt.handle1.y}
                    stroke="#a855f7"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                )}
                {pt.handle2 && (
                  <line
                    x1={pt.x}
                    y1={pt.y}
                    x2={pt.handle2.x}
                    y2={pt.handle2.y}
                    stroke="#a855f7"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                )}

                {/* Handle 1 Control Point Circle */}
                {pt.handle1 && (
                  <circle
                    cx={pt.handle1.x}
                    cy={pt.handle1.y}
                    r="5"
                    fill="#a855f7"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:scale-150 transition-transform"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      handleMouseDown(idx, "handle1");
                    }}
                  />
                )}

                {/* Handle 2 Control Point Circle */}
                {pt.handle2 && (
                  <circle
                    cx={pt.handle2.x}
                    cy={pt.handle2.y}
                    r="5"
                    fill="#a855f7"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:scale-150 transition-transform"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      handleMouseDown(idx, "handle2");
                    }}
                  />
                )}

                {/* Main Anchor Point Square */}
                <rect
                  x={pt.x - 7}
                  y={pt.y - 7}
                  width="14"
                  height="14"
                  rx="3"
                  fill={selectedPoint === idx ? "#38bdf8" : "#ffffff"}
                  stroke="#0f172a"
                  strokeWidth="2.5"
                  className="cursor-grab active:cursor-grabbing hover:scale-125 transition-transform"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    handleMouseDown(idx, null);
                  }}
                />
              </g>
            ))}
        </svg>
      </div>

      {/* Generated SVG Path Code Output Box */}
      <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col gap-3 font-mono text-xs">
        <div className="flex items-center justify-between text-neutral-400">
          <span className="uppercase tracking-wider text-[11px] font-bold text-neutral-300">
            Vector Path Data Output (d)
          </span>
          <span className="text-[10px] text-neutral-500">Auto-updated from Bezier Nodes</span>
        </div>
        <div className="bg-black/60 p-4 rounded-xl text-purple-300 break-all leading-relaxed select-all overflow-x-auto border border-neutral-800">
          {getPathString()}
        </div>
      </div>
    </div>
  );
}
