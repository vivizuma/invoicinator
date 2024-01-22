import React, { useState } from "react";

interface NameForm {
  first: string;
  second: string;
}

interface NumberForm {
  no1: string;
  no2: string;
  no3: string;
}

const ConditionalForms: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const [nameForm, setNameForm] = useState<NameForm>({ first: "", second: "" });
  const [numberForm, setNumberForm] = useState<NumberForm>({
    no1: "",
    no2: "",
    no3: "",
  });

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof NameForm
  ) => {
    setNameForm((prevForm) => ({ ...prevForm, [field]: event.target.value }));
  };

  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof NumberForm
  ) => {
    setNumberForm((prevForm) => ({ ...prevForm, [field]: event.target.value }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="name"
            checked={selectedOption === "name"}
            onChange={handleOptionChange}
          />
          Name Form
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="number"
            checked={selectedOption === "number"}
            onChange={handleOptionChange}
          />
          Number Form
        </label>
      </div>

      {/* Conditional rendering based on the selected option */}
      {selectedOption === "name" && (
        <div>
          {/* Render Name Form */}
          <h2>Name Form</h2>
          <input
            type="text"
            placeholder="First Name"
            value={nameForm.first}
            onChange={(e) => handleNameInputChange(e, "first")}
          />
          <input
            type="text"
            placeholder="Second Name"
            value={nameForm.second}
            onChange={(e) => handleNameInputChange(e, "second")}
          />
        </div>
      )}

      {selectedOption === "number" && (
        <div>
          {/* Render Number Form */}
          <h2>Number Form</h2>
          <input
            type="text"
            placeholder="Number 1"
            value={numberForm.no1}
            onChange={(e) => handleNumberInputChange(e, "no1")}
          />
          <input
            type="text"
            placeholder="Number 2"
            value={numberForm.no2}
            onChange={(e) => handleNumberInputChange(e, "no2")}
          />
          <input
            type="text"
            placeholder="Number 3"
            value={numberForm.no3}
            onChange={(e) => handleNumberInputChange(e, "no3")}
          />
        </div>
      )}
    </div>
  );
};

export default ConditionalForms;
