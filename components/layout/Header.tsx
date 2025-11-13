"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
            data-testid="link-home"
          >
            <Image
              src="/flow1099-logo.png"
              alt="Flow1099"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-primary">
              Flow1099
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              asChild
              data-testid="button-sign-in"
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button
              asChild
              data-testid="button-start-trial"
            >
              <Link href="/sign-up">Start Free Trial</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className="w-full justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
              <Button
                variant="ghost"
                asChild
                className="w-full"
                data-testid="button-mobile-sign-in"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button
                asChild
                className="w-full"
                data-testid="button-mobile-start-trial"
              >
                <Link href="/sign-up">Start Free Trial</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
