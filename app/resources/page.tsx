import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Knowledge Hub & Loan Guides | Dixit Lending Solution",
  description:
    "Empower your borrowing decisions with expert guides on Personal Loans, Home Loans, CIBIL credit score improvement, and interest rate comparison.",
};

const articles = [
  {
    slug: "how-personal-loan-works",
    category: "Personal Loans",
    title: "How Does a Personal Loan Work in India?",
    desc: "A complete guide to understanding unsecured credit, tenure selection, processing fees, and documentation protocols.",
    readTime: "5 min read",
    date: "Aug 2025",
    image: "/images/res-personal-loan.jpg",
  },
  {
    slug: "personal-loan-documents",
    category: "Documentation",
    title: "Comprehensive Document Checklist for Salaried Borrowers",
    desc: "Avoid rejection delays. Review exactly which salary slips, Form 16, and bank statements underwriters request.",
    readTime: "4 min read",
    date: "Aug 2025",
    image: "/images/res-home-loan.jpg",
  },
  {
    slug: "credit-score-loan",
    category: "Credit Score",
    title: "How Does Your CIBIL Score Impact Loan Approval and Rates?",
    desc: "Discover why a 750+ score unlocks preferential rates and how multiple simultaneous applications can hurt your score.",
    readTime: "6 min read",
    date: "Jul 2025",
    image: "/images/res-credit-score.jpg",
  },
  {
    slug: "personal-loan-vs-credit-card",
    category: "Financial Planning",
    title: "Personal Loan vs Credit Card: Which Financial Instrument Is Better?",
    desc: "Comparing revolving credit cards with fixed-tenure personal loans to identify the lowest-cost capital for your needs.",
    readTime: "5 min read",
    date: "Jul 2025",
    image: "/images/res-card-vs-loan.jpg",
  },
  {
    slug: "how-emi-calculated",
    category: "Financial Planning",
    title: "How Is Loan EMI Calculated? Understanding Reducing Balance Math",
    desc: "Understand the reducing balance methodology and why initial installments are heavily skewed toward interest payment.",
    readTime: "4 min read",
    date: "Jun 2025",
    image: "/images/res-emi-math.jpg",
  },
  {
    slug: "loan-balance-transfer",
    category: "Refinancing",
    title: "What Is a Loan Balance Transfer and When Does It Make Financial Sense?",
    desc: "Learn how to evaluate switching costs, foreclosure guidelines, and whether top-up facilities make financial sense.",
    readTime: "5 min read",
    date: "Jun 2025",
    image: "/images/res-balance-transfer.jpg",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-hero-gradient py-14 lg:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
              Financial Literacy &amp; Consumer Guides
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-4">
            Financial Knowledge, <span className="text-brand-green">Made Simple</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Practical insights written to clarify banking criteria, interest rate mechanics, and credit improvement strategies.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item) => (
              <article
                key={item.slug}
                className="bg-bg-warm rounded-4xl p-5 border border-gray-100 card-hover flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-48 w-full rounded-3xl overflow-hidden mb-5 border border-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 font-semibold text-xs text-brand-green bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-brand-green/20 shadow-sm">
                        <Tag size={11} /> {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-3 text-xs">
                    <span className="text-text-light flex items-center gap-1">
                      <Clock size={12} /> {item.readTime}
                    </span>
                    <span className="text-xs text-text-light">{item.date}</span>
                  </div>

                  <h2 className="font-heading font-bold text-lg sm:text-xl text-text-charcoal mb-3 group-hover:text-brand-green transition-colors">
                    <Link href={`/resources/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs text-text-muted font-medium">Dixit Research</span>
                  <Link
                    href={`/resources/${item.slug}`}
                    className="text-brand-green font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
