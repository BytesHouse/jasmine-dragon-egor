import React from "react";
import { mock3, mock4 } from "../../config/constants";
import Dropdown from "../../ui-kit/Dropdown/Dropdown";
import Dropdownnumbers from "../../ui-kit/Dropdownnumbers/Dropdownnumbers";
import Filter from "../../ui-kit/Filter/Filter";

const Sort = ({ itemsPerPage, setItemsPerPage }) => {
  return (
    <div className="flex justify-between flex-grow _1600:gap-[20px] _1240:gap-[25px]">
      <Filter />
      <div className="flex items-center gap-[20px] ">
        <p className="p1 _1240:p2">Сортировка по</p>
        <Dropdown array={mock3} />
      </div>
      <div className="flex items-center gap-[20px]">
        <p className="p1 _1240:p2">Показывать по</p>
        <Dropdownnumbers
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  );
};

export default Sort;
