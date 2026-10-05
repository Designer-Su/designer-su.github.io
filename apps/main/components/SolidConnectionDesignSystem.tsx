import React from "react";

export default function SolidConnectionDesignSystem() {
  const primaryColors = [
    { name: "P900", hex: "#262181" },
    { name: "P800", hex: "#403A62" },
    { name: "P700", hex: "#4E48D0" },
    { name: "Primary", hex: "#5950F6", main: true },
    { name: "P600", hex: "#6259F7" },
    { name: "P500", hex: "#726AF7" },
    { name: "P400", hex: "#837CF8" },
    { name: "P300", hex: "#938DF9" },
    { name: "P200", hex: "#AABAFA" },
    { name: "P100", hex: "#EFEEFF" },
  ];

  const secondaryColors = [
    { name: "S900", hex: "#1D2F63" },
    { name: "S800", hex: "#2942AA" },
    { name: "S700", hex: "#345582" },
    { name: "S600", hex: "#4068D9" },
    { name: "Primary", hex: "#4672EE", main: true },
    { name: "S500", hex: "#5C82F0" },
    { name: "S400", hex: "#6AAAF4" },
    { name: "S300", hex: "#8AABF6" },
    { name: "S200", hex: "#C7DAFA" },
    { name: "S100", hex: "#E6EDFD" },
  ];

  const subColorsA = [
    { name: "SubA", hex: "#388CE8", main: true },
    { name: "SA500", hex: "#60A3ED" },
    { name: "SA100", hex: "#D6E8F9" },
  ];

  const subColorsB = [
    { name: "SubB", hex: "#2AA4E2", main: true },
    { name: "SB500", hex: "#6AC0EB" },
    { name: "SB100", hex: "#AADDF3" },
  ];

  const monoScale = [
    { name: "K900", hex: "#1A1F27" },
    { name: "K800", hex: "#31353D" },
    { name: "K700", hex: "#464C52" },
    { name: "K600", hex: "#5F6268" },
    { name: "K500", hex: "#76797D" },
    { name: "K400", hex: "#919397" },
    { name: "K300", hex: "#AAB0B5" },
    { name: "K200", hex: "#C0C7CB" },
    { name: "K100", hex: "#DDDCDF" },
    { name: "K50", hex: "#F5F5F5" },
    { name: "K0", hex: "#FFFFFF" },
  ];

  const typography = [
    { weight: "Bold", size: 24, lh: "140%", style: "Bold 1" },
    { weight: "Bold", size: 20, lh: "150%", style: "Bold 2" },
    { weight: "Bold", size: 18, lh: "150%", style: "Bold 3" },
    { weight: "SemiBold", size: 32, lh: "150%", style: "SemiBold 1" },
    { weight: "SemiBold", size: 24, lh: "150%", style: "SemiBold 2" },
    { weight: "SemiBold", size: 18, lh: "150%", style: "SemiBold 5" },
    { weight: "SemiBold", size: 16, lh: "150%", style: "SemiBold 7" },
    { weight: "Regular", size: 16, lh: "150%", style: "Regular 1" },
    { weight: "Regular", size: 14, lh: "150%", style: "Regular 2" },
    { weight: "Regular", size: 12, lh: "150%", style: "Regular 4" },
  ];

  return (
    <div className="w-full bg-neutral-50 rounded-3xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-center my-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-black mb-1">Design System</h3>
        <p className="text-sm text-neutral-500">Core Typography & Color Guidelines for Solid Connection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Colors Section */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#5950F6]"></span>
              App Primary Color
            </h4>
            <div className="h-12 w-full bg-[#5950F6] rounded-t-lg mb-0.5 flex items-end p-2 text-white font-bold text-xs">
              #5950F6
            </div>
            <div className="flex w-full h-8 rounded-b-lg overflow-hidden">
              {primaryColors.map((c) => (
                <div key={c.name} className="flex-1 relative group cursor-pointer" style={{ backgroundColor: c.hex }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white text-[8px] font-medium p-0.5">
                    <span>{c.name}</span>
                    <span>{c.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#4672EE]"></span>
              App Secondary Color
            </h4>
            <div className="h-12 w-full bg-[#4672EE] rounded-t-lg mb-0.5 flex items-end p-2 text-white font-bold text-xs">
              #4672EE
            </div>
            <div className="flex w-full h-8 rounded-b-lg overflow-hidden">
              {secondaryColors.map((c) => (
                <div key={c.name} className="flex-1 relative group cursor-pointer" style={{ backgroundColor: c.hex }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white text-[8px] font-medium p-0.5">
                    <span>{c.name}</span>
                    <span>{c.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold mb-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#388CE8]"></span>
                App Sub Color A
              </h4>
              <div className="h-10 w-full bg-[#388CE8] rounded-t-lg mb-0.5 flex items-end p-2 text-white font-bold text-[10px]">
                #388CE8
              </div>
              <div className="flex w-full h-6 rounded-b-lg overflow-hidden">
                {subColorsA.map((c) => (
                  <div key={c.name} className="flex-1 relative group cursor-pointer" style={{ backgroundColor: c.hex }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white text-[7px] font-medium p-0.5">
                      <span>{c.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold mb-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2AA4E2]"></span>
                App Sub Color B
              </h4>
              <div className="h-10 w-full bg-[#2AA4E2] rounded-t-lg mb-0.5 flex items-end p-2 text-white font-bold text-[10px]">
                #2AA4E2
              </div>
              <div className="flex w-full h-6 rounded-b-lg overflow-hidden">
                {subColorsB.map((c) => (
                  <div key={c.name} className="flex-1 relative group cursor-pointer" style={{ backgroundColor: c.hex }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white text-[7px] font-medium p-0.5">
                      <span>{c.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-neutral-800"></span>
              Mono Scale
            </h4>
            <div className="flex w-full h-10 rounded-lg overflow-hidden border border-neutral-200">
              {monoScale.map((c) => (
                <div key={c.name} className="flex-1 relative group cursor-pointer" style={{ backgroundColor: c.hex }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-[8px] font-medium p-0.5">
                    <span>{c.name}</span>
                    <span>{c.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="flex flex-col h-full">
          <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
            <span className="bg-neutral-900 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">Aa</span>
            Typography <span className="text-neutral-400 font-normal text-xs ml-1">Pretendard</span>
          </h4>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col h-full">
            <div className="flex flex-col flex-grow divide-y divide-neutral-100">
              {typography.map((type, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-4 hover:bg-neutral-50 transition-colors">
                  {/* Specs */}
                  <div className="flex flex-col gap-1 shrink-0 sm:w-36">
                    <span className="text-xs font-black text-neutral-900">{type.style}</span>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wide">
                      {type.weight} • {type.size}px • {type.lh}
                    </span>
                  </div>
                  {/* Visual Preview */}
                  <div className="flex-1 min-w-0">
                    <div 
                      style={{ 
                        fontSize: `${type.size}px`, 
                        fontWeight: type.weight === "Bold" ? 700 : type.weight === "SemiBold" ? 600 : 400, 
                        lineHeight: type.lh,
                        fontFamily: "Pretendard, system-ui, -apple-system, sans-serif"
                      }} 
                      className="text-neutral-950 truncate"
                    >
                      Solid Connection
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-5 bg-neutral-50/50 flex flex-col gap-3 border-t border-neutral-100 text-xs">
              <div className="font-bold text-neutral-400 uppercase tracking-wider text-[9px]">Sample Rendering</div>
              <div style={{ fontWeight: 700, fontSize: "16px", lineHeight: "140%" }} className="text-neutral-900">
                Solid Connection: Global Exchange
              </div>
              <div style={{ fontWeight: 600, fontSize: "14px", lineHeight: "150%" }} className="text-neutral-700">
                Connecting students worldwide with verified mentoring.
              </div>
              <div style={{ fontWeight: 400, fontSize: "12px", lineHeight: "150%" }} className="text-neutral-500 max-w-sm">
                For users facing too much information, the community gives a clear place to start.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
