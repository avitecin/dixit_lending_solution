"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle, Phone, ArrowRight } from "lucide-react";

interface NavDropdownItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

const loans: NavDropdownItem[] = [
  { label: "Personal Loan", href: "/loans/personal-loan", desc: "For salaried & self-employed personal funding" },
  { label: "Home Loan", href: "/loans/home-loan", desc: "Purchase, construction, plot & extension" },
  { label: "Business Loan", href: "/loans/business-loan", desc: "MSME working capital & commercial credit" },
  { label: "Loan Against Property", href: "/loans/loan-against-property", desc: "Unlock liquidity from real estate equity" },
  { label: "Loan Balance Transfer", href: "/loans/balance-transfer", desc: "Reduce interest outgo on active debts" },
  { label: "Top-Up Loan", href: "/loans/top-up-loan", desc: "Extra funds over existing home mortgages" },
];

const calculators: NavDropdownItem[] = [
  { label: "EMI Calculator", href: "/calculators", desc: "Calculate monthly installments" },
  { label: "Loan Eligibility Calculator", href: "/calculators", desc: "Estimate borrowing capacity" },
  { label: "Home Loan EMI Calculator", href: "/calculators", desc: "Plan long-term property repayments" },
  { label: "Refinancing Savings", href: "/calculators", desc: "Evaluate balance transfer benefits" },
];

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Loans", href: "/loans/personal-loan", dropdown: loans },
  { label: "Credit Cards", href: "/credit-cards" },
  { label: "Calculators", href: "/calculators", dropdown: calculators },
  { label: "Why Us", href: "/#why-us" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xl p-1"
            >
              <Image
                src="/logo.png"
                alt="Dixit Lending Solution Logo"
                width={isScrolled ? 42 : 48}
                height={isScrolled ? 42 : 48}
                className="transition-all duration-300 object-contain"
                priority
              />
              <div className="hidden sm:block">
                <span className="block font-heading font-extrabold text-brand-green text-lg tracking-tight leading-none">
                  DIXIT
                </span>
                <span className="block font-heading text-[10px] font-bold text-text-muted tracking-[0.2em] uppercase leading-tight mt-0.5">
                  Lending Solution
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main Navigation">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center gap-1 px-2 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold text-text-charcoal hover:text-brand-green hover:bg-bg-light-green transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold whitespace-nowrap"
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180 text-brand-green" : "text-text-muted"
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown Panel */}
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-3xl shadow-card border border-gray-100 p-2 z-50 animate-fade-up">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block p-3 rounded-2xl hover:bg-bg-light-green transition-colors group/item"
                          >
                            <p className="font-heading font-bold text-xs text-text-charcoal group-hover/item:text-brand-green flex items-center justify-between">
                              {item.label}
                              <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-brand-green" />
                            </p>
                            {item.desc && (
                              <p className="text-[11px] text-text-muted mt-0.5 leading-snug">
                                {item.desc}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-2 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold text-text-charcoal hover:text-brand-green hover:bg-bg-light-green transition-all duration-150 focus-visible:ring-2 focus-visible:ring-brand-gold whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20would%20like%20to%20inquire%20about%20a%20loan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-4 py-2 xl:py-2.5 rounded-xl text-xs font-bold text-brand-green border border-brand-green/25 hover:bg-bg-light-green transition-all duration-200 whitespace-nowrap"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <Link
                href="/#enquiry"
                className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-5 py-2 xl:py-2.5 bg-brand-green text-white rounded-xl text-xs font-bold hover:bg-brand-green-dark transition-all duration-200 shadow-sm hover:shadow-card hover:-translate-y-0.5 whitespace-nowrap"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-xl text-text-charcoal hover:bg-bg-light-green transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute top-0 right-0 w-84 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col overflow-y-auto animate-fade-up">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="Dixit Lending Solution"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <div>
                  <span className="block font-heading font-extrabold text-brand-green text-base leading-none">
                    DIXIT
                  </span>
                  <span className="block font-heading text-[9px] font-bold text-text-muted tracking-wider uppercase">
                    Lending Solution
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-xl text-text-muted hover:text-text-charcoal hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="border-b border-gray-50 pb-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold text-text-charcoal hover:bg-bg-light-green transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileExpanded === link.label ? "rotate-180 text-brand-green" : "text-text-muted"
                        }`}
                      />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="ml-2 pl-3 border-l-2 border-brand-green/30 my-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-lg text-xs font-semibold text-text-muted hover:text-brand-green hover:bg-bg-light-green transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3.5 py-3 rounded-xl text-sm font-bold text-text-charcoal hover:text-brand-green hover:bg-bg-light-green transition-colors border-b border-gray-50"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Actions Drawer Footer */}
            <div className="p-4 border-t border-gray-100 space-y-2.5 bg-bg-warm/60">
              <a
                href="https://wa.me/919096979328?text=Hello%20Dixit%20Lending%20Solution,%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-brand-green text-brand-green text-xs font-bold hover:bg-bg-light-green transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Consultation
              </a>
              <Link
                href="/#enquiry"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white rounded-xl text-xs font-bold hover:bg-brand-green-dark transition-colors shadow-sm"
              >
                Apply Online Now
              </Link>
              <a
                href="tel:+919096979328"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-text-muted hover:text-brand-green text-xs font-medium transition-colors"
              >
                <Phone size={14} />
                Call Helpline: 90969 79328
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
