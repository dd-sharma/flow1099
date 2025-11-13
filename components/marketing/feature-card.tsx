import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover-elevate p-8" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="p-0 mb-4">
        <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
