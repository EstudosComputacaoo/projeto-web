import { useEffect, useState } from "react";
import Image from "next/image";
import ImgBanner from "../../../assets/images/Banner-Topo.png";
import * as B from "./style";

export default function Banner() {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setHeight(`${window.innerWidth * 0.2}px`)
    );
  }, []);

  return (
    <B.BannerLink height={height}>
      <Image src={ImgBanner} alt='Banner da Home' />
    </B.BannerLink>
  );
}
