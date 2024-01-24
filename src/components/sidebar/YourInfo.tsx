import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function YourInfo() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>You</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Label>Company Name</Label>
            <Input type="text" placeholder="Company name"></Input>
          </div>
          <div className="py-2">
            <Label>Address</Label>
            <Input type="text" placeholder="123 myBusiness Lane"></Input>
          </div>
          <div className="py-2">
            <Label>Postcode</Label>
            <Input type="text" maxLength={6}></Input>
          </div>
          <div className="py-2">
            <Label>Phone Number</Label>
            <Input type="number"></Input>
          </div>
          <div className="py-2">
            <Label>Email Address</Label>
            <Input type="email"></Input>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default YourInfo;
