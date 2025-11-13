import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface Recipient {
  id: string;
  name: string;
  taxId: string;
  formsSent: number;
  status: "draft" | "ready" | "sent" | "completed" | "error";
}

interface RecipientTableProps {
  recipients: Recipient[];
}

export function RecipientTable({ recipients }: RecipientTableProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Tax ID</TableHead>
            <TableHead>Forms Sent</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipients.map((recipient) => (
            <TableRow key={recipient.id} data-testid={`row-recipient-${recipient.id}`}>
              <TableCell className="font-medium" data-testid={`text-name-${recipient.id}`}>
                {recipient.name}
              </TableCell>
              <TableCell className="font-mono text-sm" data-testid={`text-tax-id-${recipient.id}`}>
                {recipient.taxId}
              </TableCell>
              <TableCell data-testid={`text-forms-sent-${recipient.id}`}>{recipient.formsSent}</TableCell>
              <TableCell>
                <StatusBadge status={recipient.status} />
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" data-testid={`button-actions-${recipient.id}`}>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
