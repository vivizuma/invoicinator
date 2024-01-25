import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AddItemInput() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Add item</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Label htmlFor="amountdue">Amount due</Label>
            <Input
              id="amount-due"
              type="number"
              maxLength={64}
              placeholder="00.00"
            />
          </div>
          <div className="py-2">
            <Label htmlFor="description">Product/Service</Label>
            <Input id="new" type="text" />
          </div>

          <div className="py-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              defaultValue="Quantity"
              type="number"
              placeholder="0"
              min="1"
              max="9999"
              maxLength={8}
            />
          </div>

          <CardFooter>
            <Button>+ Add Item</Button>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}

export default AddItemInput;
