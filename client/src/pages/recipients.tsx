import { RecipientTable } from "@/components/RecipientTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Upload } from "lucide-react";
import { useState } from "react";

export default function Recipients() {
  const [searchQuery, setSearchQuery] = useState("");

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
    {
      id: "4",
      name: "Emily Davis",
      taxId: "23-4567890",
      formsSent: 4,
      status: "ready" as const,
    },
    {
      id: "5",
      name: "David Wilson",
      taxId: "56-7890123",
      formsSent: 2,
      status: "completed" as const,
    },
    {
      id: "6",
      name: "Lisa Anderson",
      taxId: "67-8901234",
      formsSent: 1,
      status: "sent" as const,
    },
  ];

  return (
    <div className="container px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">
          Recipients
        </h1>
        <p className="text-muted-foreground">
          Manage all your 1099 form recipients in one place
        </p>
      </div>

      <Card data-testid="card-recipients">
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4 space-y-0">
          <CardTitle>All Recipients</CardTitle>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" data-testid="button-bulk-import">
              <Upload className="mr-2 h-4 w-4" />
              Bulk Import
            </Button>
            <Button data-testid="button-add-recipient">
              <Plus className="mr-2 h-4 w-4" />
              Add Recipient
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search recipients by name or tax ID..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                console.log("Search query:", e.target.value);
              }}
              className="pl-10"
              data-testid="input-search"
            />
          </div>

          <RecipientTable recipients={mockRecipients} />
        </CardContent>
      </Card>
    </div>
  );
}
