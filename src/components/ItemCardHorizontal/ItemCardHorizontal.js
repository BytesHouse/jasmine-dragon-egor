"use client";

import Image from "next/image";
import { Cart, ChooseHeart } from "@/ui-kit/icons";
const image = "/assets/Images/tea-mock.webp";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { addToFavorites, removeFromFavorites } from "@/utils/favoritesTools";
import Link from "next/link";

const ItemCardHorizontal = ({ item, isFavorite, onClick }) => {
  const [isHeart, setIsHeart] = useState(isFavorite);
  const lang = useLocale();
  const { name, description, price, discount, id, nameRo, descriptionRo } = item;
  const t = useTranslations("Menu");

  const handleClickAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClick(item);
    // alert(t("addedToCart"));
  };

  const favRemove = () => {
    removeFromFavorites(item.id);
    setIsHeart(false);
  };

  const favAdd = () => {
    addToFavorites(item.id);
    setIsHeart(true);
  };

  return (
    <li className="col-span-full flex p-[25px] gap-[50px] border border-green-bg items-center transition hover:border-blue hover:bg-green-light _1024:gap-[25px] _1024:p-[25px] _768:border-blue _768:p-[10px] _768:gap-4">
      <Link
        href={`/${lang}/teas/${id}`}
        className="flex gap-[50px] _1024:gap-[25px] _768:gap-4 items-center flex-grow relative"
      >
        <div className="relative max-w-[250px] w-full _1240:max-w-[294px] _768:!flex-1">
          <Image
            src={item.imageUrl.length ? item.imageUrl[0] : image}
            alt="teagreen"
            width={250}
            height={250}
            className="h-auto w-full"
          />
          <ChooseHeart
            // isMini={width < 768}
            onClick={isHeart ? favRemove : favAdd}
            className={`${isHeart ? "fill-blue-light" : ""
              } absolute right-[0px] top-[2px] hover:fill-blue-light z-10 cursor-pointer`}
          />
        </div>
        <div className="flex flex-col gap-[25px] max-w-[463px] _768:!flex-1 _768:gap-4">
          <div>
            <h4
              className={`${description && "mb-4"} _768:text-h5 _491:text-p1`}
            >
              {lang === 'ru' ? name : nameRo}
            </h4>
            {description && <p className="p1 _768:p2 _491:p3">{lang === 'ru' ? description : descriptionRo}</p>}
          </div>
          <div>
            {discount == 0 ? (
              <span className="text-h5 font-semibold text-blue-light _768:text-[20px] _491:text-p2">
                {price} Lei
              </span>
            ) : (
              <>
                <span className="text-h5 font-semibold text-blue-light _768:text-[20px] _491:text-p2">
                  {price - discount}
                </span>
                <span className="discount ml-[15px] _768:text-p1 _491:text-[10px] _491:font-normal">
                  {price} Lei
                </span>
              </>
            )}
          </div>
          <button
            onClick={handleClickAddToCart}
            className="hidden _1240:flex _1240:max-w-max items-center justify-center gap-[25px] border-2 border-blue-light bg-green-light p-[25px_100px] _1600:p-[25px_50px] _1024:w-full _1024:max-w-none _768:p-[10px] _768:gap-[10px]"
          >
            <Cart />
            <span className="text-h5 font-Nunito-Sans font-semibold text-blue-light _768:text-[20px] _491:text-p3">
              {t("buttonToCart")}
            </span>
          </button>
        </div>
      </Link>
      <div className="_1240:hidden  flex justify-end">
        <button
          onClick={handleClickAddToCart}
          className="flex items-center gap-[25px] border-2 border-blue-light bg-green-light p-[25px_100px] _1600:p-[25px_50px] "
        >
          <Cart />
          <span className="text-h5 font-Nunito-Sans font-semibold text-blue-light">
            {t("buttonToCart")}
          </span>
        </button>
      </div>
    </li>
  );
};

export default ItemCardHorizontal;
