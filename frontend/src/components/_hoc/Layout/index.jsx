import Header from "../../Header/header";
import * as G from "../../../styles/globals";

export default function LayoutDefault({ children, containerWidth, padding }) {
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
