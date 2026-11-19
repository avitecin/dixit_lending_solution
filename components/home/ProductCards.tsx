"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, User, Home, Briefcase, CreditCard, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    icon: User,
    label: "Personal Loan",
    desc: "Unsecured personal credit for urgent liquidity, weddings, travel, or debt consolidation.",
    highlight: "Tenures 12–72 Months",
    href: "/loans/personal-loan",
    badge: "Popular",
    iconBg: "bg-emerald-50 text-brand-green group-hover:bg-brand-green group-hover:text-white",
    metric: "From 10.49% p.a.*",
  },
  {
    icon: Home,
    label: "Home Loan",
    desc: "Affordable home purchase, self-construction, and plot + construction financing.",
    highlight: "Tenures up to 30 Yrs",
    href: "/loans/home-loan",
    badge: "Low Interest",
    iconBg: "bg-amber-50 text-amber-600 group-hover:bg-brand-green group-hover:text-white",
    metric: "From 8.40% p.a.*",
  },
  {
    icon: Briefcase,
    label: "Business Loan",
    desc: "Unsecured MSME capital lines, machinery loans, and commercial expansion facilities.",
    highlight: "Minimal Paperwork",
    href: "/loans/business-loan",
    badge: "MSMEs",
    iconBg: "bg-blue-50 text-blue-600 group-hover:bg-brand-green group-hover:text-white",
    metric: "Up to ₹75 Lakhs*",
  },
  {
    icon: CreditCard,
    label: "Credit Cards",
    desc: "Compare cashback, travel lounge access, lifestyle privileges, and rewards credit cards.",
    highlight: "Instant Benefits",
    href: "/credit-cards",
    badge: "Lifestyle",
    iconBg: "bg-purple-50 text-purple-600 group-hover:bg-brand-green group-hover:text-white",
    metric: "Up to 5% Cashback*",
  },
];

export default function ProductCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="products" className="section-pad bg-bg-warm relative overflow-hidden">
      {/* Subtle ambient background orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-green/3 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-gold/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-3"
          >
            <Sparkles size={12} className="text-brand-gold" />
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
              Lending Solutions Showcase
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-charcoal mb-4 tracking-tight"
          >
            Financial Solutions Designed <span className="text-brand-green">Around You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Tell us what you need. Our Kharadi, Pune team evaluates your requirements across verified banking channels to find your best fit.
          </motion.p>
        </div>

        {/* Product Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products.map(({ icon: Icon, label, desc, highlight, href, badge, iconBg, metric }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="h-full"
            >
              <Link
                href={href}
                className="group relative h-full bg-white rounded-3xl sm:rounded-4xl p-7 border border-gray-100/90 shadow-card flex flex-col justify-between transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-brand-green/10 hover:border-brand-gold/40 focus-visible:ring-2 focus-visible:ring-brand-gold overflow-hidden"
              >
                {/* Subtle top card accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-green/20 to-transparent group-hover:via-brand-gold transition-all duration-500" />

                <div>
                  {/* Header with Icon and Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm ${iconBg}`}
                    >
                      <Icon size={26} className="transition-transform duration-300 group-hover:rotate-3" />
                    </div>
                    <span className="text-[10px] font-extrabold text-brand-green bg-bg-light-green px-3 py-1 rounded-full border border-brand-green/25 uppercase tracking-wider">
                      {badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-extrabold text-text-charcoal text-xl mb-1.5 group-hover:text-brand-green transition-colors">
                    {label}
                  </h3>
                  <div className="text-xs font-bold text-brand-gold mb-3">
                    {metric}
                  </div>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {desc}
                  </p>
                </div>

                <div>
                  {/* Highlight Tag */}
                  <div className="inline-block bg-bg-warm text-text-charcoal text-[11px] font-semibold px-3 py-1 rounded-lg border border-gray-200/70 mb-5">
                    ✓ {highlight}
                  </div>

                  {/* CTA with Arrow Hover Animation */}
                  <div className="flex items-center justify-between text-brand-green text-xs sm:text-sm font-bold pt-3.5 border-t border-gray-100">
                    <span>Explore {label}</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1.5 text-brand-green" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
