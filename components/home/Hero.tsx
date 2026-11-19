"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import FloatingBackground from "@/components/ui/FloatingBackground";

interface ShowcaseSlide {
  id: string;
  category: string;
  badge: string;
  title: string;
  tagline: string;
  highlights: string[];
  image: string;
  alt: string;
  link: string;
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "personal-loan",
    category: "Personal Loan",
    badge: "100+ LENDER OPTIONS",
    title: "Personal Loans",
    tagline: "Instant liquidity for medical, wedding, or planned goals",
    highlights: [
      "Interest from 10.49% p.a.*",
      "Tenures up to 5 Years",
      "Instant Digital Verification",
    ],
    image: "/images/personal-loan-v2.jpg",
    alt: "Professional reviewing personal loan options in modern Pune office",
    link: "/#enquiry",
  },
  {
    id: "home-loan",
    category: "Home Loan",
    badge: "ATTRACTIVE PRICING",
    title: "Home Loans & Balance Transfer",
    tagline: "Own your dream home in Pune with transparent institutional terms",
    highlights: [
      "Interest from 8.40% p.a.*",
      "Tenures up to 30 Years",
      "End-to-End Kharadi Advisory",
    ],
    image: "/images/hero-showcase/home-loan.jpg",
    alt: "Indian couple planning their home purchase with house blueprints",
    link: "/#enquiry",
  },
  {
    id: "business-loan",
    category: "Business Loan",
    badge: "WORKING CAPITAL & GROWTH",
    title: "Business Loans",
    tagline: "Fuel inventory, infrastructure expansion, and operational scale",
    highlights: [
      "Collateral-free up to ₹75L*",
      "Minimal Documentation",
      "Structured Repayment Terms",
    ],
    image: "/images/hero-showcase/business-loan.jpg",
    alt: "Confident Indian entrepreneur in modern corporate office in Pune",
    link: "/#enquiry",
  },
  {
    id: "credit-card",
    category: "Credit Card",
    badge: "LIFESTYLE & REWARDS",
    title: "Premium Credit Cards",
    tagline: "Maximize airport lounge access, dining rewards, and cashback",
    highlights: [
      "Up to 5% Accelerated Cashback",
      "Complimentary Airport Lounges",
      "Zero Annual Fee Options",
    ],
    image: "/images/hero-showcase/credit-card.jpg",
    alt: "Luxury metallic credit card with modern smartphone banking interface",
    link: "/#enquiry",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? SHOWCASE_SLIDES.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateLayout = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      setIsDesktop(window.innerWidth >= 1024 && !mediaQuery.matches);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Autoplay functionality (4.5s per slide)
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4800);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, nextSlide]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartXRef.current = null;
  };



  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden bg-hero-gradient pt-28 pb-14 sm:pb-16 lg:pt-36 lg:pb-20"
      aria-label="Dixit Lending Solution Introduction"
    >
      {/* Background System: radial glows & subtle coordinate mesh */}
      <FloatingBackground
        variant="hero"
        mouseOffset={mouseOffset}
        isDesktop={isDesktop}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Cinematic Editorial Typography & Value Props */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Trust Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-brand-gold/15 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6 shadow-2xs self-start"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
              <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
                Trusted Loan Assistance Partner · Pune
              </span>
            </motion.div>

            {/* Dominant Cinematic Headline with Staggered Word Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-text-charcoal leading-[1.12] mb-6 tracking-tight"
            >
              From Application to{" "}
              <br className="hidden sm:inline" />
              Disbursal, We&apos;re Your{" "}
              <span className="bg-gradient-to-r from-brand-green via-emerald-700 to-brand-green bg-clip-text text-transparent underline decoration-brand-gold/60 decoration-wavy decoration-2 underline-offset-8">
                Lending Solution.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Find suitable loan and credit card options across leading banks and
              NBFCs with expert guidance, transparent assistance, and dedicated
              support from our team in Kharadi, Pune.
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-9"
            >
              <Link
                href="/#enquiry"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-brand-green-dark transition-all duration-300 shadow-card hover:shadow-card-hover group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Started Now</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform shrink-0"
                />
              </Link>

              <a
                href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20would%20like%20to%20consult%20an%20expert"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-brand-green px-8 py-4 rounded-2xl font-bold text-base border border-brand-green/25 hover:bg-bg-light-green transition-all duration-300 shadow-2xs hover:-translate-y-0.5"
              >
                <MessageCircle size={18} className="shrink-0 text-brand-green" />
                <span>Talk to an Expert</span>
              </a>
            </motion.div>

            {/* Clean Horizontal Trust Strip Below CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-gray-200/70"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {[
                  "100% Transparent Process",
                  "Multiple Lending Networks",
                  "Zero Upfront Sourcing Fees*",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={13} className="text-brand-green" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-text-charcoal leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Cinematic Financial Solutions Showcase      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg lg:max-w-none mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onKeyDown={handleKeyDown}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="Dixit Financial Solutions Showcase"
            >
              {/* Luxury Frame Container */}
              <div className="relative rounded-3xl sm:rounded-4xl p-2.5 sm:p-3.5 bg-gradient-to-b from-white/95 via-white/80 to-white/95 backdrop-blur-md border border-gray-200/90 shadow-2xl shadow-brand-green/12 overflow-hidden">
                {/* Visual Stage Container */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-950">
                  {SHOWCASE_SLIDES.map((slide, index) => {
                    const isActive = index === activeIndex;
                    const isNext =
                      index === (activeIndex + 1) % SHOWCASE_SLIDES.length;
                    const isPrev =
                      index ===
                      (activeIndex - 1 + SHOWCASE_SLIDES.length) %
                        SHOWCASE_SLIDES.length;

                    let positionClass = "opacity-0 pointer-events-none scale-90";
                    if (isActive) {
                      positionClass = "opacity-100 z-20 scale-100 translate-x-0";
                    } else if (isNext) {
                      positionClass =
                        "opacity-30 lg:opacity-40 z-10 scale-[0.92] translate-x-[45%]";
                    } else if (isPrev) {
                      positionClass =
                        "opacity-30 lg:opacity-40 z-10 scale-[0.92] -translate-x-[45%]";
                    }

                    return (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${positionClass}`}
                        aria-hidden={!isActive}
                      >
                        {/* High-Resolution Photography */}
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                          className="object-cover object-center transform scale-105"
                        />

                        {/* Cinematic Multi-stop Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/40 via-transparent to-transparent" />

                        {/* In-Frame Slide Information */}
                        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 z-10">
                          {/* Top Tag & Category */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-gold/90 text-brand-green-dark shadow-sm">
                              <Sparkles size={11} className="shrink-0" />
                              {slide.badge}
                            </span>

                            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/20 text-white backdrop-blur-md border border-white/20">
                              {slide.category}
                            </span>
                          </div>

                          {/* Bottom Content */}
                          <div className="text-white">
                            <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight mb-2 text-white drop-shadow-sm">
                              {slide.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 max-w-md mb-4 leading-relaxed">
                              {slide.tagline}
                            </p>

                            {/* Bullet Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-white/15">
                              {slide.highlights.map((h) => (
                                <div
                                  key={h}
                                  className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/90 font-medium"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                  <span className="truncate">{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>

                {/* Interactive Slide Selector Tabs Below Frame — Equal Width & Consistent Alignment */}
                <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {SHOWCASE_SLIDES.map((slide, i) => {
                    const isSelected = i === activeIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={`w-full text-left p-2.5 sm:p-3 rounded-2xl transition-all duration-300 relative flex flex-col justify-center min-h-[58px] sm:min-h-[62px] ${
                          isSelected
                            ? "bg-bg-light-green/90 border-2 border-brand-green shadow-xs"
                            : "bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/70 hover:border-gray-300 opacity-80 hover:opacity-100"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-wider ${
                              isSelected ? "text-brand-green" : "text-text-light"
                            }`}
                          >
                            0{i + 1}
                          </span>
                          <span
                            className={`text-[10px] ${
                              isSelected ? "text-brand-green/40" : "text-gray-300"
                            }`}
                          >
                            —
                          </span>
                        </div>
                        <span
                          className={`block text-xs sm:text-[13px] font-bold tracking-tight truncate ${
                            isSelected ? "text-brand-green" : "text-text-charcoal"
                          }`}
                        >
                          {slide.category}
                        </span>
                        {/* Active Indicator Underline */}
                        {isSelected && (
                          <motion.div
                            layoutId="activeHeroTab"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-green rounded-full"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sub-Showcase Compliance Note */}
              <p className="text-[10px] text-text-light text-center mt-2.5">
                *Indicative terms subject to partner bank/NBFC underwriting
                policies. Dixit Lending Solution is a dedicated loan assistance and financial guidance partner.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
