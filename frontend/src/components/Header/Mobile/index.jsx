import Image from "next/image";
import Logo from "../../../assets/icons/Logo.svg";
import IconMenuHamburger from "../../Menu/Hamburger";
import Search from "../../Search";
import Options from "../Options";
import * as HM from "./style";

export default function HeaderMobile() {
  return (
    <HM.HeaderMobile>
      <HM.Top>
        <HM.Menus>
          <IconMenuHamburger />
          <Image src={Logo} width={"100%"} alt='Logo' />
        </HM.Menus>
        <Options />
      </HM.Top>
      <HM.Input>
        <Search />
      </HM.Input>
    </HM.HeaderMobile>
  );
}
