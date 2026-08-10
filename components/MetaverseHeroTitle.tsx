"use client";

import { useState, useEffect, useRef } from "react";

interface MetaverseHeroTitleProps {
  title?: string;
}

export default function MetaverseHeroTitle({
  title = "Metaverse & 3D Spatial UX Design",
}: MetaverseHeroTitleProps) {
  const [gradientPos, setGradientPos] = useState({ x: 30, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const targetPosRef = useRef({ x: 30, y: 50 });
  const currentPosRef = useRef({ x: 30, y: 50 });
  const containerRef = useRef<HTMLHeadingElement>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left - 20 &&
        e.clientX <= rect.right + 20 &&
        e.clientY >= rect.top - 20 &&
        e.clientY <= rect.bottom + 20;

      setIsHovered(isInside);

      if (isInside) {
        const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
        targetPosRef.current = { x, y };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updateAnimation = () => {
      // Smooth lerp (linear interpolation) for mouse tracking
      currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * 0.08;
      currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * 0.08;

      setGradientPos({
        x: Math.round(currentPosRef.current.x * 100) / 100,
        y: Math.round(currentPosRef.current.y * 100) / 100,
      });

      rafIdRef.current = requestAnimationFrame(updateAnimation);
    };

    rafIdRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <div className="relative inline-block max-w-4xl select-none cursor-pointer group">
      {/* Base Layer: Previous default elegant title gradient */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent">
        {title}
      </h1>

      {/* Hover Layer: Seamless mouse-following dynamic gradient overlay */}
      <h1
        ref={containerRef}
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle 480px at ${gradientPos.x}% ${gradientPos.y}%, #a855f7 0%, #ec4899 28%, #3b82f6 55%, #10b981 80%, transparent 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className={`absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight transition-opacity duration-500 ease-in-out pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {title}
      </h1>
    </div>
  );
}
