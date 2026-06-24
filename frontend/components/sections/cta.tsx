"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function CTA() {
  const t = useTranslations("CTA");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[800px] rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
            {t("title")}{" "}
            <span className="text-gradient-orange">
              {t("highlight")}
            </span>
          </h2>

          <p className="mb-8 text-lg text-muted-foreground text-pretty">
            {t("description")}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                {t("contactButton")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border px-8 py-6 text-lg text-foreground hover:bg-secondary"
            >
              <a href="tel:+918770570764">
                {t("callButton")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
