"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CalcTab = "personal" | "home" | "eligibility" | "prepayment";

function calculateEMI(principal: number, ratePerAnnum: number, tenureMonths: number): number {
  if (principal <= 0 || tenureMonths <= 0) return 0;
  if (ratePerAnnum <= 0) return Math.round(principal / tenureMonths);
  const r = ratePerAnnum / 1200;
  const emi = (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
  return isNaN(emi) ? 0 : Math.round(emi);
}

function formatINR(val: number): string {
  if (isNaN(val) || val < 0) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);
}

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<CalcTab>("personal");

  // Personal Loan Defaults
  const [plAmount, setPlAmount] = useState(500000);
  const [plRate, setPlRate] = useState(11.5);
  const [plTenure, setPlTenure] = useState(36);

  // Home Loan Defaults
  const [hlAmount, setHlAmount] = useState(4500000);
  const [hlRate, setHlRate] = useState(8.5);
  const [hlTenure, setHlTenure] = useState(240); // 20 years

  // Eligibility Defaults
  const [income, setIncome] = useState(65000);
  const [existingEMI, setExistingEMI] = useState(10000);
  const [eligTenure, setEligTenure] = useState(48);

  // Prepayment / Balance Transfer
  const [btAmount, setBtAmount] = useState(3000000);
  const [btCurrentRate, setBtCurrentRate] = useState(10.5);
  const [btNewRate, setBtNewRate] = useState(8.65);
  const [btTenure, setBtTenure] = useState(180);

  // Personal Loan Calculations
  const plEMI = calculateEMI(plAmount, plRate, plTenure);
  const plTotalPayment = plEMI * plTenure;
  const plTotalInterest = Math.max(0, plTotalPayment - plAmount);
  const plInterestPct = plTotalPayment > 0 ? Math.round((plTotalInterest / plTotalPayment) * 100) : 0;

  // Home Loan Calculations
  const hlEMI = calculateEMI(hlAmount, hlRate, hlTenure);
  const hlTotalPayment = hlEMI * hlTenure;
  const hlTotalInterest = Math.max(0, hlTotalPayment - hlAmount);
  const hlInterestPct = hlTotalPayment > 0 ? Math.round((hlTotalInterest / hlTotalPayment) * 100) : 0;

  // Eligibility Calculations (standard 50% FOIR cap)
  const disposableIncome = Math.max(0, income - existingEMI);
  const maxAllowableEMI = Math.round(disposableIncome * 0.5);
  const benchmarkEMIFor1Lakh = calculateEMI(100000, 11, eligTenure);
  const estimatedEligibleAmount =
    benchmarkEMIFor1Lakh > 0 ? Math.round((maxAllowableEMI / benchmarkEMIFor1Lakh) * 100000) : 0;

  // Balance Transfer Savings
  const oldEMI = calculateEMI(btAmount, btCurrentRate, btTenure);
  const newEMI = calculateEMI(btAmount, btNewRate, btTenure);
  const monthlySavings = Math.max(0, oldEMI - newEMI);
  const totalLifetimeSavings = monthlySavings * btTenure;

  return (
    <section id="calculators" className="section-pad bg-bg-light-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/25 rounded-full px-4 py-1.5 mb-3">
            <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">
              Fintech Decision Suite
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal mb-3">
            Plan Your Finances <span className="text-brand-green">With Exact Precision</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Instant mathematical calculations using standard reducing-balance formulas. Adjust parameters to see immediate changes.
          </p>
        </div>

        {/* 4 Interactive Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto hide-scrollbar pb-2">
          <div className="bg-white rounded-2xl p-1.5 border border-gray-200/80 shadow-sm inline-flex gap-1">
            {[
              { id: "personal", label: "Personal Loan EMI" },
              { id: "home", label: "Home Loan EMI" },
              { id: "eligibility", label: "Eligibility Estimator" },
              { id: "prepayment", label: "Refinancing Savings" },
            ].map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id as CalcTab)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === id
                    ? "bg-brand-green text-white shadow-sm"
                    : "text-text-muted hover:text-brand-green hover:bg-bg-light-green"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-4xl shadow-3d-elevated border border-gray-100 overflow-hidden">
          {/* TAB 1: PERSONAL LOAN */}
          {activeTab === "personal" && (
            <div className="grid md:grid-cols-12">
              {/* Inputs (7 cols) */}
              <div className="p-6 sm:p-8 md:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Loan Amount Required
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {formatINR(plAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="4000000"
                    step="25000"
                    value={plAmount}
                    onChange={(e) => setPlAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>₹50,000</span>
                    <span>₹40 Lakhs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Annual Interest Rate (%)
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {plRate}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="9.5"
                    max="28"
                    step="0.25"
                    value={plRate}
                    onChange={(e) => setPlRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>9.5%</span>
                    <span>28%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Loan Tenure
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {plTenure} Months ({Math.round((plTenure / 12) * 10) / 10} Yrs)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="72"
                    step="6"
                    value={plTenure}
                    onChange={(e) => setPlTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>12 Months</span>
                    <span>72 Months</span>
                  </div>
                </div>

                {/* Principal vs Interest ratio bar */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-muted">Principal: {100 - plInterestPct}%</span>
                    <span className="text-brand-gold font-bold">Interest: {plInterestPct}%</span>
                  </div>
                  <div className="h-2 bg-brand-green rounded-full overflow-hidden flex">
                    <div style={{ width: `${100 - plInterestPct}%` }} className="bg-brand-green h-full" />
                    <div style={{ width: `${plInterestPct}%` }} className="bg-brand-gold h-full" />
                  </div>
                </div>
              </div>

              {/* Result Panel (5 cols) */}
              <div className="bg-brand-green-dark text-white p-6 sm:p-8 md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-2">
                    Estimated Monthly Repayment
                  </span>
                  <p className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-gold mb-1">
                    {formatINR(plEMI)}
                  </p>
                  <p className="text-[11px] text-white/50 mb-6">Calculated via standard reducing-balance</p>

                  <div className="space-y-3 text-xs sm:text-sm border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-white/70">Principal Amount:</span>
                      <strong className="text-white font-heading">{formatINR(plAmount)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Total Interest Outgo:</span>
                      <strong className="text-brand-gold font-heading">{formatINR(plTotalInterest)}</strong>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 font-semibold">
                      <span className="text-white">Total Repayment:</span>
                      <strong className="text-white font-heading">{formatINR(plTotalPayment)}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/#enquiry"
                    className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark py-3.5 rounded-2xl font-bold hover:bg-brand-gold-light transition-colors text-sm shadow-card"
                  >
                    Apply for This Loan <ArrowRight size={16} />
                  </Link>
                  <p className="text-[10px] text-white/40 mt-3 text-center leading-relaxed">
                    *Indicative calculation only. Rates subject to lender terms.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HOME LOAN */}
          {activeTab === "home" && (
            <div className="grid md:grid-cols-12">
              <div className="p-6 sm:p-8 md:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Home Loan Amount
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {formatINR(hlAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="20000000"
                    step="100000"
                    value={hlAmount}
                    onChange={(e) => setHlAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>₹5 Lakhs</span>
                    <span>₹2 Crores</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Interest Rate (%)
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {hlRate}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="14"
                    step="0.1"
                    value={hlRate}
                    onChange={(e) => setHlRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>7.5%</span>
                    <span>14%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Tenure (Years)
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {hlTenure / 12} Years ({hlTenure} Months)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="360"
                    step="12"
                    value={hlTenure}
                    onChange={(e) => setHlTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>5 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-muted">Principal: {100 - hlInterestPct}%</span>
                    <span className="text-brand-gold font-bold">Interest: {hlInterestPct}%</span>
                  </div>
                  <div className="h-2 bg-brand-green rounded-full overflow-hidden flex">
                    <div style={{ width: `${100 - hlInterestPct}%` }} className="bg-brand-green h-full" />
                    <div style={{ width: `${hlInterestPct}%` }} className="bg-brand-gold h-full" />
                  </div>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white p-6 sm:p-8 md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-2">
                    Estimated Home Loan EMI
                  </span>
                  <p className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-gold mb-1">
                    {formatINR(hlEMI)}
                  </p>
                  <p className="text-[11px] text-white/50 mb-6">Subject to property valuation &amp; lender approval</p>

                  <div className="space-y-3 text-xs sm:text-sm border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-white/70">Principal:</span>
                      <strong className="text-white font-heading">{formatINR(hlAmount)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Total Interest:</span>
                      <strong className="text-brand-gold font-heading">{formatINR(hlTotalInterest)}</strong>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 font-semibold">
                      <span className="text-white">Total Payment:</span>
                      <strong className="text-white font-heading">{formatINR(hlTotalPayment)}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/#enquiry"
                    className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark py-3.5 rounded-2xl font-bold hover:bg-brand-gold-light transition-colors text-sm shadow-card"
                  >
                    Check Home Loan Eligibility <ArrowRight size={16} />
                  </Link>
                  <p className="text-[10px] text-white/40 mt-3 text-center leading-relaxed">
                    *Excludes legal verification and stamp duties.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ELIGIBILITY ESTIMATOR */}
          {activeTab === "eligibility" && (
            <div className="grid md:grid-cols-12">
              <div className="p-6 sm:p-8 md:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Net Monthly Take-Home Salary
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {formatINR(income)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="500000"
                    step="5000"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>₹15,000</span>
                    <span>₹5 Lakhs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Existing Active Monthly EMIs
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {formatINR(existingEMI)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="2500"
                    value={existingEMI}
                    onChange={(e) => setExistingEMI(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>₹0 (No debts)</span>
                    <span>₹2 Lakhs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Desired Loan Tenure
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {eligTenure} Months ({Math.round((eligTenure / 12) * 10) / 10} Yrs)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="240"
                    step="12"
                    value={eligTenure}
                    onChange={(e) => setEligTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>12 Months</span>
                    <span>20 Years</span>
                  </div>
                </div>

                <div className="p-4 bg-bg-light-green rounded-2xl border border-brand-green/15 text-xs text-text-muted leading-relaxed">
                  💡 <strong>FOIR Guideline:</strong> Most Indian lenders cap maximum debt obligations at 50% of your disposable monthly income.
                </div>
              </div>

              <div className="bg-brand-green-dark text-white p-6 sm:p-8 md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-2">
                    Estimated Borrowing Capacity
                  </span>
                  <p className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-gold mb-1">
                    {formatINR(estimatedEligibleAmount)}
                  </p>
                  <p className="text-[11px] text-white/50 mb-6">*Indicative capacity estimate</p>

                  <div className="space-y-3 text-xs sm:text-sm border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-white/70">Disposable Income:</span>
                      <strong className="text-white font-heading">{formatINR(disposableIncome)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Max Allowable EMI:</span>
                      <strong className="text-brand-gold font-heading">{formatINR(maxAllowableEMI)} / mo</strong>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2">
                      <span className="text-white">Existing Obligations:</span>
                      <strong className="text-white/80 font-heading">{formatINR(existingEMI)}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/#enquiry"
                    className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark py-3.5 rounded-2xl font-bold hover:bg-brand-gold-light transition-colors text-sm shadow-card"
                  >
                    Confirm My Bank Eligibility <ArrowRight size={16} />
                  </Link>
                  <p className="text-[10px] text-white/40 mt-3 text-center leading-relaxed">
                    *Eligibility is indicative only and subject to lender assessment.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REFINANCING / BALANCE TRANSFER */}
          {activeTab === "prepayment" && (
            <div className="grid md:grid-cols-12">
              <div className="p-6 sm:p-8 md:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Existing Outstanding Loan
                    </label>
                    <span className="font-heading font-extrabold text-brand-green text-lg">
                      {formatINR(btAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="15000000"
                    step="50000"
                    value={btAmount}
                    onChange={(e) => setBtAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[11px] text-text-light mt-1.5">
                    <span>₹2 Lakhs</span>
                    <span>₹1.5 Crores</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-text-muted block mb-1.5">
                      Current Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      value={btCurrentRate}
                      onChange={(e) => setBtCurrentRate(Number(e.target.value))}
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm font-semibold text-text-charcoal focus:border-brand-green outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-green block mb-1.5">
                      New Offer Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      value={btNewRate}
                      onChange={(e) => setBtNewRate(Number(e.target.value))}
                      className="w-full p-3 border-2 border-brand-green/40 rounded-xl text-sm font-bold text-brand-green bg-bg-light-green focus:border-brand-green outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Remaining Tenure: {btTenure} Months
                    </label>
                  </div>
                  <input
                    type="range"
                    min="24"
                    max="300"
                    step="12"
                    value={btTenure}
                    onChange={(e) => setBtTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                </div>
              </div>

              <div className="bg-brand-green-dark text-white p-6 sm:p-8 md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-2">
                    Estimated Lifetime Interest Savings
                  </span>
                  <p className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-gold mb-1">
                    {formatINR(totalLifetimeSavings)}
                  </p>
                  <p className="text-[11px] text-white/50 mb-6">By switching to a more competitive rate</p>

                  <div className="space-y-3 text-xs sm:text-sm border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-white/70">Current Monthly EMI:</span>
                      <strong className="text-white/80 font-heading">{formatINR(oldEMI)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">New Reduced EMI:</span>
                      <strong className="text-brand-green-light font-heading text-emerald-400">{formatINR(newEMI)}</strong>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 font-semibold">
                      <span className="text-white">Monthly Cash Savings:</span>
                      <strong className="text-brand-gold font-heading">{formatINR(monthlySavings)} / mo</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/#enquiry"
                    className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark py-3.5 rounded-2xl font-bold hover:bg-brand-gold-light transition-colors text-sm shadow-card"
                  >
                    Switch &amp; Save Now <ArrowRight size={16} />
                  </Link>
                  <p className="text-[10px] text-white/40 mt-3 text-center leading-relaxed">
                    *Savings are indicative. Lender switching charges may apply.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-text-muted leading-relaxed">
            <strong className="text-text-charcoal">Compliance Disclosure:</strong> Dixit Lending Solution does not guarantee loan approvals or fixed interest rate concessions. All calculations are mathematical approximations and do not constitute a credit sanction offer.
          </p>
        </div>
      </div>
    </section>
  );
}
