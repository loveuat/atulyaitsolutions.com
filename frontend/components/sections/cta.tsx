import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Build Your{" "}
            <span className="text-gradient-orange">Dream Team?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join 500+ companies that trust SmartWorking for their remote hiring needs.
            Get matched with top developers in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
              Start Hiring Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
