import { createContext, useContext, useState } from "react";
interface invoiceContextValue {
  refNumber: number;
  setRefNumber: (value: number) => void;
  date: any;
  setDate: (value: any) => void;
  vat: boolean;
  setVat: (value: boolean) => void;
}

const InvoiceContext = createContext<invoiceContextValue | undefined>(
  undefined
);

function InvoiceProvider({ children }) {
  const [refNumber, setRefNumber] = useState(0);
  const [date, setDate] = useState<Date>();
  const [vat, setVat] = useState(false);
  return (
    <InvoiceContext.Provider
      value={{ refNumber, setRefNumber, vat, setVat, date, setDate }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

function useInvoiceContext() {
  // check if context is present, if not, throw error
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("must be used within InvoiceProvider");
  }
  return context;
  // return context
}

export { InvoiceProvider, useInvoiceContext };
