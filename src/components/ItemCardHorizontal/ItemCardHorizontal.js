import Image from "next/image";
import Cart from "../../ui-kit/icons/Cart/Cart";
import ChooseHeart2 from "../../ui-kit/icons/ChooseHeart/ChooseHeart2";

const ItemCardHorizontal = (item) => {
  const { image, title, description, price } = item;

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
        <ChooseHeart2 className="absolute right-[15px] top-[15px]" />
      </div>
      <div className="flex flex-col gap-[25px] max-w-[463px]">
        <div>
          <h4 className="mb-4">{title}</h4>
          <p className="p1">{description}</p>
        </div>
        <div>
          <span className="text-h5 font-semibold text-blue-light">{price}</span>
          <span className="discount ml-[15px]">{price}</span>
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
