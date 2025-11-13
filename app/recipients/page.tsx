import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipients - Flow1099",
  description: "Manage your contractors and vendors. Add, edit, and organize recipient information for your 1099 tax forms.",
};

export default function RecipientsPage() {
  const recipients = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      phone: "(555) 123-4567",
      taxId: "***-**-1234",
      forms: 3,
      totalPaid: "$45,000",
    },
    {
      id: 2,
      name: "Acme Corp",
      email: "billing@acme.com",
      phone: "(555) 234-5678",
      taxId: "**-***5678",
      forms: 5,
      totalPaid: "$89,500",
    },
    {
      id: 3,
      name: "Jane Doe",
      email: "jane@consulting.com",
      phone: "(555) 345-6789",
      taxId: "***-**-9012",
      forms: 2,
      totalPaid: "$32,000",
    },
    {
      id: 4,
      name: "Tech Solutions LLC",
      email: "contact@techsol.com",
      phone: "(555) 456-7890",
      taxId: "**-***3456",
      forms: 4,
      totalPaid: "$67,200",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-recipients-title">
            Recipients
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="text-recipients-subtitle">
            Manage your contractors and vendors
          </p>
        </div>
        <Button size="lg" data-testid="button-add-recipient">
          <Plus className="mr-2 h-5 w-5" />
          Add Recipient
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search recipients by name, email, or tax ID..."
              className="pl-10"
              data-testid="input-search-recipients"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {recipients.map((recipient) => (
          <Card key={recipient.id} className="hover-elevate" data-testid={`card-recipient-${recipient.id}`}>
            <CardContent className="pt-6">
              <div className="flex flex-wrap items-center gap-6">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-lg font-semibold">
                    {recipient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-name-${recipient.id}`}>
                    {recipient.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex flex-wrap items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span data-testid={`text-email-${recipient.id}`}>{recipient.email}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span data-testid={`text-phone-${recipient.id}`}>{recipient.phone}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" data-testid={`badge-taxid-${recipient.id}`}>
                      Tax ID: {recipient.taxId}
                    </Badge>
                  </div>
                </div>

                <div className="grid gap-4 text-center min-w-[120px]">
                  <div>
                    <p className="text-2xl font-bold" data-testid={`text-forms-count-${recipient.id}`}>
                      {recipient.forms}
                    </p>
                    <p className="text-xs text-muted-foreground">Forms</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold font-mono" data-testid={`text-total-paid-${recipient.id}`}>
                      {recipient.totalPaid}
                    </p>
                    <p className="text-xs text-muted-foreground">Total Paid</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" data-testid={`button-view-${recipient.id}`}>
                    View
                  </Button>
                  <Button variant="outline" size="sm" data-testid={`button-edit-${recipient.id}`}>
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Bulk Import</CardTitle>
          <CardDescription>Import multiple recipients at once</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" data-testid="button-download-template">
              Download CSV Template
            </Button>
            <Button variant="outline" data-testid="button-upload-csv">
              Upload CSV
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Save time by importing recipients from a spreadsheet. Download our template to get started.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
