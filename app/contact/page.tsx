"use client";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", query: "", loanType: "Personal Loan" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-hero-gradient py-14 lg:py-20 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
              We&apos;re Here To Assist You
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-4">
            Get In Touch With <span className="text-brand-green">Our Lending Specialists</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about loan eligibility, interest rates, or documentation? Visit our Pune office, call our helpline, or send an enquiry below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info cards */}
            <div className="space-y-6">
              <div className="bg-bg-warm p-8 rounded-4xl border border-gray-100">
                <h3 className="font-heading font-bold text-2xl text-text-charcoal mb-6">Contact Channels</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 text-brand-green">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text-charcoal text-base">Office Address</h4>
                      <p className="text-text-muted text-sm leading-relaxed mt-1">
                        City Vista, B Wing, 4th Floor, Office No. 08,<br />
                        Kharadi, Pune – 411014, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 text-brand-green">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text-charcoal text-base">Direct Helpline</h4>
                      <p className="text-text-muted text-sm leading-relaxed mt-1">
                        <a href="tel:+919096979328" className="hover:text-brand-green font-semibold">
                          +91 90969 79328
                        </a>
                      </p>
                      <p className="text-xs text-text-light mt-0.5">Mon – Sat, 10:00 AM – 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 text-brand-green">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text-charcoal text-base">Email Support</h4>
                      <p className="text-text-muted text-sm leading-relaxed mt-1">
                        <a href="mailto:dixitlendingsolution@gmail.com" className="hover:text-brand-green">
                          dixitlendingsolution@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center shrink-0 text-brand-green">
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text-charcoal text-base">Instant WhatsApp Desk</h4>
                      <p className="text-text-muted text-sm leading-relaxed mt-1">
                        Quick queries, document checklists, and application updates.
                      </p>
                      <a
                        href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20have%20an%20enquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:underline mt-2"
                      >
                        Open WhatsApp Chat →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Consultation Feature Card */}
              <div className="relative rounded-4xl overflow-hidden shadow-card border border-gray-100 group h-64 sm:h-72">
                <Image
                  src="/images/hero-advisor.jpg"
                  alt="Senior financial advisor at Dixit Lending Solution corporate office in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/95 via-brand-green-dark/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    In-Person Advisory Available
                  </span>
                  <h4 className="font-heading font-bold text-lg text-white mt-1.5">
                    Visit Our Kharadi Office
                  </h4>
                  <p className="text-white/80 text-xs mt-0.5">
                    Schedule a 1-on-1 discussion with our senior credit specialists to plan your loan strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-4xl border border-gray-100 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-text-charcoal mb-2">Message Sent!</h3>
                  <p className="text-text-muted text-sm max-w-md mx-auto mb-6">
                    Thank you for contacting Dixit Lending Solution. An advisor from our Pune office will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-green text-sm font-semibold hover:underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-text-charcoal mb-4">Send an Enquiry</h3>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kulkarni"
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-green focus:ring-0 outline-none text-sm text-text-charcoal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile"
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-green focus:ring-0 outline-none text-sm text-text-charcoal"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-green focus:ring-0 outline-none text-sm text-text-charcoal"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Interested Product
                    </label>
                    <select
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-green focus:ring-0 outline-none text-sm text-text-charcoal bg-white"
                      value={formData.loanType}
                      onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    >
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Loan Balance Transfer">Loan Balance Transfer</option>
                      <option value="Credit Card">Credit Card</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Brief Requirement or Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your required loan amount or specific questions..."
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-green focus:ring-0 outline-none text-sm text-text-charcoal resize-none"
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-green text-white font-semibold rounded-2xl hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2 shadow-card"
                  >
                    <Send size={18} /> Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
