import { createContext, useEffect, useState, useContext } from "react";

const Context = createContext(null);

export function SearchProvider({ children, ...props }) {
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const filterProducts = (text) => {
    if (text.length > 0)
      setProducts(
        products.filter((p) =>
          p.title.toUpperCase().includes(text.toUpperCase())
        )
      );
    else handleSearch();
  };

  const searchProps = {
    products,
    setProducts,
    term,
    setTerm,
    filterProducts,
    ...props,
  };

  return (
    <Context.Provider value={{ ...searchProps }}>{children}</Context.Provider>
  );
}

export function useSearchContext() {
  return useContext(Context);
}
