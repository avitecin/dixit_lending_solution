"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import FloatingBackground from "@/components/ui/FloatingBackground";

const categories = [
  { emoji: "💳", label: "Cashback", desc: "Flat 1–5% on grocery & bills" },
  { emoji: "✈️", label: "Travel", desc: "Complimentary airport lounges" },
  { emoji: "🎁", label: "Rewards", desc: "Accelerated points on spends" },
  { emoji: "💼", label: "Premium", desc: "Exclusive dining & golf perks" },
];

const mockCards = [
  { bg: "from-brand-green to-brand-green-dark", highlight: "text-brand-gold", type: "Cashback Platinum", perks: "Up to 5% flat cashback" },
  { bg: "from-gray-800 to-gray-950", highlight: "text-amber-400", type: "Elite Metal", perks: "Complimentary lounge & golf" },
  { bg: "from-blue-700 to-blue-950", highlight: "text-blue-300", type: "Travel Voyage", perks: "Air miles & zero forex markup" },
  { bg: "from-purple-700 to-purple-950", highlight: "text-purple-300", type: "Rewards Signature", perks: "10X reward points on dining" },
];

export default function CreditCardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-brand-green-dark relative overflow-hidden">
      {/* Floating Background Animation */}
      <FloatingBackground variant="credit-card" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-3"
          >
            Credit Cards
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight"
          >
            Find a Credit Card That{" "}
            <span className="text-brand-gold">Fits Your Lifestyle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Explore credit cards across premier banks in India — from instant cashback and zero annual fee to luxury travel privileges.
          </motion.p>
        </div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(({ emoji, label, desc }) => (
            <Link
              key={label}
              href="/credit-cards"
              className="flex items-center gap-2.5 bg-white/10 border border-white/10 rounded-2xl px-5 py-2.5 hover:bg-white/20 hover:border-brand-gold/40 transition-all duration-200 cursor-pointer group"
            >
              <span className="text-lg">{emoji}</span>
              <div>
                <p className="text-white font-semibold text-xs sm:text-sm">{label}</p>
                <p className="text-white/60 text-[11px]">{desc}</p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Split Grid: Real Visual + Mock Card Previews */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left: Real Lifestyle Photography Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[380px] sm:h-[440px] rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border border-white/15 group">
              <Image
                src="/images/credit-card.jpg"
                alt="Modern Indian woman making contactless payment with sleek credit card in Pune cafe"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/95 via-brand-green-dark/25 to-transparent" />

              {/* In-Card Floating Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 bg-black/40 backdrop-blur-md rounded-3xl p-5 border border-white/15">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={14} /> Lifestyle &amp; Spends
                  </span>
                  <span className="text-[10px] text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full">
                    Pune Card Sourcing
                  </span>
                </div>
                <p className="font-heading font-extrabold text-white text-xl mb-1">
                  Maximize Everyday Returns
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  Compare fuel waivers, complimentary airport lounge access, and zero joining fee offers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: 4 Styled Mock Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {mockCards.map(({ bg, highlight, type, perks }, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${bg} p-6 rounded-3xl border border-white/10 shadow-lg flex flex-col justify-between h-48 cursor-default`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-white/50 block">CHIP &bull;&bull;&bull;&bull;</span>
                    <span className="font-heading font-extrabold text-white text-base tracking-wide mt-1 block">
                      {type}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                    ₹
                  </div>
                </div>

                <div>
                  <p className={`font-heading font-bold text-sm ${highlight} mb-1`}>
                    {perks}
                  </p>
                  <p className="text-white/60 text-[11px]">
                    Assisted Application across Leading Banks
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/credit-cards"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-8 py-4 rounded-2xl font-bold text-sm hover:bg-brand-gold-light transition-all shadow-gold hover:-translate-y-0.5"
          >
            Explore All Credit Cards
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
