import Image from "next/image";
import { useCartContext } from "../../_Context/cart";
import IconCart from "../../../assets/icons/cart.svg";

import * as B from "./style";

export default function Button() {
  const { setCartItems } = useCartContext();

  const handleProduct = (e) => {
    e.preventDefault();
    setCartItems((prevState) => prevState + 1);
  };

  return (
    <B.Button onClick={handleProduct}>
      <Image src={IconCart} alt='Imagem do produto' />
      <B.Text>Comprar</B.Text>
    </B.Button>
  );
}
