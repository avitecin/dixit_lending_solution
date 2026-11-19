"use client";

import { useRef } from "react";
import { Landmark, ShieldCheck, Headphones, Laptop, Heart, ArrowRightLeft } from "lucide-react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: Landmark,
    title: "Multiple Lending Options",
    desc: "Explore suitable options across multiple banks and NBFCs through our financial network.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    desc: "Clear communication throughout your journey, without misleading promises or false guarantees.",
  },
  {
    icon: Headphones,
    title: "Dedicated Loan Guidance",
    desc: "Get dedicated assistance throughout your lending journey from our experienced Pune team.",
  },
  {
    icon: Laptop,
    title: "Digital Process",
    desc: "Simplified documentation and application assistance with minimal paperwork required.",
  },
  {
    icon: Heart,
    title: "Customer-Focused Approach",
    desc: "Solutions are recommended based on your specific financial requirements and profile.",
  },
  {
    icon: ArrowRightLeft,
    title: "End-to-End Support",
    desc: "We assist you from the moment you apply until your loan is disbursed to your account.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="why-us" className="section-pad bg-brand-green-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-2 border-white" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full border border-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-3"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight"
          >
            Why Choose{" "}
            <span className="text-brand-gold">Dixit Lending Solution?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            We are not just another loan website. We are a premium loan assistance and financial guidance partner
            dedicated to making your borrowing journey simple, fast, and transparent.
          </motion.p>
        </div>

        {/* Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white/5 border border-white/10 rounded-3xl sm:rounded-4xl p-7 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-300 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:text-brand-green-dark text-brand-gold transition-all duration-300 shadow-sm">
                  <Icon size={26} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-3 group-hover:text-brand-gold transition-colors">
                  {title}
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
