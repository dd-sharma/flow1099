import { PricingCard } from "../PricingCard";

export default function PricingCardExample() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <PricingCard
        name="Starter"
        price="$49"
        description="Perfect for small businesses"
        features={[
          "Up to 50 recipients",
          "Unlimited forms",
          "Email support",
          "Basic reporting",
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
        ]}
      />
    </div>
  );
}
