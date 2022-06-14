import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';

const Context = createContext(null);

export function CartProvider({ children, ...props }) {
	const [cartItems, setCartItems] = useState(0);
	const [items, setItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const { user } = useAuthContext();

	const API_URL = 'http://localhost:3003/api/cart';

	function getCart() {
		if (user?._id) {
			const uri = new URL(`${API_URL}/${user._id}`);
			fetch(uri)
				.then((res) => res.json())
				.then((data) => {
					const { products } = data;
					setItems(products);
					setCartItems(products.length);
				})
				.catch((error) => console.error(error));
		}
	}

	function createCart(item) {
		const product = {
			id_user: user._id,
			status: 'active',
			products: [
				{
					id: item.id,
					title: item.title,
					price: item.price,
					image: item.image,
					quantity: 1,
				},
			],
		};
		if (user?._id) {
			const uri = new URL(`${API_URL}/${user._id}`);
			fetch(uri, {
				method: 'POST',
				body: JSON.stringify({ ...product }),
				headers: { 'Content-Type': 'application/json' },
			})
				.then((res) => res.json())
				.then((data) => {
					const { products } = data;
					setItems(products);
					setCartItems(products.length);
				})
				.catch((error) => console.error(error));

			getCart();
		}
	}

	useEffect(() => getCart(), []);

	const cartProps = {
		cartItems,
		setCartItems,
		isCartOpen,
		setIsCartOpen,
		items,
		setItems,
		getCart,
		createCart,
		...props,
	};

	return <Context.Provider value={{ ...cartProps }}>{children}</Context.Provider>;
}

export function useCartContext() {
	return useContext(Context);
}
