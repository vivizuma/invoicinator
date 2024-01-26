import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function YourInfo({ onInputChange }) {
  const handleInput = (e) => {
    const text = e.target.value;
    onInputChange(text);
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>You</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Label>Company Name</Label>
            <Input
              type="text"
              placeholder="Company name"
              onChange={handleInput}
            ></Input>
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
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default YourInfo;
