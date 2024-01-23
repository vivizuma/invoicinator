import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function YourInfo() {
  return (
    <>
      <Label>Company Name</Label>
      <Input type="text" placeholder="Company name"></Input>
      <Label>Address</Label>
      <Input type="text" placeholder="123 myBusiness Lane"></Input>
    </>
  );
}

export default YourInfo;
