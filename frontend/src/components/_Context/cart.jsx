import { createContext, useContext, useState } from 'react';

const Context = createContext(null);

export function CartProvider({ children, ...props }) {
	const [cartItems, setCartItems] = useState(0);
	const [items, setItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const cartProps = {
		cartItems,
		setCartItems,
		isCartOpen,
		setIsCartOpen,
		items,
		setItems,
		...props,
	};

	return <Context.Provider value={{ ...cartProps }}>{children}</Context.Provider>;
}

export function useCartContext() {
	return useContext(Context);
}
