import * as A from "./style";

export default function Address() {
  return (
    <A.AddressContainer>
      <A.TextBold>Enviar para: </A.TextBold>{" "}
      <A.Text> ` Rua das Hortências, 295 - Boa Vista - Limeira SP`</A.Text>
    </A.AddressContainer>
  );
}
