import { useState } from "react";
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
import { useYourInfoContext } from "../ContentContainer";
//PROVIDER COMPONENT
function YourInfo() {
  const {
    name,
    setName,
    yourAddress,
    setYourAddress,
    yourPostcode,
    setYourPostcode,
    yourPhoneNumber,
    setYourPhoneNumber,
    yourEmail,
    setYourEmail,
  } = useYourInfoContext();
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
              value={name}
              onChange={(e) => {
                {
                  setName(e.target.value);
                }
              }}
            ></Input>
          </div>
          <div className="py-2">
            <Label>Address</Label>
            <Input
              type="text"
              placeholder="123 myBusiness Lane"
              value={yourAddress}
              onChange={(e) => setYourAddress(e.target.value)}
            ></Input>
          </div>
          <div className="py-2">
            <Label>Postcode</Label>
            <Input
              type="text"
              maxLength={6}
              value={yourPostcode}
              onChange={(e) => setYourPostcode(e.target.value)}
            ></Input>
          </div>
          <div className="py-2">
            <Label>Phone Number</Label>
            <Input
              type="number"
              value={yourPhoneNumber}
              onChange={(e) => setYourPhoneNumber(Number(e.target.value))}
            ></Input>
          </div>
          <div className="py-2">
            <Label>Email Address</Label>
            <Input
              type="email"
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
            ></Input>
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
