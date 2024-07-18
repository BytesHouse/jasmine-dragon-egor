"use client";
import { useState } from "react";

import { mock } from "@/config/constants";
import { Agreements, OrderListItem } from "@/components";
import Image from "next/image";
import { Strelka, EnterPromocode } from "@/ui-kit/icons";
// import checkboxdone from "../../../public/assets/Images/Checkdone.svg";

const CheckForOrders = ({ isWithOrders = false }) => {
  const [isShowOrders, setIsShowOrders] = useState(false);

  return (
    <div
      className={`${
        isWithOrders ? "col-span-half" : "col-span-5 max-w-[555px]"
      } w-full justify-self-end flex flex-col h-max p-[25px]  bg-[var(--green-light)] gap-[25px] relative`}
    >
      <div className="flex">
        <h4 className="font-semibold simple">Ваши товары</h4>
        {isWithOrders && (
          <button
            className={`${
              isShowOrders ? "-rotate-180" : "rotate-0"
            } transition`}
            onClick={() => setIsShowOrders(!isShowOrders)}
          >
            <Strelka />
          </button>
        )}
      </div>
      {isShowOrders && (
        <div className="max-h-[470px] overflow-y-scroll flex flex-col gap-[25px] pr-[25px]">
          {mock.map((item, index) => (
            <OrderListItem item={item} key={index} isSmall={true} />
          ))}
        </div>
      )}
      <p className="font-semibold">В корзине 10 товаров</p>
      <div className="flex flex-row justify-between items-center">
        <h5 className="simple font-bold w-auto">Сумма Покупок</h5>
        <p className="p1 font-semibold">2,194.45 Lei</p>
      </div>
      {/* <div className="flex flex-row justify-between items-center">
        <h5 className="simple font-bold w-auto">Скидка</h5>
        <p className="p1 font-semibold">0.25 Lei</p>
      </div> */}
      {/* <label className="text-h5 text-blue-light font-semibold">
        Ввести промо код
      </label>
      <div className="border border-blue-light bg-[var(--green-light)] p-[25px] pr-[40px] flex justify-between gap-[25px]">
        <input
          className="focus:outline-none placeholder:text-blue-light bg-green-light flex-grow"
          type="text"
          placeholder="Введите промо код"
        />
        <EnterPromocode />
      </div> */}
      <div className="flex flex-row justify-between items-center">
        <h5 className="simple font-bold w-auto">Доставка</h5>
        <p className="p1 font-semibold">Бесплатно</p>
      </div>
      <div className="flex flex-row justify-between items-center border-t border-b py-[25px] border-blue-light">
        <h4 className="w-auto font-medium">Итого</h4>
        <h4 className="font-bold simple w-auto">2,194.45 Lei</h4>
      </div>
      <Agreements />
      <button className="flex flex-row justify-center bg-[var(--blue)] gap-[25px] items-center font-bold text-center p-[25px] text-blue-light text-h5">
        <Image
          src="/assets/Images/Checkdone.svg"
          alt="done"
          width={36}
          height={36}
        />
        Подтвердить
      </button>
    </div>
  );
};

export default CheckForOrders;
