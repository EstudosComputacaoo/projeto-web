import { useState } from "react";
import LoginButton from "../LoginButton";
import * as MH from "./style";

export default function IconMenuHamburger() {
  const [isClosed, setIsClosed] = useState(true);
  const [isLogged, setIsLogged] = useState(true);

  const perfil = ["Minha conta", "meus pedidos", "favoritos", "atendimento"];

  const novidades = ["Mais procurados", "Acabaram de chegar"];

  const links = ["seja prime", "cartão", "Pix"];

  let name = "Rodolfo";
  return (
    <>
      <MH.Menu onClick={() => setIsClosed(!isClosed)}>
        <MH.MenuItem></MH.MenuItem>
        <MH.MenuItem></MH.MenuItem>
        <MH.MenuItem></MH.MenuItem>
      </MH.Menu>
      <MH.MenuContent closed={isClosed}>
        <MH.ButtonClose onClick={() => setIsClosed(true)}>x</MH.ButtonClose>

        <MH.ContentTitle>
          {`Olá${isLogged ? " " + name : ". Faça seu login"}`}
        </MH.ContentTitle>

        <MH.MenuContentList>
          {perfil.map((p) => (
            <MH.MenuContentListItem key={p}>
              <MH.MenuContentListLink href=''>{p}</MH.MenuContentListLink>
            </MH.MenuContentListItem>
          ))}
        </MH.MenuContentList>
        <MH.MenuContentList>
          {novidades.map((n) => (
            <MH.MenuContentListItem key={n}>
              <MH.MenuContentListLink href=''>{n}</MH.MenuContentListLink>
            </MH.MenuContentListItem>
          ))}
        </MH.MenuContentList>
        <MH.MenuContentList>
          {links.map((l) => (
            <MH.MenuContentListItem key={l}>
              <MH.MenuContentListLink href=''>{l}</MH.MenuContentListLink>
            </MH.MenuContentListItem>
          ))}
        </MH.MenuContentList>
        <LoginButton />
      </MH.MenuContent>
    </>
  );
}
