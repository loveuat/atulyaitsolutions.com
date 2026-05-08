import {
  Code,
  Smartphone,
  Search,
  ShoppingCart,
  LaptopMinimal,
} from "lucide-react";

const services = [
  {
    step: 1,
    icon: Code,
    title: "Web Apps Development",
    description:
      "Transform your business with powerful, custom-built web applications. We develop scalable, and user-friendly web apps tailored to your unique needs. From idea to deployment, our solutions streamline workflows, enhance user engagement & digital growth.",
    highlights: [
      "Technical expertise",
      "Communication skills",
      "Background screening",
    ],
  },
  {
    step: 2,
    icon: Smartphone,
    title: "Mobile Apps Development",
    description:
      "Bring your ideas to life with our custom mobile app development services. high-performance apps for iOS and Android that deliver seamless user experiences. Whether it&apos;s a startup or a full-scale enterprise, we create apps that engage, scale, and succeed.",
    highlights: ["Choose perfect candidates", "Pay nothing until they join"],
  },
  {
    step: 3,
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online visibility and drive targeted traffic with our expert SEO and digital marketing services. From keyword optimization and content strategy to paid campaigns and analytics, we help your brand rank higher and convert better.",
    highlights: [
      "HR & payroll handled",
      "Productivity tools",
      "Simple monthly invoice",
    ],
  },
  {
    step: 4,
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Unlock the full potential of online selling with our custom eCommerce solutions. From seamless user experience to secure payment integration, we build scalable, and conversion-driven stores. Whether you&apos;re launching a new brand we craft eCommerce platforms.",
    highlights: [
      "Dedicated support",
      "Regular check-ins",
      "Performance tracking",
    ],
  },
  {
    step: 5,
    icon: LaptopMinimal,
    title: "Technical Education",
    description:
      "Our Tech Education program bridges the gap between theory and real-world application. We focus on hands-on learning, industry-relevant tools, and project-based training to equip you with job-ready skills.",
    highlights: [
      "Dedicated support",
      "Regular check-ins",
      "Performance tracking",
    ],
  },
];

export function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Services designed to elevate your business beyond expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.step}
              className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
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
