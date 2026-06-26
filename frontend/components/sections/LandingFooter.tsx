"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function LandingFooter() {
  const t = useTranslations("LandingFooter");

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              {t("company")}
            </h2>

            <p className="mt-4 max-w-xl text-gray-400 leading-relaxed">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-gray-300">
                <Users className="h-4 w-4 text-orange-500" />
                {t("trust.experts")}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-gray-300">
                <ShieldCheck className="h-4 w-4 text-orange-500" />
                {t("trust.nda")}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-gray-300">
                <Clock3 className="h-4 w-4 text-orange-500" />
                {t("trust.delivery")}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-2xl font-semibold text-white">
              {t("heading")}
            </h3>

            <p className="mt-3 text-gray-400">
              {t("subheading")}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-orange-500" />
                info@atulyaitsolutions.com
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-orange-500" />
                +91 7987408207
              </div>
            </div>

            <Link
              href="#contact-form"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-orange-500 px-6 font-semibold text-white transition hover:bg-orange-600"
            >
              {t("cta")}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6">
          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>{t("copyright")}</p>

            <div className="flex gap-6">
              <Link href="/privacy-policy">
                {t("privacy")}
              </Link>

              <Link href="/terms-of-service">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
