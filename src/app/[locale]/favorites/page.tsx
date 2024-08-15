"use client";

import { useState } from "react";
import { CardsList, ToggleView } from "@/components";
import { mock, mock2 } from "@/config/constants";
import Pagination2 from "@/components/Pagination2/Pagination2";
import { useLocale, useTranslations } from "next-intl";

import {
  getFavoritesList,
  addToFavorites,
  removeFromFavorites,
} from "@/utils/favoritesTools";

import { useProduct } from "@/components/Providers/ContextProvider";
import Link from "next/link";
import useScreenWidth from "@/hooks/useScreenWidth";

const FavoritesPage = () => {
  const lang = useLocale();
  const [isHorizontal, setIsHorizontal] = useState(true);
  const { productsList } = useProduct();
  const data = productsList.slice(45, 52);
  const width = useScreenWidth();
  const initialItemsPerPage = width < 1240 ? 2 : 3;

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePageClick = (data: any) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };
  // Вычисляем текущие элементы для отображения
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  const { findProductById } = useProduct();
  const [favorites, setFavorites] = useState(
    getFavoritesList().map((item) => findProductById(item))
  );

  // console.log(favorites);

  const t = useTranslations("Favorites");

  return (
    <main>
      <div className="container !py-[50px]">
        {/* <div className="section3"> */}
        {favorites.length === 0 ? (
          <>
            <h3 className="simple col-span-full text-center _491:text-h4 font-semibold">
              {t("emptyFavorites")}
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
            <h4 className="col-span-half _491:text-h5">{t("heading")}</h4>
            <ToggleView
              isHorizontal={isHorizontal}
              toggleView={setIsHorizontal}
              className="col-span-half"
            />
            <CardsList
              isHorizontal={isHorizontal}
              cardsData={favorites}
              className="!py-0 col-span-full"
            />
          </>
        )}

        {/* <Likeitems /> */}
        <h4 className="col-span-full mt-[50px] _491:text-h5">
          {t("mightLike")}
        </h4>
        <CardsList
          cardsData={currentPageData}
          className="!py-0 col-span-full"
        />
        <Pagination2
          pageCount={Math.ceil(data.length / itemsPerPage)}
          onPageChange={handlePageClick}
          currentPage={currentPage}
          className="col-span-full"
        />
        {/* </div> */}
      </div>
    </main>
  );
};

export default FavoritesPage;
