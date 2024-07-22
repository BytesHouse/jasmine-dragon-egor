"use client";

import React, { useState, useEffect } from "react";

const Dropdown = ({ array }) => {
  const [isShow, setIsShow] = useState(false);
  const [choice, setChoice] = useState(array[0] || "Значение по умолчанию");

  const handleChangeIsShow = () => setIsShow(!isShow);

  const handleChangeChoice = (item) => {
    setChoice(item);
    setIsShow(false);
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
    <div className="z-10 dropdown flex items-center justify-center bg-[var(--green-light)] w-[300px] border border-[var(--blue-light)] [&>div] font-[var(--Nunito-sans)] text-[var(--blue-light)] relative [&_li]:border [&_li]:border-[var(--blue-light)] [&_li]:p-4 [&_ul]:absolute _1600:w-[260px] _768:w-[169px]">
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
            className="flex items-center justify-center gap-[15px] py-4 w-full relative _768:text-p3  _768:p-[10px]"
            onClick={handleChangeIsShow}
          >
            {choice.title}
            {choice.icon}
          </div>
          {isShow && (
            <ul className="w-full top-[100%]">
              {array.map((item) => (
                <li
                  className="flex gap-[15px] items-center justify-center hover:bg-[var(--blue)] w-full border border-[var(--blue-light)] bg-[var(--green-light)] _768:text-p3 _768:p-[10px] z-10"
                  onClick={() => handleChangeChoice(item)}
                  key={item.id}
                >
                  {item.title}
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
