import { DashboardMetricCard } from "@/components/DashboardMetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Send, CheckCircle, Plus, Upload } from "lucide-react";
import { RecipientTable } from "@/components/RecipientTable";

export default function Dashboard() {
  // TODO: remove mock functionality
  const mockRecipients = [
    {
      id: "1",
      name: "John Smith",
      taxId: "12-3456789",
      formsSent: 3,
      status: "completed" as const,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      taxId: "98-7654321",
      formsSent: 2,
      status: "sent" as const,
    },
    {
      id: "3",
      name: "Michael Brown",
      taxId: "45-6789012",
      formsSent: 1,
      status: "draft" as const,
    },
  ];

  // TODO: remove mock functionality
  const recentActivity = [
    { id: "1", action: "Form 1099-NEC sent to John Smith", time: "2 hours ago" },
    { id: "2", action: "New recipient added: Sarah Johnson", time: "5 hours ago" },
    { id: "3", action: "Draft created for Michael Brown", time: "1 day ago" },
    { id: "4", action: "Bulk import completed: 45 recipients", time: "2 days ago" },
  ];

  return (
    <div className="container px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
          Welcome Back!
        </h1>
        <p className="text-lg text-muted-foreground">
          Here's how your tax forms are looking today
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions */}
        <Card className="p-6" data-testid="card-quick-actions">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl">What Would You Like to Do?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-0">
            <Button size="lg" className="w-full justify-start" data-testid="button-create-form">
              <Plus className="mr-2 h-5 w-5" />
              Create a New Form
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full justify-start"
              data-testid="button-bulk-import"
            >
              <Upload className="mr-2 h-5 w-5" />
              Import Recipients
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full justify-start"
              data-testid="button-add-recipient"
            >
              <Users className="mr-2 h-5 w-5" />
              Add a Recipient
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2" data-testid="card-recent-activity">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex flex-wrap items-start gap-3" data-testid={`activity-${item.id}`}>
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Recipients Table */}
      <Card data-testid="card-recent-recipients">
        <CardHeader>
          <CardTitle>Recent Recipients</CardTitle>
        </CardHeader>
        <CardContent>
          <RecipientTable recipients={mockRecipients} />
        </CardContent>
      </Card>
    </div>
  );
}
