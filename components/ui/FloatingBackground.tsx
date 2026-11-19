import React from "react";

export type FloatingBackgroundVariant =
  | "hero"
  | "personal-loan"
  | "home-loan"
  | "business-loan"
  | "credit-card"
  | "credit-score"
  | "assessment"
  | "faq"
  | "journey"
  | "cta";

interface FloatingBackgroundProps {
  variant: FloatingBackgroundVariant;
  mouseOffset?: { x: number; y: number };
  isDesktop?: boolean;
  className?: string;
}

export default function FloatingBackground({
  variant,
  mouseOffset,
  isDesktop = false,
  className = "",
}: FloatingBackgroundProps) {
  const parallaxStyle =
    isDesktop && mouseOffset
      ? {
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0)`,
        }
      : undefined;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      {/* 1. HERO VARIANT */}
      {variant === "hero" && (
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={parallaxStyle}
        >
          {/* Very Large Soft Ambient Glow Orbs */}
          <div className="absolute -top-16 -right-24 sm:-top-20 sm:-right-28 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full bg-brand-green/8 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-16 -left-20 sm:-bottom-24 sm:-left-28 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-brand-gold/8 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "4s" }}
          />
          <div className="absolute top-1/3 right-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

          {/* Thin Abstract Concentric Orbit Rings */}
          <div className="hidden lg:block absolute top-1/2 right-[12%] -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-brand-green/8 border-dashed animate-rotate-orbit pointer-events-none" />
          <div
            className="hidden xl:block absolute top-1/2 right-[16%] -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-brand-gold/10 pointer-events-none"
            style={{ animation: "rotateOrbit 60s linear infinite reverse" }}
          />

          {/* Extremely Subtle Financial Lattice / Coordinate Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg className="w-full h-full" width="100%" height="100%">
              <defs>
                <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#006B4F" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="48" cy="0" r="1.5" fill="#006B4F" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>

          {/* Subtle Margin Floating Glass Facets (Placed in Open Margins, Strictly Away From Text) */}
          <div className="hidden 2xl:flex absolute top-24 right-12 w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-green/15 shadow-2xs animate-float-drift items-center justify-center opacity-70">
            <div className="w-6 h-6 rounded-xl border border-brand-green/20 flex items-center justify-center bg-white/40">
              <span className="w-2 h-2 rounded-full bg-brand-green/70" />
            </div>
          </div>

          <div
            className="hidden xl:flex absolute bottom-16 right-16 w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-gold/15 to-white/60 backdrop-blur-xs border border-brand-gold/25 shadow-2xs animate-float-reverse items-center justify-center opacity-65"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-4 h-4 rounded-full border border-brand-gold/40 border-dashed" />
          </div>

          {/* Ambient Micro Pulsing Nodes */}
          <div className="hidden sm:block absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-brand-gold/40 animate-pulse" />
          <div
            className="hidden sm:block absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-brand-green/30 animate-pulse"
            style={{ animationDelay: "2.5s" }}
          />
          <div
            className="hidden lg:block absolute top-2/3 left-10 w-2 h-2 rounded-full bg-brand-green/20 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />
        </div>
      )}

      {/* 2. PERSONAL LOAN VARIANT */}
      {variant === "personal-loan" && (
        <div className="absolute inset-0">
          {/* Ambient light blooms */}
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-brand-green/8 blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-0 -right-16 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "4s" }}
          />

          {/* Margin Floating Glass Accents */}
          <div className="hidden 2xl:flex absolute top-12 right-8 w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-green/12 shadow-2xs animate-float-gentle items-center justify-center opacity-70">
            <span className="text-[11px] font-bold text-brand-green/60">%</span>
          </div>

          <div
            className="hidden xl:flex absolute bottom-8 left-8 w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-gold/15 to-white/60 backdrop-blur-xs border border-brand-gold/20 shadow-2xs animate-float-reverse items-center justify-center opacity-65"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-4 h-4 rounded-full border border-brand-gold/40" />
          </div>

          <div className="hidden sm:block absolute top-1/2 left-6 w-2 h-2 rounded-full bg-brand-green/30 animate-pulse" />
        </div>
      )}

      {/* 3. HOME LOAN VARIANT */}
      {variant === "home-loan" && (
        <div className="absolute inset-0">
          {/* Ambient light blooms */}
          <div className="absolute -top-16 right-0 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-10 left-10 w-64 h-64 rounded-full bg-brand-green/6 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "3s" }}
          />

          {/* Margin Architectural Blueprint Facet */}
          <div className="hidden 2xl:flex absolute top-12 left-6 w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-green/15 shadow-2xs rotate-3 animate-float-drift items-center justify-center opacity-70">
            <div className="w-6 h-6 rounded-md border border-brand-green/20 grid grid-cols-2 gap-0.5 p-0.5 bg-white/40">
              <div className="bg-brand-green/20 rounded-2xs" />
              <div className="bg-brand-gold/20 rounded-2xs" />
              <div className="bg-brand-gold/20 rounded-2xs" />
              <div className="bg-brand-green/20 rounded-2xs" />
            </div>
          </div>

          <div
            className="hidden xl:flex absolute bottom-8 right-8 w-24 h-7 rounded-full bg-white/70 backdrop-blur-sm border border-brand-gold/20 shadow-2xs animate-float-reverse items-center px-2.5 gap-1.5 opacity-65"
            style={{ animationDelay: "1.8s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            <span className="text-[9px] font-semibold text-text-charcoal/70 uppercase tracking-wider">
              Prime
            </span>
          </div>

          <div className="hidden sm:block absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-brand-gold/35 animate-pulse" />
        </div>
      )}

      {/* 4. BUSINESS LOAN VARIANT */}
      {variant === "business-loan" && (
        <div className="absolute inset-0">
          {/* Ambient light blooms */}
          <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-brand-green/8 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-16 left-0 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "3.5s" }}
          />

          {/* Growth Tile */}
          <div className="hidden 2xl:flex absolute top-12 right-8 w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-green/15 shadow-2xs animate-float-gentle items-center justify-center opacity-70">
            <div className="flex items-end gap-1 h-4">
              <div className="w-1 h-1.5 bg-brand-green/40 rounded-2xs" />
              <div className="w-1 h-2.5 bg-brand-green/60 rounded-2xs" />
              <div className="w-1 h-4 bg-brand-gold rounded-2xs" />
            </div>
          </div>

          <div
            className="hidden xl:flex absolute bottom-8 left-6 w-12 h-12 rounded-xl bg-white/65 backdrop-blur-sm border border-brand-green/15 shadow-2xs animate-float-reverse items-center justify-center opacity-65"
            style={{ animationDelay: "2.2s" }}
          >
            <div className="w-4 h-4 rounded-full border border-brand-green/30 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-brand-gold" />
            </div>
          </div>

          <div className="hidden sm:block absolute top-1/3 left-12 w-2 h-2 rounded-full bg-brand-gold/30 animate-pulse" />
        </div>
      )}

      {/* 5. CREDIT CARD VARIANT (Dark Theme) */}
      {variant === "credit-card" && (
        <div className="absolute inset-0">
          {/* Luxury ambient lighting */}
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-brand-gold/15 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-brand-green-mid/40 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "4s" }}
          />

          {/* Orbiting thin ring */}
          <div className="hidden lg:block absolute -top-12 -right-12 w-56 h-56 rounded-full border border-brand-gold/15 animate-rotate-orbit" />

          {/* Floating Dark Glass Card */}
          <div className="hidden md:flex absolute top-12 left-8 xl:left-14 w-22 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-brand-gold/20 shadow-lg -rotate-6 animate-float-drift p-2 flex-col justify-between opacity-80">
            <div className="w-3.5 h-2.5 rounded-xs bg-brand-gold/40" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>

          {/* Floating Shimmer Pill */}
          <div
            className="hidden sm:flex absolute bottom-10 right-10 xl:right-16 w-18 h-9 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rotate-3 animate-float-reverse items-center justify-center opacity-80"
            style={{ animationDelay: "2.5s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          </div>

          {/* Gold Sparkle Node */}
          <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
        </div>
      )}

      {/* 6. CREDIT SCORE / FINANCIAL HEALTH VARIANT */}
      {variant === "credit-score" && (
        <div className="absolute inset-0">
          {/* Ambient Lighting Blooms */}
          <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-brand-green/8 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "3.5s" }}
          />
          <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-brand-green/4 blur-2xl pointer-events-none" />

          {/* Thin Orbit Ring in Background */}
          <div className="hidden lg:block absolute -top-8 -right-8 w-64 h-64 rounded-full border border-brand-green/10 border-dashed animate-rotate-orbit" />

          {/* Floating Glassmorphic Tokens in Margins */}
          <div className="hidden xl:flex absolute top-16 right-10 w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-green/15 shadow-2xs animate-float-gentle items-center justify-center opacity-75">
            <span className="text-xs font-bold text-brand-green/70">750+</span>
          </div>

          <div
            className="hidden xl:flex absolute bottom-12 left-10 w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-gold/15 to-white/65 backdrop-blur-xs border border-brand-gold/25 shadow-2xs animate-float-reverse items-center justify-center opacity-70"
            style={{ animationDelay: "2.2s" }}
          >
            <span className="text-[10px] font-bold text-brand-gold/80">₹</span>
          </div>

          {/* Micro Pulsing Nodes */}
          <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-brand-green/30 animate-pulse" />
          <div
            className="hidden sm:block absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-brand-gold/35 animate-pulse"
            style={{ animationDelay: "1.8s" }}
          />
        </div>
      )}

      {/* 7. QUICK ASSESSMENT VARIANT */}
      {variant === "assessment" && (
        <div className="absolute inset-0">
          {/* Ambient Lighting Blooms */}
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-brand-green/8 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "3s" }}
          />
          <div className="absolute top-1/2 right-1/4 w-52 h-52 rounded-full bg-brand-green/4 blur-2xl pointer-events-none" />

          {/* Thin Orbit Ring in Background */}
          <div className="hidden lg:block absolute -top-10 -right-10 w-72 h-72 rounded-full border border-brand-green/10 border-dashed animate-rotate-orbit" />

          {/* Floating Glassmorphic Micro-Tokens in Margins */}
          <div className="hidden xl:flex absolute top-14 left-10 w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-green/15 shadow-2xs animate-float-gentle items-center justify-center opacity-75">
            <span className="text-xs font-bold text-brand-green/70">60s</span>
          </div>

          <div
            className="hidden xl:flex absolute bottom-12 right-12 w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-gold/15 to-white/65 backdrop-blur-xs border border-brand-gold/25 shadow-2xs animate-float-reverse items-center justify-center opacity-70"
            style={{ animationDelay: "2s" }}
          >
            <span className="text-[11px] font-bold text-brand-gold/80">₹</span>
          </div>

          {/* Micro Pulsing Nodes */}
          <div className="hidden sm:block absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-brand-green/30 animate-pulse" />
          <div
            className="hidden sm:block absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-brand-gold/35 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      )}

      {/* 8. FAQ KNOWLEDGE CENTER VARIANT */}
      {variant === "faq" && (
        <div className="absolute inset-0">
          {/* Ambient Lighting Blooms */}
          <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-brand-green/7 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-brand-gold/8 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2.5s" }}
          />
          <div className="absolute top-1/3 -left-12 w-60 h-60 rounded-full border border-brand-green/10 border-dashed animate-rotate-orbit hidden lg:block" />

          {/* Floating Subtle Token in Margins */}
          <div className="hidden xl:flex absolute top-20 right-14 w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-green/15 shadow-2xs animate-float-gentle items-center justify-center opacity-70">
            <span className="text-xs font-bold text-brand-green/70">?</span>
          </div>

          {/* Micro Pulsing Nodes */}
          <div className="hidden sm:block absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-brand-green/25 animate-pulse" />
          <div
            className="hidden sm:block absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-brand-gold/30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      )}

      {/* 9. HOW IT WORKS / JOURNEY VARIANT */}
      {variant === "journey" && (
        <div className="absolute inset-0">
          {/* Ambient soft gradients */}
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-brand-green/5 blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-brand-gold/8 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "3s" }}
          />

          {/* Floating Milestone Glass Badge in margin */}
          <div className="hidden 2xl:flex absolute top-10 right-10 w-14 h-14 rounded-2xl bg-bg-light-green/80 backdrop-blur-sm border border-brand-green/15 shadow-2xs animate-float-gentle items-center justify-center opacity-70">
            <div className="w-5 h-5 rounded-md border border-brand-green/25 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            </div>
          </div>

          {/* Floating Node in margin */}
          <div
            className="hidden xl:flex absolute bottom-8 left-8 w-12 h-12 rounded-full bg-brand-gold/10 backdrop-blur-xs border border-brand-gold/20 animate-float-reverse items-center justify-center opacity-65"
            style={{ animationDelay: "2s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          </div>

          {/* Micro pulse node */}
          <div className="hidden sm:block absolute top-14 left-1/4 w-2 h-2 rounded-full bg-brand-green/25 animate-pulse" />
        </div>
      )}

      {/* 8. FINAL CTA VARIANT */}
      {variant === "cta" && (
        <div className="absolute inset-0">
          {/* Ambient Gold Nebula */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-gold/20 blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 blur-2xl animate-pulse-glow"
            style={{ animationDelay: "3s" }}
          />

          {/* Rotating Glass Orbit Ring */}
          <div className="hidden sm:block absolute -bottom-12 -left-12 w-64 h-64 rounded-full border border-white/10 animate-rotate-orbit" />

          {/* Floating Facet in banner corner */}
          <div className="hidden md:flex absolute top-8 left-10 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/15 rotate-12 animate-float-gentle items-center justify-center opacity-70">
            <div className="w-5 h-5 rounded-full border border-brand-gold/30" />
          </div>

          {/* Subtle gold star node */}
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
        </div>
      )}
    </div>
  );
}
