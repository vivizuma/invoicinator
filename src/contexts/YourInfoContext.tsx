import { createContext, useContext, useState } from "react";
interface YourInfoContextValue {
  name: string;
  setName: (value: string) => void;
  yourAddress: string;
  setYourAddress: (value: string) => void;
  yourPostcode: string;
  setYourPostcode: (value: string) => void;
  yourPhoneNumber: number;
  setYourPhoneNumber: (value: number) => void;
  yourEmail: string;
  setYourEmail: (value: string) => void;
}
const YourInfoContext = createContext<YourInfoContextValue | undefined>(
  undefined
);

const YourInfoProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [yourAddress, setYourAddress] = useState("");
  const [yourPostcode, setYourPostcode] = useState("");
  const [yourPhoneNumber, setYourPhoneNumber] = useState(0);
  const [yourEmail, setYourEmail] = useState("");

  return (
    <YourInfoContext.Provider
      value={{
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
      }}
    >
      {children}
    </YourInfoContext.Provider>
  );
};

function useYourInfoContext() {
  const context = useContext(YourInfoContext);
  if (!context) {
    throw new Error(
      "useYourInfoContext must be used within useYourInfoProvider"
    );
  }
  return context;
}

export { YourInfoProvider, useYourInfoContext };
