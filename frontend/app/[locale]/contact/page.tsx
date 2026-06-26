import {
  Navbar,
  Hero,
  LandingForm,
  Footer,
  CTA,
} from "@/components/sections";

export const metadata = {
  title: "Contact Us | Get Free Consultation",
  description:
    "Contact Atulya IT Solutions for Web Development, WordPress, Next.js, SEO and Website Maintenance services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LandingForm/>
      <CTA/>
     <Footer />
    </main>
  );
}
