import {
  Navbar,
  Hero,
  TrustedBy,
  TrustBadges,
  WhatWeOffer,
  HowItWorks,
  DeveloperCards,
  PricingComparison,
  CaseStudies,
  Testimonials,
  FAQSection,
  CTA,
  Footer,
  ValuesSection,
  /*TimelineSection,*/
  PortfolioSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <TrustBadges />
      <WhatWeOffer />
      <HowItWorks />
      <DeveloperCards />
      <ValuesSection />
      {/*<TimelineSection />*/}
      <PortfolioSection />
      <PricingComparison />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
