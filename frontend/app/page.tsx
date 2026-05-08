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
  MissionSection,
  TimelineSection,
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
      <MissionSection />
      <TimelineSection />
      <PortfolioSection />
      <PricingComparison />
      <CaseStudies />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}
