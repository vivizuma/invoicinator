import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheirInfoContext } from "../ContentContainer";

function TheirInfo() {
  const {
    theirName,
    setTheirName,
    theirAddress,
    setTheirAddress,
    theirPostcode,
    setTheirPostcode,
  } = useTheirInfoContext();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Them</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Label>Name / Company</Label>
            <Input
              placeholder="name"
              value={theirName}
              onChange={(e) => setTheirName(e.target.value)}
            ></Input>
          </div>
          <div className="py-2">
            <Label>Address</Label>
            <Input
              placeholder="123 street Rd"
              value={theirAddress}
              onChange={(e) => setTheirAddress(e.target.value)}
            ></Input>
          </div>
          <div className="py-2">
            <Label>Postcode</Label>
            <Input
              type="text"
              maxLength={6}
              value={theirPostcode}
              onChange={(e) => setTheirPostcode(e.target.value)}
            />
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
