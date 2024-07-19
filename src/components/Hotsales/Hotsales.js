"use client";
import { mock } from "@/config/constants";
import { useState } from "react";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";
import Cart from "../../ui-kit/icons/Cart/Cart";
import Pagination from "../Pagination/Pagination";
import { CardsList } from "@/components";
import Pagination2 from "../Pagination2/Pagination2";
import Image from "next/image";

const Hotsales = () => {
  const initialItemsPerPage = 3;
  // const { productsList } = useProduct();
  // console.log(productsList);
  const data = mock;

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
      <div className="mt-[200px] container">
        <h4 className="col-span-full">Хиты продаж</h4>
        <div className="options col-span-full">
          <button className="buttonhotsale">Меню</button>
          <button className="buttonhotsale">Чаи</button>
          <button className="buttonhotsale">Посуда</button>
        </div>
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
      />
    </>
  );
};

export default Hotsales;
