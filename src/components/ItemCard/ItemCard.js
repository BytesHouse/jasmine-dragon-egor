"use client";

import Image from "next/image";
import Cart from "../../ui-kit/icons/Cart/Cart";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";
import { ChooseHeartMini } from "@/ui-kit/icons";
// import useScreenWidth from "@/hooks/useScreenWidth";
import { useLocale, useTranslations } from "next-intl";
const image = "/assets/Images/tea-mock.webp";
import Link from "next/link";
import { useState } from "react";
import { addToFavorites, removeFromFavorites } from "@/utils/favoritesTools";

import { motion } from "framer-motion";

const ItemCard = ({ item, onClick, isFavorite = false, index }) => {
  const [isHeart, setIsHeart] = useState(isFavorite);
  const t = useTranslations("Menu");
  // const width = useScreenWidth();
  const lang = useLocale();
  const { name, description, price, id, discount, nameRu, nameRo, descriptionRu, descriptionRo } = item;
  const handleClickAddToCart = (e) => {
    e.stopPropagation();
    onClick(item);
    // alert(t("addedToCart"));
  };
  // console.log(name)
  const favRemove = () => {
    removeFromFavorites(item.id);
    setIsHeart(false);
  };

  const favAdd = () => {
    addToFavorites(item.id);
    setIsHeart(true);
  };
  return (
    <motion.li
      initial={{ y: 200, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 + index * 0.05, ease: "anticipate" },
      }}
      className="col-span-third _1240:col-span-half relative flex flex-col gap-8 border border-green-bg p-[25px] hover:border-blue hover:bg-green-light _768:gap-4 _768:border-blue _768:p-[10px]"
    >
      <ChooseHeart
        // isMini={width < 768}
        onClick={isHeart ? favRemove : favAdd}
        className={`${isHeart ? "fill-blue-light" : ""
          } absolute right-[15px] top-[15px] z-10 cursor-pointer hover:fill-blue-light _768:right-[5px] _768:top-[15px]`}
      />
      <Link
        href={`/${lang}/teas/${id}`}
        className="flex flex-col justify-between gap-4"
      >
        <div className="relative">
          <Image
            src={item.imageUrl.length ? item.imageUrl[0] : image}
            alt="teagreen"
            width={413}
            height={413}
            className="h-auto"
          />
        </div>
        <h4 className="line-clamp-3 text-ellipsis _768:text-h5 _491:text-p1">
          {lang === 'ru' ? nameRu : nameRo}
        </h4>
        {description && <p className="line-clamp-5 p1 _768:p2 _491:p3">{lang === 'ru' ? descriptionRu : descriptionRo}</p>}
      </Link>
      <div className="flex h-max w-full flex-grow flex-col justify-end gap-[15px]">
        <div className="flex w-full items-center gap-[15px]">
          {discount == 0 ? (
            <span className="font-Nunito-Sans text-h5 font-semibold text-blue-light _768:text-[20px] _491:text-p2">
              {price} Lei.
            </span>
          ) : (
            <>
              <span className="font-Nunito-Sans text-h5 font-semibold text-blue-light _768:text-[20px] _491:text-p2">
                {price - discount}
              </span>
              <span className="discount _768:text-p1 _491:text-[10px] _491:font-normal">
                Lei
              </span>
            </>
          )}
        </div>

        <button onClick={handleClickAddToCart} className="buttonToCart1">
          <Cart />
          {t("buttonToCart")}
        </button>
      </div>
    </motion.li>
  );
};

export default ItemCard;
