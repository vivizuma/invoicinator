import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ReceiptPane() {
  return (
    <>
      <div>
        <Input placeholder="price" />
        <div> . </div>
        <Input placeholder="pence" />
      </div>

      <Input placeholder="service" />
    </>
  );
}

export default ReceiptPane;
