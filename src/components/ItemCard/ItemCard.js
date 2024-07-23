"use client";

import Image from "next/image";
import Cart from "../../ui-kit/icons/Cart/Cart";
import ChooseHeart from "../../ui-kit/icons/ChooseHeart/ChooseHeart";
import { ChooseHeartMini } from "@/ui-kit/icons";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useLocale } from "next-intl";
const image = "/assets/Images/tea-mock.png";
import Link from 'next/link'

const ItemCard = ({ item, onClick }) => {
  const width = useScreenWidth();
  const lang = useLocale();
  const { name, description, price, id } = item;
  const handleClickAddToCart = (e) => {
    e.stopPropagation();
    onClick(item)
  }
  return (
    <div
      key={Math.random()}
      className="col-span-third _1240:col-span-half flex flex-col p-[25px] gap-8 border border-green-bg transition hover:bg-green-light hover:border-blue _768:gap-4 _768:p-[10px]"
    >
      <Link href={lang + `/teas/${id}`}>
        <div className="relative">
          <Image
            src={image}
            alt="teagreen"
            width={413}
            height={413}
            className="h-auto"
          />
          <ChooseHeart
            isMini={width < 768}
            className="absolute top-[15px] right-[15px] hover:fill-blue-light _768:top-[5px] _768:right-[5px]"
          />
        </div>
        <h4 className="_768:!text-p1">{name}</h4>
        {description && <p className="p1 _768:p3">{description}</p>}
        <div className="flex-grow w-full flex flex-col justify-end gap-[15px]">
          <div className="flex items-center w-full gap-[15px]">
            <span className="text-h5 font-Nunito-Sans text-blue-light font-semibold _768:text-p2">
              {price} Lei
            </span>
            <span className="discount _768:text-[10px]">{price} Lei</span>
          </div>
          <button onClick={handleClickAddToCart} className="buttonToCart1">
            <Cart isMini={width < 768} />
            <span className="text-h5 font-Nunito-Sans simple font-semibold _768:text-p3">
              В корзину
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
