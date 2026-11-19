import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dixit Lending Solution",
  description:
    "Standard terms of use and service conditions for Dixit Lending Solution digital platforms and advisory services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-hero-gradient py-12 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal leading-tight mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-text-muted text-sm max-w-xl mx-auto">
            Dixit Lending Solution · Pune, Maharashtra
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-text-charcoal text-sm sm:text-base leading-relaxed">
          <h3 className="font-heading font-bold text-xl text-text-charcoal">1. Acceptance of Terms</h3>
          <p className="text-text-muted">
            By browsing our website, submitting an eligibility inquiry, using our loan calculators, or engaging our advisory services, you consent to these Terms &amp; Conditions in full.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">2. Nature of Services</h3>
          <p className="text-text-muted">
            Dixit Lending Solution operates as an independent loan referral and sourcing agent (DSA). We facilitate introductions between prospective borrowers and authorized institutional lenders. We do not issue loans, issue sanction letters in our own name, or act as lenders.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">3. Applicant Warranties</h3>
          <p className="text-text-muted">
            Applicants warrant that all documentation, income declarations, contact particulars, and employment records provided for lender evaluation are authentic, complete, and verifiable. Submission of forged or fraudulent documents constitutes a criminal offense under applicable Indian laws.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">4. Intellectual Property</h3>
          <p className="text-text-muted">
            All brand assets, logo trademarks, website UI designs, and informational content created for Dixit Lending Solution remain the exclusive intellectual property of Dixit Lending Solution.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">5. Governing Law &amp; Jurisdiction</h3>
          <p className="text-text-muted">
            Any disputes arising under these terms shall be subject exclusively to the jurisdiction of the competent courts in Pune, Maharashtra, India.
          </p>
        </div>
      </section>
    </div>
  );
}
