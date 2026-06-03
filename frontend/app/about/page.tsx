import {
  Navbar,
  Hero,
  CTA,
  Footer,
  TimelineSection,
} from "@/components/sections";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TimelineSection />
      <CTA />
      <Footer />
    </main>
  );
}
