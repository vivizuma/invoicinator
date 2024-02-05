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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useAddItemContext } from "../ContentContainer";

function AddItemInput() {
  const {
    amountDue,
    setAmountDue,
    product,
    setProduct,
    quantity,
    setQuantity,
    items,
    setItems,
  } = useAddItemContext();
  function handleAddItem() {
    console.log("handling add item");
    const newItem = {
      amountDue: amountDue,
      product: product,
      quantity: quantity,
    };
    console.log(newItem);
    setItems((i) => [...items, newItem]);
    console.log(items);
    setProduct("");
    setAmountDue(0);
    setQuantity(0);
  }
  function removeItem(index) {
    console.log(`"removing" ${index}`);
    setItems((i) => i.filter((_, i) => i !== index));
  }
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
              value={amountDue}
              onChange={(e) => {
                setAmountDue(e.target.value);
              }}
            />
          </div>
          <div className="py-2">
            <Label htmlFor="description">Product/Service</Label>
            <Input
              id="new"
              type="text"
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            />
          </div>

          <div className="py-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="0"
              min="1"
              max="9999"
              maxLength={8}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <CardFooter>
            <Button onClick={handleAddItem}>+ Add Item</Button>
          </CardFooter>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption className="text-left py-4">
              Click submit to add all items to your invoice
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.amountDue}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => removeItem(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}

export default AddItemInput;
