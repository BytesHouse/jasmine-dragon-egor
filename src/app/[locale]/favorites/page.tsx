"use client";

import { useState } from "react";
import { Pagination, CardsList, Likeitems, ToggleView } from "@/components";
import { mock } from "@/config/constants";
import Pagination2 from "@/components/Pagination2/Pagination2";

const SelectedMenu = () => {
  const [isHorizontal, setIsHorizontal] = useState(true);
  const data = mock;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };
  // Вычисляем текущие элементы для отображения
  const itemsPerPage = 3;
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  return (
    <>
      {/* <div className="section3"> */}
      <div className="container !pb-0 !pt-[50px]">
        <h4 className="col-span-half">Избранное</h4>
        <ToggleView
          isHorizontal={isHorizontal}
          toggleView={setIsHorizontal}
          className="col-span-half"
        />
      </div>
      <CardsList
        isHorizontal={isHorizontal}
        cardsData={currentPageData}
        className="!pt-[50px]"
      />
      {/* <Likeitems /> */}
      <Pagination2
        pageCount={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageClick}
        currentPage={currentPage}
      />
      {/* </div> */}
    </>
  );
};

export default SelectedMenu;
