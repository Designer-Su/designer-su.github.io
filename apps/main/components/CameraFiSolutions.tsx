"use client";

import React, { useState } from "react";

export default function CameraFiSolutions() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const palette = ["#B8E218", "#37C556", "#2362A2"];

  return (
    <div className="w-full bg-white text-neutral-900 flex flex-col gap-32 mb-32 overflow-hidden pt-24">
      {/* Solution 1: Conversational Landing Page */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-neutral-50 rounded-[3rem] mx-4 md:mx-6 md:w-[calc(100%-3rem)]">
        <div className="max-w-4xl text-center mb-12 md:mb-16 z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-black" style={{ backgroundColor: palette[0] }}>01</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">Solution</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Conversational Landing Page
          </h3>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A scrollable landing page that explains features through guided screens instead of dense text.
          </p>
        </div>

        {/* MacBook Mockup Container */}
        <div className="w-full max-w-5xl flex flex-col items-center relative mt-8 z-10">
          {/* MacBook Screen Bezel */}
          <div className="relative w-[85%] md:w-[75%] aspect-[16/10] bg-neutral-900 rounded-t-[1.5rem] p-[1.5%] pb-0 border-t border-x border-neutral-700/60 shadow-2xl flex flex-col">
            {/* Camera dot & sensor */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 border border-neutral-700/50"></span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: palette[2], opacity: 0.45 }}></span>
            </div>

            {/* Screen Viewport */}
            <div className="w-full h-full bg-neutral-900 overflow-hidden rounded-t-md relative flex flex-col select-none border border-neutral-800">
              
              {/* Inner Scrollable Landing Page Mockup */}
              <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 bg-neutral-950 text-white flex flex-col">
                
                {/* Mock Browser Header */}
                <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 px-4 py-3 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="bg-neutral-950 border border-neutral-800 rounded-md px-3 py-1 text-[10px] text-neutral-500 font-mono w-1/3 text-center truncate">
                    studio.camerafi.com/about
                  </div>
                  <div className="w-10"></div>
                </div>

                {!imageError ? (
                  <div className="w-full relative flex-1 overflow-y-auto">
                    <img 
                      src="/CF/12.26 최종 수정 1ver.png" 
                      alt="CameraFi Studio Landing Page Figma Design" 
                      className="w-full h-auto object-cover"
                      onError={() => setImageError(true)}
                      onLoad={() => setImageLoaded(true)}
                      style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 p-6 text-center text-xs text-neutral-500 gap-2">
                        <span className="w-5 h-5 rounded-full border-2 border-green-500 border-t-transparent animate-spin"></span>
                        <span>Loading Landing Page Design...</span>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Fallback Page Content */
                  <div className="p-6 flex flex-col gap-12 max-w-3xl mx-auto w-full">
                  {/* Mock Navbar */}
                  <div className="flex items-center justify-between py-2 border-b border-neutral-800/40">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#37C556] flex items-center justify-center text-white font-black text-xs">C</span>
                      <span className="font-bold text-xs tracking-wider">CameraFi Studio</span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-neutral-400">
                      <span>Home</span>
                      <span>Features</span>
                      <span className="text-[#37C556]">About</span>
                    </div>
                  </div>

                  {/* Hero Intro */}
                  <div className="text-center py-2 flex flex-col items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-black uppercase tracking-wider text-[#37C556]">
                      🏅 Sports Broadcasting Platform
                    </span>
                    <h4 className="text-2xl md:text-3xl font-black tracking-tight max-w-lg leading-tight">
                      Professional Sports Broadcasts Made Simple
                    </h4>
                    <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
                      Overlay customizable live scoreboards, automated brackets, and real-time captioning on your stream. Works with OBS, vMix, and XSplit.
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <button className="px-4 py-2 rounded-lg bg-[#37C556] text-white text-xs font-black hover:opacity-90 transition-opacity">
                        Start Streaming Free
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-neutral-850 text-neutral-300 text-xs font-bold border border-neutral-800 hover:bg-neutral-700 transition-colors">
                        View Guides
                      </button>
                    </div>
                  </div>

                  {/* Feature Highlights Grid */}
                  <div className="flex flex-col gap-8">
                    
                    {/* Live Sports Scoreboards Widget Mockup */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
                      <div className="flex justify-between items-center pb-2 border-b border-neutral-850">
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">Feature: Sports Scoreboard</span>
                        <span className="text-[8px] px-2 py-0.5 rounded-full border" style={{ backgroundColor: `${palette[1]}14`, color: palette[1], borderColor: `${palette[1]}33` }}>30+ Sports Supported</span>
                      </div>
                      
                      {/* Interactive Scoreboard Simulation */}
                      <div className="bg-neutral-950 rounded-xl p-4 border border-neutral-850 flex flex-col items-center justify-center gap-3">
                        {/* Soccer Scoreboard Mockup */}
                        <div className="w-full max-w-xs bg-slate-900 border border-slate-800 rounded-lg shadow-lg flex items-center justify-between px-4 py-2.5 font-sans">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-black text-white shadow-sm">L</span>
                            <span className="text-xs font-bold text-slate-100">LIVERPOOL</span>
                          </div>
                          <div className="flex items-center gap-3 bg-slate-950 px-3 py-1 rounded border border-slate-800 font-mono">
                            <span className="text-sm font-black text-red-500">2</span>
                            <span className="text-[10px] text-slate-500">:</span>
                            <span className="text-sm font-black text-blue-500">1</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-100">CHELSEA</span>
                            <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-sm">C</span>
                          </div>
                        </div>
                        {/* Status bar */}
                        <div className="flex justify-between w-full max-w-xs text-[8px] text-slate-400 px-1 font-mono">
                          <span>⏱️ TIME: 78:42</span>
                          <span className="animate-pulse" style={{ color: palette[1] }}>● LIVE STREAMING</span>
                          <span>🏆 PREMIER LEAGUE</span>
                        </div>
                      </div>
                    </div>

                    {/* Live Software Integration Widget Mockup */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
                      <div className="flex justify-between items-center pb-2 border-b border-neutral-850">
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">Feature: Encoder Integration</span>
                        <span className="text-[8px] text-neutral-400 font-mono">Browser Source Overlay</span>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <p className="text-[10px] text-neutral-400 leading-relaxed">
                          Copy the scoreboard URL from CameraFi Studio and paste it directly as a Browser Source in your streaming software.
                        </p>
                        
                        {/* URL Box Mockup */}
                        <div className="bg-neutral-950 border border-neutral-850 rounded-lg p-2.5 flex items-center justify-between gap-3">
                          <span className="text-[9px] font-mono truncate flex-1" style={{ color: palette[1] }}>
                            https://studio.camerafi.com/widget/scoreboard-liv-che-3849x
                          </span>
                          <button className="text-white font-bold text-[8px] px-2.5 py-1.5 rounded shadow shrink-0 active:scale-95 transition-all" style={{ backgroundColor: palette[1] }}>
                            Copy Link
                          </button>
                        </div>
                        
                        {/* Connected software indicators */}
                        <div className="flex flex-wrap gap-2 mt-1">
                          {["OBS Studio", "vMix", "XSplit", "CameraFi Live"].map((sw) => (
                            <span key={sw} className="px-2 py-0.5 rounded bg-neutral-800 text-[8px] font-bold text-neutral-400 border border-neutral-700/50">
                              🔌 {sw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Real-time Captioning & Tournament Brackets Mockup */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Live Captions */}
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col gap-3">
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">Feature: AI Captions</span>
                        <div className="aspect-video w-full bg-slate-900 rounded-lg relative overflow-hidden flex flex-col justify-end p-2 border border-slate-800">
                          {/* Live preview background */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-green-950/20 flex items-center justify-center opacity-60">
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Live Video Feed</span>
                          </div>
                          
                          {/* Captions Overlay */}
                          <div className="bg-black/80 border border-white/10 p-1.5 rounded text-[8px] leading-normal font-sans z-10">
                            <span className="text-green-400 font-bold">🎙️ AI Captions:</span> &quot;And it&apos;s a magnificent shot into the top corner! Liverpool leads 2-1.&quot;
                          </div>
                        </div>
                      </div>

                      {/* Brackets */}
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col gap-3">
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">Feature: Brackets</span>
                        <div className="flex flex-col gap-1.5 flex-1 justify-center py-1">
                          
                          {/* Semi Final Box */}
                          <div className="flex flex-col gap-1 border-l-2 border-green-500 pl-2">
                            <div className="bg-neutral-950 border border-neutral-850 p-1 rounded text-[8px] flex justify-between font-bold text-green-400">
                              <span>Team Alpha</span>
                              <span>3</span>
                            </div>
                            <div className="bg-neutral-950 border border-neutral-850 p-1 rounded text-[8px] flex justify-between text-neutral-500">
                              <span>Team Beta</span>
                              <span>1</span>
                            </div>
                          </div>
                          
                          {/* Final Bracket Connector indicator line */}
                          <div className="h-1.5 w-4 border-b border-r border-neutral-700/60 ml-2"></div>
                          
                          {/* Final Box */}
                          <div className="bg-neutral-950 border border-green-500 p-1.5 rounded text-[8px] flex justify-between font-black text-[#37C556] shadow">
                            <span>🏆 Team Alpha</span>
                            <span>Finalist</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Footer */}
                  <div className="py-6 border-t border-neutral-800/40 text-center text-[9px] text-neutral-600">
                    © 2026 CameraFi Studio. Designed with ♥ for Sports Streamers.
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>

          {/* MacBook Keyboard/Base */}
          <div className="relative w-[96%] md:w-[86%] h-3 md:h-4 bg-neutral-800 rounded-b-[1rem] shadow-2xl border-t border-neutral-600/80 flex justify-center z-10">
            {/* Opening indent */}
            <div className="absolute top-0 w-16 md:w-24 h-1.5 bg-neutral-950 rounded-b-md"></div>
          </div>
          {/* MacBook Base Bottom Shadow Reflection */}
          <div className="w-[86%] md:w-[76%] h-2 bg-black/10 blur-sm rounded-full mt-0.5"></div>

          {/* Performance Handoff & Optimization Note */}
          <div className="w-[85%] md:w-[75%] mt-16 bg-[#B8E218]/5 border border-[#B8E218]/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-neutral-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Developer Handoff & Asset Optimization
              </span>
              <h4 className="font-black text-neutral-900 text-lg mt-2">High-Fidelity Visuals, 1.5s Load Target</h4>
              <p className="text-sm text-neutral-600 leading-relaxed mt-1.5">
                I worked with frontend engineers to convert heavy Figma mockups into responsive WebP image layers. Deferred loading and CSS containment reduced FCP by 45% while keeping the mockup sharp.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Background Circles */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#B8E218]/5 blur-[80px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] -z-10"></div>
      </section>

      {/* Solution 2: Multi-Surface Support */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-white">
        <div className="max-w-4xl text-center mb-16 md:mb-24 z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white" style={{ backgroundColor: palette[2] }}>02</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">Solution</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Multi-Surface Support
          </h3>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            One responsive design system for desktop web, tablet, and mobile app screens.
          </p>
        </div>

        {/* 3D Overlapping Device Layout */}
        <div className="w-full max-w-6xl relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center px-4 overflow-visible">
          
          {/* 1. Desktop (Web Browser Mockup) - Large, centered back */}
          <div className="absolute z-10 w-[80%] md:w-[65%] aspect-[16/10] rounded-2xl border-[3px] border-neutral-800 bg-neutral-900 shadow-2xl flex flex-col overflow-hidden transform -translate-y-8 hover:scale-[1.02] hover:z-30 transition-all duration-500 select-none">
            {/* Browser Header Bar */}
            <div className="bg-neutral-800 border-b border-neutral-700/50 px-4 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              </div>
              <div className="bg-neutral-900 border border-neutral-700/60 rounded-md px-4 py-0.5 text-[9px] text-neutral-400 font-mono w-1/3 text-center truncate">
                studio.camerafi.com/dashboard
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-neutral-700"></span>
                <span className="w-5 h-2 bg-neutral-700 rounded-sm"></span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="flex-1 bg-neutral-950 text-white flex overflow-hidden text-xs">
              {/* Sidebar */}
              <div className="w-12 bg-neutral-900 border-r border-neutral-800 flex flex-col items-center py-4 gap-4 shrink-0">
                <span className="w-6 h-6 rounded-lg flex items-center justify-center text-black font-black text-xs shadow-md" style={{ backgroundColor: palette[0] }}>C</span>
                <div className="w-6 h-[1px] bg-neutral-800 my-1"></div>
                <div className="flex flex-col gap-3.5">
                  <span className="text-lg cursor-pointer" style={{ color: palette[0] }}>📺</span>
                  <span className="text-lg text-neutral-500 hover:text-white cursor-pointer transition-colors">🎛️</span>
                  <span className="text-lg text-neutral-500 hover:text-white cursor-pointer transition-colors">💬</span>
                  <span className="text-lg text-neutral-500 hover:text-white cursor-pointer transition-colors">📊</span>
                  <span className="text-lg text-neutral-500 hover:text-white cursor-pointer transition-colors">⚙️</span>
                </div>
              </div>

              {/* Main Content Pane */}
              <div className="flex-1 flex flex-col overflow-hidden p-4 gap-4">
                {/* Dashboard Top Row */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black tracking-tight">Stream Manager</span>
                    <span className="px-1.5 py-0.5 rounded bg-red-600 font-bold text-[8px] uppercase tracking-wider text-white">LIVE</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                    <span>Viewer: <strong className="text-white">1,402</strong></span>
                    <span>Duration: <strong className="text-white">01:14:02</strong></span>
                  </div>
                </div>

                {/* Dashboard Split View */}
                <div className="flex-1 flex gap-4 min-h-0">
                  {/* Left: Stream Preview Box */}
                  <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl relative flex flex-col justify-center items-center overflow-hidden">
                    {/* Live Stream View Simulation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-950 via-slate-900 to-[#2362A2]/30 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-2xl animate-pulse">🎮</span>
                        <span className="text-[10px] text-white/50 tracking-wider">Broadcasting Stream active</span>
                      </div>
                    </div>
                    {/* Video HUD Overlays */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[8px] font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                      <span>REC | 1080p60 | 4500kbps</span>
                    </div>
                  </div>

                  {/* Right Sidebar: Chat Overlay */}
                  <div className="w-[180px] bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col overflow-hidden shrink-0">
                    <div className="bg-neutral-900 border-b border-neutral-800 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-neutral-400 shrink-0">
                      Live Chat
                    </div>
                    <div className="flex-1 p-2.5 flex flex-col gap-2 overflow-y-auto font-sans text-[9px] leading-normal scrollbar-none select-none">
                      <div><strong className="text-[#B8E218]">Alex99:</strong> UI looks super clean!</div>
                      <div><strong className="text-blue-400 font-medium">stream_mod:</strong> Keep the comments friendly.</div>
                      <div><strong className="text-purple-400">GamerGirl:</strong> Setting up my game overlay now.</div>
                      <div><strong className="text-yellow-400">Dan_K:</strong> Is the audio lag gone?</div>
                      <div><strong className="text-[#B8E218]">Alex99:</strong> Yes! It works perfectly.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Tablet (iPad Portrait Mockup) - Left foreground */}
          <div className="absolute z-20 w-[36%] md:w-[25%] aspect-[3/4] rounded-[2rem] border-[4px] border-neutral-800 bg-neutral-900 shadow-2xl flex flex-col overflow-hidden left-0 md:left-[8%] bottom-4 transform -rotate-3 hover:scale-105 hover:z-30 transition-all duration-500 select-none">
            {/* Tablet Bezel Elements */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-800 z-20"></div>
            
            {/* Tablet Content */}
            <div className="flex-1 bg-neutral-950 text-white flex flex-col p-3 pt-6 gap-3 relative">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded flex items-center justify-center text-black font-black text-[9px]" style={{ backgroundColor: palette[0] }}>C</span>
                  <span className="text-[10px] font-black tracking-tight">CameraFi Studio</span>
                </div>
                <span className="text-[7px] px-1 rounded border border-neutral-700" style={{ backgroundColor: `${palette[0]}14`, color: palette[0] }}>Tablet Mode</span>
              </div>

              {/* Tablet Viewport content */}
              <div className="flex-1 flex flex-col gap-2 min-h-0">
                {/* Stream Preview */}
                <div className="aspect-[4/3] w-full bg-gradient-to-tr from-purple-950 to-[#2362A2]/30 rounded-lg relative overflow-hidden flex items-center justify-center shrink-0 border border-neutral-900">
                  <span className="text-xl">🎮</span>
                  <div className="absolute top-1.5 left-1.5 bg-black/60 px-1.5 py-0.5 rounded text-[6px] flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-red-500"></span>
                    <span>1080p</span>
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-2 gap-2 text-[8px] flex-1 min-h-0 overflow-hidden">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 flex flex-col justify-between">
                    <span className="text-neutral-500 font-bold uppercase tracking-wider text-[7px]">Viewer Count</span>
                    <strong className="text-sm font-black mt-1">1.4k</strong>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 flex flex-col justify-between">
                    <span className="text-neutral-500 font-bold uppercase tracking-wider text-[7px]">Audio Status</span>
                    <span className="font-bold mt-1" style={{ color: palette[0] }}>Normal</span>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 col-span-2 flex flex-col justify-between overflow-hidden">
                    <span className="text-neutral-500 font-bold uppercase tracking-wider text-[7px]">Sources</span>
                    <div className="flex flex-col gap-1 mt-1 text-[7px]">
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>• Game Link</span>
                        <span className="font-bold" style={{ color: palette[1] }}>ON</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>• Webcam</span>
                        <span className="font-bold" style={{ color: palette[1] }}>ON</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Mobile (iPhone Portrait Mockup) - Right foreground */}
          <div className="absolute z-30 w-[22%] md:w-[16%] aspect-[9/19.5] rounded-[2rem] border-[4px] border-neutral-800 bg-neutral-950 shadow-2xl flex flex-col overflow-hidden right-2 md:right-[10%] bottom-[-20px] transform rotate-3 hover:scale-105 hover:z-40 transition-all duration-500 select-none">
            {/* Dynamic Island Notch */}
            <div className="absolute top-2 w-[35%] h-3.5 bg-neutral-800 rounded-full left-1/2 -translate-x-1/2 z-20 flex justify-center items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-900/50 absolute left-2"></span>
            </div>

            {/* Mobile Screen Content */}
            <div className="flex-1 bg-neutral-950 text-white flex flex-col p-2.5 pt-7 relative overflow-hidden font-sans">
              
              {/* Simulated Mobile Stream Overlay view */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-neutral-950 to-neutral-950 flex flex-col p-2 justify-between">
                
                {/* Stats Bar */}
                <div className="flex items-center justify-between mt-1 z-10">
                  <div className="flex items-center gap-1">
                    <span className="px-1 py-0.5 rounded bg-red-600 text-[6px] font-black text-white leading-none">LIVE</span>
                    <span className="text-[7px] text-neutral-300 font-mono">01:14</span>
                  </div>
                  <span className="text-[7px] text-neutral-400 font-bold">👤 1.4k</span>
                </div>

                {/* Facecam Mini Overlay */}
                <div className="w-10 h-10 rounded border border-white/20 bg-neutral-900/80 absolute top-10 right-2 overflow-hidden flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>

                {/* Mobile View center text */}
                <div className="my-auto flex flex-col items-center justify-center gap-1.5 opacity-40">
                  <span className="text-lg">🎮</span>
                  <span className="text-[6px] tracking-widest text-center">GAMEPLAYING STREAM</span>
                </div>

                {/* Mobile Control Panel */}
                <div className="flex flex-col gap-2 mt-auto">
                  {/* Chat bubbles */}
                  <div className="flex flex-col gap-1 text-[6px] max-w-[80%] bg-black/30 p-1.5 rounded-lg border border-white/5">
                    <div><strong className="text-[#B8E218]">Alex:</strong> Mobile works!</div>
                    <div><strong className="text-purple-400">GG:</strong> Lag free?</div>
                  </div>

                  {/* Buttons Grid */}
                  <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-neutral-900">
                    <div className="bg-[#B8E218] text-black rounded py-1 flex items-center justify-center text-[7px] font-bold cursor-pointer hover:opacity-90">
                      Mic
                    </div>
                    <div className="bg-neutral-800 text-white rounded py-1 flex items-center justify-center text-[7px] font-bold cursor-pointer hover:bg-neutral-700">
                      Cam
                    </div>
                    <div className="bg-red-600 text-white rounded py-1 flex items-center justify-center text-[7px] font-bold cursor-pointer hover:bg-red-700">
                      End
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Styled scrollbar for browser iframe mockup */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-thin::-webkit-scrollbar {
          width: 5px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #171717;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #52525b;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
