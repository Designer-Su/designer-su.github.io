"use client";

import React, { useState } from "react";

interface DataPointLeft {
  year: number;
  total: number; // in thousands
  single: number; // in thousands
  ratio: number; // percentage
}

interface DataPointRight {
  year: number;
  marriages: number; // in thousands
}

export default function SoloWeddingResearchCharts() {
  const [hoveredIndexLeft, setHoveredIndexLeft] = useState<number | null>(null);
  const [hoveredIndexRight, setHoveredIndexRight] = useState<number | null>(null);

  // Data for Left Chart: 1-Person Households Trend
  const dataLeft: DataPointLeft[] = [
    { year: 2018, total: 19979, single: 5849, ratio: 29.3 },
    { year: 2019, total: 20343, single: 6148, ratio: 30.2 },
    { year: 2020, total: 20927, single: 6634, ratio: 31.7 },
    { year: 2021, total: 21448, single: 7163, ratio: 33.4 },
    { year: 2022, total: 21774, single: 7512, ratio: 34.5 },
    { year: 2023, total: 22073, single: 7836, ratio: 35.5 },
  ];

  // Data for Right Chart: Total Marriages Decline
  const dataRight: DataPointRight[] = [
    { year: 2014, marriages: 305.5 },
    { year: 2015, marriages: 302.8 },
    { year: 2016, marriages: 281.6 },
    { year: 2017, marriages: 264.5 },
    { year: 2018, marriages: 257.6 },
    { year: 2019, marriages: 239.2 },
    { year: 2020, marriages: 213.5 },
    { year: 2021, marriages: 192.5 },
    { year: 2022, marriages: 191.7 },
    { year: 2023, marriages: 193.7 },
  ];

  // Dimensions & Margins
  const width = 500;
  const height = 300;
  const margin = { top: 40, right: 45, bottom: 45, left: 55 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scales Left Chart
  const maxTotalLeft = 24000;
  const getXLeft = (index: number) => margin.left + (index / (dataLeft.length - 1)) * chartWidth;
  const getYTotalLeft = (value: number) =>
    margin.top + chartHeight - (value / maxTotalLeft) * chartHeight;
  const getYRatioLeft = (value: number) => {
    // Map ratio range 25% to 40% to chart height for better visual separation
    const minRatio = 25;
    const maxRatio = 40;
    const clampedVal = Math.max(minRatio, Math.min(maxRatio, value));
    return (
      margin.top +
      chartHeight -
      ((clampedVal - minRatio) / (maxRatio - minRatio)) * chartHeight
    );
  };

  // Scales Right Chart
  const maxMarriagesRight = 350;
  const getXRight = (index: number) => margin.left + (index / (dataRight.length - 1)) * chartWidth;
  const getYRight = (value: number) =>
    margin.top + chartHeight - (value / maxMarriagesRight) * chartHeight;

  // Generating Line Path for Ratio in Left Chart
  const ratioLinePath = dataLeft
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getXLeft(i)} ${getYRatioLeft(d.ratio)}`)
    .join(" ");

  return (
    <div className="mt-16 w-full flex flex-col gap-12">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl text-neutral-900 font-bold tracking-tight">
          Why &ldquo;Solo Wedding&rdquo;?
        </h3>
        <p className="mt-2 text-neutral-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Behind Fiora lies a structural shift in demographics and social values: the dramatic rise of single-person households and the decline of traditional marriage.
        </p>
      </div>

      {/* Grid of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Chart: Single-Person Households */}
        <div className="flex flex-col bg-neutral-50/50 border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_30px_rgba(169,62,50,0.04)] transition-all duration-500 group relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Demographic Data</span>
              <h4 className="text-lg md:text-xl font-bold text-neutral-800 mt-1">
                Single-Person Households & Ratio Trend
              </h4>
            </div>
          </div>

          {/* SVG Container */}
          <div className="relative w-full aspect-[5/3] min-h-[220px]">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
              {/* Y-Axis Gridlines (Left axis - Total Households) */}
              {[0, 6000, 12000, 18000, 24000].map((tick) => (
                <g key={tick} className="opacity-40">
                  <line
                    x1={margin.left}
                    y1={getYTotalLeft(tick)}
                    x2={width - margin.right}
                    y2={getYTotalLeft(tick)}
                    stroke="#e5e5e5"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                  />
                  <text
                    x={margin.left - 10}
                    y={getYTotalLeft(tick) + 4}
                    textAnchor="end"
                    className="text-[10px] font-bold fill-neutral-400"
                  >
                    {tick.toLocaleString()}
                  </text>
                </g>
              ))}

              {/* Y-Axis Gridlines (Right axis - Ratio %) */}
              {[25, 30, 35, 40].map((tick) => (
                <text
                  key={tick}
                  x={width - margin.right + 10}
                  y={getYRatioLeft(tick) + 4}
                  textAnchor="start"
                  className="text-[10px] font-bold fill-[#A93E32] opacity-80"
                >
                  {tick}%
                </text>
              ))}

              {/* X-Axis line */}
              <line
                x1={margin.left}
                y1={height - margin.bottom}
                x2={width - margin.right}
                y2={height - margin.bottom}
                stroke="#d4d4d4"
                strokeWidth={1.5}
              />

              {/* Overlapping Bar Charts */}
              {dataLeft.map((d, i) => {
                const barWidth = 32;
                const xPos = getXLeft(i) - barWidth / 2;
                const isHovered = hoveredIndexLeft === i;

                return (
                  <g
                    key={d.year}
                    onMouseEnter={() => setHoveredIndexLeft(i)}
                    onMouseLeave={() => setHoveredIndexLeft(null)}
                    className="cursor-pointer"
                  >
                    {/* Background trigger zone */}
                    <rect
                      x={getXLeft(i) - 40}
                      y={margin.top}
                      width={80}
                      height={chartHeight}
                      fill="transparent"
                    />

                    {/* Total Households Bar (Light rose-gray) */}
                    <rect
                      x={xPos}
                      y={getYTotalLeft(d.total)}
                      width={barWidth}
                      height={height - margin.bottom - getYTotalLeft(d.total)}
                      fill={isHovered ? "#DFD2D0" : "#EADEDC"}
                      rx={6}
                      className="transition-all duration-300"
                    />

                    {/* 1-Person Households Bar (Warm accent rose-burgundy) */}
                    <rect
                      x={xPos}
                      y={getYTotalLeft(d.single)}
                      width={barWidth}
                      height={height - margin.bottom - getYTotalLeft(d.single)}
                      fill={isHovered ? "#962D22" : "#A93E32"}
                      rx={6}
                      className="transition-all duration-300"
                    />

                    {/* Year Label */}
                    <text
                      x={getXLeft(i)}
                      y={height - margin.bottom + 20}
                      textAnchor="middle"
                      className={`text-xs font-bold transition-colors duration-300 ${
                        isHovered ? "fill-[#A93E32] font-black" : "fill-neutral-500"
                      }`}
                    >
                      {d.year}
                    </text>
                  </g>
                );
              })}

              {/* Ratio Line Chart Overlay */}
              <path
                d={ratioLinePath}
                fill="none"
                stroke="#A93E32"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none drop-shadow-[0_2px_4px_rgba(169,62,50,0.15)]"
              />

              {/* Ratio Points */}
              {dataLeft.map((d, i) => {
                const isHovered = hoveredIndexLeft === i;
                return (
                  <circle
                    key={d.year}
                    cx={getXLeft(i)}
                    cy={getYRatioLeft(d.ratio)}
                    r={isHovered ? 7 : 5}
                    fill="#ffffff"
                    stroke="#A93E32"
                    strokeWidth={isHovered ? 4 : 3}
                    className="transition-all duration-300 pointer-events-none"
                  />
                );
              })}
            </svg>



            {/* Hover Tooltip */}
            {hoveredIndexLeft !== null && (
              <div
                className="absolute bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] pointer-events-none transition-all duration-300 ease-out z-10 w-48 text-xs flex flex-col gap-1.5"
                style={{
                  left: `${Math.min(
                    85,
                    Math.max(5, (getXLeft(hoveredIndexLeft) / width) * 100 - 24)
                  )}%`,
                  top: `${Math.max(0, (getYRatioLeft(dataLeft[hoveredIndexLeft].ratio) / height) * 100 - 48)}%`,
                }}
              >
                <div className="font-bold text-neutral-800 border-b border-neutral-100 pb-1 mb-1 flex justify-between items-center">
                  <span>Year {dataLeft[hoveredIndexLeft].year}</span>
                  <span className="text-[#A93E32] font-black">{dataLeft[hoveredIndexLeft].ratio}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Total Households:</span>
                  <span className="font-bold text-neutral-700">
                    {(dataLeft[hoveredIndexLeft].total * 1000).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">1-Person:</span>
                  <span className="font-bold text-neutral-900">
                    {(dataLeft[hoveredIndexLeft].single * 1000).toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="flex flex-wrap justify-between items-center gap-3 text-[10px] md:text-xs text-neutral-500 mt-4 border-t border-neutral-200/40 pt-4 pointer-events-none">
            <div className="font-bold text-neutral-400 uppercase tracking-wider">
              Unit: Thousand, %
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#EADEDC] rounded-sm" />
                <span>Total Households</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#A93E32] rounded-sm" />
                <span>1-Person</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[#A93E32] inline-block relative bottom-0.5">
                  <span className="w-1.5 h-1.5 bg-white border border-[#A93E32] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
                <span>Ratio (%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chart: Decline in Marriage Rate */}
        <div className="flex flex-col bg-neutral-50/50 border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_30px_rgba(169,62,50,0.04)] transition-all duration-500 group relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Societal Shift</span>
              <h4 className="text-lg md:text-xl font-bold text-neutral-800 mt-1">
                Annual Marriage Count Trend
              </h4>
            </div>
          </div>

          {/* SVG Container */}
          <div className="relative w-full aspect-[5/3] min-h-[220px]">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
              {/* Y-Axis Gridlines */}
              {[100, 200, 300].map((tick) => (
                <g key={tick} className="opacity-40">
                  <line
                    x1={margin.left}
                    y1={getYRight(tick)}
                    x2={width - margin.right}
                    y2={getYRight(tick)}
                    stroke="#e5e5e5"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                  />
                  <text
                    x={margin.left - 10}
                    y={getYRight(tick) + 4}
                    textAnchor="end"
                    className="text-[10px] font-bold fill-neutral-400"
                  >
                    {tick}k
                  </text>
                </g>
              ))}

              {/* X-Axis line */}
              <line
                x1={margin.left}
                y1={height - margin.bottom}
                x2={width - margin.right}
                y2={height - margin.bottom}
                stroke="#d4d4d4"
                strokeWidth={1.5}
              />

              {/* Bars */}
              {dataRight.map((d, i) => {
                const barWidth = 20;
                const xPos = getXRight(i) - barWidth / 2;
                const isHovered = hoveredIndexRight === i;

                // Gradient height calculations
                const barHeight = height - margin.bottom - getYRight(d.marriages);

                return (
                  <g
                    key={d.year}
                    onMouseEnter={() => setHoveredIndexRight(i)}
                    onMouseLeave={() => setHoveredIndexRight(null)}
                    className="cursor-pointer"
                  >
                    {/* Background trigger zone */}
                    <rect
                      x={getXRight(i) - 20}
                      y={margin.top}
                      width={40}
                      height={chartHeight}
                      fill="transparent"
                    />

                    {/* Gradient Fill Bar */}
                    <rect
                      x={xPos}
                      y={getYRight(d.marriages)}
                      width={barWidth}
                      height={barHeight}
                      fill={isHovered ? "url(#hoverGrad)" : "url(#accentGrad)"}
                      rx={4}
                      className="transition-all duration-300"
                    />

                    {/* Year Label */}
                    <text
                      x={getXRight(i)}
                      y={height - margin.bottom + 20}
                      textAnchor="middle"
                      className={`text-[10px] font-bold md:text-xs transition-colors duration-300 ${
                        isHovered ? "fill-[#A93E32] font-black" : "fill-neutral-500"
                      }`}
                    >
                      {d.year}
                    </text>
                  </g>
                );
              })}

              {/* Definitions for Gradients */}
              <defs>
                <linearGradient id="accentGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A93E32" />
                  <stop offset="100%" stopColor="#D36155" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="hoverGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#962D22" />
                  <stop offset="100%" stopColor="#A93E32" />
                </linearGradient>
              </defs>
            </svg>



            {/* Hover Tooltip */}
            {hoveredIndexRight !== null && (
              <div
                className="absolute bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] pointer-events-none transition-all duration-300 ease-out z-10 w-44 text-xs flex flex-col gap-1"
                style={{
                  left: `${Math.min(
                    85,
                    Math.max(5, (getXRight(hoveredIndexRight) / width) * 100 - 20)
                  )}%`,
                  top: `${Math.max(0, (getYRight(dataRight[hoveredIndexRight].marriages) / height) * 100 - 44)}%`,
                }}
              >
                <div className="font-bold text-neutral-800 border-b border-neutral-100 pb-1 mb-1 flex justify-between items-center">
                  <span>Year {dataRight[hoveredIndexRight].year}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Marriages:</span>
                  <span className="font-black text-[#A93E32]">
                    {(dataRight[hoveredIndexRight].marriages * 1000).toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="flex flex-wrap justify-between items-center gap-3 text-[10px] md:text-xs text-neutral-500 mt-4 border-t border-neutral-200/40 pt-4 pointer-events-none">
            <div className="font-bold text-neutral-400 uppercase tracking-wider">
              Unit: Thousands
            </div>
            <div className="text-neutral-400 font-semibold italic">
              Source: Statistics Korea (KOSTAT) [Marriage & Divorce Statistics]
            </div>
          </div>
        </div>
      </div>

      {/* Derived Insights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Insight Card 1 */}
        <div className="group bg-neutral-50/60 hover:bg-white border border-neutral-200/60 hover:border-[#A93E32]/30 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(169,62,50,0.05)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#A93E32] opacity-80" />
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#A93E32]/10 text-[#A93E32] text-lg font-black">
              01
            </span>
            <div className="flex flex-col">
              <h5 className="text-lg font-bold text-neutral-900 leading-tight">
                Demographic Shift
              </h5>
              <p className="mt-3 text-neutral-600 text-sm md:text-base leading-relaxed">
                As the single-person household and bihon (non-marriage) population rises, the overall number of weddings continues to decrease. Society is moving towards a structure centered on the individual rather than the traditional nuclear family.
              </p>
            </div>
          </div>
        </div>

        {/* Insight Card 2 */}
        <div className="group bg-neutral-50/60 hover:bg-white border border-neutral-200/60 hover:border-[#A93E32]/30 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(169,62,50,0.05)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D36155] opacity-80" />
          <div className="flex gap-4 items-start">
            <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#D36155]/10 text-[#D36155] text-lg font-black">
              02
            </span>
            <div className="flex flex-col">
              <h5 className="text-lg font-bold text-neutral-900 leading-tight">
                Cultural Opportunity
              </h5>
              <p className="mt-3 text-neutral-600 text-sm md:text-base leading-relaxed">
                Moving beyond the traditional social expectations of marriage, Fiora proposes &ldquo;Solo Wedding&rdquo; as a premium, legitimate ceremony to honor self-celebration, emotional milestone marking, and personal growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
