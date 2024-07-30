"use client";

import { ChoiseForCart, Header } from "@/components";
import CheckForOrders from "@/components/CheckForOrders/CheckForOrders";
import Footer from "@/components/Footer/Footer";
import { useProductCart } from "@/components/Providers/ProductCartProvider";

const ShoppingCart = () => {
  const { productsList, removeFromCart } = useProductCart();

  // console.log(totalCount);
  return (
    <main>
      <div className="container !py-[50px]">
        <h4 className="font-medium col-span-full">Корзина</h4>
        <ChoiseForCart products={productsList} />
        <CheckForOrders products={productsList} deleteProd={removeFromCart} />
      </div>
    </main>
  );
};

export default ShoppingCart;
