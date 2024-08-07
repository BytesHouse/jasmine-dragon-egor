"use client";
import { mock } from "@/config/constants";
import { useState } from "react";
import { CardsList } from "@/components";
import Pagination2 from "../Pagination2/Pagination2";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useTranslations } from "next-intl";
import { useProduct } from "../Providers/ContextProvider";

const Hotsales = () => {
  const t = useTranslations("HotSales");
  const width = useScreenWidth();
  const initialItemsPerPage = width < 1240 ? 2 : 3;
  const { productsList } = useProduct();
  // console.log(productsList);
  const data = productsList.slice(42, 69);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePageClick = (data) => {
    let { selected } = data;
    setCurrentPage(selected);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: document.getElementById("hotSales").offsetTop,
        behavior: "smooth",
      });
    }
  };
  // Вычисляем текущие элементы для отображения
  const offset = currentPage * itemsPerPage;
  const currentPageData = data?.slice(offset, offset + itemsPerPage);
  // ==================================================

  return (
    <>
      <div className="mt-[200px] container !pb-[50px] _768:!pb-[25px]">
        <h4 className="col-span-full">{t("heading")}</h4>
        {/* <div className="flex gap-[25px] col-span-full _768:gap-[15px]">
          <button className="buttonhotsale">Меню</button>
          <button className="buttonhotsale">Чаи</button>
          <button className="buttonhotsale">Посуда</button>
        </div> */}
      </div>
      <CardsList
        id="hotSales"
        cardsData={currentPageData}
        className="!pt-0 !pb-[50px]"
      />
      <Pagination2
        pageCount={Math.ceil(data?.length / itemsPerPage)}
        onPageChange={handlePageClick}
        currentPage={currentPage}
        marginPages={0}
      />
    </>
  );
};

export default Hotsales;
