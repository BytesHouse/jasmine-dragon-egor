// import green from '../../assets/Images/greentea.png'
// import black from '../../assets/Images/teagreen.png'
"use client";

import useScreenWidth from "@/hooks/useScreenWidth";
import Image from "next/image";

const Store = () => {
  const width = useScreenWidth();
  return (
    // <div className="store">
    <div className="container !gap-x-3 !gap-y-[25px]" id="store">
      <h4 className="col-span-full">Магазин</h4>
      <div className="col-span-half flex flex-col gap-8 p-[50px] border border-blue-light transition hover:bg-green-light _1600:gap-[25px] _1240:p-[25px] _768:p-[10px] _768:gap-[15px]">
        <Image
          className="w-full aspect-square"
          src="/assets/Images/teagreen.png"
          alt="teagreen"
          width={607}
          height={607}
        />

        <h4 className="text-center _768:text-p1 _768:text-left">
          Чай на развес
        </h4>
        <p className="p1 _768:p2">
          Наша дружелюбная команда с удовольствием поможет вам выбрать именно
          тот чай, который подходит вам.
        </p>
        <button className="p-[25px] border-2 text-h5 font-Playfair-Display italic font-medium text-blue-light text-center w-full _1024:text-p1 _768:p-[10px]">
          Смотреть {width > 767 && "ассортимент"}
        </button>
      </div>
      <div className="col-span-half flex flex-col gap-8 p-[50px] border border-blue-light transition hover:bg-green-light _1600:gap-[25px] _1240:p-[25px] _768:p-[10px] _768:gap-[15px]">
        <Image
          className="w-full aspect-square"
          src="/assets/Images/greentea.png"
          alt="greentea"
          width={607}
          height={607}
        />
        <h4 className="text-center _768:text-p1 _768:text-left">Посуда</h4>
        <p className="p1 _768:p2">
          Наша дружелюбная команда с удовольствием поможет вам выбрать именно
          тот чай, который подходит вам.
        </p>
        <button className="p-[25px] border-2 text-h5 font-Playfair-Display italic font-medium text-blue-light text-center w-full _1024:text-p1 _768:p-[10px] ">
          Смотреть {width > 767 && "ассортимент"}
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Store;
