import { useRef } from "react";
import Image from "next/image";
import Card from "../Offer/Card";
import { useSearchContext } from "../_Context/search";
import ArrowPrevious from "../../assets/icons/arrow-previous.svg";
import ArrowNext from "../../assets/icons/arrow-next.svg";

import * as C from "./style";

export default function Carrossel() {
  const { products } = useSearchContext();

  const carouselRef = useRef(null);

  const handleLeft = (e) => {
    e.preventDefault();
    const { current } = carouselRef;
    current.scrollLeft -= 220;
  };
  const handleRight = (e) => {
    e.preventDefault();
    const { current } = carouselRef;
    current.scrollLeft = current.scrollLeft + 220;
  };

  return (
    <C.CarouselContainer>
      <C.CarouselControlLeft>
        <C.ArrowPrevious onClick={handleLeft}>
          <Image src={ArrowPrevious} alt='arrow-previous' />
        </C.ArrowPrevious>
      </C.CarouselControlLeft>
      <C.CarouselList ref={carouselRef}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </C.CarouselList>
      <C.CarouselControlRight>
        <C.ArrowNext onClick={handleRight}>
          <Image src={ArrowNext} alt='arrow-next' />
        </C.ArrowNext>
      </C.CarouselControlRight>
    </C.CarouselContainer>
  );
}
