"use client";

import { useRef } from "react";
import { Landmark, LifeBuoy, FileCheck, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    icon: Landmark,
    title: "100+ Bank & NBFC Options*",
    desc: "Access suitable options from multiple banks and NBFCs across our financial network.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Assistance",
    desc: "Guidance from application initiation all the way to loan disbursal.",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    desc: "Clear communication throughout your journey, without misleading promises.",
  },
  {
    icon: Star,
    title: "Customer First",
    desc: "Solutions based on your unique financial requirements and profile.",
  },
];

export default function TrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white border-y border-gray-100 py-12 sm:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs sm:text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-8"
        >
          Your Financial Journey, Simplified
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-5 rounded-3xl bg-bg-warm border border-gray-100 shadow-xs hover:shadow-card hover:bg-white hover:border-brand-green/20 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:shadow-gold transition-all duration-300">
                <Icon size={22} className="text-brand-green group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-text-charcoal text-sm mb-1 group-hover:text-brand-green transition-colors">
                  {title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs text-text-light mt-6"
        >
          *Subject to lender criteria. Dixit Lending Solution is a dedicated loan assistance and financial guidance partner.
        </motion.p>
      </div>
    </section>
  );
}
