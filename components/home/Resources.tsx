"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion, useInView } from "framer-motion";

const articles = [
  {
    category: "Loans",
    title: "How Does a Personal Loan Work?",
    desc: "A complete guide to understanding personal loans, eligibility, documentation and the application process.",
    readTime: "5 min read",
    href: "/resources/how-personal-loan-works",
    image: "/images/res-personal-loan.jpg",
  },
  {
    category: "Documentation",
    title: "What Documents Are Required for a Loan?",
    desc: "A comprehensive checklist of salary slips, Form 16, and KYC documents required by Indian lenders.",
    readTime: "4 min read",
    href: "/resources/personal-loan-documents",
    image: "/images/res-home-loan.jpg",
  },
  {
    category: "Credit Score",
    title: "How Does Credit Score Affect Applications?",
    desc: "Understanding the role of CIBIL score in the lending process and how to maintain a healthy credit profile.",
    readTime: "6 min read",
    href: "/resources/credit-score-loan",
    image: "/images/res-credit-score.jpg",
  },
  {
    category: "Personal Finance",
    title: "Personal Loan vs Credit Card: Which Is Better?",
    desc: "Comparing personal loans and credit cards — when to use which financial instrument for your needs.",
    readTime: "5 min read",
    href: "/resources/personal-loan-vs-credit-card",
    image: "/images/res-card-vs-loan.jpg",
  },
  {
    category: "Loans",
    title: "How Is EMI Calculated?",
    desc: "Understanding the reducing balance EMI formula and factors that influence your monthly repayment amount.",
    readTime: "4 min read",
    href: "/resources/how-emi-calculated",
    image: "/images/res-emi-math.jpg",
  },
  {
    category: "Refinancing",
    title: "What Is Loan Balance Transfer?",
    desc: "Learn when and how a loan balance transfer can help reduce your interest outflow and lower monthly EMIs.",
    readTime: "4 min read",
    href: "/resources/loan-balance-transfer",
    image: "/images/res-balance-transfer.jpg",
  },
];

const categoryColors: Record<string, string> = {
  Loans: "bg-emerald-700 text-white",
  Documentation: "bg-blue-700 text-white",
  "Credit Score": "bg-amber-600 text-white",
  "Personal Finance": "bg-violet-700 text-white",
  Refinancing: "bg-teal-700 text-white",
};

export default function Resources() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-3">
              <BookOpen size={13} className="text-brand-green" />
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                Knowledge Hub
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-charcoal tracking-tight">
              Financial Knowledge,{" "}
              <span className="text-brand-green">Made Simple</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-brand-green font-bold text-sm hover:underline group"
            >
              <span>View All 6 Guides</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 6 Guides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((article, i) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i + 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Link
                href={article.href}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover hover:border-brand-green/20 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          categoryColors[article.category] || "bg-brand-green text-white"
                        }`}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body text */}
                  <div className="p-6">
                    <p className="text-[11px] font-medium text-text-light mb-2">
                      {article.readTime}
                    </p>
                    <h3 className="font-heading font-bold text-text-charcoal text-base sm:text-lg group-hover:text-brand-green transition-colors leading-snug mb-2">
                      {article.title}
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-brand-green">
                  <span>Read Full Guide</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
