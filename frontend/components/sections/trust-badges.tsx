import { Star, Shield, Award } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Trustpilot */}
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border">
            <Star className="w-8 h-8 text-green-500 fill-green-500" />
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trustpilot <span className="text-foreground font-semibold">4.7</span>
              </span>
            </div>
          </div>

          {/* ISO 27001 */}
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <span className="text-foreground font-semibold">ISO 27001</span>
              <p className="text-xs text-muted-foreground">Certified</p>
            </div>
          </div>

          {/* Glassdoor */}
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border">
            <Award className="w-8 h-8 text-green-500" />
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Glassdoor <span className="text-foreground font-semibold">4.9</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
