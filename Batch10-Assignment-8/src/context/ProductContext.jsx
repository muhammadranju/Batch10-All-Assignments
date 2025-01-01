/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductContextArray from "./ProductContextArray";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  return (
    <ProductContextArray.Provider value={{ products, setProducts }}>
      {children}
    </ProductContextArray.Provider>
  );
};

export default ProductContextProvider;
