import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function TestInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <span>Test Input Number</span>
      <Input
        name="price"
        type="number"
        placeholder="Amount due"
        step="0.01"
        pattern="\d+(\.\d{1,2})?"
        onChange={handleInputChange}
      />
    </>
  );
}

export default TestInput;
