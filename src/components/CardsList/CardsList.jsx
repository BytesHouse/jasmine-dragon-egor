"use client";
import { ItemCard, ItemCardHorizontal } from "@/components";
import { useProductCart } from "@/components/Providers/ProductCartProvider";

const CardsList = ({
  isHorizontal = true,
  cardsData,
  id = "cardsList",
  ...props
}) => {
  const { addToCart } = useProductCart();
  return isHorizontal ? (
    <div
      className={`container ${props?.className} _768:!gap-x-[15px] _768:!gap-y-[25px]`}
      id={id}
    >
      {cardsData?.map((item, index) => (
        <ItemCard key={index} item={item} onClick={addToCart} />
      ))}
    </div>
  ) : (
    // <Choise itemsPerPage={itemsPerPage} />
    <div className={`container !gap-[25px] ${props?.className}`} id={props?.id}>
      {cardsData?.map((item, index) => (
        <ItemCardHorizontal key={index} {...item} />
      ))}
      {/* <Pagination /> */}
    </div>
    // <Choise2 />
  );
};

export default CardsList;
