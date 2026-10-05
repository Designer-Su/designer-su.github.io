module.exports = [
"[project]/apps/graphic/components/GraphicPathShowcase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GraphicPathShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PRESETS = [
    {
        id: "fluid-wave",
        name: "Organic Fluid Path",
        description: "Smooth Bezier curves creating modern generative liquid motion.",
        points: [
            {
                x: 50,
                y: 200,
                handle2: {
                    x: 120,
                    y: 80
                }
            },
            {
                x: 250,
                y: 100,
                handle1: {
                    x: 180,
                    y: 120
                },
                handle2: {
                    x: 320,
                    y: 80
                }
            },
            {
                x: 450,
                y: 250,
                handle1: {
                    x: 380,
                    y: 300
                },
                handle2: {
                    x: 520,
                    y: 200
                }
            },
            {
                x: 650,
                y: 120,
                handle1: {
                    x: 580,
                    y: 70
                },
                handle2: {
                    x: 720,
                    y: 180
                }
            },
            {
                x: 850,
                y: 220,
                handle1: {
                    x: 780,
                    y: 260
                }
            }
        ],
        closed: false,
        gradient: [
            "#ec4899",
            "#8b5cf6",
            "#3b82f6"
        ]
    },
    {
        id: "geometric-loop",
        name: "Symmetric Vector Loop",
        description: "Closed mathematical loop with continuous curvature anchors.",
        points: [
            {
                x: 450,
                y: 80,
                handle1: {
                    x: 300,
                    y: 80
                },
                handle2: {
                    x: 600,
                    y: 80
                }
            },
            {
                x: 750,
                y: 220,
                handle1: {
                    x: 750,
                    y: 140
                },
                handle2: {
                    x: 750,
                    y: 300
                }
            },
            {
                x: 450,
                y: 360,
                handle1: {
                    x: 600,
                    y: 360
                },
                handle2: {
                    x: 300,
                    y: 360
                }
            },
            {
                x: 150,
                y: 220,
                handle1: {
                    x: 150,
                    y: 300
                },
                handle2: {
                    x: 150,
                    y: 140
                }
            }
        ],
        closed: true,
        gradient: [
            "#06b6d4",
            "#3b82f6",
            "#6366f1"
        ]
    },
    {
        id: "monogram-crest",
        name: "Dynamic Branding Crest",
        description: "Vector path structure for identity symbols and iconographic logomarks.",
        points: [
            {
                x: 200,
                y: 320,
                handle2: {
                    x: 250,
                    y: 120
                }
            },
            {
                x: 450,
                y: 60,
                handle1: {
                    x: 350,
                    y: 60
                },
                handle2: {
                    x: 550,
                    y: 60
                }
            },
            {
                x: 700,
                y: 320,
                handle1: {
                    x: 650,
                    y: 120
                },
                handle2: {
                    x: 620,
                    y: 370
                }
            },
            {
                x: 450,
                y: 320,
                handle1: {
                    x: 520,
                    y: 320
                },
                handle2: {
                    x: 380,
                    y: 320
                }
            }
        ],
        closed: true,
        gradient: [
            "#f59e0b",
            "#ef4444",
            "#ec4899"
        ]
    }
];
function GraphicPathShowcase() {
    const [activePreset, setActivePreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(PRESETS[0]);
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(PRESETS[0].points);
    const [selectedPoint, setSelectedPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedHandle, setSelectedHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [strokeWidth, setStrokeWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const [showHandles, setShowHandles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedPath, setCopiedPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load preset
    const handleSelectPreset = (preset)=>{
        setActivePreset(preset);
        setPoints(JSON.parse(JSON.stringify(preset.points)));
        setSelectedPoint(null);
        setSelectedHandle(null);
    };
    // Generate SVG path string (d attribute)
    const getPathString = (pts = points, isClosed = activePreset.closed)=>{
        if (pts.length === 0) return "";
        let d = `M ${pts[0].x} ${pts[0].y}`;
        for(let i = 1; i < pts.length; i++){
            const prev = pts[i - 1];
            const curr = pts[i];
            const cp1 = prev.handle2 ? prev.handle2 : {
                x: prev.x,
                y: prev.y
            };
            const cp2 = curr.handle1 ? curr.handle1 : {
                x: curr.x,
                y: curr.y
            };
            d += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${curr.x} ${curr.y}`;
        }
        if (isClosed && pts.length > 2) {
            const last = pts[pts.length - 1];
            const first = pts[0];
            const cp1 = last.handle2 ? last.handle2 : {
                x: last.x,
                y: last.y
            };
            const cp2 = first.handle1 ? first.handle1 : {
                x: first.x,
                y: first.y
            };
            d += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${first.x} ${first.y} Z`;
        }
        return d;
    };
    // Mouse Dragging on SVG
    const handleMouseDown = (pointIndex, handle = null)=>{
        setSelectedPoint(pointIndex);
        setSelectedHandle(handle);
    };
    const handleMouseMove = (e)=>{
        if (selectedPoint === null || !svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        const mouseX = Math.round((e.clientX - rect.left) / rect.width * 900);
        const mouseY = Math.round((e.clientY - rect.top) / rect.height * 440);
        setPoints((prev)=>{
            const updated = [
                ...prev
            ];
            if (selectedHandle === null) {
                // Move anchor point and offset handles accordingly
                const dx = mouseX - updated[selectedPoint].x;
                const dy = mouseY - updated[selectedPoint].y;
                updated[selectedPoint].x = mouseX;
                updated[selectedPoint].y = mouseY;
                if (updated[selectedPoint].handle1) {
                    updated[selectedPoint].handle1.x += dx;
                    updated[selectedPoint].handle1.y += dy;
                }
                if (updated[selectedPoint].handle2) {
                    updated[selectedPoint].handle2.x += dx;
                    updated[selectedPoint].handle2.y += dy;
                }
            } else if (selectedHandle === "handle1" && updated[selectedPoint].handle1) {
                updated[selectedPoint].handle1 = {
                    x: mouseX,
                    y: mouseY
                };
            } else if (selectedHandle === "handle2" && updated[selectedPoint].handle2) {
                updated[selectedPoint].handle2 = {
                    x: mouseX,
                    y: mouseY
                };
            }
            return updated;
        });
    };
    const handleMouseUp = ()=>{
        setSelectedPoint(null);
        setSelectedHandle(null);
    };
    // Animation Loop for fluid motion demonstration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAnimating) {
            if (animRef.current) cancelAnimationFrame(animRef.current);
            return;
        }
        let startTime = performance.now();
        const animate = (now)=>{
            const elapsed = (now - startTime) / 1000;
            setPoints((prev)=>prev.map((pt, idx)=>{
                    const offset = idx * 0.8;
                    const dy = Math.sin(elapsed * 2 + offset) * 1.5;
                    const dx = Math.cos(elapsed * 1.5 + offset) * 1.2;
                    return {
                        ...pt,
                        y: pt.y + dy,
                        x: pt.x + dx
                    };
                }));
            animRef.current = requestAnimationFrame(animate);
        };
        animRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, [
        isAnimating
    ]);
    const copySvgString = ()=>{
        const svgCode = `<svg viewBox="0 0 900 440" xmlns="http://www.w3.org/2000/svg">\n  <path d="${getPathString()}" fill="none" stroke="url(#grad)" stroke-width="${strokeWidth}" stroke-linecap="round" />\n</svg>`;
        navigator.clipboard.writeText(svgCode);
        setCopiedPath(true);
        setTimeout(()=>setCopiedPath(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-neutral-900 text-white p-6 rounded-3xl border border-neutral-800 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono tracking-widest text-emerald-400 uppercase",
                                children: "Interactive Vector Engine"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-black tracking-tight",
                                children: "Graphic Path Generator"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-400",
                                children: "Drag anchor points & control handles to manipulate Bezier curves in real time."
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: PRESETS.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSelectPreset(preset),
                                className: `px-4 py-2 rounded-xl text-xs font-bold transition-all ${activePreset.id === preset.id ? "bg-white text-neutral-950 shadow-md scale-105" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`,
                                children: preset.name
                            }, preset.id, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-auto flex items-center gap-3 bg-neutral-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-700 text-xs font-medium text-neutral-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-neutral-400",
                                        children: "Stroke:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "1",
                                        max: "16",
                                        value: strokeWidth,
                                        onChange: (e)=>setStrokeWidth(Number(e.target.value)),
                                        className: "w-24 accent-purple-500 cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-bold w-5",
                                        children: [
                                            strokeWidth,
                                            "px"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-auto flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowHandles(!showHandles),
                                        className: `px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${showHandles ? "bg-purple-600/30 border-purple-500/50 text-purple-200" : "bg-neutral-900/80 border-neutral-700 text-neutral-400"}`,
                                        children: showHandles ? "Hide Nodes" : "Show Nodes"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsAnimating(!isAnimating),
                                        className: `px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${isAnimating ? "bg-emerald-600/30 border-emerald-500/50 text-emerald-200 animate-pulse" : "bg-neutral-900/80 border-neutral-700 text-neutral-400"}`,
                                        children: isAnimating ? "Pause Motion" : "Simulate Motion"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copySvgString,
                                        className: "px-4 py-1.5 rounded-full bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-200 transition-all shadow-md active:scale-95",
                                        children: copiedPath ? "✓ Copied SVG" : "Copy SVG Code"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        ref: svgRef,
                        viewBox: "0 0 900 440",
                        onMouseMove: handleMouseMove,
                        onMouseUp: handleMouseUp,
                        onMouseLeave: handleMouseUp,
                        className: "w-full h-[320px] sm:h-[400px] md:h-[460px] cursor-crosshair select-none relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "pathGradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: activePreset.gradient[0]
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: activePreset.gradient[1]
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: activePreset.gradient[2]
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "glow",
                                        x: "-20%",
                                        y: "-20%",
                                        width: "140%",
                                        height: "140%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                stdDeviation: "8",
                                                result: "blur"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                in: "SourceGraphic",
                                                in2: "blur",
                                                operator: "over"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: getPathString(),
                                fill: "none",
                                stroke: activePreset.gradient[0],
                                strokeWidth: strokeWidth * 2.5,
                                strokeLinecap: "round",
                                opacity: "0.25",
                                filter: "url(#glow)"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: getPathString(),
                                fill: activePreset.closed ? "url(#pathGradient)" : "none",
                                fillOpacity: activePreset.closed ? 0.15 : 0,
                                stroke: "url(#pathGradient)",
                                strokeWidth: strokeWidth,
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            showHandles && points.map((pt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        pt.handle1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: pt.x,
                                            y1: pt.y,
                                            x2: pt.handle1.x,
                                            y2: pt.handle1.y,
                                            stroke: "#a855f7",
                                            strokeWidth: "1.5",
                                            strokeDasharray: "3 3",
                                            opacity: "0.6"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                            lineNumber: 316,
                                            columnNumber: 19
                                        }, this),
                                        pt.handle2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: pt.x,
                                            y1: pt.y,
                                            x2: pt.handle2.x,
                                            y2: pt.handle2.y,
                                            stroke: "#a855f7",
                                            strokeWidth: "1.5",
                                            strokeDasharray: "3 3",
                                            opacity: "0.6"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                            lineNumber: 328,
                                            columnNumber: 19
                                        }, this),
                                        pt.handle1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: pt.handle1.x,
                                            cy: pt.handle1.y,
                                            r: "5",
                                            fill: "#a855f7",
                                            stroke: "#ffffff",
                                            strokeWidth: "2",
                                            className: "cursor-pointer hover:scale-150 transition-transform",
                                            onMouseDown: (e)=>{
                                                e.stopPropagation();
                                                handleMouseDown(idx, "handle1");
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                            lineNumber: 342,
                                            columnNumber: 19
                                        }, this),
                                        pt.handle2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: pt.handle2.x,
                                            cy: pt.handle2.y,
                                            r: "5",
                                            fill: "#a855f7",
                                            stroke: "#ffffff",
                                            strokeWidth: "2",
                                            className: "cursor-pointer hover:scale-150 transition-transform",
                                            onMouseDown: (e)=>{
                                                e.stopPropagation();
                                                handleMouseDown(idx, "handle2");
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: pt.x - 7,
                                            y: pt.y - 7,
                                            width: "14",
                                            height: "14",
                                            rx: "3",
                                            fill: selectedPoint === idx ? "#38bdf8" : "#ffffff",
                                            stroke: "#0f172a",
                                            strokeWidth: "2.5",
                                            className: "cursor-grab active:cursor-grabbing hover:scale-125 transition-transform",
                                            onMouseDown: (e)=>{
                                                e.stopPropagation();
                                                handleMouseDown(idx, null);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col gap-3 font-mono text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-neutral-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "uppercase tracking-wider text-[11px] font-bold text-neutral-300",
                                children: "Vector Path Data Output (d)"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-neutral-500",
                                children: "Auto-updated from Bezier Nodes"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/60 p-4 rounded-xl text-purple-300 break-all leading-relaxed select-all overflow-x-auto border border-neutral-800",
                        children: getPathString()
                    }, void 0, false, {
                        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/graphic/components/GraphicPathShowcase.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/graphic/components/GraphicPatternCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GraphicPatternCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PALETTES = {
    cmyk: [
        "#06b6d4",
        "#ec4899",
        "#eab308",
        "#171717"
    ],
    neon: [
        "#a855f7",
        "#ec4899",
        "#3b82f6",
        "#10b981"
    ],
    monochrome: [
        "#ffffff",
        "#a3a3a3",
        "#525252",
        "#171717"
    ],
    sunset: [
        "#f43f5e",
        "#fb923c",
        "#facc15",
        "#8b5cf6"
    ]
};
function GraphicPatternCanvas() {
    const [patternType, setPatternType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("vector-mesh");
    const [palette, setPalette] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("neon");
    const [density, setDensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30);
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const [shapeScale, setShapeScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1.2);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedCode, setCopiedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        active: false
    });
    const animFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Canvas Render Loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let width = canvas.width = canvas.parentElement?.clientWidth || 800;
        let height = canvas.height = 440;
        const handleResize = ()=>{
            if (!canvas || !canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = 440;
        };
        window.addEventListener("resize", handleResize);
        let time = 0;
        const render = ()=>{
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
                for(let r = 0; r <= rows; r++){
                    ctx.beginPath();
                    for(let c = 0; c <= cols; c++){
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
                for(let i = 1; i <= count; i++){
                    const radius = i * 12 * shapeScale % (Math.max(width, height) * 0.7);
                    const pointsCount = 12;
                    ctx.beginPath();
                    for(let p = 0; p <= pointsCount; p++){
                        const angle = p / pointsCount * Math.PI * 2;
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
                const nodes = [];
                // Deterministic pseudo-random seed per node count
                for(let i = 0; i < particleCount; i++){
                    const seed = i * 137.5;
                    const px = ((Math.sin(seed) * 0.5 + 0.5) * width + Math.sin(time + i) * 30 * shapeScale + width) % width;
                    const py = ((Math.cos(seed) * 0.5 + 0.5) * height + Math.cos(time * 0.8 + i) * 30 * shapeScale + height) % height;
                    nodes.push({
                        x: px,
                        y: py,
                        vx: Math.sin(i),
                        vy: Math.cos(i),
                        color: colors[i % colors.length]
                    });
                }
                // Draw connections
                for(let i = 0; i < nodes.length; i++){
                    for(let j = i + 1; j < nodes.length; j++){
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
                for(let r = 0; r < rows; r++){
                    for(let c = 0; c < cols; c++){
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
        return ()=>{
            window.removeEventListener("resize", handleResize);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [
        patternType,
        palette,
        density,
        speed,
        shapeScale,
        isPaused
    ]);
    const handleMouseMove = (e)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.targetX = e.clientX - rect.left;
        mouseRef.current.targetY = e.clientY - rect.top;
        mouseRef.current.active = true;
    };
    const copyPatternConfig = ()=>{
        const config = JSON.stringify({
            patternType,
            palette,
            density,
            speed,
            shapeScale
        }, null, 2);
        navigator.clipboard.writeText(config);
        setCopiedCode(true);
        setTimeout(()=>setCopiedCode(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-neutral-900 text-white p-6 rounded-3xl border border-neutral-800 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono tracking-widest text-cyan-400 uppercase",
                                children: "Graphic App 02 · Generative Canvas Engine"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-black tracking-tight",
                                children: "Dynamic Pattern & Vector Canvas"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-400",
                                children: "Real-time procedural graphic mesh, particle paths, and generative brand visuals."
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPatternType("vector-mesh"),
                                className: `px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${patternType === "vector-mesh" ? "bg-cyan-500 text-neutral-950 shadow-md scale-105" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`,
                                children: "Vector Mesh"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPatternType("radial-waves"),
                                className: `px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${patternType === "radial-waves" ? "bg-cyan-500 text-neutral-950 shadow-md scale-105" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`,
                                children: "Radial Waves"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPatternType("cmyk-particles"),
                                className: `px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${patternType === "cmyk-particles" ? "bg-cyan-500 text-neutral-950 shadow-md scale-105" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`,
                                children: "Node Net"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPatternType("geometric-grid"),
                                className: `px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${patternType === "geometric-grid" ? "bg-cyan-500 text-neutral-950 shadow-md scale-105" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`,
                                children: "Matrix Grid"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-auto flex flex-wrap items-center gap-4 bg-neutral-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-700 text-xs font-medium text-neutral-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-400",
                                                children: "Palette:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                "cmyk",
                                                "neon",
                                                "sunset",
                                                "monochrome"
                                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setPalette(p),
                                                    className: `w-4 h-4 rounded-full border border-white/20 transition-transform ${palette === p ? "scale-125 ring-2 ring-cyan-400" : "opacity-70 hover:opacity-100"}`,
                                                    style: {
                                                        backgroundColor: PALETTES[p][0]
                                                    },
                                                    title: p
                                                }, p, false, {
                                                    fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-400",
                                                children: "Density:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "10",
                                                max: "60",
                                                value: density,
                                                onChange: (e)=>setDensity(Number(e.target.value)),
                                                className: "w-20 accent-cyan-400 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-400",
                                                children: "Scale:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.5",
                                                max: "2.5",
                                                step: "0.1",
                                                value: shapeScale,
                                                onChange: (e)=>setShapeScale(Number(e.target.value)),
                                                className: "w-20 accent-cyan-400 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-auto flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPaused(!isPaused),
                                        className: `px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${isPaused ? "bg-amber-600/30 border-amber-500/50 text-amber-200" : "bg-neutral-900/80 border-neutral-700 text-neutral-400"}`,
                                        children: isPaused ? "Play Engine" : "Pause Motion"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copyPatternConfig,
                                        className: "px-4 py-1.5 rounded-full bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-200 transition-all shadow-md active:scale-95",
                                        children: copiedCode ? "✓ Config Copied" : "Export Pattern Tokens"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        onMouseMove: handleMouseMove,
                        className: "w-full h-[340px] sm:h-[400px] md:h-[460px] cursor-crosshair select-none block"
                    }, void 0, false, {
                        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/graphic/components/GraphicPatternCanvas.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/graphic/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "portfolioData",
    ()=>portfolioData
]);
const portfolioData = {
    hero: {
        greeting: "Sukyeong Lee",
        headline: "is a UX/UI Designer who turns research into clear flows, usable interfaces, and measurable product results.",
        about: "I design products by turning user research, data, and fast iteration into simpler flows. My work focuses on usability, clear decision-making, and product outcomes users can feel.",
        skills: [
            "User Experience",
            "User Interface",
            "Prototyping",
            "Design Systems",
            "Interaction Design",
            "Wireframing",
            "Figma",
            "Web Design",
            "User Research",
            "User Testing",
            "Adobe CC"
        ]
    },
    experience: [
        {
            id: 1,
            role: "Operations Intern",
            company: "SAP Labs Korea",
            period: "Sep 2025 - Present",
            description: "Optimize SharePoint information architecture to improve accessibility and operational efficiency. Analyze internal workflows, resolve communication gaps, and produce data-driven reports to support decision-making and employee experience initiatives."
        },
        {
            id: 2,
            role: "UX Design Intern",
            company: "Volt Micro Co., Ltd.",
            period: "Sep 2023 - Dec 2023",
            description: "Led the web and mobile redesign of CameraFi Studio, improving feature engagement by 28% and average session duration by 1.6x through A/B testing and behavior analysis. Prepared CES 2024 exhibition assets and partnered with engineers to deliver production-ready UX improvements."
        },
        {
            id: 3,
            role: "Sales Assistant",
            company: "Adidas Korea",
            period: "Jan 2021 - Jan 2023",
            description: "Provided personalized customer service and managed cashier operations to deliver seamless retail experiences. Executed Visual Merchandising (VMD) floor layouts and product displays aligned with brand guidelines to enhance store presentation and drive customer engagement."
        }
    ],
    education: [
        {
            id: 1,
            degree: "B.A. in Design Convergence & Fashion Design (Double Major)",
            institution: "Inha University (Incheon, Korea)",
            period: "Mar 2020 - Aug 2025",
            details: [
                "Valedictorian | Full Scholarship",
                "Courses: Life system design, Brand design, Advanced Typography"
            ]
        },
        {
            id: 2,
            degree: "Exchange Program in Textile Management",
            institution: "University of Borås (Sweden)",
            period: "Jan 2024 - Jan 2025",
            details: [
                "Completed 29 credits",
                "Courses: UX and interaction design, Textile Innovation",
                "Projects: Smart textile innovation"
            ]
        }
    ],
    projects: [
        {
            id: "solid-connection",
            slug: "solid-connection",
            title: "Solid Connection",
            category: "Web Application",
            image: "/Thumbnail/Solid%20Connection%20main.png",
            summary: "A data-driven exchange application platform for mock applications, school comparison, and verified alumni mentoring.",
            overview: {
                year: "2023 - Ongoing",
                duration: "Every 5 months for new features",
                role: "Lead Designer & PM\n(Service Planning: 90%, Design: 60%)",
                team: "2 PMs | 2 Designers | 4 Frontend Developers\n5 Backend Developers",
                web: "https://www.solid-connection.com/",
                git: "https://github.com/solid-connection",
                logo: "/SC/solcon-logo-v2.png"
            },
            colors: [
                "#5950F6",
                "#4672EE",
                "#388CE8",
                "#2AA4E2"
            ],
            userProblem: "Exchange applicants had to piece together school requirements, acceptance stories, and grade benchmarks from scattered sheets and rumors.",
            businessGoal: "Make application prep easier to manage, increase verified mentor matching, and lower informational page bounce rates below 15%.",
            designHypothesis: "A 9-step application wizard would make the process feel manageable and reduce form drop-off by showing only one decision at a time.",
            problem: "Exchange applicants were making high-stakes choices with scattered information and little confidence. Without comparison tools or prediction cues, users dropped off during school selection and rarely moved from interest to application.",
            solution: [
                "School Database: Replaced scattered spreadsheets with one searchable global school list.",
                "Mock Application: Showed real-time competition rates and acceptance signals before users applied.",
                "Verified Mentoring: Connected applicants with alumni through 1:1 mentor matching."
            ],
            background: "We turned an uncertain exchange application process into a clearer path powered by data, reviews, and mentor support.",
            research: {
                text: "We interviewed and surveyed 50+ applicants and recent exchange students to find where preparation became confusing or stressful.",
                insights: [
                    {
                        title: "Scattered School Data",
                        description: "Users spent 40+ hours searching for requirements across sheets, blogs, and school pages. A filterable database could cut search time and help users start faster."
                    },
                    {
                        title: "Acceptance Anxiety",
                        description: "Users delayed decisions because they could not judge their chances. Real-time applicant specs and mock competition rates could make the next step feel safer."
                    }
                ]
            },
            userJourney: [
                {
                    type: "Type A: Early Interest Stage",
                    description: "For users lost in too much information, the community works as a simple starting guide.",
                    stages: [
                        {
                            stage: "Awareness",
                            doing: "Encounters vivid reviews on the in-app 'Real Stories' board instead of social media.",
                            feeling: '"Where did people with similar concerns end up going?"',
                            solution: "Trending Schools: Real-time popular countries and schools list."
                        },
                        {
                            stage: "Exploration",
                            doing: "Narrows down regions of interest through recommended posts and Q&As.",
                            feeling: '"It felt overwhelming, but reading real reviews makes me feel like I can do it too."',
                            solution: "Adaptive Onboarding: Customized community content curation based on user type."
                        },
                        {
                            stage: "Decision",
                            doing: "Saves guides for beginners and advice from seniors.",
                            feeling: '"I can trust this place to start preparing."',
                            solution: "Onboarding Community: A shared space for basic info for beginner applicants."
                        }
                    ]
                },
                {
                    type: "Type B: Preparing Stage",
                    description: "For users anxious about competition, the community provides practical strategy data.",
                    stages: [
                        {
                            stage: "Analysis",
                            doing: "Enters grades into the 'Mock Application' system and checks the applicant distribution.",
                            feeling: '"Where do my grades stand among the applicants for this school?"',
                            solution: "Applicant Overview: Sharing real-time application status and competition rates."
                        },
                        {
                            stage: "Comparison",
                            doing: "Adjusts application strategy by checking the community's real-time ranking signals.",
                            feeling: '"Looking at others\' specs, I should find a slightly safer option."',
                            solution: "Peer Insights: Anonymous applicant specs and strategy sharing system."
                        },
                        {
                            stage: "Application",
                            doing: "Gains confidence by exchanging feedback in the community after a virtual application.",
                            feeling: '"Sharing info with people in a similar grade range is so reassuring."',
                            solution: "Live Rankings: Visualizing the competitive landscape based on real-time data."
                        }
                    ]
                },
                {
                    type: "Type C: Needs Specific Info",
                    description: "For users who need specific answers, the community connects them with verified mentors.",
                    stages: [
                        {
                            stage: "Deep Exploration",
                            doing: "Searches for specific details like dormitories and living costs in the target school category.",
                            feeling: '"I need actual structured info, much better than a Google Sheet."',
                            solution: "Searchable Database: Structured real stories from students by school."
                        },
                        {
                            stage: "Connection",
                            doing: "Visits the 'Mentor' page of the school of interest to leave questions or subscribe to the channel.",
                            feeling: '"I want to ask directly from a mentor who actually went to this school."',
                            solution: "Mentor-Mentee UX: Dedicated channels and Q&As containing mentor know-how and tips."
                        },
                        {
                            stage: "Confirmation",
                            doing: "Double-checks final application documents based on the mentor's acceptance reviews and interview tips.",
                            feeling: '"Hearing even local lifestyle tips makes me feel truly ready to go."',
                            solution: "Mentoring System: In-depth support service through 1:1 matching and Q&A."
                        }
                    ]
                }
            ],
            userFlow: [
                {
                    title: "1. Onboarding",
                    description: "Users enter GPA, language scores, and target region to create their applicant profile.",
                    flow: [
                        "Sign Up",
                        "Input Specs",
                        "Home Dashboard"
                    ]
                },
                {
                    title: "2. Exploration",
                    description: "Users compare schools, requirements, reviews, and local details in one database.",
                    flow: [
                        "Search Univ.",
                        "Filter Data",
                        "Check Reviews"
                    ]
                },
                {
                    title: "3. Mentoring",
                    description: "Users ask verified alumni about school life, documents, and interviews through 1:1 Q&A.",
                    flow: [
                        "Mentor Profile",
                        "1:1 Matching",
                        "Ask Questions"
                    ]
                },
                {
                    title: "4. Mock Apply",
                    description: "Users select 1st and 2nd choice schools, set their strategy, and join the live mock queue.",
                    flow: [
                        "Select 1st/2nd",
                        "Input Tendency",
                        "Submit Mock"
                    ]
                },
                {
                    title: "5. Strategize",
                    description: "Users compare applicant specs and competition rates before finalizing their real application strategy.",
                    flow: [
                        "View Dashboard",
                        "Analyze Competitors",
                        "Finalize"
                    ]
                }
            ],
            ideation: {
                text: "Research pointed to three priorities: clearer data, less decision pressure, and stronger trust. We mapped each priority to a specific user type.",
                points: [
                    {
                        title: "Opportunity: Data Transparency",
                        description: "Bring school data into one interface so users can compare options quickly."
                    },
                    {
                        title: "Opportunity: Anxiety Relief",
                        description: "Use real-time data and peer signals to help users judge their chances."
                    },
                    {
                        title: "Strategy: Guided Discovery",
                        description: "For early-stage users, show trending schools and beginner guides first."
                    },
                    {
                        title: "Strategy: Mock Application",
                        description: "For preparing users, show live competition rates and applicant specs."
                    },
                    {
                        title: "Strategy: Verified Mentoring",
                        description: "For users with specific questions, connect them to verified alumni."
                    }
                ]
            },
            design: {
                text: "The final design prioritized clarity, data visualization, and community engagement.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
                features: [
                    {
                        title: "School Database",
                        description: "Replaced scattered spreadsheets with one searchable global school list."
                    },
                    {
                        title: "Mock Application",
                        description: "Showed live competition rates and acceptance signals before users applied."
                    },
                    {
                        title: "Verified Community",
                        description: "Connected applicants with verified alumni through 1:1 mentoring."
                    }
                ]
            },
            testing: [],
            impact: {
                points: [
                    {
                        title: "Quantitative Results",
                        description: "Acquired 400+ new users, passed 77,000 total events, and kept average session duration at 2m 28s."
                    },
                    {
                        title: "User Feedback",
                        description: "Users said the service made exchange applications feel predictable and reduced the need to ask seniors one by one."
                    },
                    {
                        title: "Next Steps",
                        description: "Real-time data increased trust and engagement. Next, the database can expand to more European universities."
                    }
                ]
            }
        },
        {
            id: "camerafi-studio",
            slug: "camerafi-studio",
            title: "CameraFi Studio Redesign",
            category: "Web & Mobile UI/UX",
            image: "/Thumbnail/Camerafi%20Studio%20main.png",
            imagePosition: "object-[30%_70%]",
            colors: [
                "#B8E218",
                "#37C556",
                "#2362A2"
            ],
            summary: "A clearer creator workspace that helps streamers find the right broadcasting tools at the right moment.",
            overview: {
                year: "2023",
                duration: "4 Months",
                role: "UX/UI Design Intern (Design Contribution: 95%)"
            },
            userProblem: "New creators saw too many advanced broadcasting options on the first screen and dropped off before setup.",
            businessGoal: "Improve first-session activation, increase dashboard creation, raise homepage CTR by 25%, and keep page load under 1.5 seconds.",
            designHypothesis: "Hiding advanced settings behind contextual FAB actions and adding an interactive simulator would help users understand core features faster.",
            problem: "CameraFi Studio had strong features, but the first screen showed too much too soon. New users faced a steep learning curve, which hurt setup completion and activation.",
            solution: [
                "Value-First IA: Prioritized the actions creators use most often.",
                "Contextual FAB: Revealed creation options only when users needed them.",
                "Brand Renewal: Updated logo, typography, color, and microcopy for a clearer identity."
            ],
            background: "Instead of showing every feature upfront, we revealed advanced tools only when the user was ready to act.",
            research: {
                text: "We asked where the first experience felt difficult, then checked the findings with 45 external users, 14 employees, and onboarding A/B tests.",
                insights: [
                    {
                        title: "Overloaded First Screen",
                        description: "The issue was not missing features. Users needed fewer visible choices and a clearer path to start."
                    },
                    {
                        title: "Clarity Before Features",
                        description: "Homepage clarity and brand identity were the biggest blockers. An interactive simulator could explain the product faster than long descriptions."
                    },
                    {
                        title: "Brand Renewal",
                        description: "The redesign needed both a simpler structure and a cleaner visual identity."
                    }
                ],
                chart: {
                    title: "Survey: What Blocks First-Time Users?",
                    question: "Which area should be clarified first to reduce onboarding friction?",
                    note: "Users were not asking for more features. They needed a clearer first screen, stronger identity, and easier entry points.",
                    items: [
                        {
                            label: "Homepage UI/UX",
                            value: 41.7
                        },
                        {
                            label: "Logo / Symbol",
                            value: 33.3
                        },
                        {
                            label: "Banner / Icon System",
                            value: 16.6
                        },
                        {
                            label: "Brand Slogan / Color",
                            value: 8.4
                        }
                    ]
                }
            },
            ideation: {
                text: "We established a three-pronged design strategy to reduce cognitive load and deliver a modernized, cohesive experience.",
                points: [
                    {
                        title: "Strategy: FAB-Based UI Restructuring",
                        description: "Transitioned from displaying all features at once to a contextual reveal. The floating action button shows only context-relevant creation options (Real-Time Caption · Scoreboard · Event), minimizing decision fatigue."
                    },
                    {
                        title: "Strategy: IA Redesign",
                        description: "Simplified navigation (Home · Events · My Channel · More) and grouped related features. Rebuilt the information hierarchy based on actual usage frequency to streamline broadcasting setups."
                    },
                    {
                        title: "Strategy: Brand System Renewal",
                        description: "Transitioned from a function-centric to a value-oriented UI representing trust, expertise, and speed. Delivered a clean logo redesign and a unified brand system with consistent fonts, colors, and microcopy."
                    }
                ]
            },
            design: {
                text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
                image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
                features: [
                    {
                        title: "Conversational Landing Page",
                        description: "Provided visual guides using actual app screens so users could immediately understand how to use the service.",
                        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                        title: "Multi-Surface Support",
                        description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps.",
                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    }
                ]
            },
            testing: [
                {
                    title: "A/B Testing: Icon-Centric Grid (A) vs. Text-Heavy Chips (B)",
                    description: "We compared icon-centric grid chips with text-heavy chips for sports category selection. Version B (Text-Heavy Chips) was selected as the winner; in fast-paced live environments, text-heavy chips minimized cognitive load and enabled instant recognition, raising setup CTR by 28% and completion rate by 34%."
                }
            ],
            impact: {
                points: [
                    {
                        title: "IA & flow redesign\n(CTR ↑ 28%, session time ×1.6)",
                        description: "Simplified the IA and key feature flows with clear task mapping. Users navigated faster, raising CTR by 28% and average session duration by 1.6x."
                    },
                    {
                        title: "From UX Renewal to Global Recognition\n(CES 2024 Feedback)",
                        description: "At CES 2024, visitors said the complex features felt well organized and the landing page made core functions easy to understand. The feedback confirmed that clearer UX can build trust and support business value."
                    }
                ]
            }
        },
        {
            id: "smart-fridge",
            slug: "smart-fridge",
            title: "Smart Fridge",
            category: "Web & Mobile UI/UX",
            image: "/Thumbnail/Smart%20Fridge%20main.png",
            imagePosition: "object-[30%_70%]",
            summary: "A kitchen management app that tracks fridge inventory, reduces food waste, and suggests meals from ingredients users already have.",
            overview: {
                year: "2024",
                duration: "4 Months",
                role: "UX/UI Designer",
                team: "Ali Basim Khalaf Khalaf, Aria Abbaspour, SuKyeong Lee\nZeynep Geyik, Le Dai Duong Bui"
            },
            problem: "Busy users forget what is in the fridge, buy duplicates, miss expiration dates, and spend extra time deciding what to cook.",
            solution: [
                "Kitchen Planning: Framed the app as a home system for managing food resources.",
                "Inventory Visibility: Tracked ingredients, categories, quantities, and expiration dates in one view.",
                "Recipe Suggestions: Recommended meals users could cook with ingredients already available."
            ],
            background: "Smart Fridge started from a simple need: help people see what they have, use it in time, and waste less food.",
            research: {
                text: "We used interviews and think-aloud testing to understand how people manage food, shop, and choose meals.",
                insights: [
                    {
                        title: "Inventory Blindness",
                        description: "Users frequently forgot what they owned before grocery shopping, directly causing duplicate purchases."
                    },
                    {
                        title: "Meal Decision Fatigue",
                        description: "Even with a full fridge, users struggled to choose meals. They needed recipe ideas based on available ingredients."
                    }
                ]
            },
            userScenarioImages: [
                {
                    src: "/SF/emily.JPG",
                    alt: "Smart Fridge user scenario for Emily"
                },
                {
                    src: "/SF/Larry.JPG",
                    alt: "Smart Fridge user scenario for Larry"
                }
            ],
            loFiImages: [
                {
                    src: "/SF/main.png",
                    alt: "Smart Fridge lo-fi main screen"
                },
                {
                    src: "/SF/feature%201.png",
                    alt: "Smart Fridge lo-fi feature screen 1"
                },
                {
                    src: "/SF/feature%202.png",
                    alt: "Smart Fridge lo-fi feature screen 2"
                },
                {
                    src: "/SF/feature%203.png",
                    alt: "Smart Fridge lo-fi feature screen 3"
                },
                {
                    src: "/SF/feature%204.png",
                    alt: "Smart Fridge lo-fi feature screen 4"
                }
            ],
            userFlow: [
                {
                    title: "1. Set Up Kitchen",
                    description: "Users set basic kitchen preferences before managing ingredients.",
                    flow: [
                        "Open App",
                        "Set Storage",
                        "Choose Preferences"
                    ]
                },
                {
                    title: "2. Add Ingredients",
                    description: "Users register food items with the minimum information needed for tracking.",
                    flow: [
                        "Tap Add",
                        "Search Item",
                        "Set Quantity",
                        "Add Expiry Date",
                        "Save Item"
                    ]
                },
                {
                    title: "3. Check Inventory",
                    description: "Users scan current fridge status and identify items that need attention.",
                    flow: [
                        "Open Home",
                        "Review Alerts",
                        "Filter Category",
                        "Select Ingredient"
                    ]
                },
                {
                    title: "4. Cook With What You Have",
                    description: "Users move from available ingredients to recipes they can cook now.",
                    flow: [
                        "Open Recipes",
                        "View Available Meals",
                        "Check Missing Items",
                        "Start Recipe"
                    ]
                },
                {
                    title: "5. Plan & Shop",
                    description: "Users connect event planning with a clear shopping action list.",
                    flow: [
                        "Create Event",
                        "Add Dishes",
                        "Generate List",
                        "Mark Purchased"
                    ]
                }
            ],
            ideation: {
                text: "We moved from concept to scenarios, storyboards, and lo-fi prototypes to test the core flow.",
                points: [
                    {
                        title: "HMW: Visibility",
                        description: "How might we make the fridge's current state easy to see?"
                    },
                    {
                        title: "HMW: Actionability",
                        description: "How might we connect expiring ingredients to meals users can cook now?"
                    }
                ]
            },
            design: {
                text: "The final design brings inventory, expiration alerts, recipe ideas, and event planning into one simple mobile flow.",
                image: "/SF/mockup/Main.png",
                features: [
                    {
                        title: "Home Screen",
                        description: "Shows fridge status, alerts, and recipe entry points at a glance.",
                        image: "/SF/mockup/Main.png"
                    },
                    {
                        title: "Inventory Screen",
                        description: "Lists ingredients by category, quantity, and freshness status.",
                        image: "/SF/mockup/search.png"
                    },
                    {
                        title: "Recipe Screen",
                        description: "Suggests meals users can cook right away with available ingredients.",
                        image: "/SF/mockup/Quick%20meal.png"
                    },
                    {
                        title: "Event Planner",
                        description: "Connects planned dishes with the ingredients users need to prepare.",
                        image: "/SF/mockup/Event%20planner.png"
                    },
                    {
                        title: "Add Item Flow",
                        description: "Makes new ingredient entry quick and easy to understand.",
                        image: "/SF/mockup/stock%20plus.png"
                    }
                ],
                styleGuide: {
                    text: "Created a warm UI with rounded cards, fresh accent colors, and easy-to-scan icons.",
                    image: "/SF/mockup/Onboarding.png"
                },
                hiFiGallery: [
                    {
                        src: "/SF/mockup/Main.png",
                        alt: "Home overview mockup"
                    },
                    {
                        src: "/SF/mockup/search.png",
                        alt: "Pantry management mockup"
                    },
                    {
                        src: "/SF/mockup/Quick%20meal.png",
                        alt: "Recipe selection mockup"
                    }
                ]
            },
            testing: [
                {
                    title: "Think-Aloud Testing",
                    description: "We used think-aloud testing to find where users hesitated while managing ingredients, checking expiration status, and moving from inventory to meal decisions.",
                    focusAreas: [
                        {
                            title: "Add Item Flow",
                            action: "Register a new ingredient with quantity and expiration date.",
                            observation: "Can users complete the flow without asking what information is required?"
                        },
                        {
                            title: "Inventory Check",
                            action: "Find ingredients that are available or close to expiring.",
                            observation: "Can users quickly understand fridge status from categories, labels, and alerts?"
                        },
                        {
                            title: "Recipe Decision",
                            action: "Choose a meal based on ingredients already in the fridge.",
                            observation: "Do users trust the recommendation and understand missing ingredients?"
                        },
                        {
                            title: "Event Planner",
                            action: "Plan a meal event and turn required items into a shopping list.",
                            observation: "Do users understand why this feature exists and when to use it?"
                        }
                    ],
                    findings: [
                        "Users understood the inventory concept quickly when quantity and expiration status were visible together.",
                        "Recipe recommendations felt useful, but users wanted clearer separation between cook-now meals and meals with missing items.",
                        "The event planner needed stronger naming and entry context because users did not immediately connect it with grocery planning.",
                        "Primary actions such as Save Item and Generate Shopping List needed stronger visual emphasis."
                    ],
                    userQuotes: [
                        "\"I can see what is expiring soon, but I want to know what I should cook first.\"",
                        "\"This recipe looks useful, but I am not sure if I already have every ingredient.\"",
                        "\"Event Planner sounds helpful, but I do not immediately know when I would use it.\"",
                        "\"After adding an item, I want a clearer sign that it has been saved.\""
                    ]
                }
            ],
            impact: {
                points: [
                    {
                        title: "Improved Management",
                        description: "Made quantities and expiration status easier to understand at a glance."
                    },
                    {
                        title: "Reduced Meal Decisions",
                        description: "Connected available ingredients to recipe ideas, reducing meal planning time."
                    },
                    {
                        title: "Next Steps",
                        description: "Testing showed that terms like 'Event Planner' must match user expectations. A future version could add barcode scanning."
                    }
                ]
            }
        },
        {
            id: "fiora-solo-wedding",
            slug: "fiora-solo-wedding",
            title: "Fiora, Solo Wedding",
            category: "Web & Mobile UI/UX",
            thumbnail: "/Thumbnail/Solo%20wedding%20main.png",
            image: "/Thumbnail/Solo%20wedding%20main.png",
            imagePosition: "object-center",
            colors: [
                "#A93E32",
                "#D36155",
                "#E89D95",
                "#F7D6D2"
            ],
            summary: "A self-celebration platform for marking personal milestones with color themes, guided declarations, and a private archive.",
            overview: {
                year: "2025",
                duration: "3 Months",
                role: "Product Designer (Brand Identity & UX/UI Design)"
            },
            problem: "Celebration culture often centers on social milestones like marriage. Personal growth, recovery, and self-overcoming rarely get the same kind of ritual or recognition.",
            solution: [
                "Emotional Color Theme: Turns the user's emotional state into a personal visual theme.",
                "Guided Declaration: Helps users turn a personal promise into a formal moment.",
                "Private Archive: Saves themes and declarations so users can revisit their growth."
            ],
            background: "What happens when the object of celebration is the self? Fiora transforms wedding traditions into a warm ritual for self-acceptance.",
            research: {
                text: "We studied social trends around single-person households, non-marriage, and declining weddings to understand the need for new self-celebration rituals.",
                insights: [
                    {
                        title: "Demographic Shift",
                        description: "Single-person households in Korea rose from 29.3% in 2018 to 35.5% in 2023, showing a fast shift toward individual lifestyles."
                    },
                    {
                        title: "Marriage Decline",
                        description: "Annual marriages fell from over 305k in 2014 to under 194k in 2023, making traditional milestones less universal."
                    },
                    {
                        title: "The Social Hurdle",
                        description: "Users needed a safe, private way to celebrate themselves without feeling exposed or judged by conventional norms."
                    },
                    {
                        title: "Psychological Value",
                        description: "Research showed that formalized rituals significantly reduce anxiety and strengthen self-efficacy."
                    }
                ]
            },
            ideation: {
                text: "The experience has three steps: explore the self, choose a visual theme, and complete a personal ceremony.",
                points: [
                    {
                        title: "HMW: Validation",
                        description: "How might we make solo celebration feel intentional and meaningful?"
                    },
                    {
                        title: "HMW: Expression",
                        description: "How might we let users declare their promise through voice, text, or image?"
                    }
                ]
            },
            design: {
                text: "The UI combines emotional storytelling with simple interactions. Color themes, flexible inputs, and spacious type make the experience feel ceremonial.",
                image: "/Thumbnail/Solo%20wedding%20main.png",
                features: []
            },
            testing: [
                {
                    title: "Onboarding & Color Matching Test",
                    description: "We conducted think-aloud testing to evaluate the user's cognitive flow through the 12-step personalization survey and assess how well the recommended color themes resonated with their emotional state.",
                    focusAreas: [
                        {
                            title: "Survey Friction & Fatigue",
                            action: "Navigate the 12-step questionnaire and select lifestyle inputs.",
                            observation: "Do users drop off due to survey length, and does the visual pacing reduce fatigue?"
                        },
                        {
                            title: "Color Theme Alignment",
                            action: "Receive and review the customized color suggestions at the end.",
                            observation: "Do the color suggestions match the user's current self-reflective state?"
                        }
                    ],
                    findings: [
                        "One-at-a-time questions with subtle fade transitions reduced survey drop-off by 22%.",
                        "Users loved the color matching but wanted clearer explanations for the recommendations.",
                        "Transitioning from survey to the results required a slower, more ceremonial pace."
                    ],
                    userQuotes: [
                        "\"I thought a 12-step survey would be tedious, but the slow pacing felt like a self-therapy session.\"",
                        "\"The twilight blue suggestion perfectly matched my desire for a quiet, independent celebration.\""
                    ]
                }
            ],
            impact: {
                points: [
                    {
                        title: "Redefining Milestones",
                        description: "As marriage rates decline and single-person households rise to 35.5%, fiora successfully reframes 'solo wedding' not as a substitute for traditional marriage, but as a new ritual framework that validates personal growth and self-commitment."
                    },
                    {
                        title: "Psychological Validation",
                        description: "Addressing the social hurdles found in our research, the secure voice archive offers a private space for self-reflection, reducing anxiety and strengthening self-efficacy without societal judgment."
                    },
                    {
                        title: "Next Steps",
                        description: "To transition from individual rituals to collective validation, future iterations will explore opt-in 'support circles'—allowing single-person households to safely celebrate personal milestones with trusted peers."
                    }
                ]
            }
        }
    ],
    brandingProjects: [
        {
            id: "camerafi-studio-ci",
            slug: "camerafi-studio-ci",
            title: "CameraFi Studio CI",
            category: "Brand Identity",
            image: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_13@300x-100.png",
            imagePosition: "object-center",
            thumbnail: "/Thumbnail/Camerfi%20logo.png",
            brandImages: [
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201%20%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB@300x-100.png",
                    alt: "CameraFi Studio CI guideline cover copy"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201@300x-100.png",
                    alt: "CameraFi Studio CI guideline 1"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_1@300x-100.png",
                    alt: "CameraFi Studio CI guideline 2"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_2@300x-100.png",
                    alt: "CameraFi Studio CI guideline 3"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_3@300x-100.png",
                    alt: "CameraFi Studio CI guideline 4"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_4@300x-100.png",
                    alt: "CameraFi Studio CI guideline 5"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_5@300x-100.png",
                    alt: "CameraFi Studio CI guideline 6"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_6@300x-100.png",
                    alt: "CameraFi Studio CI guideline 7"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_7@300x-100.png",
                    alt: "CameraFi Studio CI guideline 8"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_8@300x-100.png",
                    alt: "CameraFi Studio CI guideline 9"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_9@300x-100.png",
                    alt: "CameraFi Studio CI guideline 10"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_10@300x-100.png",
                    alt: "CameraFi Studio CI guideline 11"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_11@300x-100.png",
                    alt: "CameraFi Studio CI guideline 12"
                },
                {
                    src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_13@300x-100.png",
                    alt: "CameraFi Studio CI guideline 13"
                }
            ],
            summary: "A clearer creator workspace that helps streamers find the right tools at the right moment.",
            overview: {
                year: "2023",
                duration: "4 Months",
                role: "UX/UI Design Intern (Design Contribution: 95%)"
            },
            problem: "The product had powerful features, but the first screen showed too much at once. New users struggled to understand where to start.",
            solution: [
                "Value-First IA: Reorganized the UI around frequent creator actions.",
                "FAB Structure: Used Floating Action Buttons to show creation options only when needed.",
                "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
            ],
            background: "The design goal was simple: help creators find the right feature at the moment they need it.",
            research: {
                text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
                insights: [
                    {
                        title: "A/B Testing Insights",
                        description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating."
                    }
                ]
            },
            ideation: {
                text: "We explored ways to make the first experience clearer and easier to enter.",
                points: [
                    {
                        title: "Contextual Reveal",
                        description: "Show only the features that match the user's current task."
                    },
                    {
                        title: "Tutorial-style Landing Page",
                        description: "Turn dense feature text into screen-based walkthroughs."
                    }
                ]
            },
            design: {
                text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
                image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
                features: [
                    {
                        title: "Conversational Landing Page",
                        description: "Provided visual guides using actual app screens so users could immediately understand how to use the service."
                    },
                    {
                        title: "Multi-Surface Support",
                        description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps."
                    }
                ]
            },
            testing: [],
            impact: {
                points: [
                    {
                        title: "Metrics Improvement",
                        description: "Achieved a 28% increase in Click-Through Rate (CTR) and a 1.6x improvement in average session time."
                    },
                    {
                        title: "Global Feedback & External Achievements",
                        description: "Verified the design direction and built brand trust in the global market by receiving feedback from visitors from various countries at CES 2024, such as 'The features are complex, but well-organized.'"
                    }
                ]
            }
        },
        {
            id: "smart-fridge-identity",
            slug: "smart-fridge-identity",
            title: "Smart Fridge Identity",
            category: "Brand Identity",
            image: "/camerafi-main.png",
            imagePosition: "object-[30%_70%]",
            thumbnail: "/Thumbnail/Solid%20connection%20logo.png",
            summary: "A clearer creator workspace that helps streamers find the right tools at the right moment.",
            overview: {
                year: "2023",
                duration: "4 Months",
                role: "UX/UI Design Intern (Design Contribution: 95%)"
            },
            problem: "The product had powerful features, but the first screen showed too much at once. New users struggled to understand where to start.",
            solution: [
                "Value-First IA: Reorganized the UI around frequent creator actions.",
                "FAB Structure: Used Floating Action Buttons to show creation options only when needed.",
                "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
            ],
            background: "The design goal was simple: help creators find the right feature at the moment they need it.",
            research: {
                text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
                insights: [
                    {
                        title: "A/B Testing Insights",
                        description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating."
                    }
                ]
            },
            ideation: {
                text: "We explored ways to make the first experience clearer and easier to enter.",
                points: [
                    {
                        title: "Contextual Reveal",
                        description: "Show only the features that match the user's current task."
                    },
                    {
                        title: "Tutorial-style Landing Page",
                        description: "Turn dense feature text into screen-based walkthroughs."
                    }
                ]
            },
            design: {
                text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
                image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
                features: [
                    {
                        title: "Conversational Landing Page",
                        description: "Provided visual guides using actual app screens so users could immediately understand how to use the service."
                    },
                    {
                        title: "Multi-Surface Support",
                        description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps."
                    }
                ]
            },
            testing: [],
            impact: {
                points: [
                    {
                        title: "Metrics Improvement",
                        description: "Achieved a 28% increase in Click-Through Rate (CTR) and a 1.6x improvement in average session time."
                    },
                    {
                        title: "Global Feedback & External Achievements",
                        description: "Verified the design direction and built brand trust in the global market by receiving feedback from visitors from various countries at CES 2024, such as 'The features are complex, but well-organized.'"
                    }
                ]
            }
        },
        {
            id: "solid-connection-brand",
            slug: "solid-connection-brand",
            title: "Solid Connection Brand",
            category: "Brand Identity",
            image: "/camerafi-main.png",
            imagePosition: "object-[30%_70%]",
            thumbnail: "/Thumbnail/logo.png",
            summary: "A clearer creator workspace that helps streamers find the right tools at the right moment.",
            overview: {
                year: "2023",
                duration: "4 Months",
                role: "UX/UI Design Intern (Design Contribution: 95%)"
            },
            problem: "The product had powerful features, but the first screen showed too much at once. New users struggled to understand where to start.",
            solution: [
                "Value-First IA: Reorganized the UI around frequent creator actions.",
                "FAB Structure: Used Floating Action Buttons to show creation options only when needed.",
                "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
            ],
            background: "The design goal was simple: help creators find the right feature at the moment they need it.",
            research: {
                text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
                insights: [
                    {
                        title: "A/B Testing Insights",
                        description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating."
                    }
                ]
            },
            ideation: {
                text: "We explored ways to make the first experience clearer and easier to enter.",
                points: [
                    {
                        title: "Contextual Reveal",
                        description: "Show only the features that match the user's current task."
                    },
                    {
                        title: "Tutorial-style Landing Page",
                        description: "Turn dense feature text into screen-based walkthroughs."
                    }
                ]
            },
            design: {
                text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
                image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
                features: [
                    {
                        title: "Conversational Landing Page",
                        description: "Provided visual guides using actual app screens so users could immediately understand how to use the service."
                    },
                    {
                        title: "Multi-Surface Support",
                        description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps."
                    }
                ]
            },
            testing: [],
            impact: {
                points: [
                    {
                        title: "Metrics Improvement",
                        description: "Achieved a 28% increase in Click-Through Rate (CTR) and a 1.6x improvement in average session time."
                    },
                    {
                        title: "Global Feedback & External Achievements",
                        description: "Verified the design direction and built brand trust in the global market by receiving feedback from visitors from various countries at CES 2024, such as 'The features are complex, but well-organized.'"
                    }
                ]
            }
        }
    ],
    productProjects: [
        {
            id: "smart-curtain-system",
            slug: "smart-curtain-system",
            title: "Smart Curtain System",
            category: "Product Design",
            thumbnail: "/Thumbnail/Smart%20curtain%20main.JPG",
            image: "/smart-curtain-main.png",
            imagePosition: "object-[50%_14%]",
            presentationImages: [
                {
                    src: "/Smart%20Curtain%20project/1.png",
                    alt: "Smart Curtain presentation slide 1"
                },
                {
                    src: "/Smart%20Curtain%20project/2.png",
                    alt: "Smart Curtain presentation slide 2"
                },
                {
                    src: "/Smart%20Curtain%20project/3.png",
                    alt: "Smart Curtain presentation slide 3"
                },
                {
                    src: "/Smart%20Curtain%20project/4.png",
                    alt: "Smart Curtain presentation slide 4"
                },
                {
                    src: "/Smart%20Curtain%20project/5.png",
                    alt: "Smart Curtain presentation slide 5"
                },
                {
                    src: "/Smart%20Curtain%20project/6.png",
                    alt: "Smart Curtain presentation slide 6"
                },
                {
                    src: "/Smart%20Curtain%20project/7.png",
                    alt: "Smart Curtain presentation slide 7"
                },
                {
                    src: "/Smart%20Curtain%20project/8.png",
                    alt: "Smart Curtain presentation slide 8"
                },
                {
                    src: "/Smart%20Curtain%20project/9.png",
                    alt: "Smart Curtain presentation slide 9"
                },
                {
                    src: "/Smart%20Curtain%20project/10.png",
                    alt: "Smart Curtain presentation slide 10"
                },
                {
                    src: "/Smart%20Curtain%20project/11.png",
                    alt: "Smart Curtain presentation slide 11"
                },
                {
                    src: "/Smart%20Curtain%20project/12.png",
                    alt: "Smart Curtain presentation slide 12"
                },
                {
                    src: "/Smart%20Curtain%20project/13.png",
                    alt: "Smart Curtain presentation slide 13"
                },
                {
                    src: "/Smart%20Curtain%20project/14.png",
                    alt: "Smart Curtain presentation slide 14"
                },
                {
                    src: "/Smart%20Curtain%20project/15.png",
                    alt: "Smart Curtain presentation slide 15"
                },
                {
                    src: "/Smart%20Curtain%20project/16.png",
                    alt: "Smart Curtain presentation slide 16"
                },
                {
                    src: "/Smart%20Curtain%20project/17.png",
                    alt: "Smart Curtain presentation slide 17"
                },
                {
                    src: "/Smart%20Curtain%20project/18.png",
                    alt: "Smart Curtain presentation slide 18"
                },
                {
                    src: "/Smart%20Curtain%20project/19.png",
                    alt: "Smart Curtain presentation slide 19"
                },
                {
                    src: "/Smart%20Curtain%20project/20.png",
                    alt: "Smart Curtain presentation slide 20"
                },
                {
                    src: "/Smart%20Curtain%20project/21.png",
                    alt: "Smart Curtain presentation slide 21"
                },
                {
                    src: "/Smart%20Curtain%20project/22.png",
                    alt: "Smart Curtain presentation slide 22"
                },
                {
                    src: "/Smart%20Curtain%20project/23.png",
                    alt: "Smart Curtain presentation slide 23"
                },
                {
                    src: "/Smart%20Curtain%20project/24.png",
                    alt: "Smart Curtain presentation slide 24"
                },
                {
                    src: "/Smart%20Curtain%20project/25.png",
                    alt: "Smart Curtain presentation slide 25"
                },
                {
                    src: "/Smart%20Curtain%20project/26.png",
                    alt: "Smart Curtain presentation slide 26"
                },
                {
                    src: "/Smart%20Curtain%20project/27.png",
                    alt: "Smart Curtain presentation slide 27"
                },
                {
                    src: "/Smart%20Curtain%20project/28.png",
                    alt: "Smart Curtain presentation slide 28"
                },
                {
                    src: "/Smart%20Curtain%20project/29.png",
                    alt: "Smart Curtain presentation slide 29"
                },
                {
                    src: "/Smart%20Curtain%20project/30.png",
                    alt: "Smart Curtain presentation slide 30"
                },
                {
                    src: "/Smart%20Curtain%20project/31.png",
                    alt: "Smart Curtain presentation slide 31"
                },
                {
                    src: "/Smart%20Curtain%20project/32.png",
                    alt: "Smart Curtain presentation slide 32"
                },
                {
                    src: "/Smart%20Curtain%20project/33.png",
                    alt: "Smart Curtain presentation slide 33"
                },
                {
                    src: "/Smart%20Curtain%20project/34.png",
                    alt: "Smart Curtain presentation slide 34"
                },
                {
                    src: "/Smart%20Curtain%20project/35.png",
                    alt: "Smart Curtain presentation slide 35"
                },
                {
                    src: "/Smart%20Curtain%20project/36.png",
                    alt: "Smart Curtain presentation slide 36"
                },
                {
                    src: "/Smart%20Curtain%20project/37.png",
                    alt: "Smart Curtain presentation slide 37"
                },
                {
                    src: "/Smart%20Curtain%20project/38.png",
                    alt: "Smart Curtain presentation slide 38"
                },
                {
                    src: "/Smart%20Curtain%20project/39.png",
                    alt: "Smart Curtain presentation slide 39"
                },
                {
                    src: "/Smart%20Curtain%20project/40.png",
                    alt: "Smart Curtain presentation slide 40"
                },
                {
                    src: "/Smart%20Curtain%20project/41.png",
                    alt: "Smart Curtain presentation slide 41"
                },
                {
                    src: "/Smart%20Curtain%20project/42.png",
                    alt: "Smart Curtain presentation slide 42"
                },
                {
                    src: "/Smart%20Curtain%20project/43.png",
                    alt: "Smart Curtain presentation slide 43"
                },
                {
                    src: "/Smart%20Curtain%20project/44.png",
                    alt: "Smart Curtain presentation slide 44"
                },
                {
                    src: "/Smart%20Curtain%20project/45.png",
                    alt: "Smart Curtain presentation slide 45"
                },
                {
                    src: "/Smart%20Curtain%20project/46.png",
                    alt: "Smart Curtain presentation slide 46"
                },
                {
                    src: "/Smart%20Curtain%20project/47.png",
                    alt: "Smart Curtain presentation slide 47"
                },
                {
                    src: "/Smart%20Curtain%20project/48.png",
                    alt: "Smart Curtain presentation slide 48"
                },
                {
                    src: "/Smart%20Curtain%20project/49.png",
                    alt: "Smart Curtain presentation slide 49"
                },
                {
                    src: "/Smart%20Curtain%20project/50.png",
                    alt: "Smart Curtain presentation slide 50"
                },
                {
                    src: "/Smart%20Curtain%20project/51.png",
                    alt: "Smart Curtain presentation slide 51"
                },
                {
                    src: "/Smart%20Curtain%20project/52.png",
                    alt: "Smart Curtain presentation slide 52"
                },
                {
                    src: "/Smart%20Curtain%20project/53.png",
                    alt: "Smart Curtain presentation slide 53"
                },
                {
                    src: "/Smart%20Curtain%20project/54.png",
                    alt: "Smart Curtain presentation slide 54"
                },
                {
                    src: "/Smart%20Curtain%20project/56.png",
                    alt: "Smart Curtain presentation slide 56"
                },
                {
                    src: "/Smart%20Curtain%20project/Wictoria.png",
                    alt: "Smart Curtain presentation contributor Wictoria"
                }
            ],
            summary: "A smart curtain system that lets workers adjust privacy, comfort, and focus through physical space control and a mobile app.",
            overview: {
                year: "2024",
                duration: "4 Months",
                role: "Product Designer (UX/UI, Research, Concept, Prototype)"
            },
            problem: "Open offices and hybrid workplaces often give users little control over privacy, noise, light, and temperature. This makes focus and comfort harder to maintain.",
            solution: [
                "Spatial Control: A modular curtain system that divides or connects work zones.",
                "Environmental Control: Light, temperature, and acoustic settings that support focus and comfort.",
                "App Control: A mobile interface for adjusting the workspace in real time."
            ],
            background: "As hybrid work grew, people needed more flexible control over their surroundings. This project turns curtains into an interactive system for focus, privacy, and wellbeing.",
            research: {
                text: "Research combined personas, empathy maps, workspace behavior, survey inputs, and trend research to move from a curtain product to a workspace UX system.",
                insights: [
                    {
                        title: "Privacy & Focus Issues",
                        description: "Users struggled to concentrate in open environments and needed adjustable personal boundaries for visual and acoustic separation."
                    },
                    {
                        title: "Environmental Discomfort",
                        description: "Light, temperature, and noise conditions were inconsistent, while users lacked a unified way to control them."
                    },
                    {
                        title: "Desire for Flexible Spaces",
                        description: "Hybrid work increased the need for spaces that can shift between focus, collaboration, and rest modes."
                    }
                ]
            },
            ideation: {
                text: "The concept treats space as an interface by combining modular curtains with app-based control.",
                points: [
                    {
                        title: "Space as Interface",
                        description: "Turned the curtain into an active tool for privacy, focus, and ambiance."
                    },
                    {
                        title: "Modular System",
                        description: "Designed flexible separation for focus, collaboration, and rest."
                    },
                    {
                        title: "Smart Control Layer",
                        description: "Linked the curtain to app controls for temperature, lighting, and environmental feedback."
                    }
                ]
            },
            design: {
                text: "The design connects physical movement, digital control, and material comfort. The curtain divides space, softens sound, filters light, and responds through the app.",
                image: "/smart-curtain-main.png",
                features: [
                    {
                        title: "Physical Interaction",
                        description: "Used the curtain as a divider, acoustic buffer, and light filter."
                    },
                    {
                        title: "Digital Interface",
                        description: "Designed app controls for temperature, layout, and environmental feedback."
                    },
                    {
                        title: "Material Experience",
                        description: "Linked wool and linen choices to sound comfort, insulation, breathability, and warmth."
                    }
                ]
            },
            testing: [
                {
                    title: "Prototype Testing",
                    description: "Prototype tests covered the curtain model, 3D structure, and app flow. Users preferred simple controls, disliked too much automation, and valued the physical curtain movement.",
                    beforeImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
                    afterImage: "/smart-curtain-main.png"
                }
            ],
            impact: {
                points: [
                    {
                        title: "Improved Perceived Privacy",
                        description: "Helped users create clearer personal boundaries in open and shared work environments."
                    },
                    {
                        title: "Increased Workspace Adaptability",
                        description: "Enabled spaces to shift between focus, collaboration, and comfort modes through modular physical control."
                    },
                    {
                        title: "Integrated Physical + Digital UX",
                        description: "Connected material, movement, and app-based environmental control into one coherent workspace experience."
                    }
                ]
            }
        }
    ]
};
}),
"[project]/apps/graphic/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GraphicAppPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$components$2f$GraphicPathShowcase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/graphic/components/GraphicPathShowcase.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$components$2f$GraphicPatternCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/graphic/components/GraphicPatternCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/graphic/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function GraphicAppPage() {
    const [activeGraphicApp, setActiveGraphicApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("app1");
    const graphicBrandingProjects = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioData"].brandingProjects;
    const mainAppProject = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioData"].projects.find((p)=>p.slug === "solid-connection") || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioData"].projects[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-20 bg-white text-neutral-950 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2.5 w-2.5 rounded-full bg-purple-600 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold uppercase tracking-[0.25em] text-purple-600",
                                    children: "Independent Graphic App (@designer-su/graphic)"
                                }, void 0, false, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight",
                            children: "Graphic App Suite"
                        }, void 0, false, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed font-normal",
                            children: "Independent Graphic Application package containing specialized interactive graphic engines: Bezier Vector Path Generator and Dynamic Generative Pattern Canvas."
                        }, void 0, false, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/graphic/app/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/graphic/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl bg-neutral-950 text-white p-8 md:p-12 border border-neutral-800 shadow-2xl relative overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/apps/graphic/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 max-w-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-purple-300 border border-white/10",
                                                        children: "Monorepo Main App Integration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/graphic/app/page.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-mono text-neutral-400",
                                                        children: "@designer-su/main"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/graphic/app/page.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/graphic/app/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-black tracking-tight text-white",
                                                children: [
                                                    "Main Product App: ",
                                                    mainAppProject.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/graphic/app/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-neutral-300 text-sm md:text-base leading-relaxed",
                                                children: mainAppProject.summary
                                            }, void 0, false, {
                                                fileName: "[project]/apps/graphic/app/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/graphic/app/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full md:w-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "http://localhost:3000",
                                            className: "px-6 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all text-center shadow-lg hover:scale-105 active:scale-95",
                                            children: "Open Main App (:3000)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/graphic/app/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/graphic/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/graphic/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/graphic/app/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/graphic/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto flex flex-col gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-purple-600",
                                            children: "Graphic App Interactive Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-4xl font-black tracking-tight",
                                            children: "Graphic Apps Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-1.5 bg-neutral-100 rounded-full border border-neutral-200 self-start md:self-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveGraphicApp("app1"),
                                            className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${activeGraphicApp === "app1" ? "bg-purple-600 text-white shadow-md scale-105" : "text-neutral-600 hover:text-neutral-950"}`,
                                            children: "Graphic Sub-App 01: Path Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveGraphicApp("app2"),
                                            className: `px-5 py-2 rounded-full text-xs font-bold transition-all ${activeGraphicApp === "app2" ? "bg-cyan-600 text-white shadow-md scale-105" : "text-neutral-600 hover:text-neutral-950"}`,
                                            children: "Graphic Sub-App 02: Pattern Canvas"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        activeGraphicApp === "app1" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 p-4 rounded-2xl border border-purple-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Graphic Sub-App 01 — Bezier Vector Path Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Interactive Tool"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$components$2f$GraphicPathShowcase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs font-bold text-cyan-600 uppercase tracking-widest bg-cyan-50 p-4 rounded-2xl border border-cyan-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Graphic Sub-App 02 — Generative Brand Pattern Canvas"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Interactive Tool"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$graphic$2f$components$2f$GraphicPatternCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/graphic/app/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/graphic/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-20 bg-neutral-50 border-y border-neutral-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto flex flex-col gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-purple-600",
                                            children: "Graphic Identity Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-4xl font-black tracking-tight mt-1",
                                            children: "Visual Identity Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-500 text-sm max-w-md",
                                    children: "Graphic design guidelines, corporate identity, logo systems, and visual tokens."
                                }, void 0, false, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: graphicBrandingProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group flex flex-col bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: project.thumbnail || project.image,
                                                    alt: project.title,
                                                    fill: true,
                                                    className: `object-cover ${project.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-neutral-800 shadow-sm border border-neutral-200/60",
                                                        children: project.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/graphic/app/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 flex flex-col flex-1 justify-between gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold tracking-tight text-neutral-950 group-hover:text-purple-600 transition-colors",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/graphic/app/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-neutral-600 text-xs md:text-sm mt-2 line-clamp-2 leading-relaxed",
                                                        children: project.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/graphic/app/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/graphic/app/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/graphic/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, project.id, true, {
                                    fileName: "[project]/apps/graphic/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/graphic/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/graphic/app/page.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/graphic/app/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/graphic/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_graphic_0hb3vlj._.js.map