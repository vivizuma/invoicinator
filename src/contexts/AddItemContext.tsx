import { useState, useContext, createContext } from "react";

const AddItemContext = createContext();

function AddItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [amountDue, setAmountDue] = useState(0);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [itemTotal, setItemTotal] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);

  return (
    <AddItemContext.Provider
      value={{
        amountDue,
        setAmountDue,
        product,
        setProduct,
        quantity,
        setQuantity,
        items,
        setItems,
        itemTotal,
        setItemTotal,
        sumTotal,
        setSumTotal,
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
