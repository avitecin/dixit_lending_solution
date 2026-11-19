import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const products = [
  { label: "Personal Loan", href: "/loans/personal-loan" },
  { label: "Home Loan", href: "/loans/home-loan" },
  { label: "Business Loan", href: "/loans/business-loan" },
  { label: "Loan Against Property", href: "/loans/loan-against-property" },
  { label: "Loan Balance Transfer", href: "/loans/balance-transfer" },
  { label: "Top-Up Loan", href: "/loans/top-up-loan" },
  { label: "Credit Cards", href: "/credit-cards" },
];

const tools = [
  { label: "EMI Calculator", href: "/calculators" },
  { label: "Eligibility Estimator", href: "/calculators" },
  { label: "Refinancing Calculator", href: "/calculators" },
  { label: "Credit Profile Advisory", href: "/#credit-score" },
  { label: "Financial Guides", href: "/resources" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Institutional Ecosystem", href: "/#partners" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact Us", href: "/contact" },
];

const support = [
  { label: "FAQs", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer & Disclosures", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white border-t border-brand-green/20" aria-label="Footer">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Address Column (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-1.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Dixit Lending Solution"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-heading font-extrabold text-white text-lg tracking-tight leading-none">
                  DIXIT
                </span>
                <span className="block font-heading text-[10px] font-bold text-brand-gold-light tracking-[0.2em] uppercase leading-tight mt-0.5">
                  Lending Solution
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              From Application to Disbursal, We Are Your Lending Solution. Providing transparent personalized loan guidance and dedicated financial assistance across Pune and Maharashtra.
            </p>

            {/* Verified Contact Details */}
            <div className="space-y-3.5 text-xs text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  City Vista, B Wing, 4th Floor, Office No. 08,<br />
                  Kharadi, Pune – 411014, Maharashtra
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-brand-gold shrink-0" />
                <a
                  href="tel:+919096979328"
                  className="hover:text-brand-gold transition-colors font-semibold"
                >
                  +91 90969 79328
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-brand-gold shrink-0" />
                <a
                  href="mailto:dixitlendingsolution@gmail.com"
                  className="hover:text-brand-gold transition-colors"
                >
                  dixitlendingsolution@gmail.com
                </a>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20would%20like%20to%20inquire%20about%20a%20loan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 bg-brand-gold rounded-xl text-brand-green-dark text-xs font-bold hover:bg-brand-gold-light transition-colors shadow-sm"
            >
              <MessageCircle size={15} />
              WhatsApp Priority Advisory
            </a>
          </div>

          {/* Products (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-4">
              Lending Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Company (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-4">
              Tools &amp; Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
              {tools.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {company.slice(0, 3).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-4">
              Support &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {support.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Full Compliance Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Dixit Lending Solution. All rights reserved. Trusted Loan Assistance Partner, Pune.
            </p>
            <p className="text-white/40 text-[11px] text-center md:text-right max-w-2xl leading-relaxed">
              <strong>Regulatory Disclaimer:</strong> Dixit Lending Solution is a Direct Selling Agent (DSA) and loan advisory facilitator, not a direct banking institution. Loan sanctions, applicable interest rates, processing fees, documentation fees, and disbursement timelines are at the sole discretion of the underwriting bank or NBFC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
