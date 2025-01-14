"use client";

import ImagesComponent from "../ImagesComponent/ImagesComponent";
import FavoriteButton from "@/ui-kit/FavoriteButton/FavoriteButton";
import Counter from "@/ui-kit/Counter/Counter";
import { Cart } from "@/ui-kit/icons";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { addToFavorites } from "@/utils/favoritesTools";
import "react-toastify/dist/ReactToastify.css";

const DescriptionBlock = ({ product }) => {
  const { nameRu, subtype, descriptionRu, strength, brewRes, id, nameRo, descriptionRo, weight, price, currency } = product;
  const { addToCart } = useProductCart();
  const [quantity, setQuantity] = useState(1);
  const t = useTranslations("DescriptionBlock");
  const path = useLocale()

  const handleClickAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, quantity);
    setQuantity(1);
    // alert(`${t("addedToCartCount")}${quantity}`);
    toast(
      <p className="p1">
        {t("addedToCartCount")}
        {quantity}
      </p>
    );
  };

  const handleClickAddToFavorites = () => {
    addToFavorites(id);
    toast(<p className="p1">{t("addedToFavorites")}</p>);
  };

  return (
    <>
      {/* <section className="col-span-full"> */}
      <ImagesComponent product={product} />
      <div className="col-span-5 w-full flex flex-col gap-[25px] _1024:col-span-full">
        <ToastContainer
          position="bottom-right"
          closeButton={false}
          // autoClose={false}
          autoClose={2500}
          // hideProgressBar={false}
          newestOnTop={true}
          pauseOnFocusLoss={false}
          // draggable
          pauseOnHover={false}
          // theme="light"
          transition={Bounce}
        />
        <h1>«{path === 'ru' ? nameRu : nameRo}»</h1>
        <div className="flex justify-between items-center">
          <FavoriteButton onClick={handleClickAddToFavorites}>
            {t("addToFavorites")}
          </FavoriteButton>
          <div>
            {`${(price * quantity).toFixed(2)} ${currency ? currency : 'MDL'}`}
          </div>
        </div>
        <strong className="">{t("heading")}</strong>
        <p>{path === 'ru' ? descriptionRu : descriptionRo}</p>
        <strong>{t("characteristics")}</strong>
        <ul className="list-disc pl-4">
          <li>
            {t("strength")}
            {strength ? strength : "?"}/10
          </li>
          <li>
            {t("brewRes")}
            {brewRes ? brewRes : "?"}/10
          </li>
          <li>
            {t("subtype")}
            {subtype ? subtype : "Не указано"}
          </li>
        </ul>
        <div className="flex gap-[50px]">
          <Counter
            weight={weight}
            initialValue={quantity}
            increment={() => setQuantity((prev) => prev + 1)}
            decrement={() => setQuantity((prev) => prev > 1 && prev - 1)}
          />
          <button className="buttonToCart1" onClick={handleClickAddToCart}>
            <Cart />
            <span className="flex items-center gap-[5px] text-h5 font-Nunito-Sans font-semibold _1240:text-[20px] _1024:text-h5 _768:text-[20px] _491:text-p3">
              {t("addToCart")}
            </span>
          </button>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default DescriptionBlock;
