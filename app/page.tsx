"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Layers,
  DollarSign,
  FileCheck,
  Bell,
  PlayCircle,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const [email, setEmail] = useState("");
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Animated Gradient Mesh */}
      <section ref={heroRef} className="relative overflow-hidden gradient-mesh noise-overlay min-h-[90vh] flex items-center">
        <div className="container relative mx-auto px-4 sm:px-6 py-32 z-10">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUpVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
              style={{ color: 'white' }}
              suppressHydrationWarning
              data-testid="text-hero-headline"
            >
              Tax compliance that doesn't interrupt your{" "}
              <span className="inline-block float">
                creative flow
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariants}
              className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto font-medium"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              suppressHydrationWarning
              data-testid="text-hero-subheadline"
            >
              Stop losing billable hours to 1099 paperwork. Manage freelancer taxes as beautifully as you manage projects.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
              suppressHydrationWarning
            >
              <Button
                size="lg"
                className="w-full sm:w-auto btn-glossy"
                asChild
                data-testid="button-hero-start-trial"
              >
                <Link href="/sign-up">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 border-white/30 backdrop-blur-sm"
                style={{ color: 'white' }}
                suppressHydrationWarning
                asChild
                data-testid="button-hero-watch-demo"
              >
                <Link href="#demo">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch 2-min Demo
                </Link>
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="text-sm"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              suppressHydrationWarning
              data-testid="text-hero-early-access"
            >
              Join 47 agencies on the early access list
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism Cards */}
      <section ref={statsRef} className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-20"
            data-testid="text-problem-title"
          >
            Built for how creative agencies actually work
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8"
          >
            <motion.div variants={fadeUpVariants}>
              <Card className="p-12 text-center glass tilt-3d" data-testid="card-stat-freelancers">
                <div className="text-7xl sm:text-8xl font-black gradient-text font-mono mb-4">
                  23
                </div>
                <p className="text-muted-foreground text-lg">
                  average freelancers per agency
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Card className="p-12 text-center glass tilt-3d" data-testid="card-stat-hours">
                <div className="text-7xl sm:text-8xl font-black gradient-text font-mono mb-4">
                  47
                </div>
                <p className="text-muted-foreground text-lg">
                  hours lost to tax compliance annually
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Card className="p-12 text-center glass tilt-3d" data-testid="card-stat-penalties">
                <div className="text-7xl sm:text-8xl font-black gradient-text font-mono mb-4">
                  $3,200
                </div>
                <p className="text-muted-foreground text-lg">
                  average IRS penalties per year
                </p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-center text-sm text-muted-foreground"
            data-testid="text-stats-source"
          >
            Data from Creative Agency Operations Report 2024
          </motion.p>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section ref={featuresRef} id="features" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-20"
            data-testid="text-features-title"
          >
            Everything you need to stay compliant
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-fr"
          >
            <motion.div variants={fadeUpVariants} className="lg:row-span-2">
              <Card className="p-10 h-full hover-elevate tilt-3d flex flex-col" data-testid="card-feature-tracking">
                <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Project-Based Tracking</h3>
                <p className="text-muted-foreground text-lg flex-grow">
                  Track freelancers by client and project, not just totals. See who worked on what, when. Perfect for agency workflows.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Card className="p-10 h-full hover-elevate tilt-3d flex flex-col" data-testid="card-feature-pricing">
                <div className="rounded-xl bg-secondary/10 p-4 w-fit mb-6">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Unlimited Filing</h3>
                <p className="text-muted-foreground text-lg flex-grow">
                  One price for your entire creative roster. No per-form fees.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Card className="p-10 h-full hover-elevate tilt-3d flex flex-col" data-testid="card-feature-w9">
                <div className="rounded-xl bg-primary/10 p-4 w-fit mb-6">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Automatic W-9 Collection</h3>
                <p className="text-muted-foreground text-lg flex-grow">
                  Built into your freelancer onboarding flow.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="lg:col-span-2">
              <Card className="p-10 h-full hover-elevate tilt-3d flex flex-col md:flex-row gap-6" data-testid="card-feature-monitoring">
                <div className="rounded-xl bg-secondary/10 p-4 w-fit h-fit">
                  <Bell className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Smart Payment Monitoring</h3>
                  <p className="text-muted-foreground text-lg">
                    Get alerts before crossing IRS thresholds. Never miss a filing requirement. Stay ahead with intelligent compliance tracking.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integration Section - Auto-scrolling Carousel */}
      <section id="integrations" className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6" data-testid="text-integrations-title">
            Plays perfectly with your creative stack
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16" data-testid="text-integrations-subtitle">
            Seamless integrations with the tools agencies already use
          </p>

          <div className="relative">
            <div className="flex gap-8 animate-scroll">
              {["Harvest", "Toggl", "QuickBooks", "Stripe", "Monday.com", "Harvest", "Toggl", "QuickBooks"].map((integration, index) => (
                <div
                  key={`${integration}-${index}`}
                  className="flex-shrink-0 px-12 py-6 rounded-xl bg-card hover-elevate border"
                  data-testid={`integration-${integration.toLowerCase().replace('.', '')}`}
                >
                  <span className="text-2xl font-bold text-muted-foreground whitespace-nowrap">
                    {integration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-20" data-testid="text-how-it-works-title">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
              data-testid="step-1"
            >
              <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect your payment tools</h3>
              <p className="text-muted-foreground text-lg">
                Import freelancer data from existing systems like Harvest, Stripe, or QuickBooks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
              data-testid="step-2"
            >
              <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">We handle compliance year-round</h3>
              <p className="text-muted-foreground text-lg">
                Automatic W-9 requests and threshold monitoring keep you ahead of deadlines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
              data-testid="step-3"
            >
              <div className="rounded-full bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">File with confidence in January</h3>
              <p className="text-muted-foreground text-lg">
                One-click filing with zero surprises. Your forms are ready when you need them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section ref={pricingRef} id="pricing" className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            animate={isPricingInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-20"
            data-testid="text-pricing-title"
          >
            Pricing that makes sense for agencies
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={isPricingInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <Card className="max-w-4xl mx-auto p-12 border-2 border-primary/20 hover-elevate tilt-3d" data-testid="card-pricing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="text-sm text-muted-foreground mb-3">Your cost with others</div>
                  <div className="text-5xl font-black text-muted-foreground line-through font-mono">
                    $350-500
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">for 25 freelancers</div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-3">Your cost with Flow1099</div>
                  <div className="text-6xl font-black gradient-text font-mono">
                    $79
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">flat rate, unlimited filing</div>
                </div>
              </div>

              <div className="pt-8 border-t">
                <ul className="space-y-4">
                  {[
                    "Unlimited 1099 forms",
                    "Unlimited freelancers",
                    "All integrations included",
                    "Priority support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="w-full btn-glossy"
                  asChild
                  data-testid="button-pricing-details"
                >
                  <Link href="#pricing-details">View Pricing Details</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Early Access CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white" data-testid="text-early-access-title">
              Be among the first agencies to automate tax compliance
            </h2>

            <form onSubmit={handleEarlyAccess} className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="your@agency.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/30 placeholder:text-white/60 backdrop-blur-sm"
                  style={{ color: 'white' }}
                  suppressHydrationWarning
                  data-testid="input-early-access-email"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="btn-glossy whitespace-nowrap"
                  data-testid="button-reserve-access"
                >
                  Reserve Early Access
                </Button>
              </div>
            </form>

            <p className="text-base text-white/80 mt-6 font-medium" data-testid="text-launch-info">
              Launching January 2025 • Lock in founder pricing
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
