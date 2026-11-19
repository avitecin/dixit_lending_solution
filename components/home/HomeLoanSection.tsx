"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Building, ArrowRightLeft, PlusCircle, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import FloatingBackground from "@/components/ui/FloatingBackground";

export default function HomeLoanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-bg-warm relative overflow-hidden">
      {/* Floating Background Animation */}
      <FloatingBackground variant="home-loan" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Content (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-3">
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                Home Loan Solutions
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal mb-4 leading-tight tracking-tight">
              Your Dream Home Starts With <span className="text-brand-green">the Right Guidance</span>
            </h2>
            <div className="gold-divider mb-5" />
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
              Purchasing or constructing a home in Pune is a landmark milestone. Dixit Lending Solution guides you through banking criteria, property valuation protocols, and competitive repo-linked rates across leading lenders.
            </p>

            {/* 4 Interactive Category Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Home, label: "Home Purchase", desc: "Ready-to-move & under-construction flats.", href: "/loans/home-loan" },
                { icon: Building, label: "Home Construction", desc: "Build on your owned freehold plot.", href: "/loans/home-loan" },
                { icon: ArrowRightLeft, label: "Balance Transfer", desc: "Transfer active home loan for lower EMI.", href: "/loans/balance-transfer" },
                { icon: PlusCircle, label: "Top-Up Loan", desc: "Additional liquidity on active mortgage.", href: "/loans/top-up-loan" },
              ].map(({ icon: Icon, label, desc, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.2 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Link
                    href={href}
                    className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-card hover:border-brand-green/25 group block h-full transition-all"
                  >
                    <div className="w-10 h-10 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-brand-green group-hover:shadow-card transition-all duration-300">
                      <Icon size={19} className="text-brand-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-text-charcoal text-xs sm:text-sm mb-1 group-hover:text-brand-green transition-colors">
                      {label}
                    </h3>
                    <p className="text-text-muted text-[11px] leading-relaxed">{desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/loans/home-loan"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-brand-green-dark transition-colors group shadow-card hover:-translate-y-0.5"
            >
              Explore Home Loan Options
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Visual Image Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl shadow-brand-green/10 border border-gray-100 group">
              <Image
                src="/images/home-loan.jpg"
                alt="Happy Indian couple in their modern sunlit apartment celebrating home ownership"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/95 via-brand-green-dark/40 to-transparent" />

              {/* In-Card Floating Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-white/40 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      Interest Rate Benchmark
                    </span>
                    <span className="text-xs text-brand-green font-bold bg-bg-light-green px-2.5 py-0.5 rounded-full">
                      Repo-Linked Starting
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-3xl text-brand-green mb-0.5">
                    Starting from 8.40% p.a.*
                  </p>
                  <p className="text-[11px] text-text-muted">
                    *Rates subject to applicant credit rating &amp; participating lender benchmark policies
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-white">
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-3 border border-white/10 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-brand-green shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-xs text-brand-gold">Up to 30 Yrs</p>
                      <p className="text-[10px] text-white/75">Repayment Tenure</p>
                    </div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-3 border border-white/10 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-brand-gold shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-xs text-brand-gold">Up to 80-90%</p>
                      <p className="text-[10px] text-white/75">Property Value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
