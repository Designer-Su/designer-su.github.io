"use client";

import { useEffect, useState, useRef } from "react";

export interface TOCSection {
  id: string;
  label: string;
}

interface ProjectTOCProps {
  sections: TOCSection[];
}

export default function ProjectTOC({ sections }: ProjectTOCProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Determine the root margin to trigger the intersection slightly below the header + TOC height
    // Header is ~64px, TOC is ~56px. Total ~120px. 
    // We want to trigger when the section top is near this 120px threshold.
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible entry that is intersecting
        // If multiple are intersecting, we prefer the one that is taking up the most space or is at the top
        let maxVisible = -1;
        let currentActive = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Using intersectionRatio to determine the "most visible" section,
            // or simply relying on the first one intersecting from the top.
            if (entry.intersectionRatio > maxVisible) {
              maxVisible = entry.intersectionRatio;
              currentActive = entry.target.id;
            }
          }
        });

        // Fallback to top-down tracking if needed
        const intersectingEntries = entries.filter(e => e.isIntersecting);
        if (intersectingEntries.length > 0) {
          // Sort by their position in the document (top first)
          const sorted = intersectingEntries.sort((a, b) => {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });
          currentActive = sorted[0].target.id;
        }

        if (currentActive) {
          setActiveSection(currentActive);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 1.0],
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Header (64px) + TOC (56px) = 120px offset
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (sections.length === 0) return null;

  return (
    <div className="sticky top-16 z-40 w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6">
        <nav
          ref={navRef}
          className="flex items-center justify-center flex-wrap gap-4 md:gap-8 py-4"
          aria-label="Table of Contents"
        >
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                data-id={sec.id}
                onClick={(e) => handleScroll(e, sec.id)}
                className={`whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                  isActive ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {sec.label}
                {/* Active Underline */}
                {isActive && (
                  <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-neutral-950 rounded-t-full" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
