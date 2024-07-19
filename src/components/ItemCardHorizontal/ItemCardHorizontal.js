import Image from "next/image";
import { Cart, ChooseHeart2 } from "@/ui-kit/icons";
const image = "/assets/Images/tea-mock.png";

const ItemCardHorizontal = (item) => {
  const { name, description, price } = item;

  return (
    <div className="choosen2 col-span-full">
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
      </div>
      <div className="flex-grow flex justify-end">
        <button className="buttonchoise2">
          <Cart />
          <span>В корзину</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCardHorizontal;
