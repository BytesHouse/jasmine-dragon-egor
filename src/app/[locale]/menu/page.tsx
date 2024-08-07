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

  const handlePageClick = (data: any) => {
    let { selected } = data;
    setCurrentPage(selected);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: document.getElementById("cardsListTop")!.offsetTop,
        behavior: "smooth",
      });
    }
  };
  // Вычисляем текущие элементы для отображения
  const defSort = (a: any, b: any) => b.updatedAt - a.updatedAt;
  const [sortFunc, setSortFunc] = useState(() => defSort);
  const defFilter = (item: any) => true;
  const [filterFunc, setFilterFunc] = useState(() => defFilter);

  const offset = currentPage * itemsPerPage;
  const currentPageData = productsList
    .filter(filterFunc)
    .sort(sortFunc)
    .slice(offset, offset + itemsPerPage);
  // ==================================================

  return (
    <main>
      <div className="container !py-[50px]" id="cardsListTop">
        <h4 className="col-span-full">{t("heading")}</h4>
        <div className="flex justify-between gap-x-[100px] col-span-full _1240:gap-y-[15px] _1240:gap-x-[15px] _1240:flex-wrap _768:gap-x-2">
          <Sort
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            setSortFunc={setSortFunc}
            setFilterFunc={setFilterFunc}
          />
          <ToggleView
            isHorizontal={isHorizontal}
            toggleView={setIsHorizontal}
          />
        </div>
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
    </main>
  );
};
export default Menu;
