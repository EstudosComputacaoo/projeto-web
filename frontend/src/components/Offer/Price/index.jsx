import * as P from "./style";

export default function Price({ product }) {
  return (
    <P.PriceContainer>
      <P.TextNormalDarkLine>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </P.TextNormalDarkLine>
      <P.TextOrange>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </P.TextOrange>
      <P.TextNormalDark>À VISTA</P.TextNormalDark>
    </P.PriceContainer>
  );
}
