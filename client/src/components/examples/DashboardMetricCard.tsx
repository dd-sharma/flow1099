import { DashboardMetricCard } from "../DashboardMetricCard";
import { FileText, Users, Send, CheckCircle } from "lucide-react";

export default function DashboardMetricCardExample() {
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      <DashboardMetricCard
        title="Total Forms"
        value="248"
        icon={FileText}
        trend={{ value: "+12%", isPositive: true }}
      />
      <DashboardMetricCard
        title="Recipients"
        value="156"
        icon={Users}
        trend={{ value: "+8%", isPositive: true }}
      />
      <DashboardMetricCard
        title="Forms Sent"
        value="189"
        icon={Send}
        trend={{ value: "-3%", isPositive: false }}
      />
      <DashboardMetricCard
        title="Completed"
        value="142"
        icon={CheckCircle}
        trend={{ value: "+15%", isPositive: true }}
      />
    </div>
  );
}
