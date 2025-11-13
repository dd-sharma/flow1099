import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1099 Forms - Flow1099",
  description: "Manage all your 1099 tax forms in one place. Create, edit, and file 1099-NEC, 1099-MISC, and 1099-K forms.",
};

export default function FormsPage() {
  const forms = [
    { id: 1, type: "1099-NEC", recipient: "John Smith", amount: "$45,000", status: "filed", date: "2024-01-15" },
    { id: 2, type: "1099-MISC", recipient: "Acme Corp", amount: "$12,500", status: "draft", date: "2024-01-20" },
    { id: 3, type: "1099-K", recipient: "PaymentCo", amount: "$89,200", status: "filed", date: "2024-01-18" },
    { id: 4, type: "1099-NEC", recipient: "Jane Doe", amount: "$32,000", status: "pending", date: "2024-01-22" },
    { id: 5, type: "1099-MISC", recipient: "Tech Solutions", amount: "$15,800", status: "filed", date: "2024-01-12" },
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-forms-title">
            1099 Forms
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="text-forms-subtitle">
            Manage all your tax forms in one place
          </p>
        </div>
        <Button size="lg" data-testid="button-create-form">
          <Plus className="mr-2 h-5 w-5" />
          Create New Form
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search forms..."
                  className="pl-10"
                  data-testid="input-search-forms"
                />
              </div>
            </div>
            <Button variant="outline" data-testid="button-filter">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {forms.map((form) => (
          <Card key={form.id} className="hover-elevate" data-testid={`card-form-${form.id}`}>
            <CardContent className="pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex-1 min-w-[200px]">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold" data-testid={`text-form-type-${form.id}`}>
                      {form.type}
                    </h3>
                    <Badge
                      variant={
                        form.status === "filed"
                          ? "default"
                          : form.status === "pending"
                          ? "secondary"
                          : "outline"
                      }
                      data-testid={`badge-status-${form.id}`}
                    >
                      {form.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid={`text-recipient-${form.id}`}>
                    Recipient: {form.recipient}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-date-${form.id}`}>
                    Created: {form.date}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold font-mono" data-testid={`text-amount-${form.id}`}>
                      {form.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">Total Amount</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" data-testid={`button-view-${form.id}`}>
                      View
                    </Button>
                    <Button variant="outline" size="sm" data-testid={`button-edit-${form.id}`}>
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Learn more about 1099 forms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start gap-3"
              data-testid="button-help-nec"
            >
              <span className="flex flex-col items-start text-left">
                <span className="font-semibold leading-tight">1099-NEC Guide</span>
                <span className="text-sm font-normal text-muted-foreground leading-snug">
                  For non-employee compensation
                </span>
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start gap-3"
              data-testid="button-help-misc"
            >
              <span className="flex flex-col items-start text-left">
                <span className="font-semibold leading-tight">1099-MISC Guide</span>
                <span className="text-sm font-normal text-muted-foreground leading-snug">
                  For miscellaneous income
                </span>
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-start gap-3"
              data-testid="button-help-k"
            >
              <span className="flex flex-col items-start text-left">
                <span className="font-semibold leading-tight">1099-K Guide</span>
                <span className="text-sm font-normal text-muted-foreground leading-snug">
                  For payment card transactions
                </span>
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
