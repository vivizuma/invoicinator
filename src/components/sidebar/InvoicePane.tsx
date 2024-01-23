import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

function InvoicePane() {
  return (
    <>
      <div className="py-4">
        <Label htmlFor="amountdue">Amount due</Label>
        <Input
          id="amount-due"
          type="number"
          maxLength={99}
          placeholder="00.00"
        />
      </div>
      <div className="py-4">
        <Label htmlFor="description">Product/Service</Label>
        <Input id="new" type="text" />
      </div>

      <div className="py-4">
        <Label htmlFor="quantity">Quanity</Label>
        <Input
          id="name"
          defaultValue="Quantity"
          type="number"
          placeholder="0"
          min="1"
          max="9999"
          maxLength={99}
        />
      </div>
      <div className="py-4">
        <Input id="username" defaultValue="@peduarte" />
      </div>
      <Button>+ Add Item</Button>
    </>
  );
}

export default InvoicePane;
