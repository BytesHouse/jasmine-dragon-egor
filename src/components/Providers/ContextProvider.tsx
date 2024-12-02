"use client";
import { TeaProduct } from "@/types/tea-product.type";

import { createContext, useState, useContext } from "react";

const ProductContext = createContext<any>(null);

export const ProductProvider = ({
  children,
  products,
  reviews,
}: {
  children: React.ReactNode;
  products: TeaProduct[];
  reviews?: any;
}) => {
  const [productsList, setProducts] = useState<TeaProduct[]>(products);
  const [reviewsList, setReviews] = useState<any>(reviews);
  const findProductById = (id: number) => {
    return productsList.find((item) => item?.id === id);
  };
  return (
    <ProductContext.Provider
      value={{ productsList, setProducts, findProductById, reviewsList }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
