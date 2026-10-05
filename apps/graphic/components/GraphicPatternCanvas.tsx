"use client";

import React, { useState, useRef, useEffect } from "react";

type PatternType = "vector-mesh" | "radial-waves" | "cmyk-particles" | "geometric-grid";
type ColorPalette = "cmyk" | "neon" | "monochrome" | "sunset";

const PALETTES: Record<ColorPalette, string[]> = {
  cmyk: ["#06b6d4", "#ec4899", "#eab308", "#171717"],
  neon: ["#a855f7", "#ec4899", "#3b82f6", "#10b981"],
  monochrome: ["#ffffff", "#a3a3a3", "#525252", "#171717"],
  sunset: ["#f43f5e", "#fb923c", "#facc15", "#8b5cf6"],
};

export default function GraphicPatternCanvas() {
  const [patternType, setPatternType] = useState<PatternType>("vector-mesh");
  const [palette, setPalette] = useState<ColorPalette>("neon");
  const [density, setDensity] = useState<number>(30);
  const [speed, setSpeed] = useState<number>(2);
  const [shapeScale, setShapeScale] = useState<number>(1.2);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });
  const animFrameRef = useRef<number | null>(null);

  // Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 440);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 440;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      if (!isPaused) {
        time += 0.015 * speed;
      }

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Dark Canvas Background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      const colors = PALETTES[palette];

      if (patternType === "vector-mesh") {
        // Generative Bezier Vector Mesh
        const cols = Math.floor(density / 3) + 4;
        const rows = 6;
        const cellW = width / cols;
        const cellH = height / rows;

        for (let r = 0; r <= rows; r++) {
          ctx.beginPath();
          for (let c = 0; c <= cols; c++) {
            const baseX = c * cellW;
            const baseY = r * cellH;

            // Distance from mouse
            const dx = baseX - mouseRef.current.x;
            const dy = baseY - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = Math.max(0, (180 - dist) / 180);

            const offsetX = Math.sin(time + c * 0.5 + r * 0.3) * 20 * shapeScale + dx * force * 0.3;
            const offsetY = Math.cos(time + c * 0.3 + r * 0.5) * 20 * shapeScale + dy * force * 0.3;

            const px = baseX + offsetX;
            const py = baseY + offsetY;

            if (c === 0) ctx.moveTo(px, py);
            else {
              const prevX = (c - 1) * cellW;
              const cpX = (prevX + px) / 2;
              ctx.quadraticCurveTo(cpX, py, px, py);
            }
          }
          ctx.strokeStyle = colors[r % colors.length];
          ctx.lineWidth = 2 * shapeScale;
          ctx.globalAlpha = 0.75;
          ctx.stroke();
        }
      } else if (patternType === "radial-waves") {
        // Concentric Radial Path Waves
        const centerX = width / 2 + (mouseRef.current.x - width / 2) * 0.2;
        const centerY = height / 2 + (mouseRef.current.y - height / 2) * 0.2;
        const count = density;

        for (let i = 1; i <= count; i++) {
          const radius = (i * 12 * shapeScale) % (Math.max(width, height) * 0.7);
          const pointsCount = 12;

          ctx.beginPath();
          for (let p = 0; p <= pointsCount; p++) {
            const angle = (p / pointsCount) * Math.PI * 2;
            const wave = Math.sin(time * 2 + i * 0.4 + angle * 4) * (10 * shapeScale);
            const r = radius + wave;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;

            if (p === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.strokeStyle = colors[i % colors.length];
          ctx.lineWidth = 1.8 * shapeScale;
          ctx.globalAlpha = Math.max(0.1, 1 - radius / (height * 0.9));
          ctx.stroke();
        }
      } else if (patternType === "cmyk-particles") {
        // Floating CMYK Graphic Nodes with Distance Vector Paths
        const particleCount = density * 2;
        const nodes: { x: number; y: number; vx: number; vy: number; color: string }[] = [];

        // Deterministic pseudo-random seed per node count
        for (let i = 0; i < particleCount; i++) {
          const seed = i * 137.5;
          const px = ((Math.sin(seed) * 0.5 + 0.5) * width + Math.sin(time + i) * 30 * shapeScale + width) % width;
          const py = ((Math.cos(seed) * 0.5 + 0.5) * height + Math.cos(time * 0.8 + i) * 30 * shapeScale + height) % height;
          nodes.push({
            x: px,
            y: py,
            vx: Math.sin(i),
            vy: Math.cos(i),
            color: colors[i % colors.length],
          });
        }

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100 * shapeScale) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = nodes[i].color;
              ctx.globalAlpha = (1 - dist / (100 * shapeScale)) * 0.6;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }

          // Node points
          ctx.beginPath();
          ctx.arc(nodes[i].x, nodes[i].y, 4 * shapeScale, 0, Math.PI * 2);
          ctx.fillStyle = nodes[i].color;
          ctx.globalAlpha = 0.9;
          ctx.fill();
        }
      } else if (patternType === "geometric-grid") {
        // Rotational Matrix Graphic Tiles
        const step = 45 * shapeScale;
        const cols = Math.ceil(width / step);
        const rows = Math.ceil(height / step);

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = c * step + step / 2;
            const y = r * step + step / 2;
            const rot = time + (c + r) * 0.3;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rot);

            ctx.beginPath();
            ctx.rect(-step * 0.3, -step * 0.3, step * 0.6, step * 0.6);
            ctx.strokeStyle = colors[(c + r) % colors.length];
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = 0.8;
            ctx.stroke();

            ctx.restore();
          }
        }
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [patternType, palette, density, speed, shapeScale, isPaused]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.targetX = e.clientX - rect.left;
    mouseRef.current.targetY = e.clientY - rect.top;
    mouseRef.current.active = true;
  };

  const copyPatternConfig = () => {
    const config = JSON.stringify(
      {
        patternType,
        palette,
        density,
        speed,
        shapeScale,
      },
      null,
      2
    );
    navigator.clipboard.writeText(config);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Control Panel Top */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-neutral-900 text-white p-6 rounded-3xl border border-neutral-800 shadow-xl">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            Graphic App 02 · Generative Canvas Engine
          </span>
          <h3 className="text-xl font-black tracking-tight">Dynamic Pattern &amp; Vector Canvas</h3>
          <p className="text-xs text-neutral-400">
            Real-time procedural graphic mesh, particle paths, and generative brand visuals.
          </p>
        </div>

        {/* Pattern Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setPatternType("vector-mesh")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              patternType === "vector-mesh"
                ? "bg-cyan-500 text-neutral-950 shadow-md scale-105"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            }`}
          >
            Vector Mesh
          </button>
          <button
            onClick={() => setPatternType("radial-waves")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              patternType === "radial-waves"
                ? "bg-cyan-500 text-neutral-950 shadow-md scale-105"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            }`}
          >
            Radial Waves
          </button>
          <button
            onClick={() => setPatternType("cmyk-particles")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              patternType === "cmyk-particles"
                ? "bg-cyan-500 text-neutral-950 shadow-md scale-105"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            }`}
          >
            Node Net
          </button>
          <button
            onClick={() => setPatternType("geometric-grid")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              patternType === "geometric-grid"
                ? "bg-cyan-500 text-neutral-950 shadow-md scale-105"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            }`}
          >
            Matrix Grid
          </button>
        </div>
      </div>

      {/* Interactive Canvas Surface */}
      <div className="relative w-full rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl">
        {/* Floating Controls Overlay */}
        <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
          <div className="pointer-events-auto flex flex-wrap items-center gap-4 bg-neutral-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-700 text-xs font-medium text-neutral-200">
            {/* Palette Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">Palette:</span>
              {(["cmyk", "neon", "sunset", "monochrome"] as ColorPalette[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPalette(p)}
                  className={`w-4 h-4 rounded-full border border-white/20 transition-transform ${
                    palette === p ? "scale-125 ring-2 ring-cyan-400" : "opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: PALETTES[p][0] }}
                  title={p}
                />
              ))}
            </div>

            {/* Density Slider */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">Density:</span>
              <input
                type="range"
                min="10"
                max="60"
                value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
                className="w-20 accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Scale Slider */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">Scale:</span>
              <input
                type="range"
                min="0.5"
                max="2.5"
                step="0.1"
                value={shapeScale}
                onChange={(e) => setShapeScale(Number(e.target.value))}
                className="w-20 accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>

          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                isPaused
                  ? "bg-amber-600/30 border-amber-500/50 text-amber-200"
                  : "bg-neutral-900/80 border-neutral-700 text-neutral-400"
              }`}
            >
              {isPaused ? "Play Engine" : "Pause Motion"}
            </button>

            <button
              onClick={copyPatternConfig}
              className="px-4 py-1.5 rounded-full bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              {copiedCode ? "✓ Config Copied" : "Export Pattern Tokens"}
            </button>
          </div>
        </div>

        {/* Canvas Element */}
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          className="w-full h-[340px] sm:h-[400px] md:h-[460px] cursor-crosshair select-none block"
        />
      </div>
    </div>
  );
}
