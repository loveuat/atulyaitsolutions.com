import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Web Development Company | WordPress, Next.js & SEO Services",
  description:
    "Atulya IT Solutions provides Web Development, WordPress Development, Next.js Development, SEO Services, Website Maintenance and Digital Marketing solutions.",
};

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
