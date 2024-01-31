import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

function InvoiceInput() {
  const { refNumber, setRefNumber, vat, setVat } = useInvoiceContext();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Invoice</CardTitle>
          <CardDescription>General invoice information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Label>Reference Number</Label>
            <Input
              type="number"
              placeholder="0"
              value={refNumber}
              onChange={(e) => {
                setRefNumber(e.target.value);
              }}
            ></Input>
          </div>

          <div className="py-2">
            <Label>Due Date</Label>
            <div>later</div>
            <div className="py-2">
              <Label>Include VAT</Label>
              <div>
                <Checkbox>Include VAT</Checkbox>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default InvoiceInput;
