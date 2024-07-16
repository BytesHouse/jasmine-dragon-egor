"use client";

import { useEffect, useState } from "react";
import Sort from "../Sort/Sort";
import ChocoMenu from "@/ui-kit/icons/ChocoMenu/ChocoMenu";
import LineMenu from "@/ui-kit/icons/LineMenu/LineMenu";
import CloseMini from "../../ui-kit/icons/CloseMini/CloseMini";
import { mock } from "@/config/constants";
import Pagination2 from "../Pagination2/Pagination2";
import ItemCard from "../ItemCard/ItemCard";
import ItemCardHorizontal from "../ItemCardHorizontal/ItemCardHorizontal";

const Filters = () => {
  const [isHorizontal, setIsHorizontal] = useState(true); // Состояние для отслеживания текущего вида товаров
  const [isActive, setIsActive] = useState(false);
  const toggleHorizontalView = () => {
    setIsHorizontal(true);
    toggleActive(); // Установка горизонтального вида
  };
  const toggleVerticalView = () => {
    setIsHorizontal(false);
    toggleActive();
  };

  // Состояние активности
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  // ==================================================
  const initialItemsPerPage = 6;
  const data = mock;

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };

  // const handleItemsPerPageChange = (event) => {
  //   setItemsPerPage(Number(event.target.value));
  //   setCurrentPage(0); // Сбрасываем текущую страницу при изменении количества элементов на странице
  // };

  // Вычисляем текущие элементы для отображения
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  return (
    <>
      <div className="container !gap-[25px] !py-[50px]">
        <div className="flex justify-between flex-row gap-12 col-span-full">
          <Sort itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
          <div className="thelastsort">
            <p className="psortmenu">Вид товара:</p>
            <button
              onClick={toggleHorizontalView}
              className="thelastsvg"
              id="margin20px"
            >
              <ChocoMenu state={isHorizontal} />
            </button>
            <button onClick={toggleVerticalView} className="thelastsvg">
              <LineMenu state={!isHorizontal} />
            </button>
          </div>
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
      {isHorizontal ? (
        <div className="container !pt-0 ">
          {currentPageData.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </div>
      ) : (
        // <Choise itemsPerPage={itemsPerPage} />
        <div className="container !gap-[25px] !pt-0">
          {currentPageData.map((item, index) => (
            <ItemCardHorizontal key={index} {...item} />
          ))}
          {/* <Pagination /> */}
        </div>
        // <Choise2 />
      )}
      <Pagination2
        pageCount={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
};
export default Filters;
