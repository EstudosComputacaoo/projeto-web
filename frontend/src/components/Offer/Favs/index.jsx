import { useState } from "react";
import Image from "next/image";
import IconHeartNoFill from "../../../assets/icons/heartNoFill.svg";
import IconHeartOrange from "../../../assets/icons/heartOrange.svg";
import IconStarOrange from "../../../assets/icons/starOrange.svg";
import IconStarHalf from "../../../assets/icons/star-half.svg";
import IconStarEmpty from "../../../assets/icons/star-no-fill.svg";

import * as F from "./styles";

export default function Favs({ rate }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function renderStars() {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      let imgPath = "";
      if ((rate / i) * 100 > 100) imgPath = IconStarOrange;
      else if ((rate / i) * 100 > 85) imgPath = IconStarHalf;
      else imgPath = IconStarEmpty;
      stars.push(<Image key={i} src={imgPath} alt='Indica nota' />);
    }

    return stars;
  }

  return (
    <F.Div>
      <Image
        onClick={() => setIsFavorite(!isFavorite)}
        src={isFavorite ? IconHeartOrange : IconHeartNoFill}
        alt={"Ícone de favorito"}
      />
      <div>{renderStars()}</div>
    </F.Div>
  );
}
