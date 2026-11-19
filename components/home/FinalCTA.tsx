"use client";

import { useRef } from "react";
import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import FloatingBackground from "@/components/ui/FloatingBackground";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-green-gradient rounded-3xl sm:rounded-4xl overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-16 shadow-2xl shadow-brand-green/20"
        >
          {/* Floating Background Animation */}
          <FloatingBackground variant="cta" />

          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">
                Ready to Get Started?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight tracking-tight"
            >
              Let&apos;s Find the Right Lending{" "}
              <span className="text-brand-gold">Solution for You</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Have a loan requirement? Talk to our Pune team and understand your available options.
              No false promises. Just transparent, dedicated guidance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#enquiry"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-green px-8 py-4 rounded-2xl font-bold text-base hover:bg-bg-light-green transition-all duration-300 shadow-card group hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20would%20like%20to%20get%20started%20with%20a%20loan%20application"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark px-8 py-4 rounded-2xl font-bold text-base hover:bg-brand-gold-light transition-all duration-300 shadow-card hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <a
                href="tel:+919096979328"
                className="inline-flex items-center justify-center gap-2 bg-white/15 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/25 transition-all duration-300 backdrop-blur-sm"
              >
                <Phone size={18} />
                Call Now
              </a>
            </motion.div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10">
              <a href="tel:+919096979328" className="text-white/70 text-sm hover:text-white transition-colors">
                📞 90969 79328
              </a>
              <a href="mailto:dixitlendingsolution@gmail.com" className="text-white/70 text-sm hover:text-white transition-colors">
                ✉️ dixitlendingsolution@gmail.com
              </a>
              <span className="text-white/50 text-sm">📍 Kharadi, Pune 411014</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
