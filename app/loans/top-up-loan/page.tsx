import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PlusCircle, CheckCircle, Zap, Shield } from "lucide-react";
import Calculators from "@/components/home/Calculators";

export const metadata: Metadata = {
  title: "Top-Up Loan Solutions in Pune | Dixit Lending Solution",
  description:
    "Obtain quick top-up loans over existing home or mortgage loans in Pune. Enjoy lower interest rates and simple documentation assistance with Dixit Lending Solution.",
};

const topUpBenefits = [
  { icon: Zap, title: "Expedited Approvals", desc: "Since your core collateral & KYC is already verified by your existing lender, sanction is expedited." },
  { icon: PlusCircle, title: "More Favorable Rates", desc: "Top-up mortgage rates are substantially lower than conventional unsecured personal loans." },
  { icon: Shield, title: "No End-Use Restrictions", desc: "Deploy funds flexibly for home interiors, family weddings, international vacations, or business liquidity." },
  { icon: CheckCircle, title: "Unified Repayments", desc: "Streamline payments alongside existing home loan schedules or customize parallel tranches." },
];

export default function TopUpLoanPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-hero-gradient py-14 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                Additional Funds on Active Loans
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-6">
              Need Extra Capital? <span className="text-brand-green">Avail a Top-Up Loan</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              If you have an ongoing home loan with a solid track record of regular EMI payments, you may qualify for substantial additional funds at highly attractive mortgage-backed interest rates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-card"
              >
                Check Top-Up Options <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919096979328?text=Hello,%20I%20want%20to%20know%20about%20Top-Up%20Loans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-2xl font-semibold hover:bg-bg-light-green transition-all duration-200"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              Why Choose a Top-Up Loan?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Capitalize on the equity built in your mortgaged property for quick, low-interest funding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topUpBenefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 bg-bg-warm rounded-3xl border border-gray-100 card-hover flex flex-col">
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-4 text-brand-green">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-text-charcoal text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Calculators />
    </div>
  );
}
