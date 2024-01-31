import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

function InvoiceProvider({ children }) {
  const [refNumber, setRefNumber] = useState(0);

  const [vat, setVat] = useState(false);
  return (
    <InvoiceContext.Provider value={{ refNumber, setRefNumber, vat, setVat }}>
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
