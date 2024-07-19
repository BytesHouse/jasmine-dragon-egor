// import green from '../../assets/Images/greentea.png'
// import black from '../../assets/Images/teagreen.png'

import Image from "next/image";

const Store = () => {
  return (
    // <div className="store">
    <div className="container">
      <h4 className="col-span-full">Магазин</h4>
      <div className="col-span-half flex flex-col gap-8 p-[50px] border border-blue-light transition hover:bg-green-light hover">
        <Image
          className="w-full aspect-square"
          src="/assets/Images/teagreen.png"
          alt="teagreen"
          width={607}
          height={607}
        />

        <h4 className="text-center">Чай на развес</h4>
        <p className="p1">
          Наша дружелюбная команда с удовольствием поможет вам выбрать именно
          тот чай, который подходит вам.
        </p>
        <button className="p-[25px] border-2 text-h5 font-Playfair-Display italic font-medium text-blue-light text-center w-full">
          Смотреть ассортимент
        </button>
      </div>
      <div className="col-span-half flex flex-col gap-8 p-[50px] border border-blue-light transition hover:bg-green-light hover">
        <Image
          className="w-full aspect-square"
          src="/assets/Images/greentea.png"
          alt="greentea"
          width={607}
          height={607}
        />
        <h4 className="text-center">Посуда</h4>
        <p className="p1">
          Наша дружелюбная команда с удовольствием поможет вам выбрать именно
          тот чай, который подходит вам.
        </p>
        <button className="p-[25px] border-2 text-h5 font-Playfair-Display italic font-medium text-blue-light text-center w-full">
          Смотреть ассортимент
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Store;
