import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_desk_with_laptop_24b0a9b3.png";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Let's Make Tax Season Easier
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            No more tax stress! We'll help you create, manage, and file 1099 forms in minutes—not hours. 
            Join 10,000+ businesses who've simplified their tax workflow.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              size="lg"
              variant="default"
              className="backdrop-blur-md text-lg font-semibold"
              data-testid="button-hero-cta"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-md bg-white/10 text-lg"
              data-testid="button-hero-demo"
            >
              See How It Works
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex flex-wrap items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="text-sm">SOC 2 Certified</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="text-sm">IRS Approved</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="text-sm">Trusted by 10,000+ Businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
