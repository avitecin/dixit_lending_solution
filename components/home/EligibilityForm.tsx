"use client";

import { useState } from "react";
import {
  User,
  Home,
  Briefcase,
  CreditCard,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  Info,
  Headphones,
  Zap,
  Building2,
  Lock,
} from "lucide-react";
import FloatingBackground from "@/components/ui/FloatingBackground";

interface ProductOption {
  label: string;
  desc: string;
  tag: string;
  icon: React.ElementType;
}
const STEP_1_OPTIONS: ProductOption[] = [
  {
    label: "Personal Loan",
    desc: "For medical, travel, wedding or personal needs",
    tag: "Unsecured",
    icon: User,
  },
  {
    label: "Home Loan",
    desc: "Purchase, construction, or plot development",
    tag: "Lowest Rates",
    icon: Home,
  },
  {
    label: "Business Loan",
    desc: "Working capital, expansion or equipment",
    tag: "Growth Capital",
    icon: Briefcase,
  },
  {
    label: "Credit Card",
    desc: "Lifestyle, cashback, travel rewards",
    tag: "Rewards & Perks",
    icon: CreditCard,
  },
];

const STEP_2_OPTIONS = [
  {
    label: "Salaried Professional",
    desc: "Corporate / MNC / Private Ltd / Government / PSU employee",
    tag: "Direct Payroll",
    icon: User,
  },
  {
    label: "Self-Employed / Business",
    desc: "Proprietorship / LLP / Private Ltd / Trader / Consultant",
    tag: "GST / ITR Registered",
    icon: Briefcase,
  },
];

const TRUST_METRICS = [
  {
    icon: ShieldCheck,
    title: "No Upfront Charges*",
    subtitle: "100% free consultation",
  },
  {
    icon: Headphones,
    title: "Expert Assistance",
    subtitle: "Dedicated Pune advisory",
  },
  {
    icon: Zap,
    title: "Digital Process",
    subtitle: "Quick profile assessment",
  },
  {
    icon: Building2,
    title: "100+ Lender Options",
    subtitle: "Top banks & NBFC partners",
  },
];

const GUIDANCE_LABELS: Record<number, string> = {
  1: "Let's start with your requirement",
  2: "Select your employment category",
  3: "Enter your monthly take-home income",
  4: "Specify your requested loan funding",
  5: "Enter your official legal name for KYC",
  6: "Where should we send your matched options?",
};

export default function EligibilityForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<{
    loanType?: string;
    employment?: string;
    income?: string;
    amount?: string;
    name?: string;
    mobile?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const totalSteps = 6;
  const progress = Math.min(100, Math.round((step / totalSteps) * 100));

  const handleOptionSelect = (field: "loanType" | "employment", value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
    setStep((s) => s + 1);
  };

  const handleNextStep = () => {
    setErrorMessage("");
    if (step === 3) {
      const inc = Number(data.income);
      if (!data.income || isNaN(inc) || inc < 10000) {
        setErrorMessage("Please enter a valid monthly income of at least ₹10,000.");
        return;
      }
    }
    if (step === 4) {
      const amt = Number(data.amount);
      if (!data.amount || isNaN(amt) || amt < 25000) {
        setErrorMessage("Please enter a minimum loan requirement of ₹25,000.");
        return;
      }
    }
    if (step === 5) {
      if (!data.name || data.name.trim().length < 2) {
        setErrorMessage("Please enter your full legal name.");
        return;
      }
    }
    setStep((s) => s + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const cleanPhone = (data.mobile || "").replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setData({});
    setStep(1);
    setSubmitted(false);
    setErrorMessage("");
  };

  const formattedAmount = data.amount
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(Number(data.amount))
    : "";

  const formattedIncome = data.income
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(Number(data.income))
    : "";

  if (submitted) {
    const waText = encodeURIComponent(
      `Hello Dixit Lending Solution, I submitted my eligibility assessment for ${data.loanType || "Loan"}.\nName: ${data.name}\nAmount: ${formattedAmount}\nEmployment: ${data.employment}`
    );

    return (
      <section id="enquiry" className="section-pad bg-bg-warm relative overflow-hidden">
        <FloatingBackground variant="assessment" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-4xl shadow-3d-elevated p-8 sm:p-12 border border-brand-green/15 text-center">
            <div className="w-20 h-20 bg-brand-green/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-green">
              <CheckCircle2 size={42} />
            </div>
            <div className="inline-flex items-center gap-1.5 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-3.5 py-1 text-xs font-semibold text-brand-green uppercase tracking-wider mb-3">
              <Sparkles size={12} className="text-brand-gold" />
              <span>Assessment Completed</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-charcoal mb-2">
              Enquiry Received Successfully!
            </h3>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
              Thank you, <strong className="text-text-charcoal">{data.name}</strong>. A dedicated lending specialist from our Kharadi, Pune office will review your profile and contact you within 1 business hour.
            </p>

            {/* Profile summary card */}
            <div className="bg-bg-light-green rounded-3xl p-5 mb-8 text-left border border-brand-green/15 text-sm space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Your Requirement Summary
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-text-muted block text-xs">Product:</span>
                  <strong className="text-text-charcoal">{data.loanType}</strong>
                </div>
                <div>
                  <span className="text-text-muted block text-xs">Profile:</span>
                  <strong className="text-text-charcoal">{data.employment}</strong>
                </div>
                <div>
                  <span className="text-text-muted block text-xs">Requested Funding:</span>
                  <strong className="text-brand-green">{formattedAmount}</strong>
                </div>
                <div>
                  <span className="text-text-muted block text-xs">Contact Phone:</span>
                  <strong className="text-text-charcoal">+91 {data.mobile}</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/919096979328?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-green-dark transition-all duration-200 shadow-sm hover:shadow-card hover:-translate-y-0.5 text-sm"
              >
                <MessageCircle size={18} />
                Send via WhatsApp for Instant Priority
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl border border-gray-200 text-text-muted hover:text-text-charcoal text-sm font-semibold transition-colors hover:bg-gray-50"
              >
                Submit New Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="section-pad bg-bg-warm relative overflow-hidden">
      {/* Background Atmosphere */}
      <FloatingBackground variant="assessment" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Assessment Dashboard Container */}
        <div className="bg-gradient-to-br from-white via-bg-light-green/35 to-white rounded-3xl sm:rounded-4xl border border-brand-green/15 p-4 sm:p-8 lg:p-12 xl:p-14 shadow-card relative backdrop-blur-xs">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* LEFT COLUMN: Guided Value Proposition (5 cols on lg) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-4 shadow-2xs">
                  <Sparkles size={13} className="text-brand-gold" />
                  <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
                    Quick 60-Second Assessment
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl xl:text-5xl text-text-charcoal mb-4 leading-tight">
                  Find a Financial Solution{" "}
                  <span className="text-brand-green">That Fits You</span>
                </h2>
                <div className="gold-divider mb-5" />
                <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
                  Answer a few quick questions. We&apos;ll help you explore suitable options without upfront charges, matching your profile across premier banks and NBFCs in Pune.
                </p>

                {/* Trust & Benefit Points */}
                <div className="space-y-3.5 mb-8">
                  {[
                    "100% Free & No Upfront Charges",
                    "Personalized Matching Across 100+ Lenders",
                    "Zero Hard Inquiries During Initial Assessment",
                    "Dedicated Pune Advisor Support Until Disbursal",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-text-charcoal">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Live Onboarding Summary Card */}
              {step > 1 && (
                <div className="p-4 rounded-3xl bg-white/90 border border-brand-green/20 shadow-2xs text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-brand-green uppercase tracking-wider">
                    <span>Active Profile Progress</span>
                    <span className="text-text-light font-normal">Step {step} of 6</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {data.loanType && (
                      <span className="inline-flex items-center gap-1 bg-bg-light-green border border-brand-green/20 px-2.5 py-1 rounded-full text-brand-green font-semibold">
                        ✓ {data.loanType}
                      </span>
                    )}
                    {data.employment && (
                      <span className="inline-flex items-center gap-1 bg-bg-light-green border border-brand-green/20 px-2.5 py-1 rounded-full text-brand-green font-semibold">
                        ✓ {data.employment}
                      </span>
                    )}
                    {data.income && (
                      <span className="inline-flex items-center gap-1 bg-bg-light-green border border-brand-green/20 px-2.5 py-1 rounded-full text-brand-green font-semibold">
                        ✓ {formattedIncome}/mo
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Interactive Assessment Panel (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 border border-brand-green/15 shadow-3d-elevated relative overflow-hidden transition-all duration-300">
                {/* Panel Top Utility Bar */}
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full tracking-wider font-heading uppercase">
                        Step 0{step} / 0{totalSteps}
                      </span>
                      <span className="text-xs font-semibold text-text-charcoal hidden sm:inline-block">
                        Financial Solution Finder
                      </span>
                    </div>
                    <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full">
                      {progress}% complete
                    </span>
                  </div>

                  {/* Segmented 6-Step Progress Bar */}
                  <div className="grid grid-cols-6 gap-1.5 mt-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                      const isCompleteOrCurrent = i <= step;
                      return (
                        <div
                          key={i}
                          className="h-1.5 rounded-full overflow-hidden bg-gray-100 transition-all duration-300"
                        >
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              isCompleteOrCurrent
                                ? "bg-gradient-to-r from-brand-green to-brand-gold w-full"
                                : "w-0"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Guided Step Subtitle */}
                  <p className="text-[11px] text-text-light font-medium mt-2.5">
                    {GUIDANCE_LABELS[step] || "Let's find your solution"}
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-xs font-medium flex items-center gap-2">
                    <span className="text-sm">⚠️</span> {errorMessage}
                  </div>
                )}

                {/* STEP 1: 4 Selectable Product Tiles */}
                {step === 1 && (
                  <div>
                    <div className="mb-5">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-charcoal mb-1">
                        What are you looking for?
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm">
                        Select the primary financial facility you require assistance with.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      {STEP_1_OPTIONS.map(({ label, desc, tag, icon: Icon }) => {
                        const isSelected = data.loanType === label;
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => handleOptionSelect("loanType", label)}
                            className={`group relative text-left p-5 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-card-hover ${
                              isSelected
                                ? "border-brand-green bg-bg-light-green/70 ring-2 ring-brand-green/20 shadow-sm"
                                : "border-gray-200/80 bg-white hover:border-brand-green/40 hover:bg-bg-light-green/30"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3.5">
                                <div
                                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-108 shadow-2xs ${
                                    isSelected
                                      ? "bg-brand-green text-white"
                                      : "bg-bg-light-green text-brand-green group-hover:bg-brand-green group-hover:text-white"
                                  }`}
                                >
                                  <Icon size={22} className="stroke-[2.2]" />
                                </div>
                                <span className="text-[10px] font-bold text-brand-green bg-brand-green/8 border border-brand-green/18 px-2.5 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              </div>
                              <h4 className="font-heading font-bold text-base sm:text-lg text-text-charcoal group-hover:text-brand-green transition-colors">
                                {label}
                              </h4>
                              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                                {desc}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 mt-3 border-t border-gray-100">
                              <span className="text-[11px] font-semibold text-brand-green">
                                Select product
                              </span>
                              <div className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={13} />
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: Employment Classification */}
                {step === 2 && (
                  <div>
                    <div className="mb-5">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-charcoal mb-1">
                        Employment Classification
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm">
                        Helps us filter lending institutions according to underwriting criteria.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {STEP_2_OPTIONS.map(({ label, desc, tag, icon: Icon }) => {
                        const isSelected = data.employment === label;
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => handleOptionSelect("employment", label)}
                            className={`group text-left p-5 sm:p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-card-hover ${
                              isSelected
                                ? "border-brand-green bg-bg-light-green/70 ring-2 ring-brand-green/20 shadow-sm"
                                : "border-gray-200/80 bg-white hover:border-brand-green/40 hover:bg-bg-light-green/30"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <div
                                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-108 shadow-2xs ${
                                    isSelected
                                      ? "bg-brand-green text-white"
                                      : "bg-bg-light-green text-brand-green group-hover:bg-brand-green group-hover:text-white"
                                  }`}
                                >
                                  <Icon size={22} className="stroke-[2.2]" />
                                </div>
                                <span className="text-[10px] font-bold text-brand-green bg-brand-green/8 border border-brand-green/18 px-2.5 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              </div>
                              <h4 className="font-heading font-bold text-base sm:text-lg text-text-charcoal group-hover:text-brand-green transition-colors">
                                {label}
                              </h4>
                              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                                {desc}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                              <span className="text-[11px] font-semibold text-brand-green">
                                Choose profile
                              </span>
                              <div className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={13} />
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: Monthly Net Income */}
                {step === 3 && (
                  <div>
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-charcoal mb-1">
                        What is your monthly net income?
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm">
                        Enter your approximate take-home salary or net business surplus.
                      </p>
                    </div>

                    <div className="relative mb-4">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green font-extrabold text-2xl">
                        ₹
                      </span>
                      <input
                        type="number"
                        min="10000"
                        placeholder="e.g. 65000"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-text-charcoal font-semibold focus:border-brand-green outline-none text-xl transition-colors shadow-2xs"
                        value={data.income || ""}
                        onChange={(e) => setData({ ...data, income: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                        autoFocus
                      />
                    </div>

                    {/* Quick amount pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[30000, 50000, 75000, 100000, 150000].map((quickVal) => (
                        <button
                          key={quickVal}
                          type="button"
                          onClick={() => setData({ ...data, income: String(quickVal) })}
                          className="text-xs bg-gray-50 hover:bg-bg-light-green text-text-charcoal hover:text-brand-green border border-gray-200 hover:border-brand-green/30 px-3 py-1.5 rounded-xl font-medium transition-colors"
                        >
                          ₹{(quickVal / 1000).toFixed(0)}k/mo
                        </button>
                      ))}
                    </div>

                    {data.income && Number(data.income) > 0 && (
                      <p className="text-xs text-brand-green font-semibold mb-5 bg-bg-light-green p-2.5 rounded-xl border border-brand-green/15">
                        Selected: {formattedIncome} / month
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-2xl font-bold hover:bg-brand-green-dark transition-all duration-200 text-base shadow-sm hover:shadow-card hover:-translate-y-0.5"
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* STEP 4: Funding Amount Requirement */}
                {step === 4 && (
                  <div>
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-charcoal mb-1">
                        How much funding do you require?
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm">
                        Specify your desired loan sanction amount in Indian Rupees.
                      </p>
                    </div>

                    <div className="relative mb-4">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green font-extrabold text-2xl">
                        ₹
                      </span>
                      <input
                        type="number"
                        min="25000"
                        placeholder="e.g. 500000"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-text-charcoal font-semibold focus:border-brand-green outline-none text-xl transition-colors shadow-2xs"
                        value={data.amount || ""}
                        onChange={(e) => setData({ ...data, amount: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                        autoFocus
                      />
                    </div>

                    {/* Quick amount chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[100000, 300000, 500000, 1000000, 2500000].map((quickVal) => (
                        <button
                          key={quickVal}
                          type="button"
                          onClick={() => setData({ ...data, amount: String(quickVal) })}
                          className="text-xs bg-gray-50 hover:bg-bg-light-green text-text-charcoal hover:text-brand-green border border-gray-200 hover:border-brand-green/30 px-3 py-1.5 rounded-xl font-medium transition-colors"
                        >
                          ₹{(quickVal / 100000).toFixed(quickVal % 100000 === 0 ? 0 : 1)} Lakh
                        </button>
                      ))}
                    </div>

                    {data.amount && Number(data.amount) > 0 && (
                      <p className="text-xs text-brand-green font-semibold mb-5 bg-bg-light-green p-2.5 rounded-xl border border-brand-green/15">
                        Selected: {formattedAmount}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-2xl font-bold hover:bg-brand-green-dark transition-all duration-200 text-base shadow-sm hover:shadow-card hover:-translate-y-0.5"
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* STEP 5: Full Legal Name */}
                {step === 5 && (
                  <div>
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-charcoal mb-1">
                        What is your full legal name?
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm">
                        As registered on your PAN card or official bank KYC records.
                      </p>
                    </div>

                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="e.g. Rahul Patil"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-text-charcoal font-semibold focus:border-brand-green outline-none text-base transition-colors shadow-2xs"
                        value={data.name || ""}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                        autoFocus
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-2xl font-bold hover:bg-brand-green-dark transition-all duration-200 text-base shadow-sm hover:shadow-card hover:-translate-y-0.5"
                    >
                      Continue to Final Step <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* STEP 6: Mobile Number & Final Submission */}
                {step === 6 && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-charcoal mb-1">
                        Where should we send your options?
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm">
                        Enter your active 10-digit mobile number for WhatsApp &amp; SMS consultation.
                      </p>
                    </div>

                    <div className="relative mb-3">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-charcoal font-bold text-base">
                        +91
                      </span>
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-text-charcoal font-semibold focus:border-brand-green outline-none text-base tracking-wider transition-colors shadow-2xs"
                        value={data.mobile || ""}
                        onChange={(e) => setData({ ...data, mobile: e.target.value.replace(/\D/g, "") })}
                        autoFocus
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-text-light mb-6">
                      <Lock size={13} className="shrink-0 text-brand-green" />
                      <span>Your contact details are encrypted and kept strictly confidential.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-2xl font-bold hover:bg-brand-green-dark transition-all duration-200 shadow-card text-base disabled:opacity-60 hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> Matching Best Lenders...
                        </>
                      ) : (
                        <>Check My Loan Options →</>
                      )}
                    </button>
                  </form>
                )}

                {/* Back Navigation Button */}
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage("");
                      setStep((s) => s - 1);
                    }}
                    className="mt-5 w-full flex items-center justify-center gap-1 text-xs sm:text-sm text-text-muted hover:text-brand-green transition-colors py-1.5"
                  >
                    <ChevronLeft size={16} /> Back to Step 0{step - 1}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* TRUST STRIP UNDERNEATH */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {TRUST_METRICS.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="bg-white/85 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-gray-200/70 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 hover:bg-white hover:border-brand-green/20 transition-all duration-200"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-bg-light-green text-brand-green flex items-center justify-center shrink-0">
                <Icon size={18} className="stroke-[2.2]" />
              </div>
              <div>
                <p className="font-heading font-bold text-xs sm:text-sm text-text-charcoal leading-snug">{title}</p>
                <p className="text-[10px] sm:text-[11px] text-text-light mt-0.5">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DISCLAIMER CARD */}
        <div className="mt-6 flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/80 text-xs text-text-muted">
          <Info size={16} className="text-brand-green shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-text-charcoal">Disclaimer:</strong> Dixit Lending Solution is a dedicated loan assistance and financial guidance partner, not a lender. Sanctioning and interest rates are determined exclusively by the chosen bank/NBFC.
          </p>
        </div>
      </div>
    </section>
  );
}
