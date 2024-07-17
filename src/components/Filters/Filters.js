"use client";

import { useState } from "react";
import { Sort, ToggleView, CardsList } from "@/components";
import { mock } from "@/config/constants";
import Pagination2 from "../Pagination2/Pagination2";

const Filters = () => {
  const [isHorizontal, setIsHorizontal] = useState(true); // Состояние для отслеживания текущего вида товаров
  // ==================================================
  const initialItemsPerPage = 6;
  const data = mock;

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };
  // Вычисляем текущие элементы для отображения
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  // ==================================================

  return (
    <>
      <div className="container !gap-[25px] !py-[50px]">
        <div className="flex justify-between flex-row gap-12 col-span-full">
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
      <CardsList isHorizontal={isHorizontal} cardsData={currentPageData} />
      <Pagination2
        pageCount={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
};
export default Filters;
