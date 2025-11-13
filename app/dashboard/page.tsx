import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, DollarSign, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Flow1099",
  description: "View your 1099 tax form overview, recent forms, and quick actions for managing tax documentation.",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2" data-testid="text-dashboard-title">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-lg" data-testid="text-dashboard-subtitle">
          Welcome back! Here's your tax form overview.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card data-testid="card-stat-forms">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Forms</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-stat-forms">42</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>

        <Card data-testid="card-stat-recipients">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recipients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-stat-recipients">28</div>
            <p className="text-xs text-muted-foreground">+5 this year</p>
          </CardContent>
        </Card>

        <Card data-testid="card-stat-total">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-stat-total">$234,500</div>
            <p className="text-xs text-muted-foreground">Across all forms</p>
          </CardContent>
        </Card>

        <Card data-testid="card-stat-pending">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-stat-pending">8</div>
            <p className="text-xs text-muted-foreground">Needs your attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card data-testid="card-recent-forms">
          <CardHeader>
            <CardTitle>Recent Forms</CardTitle>
            <CardDescription>Your latest 1099 form activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg hover-elevate">
                <div>
                  <p className="font-medium" data-testid="text-form-1">1099-NEC for John Smith</p>
                  <p className="text-sm text-muted-foreground">Created 2 days ago</p>
                </div>
                <Button variant="outline" size="sm" data-testid="button-view-form-1">View</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg hover-elevate">
                <div>
                  <p className="font-medium" data-testid="text-form-2">1099-MISC for Acme Corp</p>
                  <p className="text-sm text-muted-foreground">Created 5 days ago</p>
                </div>
                <Button variant="outline" size="sm" data-testid="button-view-form-2">View</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg hover-elevate">
                <div>
                  <p className="font-medium" data-testid="text-form-3">1099-K for PaymentCo</p>
                  <p className="text-sm text-muted-foreground">Created 1 week ago</p>
                </div>
                <Button variant="outline" size="sm" data-testid="button-view-form-3">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-quick-actions">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>What would you like to do today?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="w-full justify-start gap-3"
                data-testid="button-create-form"
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
                <span className="flex flex-col items-start text-left">
                  <span className="font-semibold leading-tight">Create New Form</span>
                  <span className="text-sm font-normal text-muted-foreground leading-snug">
                    Start a new 1099 form
                  </span>
                </span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full justify-start gap-3"
                data-testid="button-add-recipient"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                <span className="flex flex-col items-start text-left">
                  <span className="font-semibold leading-tight">Add Recipient</span>
                  <span className="text-sm font-normal text-muted-foreground leading-snug">
                    Add a new contractor or vendor
                  </span>
                </span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full justify-start gap-3"
                data-testid="button-bulk-import"
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
                <span className="flex flex-col items-start text-left">
                  <span className="font-semibold leading-tight">Bulk Import</span>
                  <span className="text-sm font-normal text-muted-foreground leading-snug">
                    Import multiple forms at once
                  </span>
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
