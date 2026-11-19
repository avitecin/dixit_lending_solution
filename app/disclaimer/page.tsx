import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Regulatory Disclosure | Dixit Lending Solution",
  description:
    "Important regulatory disclosures regarding Direct Selling Agent status, credit assessment independence, and lender terms.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-hero-gradient py-12 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal leading-tight mb-3">
            Disclaimer & Regulatory Notice
          </h1>
          <p className="text-text-muted text-sm max-w-xl mx-auto">
            Last Updated: August 2025 · Dixit Lending Solution, Pune
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-green text-text-charcoal space-y-6 text-sm sm:text-base leading-relaxed">
          <div className="p-6 bg-amber-50/60 border border-amber-200/80 rounded-3xl text-amber-900 text-sm">
            <strong>Important Notice:</strong> Dixit Lending Solution is a Direct Selling Agent (DSA) and loan advisory facilitator. We are not a Bank, Non-Banking Financial Company (NBFC), or financial institution registered to accept deposits or directly lend funds.
          </div>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">1. Non-Lender Status</h3>
          <p className="text-text-muted">
            Dixit Lending Solution acts strictly as an intermediary referral and sourcing partner connecting loan applicants with authorized financial institutions, banks, and licensed NBFCs. The final discretion to sanction, underwrite, approve, modify, or reject any credit or credit card application resides solely and exclusively with the respective lending bank or NBFC.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">2. No Guarantee of Approval</h3>
          <p className="text-text-muted">
            Dixit Lending Solution does not guarantee loan approval, sanction limits, specific interest rates, processing timelines, or waiver of lender charges. All metrics displayed across this website, including calculators and estimation tools, are purely indicative and informational.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">3. Interest Rates & Product Terms</h3>
          <p className="text-text-muted">
            Interest rates, processing fees, documentation fees, foreclosure charges, stamp duties, and repayment tenures are governed independently by respective lending partners and are subject to change without prior notice based on Reserve Bank of India (RBI) directives and lender internal risk policies.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">4. Upfront Charges</h3>
          <p className="text-text-muted">
            Dixit Lending Solution does not collect any upfront advisory fees or cash deposits from retail loan applicants for basic application routing. Any applicable loan processing fees or valuation charges must be paid directly to the financing institution via official lender receipts.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">5. Commercial Partnership Claims</h3>
          <p className="text-text-muted">
            References to &ldquo;100+ Bank &amp; NBFC Options&rdquo; signify the theoretical reach of our institutional network and distribution tie-ups across the financial ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
}
