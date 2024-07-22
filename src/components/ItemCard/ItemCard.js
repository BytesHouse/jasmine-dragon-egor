import Image from "next/image";
import Cart from "../../ui-kit/icons/Cart/Cart";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";
const image = "/assets/Images/tea-mock.png";

const ItemCard = ({ item, onClick }) => {
  const { name, description, price, id } = item;
  return (
    <div
      key={Math.random()}
      className="col-span-third _1240:col-span-half flex flex-col p-[25px] gap-8 border border-green-bg transition hover:bg-green-light hover:border-blue"
    >
      <div className="relative">
        <Image
          src={image}
          alt="teagreen"
          width={413}
          height={413}
          className="h-auto"
        />
        <ChooseHeart className="absolute top-[15px] right-[15px] hover:fill-blue-light" />
      </div>
      <h4>{name}</h4>
      {description && <p className="p1">{description}</p>}
      <div className="flex-grow w-full flex flex-col justify-end gap-[15px]">
        <div className="flex items-center w-full gap-[15px]">
          <span className="text-h5 font-Nunito-Sans text-blue-light font-semibold">
            {price} Lei
          </span>
          <span className="discount">{price} Lei</span>
        </div>
        <button onClick={() => onClick(item)} className="buttonchoise w-full">
          <Cart />
          <span className="text-h5 font-Nunito-Sans simple font-semibold">
            В корзину
          </span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
