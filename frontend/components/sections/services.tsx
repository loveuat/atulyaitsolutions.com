"use client";

import Image from "next/image";
export const services = [
  {
    image: "/services/1.webp",
    title: "Website Maintenance Services",
    description:
      "Keep your website secure, updated, and performing at its best with proactive maintenance and monitoring.",
    features: [
      "Regular Website Updates",
      "Security Monitoring",
      "Performance Optimization",
    ],
  },
  {
    image: "/services/2.webp",
    title: "Website Management Services",
    description:
      "Complete website management solutions to ensure smooth operations and business continuity.",
    features: [
      "Content Management",
      "Website Monitoring",
      "Technical Support",
    ],
  },
  {
    image: "/services/3.jpg",
    title: "WooCommerce Maintenance Services",
    description:
      "Maintain and optimize your WooCommerce store for better performance, security, and conversions.",
    features: [
      "Store Updates",
      "Payment Gateway Support",
      "Performance Optimization",
    ],
  },
  {
    image: "/services/4.jpg",
    title: "Shopify Maintenance Services",
    description:
      "Professional Shopify maintenance to keep your website secure, fast, and up-to-date.",
    features: [
  "Product & Inventory Management",
  "Store Performance Optimization",
  "App Updates & Maintenance",

    ],
  },

   {
    image: "/services/6.jpg",
    title: "WordPress maintenance services",
    description:
      "Keep your WordPress website secure, updated, and running at peak performance.",
    features: [
    "Core, Plugin & Theme Updates",
  "Security & Backup Management",
  "Performance Optimization"
    ],
  },

  {
    image: "/services/5.jpg",
    title: "Website Support & Helpdesk Services",
    description:
      "Get reliable technical support and quick issue resolution whenever you need assistance.",
    features: [
      "24/7 Support",
      "Bug Fixes",
      "Technical Assistance",
    ],
  },
 
   {
    image: "/services/7.jpg",
    title: "React Website Maintenance Services",
    description:
      "Keep your React website secure, fast, and up-to-date with proactive maintenance, performance monitoring, and ongoing technical support.",
    features: [
  "Component & UI Maintenance",
  "Performance Optimization",
  "Bug Fixes & Troubleshooting",
    ],
  },

   {
    image: "/services/nodejs.png",
    title: "Node.js Website Maintenance Services",
    description:
      "Ensure your Node.js applications remain secure, scalable, and high-performing with regular updates, proactive monitoring, bug fixes, and ongoing technical support.",
    features: [
 "Node.js & Package Updates",
  "Performance Optimization",
  "Security Monitoring & Support"
    ],
  },

   {
    image: "/services/seo.webp",
    title: "SEO Maintenance Services",
    description:
      "Maintain and improve your website's search engine rankings with ongoing SEO monitoring, content optimization, technical audits, and performance tracking.",
    features: [
       "Keyword Ranking Monitoring",
       "On-Page SEO Optimization",
       "Monthly SEO Reporting"
    ],
  },
];

export  function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
             <h2 className="pb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
        Our <span className="text-gradient-orange">Service</span></h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative mb-6 h-52 overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-muted-foreground">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    {feature}
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

