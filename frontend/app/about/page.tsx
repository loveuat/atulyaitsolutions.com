import {
  Navbar,
  Hero,
  CTA,
  Footer,
  ValuesSection,
  MissionSection,
  TimelineSection,
  DeveloperCards,
  Testimonials,
} from "@/components/sections";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValuesSection />
      <MissionSection />
      <TimelineSection />
      <DeveloperCards />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
