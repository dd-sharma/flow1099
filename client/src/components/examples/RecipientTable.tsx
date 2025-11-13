import { RecipientTable } from "../RecipientTable";

export default function RecipientTableExample() {
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
  ];

  return (
    <div className="p-6">
      <RecipientTable recipients={mockRecipients} />
    </div>
  );
}
