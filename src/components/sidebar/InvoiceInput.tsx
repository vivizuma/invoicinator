import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function InvoiceInput() {
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
            <Input type="number" placeholder="0" defaultValue={1}></Input>
          </div>

          <div className="py-2">
            <Label></Label>
          </div>

          <div></div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default InvoiceInput;
