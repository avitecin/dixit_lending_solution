import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Zap, Award, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Dixit Lending Solution - Pune Loan Assistance Partner",
  description:
    "Learn about Dixit Lending Solution, Pune's trusted loan assistance and financial guidance firm located in Kharadi. Discover our values, mission, and transparent lending assistance process.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    desc: "No hidden charges, no distorted promises. We present exact terms, realistic eligibility estimations, and all applicable lender fees clearly.",
  },
  {
    icon: HeartHandshake,
    title: "Client First Advocacy",
    desc: "We analyze multiple bank options to advocate solely for the borrower's best financial interest and cash flow reality.",
  },
  {
    icon: Zap,
    title: "Fast & Paperless Coordination",
    desc: "We minimize administrative delays by managing verification hurdles and lender back-office coordination proactively.",
  },
  {
    icon: Award,
    title: "Professional Standards",
    desc: "Upholding complete compliance with national banking codes, data privacy benchmarks, and professional ethics at every touchpoint.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-hero-gradient py-14 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                Our Story & Philosophy
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text-charcoal leading-tight mb-6">
              Making Borrowing Simple, Fast & <span className="text-brand-green">Completely Transparent</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Dixit Lending Solution is a premier loan assistance and financial guidance partner based in Kharadi, Pune. We bridge the gap between discerning borrowers and India&apos;s leading financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story split */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-6">
                Bridging Borrowers with Legitimate Financial Solutions
              </h2>
              <div className="space-y-4 text-text-muted text-base leading-relaxed">
                <p>
                  Founded with a vision to eliminate the frustration, confusing jargon, and hidden hurdles associated with retail loan applications, Dixit Lending Solution has grown into a trusted financial partner for salaried employees, professionals, and MSME business owners in Pune and across Maharashtra.
                </p>
                <p>
                  Rather than pushing a single bank&apos;s product, our multi-institution loan assistance process allows us to evaluate your profile objectively. We analyze your credit history, employment or business stability, and monthly budget to guide you toward lending institutions where approval odds and interest pricing are optimal.
                </p>
                <p>
                  From initial profile assessment and documentation guidance to loan sanction and final disbursal into your bank account, our team stands with you at every step.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/#enquiry"
                  className="bg-brand-green text-white px-7 py-3.5 rounded-2xl font-semibold hover:bg-brand-green-dark transition-colors inline-flex items-center gap-2"
                >
                  Apply Online <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-brand-green/20 text-brand-green px-7 py-3.5 rounded-2xl font-semibold hover:bg-bg-light-green transition-colors"
                >
                  Contact Our Office
                </Link>
              </div>
            </div>

            <div className="relative rounded-4xl overflow-hidden shadow-card border border-gray-100 group min-h-[480px] flex flex-col justify-end p-8 sm:p-10">
              <Image
                src="/images/about-consultation.jpg"
                alt="Dixit Lending Solution Advisory Office in Kharadi Pune"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark/45" />

              <div className="relative z-10 text-white">
                <div className="w-14 h-14 bg-white rounded-2xl p-2 mb-5 flex items-center justify-center shadow-md">
                  <Image src="/logo.png" alt="Logo" width={44} height={44} className="object-contain" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-white">Our Head Office</h3>
                <div className="space-y-3.5 text-sm text-white/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                    <p>
                      City Vista, B Wing, 4th Floor, Office No. 08,<br />
                      Kharadi, Pune – 411014, Maharashtra
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-brand-gold shrink-0" size={18} />
                    <p>+91 90969 79328</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-brand-gold shrink-0" size={18} />
                    <p>dixitlendingsolution@gmail.com</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-white/70">
                    Monday – Saturday, 10:00 AM to 7:00 PM IST
                  </p>
                  <span className="text-[11px] font-bold text-brand-gold bg-brand-gold/15 px-3 py-1 rounded-full border border-brand-gold/30">
                    Pune Central Desk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-text-charcoal mb-3">
              Principles That Guide Us
            </h2>
            <p className="text-text-muted max-w-lg mx-auto">
              Our core values govern our interactions with every applicant and institutional partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 bg-white rounded-3xl border border-gray-100 card-hover flex flex-col">
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-4 text-brand-green">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-text-charcoal text-lg mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
