import Image from "next/image";
import * as B from "./style";
import FirstImg from "../../assets/images/sell-product.png";
import SecondImg from "../../assets/images/ninja.png";
import ThirdImg from "../../assets/images/leilao.png";

export default function BrowserBy() {
  const list = [
    {
      id: 1,
      name: "Venda o seu produto",
      descricao: "Venda o seu produto usado em nosso marketplace.",
      img: FirstImg,
    },
    {
      id: 2,
      name: "Conheça os produtos prime",
      descricao: "Fique por dentro de todos os nossoa benefícios.",
      img: SecondImg,
    },
    {
      id: 3,
      name: "Conheça nossos produtos de leilão",
      descricao: "As melhores oportunidades de compra.",
      img: ThirdImg,
    },
  ];

  return (
    <B.BrowserBy>
      {list.map((item) => (
        <B.Item key={item.id}>
          <B.Info>
            <B.Title>{item.name}</B.Title>
            <B.Description>{item.descricao}</B.Description>
          </B.Info>
          <Image src={item.img} alt={item.name} />
        </B.Item>
      ))}
    </B.BrowserBy>
  );
}
