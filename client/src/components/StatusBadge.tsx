import { Badge } from "@/components/ui/badge";

type Status = "draft" | "ready" | "sent" | "completed" | "error";

interface StatusBadgeProps {
  status: Status;
}

const statusConfig: Record<
  Status,
  { label: string; variant: "default" | "secondary" | "outline" | "destructive" }
> = {
  draft: { label: "Draft", variant: "secondary" },
  ready: { label: "Ready", variant: "outline" },
  sent: { label: "Sent", variant: "default" },
  completed: { label: "Completed", variant: "default" },
  error: { label: "Error", variant: "destructive" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge variant={config.variant} data-testid={`badge-status-${status}`}>
      {config.label}
    </Badge>
  );
}
