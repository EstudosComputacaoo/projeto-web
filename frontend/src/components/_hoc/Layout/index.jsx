import Header from "../../Header/header";
import * as G from "../../../styles/globals";
import { useCartContext } from "../../_Context/cart";
import { useEffect } from "react";

export default function LayoutDefault({ children, containerWidth, padding }) {
  const { getCart } = useCartContext()
  useEffect(() => getCart(), [])
  return (
    <>
      <Header />
      <main>
        <G.Container
          alignItems='center'
          flexDirection='column'
          containerWidth={containerWidth}
          padding={padding}
        >
          {children}
        </G.Container>
      </main>
    </>
  );
}
