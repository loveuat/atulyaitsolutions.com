"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "#how-it-works" },
  { name: "Our Services", href: "#what-we-offer" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
            <span className="text-[10px] text-muted-foreground tracking-wide">
              Analyze. Architect. Accelerate.
            </span>
          </div>
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
