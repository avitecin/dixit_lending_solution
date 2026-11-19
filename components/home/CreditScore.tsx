"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Percent,
  FileSearch,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Info,
  Sparkles,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { useInView, useReducedMotion } from "framer-motion";
import FloatingBackground from "@/components/ui/FloatingBackground";

type TierId = "needs-work" | "average" | "good" | "excellent";

interface ScoreTier {
  id: TierId;
  label: "Needs Work" | "Average" | "Good" | "Excellent";
  range: string;
  minScore: number;
  maxScore: number;
  sampleScore: number;
  color: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  tierStatus: string;
  lenderInsight: string;
  summary: string;
}

const SCORE_TIERS: ScoreTier[] = [
  {
    id: "needs-work",
    label: "Needs Work",
    range: "300–579",
    minScore: 300,
    maxScore: 579,
    sampleScore: 520,
    color: "#EF4444",
    accentColor: "#F87171",
    badgeBg: "bg-red-50 border-red-200",
    badgeText: "text-red-700",
    tierStatus: "Subprime Tier",
    lenderInsight:
      "Lenders perceive elevated default risk. Inquiries may face rejection or require secured collateral, co-signers, and premium interest rates.",
    summary: "Rebuilding payment discipline is advised to escape high-risk flags.",
  },
  {
    id: "average",
    label: "Average",
    range: "580–669",
    minScore: 580,
    maxScore: 669,
    sampleScore: 635,
    color: "#F59E0B",
    accentColor: "#FBBF24",
    badgeBg: "bg-amber-50 border-amber-200",
    badgeText: "text-amber-800",
    tierStatus: "Moderate Tier",
    lenderInsight:
      "Qualifies with select NBFCs and regional lenders. Sanctions depend heavily on income stability, employer category, and existing obligations.",
    summary: "Standard terms available; keeping utilization low helps cross 670+.",
  },
  {
    id: "good",
    label: "Good",
    range: "670–749",
    minScore: 670,
    maxScore: 749,
    sampleScore: 715,
    color: "#10B981",
    accentColor: "#34D399",
    badgeBg: "bg-emerald-50 border-emerald-200",
    badgeText: "text-emerald-800",
    tierStatus: "Prime Tier",
    lenderInsight:
      "Comfortably eligible for mainstream bank loans and market-standard interest rates with smooth, predictable processing turnaround.",
    summary: "Approved by premier commercial banks with regular documentation.",
  },
  {
    id: "excellent",
    label: "Excellent",
    range: "750–900",
    minScore: 750,
    maxScore: 900,
    sampleScore: 750,
    color: "#006B4F",
    accentColor: "#D4A72C",
    badgeBg: "bg-brand-green/10 border-brand-green/30",
    badgeText: "text-brand-green",
    tierStatus: "Super Prime Tier",
    lenderInsight:
      "Unlocks premier banking privileges: lowest interest spreads, processing fee concessions, larger sanction limits, and expedited approval tracks.",
    summary: "Preferred borrower profile across top Indian banks & institutions.",
  },
];

const INSIGHT_CARDS = [
  {
    icon: CalendarCheck,
    title: "Payment History",
    highlight: "~35% weighting",
    desc: "On-time EMI and credit card payments account for ~35% of your score weighting.",
  },
  {
    icon: Percent,
    title: "Credit Utilization",
    highlight: "Keep below 30%",
    desc: "Maintaining credit utilization below 30% avoids negative risk flags.",
  },
  {
    icon: FileSearch,
    title: "Hard Inquiries",
    highlight: "Apply strategically",
    desc: "Applying to multiple banks simultaneously triggers hard inquiries that lower your score.",
  },
  {
    icon: ShieldCheck,
    title: "Expert Advisory",
    highlight: "Pune advisors",
    desc: "Our Pune advisors help structure applications to preserve your credit profile.",
  },
];

// SVG Radial Arch Geometry Configuration
// Center: (160, 155), Radius: 105
// Angle span: 220° (160° bottom-left to 380° bottom-right)
const CX = 160;
const CY = 155;
const RADIUS = 105;
const START_DEG = 160;
const TOTAL_SWEEP_DEG = 220;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${r} ${r} 0 ${arcSweep} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

// 4 Segments: 52° each with 4° gaps (52*4 + 4*3 = 208 + 12 = 220°)
const GAUGE_SEGMENTS = [
  { tierId: "needs-work", start: 160, end: 212, color: "#EF4444", label: "Fair" },
  { tierId: "average", start: 216, end: 268, color: "#F59E0B", label: "Average" },
  { tierId: "good", start: 272, end: 324, color: "#10B981", label: "Good" },
  { tierId: "excellent", start: 328, end: 380, color: "#006B4F", label: "Prime" },
];

export default function CreditScore() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const [selectedTierId, setSelectedTierId] = useState<TierId>("excellent");
  const [displayScore, setDisplayScore] = useState<number>(300);
  const [hasAnimatedIntro, setHasAnimatedIntro] = useState<boolean>(false);

  const activeTier = SCORE_TIERS.find((t) => t.id === selectedTierId) || SCORE_TIERS[3];

  // Initial Viewport Entry Animation (smooth 1300ms counter to 750)
  useEffect(() => {
    if (!isInView || hasAnimatedIntro) return;

    let startTime: number | null = null;
    const duration = 1300;
    const startScore = 300;
    const targetScore = 750;

    let rafId: number;
    const animateCount = (timestamp: number) => {
      if (prefersReducedMotion) {
        setDisplayScore(targetScore);
        setHasAnimatedIntro(true);
        return;
      }

      if (startTime === null) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startScore + (targetScore - startScore) * ease);
      setDisplayScore(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(animateCount);
      } else {
        setHasAnimatedIntro(true);
      }
    };

    rafId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, hasAnimatedIntro, prefersReducedMotion]);

  // Handle tier selection / interactive preview
  const handleSelectTier = (tier: ScoreTier) => {
    setSelectedTierId(tier.id);

    if (prefersReducedMotion) {
      setDisplayScore(tier.sampleScore);
      return;
    }

    // Smooth transition between score values (450ms)
    const duration = 450;
    const startVal = displayScore;
    const endVal = tier.sampleScore;
    let startTimestamp: number | null = null;

    const animateTransition = (timestamp: number) => {
      if (startTimestamp === null) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (endVal - startVal) * ease);
      setDisplayScore(current);

      if (progress < 1) {
        requestAnimationFrame(animateTransition);
      }
    };
    requestAnimationFrame(animateTransition);
  };

  // Calculate pointer angle along arc based on current displayed score
  // Clamp between 300 and 900
  const clampedScore = Math.max(300, Math.min(900, displayScore));
  const scoreFraction = (clampedScore - 300) / (900 - 300);
  const pointerAngle = START_DEG + scoreFraction * TOTAL_SWEEP_DEG;
  const pointerPos = polarToCartesian(CX, CY, RADIUS, pointerAngle);

  // Active glowing arc path from start (160°) to current angle
  const activeArcPath =
    scoreFraction > 0.01
      ? describeArc(CX, CY, RADIUS, START_DEG, Math.max(START_DEG + 1, pointerAngle))
      : "";

  return (
    <section
      id="credit-score"
      ref={sectionRef}
      className="section-pad bg-white relative overflow-hidden"
    >
      {/* Background Floating Elements */}
      <FloatingBackground variant="credit-score" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Wrapper */}
        <div className="bg-gradient-to-br from-bg-light-green/95 via-white to-bg-warm rounded-3xl sm:rounded-4xl border border-brand-green/15 p-4 sm:p-8 lg:p-12 xl:p-14 shadow-card relative backdrop-blur-xs">
          {/* Subtle Ambient Decorative Inner Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl"
          />

          {/* MOBILE HEADER (Stacked order on mobile: Credit Profile Education -> Heading -> Gauge) */}
          <div className="lg:hidden mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-3.5 shadow-2xs">
              <Sparkles size={13} className="text-brand-gold" />
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                Credit Profile Education
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-charcoal mb-3 leading-tight">
              Understand Your Credit Profile.{" "}
              <span className="text-brand-green">Borrow With Confidence.</span>
            </h2>
            <div className="gold-divider mb-4 sm:mx-0 mx-auto" />
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
              Your credit bureau standing (CIBIL / Experian / Equifax) plays a decisive role in lender decisions. A healthy score of 750+ unlocks preferential interest pricing, larger sanction amounts, and expedited approvals.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
            {/* LEFT COLUMN: Premium Credit Score Dashboard Card (5 cols on lg) */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-brand-green/15 shadow-3d-elevated relative overflow-hidden transition-all duration-300">
                {/* Card Top Utility Bar */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-xs font-bold text-text-charcoal uppercase tracking-wider">
                      Credit Health
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-brand-gold/15 text-brand-green-dark border border-brand-gold/30 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                    <Sparkles size={11} className="text-brand-gold shrink-0" />
                    <span>Illustrative Example</span>
                  </div>
                </div>

                {/* SVG Radial Speedometer Gauge */}
                <div className="relative w-full max-w-[320px] mx-auto flex flex-col items-center">
                  <svg
                    viewBox="0 0 320 230"
                    className="w-full h-auto overflow-visible select-none drop-shadow-xs"
                    role="img"
                    aria-label={`Illustrative Credit Score: ${displayScore} out of 900, categorized as ${activeTier.label}`}
                  >
                    <defs>
                      {/* Active Arc Gradient */}
                      <linearGradient
                        id="gaugeGrad"
                        gradientUnits="userSpaceOnUse"
                        x1="50"
                        y1="190"
                        x2="270"
                        y2="190"
                      >
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="35%" stopColor="#F59E0B" />
                        <stop offset="65%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#006B4F" />
                      </linearGradient>

                      {/* Subtle Glow Filter */}
                      <filter id="gaugeGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Outer Thin Decorative Orbit Ring */}
                    <path
                      d={describeArc(CX, CY, RADIUS + 15, START_DEG, START_DEG + TOTAL_SWEEP_DEG)}
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="1.5"
                      strokeDasharray="2 4"
                      opacity="0.8"
                    />

                    {/* Inactive Base Track */}
                    <path
                      d={describeArc(CX, CY, RADIUS, START_DEG, START_DEG + TOTAL_SWEEP_DEG)}
                      fill="none"
                      stroke="#F3F4F6"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* 4 Segmented Zones with Subtle Gaps */}
                    {GAUGE_SEGMENTS.map((seg) => {
                      const isSelected = seg.tierId === selectedTierId;
                      return (
                        <g key={seg.tierId}>
                          <path
                            d={describeArc(CX, CY, RADIUS, seg.start, seg.end)}
                            fill="none"
                            stroke={seg.color}
                            strokeWidth={isSelected ? 14 : 11}
                            strokeLinecap="round"
                            opacity={isSelected ? 0.95 : 0.28}
                            className="transition-all duration-300 cursor-pointer"
                            onClick={() => {
                              const tier = SCORE_TIERS.find((t) => t.id === seg.tierId);
                              if (tier) handleSelectTier(tier);
                            }}
                          />
                        </g>
                      );
                    })}

                    {/* Dynamic Active Glow Path (travels with score) */}
                    {activeArcPath && (
                      <path
                        d={activeArcPath}
                        fill="none"
                        stroke="url(#gaugeGrad)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        filter="url(#gaugeGlow)"
                        opacity="0.9"
                      />
                    )}

                    {/* Animated Pointer / Glow Knob */}
                    <g className="transition-all duration-300 ease-out">
                      {/* Outer pulse aura */}
                      <circle
                        cx={pointerPos.x}
                        cy={pointerPos.y}
                        r="11"
                        fill={activeTier.color}
                        fillOpacity="0.25"
                      />
                      {/* Crisp white container */}
                      <circle
                        cx={pointerPos.x}
                        cy={pointerPos.y}
                        r="6.5"
                        fill="#FFFFFF"
                        stroke={activeTier.color}
                        strokeWidth="2.5"
                        filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))"
                      />
                      {/* Center gold dot */}
                      <circle
                        cx={pointerPos.x}
                        cy={pointerPos.y}
                        r="2.5"
                        fill="#D4A72C"
                      />
                    </g>

                    {/* Score Labels on Track */}
                    <text
                      x="40"
                      y="204"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#8A9490"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      300
                    </text>
                    <text
                      x="68"
                      y="112"
                      fontSize="9"
                      fontWeight="600"
                      fill="#8A9490"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      579
                    </text>
                    <text
                      x="160"
                      y="32"
                      fontSize="9"
                      fontWeight="600"
                      fill="#8A9490"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      669
                    </text>
                    <text
                      x="252"
                      y="112"
                      fontSize="9"
                      fontWeight="600"
                      fill="#8A9490"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      749
                    </text>
                    <text
                      x="280"
                      y="204"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#006B4F"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      900
                    </text>
                  </svg>

                  {/* Gauge Center Score Display */}
                  <div className="absolute top-[34%] sm:top-[36%] left-1/2 -translate-x-1/2 text-center pointer-events-none select-none w-full px-2">
                    <p className="text-[10px] font-bold tracking-widest text-text-light uppercase mb-0.5">
                      Illustrative Score
                    </p>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span
                        className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal tracking-tight"
                        aria-live="polite"
                      >
                        {displayScore}
                      </span>
                      {selectedTierId === "excellent" && (
                        <span className="text-xl sm:text-2xl font-bold text-brand-gold">+</span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center justify-center">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full border shadow-2xs ${activeTier.badgeBg} ${activeTier.badgeText}`}
                      >
                        <CheckCircle2 size={12} className="shrink-0" />
                        {activeTier.label}
                      </span>
                    </div>
                    <p className="text-[10px] text-text-light mt-1.5 font-medium">
                      Range: {activeTier.range}
                    </p>
                  </div>
                </div>

                {/* Score Scale Track & Interactive Range Cards */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                      Interactive Scale
                    </span>
                    <span className="text-[10px] text-text-light font-medium">
                      Click tier to inspect
                    </span>
                  </div>

                  {/* Visual Node Track */}
                  <div className="relative mb-3 px-2">
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
                      <div className="w-1/4 bg-red-400/80" />
                      <div className="w-1/4 bg-amber-400/80" />
                      <div className="w-1/4 bg-emerald-400/80" />
                      <div className="w-1/4 bg-brand-green" />
                    </div>
                  </div>

                  {/* 4 Interactive Category Buttons */}
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center" role="tablist">
                    {SCORE_TIERS.map((tier) => {
                      const isSelected = tier.id === selectedTierId;
                      const isExcellent = tier.id === "excellent";
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => handleSelectTier(tier)}
                          className={`group/btn relative p-2 rounded-2xl border transition-all duration-200 text-left sm:text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                            isSelected
                              ? `bg-white shadow-sm ring-2 ${
                                  isExcellent
                                    ? "ring-brand-green border-brand-green"
                                    : "ring-gray-300 border-gray-400"
                                }`
                              : "bg-gray-50/70 border-gray-100 hover:bg-white hover:border-gray-200"
                          } ${isExcellent && !isSelected ? "border-brand-green/25 bg-bg-light-green/40" : ""}`}
                        >
                          {/* Active Pill Indicator */}
                          {isSelected && (
                            <span
                              className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-brand-green"
                              aria-hidden="true"
                            />
                          )}
                          <p
                            className={`text-[11px] sm:text-xs font-bold truncate ${
                              isSelected ? tier.badgeText : "text-text-charcoal group-hover/btn:text-brand-green"
                            }`}
                          >
                            {tier.label}
                          </p>
                          <p className="text-[10px] text-text-light truncate mt-0.5">
                            {tier.range}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Dynamic Educational Advisory Callout for Active Tier */}
                  <div className="mt-3.5 p-3 rounded-2xl bg-bg-light-green/70 border border-brand-green/15 text-xs text-text-muted">
                    <div className="flex items-start gap-2">
                      <span className="text-brand-gold text-sm leading-none shrink-0 mt-0.5">💡</span>
                      <div className="leading-relaxed">
                        <p className="font-semibold text-text-charcoal text-[11px]">
                          {activeTier.tierStatus} Interpretation:
                        </p>
                        <p className="text-[11px] text-text-muted mt-0.5">
                          {activeTier.lenderInsight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reset to 750 Benchmark CTA if another tier selected */}
                  {selectedTierId !== "excellent" && (
                    <button
                      type="button"
                      onClick={() => handleSelectTier(SCORE_TIERS[3])}
                      className="mt-2.5 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-brand-green hover:text-brand-green-dark transition-colors py-1"
                    >
                      <RefreshCw size={11} /> Reset to 750+ Prime Benchmark
                    </button>
                  )}
                </div>

                {/* Dashboard Card Footer Stats */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-text-light px-1">
                  <span>Bureau Scope: CIBIL • Experian</span>
                  <span className="font-semibold text-brand-green">Advisory Model</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Educational Content + 4 Insight Cards (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* DESKTOP HEADER (Visible on lg+, hidden on mobile) */}
              <div className="hidden lg:block mb-6">
                <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-3.5 shadow-2xs">
                  <Sparkles size={13} className="text-brand-gold" />
                  <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                    Credit Profile Education
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl xl:text-4xl text-text-charcoal mb-3 leading-tight">
                  Understand Your Credit Profile.{" "}
                  <span className="text-brand-green">Borrow With Confidence.</span>
                </h2>
                <div className="gold-divider mb-4" />
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  Your credit bureau standing (CIBIL / Experian / Equifax) plays a decisive role in lender decisions. A healthy score of 750+ unlocks preferential interest pricing, larger sanction amounts, and expedited approvals.
                </p>
              </div>

              {/* 4 Insight Cards (2x2 Grid) */}
              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
                {INSIGHT_CARDS.map(({ icon: Icon, title, highlight, desc }) => (
                  <div
                    key={title}
                    className="group relative bg-white/95 hover:bg-white rounded-3xl p-4 sm:p-5 border border-brand-green/12 hover:border-brand-green/35 shadow-2xs hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-bg-light-green border border-brand-green/15 flex items-center justify-center text-brand-green group-hover:scale-108 group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-2xs">
                          <Icon size={19} className="stroke-[2.2]" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-brand-green bg-brand-green/8 border border-brand-green/18 px-2.5 py-0.5 rounded-full">
                          {highlight}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-text-charcoal mb-1.5 group-hover:text-brand-green transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Regulatory & Institutional Disclaimer Callout */}
              <div className="flex items-start gap-3.5 p-4 sm:p-4.5 bg-white/85 backdrop-blur-sm rounded-2xl border border-gray-200/90 mb-6 text-xs text-text-muted shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <Info size={15} />
                </div>
                <div className="leading-relaxed">
                  <p className="font-semibold text-text-charcoal text-[11px] uppercase tracking-wider mb-0.5">
                    Credit Profile Education Note
                  </p>
                  <p>
                    <strong>Dixit Lending Solution</strong> does not generate credit bureau reports directly. We provide advisory on how Indian lenders interpret your score and help match you with suitable lenders.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-brand-green-dark transition-all duration-200 shadow-sm hover:shadow-card hover:-translate-y-0.5"
                >
                  Check Loan Options <ArrowRight size={16} />
                </Link>
                <Link
                  href="/resources/credit-score-loan"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-green border border-brand-green/30 px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-bg-light-green transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                >
                  <BookOpen size={16} /> Read Credit Score Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
