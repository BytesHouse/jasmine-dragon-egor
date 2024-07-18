import { mock } from "@/config/constants";
// import cancelation from "..//..//assets/Images/Cancelation.svg";
import Counter from "../../ui-kit/Counter/Counter";
import ChooseHeart2 from "../../ui-kit/icons/ChooseHeart/ChooseHeart2";
import Cancelation from "../../ui-kit/icons/Cancelation/Cancelation";
import Image from "next/image";
import OrderListItem from "../OrderListItem/OrderListItem";

const ChoiseForCart = () => {
  return (
    <div className="col-span-7 flex flex-col gap-25 relative gap-[25px] max-w-[840px]">
      {mock.map((item, index) => (
        <OrderListItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ChoiseForCart;
