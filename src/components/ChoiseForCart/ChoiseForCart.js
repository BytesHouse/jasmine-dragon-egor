"use client";
import { mock } from "@/config/constants";
// import cancelation from "..//..//assets/Images/Cancelation.svg";
import Counter from "../../ui-kit/Counter/Counter";
import Cancelation from "../../ui-kit/icons/Cancelation/Cancelation";
import Image from "next/image";
import OrderListItem from "../OrderListItem/OrderListItem";
import { useProductCart } from "../Providers/ProductCartProvider";

const ChoiseForCart = () => {
  const { productsList, removeFromCart } = useProductCart();
  return (
    <div className="col-span-7 flex flex-col gap-25 relative gap-[25px] max-w-[840px]">
      {productsList.length ? (
        productsList.map((item, index) => (
          <OrderListItem deleteProd={removeFromCart} item={item} key={index} />
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center text-h3 font-Nunito-Sans text-blue-light">
          Пусто
        </div>
      )}
    </div>
  );
};

export default ChoiseForCart;
