import { useState, useContext, createContext } from "react";
interface AddItemContextValue {
  amountDue: number;
  setAmountDue: (value: number) => void;
  product: string;
  setProduct: (value: string) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  items: any;
  setItems: (value: any) => void;
  itemTotal: number;
  setItemTotal: (value: number) => void;
  sumTotal: number;
  setSumTotal: (value: number) => void;
}

const AddItemContext = createContext<AddItemContextValue | undefined>(
  undefined
);

function AddItemProvider({ children }) {
  const [items, setItems] = useState<any>([]);
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
