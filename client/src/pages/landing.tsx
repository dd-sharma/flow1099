import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Shield,
  BarChart3,
  FileCheck,
  Users,
  Clock,
} from "lucide-react";
import dashboardImage from "@assets/generated_images/Dashboard_screenshot_mockup_b5c27113.png";
import workflowImage from "@assets/generated_images/Workflow_automation_diagram_703d5eb1.png";

export default function Landing() {
  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="container px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-features-title">
            We've Got Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From creating forms to filing with the IRS, we'll handle it all so you don't have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Zap}
            title="Forms Created in Seconds"
            description="We'll generate your 1099 forms automatically from your data. Smart validation catches errors before they happen."
          />
          <FeatureCard
            icon={Shield}
            title="Bank-Level Security"
            description="Your data is protected with SOC 2 certified security and IRS-approved filing. We take security seriously."
          />
          <FeatureCard
            icon={BarChart3}
            title="See Your Progress"
            description="Track everything in one simple dashboard. Know exactly where you stand at a glance."
          />
          <FeatureCard
            icon={FileCheck}
            title="Handle Hundreds at Once"
            description="Process bulk forms in minutes, not days. Our smart system does the heavy lifting."
          />
          <FeatureCard
            icon={Users}
            title="Manage Recipients Easily"
            description="All your recipient info in one place. We'll even prevent duplicates for you."
          />
          <FeatureCard
            icon={Clock}
            title="Catch Mistakes Early"
            description="Instant validation means you'll catch errors before filing. No more rejected forms."
          />
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-muted/30 py-24">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Your Control Center
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Everything you need, right where you need it. Track your forms, 
                check on recipients, and get insights—all from one clean dashboard.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex flex-wrap items-start gap-3">
                  <FileCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Real-time updates</span>
                    <span className="text-muted-foreground">See exactly where each form stands</span>
                  </div>
                </li>
                <li className="flex flex-wrap items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Clear analytics</span>
                    <span className="text-muted-foreground">Understand your progress at a glance</span>
                  </div>
                </li>
                <li className="flex flex-wrap items-start gap-3">
                  <Users className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Recipient management</span>
                    <span className="text-muted-foreground">Keep everyone organized and informed</span>
                  </div>
                </li>
              </ul>
              <Button size="lg" data-testid="button-learn-more">
                Explore the Dashboard
              </Button>
            </div>
            <div>
              <img
                src={dashboardImage}
                alt="Dashboard preview"
                className="rounded-2xl shadow-2xl border"
                data-testid="img-dashboard-preview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="container px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={workflowImage}
              alt="Automated workflow"
              className="rounded-2xl"
              data-testid="img-workflow"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Three Easy Steps to Done
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We've made tax filing as simple as possible. Here's how it works:
            </p>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Bring Your Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upload a CSV or connect your accounting software. We'll handle the rest.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">We'll Create the Forms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your forms are generated automatically with smart error checking built in.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Review & Send</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Take a quick look, then file electronically with one click. That's it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted/30 py-24">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="text-pricing-title">
              Pick Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              No hidden fees. No surprises. Just simple pricing that makes sense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price="$49"
              description="Perfect for small businesses"
              features={[
                "Up to 50 recipients",
                "Unlimited forms",
                "Email support",
                "Basic reporting",
                "E-file to IRS",
              ]}
            />
            <PricingCard
              name="Professional"
              price="$149"
              description="For growing companies"
              features={[
                "Up to 500 recipients",
                "Unlimited forms",
                "Priority support",
                "Advanced analytics",
                "Bulk import",
                "API access",
                "Custom branding",
              ]}
              highlighted
            />
            <PricingCard
              name="Enterprise"
              price="$499"
              description="Custom solutions"
              features={[
                "Unlimited recipients",
                "Unlimited forms",
                "Dedicated support",
                "Custom integrations",
                "White-label options",
                "SLA guarantee",
                "Onboarding assistance",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-6 py-24">
        <div className="bg-primary text-primary-foreground rounded-2xl p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Get Started!
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ businesses who've said goodbye to tax season stress. 
            Your first month is free—no credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white"
              data-testid="button-cta-trial"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white"
              data-testid="button-cta-demo"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/20">
        <div className="container px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
                <li><a href="#" className="hover:text-foreground">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Compliance</a></li>
                <li><a href="#" className="hover:text-foreground">IRS Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-foreground">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Flow1099. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
