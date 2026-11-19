import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowRightLeft, TrendingDown, Percent, CheckCircle } from "lucide-react";
import Calculators from "@/components/home/Calculators";

export const metadata: Metadata = {
  title: "Loan Balance Transfer in Pune | Dixit Lending Solution",
  description:
    "Refinance high-cost active loans to leading banks and NBFCs with lower interest rates, reduced EMIs, and lucrative top-up facilities in Pune.",
};

const btBenefits = [
  { icon: Percent, title: "Reduced Interest Outgo", desc: "Shifting to lower rate benchmarks saves lakhs in cumulative interest payments over remaining tenures." },
  { icon: TrendingDown, title: "Lighter Monthly EMIs", desc: "Restructure remaining repayment schedules to lower monthly debt commitments and improve monthly cash savings." },
  { icon: ArrowRightLeft, title: "Added Top-Up Facility", desc: "Avail supplementary cash loan buffers during balance transfer without needing a separate fresh application." },
  { icon: CheckCircle, title: "Hassle-Free Processing", desc: "Our team handles foreclosure coordination, list of document handovers, and title transference." },
];

export default function BalanceTransferPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-hero-gradient py-14 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                  Debt Refinancing &amp; Optimization
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-6">
                Transfer High-Interest Loans &amp; <span className="text-brand-green">Cut Down Your EMI</span>
              </h1>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                Are you servicing a home or personal loan at an outdated high interest rate? Balance Transfer allows you to switch your outstanding principal to a lender offering more favorable rates and terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-card"
                >
                  Evaluate Balance Transfer <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919096979328?text=Hello,%20I%20want%20to%20calculate%20my%20Loan%20Balance%20Transfer%20savings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-2xl font-semibold hover:bg-bg-light-green transition-all duration-200"
                >
                  Discuss Savings on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[360px] sm:h-[420px] rounded-4xl overflow-hidden shadow-card-hover border border-gray-100 group">
                <Image
                  src="/images/res-balance-transfer.jpg"
                  alt="Smiling borrower reviewing lowered monthly loan repayments and refinanced savings"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                      Interest Optimization
                    </span>
                    <span className="text-[10px] font-bold text-text-charcoal bg-bg-light-green px-2 py-0.5 rounded-full">
                      Reduce Rate by 0.5%–1.5%
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-2xl text-brand-green">Save Lakhs in Interest</p>
                  <p className="text-[11px] text-text-muted mt-0.5">Includes additional top-up funding options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              Key Advantages of Loan Balance Transfer
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Smart borrowers review their credit facilities regularly to ensure they aren&apos;t overpaying.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {btBenefits.map(({ icon: Icon, title, desc }) => (
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
