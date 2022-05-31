import Image from "next/image";
import MyAccount from "../MyAccount";

import Avatar from "../.././assets/images/user.png";

import * as U from "./userStyle";

export default function User() {
  let name = "Rodolfo";
  let lastName = "Augusto";

  return (
    <U.UserContainer>
      <U.ImageWrap>
        <Image src={Avatar} alt='Avatar usuário' />
      </U.ImageWrap>
      <U.Info>
        <U.UserName>
          <U.UserFirstName>{`Olá ${name}`}</U.UserFirstName>
          <U.UserLastName>{`${lastName}`}</U.UserLastName>
        </U.UserName>
        <MyAccount />
      </U.Info>
    </U.UserContainer>
  );
}
