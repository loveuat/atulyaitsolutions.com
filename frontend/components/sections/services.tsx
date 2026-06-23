"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function ServicesGrid() {
  const t = useTranslations("Services");

  const services = [
    {
      image: "/services/6.jpg",
      title: t("wordpress.title"),
      description: t("wordpress.description"),
      features: [
        t("wordpress.feature1"),
        t("wordpress.feature2"),
        t("wordpress.feature3"),
      ],
    },
    {
      image: "/services/4.jpg",
      title: t("shopify.title"),
      description: t("shopify.description"),
      features: [
        t("shopify.feature1"),
        t("shopify.feature2"),
        t("shopify.feature3"),
      ],
    },
    {
      image: "/services/3.jpg",
      title: t("woocommerce.title"),
      description: t("woocommerce.description"),
      features: [
        t("woocommerce.feature1"),
        t("woocommerce.feature2"),
        t("woocommerce.feature3"),
      ],
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="pb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t("heading")}{" "}
          <span className="text-gradient-orange">
            {t("headingHighlight")}
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="relative mb-6 h-52 overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mb-6 text-muted-foreground">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
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