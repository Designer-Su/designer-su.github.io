import React from "react";
import Link from "next/link";
import SolidConnectionDesignSystem from "@/components/SolidConnectionDesignSystem";

export const metadata = {
  title: 'Design System | Solid Connection',
  description: 'Design system and core guidelines for Solid Connection.',
};

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/projects/solid-connection" 
            className="flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Project
          </Link>
          <div className="text-sm font-black uppercase tracking-widest text-neutral-900">
            Design System
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Core Guidelines</h1>
          <p className="text-xl text-neutral-500">The foundational design elements, colors, and typography for the Solid Connection platform.</p>
        </div>
        
        <SolidConnectionDesignSystem />
      </main>
    </div>
  );
}
