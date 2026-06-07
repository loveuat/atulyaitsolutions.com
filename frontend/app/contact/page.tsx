import {
  Navbar,
  Hero,
  ContactForm,
  Footer,
  CTA,
} from "@/components/sections";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ContactForm/>
      <CTA/>
     <Footer />
    </main>
  );
}

