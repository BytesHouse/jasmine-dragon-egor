import React from "react";
import { mock3, mock4 } from "../../config/constants";
import Dropdown from "../../ui-kit/Dropdown/Dropdown";
import Dropdownnumbers from "../../ui-kit/Dropdownnumbers/Dropdownnumbers";
import Filter from "../../ui-kit/Filter/Filter";
import { useTranslations } from "next-intl";

const Sort = ({ itemsPerPage, setItemsPerPage }) => {
  const t = useTranslations("Menu");
  return (
    <>
      {/* <div className="flex justify-between flex-grow _1600:gap-[20px] _1240:gap-[25px] _768:flex-wrap _768:gap-[10px]"> */}
      <Filter />
      <div className="flex items-center gap-[20px] _768:gap-[10px]">
        <p className="p1 _1240:p2 _768:p3">{t("sortBy")}</p>
        <Dropdown array={mock3} />
      </div>
      <div className="flex items-center gap-[20px] _1024:order-last _768:gap-[10px]">
        <p className="p1 _1240:p2 _768:p3">{t("showBy")}</p>
        <Dropdownnumbers
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default Sort;
