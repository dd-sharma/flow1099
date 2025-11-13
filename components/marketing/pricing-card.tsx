import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({ name, price, description, features, highlighted }: PricingCardProps) {
  return (
    <Card
      className={`p-8 ${highlighted ? "border-2 border-primary shadow-xl scale-105" : ""}`}
      data-testid={`card-pricing-${name.toLowerCase()}`}
    >
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-3xl mb-2">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-0">
        <div>
          <span className="text-5xl font-bold font-mono" data-testid={`text-price-${name.toLowerCase()}`}>{price}</span>
          <span className="text-lg text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex flex-wrap items-start gap-3" data-testid={`feature-${name.toLowerCase()}-${index}`}>
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-0 mt-8">
        <Button
          size="lg"
          className="w-full font-semibold"
          variant={highlighted ? "default" : "outline"}
          data-testid={`button-select-${name.toLowerCase()}`}
        >
          {highlighted ? "Start Free Trial" : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
}
