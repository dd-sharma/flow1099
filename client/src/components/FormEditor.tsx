import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Save, Send, Eye } from "lucide-react";
import { useState } from "react";

export function FormEditor() {
  const [formData, setFormData] = useState({
    recipientName: "",
    taxId: "",
    amount: "",
    year: "2024",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log(`Updated ${field}:`, value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card data-testid="card-form-editor">
          <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4 space-y-0">
            <CardTitle>Form 1099-NEC</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" data-testid="button-save">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" data-testid="button-preview">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button size="sm" data-testid="button-send">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="recipientName">Recipient Name</Label>
                <Input
                  id="recipientName"
                  value={formData.recipientName}
                  onChange={(e) => handleChange("recipientName", e.target.value)}
                  placeholder="John Doe"
                  data-testid="input-recipient-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxId">Tax ID</Label>
                <Input
                  id="taxId"
                  value={formData.taxId}
                  onChange={(e) => handleChange("taxId", e.target.value)}
                  placeholder="XX-XXXXXXX"
                  className="font-mono"
                  data-testid="input-tax-id"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Nonemployee Compensation</Label>
                <Input
                  id="amount"
                  value={formData.amount}
                  onChange={(e) => handleChange("amount", e.target.value)}
                  placeholder="$0.00"
                  className="font-mono"
                  data-testid="input-amount"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Tax Year</Label>
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => handleChange("year", e.target.value)}
                  className="font-mono"
                  data-testid="input-year"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card data-testid="card-form-preview">
          <CardHeader>
            <CardTitle className="text-lg">Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-md p-6 space-y-4 bg-muted/20">
              <div className="text-center font-bold text-lg">Form 1099-NEC</div>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs">Recipient</div>
                  <div className="font-medium">{formData.recipientName || "—"}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Tax ID</div>
                  <div className="font-mono">{formData.taxId || "—"}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Amount</div>
                  <div className="font-mono font-semibold text-lg">
                    {formData.amount || "$0.00"}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Tax Year</div>
                  <div className="font-mono">{formData.year}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
