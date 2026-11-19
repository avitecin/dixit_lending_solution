"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, DollarSign, TrendingUp, Settings, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import FloatingBackground from "@/components/ui/FloatingBackground";

const cards = [
  {
    icon: DollarSign,
    label: "Working Capital",
    desc: "Manage day-to-day operational cash flow, payroll, and supplier payments smoothly.",
  },
  {
    icon: TrendingUp,
    label: "Business Expansion",
    desc: "Finance new branch locations, retail outlets, marketing blitzes, or team expansion.",
  },
  {
    icon: Settings,
    label: "Machinery & Equipment",
    desc: "Acquire specialized industrial tools, tech infrastructure, or commercial fleets.",
  },
];

export default function BusinessLoanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-bg-light-green relative overflow-hidden">
      {/* Floating Background Animation */}
      <FloatingBackground variant="business-loan" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Visual Card with Real Image (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl shadow-brand-green/10 border border-gray-100 group">
              <Image
                src="/images/business-loan.jpg"
                alt="Confident Indian business entrepreneur reviewing enterprise growth metrics on tablet in modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/95 via-brand-green-dark/35 to-transparent" />

              {/* In-Card Floating Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-white/40 shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      Business Financing
                    </span>
                    <span className="text-xs text-brand-green font-bold bg-bg-light-green px-2.5 py-0.5 rounded-full">
                      Collateral-Free &amp; Secured
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-green mb-0.5">
                    Up to ₹75 Lakhs*
                  </p>
                  <p className="text-[11px] text-text-muted">
                    *Unsecured limits based on audited turnover, GST returns &amp; vintage
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-white text-xs">
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-2 border border-white/10">
                    <p className="font-heading font-bold text-brand-gold">GST / ITR</p>
                    <p className="text-[10px] text-white/70">Based Eligibility</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-2 border border-white/10">
                    <p className="font-heading font-bold text-brand-gold">12–60 Mo</p>
                    <p className="text-[10px] text-white/70">Flexible Tenures</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-2 border border-white/10">
                    <p className="font-heading font-bold text-brand-gold">No Collateral</p>
                    <p className="text-[10px] text-white/70">Options Available</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-3">
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                Commercial Lending
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal mb-4 leading-tight tracking-tight">
              Fuel Your Business Ambition With <span className="text-brand-green">the Right Capital</span>
            </h2>
            <div className="gold-divider mb-5" />
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
              Growing an enterprise demands agile financial liquidity. Whether you need unsecured working capital for peak season inventory or project machinery financing, Dixit Lending Solution bridges MSMEs in Pune with suitable institutional lenders.
            </p>

            {/* 3 Value Cards */}
            <div className="space-y-3.5 mb-8">
              {cards.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                  className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-start gap-4 hover:border-brand-green/25 transition-colors"
                >
                  <div className="w-11 h-11 bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 text-brand-green">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-charcoal text-sm sm:text-base mb-1">
                      {label}
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/loans/business-loan"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-brand-green-dark transition-colors group shadow-card hover:-translate-y-0.5"
              >
                <span>Explore Business Loans</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/25 px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-bg-light-green transition-colors"
              >
                <Briefcase size={16} />
                <span>Commercial Enquiry</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
