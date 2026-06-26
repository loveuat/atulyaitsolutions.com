import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";
export async function PricingComparison() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "IN";
const pricingMap: Record<
  string,
  {
    currency: string;
    starter: string;
    growth: string;
    enterprise:string;
    automation:string
  }
> = {
  // Asia
  IN: { currency: "INR", starter: "₹15k - ₹50k", growth: "₹50k - ₹1L+", enterprise: "₹1L - ₹3L+", automation: "₹3L+" },
  AE: { currency: "AED", starter: "AED 2,500+", growth: "AED 5,000+", enterprise: "AED 10,000+", automation: "AED 18,000+" },
  SG: { currency: "SGD", starter: "S$700+", growth: "S$1,500+", enterprise: "S$3,000+", automation: "S$5,000+" },
  JP: { currency: "JPY", starter: "¥80,000+", growth: "¥150,000+", enterprise: "¥300,000+", automation: "¥500,000+" },
  CN: { currency: "CNY", starter: "¥3,500+", growth: "¥10,000+", enterprise: "¥20,000+", automation: "¥35,000+" },
  HK: { currency: "HKD", starter: "HK$4,000+", growth: "HK$10,000+", enterprise: "HK$20,000+", automation: "HK$35,000+" },
  TW: { currency: "TWD", starter: "NT$18,000+", growth: "NT$40,000+", enterprise: "NT$80,000+", automation: "NT$150,000+" },
  KR: { currency: "KRW", starter: "₩800,000+", growth: "₩2,000,000+", enterprise: "₩4,000,000+", automation: "₩7,000,000+" },
  MY: { currency: "MYR", starter: "RM2,500+", growth: "RM6,000+", enterprise: "RM12,000+", automation: "RM20,000+" },
  TH: { currency: "THB", starter: "฿18,000+", growth: "฿45,000+", enterprise: "฿90,000+", automation: "฿160,000+" },
  VN: { currency: "VND", starter: "₫12,000,000+", growth: "₫30,000,000+", enterprise: "₫60,000,000+", automation: "₫100,000,000+" },
  ID: { currency: "IDR", starter: "Rp8,000,000+", growth: "Rp20,000,000+", enterprise: "Rp40,000,000+", automation: "Rp70,000,000+" },
  PH: { currency: "PHP", starter: "₱30,000+", growth: "₱75,000+", enterprise: "₱150,000+", automation: "₱250,000+" },
  PK: { currency: "PKR", starter: "PKR 150,000+", growth: "PKR 400,000+", enterprise: "PKR 800,000+", automation: "PKR 1,500,000+" },
  BD: { currency: "BDT", starter: "৳60,000+", growth: "৳150,000+", enterprise: "৳300,000+", automation: "৳500,000+" },
  LK: { currency: "LKR", starter: "Rs 150,000+", growth: "Rs 350,000+", enterprise: "Rs 700,000+", automation: "Rs 1,200,000+" },
  NP: { currency: "NPR", starter: "NPR 40,000+", growth: "NPR 100,000+", enterprise: "NPR 250,000+", automation: "NPR 400,000+" },

  // Middle East
  SA: { currency: "SAR", starter: "SAR2,000+", growth: "SAR5,000+", enterprise: "SAR10,000+", automation: "SAR18,000+" },
  QA: { currency: "QAR", starter: "QAR2,000+", growth: "QAR5,000+", enterprise: "QAR10,000+", automation: "QAR18,000+" },
  KW: { currency: "KWD", starter: "KD170+", growth: "KD450+", enterprise: "KD900+", automation: "KD1,500+" },
  OM: { currency: "OMR", starter: "OMR200+", growth: "OMR500+", enterprise: "OMR900+", automation: "OMR1,500+" },
  BH: { currency: "BHD", starter: "BD200+", growth: "BD500+", enterprise: "BD900+", automation: "BD1,500+" },
  IL: { currency: "ILS", starter: "₪2,000+", growth: "₪5,000+", enterprise: "₪10,000+", automation: "₪18,000+" },

  // Europe
  FR: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  DE: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  IT: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  ES: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  NL: { currency: "EUR", starter: "€800+", growth: "€2,000+", enterprise: "€3,500+", automation: "€6,000+" },
  BE: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  AT: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  IE: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  PT: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  DK: { currency: "DKK", starter: "DKK5,000+", growth: "DKK12,000+", enterprise: "DKK25,000+", automation: "DKK40,000+" },
  FI: { currency: "EUR", starter: "€700+", growth: "€1,500+", enterprise: "€3,000+", automation: "€5,000+" },
  PL: { currency: "PLN", starter: "PLN3,000+", growth: "PLN8,000+", enterprise: "PLN15,000+", automation: "PLN25,000+" },
  CH: { currency: "CHF", starter: "CHF900+", growth: "CHF2,500+", enterprise: "CHF5,000+", automation: "CHF8,000+" },
  NO: { currency: "NOK", starter: "NOK8,000+", growth: "NOK20,000+", enterprise: "NOK40,000+", automation: "NOK60,000+" },
  SE: { currency: "SEK", starter: "SEK8,000+", growth: "SEK20,000+", enterprise: "SEK40,000+", automation: "SEK60,000+" },

  // English-speaking Markets
  US: { currency: "USD", starter: "$500 - $1,000", growth: "$1,000 - $3,000", enterprise: "$3,000+", automation: "$5,000+" },
  CA: { currency: "CAD", starter: "CA$1,200+", growth: "CA$3,000+", enterprise: "CA$5,000+", automation: "CA$8,000+" },
  GB: { currency: "GBP", starter: "£800+", growth: "£2,000+", enterprise: "£4,000+", automation: "£6,000+" },
  AU: { currency: "AUD", starter: "A$1,500+", growth: "A$3,500+", enterprise: "A$6,000+", automation: "A$10,000+" },
  NZ: { currency: "NZD", starter: "NZ$1,500+", growth: "NZ$3,500+", enterprise: "NZ$6,000+", automation: "NZ$10,000+" },

  // Americas
  MX: { currency: "MXN", starter: "MX$10,000+", growth: "MX$25,000+", enterprise: "MX$50,000+", automation: "MX$80,000+" },
  BR: { currency: "BRL", starter: "R$3,000+", growth: "R$8,000+", enterprise: "R$15,000+", automation: "R$25,000+" },
  AR: { currency: "ARS", starter: "ARS600,000+", growth: "ARS1,500,000+", enterprise: "ARS3,000,000+", automation: "ARS5,000,000+" },
  CL: { currency: "CLP", starter: "CLP500,000+", growth: "CLP1,200,000+", enterprise: "CLP2,500,000+", automation: "CLP4,000,000+" },

  // Africa
  ZA: { currency: "ZAR", starter: "R10,000+", growth: "R25,000+", enterprise: "R50,000+", automation: "R80,000+" },
  EG: { currency: "EGP", starter: "E£25,000+", growth: "E£60,000+", enterprise: "E£120,000+", automation: "E£200,000+" },
  NG: { currency: "NGN", starter: "₦800,000+", growth: "₦2,000,000+", enterprise: "₦4,000,000+", automation: "₦7,000,000+" },
  KE: { currency: "KES", starter: "KSh70,000+", growth: "KSh180,000+", enterprise: "KSh350,000+", automation: "KSh600,000+" },

  // Oceania
  FJ: { currency: "FJD", starter: "FJ$1,200+", growth: "FJ$3,000+", enterprise: "FJ$6,000+", automation: "FJ$10,000+" },
};
   const pricing =
    pricingMap[country] || pricingMap.IN;
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Save Up to 20% on each Package
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Affordable, transparent pricing designed for startups, growing businesses, and enterprises. Choose the package that fits your goals and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Traditional Hiring max-w-4xl mx-auto */}
        
          
           <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-left mb-8">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
               Starter Plan
              </h3>
              <div className="text-4xl font-bold text-gradient-orange">
                {pricing.starter}
              </div>
              <p className="mt-2">*Perfect for small businesses*</p>
            </div>

            <ul className="space-y-4">
              {[
                { text: "Up to 10 Pages", included: true },
                { text: "Custom Design", included: true },
                { text: "Mobile Responsive", included: true },
                { text: "Contact Forms", included: true },
                { text: "Basic SEO Setup", included: true },
                { text: "Speed Optimization", included: true },
                { text: "Analytics Integration", included: true },
                { text: "Social Media Integration", included: true },
                { text: "CMS (if required)", included: true },
                { text: "30 Days Support", included: true },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
           
<div className="space-y-3">
  <p className= "mt-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
    🚀 Technology
  </p>

  <div className="flex flex-wrap gap-2">
    <span className="rounded-full border px-3 py-1 text-sm">
      WordPress
    </span>
    <span className="rounded-full border px-3 py-1 text-sm">
      Next.js
    </span>
    <span className="rounded-full border px-3 py-1 text-sm">
      Laravel
    </span>
    <span className="rounded-full border px-3 py-1 text-sm">
      React
    </span>
    <span className="rounded-full border px-3 py-1 text-sm">
      Static Site
    </span>
  </div>
</div>
              <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
              Get Started
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-left mb-8">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                Growth Plan
              </h3>
              <div className="text-4xl font-bold text-gradient-orange">
                {pricing.growth}
              </div>
            <p className="mt-2">*Perfect for growing businesses*</p>
            <p className="mt-0">Everything in Starter +</p>

            </div>

            <ul className="space-y-4">
              {[
                { text: "Unlimited Pages", included: true },
                { text: "Blog System", included: true },
                { text: "User Login/Registration", included: true },
                { text: "CRM Integration", included: true },
                { text: "API Integrations", included: true },
                { text: "Advanced SEO", included: true },
                { text: "Booking System", included: true },
                { text: "Dashboard/Admin Panel", included: true },
                { text: "Performance Optimization", included: true },
                { text: "Security Hardening", included: true },
                { text: "90 Days Support", included: true },
                { text: "24/7 Priority Assistance", included: true },
                { text: "Custom Feature Enhancements", included: true },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
              <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
              Get Started
            </Button>
          </div>

          {/* SmartWorking */}
        
            <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-left mb-8">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                Enterprise Plan
              </h3>
              <div className="text-4xl font-bold text-gradient-orange">
                {pricing.enterprise}
              </div>
            <p className="mt-2">*Perfect for large organizations*</p>
            <p className="mt-0">Everything in Business Pro +</p>

            </div>

            <ul className="space-y-4">
              {[
                { text: "SaaS Platform Development", included: true },
                { text: "Multi-Tenant Architecture", included: true },
                { text: "AI Integrations", included: true },
                { text: "Custom APIs", included: true },
                { text: "Mobile App Backend", included: true },
                { text: "Enterprise Security", included: true },
                { text: "Role & Permission System", included: true },
                { text: "Reporting & Analytics", included: true },
                { text: "CI/CD Setup", included: true },
                { text: "Scalability Planning", included: true },
                { text: "Dedicated Project Manager", included: true },
                { text: "24/7 Technical Support", included: true },
                { text: "Dedicated Project Manager", included: true },


              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
              <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
              Get Started
            </Button>
          </div>
            <div className="bg-card rounded-2xl p-8 border-2 border-primary relative glow-orange">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              Recommended
            </div>

            <div className="text-left mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                AI & Automation
              </h3>
              <div className="text-4xl font-bold text-gradient-orange">
                 {pricing.automation}
              </div>
              <p className="mt-2">*Perfect for established companies*</p>
              <p className="mt-2">Everything in Growth +</p>
            </div>

            <ul className="space-y-4">
              {[
             { text: "AI Agent Development", included: true },
{ text: "Custom GPT / AI Assistant", included: true },
{ text: "Multi-Agent AI Systems", included: true },
{ text: "RAG Knowledge Base Integration", included: true },
{ text: "AI Chatbot for Website & WhatsApp", included: true },
{ text: "Workflow Automation", included: true },
{ text: "Predictive Analytics", included: true },
{ text: "Intelligent Document Processing", included: true },
{ text: "CRM & ERP AI Integration", included: true },
{ text: "Voice AI Integration", included: true },
{ text: "Advanced Reporting Dashboard", included: true },
{ text: "Cloud Infrastructure Setup", included: true },
{ text: "Enterprise Security & Compliance", included: true },

              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
