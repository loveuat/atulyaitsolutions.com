import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingComparison() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Save Up to 50% on Hiring
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare the cost of hiring locally vs. with SmartWorking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Traditional Hiring max-w-4xl mx-auto */}
        
          
           <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                Starter Plan
              </h3>
              <div className="text-4xl font-bold text-foreground">
                $399 - $499
                <span className="text-lg font-normal text-muted-foreground">/year</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { text: "Responsive Website Design", included: true },
                { text: "Up to 5 Pages", included: true },
                { text: "Basic SEO Setup", included: true },
                { text: "Contact Form Integration", included: true },
                { text: "1 Month Support", included: true },
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

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                Professional Plan
              </h3>
              <div className="text-4xl font-bold text-foreground">
                $899 - $999
                <span className="text-lg font-normal text-muted-foreground">/year</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { text: "Up to 15 Custom Pages", included: true },
                { text: "Advanced UI/UX Design", included: true },
                { text: "CMS Integration", included: true },
                { text: "SEO Optimization", included: true },
                { text: "3 Month Support", included: true },
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
          <div className="bg-card rounded-2xl p-8 border-2 border-primary relative glow-orange">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              Recommended
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Enterprise Plan
              </h3>
              <div className="text-4xl font-bold text-gradient-orange">
                 $799 - $3000

                <span className="text-lg font-normal text-muted-foreground">/year</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { text: "Custom Web & Mobile Solutions", included: true },
                { text: "E-Commerce Development", included: true },
                { text: "API Integrations", included: true },
                { text: "Cloud Deployment", included: true },
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
        </div>
      </div>
    </section>
  );
}
