import { Star, Award, Lightbulb, TrendingUp, Users, Cpu } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  highlights: string[];
  icon?: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    year: "2020",
    title: "The Beginning",
    highlights: [
      "Started with a simple vision: geographical limitations should not dictate access to talent.",
      "Bootstrapped since day one, focusing on connecting businesses with top global talent.",
    ],
    icon: <Star className="w-5 h-5" />,
  },
  {
    year: "2021",
    title: "Building Expertise",
    highlights: [
      "Scaled our internal team and built the expertise required to become leaders in our field.",
      "Significantly upgraded our vetting capabilities.",
      "Successfully provided over 50 developers to clients.",
      "Finished the year with 5 star reviews on Trustpilot.",
    ],
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    year: "2022",
    title: "Rapid Growth",
    highlights: [
      "50 clients + 100 developers and complete engineering teams working for our clients.",
      "Moved into our London HQ.",
      "Became a 'highly regarded' business on Glassdoor with a 4.8+ rating.",
    ],
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Excellence at Scale",
    highlights: [
      "Retention rate of placed developers increased to 96%.",
      "UK headcount grew by 70%.",
      "Reduced time to hire for clients to 10 days.",
      "Reached the 100-client milestone across the UK and EU.",
    ],
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "Innovation Era",
    highlights: [
      "ISO 27001 certification gained.",
      "Vetting over 35,000 candidates per month by leveraging the power of AI.",
      "150+ clients & total headcount of 400.",
      "Began building AI engineering solutions for clients.",
    ],
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "The Future",
    highlights: [
      "Processing over 100,000 candidates every month.",
      "Full-optimised Product, AI-enhanced to flex with demand.",
      "Launched Smart Working AI Academy for continuous training.",
      "Continued UK office growth, on track for 60% growth by 2025 end.",
    ],
    icon: <Lightbulb className="w-5 h-5" />,
  },
];

export function TimelineSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We discover, develop, and connect top tech talent with growing companies worldwide.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex items-start gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Year Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-pulse-glow text-primary-foreground">
                  {item.icon}
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-gradient">
                      {item.year}
                    </span>
                    <span className="text-lg font-semibold text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
