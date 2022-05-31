import Image from "next/image";
import { useCartContext } from "../../_Context/cart";

import IconCart from "../../../assets/icons/cart.svg";
import IconHeart from "../../../assets/icons/heart.svg";
import IconSAC from "../../../assets/icons/sac.svg";

import * as HO from "./styles";

export default function Options() {
  const { cartItems } = useCartContext();

  return (
    <HO.OptionsContainer>
      <HO.ImageWrap>
        <Image src={IconSAC} alt='Ícone SAC' />
      </HO.ImageWrap>
      <HO.ImageWrap>
        <Image src={IconHeart} alt='Ícone favoritos' />
      </HO.ImageWrap>
      <HO.ImageWrap>
        <Image src={IconCart} alt='Ícone carrinho' />
        {cartItems > 0 && <HO.CartQuantity>{cartItems}</HO.CartQuantity>}
      </HO.ImageWrap>
    </HO.OptionsContainer>
  );
}
