import { mock2 } from "@/config/constants";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";
import Cart from "../../ui-kit/icons/Cart/Cart";
import Pagination from "../Pagination/Pagination";
import Image from "next/image";
import ItemCard from "../ItemCard/ItemCard";

const Hotsales = () => {
  return (
    <div className="mt-[200px] container">
      <h4 className="col-span-full">Хиты продаж</h4>
      <div className="options col-span-full">
        <button className="buttonhotsale">Меню</button>
        <button className="buttonhotsale">Чаи</button>
        <button className="buttonhotsale">Посуда</button>
      </div>
      {mock2.slice(0, 3).map((item) => (
        <ItemCard {...item} />
      ))}
      <Pagination />
    </div>
  );
};

export default Hotsales;
