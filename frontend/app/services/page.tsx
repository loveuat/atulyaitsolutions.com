import {
  Navbar,
  Hero,
  ServicesGrid,
  CTA,
 Footer,
} from "@/components/sections";

export default  function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <CTA/>
     <Footer />
    </main>
  );
}
