"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FileText, Users, LayoutDashboard } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: null },
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/forms", label: "Forms", icon: FileText },
    { href: "/recipients", label: "Recipients", icon: Users },
  ];

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Flow1099</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <Button
                  key={link.href}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  <Link href={link.href} className="flex items-center gap-2">
                    {Icon && <Icon className="h-4 w-4" />}
                    {link.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
