import type { Metadata } from "next";
import Calculators from "@/components/home/Calculators";

export const metadata: Metadata = {
  title: "Financial & Loan Calculators | Dixit Lending Solution",
  description:
    "Calculate your monthly EMI, estimate potential loan eligibility, and plan your repayments accurately with Dixit Lending Solution's suite of financial tools.",
};

export default function CalculatorsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-hero-gradient py-12 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
              Financial Planning Tools
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-4">
            Smart Financial <span className="text-brand-green">Calculators</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Simulate your monthly installment obligations, compare tenure options, and understand borrowing power before initiating lender applications.
          </p>
        </div>
      </section>

      <div className="mt-8">
        <Calculators />
      </div>
    </div>
  );
}
