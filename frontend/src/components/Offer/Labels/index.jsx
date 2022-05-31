import Image from "next/image";
import IconTruck from "../../../assets/icons/Truck-Fill.svg";
import * as L from "./style";

export default function Label({ labels }) {
  return (
    <L.Div>
      {labels?.map((label) => (
        <L.DivFlex key={label.nome}>
          <Image src={IconTruck} alt='Icone frete grátis' />
          <L.TextNormal>{label.nome}</L.TextNormal>
        </L.DivFlex>
      ))}
    </L.Div>
  );
}
