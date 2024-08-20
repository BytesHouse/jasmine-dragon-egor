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
    // console.log(storedCart);
    if (storedCart?.length! > 0) {
      setProducts(JSON.parse(storedCart!.toString()));
    }
  }, []);
  useEffect(() => {
    if (productsList.length > 0) {
      localStorage.setItem("jd-cart", JSON.stringify(productsList));
    } else {
      localStorage.removeItem("jd-cart");
    }
  }, [productsList]);

  // CRUD

  const addToCart = (product: any, quantity: any = 1) => {
    const newList = productsList.map((item) =>
      item.id === Number(product.id)
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );

    const productExists = newList.some(
      (item) => item.id === Number(product.id)
    );

    if (!productExists) {
      newList.push({ ...product, quantity: quantity });
    }

    setProducts(newList);
  };

  const removeFromCart = (productId: any) => {
    const arr = productsList.filter((item: any) => item.id !== productId);
    setProducts(arr);
  };

  const increment = (productId: number) => {
    const newList = productsList.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setProducts(newList);
  };
  const decrement = (productId: number) => {
    const newList = productsList.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setProducts(newList);
  };

  let productsPrice = productsList.reduce(
    (acc: number, curr: any) =>
      acc + Number(curr.price * curr.quantity - curr.discount),
    0
  );
  const [deliveryPrice, setDeliveryPrice] = useState(50);
  let totalPrice = productsPrice + deliveryPrice;

  // TODO:
  // Increase
  // Decrease
  // Remove from card
  // Discount
  // Delivery

  return (
    <ProductCartContext.Provider
      value={{
        productsList,
        addToCart,
        removeFromCart,
        productsPrice,
        deliveryPrice,
        totalPrice,
        increment,
        decrement,
        setDeliveryPrice,
      }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

export const useProductCart = () => useContext(ProductCartContext);
