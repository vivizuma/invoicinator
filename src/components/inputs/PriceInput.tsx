import React from "react";

interface PriceInputProps {
  // Your props, if any
}

const PriceInput: React.FC<PriceInputProps> = () => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value.replace(/[^0-9.]/g, "");

    const decimalIndex = newValue.indexOf(".");
    if (decimalIndex !== -1) {
      // Allow only two decimal places
      const decimalPart = newValue.slice(decimalIndex + 1, decimalIndex + 3);
      newValue =
        decimalIndex > 0
          ? newValue.slice(0, decimalIndex + 1) + decimalPart
          : "0." + decimalPart;
    }

    setInputValue(newValue);
  };

  return (
    <div>
      <label htmlFor="price">Enter Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default PriceInput;
