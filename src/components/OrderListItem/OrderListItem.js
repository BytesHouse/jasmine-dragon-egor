import { ChooseHeart2, Cancelation } from "@/ui-kit/icons";
import Counter from "@/ui-kit/Counter/Counter";
import Image from "next/image";

const OrderListItem = ({ isSmall = false, item, deleteProd }) => {
  const { name, price, description, id } = item;
  return (
    <div
      className={`flex  ${isSmall
        ? "p-[15px] border-[var(--blue-light)] gap-[25px]"
        : "p-[25px] border-[var(--green-bg)] hover:border-[var(--blue-light)] transition duration-300 ease-in-out gap-[50px]"
        } border  items-center`}
    >
      <div
        className={`relative ${isSmall ? "max-w-[187px]" : "max-w-[250px]"
          } w-full`}
      >
        <Image
          // className="svgchoise2"
          src={'/assets/images/'}
          alt="teagreen"
          height={isSmall ? 187 : 250}
          width={isSmall ? 187 : 250}
        />
        {!isSmall && (
          <ChooseHeart2 className="absolute top-[15px] right-[15px]" />
        )}
      </div>
      <div className="flex flex-col gap-[25px]">
        <h4 className="font-medium">{name}</h4>
        {!isSmall && <p className="p1">{description}</p>}
        <Counter />
        <div className="flex mt-[15px] flex-row gap-[15px] items-center not-italic ">
          <h5 className="font-semibold simple w-auto">{price}</h5>
          <span className="discount">{price}</span>
        </div>
      </div>
      <div className="flex-grow flex justify-end">
        <button onClick={() => deleteProd(id)}>
          <Cancelation isMini={true} />
        </button>
      </div>
    </div>
  );
};

export default OrderListItem;
