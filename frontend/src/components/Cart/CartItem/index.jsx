import Image from 'next/image';
import { Content, Item, Title } from './styles';

export default function CartItem({ product }) {
		
	return (
		<Item>
			<Content>
				{product?.image && <Image width={'40px'} height={'40px'} src={product?.image} />}
				<Title>{product?.title}</Title>
				<span>{product?.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
			</Content>
			<span>{`Quantidade: ${product?.quantity}`}</span>
		</Item>
	);
}
