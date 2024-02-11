import { createContext, useContext, useState } from "react";
interface theirInfoContextValue {
  theirName: string;
  setTheirName: (value: string) => void;
  theirAddress: string;
  setTheirAddress: (value: string) => void;
  theirPostcode: string;
  setTheirPostcode: (value: string) => void;
}
const TheirInfoContext = createContext<theirInfoContextValue | undefined>(
  undefined
);

function TheirInfoProvider({ children }) {
  const [theirName, setTheirName] = useState("");
  const [theirAddress, setTheirAddress] = useState("");
  const [theirPostcode, setTheirPostcode] = useState("");
  return (
    <TheirInfoContext.Provider
      value={{
        theirName,
        setTheirName,
        theirAddress,
        setTheirAddress,
        theirPostcode,
        setTheirPostcode,
      }}
    >
      {children}
    </TheirInfoContext.Provider>
  );
}
function useTheirInfoContext() {
  const context = useContext(TheirInfoContext);
  if (!context) {
    throw new Error(
      "useTheirInfoContext must be used within TheirInfoProvider"
    );
  }
  return context;
}
export { TheirInfoProvider, useTheirInfoContext };
