"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Headphones,
  ArrowRight,
  Phone,
  Plus,
  Minus,
  Info,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import FloatingBackground from "@/components/ui/FloatingBackground";

type FAQCategory = "All" | "General" | "Loan Process" | "Documentation & Credit" | "Fees & Approval";

interface FAQItem {
  q: string;
  a: string;
  category: "General" | "Loan Process" | "Documentation & Credit" | "Fees & Approval";
}
const faqs: FAQItem[] = [
  {
    category: "General",
    q: "What is Dixit Lending Solution?",
    a: "Dixit Lending Solution is a professional financial services and loan assistance company based in Pune, Maharashtra. We help customers explore suitable loan and credit card options from multiple banks and NBFCs, and provide personalized guidance throughout the application process.",
  },
  {
    category: "General",
    q: "What role does Dixit Lending Solution play in my loan application?",
    a: "As an authorized loan assistance partner, we work closely with leading banks and financial institutions to help customers apply for loans and financial products. We assist with profile evaluation, documentation, application submission, and institutional follow-up up to final disbursal. The actual credit underwriting and lending decision is made by the respective bank or NBFC.",
  },
  {
    category: "Loan Process",
    q: "How does the loan application process work?",
    a: "Our process involves four key steps: (1) You share your requirement with us, (2) We understand your financial profile, (3) We help you identify suitable lending options, and (4) We assist with documentation, application and follow-up until disbursal.",
  },
  {
    category: "Loan Process",
    q: "Which loan products do you assist with?",
    a: "We currently assist with Personal Loans, Home Loans, Business Loans, Loans Against Property, Loan Balance Transfers, Top-Up Loans, and Credit Cards.",
  },
  {
    category: "Loan Process",
    q: "Do you work with banks and NBFCs?",
    a: "Yes. As an authorized loan assistance partner, we work with select banks and NBFCs and help customers explore lending options from across our financial network.",
  },
  {
    category: "Documentation & Credit",
    q: "What documents are generally required?",
    a: "Documentation requirements vary by lender and loan product. Generally, you will need identity proof, address proof, income documents (salary slips, bank statements, ITR for self-employed), and employment proof. Our team will guide you on the specific documentation required for your application.",
  },
  {
    category: "Documentation & Credit",
    q: "Does applying for a loan affect my credit score?",
    a: "Every time a lender makes a formal credit inquiry (hard inquiry) on your profile, it may have a small, temporary impact on your credit score. Multiple simultaneous applications can cumulatively impact your score. We help you apply selectively to suitable lenders to minimise this.",
  },
  {
    category: "Fees & Approval",
    q: "How long does loan processing take?",
    a: "Processing time varies based on the lender, loan type, documentation completeness, and individual profile assessment. While some lenders offer quick approvals, actual timelines depend on the lender's internal process. We help you follow up effectively.",
  },
  {
    category: "Fees & Approval",
    q: "Are there any charges for your services?",
    a: "Our service model is based on commissions received from lenders upon successful loan disbursal. There are no upfront service charges for customers for standard assistance. However, lenders may charge processing fees, stamp duty, or other applicable charges as per their product terms. These will be clearly communicated to you.",
  },
  {
    category: "Fees & Approval",
    q: "Is loan approval guaranteed?",
    a: "No. Loan approval is subject to the respective lender's eligibility criteria, credit assessment, documentation review and internal policies. Dixit Lending Solution does not guarantee loan approval. We help you understand your options and apply to suitable lenders, but the final decision rests with the lender.",
  },
];

const CATEGORIES: FAQCategory[] = [
  "All",
  "General",
  "Loan Process",
  "Documentation & Credit",
  "Fees & Approval",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="section-pad bg-bg-light-green relative overflow-hidden">
      {/* Background Atmosphere */}
      <FloatingBackground variant="faq" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
          {/* LEFT COLUMN: Guidance Panel (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:sticky lg:top-28">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-4 shadow-2xs">
                <HelpCircle size={13} className="text-brand-gold" />
                <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                  FAQ &amp; Knowledge Center
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl xl:text-5xl text-text-charcoal mb-3 leading-tight">
                Frequently Asked{" "}
                <span className="text-brand-green">Questions</span>
              </h2>
              <p className="font-heading font-bold text-base sm:text-lg text-brand-green mb-3">
                Clear answers before you make a financial decision.
              </p>
              <div className="gold-divider mb-5" />
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
                Have questions about our loan assistance process, lender turnaround, or documentation policies? We believe in complete transparency so you can borrow with total confidence.
              </p>

              {/* Decorative Financial Guidance Emblem with Floating Tokens */}
              <div className="relative w-full max-w-[320px] mx-auto my-6 py-8 flex items-center justify-center select-none" aria-hidden="true">
                {/* Concentric dashed decorative orbit ring */}
                <div className="absolute w-56 h-56 rounded-full border border-brand-green/15 border-dashed animate-rotate-orbit pointer-events-none" />
                <div className="absolute w-40 h-40 rounded-full bg-brand-green/5 blur-xl animate-pulse-glow pointer-events-none" />

                {/* Center Question Emblem */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-green via-brand-green to-brand-green-dark text-white flex flex-col items-center justify-center shadow-3d-elevated border border-white/30 z-10 text-center p-2">
                  <span className="text-3xl font-extrabold font-heading text-brand-gold leading-none">?</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 mt-1">Financial</span>
                  <span className="text-[9px] text-white/70">Guidance</span>
                </div>

                {/* Floating Badge 1: Top-Right "Loan Guidance" */}
                <div className="absolute -top-1 right-2 sm:right-6 bg-white/95 backdrop-blur-sm border border-brand-green/20 rounded-2xl px-3 py-1.5 shadow-2xs text-[11px] font-semibold text-text-charcoal flex items-center gap-1.5 animate-float-gentle z-20">
                  <span className="w-2 h-2 rounded-full bg-brand-green" />
                  <span>Loan Guidance</span>
                </div>

                {/* Floating Badge 2: Mid-Left "Application Support" */}
                <div className="absolute bottom-6 left-0 sm:left-2 bg-white/95 backdrop-blur-sm border border-brand-gold/30 rounded-2xl px-3 py-1.5 shadow-2xs text-[11px] font-semibold text-text-charcoal flex items-center gap-1.5 animate-float-reverse z-20">
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span>Application Support</span>
                </div>

                {/* Floating Badge 3: Bottom-Right "Document Assistance" */}
                <div className="absolute -bottom-2 right-4 sm:right-10 bg-white/95 backdrop-blur-sm border border-brand-green/20 rounded-2xl px-3 py-1.5 shadow-2xs text-[11px] font-semibold text-text-charcoal flex items-center gap-1.5 animate-float-delayed z-20">
                  <span className="w-2 h-2 rounded-full bg-brand-green" />
                  <span>Document Assistance</span>
                </div>
              </div>
            </div>

            {/* Sidebar Support Box */}
            <div className="mt-6 bg-white rounded-3xl p-5 sm:p-6 border border-brand-green/15 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-gold/15 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <Headphones size={20} className="stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-text-charcoal mb-1">
                    Still have questions?
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    Speak directly with our Pune lending advisors for transparent advice.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/#enquiry"
                      className="inline-flex items-center gap-1.5 bg-brand-green text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-brand-green-dark transition-colors shadow-xs"
                    >
                      Talk to our team <ArrowRight size={14} />
                    </Link>
                    <a
                      href="tel:+919096979328"
                      className="text-xs font-semibold text-brand-green hover:underline flex items-center gap-1"
                    >
                      <Phone size={13} /> +91 90969 79328
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Accordion Panel (7 cols on lg) */}
          <div className="lg:col-span-7">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6" role="tablist">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count = cat === "All" ? faqs.length : faqs.filter((f) => f.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(null);
                    }}
                    className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-brand-green text-white shadow-xs"
                        : "bg-white text-text-muted hover:text-brand-green hover:bg-white/90 border border-gray-200/80"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Accordion Questions List */}
            <div className="space-y-3.5">
              {filteredFaqs.map(({ q, a, category }, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={q}
                    className={`group bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-brand-green/40 shadow-card bg-gradient-to-b from-white to-bg-light-green/20"
                        : "border-gray-200/70 hover:border-brand-green/30 hover:shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-3xl"
                    >
                      <div className="pr-2">
                        <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider block mb-1">
                          {category}
                        </span>
                        <span className="font-heading font-bold text-text-charcoal text-sm sm:text-base leading-snug group-hover:text-brand-green transition-colors">
                          {q}
                        </span>
                      </div>

                      {/* Rotating Plus / Minus Icon Container */}
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs ${
                          isOpen
                            ? "bg-brand-green text-white rotate-180"
                            : "bg-bg-light-green text-brand-green group-hover:bg-brand-green group-hover:text-white"
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {/* Collapsible Answer */}
                    {isOpen && (
                      <div
                        id={`faq-answer-${i}`}
                        role="region"
                        className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-text-muted leading-relaxed"
                      >
                        <div className="w-full h-px bg-brand-green/10 mb-4" />
                        <p>{a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* COMPLIANCE INFORMATION CARD */}
            <div className="mt-8 flex items-start gap-3.5 p-5 bg-white/90 backdrop-blur-sm border border-brand-green/15 rounded-3xl shadow-2xs text-xs text-text-muted">
              <div className="w-7 h-7 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                <Info size={16} />
              </div>
              <div className="leading-relaxed">
                <p className="font-semibold text-text-charcoal text-xs uppercase tracking-wider mb-1">
                  Important Regulatory Information
                </p>
                <p>
                  Loan approval, interest rates, processing fees, tenure, and other terms are subject to the respective lender&apos;s eligibility criteria, assessment and policies. Dixit Lending Solution is a dedicated loan assistance partner (DSA) and not a direct lender. We do not guarantee loan approval or any specific loan terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CONVERSION CTA BANNER */}
        <div className="mt-14 bg-gradient-to-r from-brand-green via-brand-green to-brand-green-dark rounded-3xl sm:rounded-4xl p-6 sm:p-10 text-white shadow-3d-elevated flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">
              <Sparkles size={12} className="text-brand-gold" />
              <span>Personalized Advisory</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl">
              Still Have a Question?
            </h3>
            <p className="text-white/80 text-sm mt-1 max-w-xl">
              Our team of loan specialists in Pune can help you understand the next step and match you with suitable bank options.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-bold text-sm px-6 py-3.5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-card hover:-translate-y-0.5"
            >
              Talk to an Expert <ArrowRight size={16} />
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl border border-white/20 transition-all duration-200"
            >
              Explore Loan Options <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
