"use client";
import { TeaProduct } from "@/types/tea-product.type";

import { createContext, useState, useContext } from "react";

const ProductContext = createContext<any>(null);

export const ProductProvider = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: TeaProduct[];
}) => {
  const [productsList, setProducts] = useState<TeaProduct[]>(products);
  const findProductById = (id: number) => {
    return productsList.find((item) => item.id === id);
  };
  return (
    <ProductContext.Provider
      value={{ productsList, setProducts, findProductById }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
