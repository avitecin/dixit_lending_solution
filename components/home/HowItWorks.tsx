"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  ClipboardEdit,
  UserCheck,
  SlidersHorizontal,
  Landmark,
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import FloatingBackground from "@/components/ui/FloatingBackground";

interface StepItem {
  number: string;
  phase: string;
  title: string;
  desc: string;
  icon: typeof ClipboardEdit;
  ctaText: string;
  ctaHref: string;
  highlight: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    phase: "Requirement",
    title: "Share Your Requirement",
    desc: "Tell us what you need — loan type, amount, and basic details about your requirement.",
    icon: ClipboardEdit,
    ctaText: "Start Requirement",
    ctaHref: "/#enquiry",
    highlight: "Quick 2-Min Form",
  },
  {
    number: "02",
    phase: "Profile",
    title: "Understand Your Profile",
    desc: "We take time to understand your basic financial profile, employment, and requirements.",
    icon: UserCheck,
    ctaText: "Check Criteria",
    ctaHref: "/calculators",
    highlight: "Zero Credit Impact",
  },
  {
    number: "03",
    phase: "Options",
    title: "Explore Suitable Options",
    desc: "We help you identify suitable lending options from our network of banks and NBFCs.",
    icon: SlidersHorizontal,
    ctaText: "Compare Lenders",
    ctaHref: "/loans/personal-loan",
    highlight: "100+ Lending Partners",
  },
  {
    number: "04",
    phase: "Disbursal",
    title: "Application to Disbursal",
    desc: "We assist with documentation, application submission and follow-up until disbursal.",
    icon: Landmark,
    ctaText: "Disbursal Support",
    ctaHref: "/contact",
    highlight: "Dedicated RM Support",
  },
];

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Effective step considering hover or permanent active state
  const effectiveStep = hoveredStep !== null ? hoveredStep : activeStep;

  // Calculate desktop progress bar percentage (0% to 100%)
  const progressPercent = (effectiveStep / (steps.length - 1)) * 100;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section-pad bg-white relative overflow-hidden"
    >
      {/* Floating Background Animation */}
      <FloatingBackground variant="journey" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-green uppercase tracking-widest bg-bg-light-green border border-brand-green/20 mb-4 shadow-xs">
            <Sparkles size={13} className="text-brand-gold animate-pulse" />
            <span>How It Works</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-charcoal mb-4 tracking-tight leading-tight">
            Your Loan Journey in{" "}
            <span className="text-brand-green relative inline-block">
              4 Simple Steps
              <span className="absolute left-0 bottom-1 w-full h-1 bg-brand-gold/40 rounded-full" />
            </span>
          </h2>

          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;ve simplified the entire process so you can focus on what matters — getting
            the right financial solution.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs sm:text-sm font-semibold text-text-charcoal">
            <div className="inline-flex items-center gap-1.5 bg-bg-warm px-3 py-1 rounded-full border border-gray-200/60">
              <CheckCircle2 size={14} className="text-brand-green" />
              <span>100% Transparent</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-bg-warm px-3 py-1 rounded-full border border-gray-200/60">
              <Clock size={14} className="text-brand-gold" />
              <span>Swift Turnaround</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-bg-warm px-3 py-1 rounded-full border border-gray-200/60">
              <ShieldCheck size={14} className="text-brand-green" />
              <span>Zero Upfront Sourcing Fees</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEWPORT (>=1024px): Premium Horizontal Connected Journey         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          {/* Progress Timeline Header Track */}
          <div className="relative mb-8">
            {/* Background Muted Track Line spanning between node 1 and 4 centers */}
            <div className="absolute top-7 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[3px] bg-gray-100 rounded-full z-0 overflow-hidden">
              {/* Dynamic Active Progress Track */}
              <div
                className="h-full bg-gradient-to-r from-brand-green via-brand-gold to-brand-green rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Segment Directional Arrows positioned in the 3 gaps */}
            {[0, 1, 2].map((gapIndex) => {
              const leftPercent = 25 * (gapIndex + 1);
              const isSegmentActive = effectiveStep > gapIndex;
              return (
                <div
                  key={`arrow-${gapIndex}`}
                  className="absolute top-7 -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-300 pointer-events-none"
                  style={{ left: `${leftPercent}%` }}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSegmentActive
                        ? "bg-brand-green text-white shadow-xs scale-110"
                        : "bg-white text-gray-400 border border-gray-200"
                    }`}
                  >
                    <ChevronRight size={14} className={isSegmentActive ? "translate-x-0.5" : ""} />
                  </div>
                </div>
              );
            })}

            {/* 4 Interactive Step Nodes */}
            <div className="grid grid-cols-4 gap-6 xl:gap-8 relative z-10">
              {steps.map((step, i) => {
                const isActive = effectiveStep >= i;
                const isCurrent = effectiveStep === i;
                const isHovered = hoveredStep === i;

                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center cursor-pointer group"
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => setActiveStep(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStep(i);
                      }
                    }}
                    aria-label={`Step ${step.number}: ${step.title}`}
                  >
                    {/* Numbered Node Circle */}
                    <div
                      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-extrabold text-base transition-all duration-300 ${
                        isCurrent || isHovered
                          ? "bg-brand-green text-white shadow-card-hover scale-110 ring-4 ring-brand-green/20"
                          : isActive
                          ? "bg-brand-green-mid text-white ring-4 ring-brand-green/10"
                          : "bg-white text-text-muted border-2 border-gray-200 hover:border-brand-green/40 hover:text-brand-green"
                      }`}
                    >
                      {step.number}

                      {/* Active Pulse Glow */}
                      {isCurrent && (
                        <span className="absolute -inset-1 rounded-2xl bg-brand-gold/30 animate-pulse pointer-events-none" />
                      )}
                    </div>

                    {/* Step Phase Label */}
                    <span
                      className={`mt-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                        isCurrent || isHovered
                          ? "text-brand-green"
                          : isActive
                          ? "text-text-charcoal"
                          : "text-text-muted"
                      }`}
                    >
                      {step.phase}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-4 gap-6 xl:gap-8">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const isCurrent = effectiveStep === i;
              const isHovered = hoveredStep === i;

              return (
                <div
                  key={step.number}
                  className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full ${
                    isCurrent || isHovered
                      ? "border-brand-green/30 shadow-card-hover -translate-y-1.5"
                      : "border-gray-100/90 shadow-card hover:border-brand-green/20 hover:shadow-card-hover hover:-translate-y-1"
                  } ${
                    reducedMotion || isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: reducedMotion ? "0ms" : `${i * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Top illuminated active stripe */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-gold to-brand-green transition-opacity duration-300 ${
                      isCurrent || isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Card Content Area */}
                  <div>
                    {/* Header with Icon & Highlight Pill */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isCurrent || isHovered
                            ? "bg-brand-green text-white shadow-xs scale-105"
                            : "bg-bg-light-green text-brand-green border border-brand-green/15"
                        }`}
                      >
                        <StepIcon size={22} className="shrink-0" />
                      </div>

                      <span className="text-[10px] font-bold text-brand-green bg-bg-light-green border border-brand-green/20 px-2.5 py-1 rounded-full shrink-0">
                        {step.highlight}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`font-heading font-bold text-lg mb-2.5 leading-snug transition-colors duration-200 ${
                        isCurrent || isHovered ? "text-brand-green" : "text-text-charcoal"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Card Footer / Action Link */}
                  <div className="pt-4 border-t border-gray-100/90 mt-auto">
                    <Link
                      href={step.ctaHref}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-green hover:text-brand-green-dark group/link py-1 focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg transition-colors"
                    >
                      <span>{step.ctaText}</span>
                      <div className="w-6 h-6 rounded-full bg-bg-light-green flex items-center justify-center text-brand-green group-hover/link:bg-brand-green group-hover/link:text-white transition-all duration-200">
                        <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEWPORT (<1024px): Continuous Vertical Timeline Journey   */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative">
          {/* Continuous Vertical Connector Rail */}
          <div
            className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-green via-brand-gold to-brand-green/30 pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {steps.map((step, i) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`flex items-start gap-4 sm:gap-6 transition-all duration-500 ${
                    reducedMotion || isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: reducedMotion ? "0ms" : `${i * 120}ms`,
                  }}
                >
                  {/* Left Rail Node Indicator */}
                  <div className="relative shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green text-white flex items-center justify-center font-heading font-extrabold text-base shadow-card ring-4 ring-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Right Card Container */}
                  <div className="flex-1 min-w-0 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                    {/* Top Row: Icon + Phase + Highlight */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-bg-light-green text-brand-green border border-brand-green/15 flex items-center justify-center shrink-0">
                          <StepIcon size={18} className="shrink-0" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                          {step.phase}
                        </span>
                      </div>

                      <span className="text-[10px] font-bold text-brand-green bg-bg-light-green border border-brand-green/20 px-2.5 py-0.5 rounded-full shrink-0">
                        {step.highlight}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-heading font-bold text-base sm:text-lg text-text-charcoal mb-2 leading-snug break-words">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    {/* Action Link */}
                    <div className="pt-3 border-t border-gray-100">
                      <Link
                        href={step.ctaHref}
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand-green hover:text-brand-green-dark group/link"
                      >
                        <span>{step.ctaText}</span>
                        <ArrowRight size={13} className="text-brand-gold group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Contextual Trust Strip */}
        <div className="mt-12 lg:mt-16 bg-bg-light-green rounded-2xl sm:rounded-3xl p-6 border border-brand-green/20 text-center max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-heading font-bold text-base text-text-charcoal">
                Ready to explore customized loan offers?
              </h4>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                Our Pune loan specialists assess your eligibility and guide you through sanction to disbursal.
              </p>
            </div>
            <Link
              href="/#enquiry"
              className="px-6 py-3 bg-brand-green text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-brand-green-dark transition-all duration-200 shadow-sm hover:shadow-card hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>Get Started Now</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
