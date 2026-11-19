"use client";

import { useRef } from "react";
import { Landmark, Building2, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

const institutionCategories = [
  {
    icon: Landmark,
    title: "Public Sector Banks",
    desc: "Nationalized commercial banks offering competitive repo-linked benchmark rates and sovereign trust.",
    features: "Low floating rates · Government schemes",
  },
  {
    icon: Building2,
    title: "Private Scheduled Banks",
    desc: "Modern digital banks with swift processing, expedited turnarounds, and pre-approved personal credit lines.",
    features: "Fast processing · Paperless digital KYC",
  },
  {
    icon: Layers,
    title: "Housing Finance Companies (HFCs)",
    desc: "Specialized mortgage lenders providing flexible property valuation criteria and customized home purchase terms.",
    features: "Flexible income assessment · Long tenures",
  },
  {
    icon: ShieldCheck,
    title: "RBI-Registered NBFCs",
    desc: "Licensed Non-Banking Financial Companies extending credit solutions for diverse salaried and self-employed profiles.",
    features: "Custom eligibility · Expedited disbursals",
  },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="partners" className="section-pad bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-3"
          >
            <Sparkles size={12} className="text-brand-gold" />
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
              Financial Network &amp; Distribution
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-charcoal mb-4 tracking-tight"
          >
            Multiple Lending Options, <span className="text-brand-green">One Trusted Guide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            As your trusted Loan Assistance &amp; Financial Guidance Partner based in Pune, Dixit Lending Solution works across an extensive network of regulated banking and financial institutions to help you find suitable lending solutions.
          </motion.p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {institutionCategories.map(({ icon: Icon, title, desc, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-bg-warm rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-card hover:bg-white hover:border-brand-green/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-5 text-brand-green">
                  <Icon size={26} />
                </div>
                <h3 className="font-heading font-bold text-text-charcoal text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4">{desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-200/60">
                <span className="text-xs font-semibold text-brand-green block">
                  ✓ {features}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transparent Compliance Disclosure */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-bg-light-green border border-brand-green/15 rounded-3xl p-6 text-center max-w-3xl mx-auto"
        >
          <p className="text-xs text-text-muted leading-relaxed">
            <strong className="text-text-charcoal">Regulatory &amp; Partnership Transparency:</strong> Dixit Lending Solution is an authorized loan referral and DSA sourcing facilitator operating under agreements with select financial institutions. Product sanctions, rates, and final approval are at the sole discretion of the respective underwriting bank or NBFC.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
