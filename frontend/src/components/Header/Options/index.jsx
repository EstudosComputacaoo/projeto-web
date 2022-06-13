import Image from 'next/image';
import IconHeart from '../../../assets/icons/heart.svg';
import IconSAC from '../../../assets/icons/sac.svg';

import * as HO from './styles';
import Cart from '../../Cart';

export default function Options() {

	return (
		<HO.OptionsContainer>
			<HO.ImageWrap>
				<Image src={IconSAC} alt='Ícone SAC' />
			</HO.ImageWrap>
			<HO.ImageWrap>
				<Image src={IconHeart} alt='Ícone favoritos' />
			</HO.ImageWrap>

			<Cart />
		</HO.OptionsContainer>
	);
}
