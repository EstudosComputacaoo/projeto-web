import { useEffect, useState } from "react";
import DropDown from "../../DropDown";
import * as SM from "./styles";
import * as G from "../../../styles/globals";

export default function SubMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <SM.SubMenuContainer>
      <G.Container>
        <SM.Select>
          <DropDown data={categories} />
        </SM.Select>
        <SM.Text>Seja PRIME</SM.Text>
        <SM.Text>Central de atendimento</SM.Text>
      </G.Container>
    </SM.SubMenuContainer>
  );
}
