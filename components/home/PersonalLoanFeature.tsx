"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, TrendingUp, Users, FileText, Laptop, HeadphonesIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import FloatingBackground from "@/components/ui/FloatingBackground";

const features = [
  { icon: Users, label: "Multiple lender options across banks & NBFCs" },
  { icon: FileText, label: "Simple digital documentation process" },
  { icon: HeadphonesIcon, label: "Dedicated advisory assistance in Pune" },
  { icon: Laptop, label: "Fast profile assessment & verification" },
  { icon: TrendingUp, label: "End-to-end guidance up to disbursal" },
];

export default function PersonalLoanFeature() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-bg-light-green relative overflow-hidden">
      {/* Floating Background Animation */}
      <FloatingBackground variant="personal-loan" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Visual Card with Real Image (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl shadow-brand-green/10 border border-gray-100 group">
              <Image
                src="/images/personal-loan-v2.jpg"
                alt="Indian salaried professional reviewing personal loan options on laptop"
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
                      Loan Amount Range
                    </span>
                    <span className="text-xs text-brand-green font-bold bg-bg-light-green px-2.5 py-0.5 rounded-full">
                      Salaried &amp; Self-Employed
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-3xl text-brand-green mb-0.5">
                    ₹50,000 – ₹40,00,000
                  </p>
                  <p className="text-[11px] text-text-muted">
                    *Sanction amount subject to lender&apos;s credit assessment &amp; income stability
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-white">
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-2 border border-white/10">
                    <p className="font-heading font-bold text-xs text-brand-gold">12–72 Mo</p>
                    <p className="text-[10px] text-white/75">Tenure</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-2 border border-white/10">
                    <p className="font-heading font-bold text-xs text-brand-gold">100+ Lenders</p>
                    <p className="text-[10px] text-white/75">Network</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl py-2.5 px-2 border border-white/10">
                    <p className="font-heading font-bold text-xs text-brand-gold">Paperless</p>
                    <p className="text-[10px] text-white/75">KYC Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-2xl shadow-card p-3.5 border border-gray-100 z-20">
              <p className="text-[11px] text-text-muted font-medium">Turnaround Time</p>
              <p className="font-heading font-bold text-brand-green text-sm">Swift Support</p>
            </div>
          </motion.div>

          {/* Right: Content (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                Primary Product Solution
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal mb-4 leading-tight tracking-tight">
              Personal Loans <span className="text-brand-green">Made Fast, Simple &amp; Transparent</span>
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
              Whether you&apos;re planning an important family purchase, managing a sudden medical emergency, or consolidating existing high-interest debts — we help you explore suitable personal loan options across premier banks and NBFCs in Pune.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-8">
              {features.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                  className="flex items-center gap-3.5 p-3.5 bg-white rounded-2xl border border-gray-100 shadow-xs hover:border-brand-green/25 transition-colors"
                >
                  <div className="w-9 h-9 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0 text-brand-green">
                    <Icon size={18} />
                  </div>
                  <span className="font-medium text-text-charcoal text-xs sm:text-sm">{label}</span>
                  <CheckCircle2 size={16} className="text-brand-green ml-auto shrink-0" />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/loans/personal-loan"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-brand-green-dark transition-all duration-200 shadow-card group hover:-translate-y-0.5"
              >
                Check Personal Loan Options
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/25 px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-bg-light-green transition-all duration-200"
              >
                Instant Eligibility Check
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
