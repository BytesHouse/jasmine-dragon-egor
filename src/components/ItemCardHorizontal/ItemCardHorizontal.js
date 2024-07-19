import Image from "next/image";
import { Cart, ChooseHeart2 } from "@/ui-kit/icons";
const image = "/assets/Images/tea-mock.png";

const ItemCardHorizontal = (item) => {
  const { name, description, price } = item;

  return (
    <div className="col-span-full flex p-[25px] gap-[50px] border border-green-bg items-center transition hover:border-blue hover:bg-green-light">
      <div className="relative max-w-[250px] w-full">
        <Image
          src={image}
          alt="teagreen"
          width={250}
          height={250}
          className="h-auto w-full"
        />
        <ChooseHeart2 className="absolute right-[0px] top-[20px] hover:fill-blue-light" />
      </div>
      <div className="flex flex-col gap-[25px] max-w-[463px]">
        <div>
          <h4 className="mb-4">{name}</h4>
          {description && <p className="p1">{description}</p>}
        </div>
        <div>
          <span className="text-h5 font-semibold text-blue-light">
            {price} Lei
          </span>
          <span className="discount ml-[15px]">{price} Lei</span>
        </div>
        <button className="hidden _1240:flex max-w-max items-center gap-[25px] border-2 border-blue-light text-h5 text-blue-light bg-green-light font-semibold p-[25px_100px] _1600:p-[25px_50px]">
          <Cart />
          <span>В корзину</span>
        </button>
      </div>
      <div className="_1240:hidden flex-grow flex justify-end">
        <button className="flex items-center gap-[25px] border-2 border-blue-light text-h5 text-blue-light bg-green-light font-semibold p-[25px_100px] _1600:p-[25px_50px]">
          <Cart />
          <span>В корзину</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCardHorizontal;
