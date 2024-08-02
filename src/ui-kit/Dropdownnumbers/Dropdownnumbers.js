"use client";

import { useState, useEffect } from "react";
// import { Arrowdown, Arrowup } from "../icons";
import Strelka from "../icons/Strelka/Strelka";

const Dropdownnumbers = ({ itemsPerPage, setItemsPerPage }) => {
  const itemsShowBy = [6, 9, 12];

  const [isShow, setIshow] = useState(false);
  // const [choice, setChoice] = useState(itemsShow);

  const handleChangeIsShow = () => setIshow(!isShow);

  const handleChangeChoice = (item) => {
    setItemsPerPage(item);
    setIshow(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setIshow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-10 dropdown flex items-center justify-center bg-[var(--green-light)] p-4 _768:p-3 border border-[var(--blue-light)] font-Nunito-Sans text-[var(--blue-light)] relative">
      <div
        className="flex gap-[15px] _768:text-p2"
        onClick={handleChangeIsShow}
      >
        {itemsPerPage}
        <Strelka
          className={`transition ${isShow && "rotate-90"}`}
          isMini={true}
        />
      </div>
      {isShow && (
        <ul className="absolute top-[100%] -left-px w-[102%]">
          {itemsShowBy.map((item, index) => (
            <li
              className="hover:bg-[var(--blue)] border border-[var(--blue-light)] bg-[var(--green-light)] p-[15px] _768:text-p2"
              onClick={() => handleChangeChoice(item)}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdownnumbers;
