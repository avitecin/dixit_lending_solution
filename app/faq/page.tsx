import type { Metadata } from "next";
import FAQ from "@/components/home/FAQ";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Dixit Lending Solution",
  description:
    "Find transparent answers regarding DSA operations, loan eligibility, document requirements, interest calculations, and bank processing times.",
};

export default function FAQPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-hero-gradient py-14 lg:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
              Answers & Clarifications
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-4">
            Frequently Asked <span className="text-brand-green">Questions</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Clear, honest answers to help you understand our service model, loan timelines, and banking procedures.
          </p>
        </div>
      </section>

      <FAQ />

      {/* Still have questions banner */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg-warm p-8 sm:p-10 rounded-4xl border border-gray-100">
            <h3 className="font-heading font-bold text-2xl text-text-charcoal mb-2">
              Still Have Questions?
            </h3>
            <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">
              Our lending advisors are available to review your personal profile and address specific questions directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919096979328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-brand-green-dark transition-colors"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a
                href="tel:+919096979328"
                className="border border-brand-green/20 text-brand-green px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-bg-light-green transition-colors"
              >
                <Phone size={16} /> Call Helpline
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
