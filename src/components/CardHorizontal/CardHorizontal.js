import Image from "next/image";
import Cart from "../../ui-kit/icons/Cart/Cart";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";

const CardHorizontal = (item) => {
  const { image, title, description, price } = item;
  return (
    <div key={Math.random()} className="choosen col-span-third">
      <Image src={image} alt="teagreen" width={413} height={413} />
      <ChooseHeart />
      <h4>{title}</h4>
      <p className="p1">{description}</p>
      <div className="flex items-center w-full gap-[15px]">
        <span className="text-h5 font-Nunito-Sans text-blue-light font-semibold">
          {price}
        </span>
        <span className="discount">{price}</span>
      </div>
      <button className="buttonchoise w-full">
        <Cart />
        <span className="text-h5 font-Nunito-Sans simple font-semibold">
          В корзину
        </span>
      </button>
    </div>
  );
};

export default CardHorizontal;
