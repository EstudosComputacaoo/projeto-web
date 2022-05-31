import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function CartProvider({ children, ...props }) {
  const [cartItems, setCartItems] = useState(0);

  const cartProps = {
    cartItems,
    setCartItems,
    ...props,
  };

  return (
    <Context.Provider value={{ ...cartProps }}>{children}</Context.Provider>
  );
}

export function useCartContext() {
  return useContext(Context);
}
