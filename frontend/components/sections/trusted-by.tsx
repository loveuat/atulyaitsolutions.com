const companiesRow1 = [
  "Keyloop",
  "Logistics UK",
  "i6",
  "TechFlow",
  "DataCore",
  "CloudNine",
  "DevStack",
  "InnovateTech",
];

const companiesRow2 = [
  "StartupHub",
  "FinanceFlow",
  "HealthTech",
  "EduPro",
  "RetailMax",
  "AutoDrive",
  "GreenEnergy",
  "SmartCity",
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by leading companies
        </h3>
      </div>

      <div className="space-y-6">
        {/* Row 1 - Left to Right */}
        <div className="relative overflow-hidden group">
          <div 
            className="flex animate-marquee hover:[animation-play-state:paused]"
            style={{ width: "max-content", animationDuration: "60s" }}
          >
            {[...companiesRow1, ...companiesRow1, ...companiesRow1, ...companiesRow1].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-8 py-4 bg-card rounded-lg border border-border
                           text-xl font-semibold text-muted-foreground/70
                           hover:text-primary hover:border-primary/50 transition-all duration-300 whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative overflow-hidden group">
          <div 
            className="flex animate-marquee-reverse hover:[animation-play-state:paused]"
            style={{ width: "max-content", animationDuration: "70s" }}
          >
            {[...companiesRow2, ...companiesRow2, ...companiesRow2, ...companiesRow2].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-8 py-4 bg-card rounded-lg border border-border
                           text-xl font-semibold text-muted-foreground/70
                           hover:text-primary hover:border-primary/50 transition-all duration-300 whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
