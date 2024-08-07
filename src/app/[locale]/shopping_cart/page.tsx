"use client";

import { ChoiseForCart, CheckForOrders } from "@/components";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const ShoppingCart = () => {
  const lang = useLocale();
  const {
    productsList,
    removeFromCart,
    productsPrice,
    deliveryPrice,
    totalPrice,
    increment,
    decrement,
  } = useProductCart();
  const t = useTranslations("Cart");

  // console.log(productsList);
  return (
    <main>
      <div className="container !py-[50px]">
        {productsList.length === 0 ? (
          <>
            <h3 className="simple col-span-full text-center _491:text-h4 font-semibold">
              {t("emptyCart")}
            </h3>
            <div className="col-span-full flex justify-center gap-[25px]">
              {/* <p className="p1 ">Исправить?</p> */}
              <Link href={`/${lang}/menu`} className="buttonToCart1 !w-[50%]">
                {t("menuButton")}
              </Link>
            </div>
          </>
        ) : (
          <>
            <h4 className="font-medium col-span-full">{t("heading")}</h4>
            <ChoiseForCart
              products={productsList}
              deleteProd={removeFromCart}
              increment={increment}
              decrement={decrement}
            />
            <CheckForOrders
              products={productsList}
              deleteProd={removeFromCart}
              productsPrice={productsPrice}
              deliveryPrice={deliveryPrice}
              totalPrice={totalPrice}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default ShoppingCart;
