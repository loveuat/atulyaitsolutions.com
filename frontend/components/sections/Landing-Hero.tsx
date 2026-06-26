"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function LandingHero() {
  const t = useTranslations("LandingHero");

  const roles = [
    t("roles.webSolutions1"),
    t("roles.digitalPlatforms1"),
    t("roles.scalableProducts1"),
    t("roles.customSystems1"),
    t("roles.enterpriseWebsites1"),
    t("roles.modernApplications1"),
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Small Badge */}
          {/* <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
            {t("title1")}
          </div> */}

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            {t("subtitle1")}
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {t("heading1")}{" "}
            <span className="text-primary transition-all duration-300">
              {roles[currentRoleIndex]}
            </span>
          </h1>

          {/* Description */}
          {/* <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            {t("subheading1")}
          </p> */}

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-lg group"
          >
            <Link href="/contact" className="flex items-center gap-2">
              {t("cta1")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>{t("trust11")}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>{t("trust22")}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>{t("trust33")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}