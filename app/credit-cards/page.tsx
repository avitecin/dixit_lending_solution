import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Plane, Gift, Percent } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Credit Cards in Pune | Dixit Lending Solution",
  description:
    "Discover credit cards tailored to your lifestyle, rewards, cashback, and travel needs with transparent advice from Dixit Lending Solution.",
};

const cardCategories = [
  {
    icon: Percent,
    title: "Cashback Cards",
    desc: "Earn flat 1% to 5% direct cashback on grocery shopping, utility bills, fuel surcharges, and e-commerce transactions.",
    badge: "Most Popular",
  },
  {
    icon: Plane,
    title: "Travel & Airport Lounge Cards",
    desc: "Complimentary domestic & international airport lounge access, airline air miles conversion, and foreign exchange discounts.",
    badge: "Travelers",
  },
  {
    icon: Gift,
    title: "Rewards & Lifestyle Cards",
    desc: "Accelerated reward point multipliers on weekend dining, movies, shopping, and flexible vouchers redemption.",
    badge: "Everyday Spends",
  },
  {
    icon: Sparkles,
    title: "Premium Metal Cards",
    desc: "Exclusive concierge desk, golf privileges, comprehensive overseas insurance, and privileged hospitality memberships.",
    badge: "HNI / Elite",
  },
];

export default function CreditCardsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-brand-green-dark text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                  Tailored Lifestyle &amp; Spends
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-6">
                Find The Perfect Credit Card <span className="text-brand-gold">For Your Lifestyle</span>
              </h1>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Don&apos;t settle for generic cards. Dixit Lending Solution guides salaried employees and business owners in Pune to credit cards with zero joining fees, maximum reward yields, airport lounge passes, and fuel surcharge waivers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-8 py-4 rounded-2xl font-bold hover:bg-brand-gold-light transition-all duration-200 shadow-card"
                >
                  Find Recommended Cards <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919096979328?text=Hello,%20I%20want%20help%20choosing%20a%20Credit%20Card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[360px] sm:h-[420px] rounded-4xl overflow-hidden shadow-card border border-white/15 group">
                <Image
                  src="/images/credit-card.jpg"
                  alt="Modern Indian woman making contactless payment with premium credit card in Pune cafe"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-black/45 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                      Zero Hidden Fees
                    </span>
                    <span className="text-[10px] bg-brand-green px-2 py-0.5 rounded-full text-white font-semibold">
                      Instant Approval Assistance
                    </span>
                  </div>
                  <p className="font-heading font-bold text-sm">Pune Lifestyle &amp; Travel Privileges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              Explore Card Categories
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Select a category based on where you spend most of your monthly budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardCategories.map(({ icon: Icon, title, desc, badge }) => (
              <div key={title} className="p-7 bg-bg-warm rounded-4xl border border-gray-100 card-hover flex flex-col relative">
                <span className="absolute top-6 right-6 bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
                  {badge}
                </span>
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-5 text-brand-green">
                  <Icon size={26} />
                </div>
                <h3 className="font-heading font-bold text-text-charcoal text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{desc}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/#enquiry"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:underline"
                  >
                    Check Eligibility <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
