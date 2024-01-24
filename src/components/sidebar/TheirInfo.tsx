import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TheirInfo() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Them</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Label>Name / Company</Label>
            <Input placeholder="name"></Input>
          </div>
          <div className="py-2">
            <Label>Address</Label>
            <Input placeholder="123 street Rd"></Input>
          </div>
          <div className="py-2">
            <Label>Postcode</Label>
            <Input type="text" maxLength={6} />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default TheirInfo;
