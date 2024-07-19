"use client";

import { createContext, useState, useContext } from "react";

const ProductCartContext = createContext<any>(null);

export const ProductCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let cart = [];
  if (localStorage.getItem("jd-cart")) {
    cart = JSON.parse(localStorage.getItem("jd-cart")!);
  } else {
    localStorage.setItem("jd-cart", "[]");
  }
  const [productsList, setProducts] = useState<any[]>(cart);
  // CRUD
  const addToCard = (product: any) => {
    const existingProduct = productsList.find(
      (item: any) => item.id === product.id
    );
    if (existingProduct) {
      // Если товар уже в корзине, увеличиваем его количество
      setProducts(
        productsList.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Если товара нет в корзине, добавляем его с количеством 1
      setProducts([...productsList, { ...product, quantity: 1 }]);
    }
  };
  // Increase
  // Decrease
  // Remove from card
  // Total Count
  // Discount
  // Delivery

  return (
    <ProductCartContext.Provider
      value={{ productsList, setProducts, addToCard }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

export const useProductCart = () => useContext(ProductCartContext);
