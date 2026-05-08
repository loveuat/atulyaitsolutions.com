import { Users, Video, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Users,
    title: "Tailored Matching & Rigorous Vetting",
    description:
      "Our matching process starts after a call discussing your requirements with a UK-based expert. Candidates are evaluated through multiple interviews, rigorous assessments, and live coding challenges.",
    highlights: ["Technical expertise", "Communication skills", "Background screening"],
  },
  {
    step: 2,
    icon: Video,
    title: "Meet the Candidates",
    description:
      "Select candidates from your personalised shortlist to interview. Evaluate their technical skills and alignment with your team&apos;s goals and culture.",
    highlights: ["Choose perfect candidates", "Pay nothing until they join"],
  },
  {
    step: 3,
    icon: Rocket,
    title: "Onboarding",
    description:
      "We manage every aspect of the onboarding process, allowing you to focus on what matters - growing your business.",
    highlights: ["HR & payroll handled", "Productivity tools", "Simple monthly invoice"],
  },
  {
    step: 4,
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description:
      "Our dedicated account managers provide continuous support to ensure your team&apos;s success and satisfaction.",
    highlights: ["Dedicated support", "Regular check-ins", "Performance tracking"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From matching to ongoing support, we handle everything so you can focus on building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {item.step}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
