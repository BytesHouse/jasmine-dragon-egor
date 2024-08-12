"use client";
import { ItemCard, ItemCardHorizontal } from "@/components";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { getFavoritesList } from "@/utils/favoritesTools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardsList = ({
  isHorizontal = true,
  cardsData,
  id = "cardsList",
  ...props
}) => {
  const { addToCart } = useProductCart();
  return (
    <>
      <ul
        className={`container ${props?.className} _768:!gap-x-[15px] _768:!gap-y-[25px]`}
        id={id}
      >
        {isHorizontal
          ? cardsData?.map((item, index) => (
              <ItemCard
                key={item.id}
                item={item}
                isFavorite={getFavoritesList().includes(item.id)}
                onClick={addToCart}
              />
            ))
          : cardsData?.map((item, index) => (
              <ItemCardHorizontal
                key={item.id}
                isFavorite={getFavoritesList().includes(item.id)}
                item={item}
                onClick={addToCart}
              />
            ))}
      </ul>
    </>
  );
};

export default CardsList;
