import Head from "next/head";
import LayoutDefault from "../components/_hoc/Layout";
import Banner from "../components/Banner/Principal";
import BrowserBy from "../components/BrowserBy";
import Campaing from "../components/Campaign";
import Carrossel from "../components/Carrosel";
import * as G from "../styles/globals";
export default function Home() {
  return (
    <div>
      <Head>
        <title>WEB Store</title>
        <meta name='description' content='Explosão de preços baixos' />
      </Head>

      <LayoutDefault containerWidth={"100%"} padding={"146px 0 0 0"}>
        <Banner />
        <G.Article>
          <Campaing />
          <Carrossel />
          <BrowserBy />
        </G.Article>
      </LayoutDefault>
    </div>
  );
}
