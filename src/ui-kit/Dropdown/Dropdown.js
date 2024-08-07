"use client";

import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

const Dropdown = ({ array, setSortFunc }) => {
  const t = useTranslations("Sort");
  const [isShow, setIsShow] = useState(false);
  const [choice, setChoice] = useState(array[0] || "Значение по умолчанию");
  setSortFunc(() => array[0].sortFunc);

  const handleChangeIsShow = () => setIsShow(!isShow);

  const handleChangeChoice = (item) => {
    setChoice(item);
    setIsShow(false);
    // console.log(item.sortFunc);
    setSortFunc(() => item.sortFunc);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-10 dropdown flex items-center justify-center bg-[var(--green-light)] w-[300px] border border-[var(--blue-light)] font-Nunito-Sans text-[var(--blue-light)] relative [&_ul]:absolute _1600:max-w-[260px] _768:max-w-[169px] _768:w-auto">
      {typeof array[0] === "string" ? (
        <div>
          <div onClick={handleChangeIsShow}>{choice}</div>
          {isShow && (
            <ul>
              {array.map((item, index) => (
                <li onClick={() => handleChangeChoice(item)} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <>
          <div
            className="flex items-center justify-center gap-[15px] py-4 w-full relative _768:text-p3 _768:p-[10px]"
            onClick={handleChangeIsShow}
          >
            {/* {choice.title} */}
            {t(choice.value)}
            {choice.icon}
          </div>
          {isShow && (
            <ul className="w-[calc(100%+2px)] top-[100%] z-10">
              {array.map((item) => (
                <li
                  className="flex gap-[15px] items-center justify-center hover:bg-[var(--blue)] border first:border-t border-t-0 border-[var(--blue-light)] bg-[var(--green-light)] _768:text-p3 _768:p-[10px] p-[10px]"
                  onClick={() => handleChangeChoice(item)}
                  key={item.id}
                >
                  {/* {item.title} */}
                  {t(item.value)}
                  {item.icon}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Dropdown;
