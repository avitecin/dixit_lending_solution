import Hero from "@/components/home/Hero";
import ApplicationJourney from "@/components/home/ApplicationJourney";
import TrustStrip from "@/components/home/TrustStrip";
import ProductCards from "@/components/home/ProductCards";
import PersonalLoanFeature from "@/components/home/PersonalLoanFeature";
import EligibilityForm from "@/components/home/EligibilityForm";
import WhyUs from "@/components/home/WhyUs";
import HowItWorks from "@/components/home/HowItWorks";
import Calculators from "@/components/home/Calculators";
import CreditScore from "@/components/home/CreditScore";
import HomeLoanSection from "@/components/home/HomeLoanSection";
import BusinessLoanSection from "@/components/home/BusinessLoanSection";
import CreditCardSection from "@/components/home/CreditCardSection";
import Partners from "@/components/home/Partners";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Resources from "@/components/home/Resources";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ApplicationJourney />
      <TrustStrip />
      <ProductCards />
      <PersonalLoanFeature />
      <EligibilityForm />
      <WhyUs />
      <HowItWorks />
      <Calculators />
      <CreditScore />
      <HomeLoanSection />
      <BusinessLoanSection />
      <CreditCardSection />
      <Partners />
      <About />
      <Testimonials />
      <Resources />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
