import { useAuthContext } from "../_Context/AuthContext";
import * as A from "./style";

export default function Address({address}) {

  return (
    <A.AddressContainer>
      <A.TextBold>Enviar para: </A.TextBold>{" "}
      <A.Text>{address}</A.Text>
    </A.AddressContainer>
  );
}
