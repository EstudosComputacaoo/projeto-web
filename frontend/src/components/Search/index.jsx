import Image from "next/image";
import { useSearchContext } from "../_Context/search";
import Address from "../Address";

/**
 * TODO
 * Adicionar icone no campoo de busca
 */

import * as S from "./style";

export default function Search() {
  const { term, setTerm, filterProducts } = useSearchContext();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterProducts(term);
  };

  return (
    <S.InputContainer>
      <S.SearchIcon>
        <S.Input
          placeholder='Busque aqui'
          onChange={handleChange}
          value={term}
        ></S.Input>
        {
          /*
          <S.ImageWrap onClick={handleSearch}>
          <Image
            className='icone-search'
            height='58px'
            src='#'
            alt={"Ícone da busca"}
          />
        </S.ImageWrap>

          */
        }
        
      </S.SearchIcon>
      <Address />
    </S.InputContainer>
  );
}
