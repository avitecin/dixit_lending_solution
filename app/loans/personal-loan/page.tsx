import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Clock, FileText, Percent, HelpCircle } from "lucide-react";
import Calculators from "@/components/home/Calculators";

export const metadata: Metadata = {
  title: "Personal Loan in Pune | Dixit Lending Solution",
  description:
    "Apply for a Personal Loan in Pune with Dixit Lending Solution. Compare multiple bank & NBFC options, paperless digital process, and end-to-end assistance from application to disbursal.",
};

const benefits = [
  { icon: Clock, title: "Quick Processing Support", desc: "Swift assistance and expedited documentation follow-up." },
  { icon: Percent, title: "Competitive Rates*", desc: "Explore attractive interest rates from multiple top lenders." },
  { icon: Shield, title: "No Collateral Required", desc: "Unsecured loan options based on your credit & income profile." },
  { icon: FileText, title: "Minimal Documentation", desc: "Simple digital KYC and paperless application support." },
];

const eligibilityCriteria = [
  { label: "Target Audience", value: "Salaried Professionals & Self-Employed" },
  { label: "Minimum Monthly Income", value: "₹25,000+ (Varies by lender)" },
  { label: "Age Bracket", value: "21 to 58 Years" },
  { label: "Minimum CIBIL Score", value: "650+ preferred for favorable terms" },
  { label: "Employment Stability", value: "Min. 6 months in current job / 2 years business" },
];

const requiredDocs = [
  "PAN Card & Aadhaar Card (Identity & Address Proof)",
  "Last 3 to 6 months bank statements (Salary account)",
  "Latest 3 months salary slips",
  "Form 16 / Recent Income Tax Returns (ITR)",
  "Current Address Proof (Utility bill, Rent agreement if rented)",
];

const personalLoanFaqs = [
  {
    q: "How much Personal Loan amount can I borrow?",
    a: "Loan amounts typically range from ₹50,00,00 up to ₹40,00,000 or more, depending strictly on your monthly net income, existing debt obligations, and lender policies.",
  },
  {
    q: "Does Dixit Lending Solution charge any upfront fees?",
    a: "No upfront service fees are charged by Dixit Lending Solution for standard loan guidance. Standard lender processing fees may apply upon loan sanction.",
  },
  {
    q: "How quickly can a Personal Loan be disbursed?",
    a: "Once all verified documents are submitted and the lender completes verification, disbursal usually occurs within 24 to 72 working hours.",
  },
];

export default function PersonalLoanPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-14 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                  Salaried &amp; Self-Employed Solutions
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-6">
                Personal Loans Made <span className="text-brand-green">Fast, Transparent &amp; Simple</span>
              </h1>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                Whether you are funding a medical emergency, wedding expenses, home renovation, or consolidating debts —
                Dixit Lending Solution helps you navigate 100+ bank and NBFC options in Pune with end-to-end guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-card"
                >
                  Apply for Personal Loan <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919096979328?text=Hello,%20I%20am%20interested%20in%20a%20Personal%20Loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-2xl font-semibold hover:bg-bg-light-green transition-all duration-200"
                >
                  Consult on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[360px] sm:h-[420px] rounded-4xl overflow-hidden shadow-card-hover border border-gray-100 group">
                <Image
                  src="/images/personal-loan.jpg"
                  alt="Indian salaried professional reviewing personal loan options on laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                      Borrowing Range
                    </span>
                    <span className="text-[10px] font-bold text-text-charcoal bg-bg-light-green px-2 py-0.5 rounded-full">
                      Pune &amp; PCMC
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-2xl text-brand-green">₹50,000 – ₹40,00,000</p>
                  <p className="text-[11px] text-text-muted mt-0.5">Flexible tenures from 12 to 72 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              Why Choose Us for Your Personal Loan?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              We eliminate the hassle of visiting multiple branch offices by offering a unified advisory and processing gateway.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-bg-warm rounded-3xl border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-4 text-brand-green">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-text-charcoal text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documentation */}
      <section className="py-16 bg-bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Eligibility */}
            <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-card">
              <h3 className="font-heading font-bold text-2xl text-text-charcoal mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-brand-gold"></span>
                Basic Eligibility Criteria
              </h3>
              <div className="space-y-4">
                {eligibilityCriteria.map((item) => (
                  <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-text-muted text-sm">{item.label}</span>
                    <span className="font-semibold text-text-charcoal text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-card">
              <h3 className="font-heading font-bold text-2xl text-text-charcoal mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-brand-green"></span>
                Documents Required
              </h3>
              <ul className="space-y-3">
                {requiredDocs.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-sm text-text-muted">
                    <CheckCircle2 size={18} className="text-brand-green shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-bg-light-green rounded-2xl border border-brand-green/20 text-xs text-text-muted">
                <strong>Note:</strong> Additional documents like company ID or business registration may be requested depending on lender specifications.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Calculator */}
      <Calculators />

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3 flex items-center justify-center gap-2">
              <HelpCircle className="text-brand-gold" /> Personal Loan FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {personalLoanFaqs.map((faq) => (
              <div key={faq.q} className="p-6 bg-bg-warm rounded-3xl border border-gray-100">
                <h4 className="font-heading font-bold text-text-charcoal text-base mb-2">{faq.q}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-green-dark transition-all duration-200"
            >
              Check Your Personal Loan Eligibility <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
