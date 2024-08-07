"use client";
import { ItemCard, ItemCardHorizontal } from "@/components";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { getFavoritesList } from "@/utils/favoritesTools";

const CardsList = ({
  isHorizontal = true,
  cardsData,
  id = "cardsList",
  ...props
}) => {
  const { addToCart } = useProductCart();
  return isHorizontal ? (
    <ul
      className={`container ${props?.className} _768:!gap-x-[15px] _768:!gap-y-[25px]`}
      id={id}
    >
      {cardsData?.map((item, index) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavorite={getFavoritesList().includes(item.id)}
          onClick={addToCart}
        />
      ))}
    </ul>
  ) : (
    // <Choise itemsPerPage={itemsPerPage} />
    <ul className={`container !gap-[25px] ${props?.className}`} id={props?.id}>
      {cardsData?.map((item, index) => (
        <ItemCardHorizontal
          key={item.id}
          isFavorite={getFavoritesList().includes(item.id)}
          item={item}
          onClick={addToCart}
        />
      ))}
      {/* <Pagination /> */}
    </ul>
    // <Choise2 />
  );
};

export default CardsList;
