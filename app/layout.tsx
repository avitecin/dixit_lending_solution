import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import SmoothScroll from "@/components/providers/SmoothScroll";

export const viewport: Viewport = {
  themeColor: "#006B4F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dixitlendingsolution.com"),
  title: {
    default: "Dixit Lending Solution | Your Trusted Loan Assistance & Financial Guidance Partner",
    template: "%s | Dixit Lending Solution",
  },
  description:
    "Dixit Lending Solution is your trusted Loan Assistance & Financial Guidance Partner in Pune. Explore suitable Personal Loan, Home Loan, Business Loan and Credit Card options across leading banks and NBFCs with expert assistance.",
  keywords: [
    "personal loan Pune",
    "home loan Kharadi",
    "business loan Pune",
    "credit card",
    "loan assistance partner Pune",
    "loan assistance Pune",
    "loan balance transfer Pune",
    "Dixit Lending Solution",
  ],
  authors: [{ name: "Dixit Lending Solution" }],
  openGraph: {
    title: "Dixit Lending Solution | Premier Loan Assistance Partner in Pune",
    description: "From Application to Disbursal, We Are Your Lending Solution. Personalized Loan Guidance & Financial Services in Pune.",
    url: "https://dixitlendingsolution.com",
    siteName: "Dixit Lending Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Dixit Lending Solution Emblem",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dixit Lending Solution",
    description: "From Application to Disbursal, We Are Your Lending Solution.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://dixitlendingsolution.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Dixit Lending Solution",
  image: "https://dixitlendingsolution.com/logo.png",
  telephone: "+91-9096979328",
  email: "dixitlendingsolution@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "City Vista, B Wing, 4th Floor, Office No. 08, Kharadi",
    addressLocality: "Pune",
    postalCode: "411014",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  url: "https://dixitlendingsolution.com",
  priceRange: "Free Sourcing Consultation",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  serviceType: [
    "Personal Loans",
    "Home Loans",
    "Business Loans",
    "Loan Against Property",
    "Balance Transfer",
    "Credit Cards",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-text-charcoal bg-bg-warm antialiased flex flex-col min-h-screen">
        <SmoothScroll>
          <Header />
          <div className="flex-1 pb-20 lg:pb-0">{children}</div>
          <Footer />
          <MobileBottomBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
