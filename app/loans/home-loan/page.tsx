import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building, ShieldCheck, Calculator, Landmark } from "lucide-react";
import Calculators from "@/components/home/Calculators";

export const metadata: Metadata = {
  title: "Home Loan in Pune & Kharadi | Dixit Lending Solution",
  description:
    "Explore customized Home Loan options in Pune with Dixit Lending Solution. From purchase to construction, balance transfer and top-up with transparent loan assistance.",
};

const homeLoanTypes = [
  {
    title: "Home Purchase Loan",
    desc: "Financing for ready-to-move-in flats, resale apartments, and under-construction developer projects.",
  },
  {
    title: "Home Construction Loan",
    desc: "Funds disbursed in tranches to build a residential house on owned freehold or sanctioned plots.",
  },
  {
    title: "Plot + Construction Loan",
    desc: "Composite credit facilities enabling simultaneous plot purchase and residential structure construction.",
  },
  {
    title: "Home Loan Balance Transfer",
    desc: "Transfer high-interest active home loans from existing lenders to gain lower interest rates and top-up funds.",
  },
];

const homeLoanFeatures = [
  { icon: Landmark, title: "100+ Lending Networks", desc: "Access leading public sector, private banks and housing finance corporations." },
  { icon: ShieldCheck, title: "Property Legal Advisory", desc: "Guidance on builder NOCs, title search reports, and stamp registration protocols." },
  { icon: Calculator, title: "Extended Tenures", desc: "Repayment tenures extending up to 30 years to optimize monthly EMI affordability." },
  { icon: Building, title: "Tax Advantages Guidance", desc: "Understand deductions under Section 24(b) and Section 80C of the Income Tax Act." },
];

export default function HomeLoanPage() {
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
                  Residential Property Financing
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-6">
                Your Dream Home Deserves <span className="text-brand-green">The Right Financing</span>
              </h1>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                Securing a home loan in Pune should be exciting, not overwhelming. Dixit Lending Solution bridges
                homebuyers with the premier banking network across Maharashtra for optimal sanction terms and hassle-free documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-card"
                >
                  Apply for Home Loan <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919096979328?text=Hello,%20I%20need%20assistance%20with%20a%20Home%20Loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-2xl font-semibold hover:bg-bg-light-green transition-all duration-200"
                >
                  Connect on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[360px] sm:h-[420px] rounded-4xl overflow-hidden shadow-card-hover border border-gray-100 group">
                <Image
                  src="/images/home-loan.jpg"
                  alt="Happy Indian couple in their modern sunlit apartment celebrating home ownership"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                      Extended Repayment
                    </span>
                    <span className="text-[10px] font-bold text-text-charcoal bg-bg-light-green px-2 py-0.5 rounded-full">
                      Tax Benefits Sec 24 &amp; 80C
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-2xl text-brand-green">Up to 30 Years Tenure</p>
                  <p className="text-[11px] text-text-muted mt-0.5">Competitive repo-linked benchmark rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              Home Loan Categories We Facilitate
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              From fresh purchases to balance transfers, we cater to all property acquisition models.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeLoanTypes.map((item) => (
              <div key={item.title} className="p-7 bg-bg-warm rounded-3xl border border-gray-100 card-hover flex flex-col">
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-4 text-brand-green">
                  <Home size={22} />
                </div>
                <h3 className="font-heading font-bold text-text-charcoal text-lg mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              The Dixit Advantage for Homebuyers
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Navigating legal vetting, builder tie-ups, and documentation scrutiny with ease.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeLoanFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm card-hover">
                <div className="w-12 h-12 bg-brand-gold/15 rounded-2xl flex items-center justify-center mb-4 text-brand-green">
                  <Icon size={22} />
                </div>
                <h4 className="font-heading font-bold text-text-charcoal text-lg mb-2">{title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <Calculators />

      {/* CTA Box */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-green-dark text-white rounded-4xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-3 text-white">
                Planning to purchase a home in Pune?
              </h3>
              <p className="text-white/70 max-w-xl text-sm leading-relaxed">
                Contact our advisory desk today. We will compare lender interest rates, assess processing charges, and structure your application.
              </p>
            </div>
            <Link
              href="/#enquiry"
              className="shrink-0 bg-brand-gold text-brand-green-dark px-8 py-4 rounded-2xl font-bold hover:bg-brand-gold-light transition-colors"
            >
              Get Home Loan Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
