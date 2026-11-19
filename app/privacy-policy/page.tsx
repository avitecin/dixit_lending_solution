import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dixit Lending Solution",
  description:
    "Learn how Dixit Lending Solution collects, protects, and handles applicant data in full compliance with Indian Information Technology regulations.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-hero-gradient py-12 border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-text-muted text-sm max-w-xl mx-auto">
            Dixit Lending Solution · City Vista, Kharadi, Pune – 411014
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-text-charcoal text-sm sm:text-base leading-relaxed">
          <h3 className="font-heading font-bold text-xl text-text-charcoal">1. Information Collection</h3>
          <p className="text-text-muted">
            When you complete an enquiry form or communicate with our representatives, we may collect your name, mobile number, email address, city of residence, employment type, monthly income band, and desired loan parameters.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">2. Purpose of Processing</h3>
          <p className="text-text-muted">
            Your information is collected solely to evaluate your loan eligibility, connect you with suitable banking or NBFC partners, coordinate necessary documentation verification, and communicate application status updates.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">3. Sharing with Authorized Institutions</h3>
          <p className="text-text-muted">
            With your explicit consent, your contact and financial particulars are forwarded only to vetted banking institutions and NBFCs where an active loan application is being initiated. We do not sell or trade customer contact details to third-party telemarketers.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">4. Data Security</h3>
          <p className="text-text-muted">
            We maintain administrative, technical, and physical safeguards designed to protect personal information against accidental, unlawful, or unauthorized destruction, loss, alteration, access, or disclosure.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-charcoal">5. Contact Regarding Privacy</h3>
          <p className="text-text-muted">
            If you have questions regarding your data or wish to withdraw consent, please contact us at:{" "}
            <a href="mailto:dixitlendingsolution@gmail.com" className="text-brand-green font-semibold">
              dixitlendingsolution@gmail.com
            </a>{" "}
            or write to our office in Kharadi, Pune.
          </p>
        </div>
      </section>
    </div>
  );
}
