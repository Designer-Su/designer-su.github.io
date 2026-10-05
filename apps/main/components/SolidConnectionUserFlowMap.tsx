"use client";

import React, { useState } from "react";

type FlowType = "all" | "onboarding" | "search" | "mock" | "mentoring" | "community" | "mypage";

interface Node {
  id: string;
  title: string;
  koTitle: string;
  description: string;
  type: "action" | "screen" | "decision" | "api";
}

interface FlowGroup {
  id: FlowType;
  title: string;
  koTitle: string;
  color: string;
  borderColor: string;
  bgColor: string;
  glowColor: string;
  nodes: Node[];
}

export default function SolidConnectionUserFlowMap() {
  const [activeFlow, setActiveFlow] = useState<FlowType>("all");

  const flows: FlowGroup[] = [
    {
      id: "onboarding",
      title: "1. Onboarding & Specs",
      koTitle: "온보딩 및 스펙 설정",
      color: "#5950F6",
      borderColor: "border-[#5950F6]",
      bgColor: "bg-[#5950F6]/5",
      glowColor: "rgba(89, 80, 246, 0.15)",
      nodes: [
        { id: "ob-start", title: "Start Onboarding", koTitle: "온보딩 시작", description: "User enters the application preparation flow.", type: "action" },
        { id: "ob-signup", title: "Sign Up & Auth", koTitle: "회원가입/로그인", description: "Authenticate using university email or Kakao.", type: "screen" },
        { id: "ob-specs", title: "Input Academic Specs", koTitle: "내 스펙 입력", description: "GPA, language scores (TOEIC/TOEFL), target region.", type: "action" },
        { id: "ob-dashboard", title: "Home Dashboard Init", koTitle: "대시보드 초기화", description: "Personalized specs mapped to user profile.", type: "screen" }
      ]
    },
    {
      id: "search",
      title: "2. School Search DB",
      koTitle: "글로벌 학교 탐색",
      color: "#4672EE",
      borderColor: "border-[#4672EE]",
      bgColor: "bg-[#4672EE]/5",
      glowColor: "rgba(70, 114, 238, 0.15)",
      nodes: [
        { id: "sh-search", title: "Search Global DB", koTitle: "학교 검색", description: "Query central database of partner universities.", type: "screen" },
        { id: "sh-filter", title: "Apply Preference Filters", koTitle: "필터 조건 설정", description: "Filter by GPA cut-off, language requirement, region.", type: "action" },
        { id: "sh-details", title: "View School Details", koTitle: "학교 상세 정보", description: "Check recruitment counts, tuition details, local guides.", type: "screen" },
        { id: "sh-reviews", title: "Alumni Acceptance Logs", koTitle: "선배 합격 수기", description: "Read verified real-world application details.", type: "screen" }
      ]
    },
    {
      id: "mock",
      title: "3. Mock Application",
      koTitle: "모의 지원 및 분석",
      color: "#388CE8",
      borderColor: "border-[#388CE8]",
      bgColor: "bg-[#388CE8]/5",
      glowColor: "rgba(56, 140, 232, 0.15)",
      nodes: [
        { id: "mk-select", title: "Select 1st & 2nd Choice", koTitle: "1/2지망 대학 선택", description: "Select target schools for the mock matching round.", type: "action" },
        { id: "mk-tendency", title: "Set Application Strategy", koTitle: "지원 성향 필터", description: "Safe, ambitious, or challenge tendecy selector.", type: "action" },
        { id: "mk-apply", title: "Submit Mock Entry", koTitle: "모의지원 등록", description: "Enter academic specs into real-time competitor pool.", type: "api" },
        { id: "mk-analysis", title: "Real-time Competition Analysis", koTitle: "지원 현황 & 경쟁률", description: "Visualize specs distribution and matching probabilities.", type: "screen" }
      ]
    },
    {
      id: "mentoring",
      title: "4. 1:1 Mentoring",
      koTitle: "1:1 매칭 & 멘토링",
      color: "#2AA4E2",
      borderColor: "border-[#2AA4E2]",
      bgColor: "bg-[#2AA4E2]/5",
      glowColor: "rgba(42, 164, 226, 0.15)",
      nodes: [
        { id: "mt-list", title: "Browse Mentor Profiles", koTitle: "멘토 목록 탐색", description: "Explore verified alumni profiles from target schools.", type: "screen" },
        { id: "mt-request", title: "Submit Mentorship Request", koTitle: "멘토링 신청", description: "Send questions and credentials to chosen mentor.", type: "api" },
        { id: "mt-matching", title: "System Matching Check", koTitle: "매칭 조건 확인", description: "Verify mentor availability and matching state.", type: "decision" },
        { id: "mt-chat", title: "1:1 Live Q&A Room", koTitle: "멘토 대화방", description: "In-depth conversation, interview prep, local lifestyle tips.", type: "screen" }
      ]
    },
    {
      id: "community",
      title: "5. Community",
      koTitle: "소통 및 정보 공유",
      color: "#a855f7",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500/5",
      glowColor: "rgba(168, 85, 247, 0.15)",
      nodes: [
        { id: "cm-boards", title: "Access Forums", koTitle: "게시판 목록", description: "Free Board, Q&A Board, Acceptance Reviews.", type: "screen" },
        { id: "cm-posts", title: "Browse Post Feed", koTitle: "피드 탐색", description: "Search for specific threads and guides.", type: "screen" },
        { id: "cm-write", title: "Create Post/Reply", koTitle: "글 작성 및 답변", description: "Share tips, guides, or ask general questions.", type: "action" },
        { id: "cm-react", title: "Interaction Loop", koTitle: "댓글 & 반응", description: "Increase trust via likes, votes, and verified badges.", type: "action" }
      ]
    },
    {
      id: "mypage",
      title: "6. My Page",
      koTitle: "마이페이지 & 개인 설정",
      color: "#64748b",
      borderColor: "border-slate-500",
      bgColor: "bg-slate-500/5",
      glowColor: "rgba(100, 116, 139, 0.15)",
      nodes: [
        { id: "mp-main", title: "Access Dashboard Profile", koTitle: "내 프로필", description: "Overview of personal stats and saved entries.", type: "screen" },
        { id: "mp-saved", title: "Manage Saved Schools", koTitle: "즐겨찾기 목록", description: "Access bookmarks, saved reviews, and draft reviews.", type: "action" },
        { id: "mp-specs", title: "Update Academic Scores", koTitle: "내 스펙 수정", description: "Modify GPA and language scores dynamically.", type: "action" },
        { id: "mp-notif", title: "Settings & Notifications", koTitle: "알림 설정", description: "Toggle email, SMS, and deadline alerts.", type: "action" }
      ]
    }
  ];

  return (
    <div className="mt-16 w-full flex flex-col gap-10">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
          Interactive User Flow Map
        </h3>
        <p className="mt-2 text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Select a module to see the key screens, actions, and solution points in the Solid Connection flow.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
        <button
          onClick={() => setActiveFlow("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
            activeFlow === "all"
              ? "bg-neutral-950 border-neutral-950 text-white shadow-lg"
              : "bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100"
          }`}
        >
          All Modules
        </button>
        {flows.map((flow) => (
          <button
            key={flow.id}
            onClick={() => setActiveFlow(flow.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
              activeFlow === flow.id
                ? "text-white shadow-md"
                : "bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100"
            }`}
            style={activeFlow === flow.id ? { backgroundColor: flow.color, borderColor: flow.color } : {}}
          >
            {flow.title.split(". ")[1]}
          </button>
        ))}
      </div>

      {/* Flow Canvas */}
      <div className="w-full bg-white text-neutral-900 py-4 relative overflow-hidden group/canvas">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Global Connection SVGs (Active when a flow is highlighted) */}
        {activeFlow !== "all" && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5950F6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#4672EE" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2AA4E2" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {/* Flow Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 relative z-10">
          {flows.map((flow) => {
            const isDimmed = activeFlow !== "all" && activeFlow !== flow.id;
            const isActive = activeFlow === flow.id;

            return (
              <div
                key={flow.id}
                className={`flex flex-col bg-neutral-50/40 border rounded-2xl p-4 transition-all duration-500 ${
                  isDimmed 
                    ? "opacity-35 blur-[0.5px] border-neutral-100 scale-95" 
                    : "opacity-100 scale-100 border-neutral-200/60"
                }`}
                style={
                  isActive 
                    ? { 
                        borderColor: `${flow.color}60`, 
                        boxShadow: `0 8px 30px -10px ${flow.glowColor}`,
                        backgroundColor: "#ffffff"
                      } 
                    : {}
                }
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4 pb-3 border-b border-neutral-200/60">
                  <div>
                    <span 
                      className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${flow.color}10`, color: flow.color }}
                    >
                      {flow.title}
                    </span>
                    {/* <h4 className="text-xs font-extrabold text-neutral-700 mt-2">
                      {flow.koTitle}
                    </h4> */}
                  </div>
                  {isActive && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: flow.color }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: flow.color }}></span>
                    </span>
                  )}
                </div>

                {/* Nodes list */}
                <div className="flex flex-col gap-2.5">
                  {flow.nodes.map((node, nIdx) => {
                    return (
                      <div key={node.id} className="flex flex-col gap-2.5 relative">
                        {/* Compact Action Box */}
                        <div 
                          className="group/node bg-white border border-neutral-200/80 hover:border-neutral-450 rounded-xl px-3 py-2 transition-all duration-300 hover:bg-neutral-50 relative text-center flex flex-col justify-center min-h-[48px] shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
                        >
                          <h5 className="text-[10px] md:text-[11px] font-bold text-neutral-800 group-hover/node:text-neutral-900 transition-colors leading-tight">
                            {node.title}
                          </h5>
                          {/* <span className="text-[8px] text-neutral-400 group-hover/node:text-neutral-500 font-semibold mt-0.5 block transition-colors">
                            {node.koTitle}
                          </span> */}
                        </div>

                        {/* Connector Arrow (between nodes in column) */}
                        {nIdx < flow.nodes.length - 1 && (
                          <div className="flex justify-center items-center h-3 py-0.5">
                            <svg className="w-3.5 h-3.5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend / Info Footer */}
        <div className="mt-8 pt-6 border-t border-neutral-200/60 flex justify-between items-center text-[9px] md:text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
          <div>
            Flow Topology: Branching Star Architecture
          </div>
          <div>
            Actions Connected Dynamically
          </div>
        </div>
      </div>
    </div>
  );
}
