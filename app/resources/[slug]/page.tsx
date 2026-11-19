import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  readTime: string;
  published: string;
  summary: string;
  image: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

const articles: Record<string, ArticleData> = {
  "how-personal-loan-works": {
    slug: "how-personal-loan-works",
    category: "Personal Loans",
    title: "How Does a Personal Loan Work in India? A Complete Guide",
    readTime: "5 min read",
    published: "August 2025",
    image: "/images/res-personal-loan.jpg",
    summary:
      "A personal loan is an unsecured installment loan provided by banks and NBFCs based on your income, employment stability, and credit score.",
    content: [
      {
        heading: "What Is an Unsecured Personal Loan?",
        paragraphs: [
          "Unlike home or car loans where the purchased asset serves as collateral, a personal loan does not require hypothecation or pledging of assets. The lending decision is primarily underwritten on your repayment capacity, cash flows, and past credit discipline.",
          "Because the lender assumes higher credit risk on unsecured debt, interest rates are slightly higher than secured loans, generally ranging from 10.5% to 24% per annum depending on your CIBIL profile and employer category.",
        ],
      },
      {
        heading: "Key Factors Lenders Evaluate",
        paragraphs: [
          "Monthly Net Income: Indian banks usually look for a minimum take-home salary of ₹25,000 for urban centers like Pune and Mumbai.",
          "Credit Bureau Record: A score above 720 establishes strong probability of sanction and competitive interest rates.",
          "Fixed Obligation to Income Ratio (FOIR): Your aggregate monthly debt repayments (including the requested loan EMI) should ideally stay under 40% to 50% of your net monthly earnings.",
        ],
      },
      {
        heading: "Disbursal & Repayment Mechanism",
        paragraphs: [
          "Once sanctioned, the loan proceeds are directly credited via NEFT/RTGS into your primary salary or savings bank account. Repayments occur via automated monthly electronic clearing mandates (NACH / e-Mandate) on a set calendar date.",
        ],
      },
    ],
  },
  "personal-loan-documents": {
    slug: "personal-loan-documents",
    category: "Documentation",
    title: "Essential Document Checklist for Salaried & Self-Employed Borrowers",
    readTime: "4 min read",
    published: "August 2025",
    image: "/images/res-home-loan.jpg",
    summary:
      "Having your documentation organized speeds up file sanction and minimizes queries from bank credit underwriters.",
    content: [
      {
        heading: "Primary KYC Requirements",
        paragraphs: [
          "PAN Card: Mandatory for identity verification, credit bureau linkage, and financial compliance.",
          "Aadhaar Card / Voter ID / Passport: Official valid document confirming current residential address.",
        ],
      },
      {
        heading: "Income Verification for Salaried Applicants",
        paragraphs: [
          "Latest 3 Months Salary Slips: Demonstrating regular wage credits and employer details.",
          "Latest 6 Months Bank Statement: Primary salary account statement showing regular monthly salary credits.",
          "Latest Form 16 / Tax Returns: Establishing annual gross taxable compensation.",
        ],
      },
      {
        heading: "Documents for Self-Employed Professionals & MSMEs",
        paragraphs: [
          "Business Registration: GST registration certificate, Shop & Establishment license, or Partnership deed.",
          "Financial Statements: 2 years of audited P&L, balance sheets, and computation of income certified by a Chartered Accountant.",
          "12 Months Current Bank Account Statements.",
        ],
      },
    ],
  },
  "credit-score-loan": {
    slug: "credit-score-loan",
    category: "Credit Score",
    title: "How Does Your CIBIL Score Impact Loan Approval and Interest Rates?",
    readTime: "6 min read",
    published: "July 2025",
    image: "/images/res-credit-score.jpg",
    summary:
      "A deep dive into why credit bureaus score your financial past and how to elevate your score to 750+ for prime bank pricing.",
    content: [
      {
        heading: "The Role of Credit Bureaus in Underwriting",
        paragraphs: [
          "In India, four authorized credit bureaus operate under RBI regulations: TransUnion CIBIL, Equifax, Experian, and CRIF High Mark. When you submit a credit request, lenders pull your Credit Information Report (CIR) to review your 36-month repayment discipline.",
          "A credit score is a 3-digit numerical summary (ranging from 300 to 900) reflecting how responsibly you manage borrowed credit.",
        ],
      },
      {
        heading: "How Score Tiers Affect Your Loan Terms",
        paragraphs: [
          "750 to 900 (Excellent): Top-tier status. Lenders offer preferential benchmark rates and competitive processing fees.",
          "670 to 749 (Good): Eligible across most commercial banks with standard rack rates.",
          "Below 650: Traditional scheduled banks may reject or request a strong co-applicant. Sourcing is typically routed to specialized NBFCs.",
        ],
      },
      {
        heading: "How to Protect Your Score Before Applying",
        paragraphs: [
          "Do not submit 5 simultaneous applications to different lenders in the same week. Each inquiry logs a 'Hard Inquiry' on your bureau report.",
          "Consult with a trusted DSA like Dixit Lending Solution, who can pre-evaluate your profile against institutional policies before initiating formal bank logins.",
        ],
      },
    ],
  },
  "personal-loan-vs-credit-card": {
    slug: "personal-loan-vs-credit-card",
    category: "Financial Planning",
    title: "Personal Loan vs Credit Card: Which Financial Instrument Is Better?",
    readTime: "5 min read",
    published: "July 2025",
    image: "/images/res-card-vs-loan.jpg",
    summary:
      "Comparing revolving credit cards with fixed-tenure personal loans to identify the lowest-cost capital for your needs.",
    content: [
      {
        heading: "Revolving Credit vs Lump-Sum Debt",
        paragraphs: [
          "A credit card provides a recurring line of credit ideal for 30 to 45-day rolling spends. If you pay the full statement balance every billing cycle, interest cost is literally zero.",
          "However, revolving an unpaid credit card balance carries astronomical Annual Percentage Rates (APR) between 36% and 42% per year.",
        ],
      },
      {
        heading: "When a Personal Loan Is Far More Economical",
        paragraphs: [
          "If you need funding that spans longer than 3 to 6 months (such as medical care, home renovations, or consolidated debt), a structured personal loan at 11% to 16% APR is substantially cheaper than rolling credit card finance charges.",
          "Personal loans enforce fixed monthly principal amortization, preventing the borrower from falling into the revolving minimum-due credit trap.",
        ],
      },
    ],
  },
  "how-emi-calculated": {
    slug: "how-emi-calculated",
    category: "Financial Planning",
    title: "How Is Loan EMI Calculated? Understanding Reducing Balance Math",
    readTime: "4 min read",
    published: "June 2025",
    image: "/images/res-emi-math.jpg",
    summary:
      "Understanding the reducing balance formula and why initial EMIs consist primarily of interest rather than principal.",
    content: [
      {
        heading: "The Standard Reducing Balance Formula",
        paragraphs: [
          "Modern Indian banking operates exclusively on reducing-balance interest calculations rather than flat interest rates. The standard formula is:",
          "EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]",
          "Where P is the loan principal, r is the monthly interest rate (Annual Rate ÷ 1200), and n is the tenure in months.",
        ],
      },
      {
        heading: "The Amortization Schedule Dynamics",
        paragraphs: [
          "In the initial months of your loan, outstanding principal is highest, so the interest portion forms a large majority of your monthly installment.",
          "As principal is gradually amortized over time, the interest component decreases and principal repayment accelerates.",
        ],
      },
    ],
  },
  "loan-balance-transfer": {
    slug: "loan-balance-transfer",
    category: "Refinancing",
    title: "What Is a Loan Balance Transfer and When Does It Make Financial Sense?",
    readTime: "5 min read",
    published: "June 2025",
    image: "/images/res-balance-transfer.jpg",
    summary:
      "A complete guide on transferring active home loans or high-cost personal loans to save lakhs in interest outgo.",
    content: [
      {
        heading: "How Balance Transfer Operates",
        paragraphs: [
          "A balance transfer involves refinancing an active loan from your existing lender to a new bank or NBFC that offers lower interest rates, longer repayment tenures, or higher top-up capital.",
          "The new lender pays off your outstanding principal to your existing lender, receives original title deeds or closure NOCs, and starts a fresh, cheaper amortization schedule.",
        ],
      },
      {
        heading: "When Should You Consider a Transfer?",
        paragraphs: [
          "When interest rate difference is at least 0.50% to 1.00% lower.",
          "When you have at least 5 to 15 years of tenure remaining on a high-value home loan.",
          "When you require additional top-up funds at attractive mortgage rates rather than taking expensive unsecured loans.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Dixit Lending Solution`,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:underline"
          >
            <ArrowLeft size={14} /> Back to All Guides
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="bg-bg-light-green text-brand-green font-bold px-3 py-1 rounded-full border border-brand-green/20">
              {article.category}
            </span>
            <span className="text-text-light flex items-center gap-1">
              <Clock size={13} /> {article.readTime}
            </span>
            <span className="text-text-light">· {article.published}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-charcoal leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            {article.summary}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-[400px] w-full rounded-4xl overflow-hidden shadow-card mb-10 border border-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-text-charcoal text-sm sm:text-base leading-relaxed">
          {article.content.map((sec, i) => (
            <section key={i} className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-text-charcoal">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* In-article CTA banner */}
        <div className="mt-12 p-8 bg-brand-green-dark text-white rounded-4xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Need Personalized Guidance?
            </span>
            <h3 className="font-heading font-bold text-xl text-white">
              Speak to our loan specialists in Pune
            </h3>
            <p className="text-white/70 text-xs mt-1">
              Free consultation across 100+ bank &amp; NBFC options.
            </p>
          </div>
          <Link
            href="/#enquiry"
            className="shrink-0 bg-brand-gold text-brand-green-dark px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-brand-gold-light transition-colors inline-flex items-center gap-2"
          >
            Check Eligibility Now <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </div>
  );
}
