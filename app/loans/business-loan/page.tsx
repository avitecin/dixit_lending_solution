import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, TrendingUp, DollarSign, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Loan in Pune for MSMEs & Enterprises | Dixit Lending Solution",
  description:
    "Empower your business with unsecured and secured Business Loans in Pune. Fast sanction, flexible tenures, and end-to-end guidance from Dixit Lending Solution.",
};

const businessLoanTypes = [
  {
    icon: DollarSign,
    title: "Unsecured Business Loan",
    desc: "Collateral-free commercial loans structured around your GST filings, banking turnover, and balance sheet performance.",
  },
  {
    icon: Factory,
    title: "Machinery & Equipment Finance",
    desc: "Capital facilities designed to procure modern industrial machinery, office IT infrastructure, or commercial tools.",
  },
  {
    icon: TrendingUp,
    title: "Working Capital Lines & Cash Credit",
    desc: "Revolving credit limits, overdraft facilities, and supply chain credit to maintain consistent operational liquidity.",
  },
  {
    icon: Briefcase,
    title: "Expansion & Franchise Capital",
    desc: "Medium to long-term funding to inaugurate new branch retail outlets, scale inventory, or invest in market expansion.",
  },
];

const eligibilityCriteria = [
  { label: "Entity Constitution", value: "Proprietorship, Partnership, LLP, Pvt Ltd" },
  { label: "Business Vintage", value: "Minimum 2 to 3 years of audited operations" },
  { label: "Annual Turnover", value: "₹40 Lakhs+ (Varies by lender requirements)" },
  { label: "Banking Track Record", value: "Healthy operational balance sheet & average bank balance" },
  { label: "CIBIL / Commercial Bureau", value: "Score of 700+ for directors/firm preferred" },
];

export default function BusinessLoanPage() {
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
                  Commercial Lending &amp; MSME Advisory
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-6">
                Powering Business Growth With <span className="text-brand-green">Strategic Lending</span>
              </h1>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                Whether you are bridging receivables gaps or preparing for heavy seasonal inventory orders, Dixit Lending Solution connects Pune business owners with prompt financial underwriting across trusted institutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-card"
                >
                  Apply for Business Loan <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919096979328?text=Hello,%20I%20want%20to%20apply%20for%20a%20Business%20Loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-2xl font-semibold hover:bg-bg-light-green transition-all duration-200"
                >
                  Direct Advisory on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[360px] sm:h-[420px] rounded-4xl overflow-hidden shadow-card-hover border border-gray-100 group">
                <Image
                  src="/images/business-loan.jpg"
                  alt="Confident Indian business entrepreneur reviewing enterprise growth metrics on tablet in modern office"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                      Commercial Sanctions
                    </span>
                    <span className="text-[10px] font-bold text-text-charcoal bg-bg-light-green px-2 py-0.5 rounded-full">
                      Collateral-Free Up to ₹75L*
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-2xl text-brand-green">MSME &amp; Corporate</p>
                  <p className="text-[11px] text-text-muted mt-0.5">Customized working capital &amp; expansion terms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              Commercial Facilities Available
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Custom-tailored business credit facilities aligned with your specific cash flow velocity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessLoanTypes.map(({ icon: Icon, title, desc }) => (
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

      {/* Criteria */}
      <section className="py-16 bg-bg-light-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-4xl border border-gray-100 shadow-card">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-2xl text-text-charcoal mb-2">
                Business Loan Assessment Matrix
              </h3>
              <p className="text-text-muted text-sm">
                Lenders assess both business financials and personal promotor profiles.
              </p>
            </div>

            <div className="space-y-4">
              {eligibilityCriteria.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-100 last:border-0 gap-1">
                  <span className="text-text-muted text-sm font-medium">{item.label}</span>
                  <span className="font-semibold text-text-charcoal text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-brand-green-dark transition-colors"
              >
                Check Commercial Eligibility <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
