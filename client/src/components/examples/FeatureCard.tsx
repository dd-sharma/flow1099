import { FeatureCard } from "../FeatureCard";
import { Zap, Shield, BarChart3 } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <FeatureCard
        icon={Zap}
        title="Automated Forms"
        description="Generate 1099 forms automatically from your data with smart validation and error checking."
      />
      <FeatureCard
        icon={Shield}
        title="Secure & Compliant"
        description="SOC 2 certified platform with bank-level encryption and IRS-approved filing."
      />
      <FeatureCard
        icon={BarChart3}
        title="Real-time Analytics"
        description="Track form status, recipient engagement, and compliance metrics in one dashboard."
      />
    </div>
  );
}
