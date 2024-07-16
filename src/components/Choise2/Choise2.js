import { mock } from "../../config/constants";
import { Wagon } from "../../ui-kit/icons";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import ChooseHeart2 from "@/ui-kit/icons/ChooseHeart/ChooseHeart2";

const Choise2 = () => {
  return (
    // <div className="choise2">
    <div className="container !gap-[25px] !pt-0">
      {mock.map((item) => (
        <div key={Math.random()} className="choosen2 col-span-full">
          <Image src={item.image} alt="teagreen" width={250} height={250} />
          <ChooseHeart2 />
          <div className="flex flex-col gap-[25px] max-w-[463px]">
            <div>
              <h4 className="mb-4">{item.title}</h4>
              <p className="p1">{item.description}</p>
            </div>
            <div>
              <span className="price2">{item.price}</span>
              <span className="discount2">{item.price}</span>
            </div>
          </div>
          <div className="flex-grow flex justify-end">
            <button className="buttonchoise2">
              <Wagon />
              <span>В корзину</span>
            </button>
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default Choise2;
