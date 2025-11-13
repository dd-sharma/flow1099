import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { FileText } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-wrap h-16 items-center justify-between gap-4 px-6">
        <div className="flex flex-wrap items-center gap-8">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate cursor-pointer">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">Flow1099</span>
            </div>
          </Link>

          <nav className="hidden md:flex flex-wrap items-center gap-6">
            <Link href="/dashboard" data-testid="link-dashboard">
              <Button
                variant="ghost"
                className={isActive("/dashboard") ? "toggle-elevate toggle-elevated" : ""}
                data-testid="nav-dashboard"
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/forms" data-testid="link-forms">
              <Button
                variant="ghost"
                className={isActive("/forms") ? "toggle-elevate toggle-elevated" : ""}
                data-testid="nav-forms"
              >
                Forms
              </Button>
            </Link>
            <Link href="/recipients" data-testid="link-recipients">
              <Button
                variant="ghost"
                className={isActive("/recipients") ? "toggle-elevate toggle-elevated" : ""}
                data-testid="nav-recipients"
              >
                Recipients
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ThemeToggle />
          <Button variant="default" className="font-semibold" data-testid="button-start-free">
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
}
