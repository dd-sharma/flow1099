import { StatusBadge } from "../StatusBadge";

export default function StatusBadgeExample() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <StatusBadge status="draft" />
      <StatusBadge status="ready" />
      <StatusBadge status="sent" />
      <StatusBadge status="completed" />
      <StatusBadge status="error" />
    </div>
  );
}
