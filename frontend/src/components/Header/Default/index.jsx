import Image from "next/image";
import Search from "../../Search";
import User from "../../User";
import Options from "../Options";
import IconMenuHamburger from "../../Menu/Hamburger";
import Logo from "../../../assets/icons/Logo.svg";
import * as H from "./style";
import SubMenu from "../SubMenu";
import * as G from "../../../styles/globals";

export default function HeaderDefault() {
  return (
    <>
      <H.Main>
        <G.Container alignItems='center' justifyContent='space-between'>
          <IconMenuHamburger />
          {
            /**
             * <H.Logo>
            <Image src={Logo} alt='Logo' />
          </H.Logo>
             * 
             */
          }
          
          <H.Input>
            <Search />
          </H.Input>
          <H.UserInfo>
            <User />
          </H.UserInfo>
          <Options />
        </G.Container>
      </H.Main>
      <SubMenu />
    </>
  );
}
