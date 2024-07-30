"use client";

import { createContext, useState, useContext, useEffect } from "react";

const ProductCartContext = createContext<any>(null);

export const ProductCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productsList, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("jd-cart");
    if (storedCart?.length! > 0) {
      setProducts(JSON.parse(storedCart!.toString()));
    }
  }, []);
  useEffect(() => {
    if (productsList?.length > 0) {
      localStorage.setItem("jd-cart", JSON.stringify(productsList));
    }
  }, [productsList]);
  // CRUD
  const addToCart = (product: any) => {
    setProducts([...productsList, product]);
  };
  const removeFromCart = (productId: any) => {
    setProducts(productsList.filter((item: any) => item.id !== productId));
  };
  // Increase
  // Decrease
  // Remove from card
  // Total Count
  // Discount
  // Delivery

  return (
    <ProductCartContext.Provider
      value={{ productsList, addToCart, removeFromCart }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

export const useProductCart = () => useContext(ProductCartContext);
