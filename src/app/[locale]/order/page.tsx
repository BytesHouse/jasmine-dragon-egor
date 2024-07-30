"use client";

import { CheckForOrders } from "@/components";
import { Edit, ProfileDeco } from "@/ui-kit/icons";
import { useProductCart } from "@/components/Providers/ProductCartProvider";

const Order = () => {
  const { productsList, removeFromCart } = useProductCart();

  return (
    <main className="container !py-[50px]">
      <div className="col-span-half flex flex-col gap-[25px] _1240:col-span-full">
        <div className="flex flex-col gap-[25px] p-[25px] border border-blue h-max">
          <h4 className="simple font-semibold">Ваши данные</h4>
          <div className="flex gap-[15px]">
            <label className="text-p1 font-semibold text-blue-light flex-grow">
              Номер карты
              <input
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
              />
            </label>
            <label className="text-p1 font-semibold text-blue-light flex-grow">
              Дата окончания карты
              <input
                type="month"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
              />
            </label>
          </div>
          <label className="text-p1 font-semibold text-blue-light">
            CVV
            <input
              type="text"
              className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
            />
          </label>
          <label className="text-p1 font-semibold text-blue-light">
            Имя Фамилия
            <input
              type="text"
              className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
            />
          </label>
        </div>
        <div className="flex flex-col gap-[25px] p-[25px] border border-blue h-max">
          <h4 className="simple font-semibold">Адрес доставки</h4>
          <div className="flex gap-[15px]">
            <label className="text-p1 font-semibold text-blue-light flex-grow">
              Страна / Регион
              <input
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
                placeholder="Молдова"
                disabled
              />
            </label>
            <label className="text-p1 font-semibold text-blue-light flex-grow">
              Город
              <input
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
                placeholder="Кишинёв"
                disabled
              />
            </label>
          </div>
          <label className="text-p1 font-semibold text-blue-light">
            Адрес
            <input
              type="text"
              className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
            />
          </label>
          <label className="text-p1 font-semibold text-blue-light">
            Почтовый код
            <input
              type="text"
              className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
            />
          </label>
        </div>
        {/* послдение адреса */}
        <div className="flex items-start border border-blue h-max p-[15px] gap-[15px]">
          <ProfileDeco />
          <div className="flex-grow">
            <p className="p1 font-semibold mb-[10px]">Cookie killer</p>
            <p className="p2">
              Strada Grivitei 286, Braila, Braila, 810040, 
              <br />
              România, +40771050788.
            </p>
          </div>
          <button>
            <Edit />
          </button>
        </div>
      </div>
      <CheckForOrders
        isWithOrders={true}
        products={productsList}
        deleteProd={removeFromCart}
      />
    </main>
  );
};

export default Order;
