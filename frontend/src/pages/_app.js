import { Fragment } from "react/cjs/react.production.min";
import { CartProvider } from "../components/_Context/cart.jsx";
import { SearchProvider } from "../components/_Context/search.jsx";
import GlobalStyles from "../styles/globals.js";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyles />
      <SearchProvider>
        <CartProvider>
          <Component {...pageProps} />;
        </CartProvider>
      </SearchProvider>
    </Fragment>
  );
}

export default App;
