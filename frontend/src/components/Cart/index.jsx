import { useState } from 'react';

import { useAuthContext } from '../_Context/AuthContext';
import { useCartContext } from '../_Context/cart';
import { CartContent, CartQuantity, ImageWrap, Wrapper, ButtonClose, Title } from './styles';
import Image from 'next/image';
import IconCart from '../../assets/icons/cart.svg';
import LoginButton from '../Menu/LoginButton';
import CartItem from './CartItem';

export default function Cart() {
	const { user } = useAuthContext();
	const { cartItems, items } = useCartContext();
	const [closed, setClosed] = useState(true);

	return (
		<Wrapper>
			<ImageWrap onClick={() => setClosed(!closed)}>
				<Image src={IconCart} alt='Ícone carrinho' />
				{cartItems > 0 && <CartQuantity>{cartItems}</CartQuantity>}
			</ImageWrap>

			<>
				<CartContent closed={closed}>
					<ButtonClose onClick={() => setClosed(!closed)}>x</ButtonClose>
					{user ? (
						<ul>
							{items?.map((item) => (
								<CartItem product={item} />
							))}
						</ul>
					) : (
						<>
							<Title>Você não está logado!</Title>
							<LoginButton />
						</>
					)}
				</CartContent>
			</>
		</Wrapper>
	);
}
