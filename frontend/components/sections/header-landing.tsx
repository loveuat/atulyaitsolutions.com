"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {useLocale, useTranslations} from 'next-intl';


export function HeaderLanding() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const locale = useLocale();

  const navt = useTranslations("Navbar");

  const navLinks = [
    { name: navt("aboutUs"), href: "/about" },
    { name: navt("ourProducts"), href: "/ourproduct" },
    { name: navt("ourServices"), href: "/services" },
    { name: navt("contact"), href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-black dark:bg-white transition-colors">
                <img
                  src="/aislogo.webp"
                  alt="Atulya IT Solutions Logo"
                  loading="eager"
                  className="w-10 h-10 object-contain rounded-xl"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-lg text-foreground">
                  Atulya IT Solutions
                </span>
                <span className="text-xs text-muted-foreground">
                  Analyze. Architect. Accelerate.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            {/*<div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/${locale}${link.href}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div> */}

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />

              <Button
                onClick={() => setShowWhatsapp(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {navt("letsChat")}
              </Button>
            </div>

            {/* Mobile Menu */}
            {/*<div className="md:hidden flex items-center gap-2">
              <ThemeToggle />

              <button
                className="text-foreground"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div> */}
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
             {/* {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/${locale}${link.href}`}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))} */}

              <Button
                onClick={() => {
                  setShowWhatsapp(true);
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {navt("contactUs")}
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* WhatsApp Bubble and Popup code remains unchanged */}
    </>
  );
}
