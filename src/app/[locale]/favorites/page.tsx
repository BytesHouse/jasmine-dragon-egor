"use client";

import { useState } from "react";
import { Pagination, CardsList, Likeitems, ToggleView } from "@/components";
import { mock, mock2 } from "@/config/constants";
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
    <main className="container !pt-[50px]">
      {/* <div className="section3"> */}
      <h4 className="col-span-half">Избранное</h4>
      <ToggleView
        isHorizontal={isHorizontal}
        toggleView={setIsHorizontal}
        className="col-span-half"
      />
      <CardsList
        isHorizontal={isHorizontal}
        cardsData={mock2}
        className="!py-0 col-span-full"
      />
      {/* <Likeitems /> */}
      <h4 className="col-span-full mt-[100px]">Вам также может понравиться</h4>
      <CardsList cardsData={currentPageData} className="!py-0 col-span-full" />
      <Pagination2
        pageCount={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageClick}
        currentPage={currentPage}
        className="col-span-full"
      />
      {/* </div> */}
    </main>
  );
};

export default SelectedMenu;
