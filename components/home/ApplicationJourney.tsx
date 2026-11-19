"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  TrendingUp,
  CheckCircle2,
  Clock,
  Sparkles,
  Building2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  UserCheck,
  Banknote,
  ChevronRight,
  Info,
  MapPin,
  Headphones,
  Percent,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

interface StageItem {
  id: number;
  stageNumber: string;
  title: string;
  status: string;
  state: "completed" | "current" | "upcoming";
  description: string;
  icon: React.ElementType;
  meta: string;
}

const STAGES: StageItem[] = [
  {
    id: 1,
    stageNumber: "01",
    title: "Profile Assessment & Comparison",
    status: "Completed",
    state: "completed",
    description:
      "Understanding the applicant's financial profile and exploring potentially suitable lending options across available banking and financial institution networks.",
    icon: UserCheck,
    meta: "Multi-lender criteria evaluation",
  },
  {
    id: 2,
    stageNumber: "02",
    title: "Document Verification",
    status: "Verified",
    state: "completed",
    description:
      "Reviewing the required KYC documents, income information, financial statements, and employment details before application submission.",
    icon: FileCheck2,
    meta: "KYC & income documentation",
  },
  {
    id: 3,
    stageNumber: "03",
    title: "Lender Evaluation",
    status: "Evaluation Completed",
    state: "completed",
    description:
      "Coordinating with suitable lending institutions for application assessment and preliminary eligibility evaluation.",
    icon: Building2,
    meta: "Institutional underwriting review",
  },
  {
    id: 4,
    stageNumber: "04",
    title: "Sanction & Final Review",
    status: "In Progress · 75%",
    state: "current",
    description:
      "The lending institution undertakes its final underwriting, verification, and credit assessment before communicating its decision.",
    icon: Clock,
    meta: "Final credit committee review",
  },
  {
    id: 5,
    stageNumber: "05",
    title: "Disbursal into Account",
    status: "Upcoming",
    state: "upcoming",
    description:
      "Following lender approval and completion of required formalities, the approved loan amount is disbursed directly by the lending institution to the applicant's bank account.",
    icon: Banknote,
    meta: "Direct NEFT / RTGS transfer",
  },
];

export default function ApplicationJourney() {
  const [activeStageId, setActiveStageId] = useState<number>(4);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const radius = 35;
  const circumference = 2 * Math.PI * radius; // ~219.9
  const targetProgress = 0.75;
  const targetOffset = circumference * (1 - targetProgress);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[3];

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-white via-bg-warm to-white border-b border-gray-100 overflow-hidden"
      aria-label="Application Journey Experience"
    >
      {/* Cinematic ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px]">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-gold/6 blur-3xl animate-pulse-glow" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* A. SECTION INTRODUCTION                                   */}
        {/* ========================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-4 shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-brand-green uppercase tracking-widest">
              YOUR APPLICATION, GUIDED AT EVERY STEP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-text-charcoal tracking-tight leading-[1.18] mb-4"
          >
            From First Enquiry to{" "}
            <span className="bg-gradient-to-r from-brand-green via-emerald-700 to-brand-green bg-clip-text text-transparent">
              Final Disbursal.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Every lending journey deserves clarity and dedicated attention. Our
            team helps you navigate each stage, from understanding your
            financial requirements and preparing documentation to coordinating
            with lending institutions and tracking the application process.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* TWO-PART COMPOSITION: STICKY PROGRESS PANEL & TIMELINE    */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ======================================================= */}
          {/* B. APPLICATION PROGRESS DASHBOARD (LEFT SIDE - STICKY)   */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-xl shadow-brand-green/6 overflow-hidden backdrop-blur-sm"
            >
              {/* Subtle luxury top gradient strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-green via-brand-gold to-brand-green" />

              {/* Application Information Header */}
              <div className="flex items-start justify-between gap-3 pb-5 border-b border-gray-100 mb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-bg-light-green border border-brand-green/20 px-3 py-1 rounded-full text-xs font-bold text-brand-green mb-2">
                    <TrendingUp size={13} className="shrink-0" />
                    Personal Loan Application
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-text-charcoal tracking-tight">
                    Active File Progress
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] uppercase font-bold text-text-light block leading-none mb-1">
                    File Reference
                  </span>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="inline-block text-xs font-mono font-bold text-text-charcoal bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200/80">
                      DL-84920
                    </span>
                    <span className="text-[10px] font-semibold text-text-light bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                      Illustrative
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress & Current Status Block */}
              <div className="bg-gradient-to-br from-bg-warm to-bg-light-green/30 rounded-2xl p-4 sm:p-5 border border-gray-100/90 mb-5 flex flex-col sm:flex-row items-center gap-5 justify-between">
                {/* 75% Circular Progress Indicator */}
                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                  <svg
                    className="w-24 h-24 -rotate-90 transform"
                    viewBox="0 0 88 88"
                    aria-hidden="true"
                  >
                    <circle
                      cx="44"
                      cy="44"
                      r={radius}
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6"
                    />
                    <circle
                      cx="44"
                      cy="44"
                      r={radius}
                      fill="none"
                      stroke="url(#progressGradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={isLoaded ? targetOffset : circumference}
                      style={{
                        transition:
                          "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="progressGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#006B4F" />
                        <stop offset="70%" stopColor="#006B4F" />
                        <stop offset="100%" stopColor="#D4A72C" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-heading font-extrabold text-2xl text-text-charcoal leading-none">
                      75%
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-brand-green mt-0.5">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Current Status Block */}
                <div className="min-w-0 text-center sm:text-left flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-text-light block leading-none mb-1.5">
                    Current Application Status
                  </span>
                  <div className="inline-flex items-center gap-2 bg-bg-light-green border border-brand-green/30 px-3 py-1 rounded-xl shadow-2xs mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold text-brand-green tracking-wide">
                      In Progress · Stage 04
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Underwriting assessment &amp; verification actively coordinated
                    with lending institution.
                  </p>
                </div>
              </div>

              {/* Current Stage Viewing Insight */}
              <div className="bg-bg-warm rounded-2xl p-4 border border-gray-200/80 mb-5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-text-light uppercase tracking-wider text-[10px]">
                    Viewing Stage {activeStage.stageNumber} of 05
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      activeStage.state === "completed"
                        ? "bg-bg-light-green text-brand-green border border-brand-green/20"
                        : activeStage.state === "current"
                        ? "bg-amber-50 text-amber-800 border border-brand-gold/30"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {activeStage.status}
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-text-charcoal leading-snug mb-0.5">
                  {activeStage.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {activeStage.meta}
                </p>
              </div>

              {/* Financial Information Summary */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-bg-warm p-3.5 rounded-xl border border-gray-100">
                  <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block mb-0.5">
                    Sample Loan Quantum
                  </span>
                  <p className="font-heading font-extrabold text-lg text-brand-green leading-tight">
                    ₹7,50,000
                  </p>
                  <span className="text-[9px] text-text-light">
                    Illustrative sample
                  </span>
                </div>

                <div className="bg-bg-warm p-3.5 rounded-xl border border-gray-100">
                  <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block mb-0.5">
                    Sample Monthly EMI
                  </span>
                  <p className="font-heading font-extrabold text-lg text-text-charcoal leading-tight">
                    ₹16,280{" "}
                    <span className="text-xs font-normal text-text-muted">
                      / mo
                    </span>
                  </p>
                  <span className="text-[9px] text-text-light">
                    5-Year benchmark
                  </span>
                </div>
              </div>

              {/* Support & Live Inquiry Action */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
                <div className="flex items-center gap-2 text-text-muted font-medium">
                  <ShieldCheck size={16} className="text-brand-green shrink-0" />
                  <span>Kharadi, Pune Support Desk</span>
                </div>
                <a
                  href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20want%20to%20track%20my%20loan%20application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-brand-green hover:text-brand-green-dark hover:underline bg-bg-light-green border border-brand-green/20 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                >
                  <span>Live Inquiry</span>
                  <ChevronRight size={13} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ======================================================= */}
          {/* C. FIVE-STAGE APPLICATION TIMELINE (RIGHT SIDE)         */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 sm:pl-8">
              {/* Continuous Vertical Timeline Track */}
              <div
                className="absolute left-[13px] sm:left-[17px] top-6 bottom-8 w-[2px] bg-gray-200 pointer-events-none"
                aria-hidden="true"
              />
              {/* Active Progress Beam through Stage 04 */}
              <div
                className="absolute left-[13px] sm:left-[17px] top-6 h-[76%] w-[2px] bg-gradient-to-b from-brand-green via-brand-green to-brand-gold pointer-events-none shadow-sm shadow-brand-green/30"
                aria-hidden="true"
              />

              <div className="space-y-5">
                {STAGES.map((stage) => {
                  const isCompleted = stage.state === "completed";
                  const isCurrent = stage.state === "current";
                  const isSelected = stage.id === activeStageId;
                  const Icon = stage.icon;

                  return (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.12 * stage.id }}
                      onClick={() => setActiveStageId(stage.id)}
                      className={`relative group cursor-pointer transition-all duration-300 rounded-3xl p-5 sm:p-6 border ${
                        isSelected
                          ? "bg-white border-brand-green shadow-xl shadow-brand-green/8 -translate-y-0.5 ring-1 ring-brand-green/20"
                          : isCurrent
                          ? "bg-white border-brand-gold/60 shadow-md shadow-brand-gold/5"
                          : "bg-white/90 border-gray-200/80 hover:border-gray-300 hover:bg-white hover:shadow-card"
                      }`}
                    >
                      {/* Timeline Node Icon Indicator */}
                      <div className="absolute -left-[32px] sm:-left-[39px] top-6 z-10">
                        {isCompleted && (
                          <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center ring-4 ring-white shadow-xs">
                            <CheckCircle2 size={16} className="shrink-0" />
                          </div>
                        )}

                        {isCurrent && (
                          <div className="relative flex items-center justify-center">
                            <span className="absolute w-10 h-10 rounded-full bg-brand-green/20 animate-ping" />
                            <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center ring-4 ring-white shadow-md border-2 border-brand-gold">
                              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                            </div>
                          </div>
                        )}

                        {!isCompleted && !isCurrent && (
                          <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 ring-4 ring-white flex items-center justify-center shadow-2xs">
                            <span className="w-2 h-2 rounded-full bg-gray-300" />
                          </div>
                        )}
                      </div>

                      {/* Stage Heading & Status */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span
                            className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1.5 ${
                              isCurrent
                                ? "bg-brand-green text-white"
                                : isCompleted
                                ? "bg-bg-light-green text-brand-green"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            <Icon size={13} className="shrink-0" />
                            STAGE {stage.stageNumber}
                          </span>
                          <h4
                            className={`font-heading text-base sm:text-lg leading-snug transition-colors ${
                              isCurrent
                                ? "font-extrabold text-brand-green"
                                : isCompleted
                                ? "font-bold text-text-charcoal group-hover:text-brand-green"
                                : "font-semibold text-text-muted"
                            }`}
                          >
                            {stage.title}
                          </h4>
                        </div>

                        {/* Status Badge */}
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shrink-0 self-start sm:self-auto ${
                            isCompleted
                              ? "bg-bg-light-green text-brand-green border border-brand-green/25"
                              : isCurrent
                              ? "bg-amber-50 text-amber-900 border border-brand-gold/50 shadow-2xs"
                              : "bg-gray-100 text-gray-500 border border-gray-200/80"
                          }`}
                        >
                          {stage.status}
                        </span>
                      </div>

                      {/* Stage Description */}
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Supporting Indicator for Stage 04 (Primary Focus) */}
                      {isCurrent && (
                        <div className="mt-4 pt-3.5 border-t border-gray-100">
                          <div className="flex items-center justify-between text-xs font-semibold text-brand-green mb-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-text-charcoal flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                              Underwriting In Progress — 75% Complete
                            </span>
                            <span className="font-mono font-bold">75%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden w-full p-0.5 border border-gray-200/60">
                            <div
                              className="h-full bg-gradient-to-r from-brand-green via-emerald-600 to-brand-gold rounded-full transition-all duration-1000 ease-out"
                              style={{ width: "75%" }}
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Illustrative Stage Disclaimer Notice */}
            <div className="flex items-start gap-2.5 text-xs text-text-muted pl-6 sm:pl-8 bg-gray-50/70 p-3.5 rounded-2xl border border-gray-200/70">
              <Info size={15} className="shrink-0 mt-0.5 text-brand-gold" />
              <p className="leading-relaxed">
                These are illustrative stages representing our standard
                coordination workflow, not a promise that every application
                follows the identical sequence or receives approval.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* D. ILLUSTRATIVE ASSESSMENT SUMMARY (FULL WIDTH GRID)      */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-xl shadow-brand-green/5"
        >
          {/* Heading & Subheading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-gray-100">
            <div>
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest bg-bg-light-green border border-brand-green/20 px-3.5 py-1 rounded-full">
                Illustrative Assessment Summary
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-charcoal tracking-tight mt-2.5">
                Sample Loan &amp; Assistance Metrics
              </h3>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
              <Sparkles size={22} />
            </div>
          </div>

          {/* Balanced Responsive Grid (6 Core Metrics) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
            {/* 1. Indicative Loan Amount */}
            <div className="bg-bg-warm p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-light uppercase tracking-wider block mb-1.5">
                  Indicative Loan Amount
                </span>
                <p className="font-heading font-extrabold text-2xl lg:text-3xl text-brand-green leading-none mb-1">
                  ₹7,50,000
                </p>
              </div>
              <span className="text-xs text-text-muted mt-2 font-medium">
                Illustrative sample
              </span>
            </div>

            {/* 2. Estimated Monthly EMI */}
            <div className="bg-bg-warm p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-light uppercase tracking-wider block mb-1.5">
                  Estimated Monthly EMI
                </span>
                <p className="font-heading font-extrabold text-2xl lg:text-3xl text-text-charcoal leading-none mb-1">
                  ₹16,280{" "}
                  <span className="text-sm font-normal text-text-muted">
                    / month
                  </span>
                </p>
              </div>
              <span className="text-xs text-text-muted mt-2 font-medium">
                Indicative 5-year tenure
              </span>
            </div>

            {/* 3. Application Progress */}
            <div className="bg-bg-warm p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-light uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Percent size={13} className="text-brand-gold" />
                  Application Progress
                </span>
                <p className="font-heading font-extrabold text-2xl lg:text-3xl text-brand-gold leading-none mb-1">
                  75%
                </p>
              </div>
              <span className="text-xs text-text-muted mt-2 font-medium">
                Underwriting stage
              </span>
            </div>

            {/* 4. Lending Network */}
            <div className="bg-bg-warm p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-light uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Building2 size={13} className="text-brand-green" />
                  Lending Network
                </span>
                <p className="font-heading font-bold text-base lg:text-lg text-text-charcoal leading-snug">
                  Multiple Bank &amp; NBFC Options
                </p>
              </div>
              <span className="text-xs text-text-muted mt-2 font-medium">
                Extensive institutional options
              </span>
            </div>

            {/* 5. Location */}
            <div className="bg-bg-warm p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-light uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <MapPin size={13} className="text-brand-green" />
                  Location
                </span>
                <p className="font-heading font-bold text-base lg:text-lg text-text-charcoal leading-snug">
                  City Vista, Kharadi, Pune
                </p>
              </div>
              <span className="text-xs text-text-muted mt-2 font-medium">
                Dedicated Pune office desk
              </span>
            </div>

            {/* 6. Support */}
            <div className="bg-bg-warm p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-text-light uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Headphones size={13} className="text-brand-green" />
                  Support
                </span>
                <p className="font-heading font-bold text-base lg:text-lg text-brand-green leading-snug">
                  Dedicated Application Assistance
                </p>
              </div>
              <span className="text-xs text-text-muted mt-2 font-medium">
                End-to-end guidance
              </span>
            </div>
          </div>

          {/* Explicit Labeling Notice */}
          <div className="bg-gray-50/90 p-4 rounded-2xl border border-gray-200/70 text-xs text-text-muted leading-relaxed">
            All sample financial figures above are purely illustrative benchmarks
            designed to demonstrate our tracking interface. They do not represent
            an actual customer&apos;s application, pre-approval, or guaranteed loan
            sanction.
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* E. FINAL CTA & REGULATORY DISCLOSURE                      */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 space-y-4"
        >
          {/* Polished Closing Section */}
          <div className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-dark text-white rounded-3xl p-7 sm:p-9 lg:p-10 relative overflow-hidden shadow-xl">
            {/* Subtle background glow */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left max-w-2xl">
                <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 leading-tight tracking-tight">
                  Your Financial Journey Deserves the Right Guidance.
                </h4>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-3">
                  Have a loan requirement? Our team is here to help you
                  understand the available options and navigate the application
                  process with clarity.
                </p>
                <p className="text-xs sm:text-sm text-brand-gold-light font-semibold tracking-wide">
                  Transparent Guidance · Dedicated Pune Support · Clear Communication
                </p>
              </div>

              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2.5 bg-brand-gold text-brand-green-dark px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base hover:bg-brand-gold-light transition-all duration-300 shadow-gold shrink-0 group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Application</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Regulatory Disclosure Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-bg-light-green/70 border border-brand-green/20 text-xs text-text-muted leading-relaxed">
            <p>
              <strong>Regulatory Disclosure:</strong> Application progress,
              approval timelines, applicable interest rates, processing fees,
              and disbursal terms are subject to the assessment and policies of
              the respective lending institution. The displayed application
              journey and financial figures are illustrative.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}