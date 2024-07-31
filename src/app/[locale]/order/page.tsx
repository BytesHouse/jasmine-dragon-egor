"use client";

import { CheckForOrders } from "@/components";
import { Edit, ProfileDeco } from "@/ui-kit/icons";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormDataEmail = {
  // cardNumber: string;
  // expirationDate: string;
  // cvv: string;
  fullName: string;
  country: string;
  city: string;
  address: string;
  // index: string;
  email: string;
  // message: string;
};

const Order = () => {
  const { productsList, removeFromCart } = useProductCart();
  const { register, handleSubmit } = useForm<FormDataEmail>();

  function onSubmit(data: FormDataEmail) {
    sendEmail(data);
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} className="container !py-[50px]">
        <div className="col-span-half flex flex-col gap-[25px] _1240:col-span-full">
          {/* <div className="flex flex-col gap-[25px] p-[25px] border border-blue h-max _768:p-[15px]">
            <h4 className="simple font-semibold _768:text-h5">Ваши данные</h4>
            <div className="flex gap-[15px]">
              <label className="text-p1 font-semibold text-blue-light flex-grow _491:text-p2">
                Номер карты
                <input
                  type="text"
                  className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
                />
              </label>
              <label className="text-p1 font-semibold text-blue-light flex-grow _491:text-p2">
                Дата окончания
                <input
                  type="month"
                  className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
                />
              </label>
            </div>
            <label className="text-p1 font-semibold text-blue-light _491:text-p2">
              CVV
              <input
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
              />
            </label>
            <label className="text-p1 font-semibold text-blue-light _491:text-p2">
              Имя Фамилия
              <input
                {...register("fullName", { required: true })}
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
              />
            </label>
          </div> */}
          <div className="flex flex-col gap-[25px] p-[25px] border border-blue h-max _768:p-[15px]">
            <h4 className="simple font-semibold _768:text-h5">
              Адрес доставки
            </h4>
            <label className="text-p1 font-semibold text-blue-light _491:text-p2">
              Имя Фамилия
              <input
                {...register("fullName", { required: true })}
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
              />
            </label>
            <div className="flex gap-[15px]">
              <label className="text-p1 font-semibold text-blue-light flex-grow _491:text-p2">
                Страна / Регион
                <input
                  {...register("country")}
                  type="text"
                  className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
                  placeholder="Молдова"
                  value="Молдова"
                  disabled
                />
              </label>
              <label className="text-p1 font-semibold text-blue-light flex-grow _491:text-p2">
                Город
                <input
                  {...register("city")}
                  type="text"
                  className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
                  placeholder="Кишинёв"
                  value="Кишинёв"
                  disabled
                />
              </label>
            </div>
            <label className="text-p1 font-semibold text-blue-light _491:text-p2">
              Адрес
              <input
                {...register("address", { required: true })}
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
              />
            </label>
            {/* <label className="text-p1 font-semibold text-blue-light _491:text-p2">
              Почтовый код
              <input
                type="text"
                className="w-full block mt-[15px] p-[15px] bg-[var(--green-light)] border border-blue-light focus:bg-green-bg focus:outline-none"
              />
            </label> */}
          </div>
          {/* послдение адреса */}
          <div className="flex items-start border border-blue h-max p-[15px] gap-[15px]">
            <ProfileDeco />
            <div className="flex-grow">
              <p className="p1 font-semibold mb-[10px]">Cookie killer</p>
              <p className="p2 _491:p3">
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
          isOrder
          isWithOrders={true}
          products={productsList}
          deleteProd={removeFromCart}
        />
      </form>
    </main>
  );
};

export default Order;
