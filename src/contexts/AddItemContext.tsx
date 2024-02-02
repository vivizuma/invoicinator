import { useState, useContext, createContext } from "react";

const AddItemContext = createContext();

function AddItemProvider({ children }) {
  const [amountDue, setAmountDue] = useState(0);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);

  return (
    <AddItemContext.Provider
      value={{
        amountDue,
        setAmountDue,
        product,
        setProduct,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </AddItemContext.Provider>
  );
}

function useAddItemContext() {
  const context = useContext(AddItemContext);
  if (!context) {
    throw new Error("must be used within AddItemProvider");
  }
  return context;
}

export { useAddItemContext, AddItemProvider };
