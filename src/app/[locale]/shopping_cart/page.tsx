"use client";

import { ChoiseForCart, Header } from "@/components";
import CheckForOrders from "@/components/CheckForOrders/CheckForOrders";
import Footer from "@/components/Footer/Footer";
import { useProductCart } from "@/components/Providers/ProductCartProvider";

const ShoppingCart = () => {
  const { productsList, removeFromCart } = useProductCart();

  // console.log(totalCount);
  return (
    <>
      {/* <div className="flex flex-col col-span-12 mt-[50px] gap-[50px] relative font-[var(--Playfair-Display)] italic text-[var(--blue-light)]"> */}
      <main className="container !py-[50px]">
        <h4 className="font-medium col-span-full">Корзина</h4>

        {/* <div className="flex flex-row  justify-between"> */}
        <ChoiseForCart products={productsList} />
        <CheckForOrders products={productsList} deleteProd={removeFromCart} />
        {/* </div> */}
      </main>
      {/* </div> */}
    </>
  );
};

export default ShoppingCart;
