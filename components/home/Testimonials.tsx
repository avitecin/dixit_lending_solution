"use client";

import { useRef } from "react";
import { ShieldCheck, HeartHandshake, FileCheck, Headphones, MessageCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Zero Upfront Fees",
    desc: "We never ask for cash deposits or advance advisory charges from retail loan applicants.",
  },
  {
    icon: FileCheck,
    title: "Transparent Documentation",
    desc: "Clear checklists from day one. You know exactly what documents are submitted to each bank.",
  },
  {
    icon: Headphones,
    title: "Dedicated Local Advisory",
    desc: "Our Kharadi, Pune team is available via direct phone and WhatsApp throughout your sanction cycle.",
  },
  {
    icon: HeartHandshake,
    title: "Unbiased Guidance",
    desc: "We compare multiple institutional options to advocate for the borrower's best financial interest.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-pad bg-bg-warm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-3"
          >
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
              Trust &amp; Service Standards
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-charcoal mb-4 tracking-tight"
          >
            Our Commitment to <span className="text-brand-green">Every Borrower</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            At Dixit Lending Solution, our reputation is built on clear communication, complete transparency, and human-first loan assistance.
          </motion.p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {commitments.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-brand-green/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-5 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-text-charcoal text-base sm:text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Customer Feedback Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-bg-light-green via-white to-bg-light-green rounded-3xl sm:rounded-4xl p-8 sm:p-10 border border-brand-green/20 text-center max-w-3xl mx-auto shadow-sm"
        >
          <div className="inline-block bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Customer Feedback
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-text-charcoal mb-2">
            Verified Customer Reviews
          </h3>
          <p className="text-text-muted text-sm max-w-xl mx-auto leading-relaxed mb-6">
            We are compiling verified customer reviews and post-disbursal case studies from our Pune applicants. Have you completed a loan application through our Kharadi office? We welcome your experience.
          </p>
          <a
            href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20would%20like%20to%20share%20my%20feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-card hover:-translate-y-0.5"
          >
            <MessageCircle size={16} /> Share Your Experience on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
