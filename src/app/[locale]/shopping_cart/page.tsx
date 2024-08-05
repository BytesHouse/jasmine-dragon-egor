"use client";

import { ChoiseForCart, Header } from "@/components";
import CheckForOrders from "@/components/CheckForOrders/CheckForOrders";
import Footer from "@/components/Footer/Footer";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const {
    productsList,
    removeFromCart,
    productsPrice,
    deliveryPrice,
    totalPrice,
  } = useProductCart();
  const t = useTranslations("Cart");

  return (
    <main>
      <div className="container !py-[50px]">
        <h4 className="font-medium col-span-full">{t("heading")}</h4>
        <ChoiseForCart products={productsList} deleteProd={removeFromCart} />
        <CheckForOrders
          products={productsList}
          deleteProd={removeFromCart}
          productsPrice={productsPrice}
          deliveryPrice={deliveryPrice}
          totalPrice={totalPrice}
        />
      </div>
    </main>
  );
};

export default ShoppingCart;
