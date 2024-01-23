import { Button } from "/@components/ui/button";
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
          <CardTitle>Their Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Name / Company</Label>
          <Input placeholder="name"></Input>
          <Label>Address</Label>
          <Input placeholder="123 street Rd"></Input>
          <Label>Postcode</Label>
          <Input type="text" maxLength={6} />
        </CardContent>
      </Card>
    </>
  );
}
export default TheirInfo;
