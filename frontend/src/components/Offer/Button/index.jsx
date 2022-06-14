import Image from 'next/image';
import { useCartContext } from '../../_Context/cart';
import IconCart from '../../../assets/icons/cart.svg';

import * as B from './style';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../_Context/AuthContext';

export default function Button({ product }) {
	const { user } = useAuthContext();
	const { setCartItems, setItems, items, createCart } = useCartContext();

	const router = useRouter();

	const handleProduct = (e) => {
		e.preventDefault();
		if (!user) router.push('/login');
		/*else {
			setCartItems((prevState) => prevState + 1);
			checkIfProductExists(product);
		}
		*/
		else createCart(product)
	};

	const checkIfProductExists = (product) => {
		const index = items.findIndex((item) => item._id === product._id);

		if (index >= 0) {
			let tempProd = items[index];
			const { qtd } = tempProd;
			const tempItems = items;
			tempItems[index].qtd = qtd + 1;
			setItems(tempItems);
		} else {
			setItems((prevState) => [...prevState, { ...product, qtd: 1 }]);
		}
	};

	return (
		<B.Button onClick={handleProduct}>
			<Image src={IconCart} alt='Imagem do produto' />
			<B.Text>Comprar</B.Text>
		</B.Button>
	);
}
