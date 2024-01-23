import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function InvoicePane() {
  return (
    <>
      <div className="py-4">
        <Label htmlFor="amountdue">Amount due</Label>
        <Input
          id="amount-due"
          type="number"
          maxLength={99999999999999}
          placeholder="00.00"
        />
      </div>
      <div className="py-4">
        <Label htmlFor="service">Product/Service</Label>
        <Input id="new" type="password" />
      </div>

      <div className="py-4">
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <div className="py-4">
        <Input id="username" defaultValue="@peduarte" />
      </div>
    </>
  );
}

export default InvoicePane;
