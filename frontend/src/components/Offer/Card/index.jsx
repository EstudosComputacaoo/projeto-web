import Image from "next/image";
import Price from "../Price";
import Label from "../Labels";
import Favs from "../Favs";
import Button from "../Button";

import * as C from "./style";

export default function Card({ product }) {
  return (
    <C.Card>
      <Favs rate={product?.rating?.rate} />
      <C.Info>
        <C.ImageWrap>
          <Image
            width='100%'
            height='100%'
            objectFit='contain'
            src={product?.image}
            alt='produto'
          />
        </C.ImageWrap>
        <C.TextNormal>Fabricante</C.TextNormal>
        <C.TextBold>{product.title}</C.TextBold>
        <Price product={product} />
        <Label labels={product.labels} />
      </C.Info>
      <Button />
    </C.Card>
  );
}
