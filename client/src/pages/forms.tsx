import { FormEditor } from "@/components/FormEditor";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Forms() {
  return (
    <div className="container px-6 py-8">
      <div className="mb-8">
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-4" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">
          Create 1099 Form
        </h1>
        <p className="text-muted-foreground">
          Fill in the form details below to generate a new 1099 form
        </p>
      </div>

      <FormEditor />
    </div>
  );
}
