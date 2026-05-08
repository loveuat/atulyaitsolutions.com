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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Hiring */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                Hiring in UK/US
              </h3>
              <div className="text-4xl font-bold text-foreground">
                £80k - £120k
                <span className="text-lg font-normal text-muted-foreground">/year</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { text: "High salary costs", included: false },
                { text: "Long hiring process (2-3 months)", included: false },
                { text: "Limited talent pool", included: false },
                { text: "Recruitment fees (15-25%)", included: false },
                { text: "Office costs & overheads", included: false },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SmartWorking */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary relative glow-orange">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              Recommended
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Hiring with SmartWorking
              </h3>
              <div className="text-4xl font-bold text-gradient-orange">
                £40k - £60k
                <span className="text-lg font-normal text-muted-foreground">/year</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { text: "Save up to 50% on costs", included: true },
                { text: "48-hour candidate matching", included: true },
                { text: "Global talent pool (500k+ devs)", included: true },
                { text: "No upfront recruitment fees", included: true },
                { text: "Fully remote, flexible teams", included: true },
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
