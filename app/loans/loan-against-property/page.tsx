import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, DollarSign } from "lucide-react";
import Calculators from "@/components/home/Calculators";

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) in Pune | Dixit Lending Solution",
  description:
    "Unlock high-value liquidity by leveraging your residential or commercial real estate asset in Pune with Loan Against Property assistance from Dixit Lending Solution.",
};

const lapBenefits = [
  { icon: DollarSign, title: "Substantial Loan Quantums", desc: "Borrow up to 60-70% of your freehold real estate market value." },
  { icon: Building2, title: "Lower Interest Costs", desc: "Secured borrowing typically enjoys substantially lower APRs compared to unsecured credit." },
  { icon: ShieldCheck, title: "Long Repayment Horizons", desc: "Comfortable tenure allocations extending up to 15-20 years." },
  { icon: CheckCircle2, title: "Diverse Property Accepted", desc: "Residential units, commercial offices, industrial sheds, and sanctioned plots." },
];

export default function LoanAgainstPropertyPage() {
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
                  Secured Property Credit
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-6">
                Unlock the True Capital Value of <span className="text-brand-green">Your Real Estate</span>
              </h1>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                A Loan Against Property (LAP) provides substantial liquidity at attractive rates for business expansion, child education, debt consolidation, or unexpected capital demands without selling your asset.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-card"
                >
                  Apply for LAP <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919096979328?text=Hello,%20I%20am%20interested%20in%20Loan%20Against%20Property"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-2xl font-semibold hover:bg-bg-light-green transition-all duration-200"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[360px] sm:h-[420px] rounded-4xl overflow-hidden shadow-card-hover border border-gray-100 group">
                <Image
                  src="/images/res-home-loan.jpg"
                  alt="Modern premium freehold residential property in Pune"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                      High Quantum
                    </span>
                    <span className="text-[10px] font-bold text-text-charcoal bg-bg-light-green px-2 py-0.5 rounded-full">
                      Up to 70% LTV
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-2xl text-brand-green">High Liquidity LAP</p>
                  <p className="text-[11px] text-text-muted mt-0.5">Residential, commercial &amp; industrial properties accepted</p>
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
              Why Opt for Loan Against Property?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Retain complete asset possession while utilizing collateral equity for strategic funding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lapBenefits.map(({ icon: Icon, title, desc }) => (
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
