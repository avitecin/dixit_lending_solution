"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-bg-light-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual Card with Real Advisory Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-[370px] sm:h-[400px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl shadow-brand-green/10 border border-gray-100 group">
              <Image
                src="/images/about-consultation.jpg"
                alt="Dixit Lending Solution financial advisor in personalized consultation with client in Pune"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/95 via-brand-green-dark/35 to-transparent" />

              {/* In-Card Floating Stats Overlay */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 z-10 space-y-2.5">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-white/40 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-brand-gold/15 rounded-2xl flex items-center justify-center shrink-0 border border-brand-gold/30">
                      <Image
                        src="/logo.png"
                        alt="Dixit Lending Solution"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-extrabold text-brand-green text-sm sm:text-base leading-tight">
                        Dixit Lending Solution
                      </h3>
                      <p className="text-text-muted text-[11px] leading-tight mt-0.5">
                        Trusted Loan Assistance Partner
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-text-charcoal font-medium leading-snug">
                    Personalized Loan &amp; Card Advisory across Pune &amp; Maharashtra
                  </p>
                </div>

                {/* 100+ Lenders Trust Banner */}
                <div className="bg-black/40 backdrop-blur-md rounded-2xl py-2.5 px-4 border border-white/10 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
                    <span className="font-heading font-bold text-brand-gold text-sm sm:text-base">100+ Lenders</span>
                  </div>
                  <span className="text-[11px] text-white/80 font-medium">Partner Banks &amp; NBFCs</span>
                </div>
              </div>
            </div>

            {/* BLOCK 1 & BLOCK 2: Dedicated Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3.5 w-full">
              {/* BLOCK 1: Advisory Desk */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-gray-100 shadow-sm flex items-center gap-3 transition-all hover:shadow-card hover:border-brand-green/20">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0 text-brand-gold">
                  <Building2 size={18} className="shrink-0" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-bold text-text-charcoal text-xs sm:text-sm leading-tight">
                    Kharadi, Pune
                  </p>
                  <p className="text-text-muted text-[11px] leading-tight mt-1">
                    Dedicated Advisory Desk
                  </p>
                </div>
              </div>

              {/* BLOCK 2: Office Location Address */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-gray-100 shadow-sm flex items-center gap-3 transition-all hover:shadow-card hover:border-brand-green/20">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0 text-brand-green">
                  <MapPin size={18} className="shrink-0" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-bold text-text-charcoal text-xs sm:text-sm leading-tight">
                    City Vista, Kharadi
                  </p>
                  <p className="text-text-muted text-[11px] leading-tight mt-1">
                    Pune, Maharashtra 411014
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-charcoal mb-4 leading-tight tracking-tight">
              Making Borrowing{" "}
              <span className="text-brand-green">Simple, Fast &amp; Transparent</span>
            </h2>
            <div className="gold-divider mb-6" />
            <div className="space-y-4 text-text-muted leading-relaxed mb-8">
              <p>
                At Dixit Lending Solution, we make borrowing simple, fast, and transparent. As your
                trusted Loan Assistance &amp; Financial Guidance Partner based in Pune, we help customers explore
                suitable loan and credit card options from multiple banks and NBFCs.
              </p>
              <p>
                We believe every customer deserves clear guidance, honest communication, and support
                throughout their lending journey — from the first enquiry to final disbursal. Our
                team works to match your requirements with the right lending options without
                unnecessary complexity.
              </p>
              <p>
                Based in Kharadi, Pune, we primarily serve salaried professionals and self-employed
                individuals across Maharashtra.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Pune Based", "Salaried & Self-employed", "Multiple Products", "Transparent Guidance"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-brand-green/20 text-brand-green text-xs font-semibold px-4 py-2 rounded-full shadow-2xs"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-brand-green-dark transition-all duration-200 shadow-card group hover:-translate-y-0.5"
            >
              Know More About Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
