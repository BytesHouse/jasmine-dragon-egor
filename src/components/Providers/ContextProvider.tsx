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
  const [filter, setFilter] = useState<number[]>([]);
  const [productsList, setProducts] = useState<TeaProduct[]>(products);
  const [reviewsList, setReviews] = useState<any>(reviews);
  const findProductById = (id: number) => {
    return productsList.find((item) => item?.id == id);
  };

  const addFilter = (category: number) => {
    setFilter((prev: any) => {
      if (!prev.includes(category)) {
        return [...prev, category];
      }
      return prev;
    });
  };

  const removeFilter = (category: number) => {
    setFilter((prev) => prev.filter((item) => item !== category));
  };

  const handleCheckboxChange = (category: number) => {
    if (filter.includes(category)) {
      removeFilter(category);
    } else {
      addFilter(category);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        productsList,
        setProducts,
        findProductById,
        reviewsList,
        handleCheckboxChange,
        filter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
