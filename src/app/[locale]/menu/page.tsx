"use client";

import { useState } from "react";
import { Sort, ToggleView, CardsList } from "@/components";
import Pagination2 from "@/components/Pagination2/Pagination2";
import { useProduct } from "@/components/Providers/ContextProvider";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations("Menu");
  const [isHorizontal, setIsHorizontal] = useState(true); // Состояние для отслеживания текущего вида товаров
  // ==================================================
  const initialItemsPerPage = 6;
  const { productsList } = useProduct();
  // const data = mock;

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePageClick = (data) => {
    let { selected } = data;
    setCurrentPage(selected);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: document.getElementById("cardsListTop").offsetTop,
        behavior: "smooth",
      });
    }
  };
  // Вычисляем текущие элементы для отображения
  const offset = currentPage * itemsPerPage;
  const currentPageData = productsList?.slice(offset, offset + itemsPerPage);
  // ==================================================

  return (
    <>
      <div className="container !py-[50px]" id="cardsListTop">
        <h4 className="col-span-full">{t("heading")}</h4>
        <div className="flex justify-between gap-x-[100px] col-span-full _1240:gap-y-[15px] _1240:gap-x-[15px] _1240:flex-wrap _768:gap-x-2">
          <Sort itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
          <ToggleView
            isHorizontal={isHorizontal}
            toggleView={setIsHorizontal}
          />
        </div>
        {/* <div className="row2sortmenu col-span-full">
          <button className="buttonsec3">
            Черные чаи
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Оолонг
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Черные чаи
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Красные чаи
            <CloseMini />
          </button>
          <button className="buttonsec3">
            Зеленые чаи
            <CloseMini />
          </button>
        </div> */}
      </div>
      <CardsList
        isHorizontal={isHorizontal}
        cardsData={currentPageData}
        className="!pt-0 !pb-[50px]"
      />
      <Pagination2
        pageCount={Math.ceil(productsList?.length / itemsPerPage)}
        onPageChange={handlePageClick}
        currentPage={currentPage}
        marginPages={0}
      />
    </>
  );
};
export default Menu;
